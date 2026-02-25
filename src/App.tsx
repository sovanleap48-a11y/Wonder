/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Weight, 
  Container, 
  Ruler, 
  Square, 
  Thermometer, 
  Gauge, 
  Zap, 
  Activity, 
  Waves, 
  Droplets, 
  FlaskConical, 
  Beaker,
  ChevronLeft,
  RotateCcw,
  History as HistoryIcon,
  Languages,
  Info,
  Calculator
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Category, ConversionHistory } from './types';
import { CATEGORIES, TRANSLATIONS } from './constants';

const ICON_MAP: Record<string, any> = {
  Weight,
  Container,
  Ruler,
  Square,
  Thermometer,
  Gauge,
  Zap,
  Activity,
  Waves,
  Droplets,
  FlaskConical,
  Beaker
};

export default function App() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnitId, setFromUnitId] = useState<string>('');
  const [toUnitId, setToUnitId] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<ConversionHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const savedHistory = localStorage.getItem('unit_converter_history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('unit_converter_history', JSON.stringify(history));
  }, [history]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setFromUnitId(category.units[0].id);
    setToUnitId(category.units[1]?.id || category.units[0].id);
    setInputValue('');
    setResult(null);
  };

  const handleCalculate = () => {
    if (!selectedCategory || inputValue === '') return;

    const val = parseFloat(inputValue);
    if (isNaN(val)) return;

    const fromUnit = selectedCategory.units.find(u => u.id === fromUnitId);
    const toUnit = selectedCategory.units.find(u => u.id === toUnitId);

    if (!fromUnit || !toUnit) return;

    let calculatedResult: number;

    if (selectedCategory.id === 'temperature') {
      // Temperature special case
      let celsius: number;
      if (fromUnit.id === 'c') celsius = val;
      else if (fromUnit.id === 'k') celsius = val - 273.15;
      else celsius = (val - 32) * 5 / 9;

      if (toUnit.id === 'c') calculatedResult = celsius;
      else if (toUnit.id === 'k') calculatedResult = celsius + 273.15;
      else calculatedResult = (celsius * 9 / 5) + 32;
    } else {
      // Standard linear conversion: val * fromFactor / toFactor
      calculatedResult = (val * fromUnit.factor) / toUnit.factor;
    }

    setResult(calculatedResult);

    const newHistory: ConversionHistory = {
      id: Math.random().toString(36).substr(2, 9),
      category: selectedCategory.name[language],
      fromValue: val,
      fromUnit: fromUnit.name[language],
      toValue: calculatedResult,
      toUnit: toUnit.name[language],
      timestamp: Date.now()
    };

    setHistory(prev => [newHistory, ...prev].slice(0, 20));
  };

  const handleReset = () => {
    setInputValue('');
    setResult(null);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === Language.EN ? Language.KM : Language.EN);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-black/5 sticky top-0 z-10 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          {selectedCategory ? (
            <button 
              onClick={() => setSelectedCategory(null)}
              className="p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          ) : (
            <div className="p-2 bg-emerald-500 text-white rounded-lg shadow-sm">
              <Calculator size={20} />
            </div>
          )}
          <h1 className="font-semibold text-lg tracking-tight">
            {selectedCategory ? selectedCategory.name[language] : t.title}
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setShowHistory(!showHistory)}
            className={`p-2 rounded-full transition-colors ${showHistory ? 'bg-emerald-100 text-emerald-600' : 'hover:bg-black/5'}`}
          >
            <HistoryIcon size={20} />
          </button>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors text-sm font-medium border border-black/10"
          >
            <Languages size={16} />
            {language === Language.EN ? 'ខ្មែរ' : 'EN'}
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {showHistory ? (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{t.history}</h2>
                {history.length > 0 && (
                  <button 
                    onClick={clearHistory}
                    className="text-sm text-red-500 font-medium hover:underline"
                  >
                    {t.clearHistory}
                  </button>
                )}
              </div>
              {history.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-black/5">
                  <HistoryIcon size={48} className="mx-auto mb-4 text-black/10" />
                  <p className="text-black/40">{t.noHistory}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {history.map(item => (
                    <div key={item.id} className="bg-white rounded-2xl p-4 border border-black/5 shadow-sm">
                      <div className="text-xs font-medium text-black/40 uppercase tracking-wider mb-1">
                        {item.category} • {new Date(item.timestamp).toLocaleTimeString()}
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1">
                          <span className="font-mono text-lg">{item.fromValue}</span>
                          <span className="text-xs text-black/60 ml-1">{item.fromUnit}</span>
                        </div>
                        <div className="text-black/20">→</div>
                        <div className="flex-1 text-right">
                          <span className="font-mono text-lg font-bold text-emerald-600">
                            {item.toValue.toLocaleString(undefined, { maximumFractionDigits: 6 })}
                          </span>
                          <span className="text-xs text-black/60 ml-1">{item.toUnit}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : !selectedCategory ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {CATEGORIES.map((category) => {
                const Icon = ICON_MAP[category.icon];
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category)}
                    className="bg-white p-4 rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all flex flex-col items-center text-center gap-3 active:scale-95"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Icon size={24} />
                    </div>
                    <span className="font-medium text-sm leading-tight">
                      {category.name[language]}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="converter"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Input Section */}
              <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-1">
                    {t.inputValue}
                  </label>
                  <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="0.00"
                    className="w-full text-3xl font-mono bg-transparent border-b-2 border-black/5 focus:border-emerald-500 outline-none py-2 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-1">
                      {t.fromUnit}
                    </label>
                    <select
                      value={fromUnitId}
                      onChange={(e) => setFromUnitId(e.target.value)}
                      className="w-full p-4 rounded-xl bg-[#F9F9F9] border border-black/5 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none font-medium"
                    >
                      {selectedCategory.units.map(unit => (
                        <option key={unit.id} value={unit.id}>{unit.name[language]}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-center -my-2 relative z-0">
                    <div className="bg-white p-2 rounded-full border border-black/5 shadow-sm text-black/20">
                      <RotateCcw size={20} className="rotate-90" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-1">
                      {t.toUnit}
                    </label>
                    <select
                      value={toUnitId}
                      onChange={(e) => setToUnitId(e.target.value)}
                      className="w-full p-4 rounded-xl bg-[#F9F9F9] border border-black/5 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none font-medium"
                    >
                      {selectedCategory.units.map(unit => (
                        <option key={unit.id} value={unit.id}>{unit.name[language]}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-4 rounded-2xl font-bold text-black/60 bg-black/5 hover:bg-black/10 transition-colors active:scale-95"
                  >
                    {t.reset}
                  </button>
                  <button
                    onClick={handleCalculate}
                    className="flex-[2] py-4 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
                  >
                    {t.calculate}
                  </button>
                </div>
              </div>

              {/* Result Section */}
              {result !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-600 rounded-3xl p-6 text-white shadow-xl shadow-emerald-600/30"
                >
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
                    {t.result}
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-4xl font-mono font-bold break-all">
                      {result.toLocaleString(undefined, { maximumFractionDigits: 8 })}
                    </span>
                    <span className="text-lg opacity-80">
                      {selectedCategory.units.find(u => u.id === toUnitId)?.name[language].split('(')[1]?.replace(')', '') || ''}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-start gap-2">
                    <Info size={16} className="shrink-0 mt-0.5 opacity-60" />
                    <p className="text-sm opacity-80 leading-relaxed">
                      {t.explanation[selectedCategory.id as keyof typeof t.explanation]}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 p-6 text-center space-y-2">
        <div className="text-sm font-bold text-black/80">{t.developedBy}</div>
        <div className="text-xs text-black/40 font-medium">{t.studentInfo}</div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-bold pt-2">
          {t.subtitle}
        </div>
      </footer>
    </div>
  );
}
