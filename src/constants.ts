import { Category, Language } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'mass',
    icon: 'Weight',
    name: { [Language.EN]: 'Mass', [Language.KM]: 'ម៉ាស់' },
    units: [
      { id: 'kg', name: { [Language.EN]: 'Kilogram (kg)', [Language.KM]: 'គីឡូក្រាម (kg)' }, factor: 1 },
      { id: 'g', name: { [Language.EN]: 'Gram (g)', [Language.KM]: 'ក្រាម (g)' }, factor: 0.001 },
      { id: 'mg', name: { [Language.EN]: 'Milligram (mg)', [Language.KM]: 'មីលីក្រាម (mg)' }, factor: 0.000001 },
      { id: 'tonne', name: { [Language.EN]: 'Tonne (t)', [Language.KM]: 'តោន (t)' }, factor: 1000 },
    ]
  },
  {
    id: 'volume',
    icon: 'Container',
    name: { [Language.EN]: 'Volume', [Language.KM]: 'មាឌ' },
    units: [
      { id: 'm3', name: { [Language.EN]: 'Cubic Meter (m³)', [Language.KM]: 'ម៉ែត្រគូប (m³)' }, factor: 1 },
      { id: 'l', name: { [Language.EN]: 'Liter (L)', [Language.KM]: 'លីត្រ (L)' }, factor: 0.001 },
      { id: 'ml', name: { [Language.EN]: 'Milliliter (mL)', [Language.KM]: 'មីលីលីត្រ (mL)' }, factor: 0.000001 },
    ]
  },
  {
    id: 'length',
    icon: 'Ruler',
    name: { [Language.EN]: 'Length', [Language.KM]: 'ប្រវែង' },
    units: [
      { id: 'km', name: { [Language.EN]: 'Kilometer (km)', [Language.KM]: 'គីឡូម៉ែត្រ (km)' }, factor: 1000 },
      { id: 'm', name: { [Language.EN]: 'Meter (m)', [Language.KM]: 'ម៉ែត្រ (m)' }, factor: 1 },
      { id: 'cm', name: { [Language.EN]: 'Centimeter (cm)', [Language.KM]: 'សង់ទីម៉ែត្រ (cm)' }, factor: 0.01 },
      { id: 'mm', name: { [Language.EN]: 'Millimeter (mm)', [Language.KM]: 'មីលីម៉ែត្រ (mm)' }, factor: 0.001 },
    ]
  },
  {
    id: 'area',
    icon: 'Square',
    name: { [Language.EN]: 'Area', [Language.KM]: 'ផ្ទៃក្រឡា' },
    units: [
      { id: 'm2', name: { [Language.EN]: 'Square Meter (m²)', [Language.KM]: 'ម៉ែត្រការ៉េ (m²)' }, factor: 1 },
      { id: 'cm2', name: { [Language.EN]: 'Square Centimeter (cm²)', [Language.KM]: 'សង់ទីម៉ែត្រការ៉េ (cm²)' }, factor: 0.0001 },
      { id: 'mm2', name: { [Language.EN]: 'Square Millimeter (mm²)', [Language.KM]: 'មីលីម៉ែត្រការ៉េ (mm²)' }, factor: 0.000001 },
      { id: 'hectare', name: { [Language.EN]: 'Hectare (ha)', [Language.KM]: 'ហិកតា (ha)' }, factor: 10000 },
    ]
  },
  {
    id: 'temperature',
    icon: 'Thermometer',
    name: { [Language.EN]: 'Temperature', [Language.KM]: 'សីតុណ្ហភាព' },
    units: [
      { id: 'c', name: { [Language.EN]: 'Celsius (°C)', [Language.KM]: 'សង់ស៊ីស (°C)' }, factor: 1, offset: 0 },
      { id: 'k', name: { [Language.EN]: 'Kelvin (K)', [Language.KM]: 'កែលវិន (K)' }, factor: 1, offset: 273.15 },
      { id: 'f', name: { [Language.EN]: 'Fahrenheit (°F)', [Language.KM]: 'ហ្វារិនហៃ (°F)' }, factor: 0.55555555555, offset: 32 },
    ]
  },
  {
    id: 'pressure',
    icon: 'Gauge',
    name: { [Language.EN]: 'Pressure', [Language.KM]: 'សម្ពាធ' },
    units: [
      { id: 'pa', name: { [Language.EN]: 'Pascal (Pa)', [Language.KM]: 'ប៉ាស្កាល់ (Pa)' }, factor: 1 },
      { id: 'kpa', name: { [Language.EN]: 'Kilopascal (kPa)', [Language.KM]: 'គីឡូប៉ាស្កាល់ (kPa)' }, factor: 1000 },
      { id: 'bar', name: { [Language.EN]: 'Bar', [Language.KM]: 'បារ (bar)' }, factor: 100000 },
      { id: 'atm', name: { [Language.EN]: 'Atmosphere (atm)', [Language.KM]: 'បរិយាកាស (atm)' }, factor: 101325 },
      { id: 'psi', name: { [Language.EN]: 'PSI', [Language.KM]: 'ផោនក្នុងមួយអ៊ីញការ៉េ (psi)' }, factor: 6894.76 },
    ]
  },
  {
    id: 'energy',
    icon: 'Zap',
    name: { [Language.EN]: 'Energy', [Language.KM]: 'ថាមពល' },
    units: [
      { id: 'j', name: { [Language.EN]: 'Joule (J)', [Language.KM]: 'ស៊ូល (J)' }, factor: 1 },
      { id: 'kj', name: { [Language.EN]: 'Kilojoule (kJ)', [Language.KM]: 'គីឡូស៊ូល (kJ)' }, factor: 1000 },
      { id: 'cal', name: { [Language.EN]: 'Calorie (cal)', [Language.KM]: 'កាឡូរី (cal)' }, factor: 4.184 },
      { id: 'kwh', name: { [Language.EN]: 'Kilowatt-hour (kWh)', [Language.KM]: 'គីឡូវ៉ាត់ម៉ោង (kWh)' }, factor: 3600000 },
    ]
  },
  {
    id: 'power',
    icon: 'Activity',
    name: { [Language.EN]: 'Power', [Language.KM]: 'អនុភាព' },
    units: [
      { id: 'w', name: { [Language.EN]: 'Watt (W)', [Language.KM]: 'វ៉ាត់ (W)' }, factor: 1 },
      { id: 'kw', name: { [Language.EN]: 'Kilowatt (kW)', [Language.KM]: 'គីឡូវ៉ាត់ (kW)' }, factor: 1000 },
      { id: 'hp', name: { [Language.EN]: 'Horsepower (hp)', [Language.KM]: 'សេះ (hp)' }, factor: 746 },
    ]
  },
  {
    id: 'density',
    icon: 'Waves',
    name: { [Language.EN]: 'Density', [Language.KM]: 'ដង់ស៊ីតេ' },
    units: [
      { id: 'kgm3', name: { [Language.EN]: 'kg/m³', [Language.KM]: 'គីឡូក្រាមក្នុងមួយម៉ែត្រគូប (kg/m³)' }, factor: 1 },
      { id: 'gcm3', name: { [Language.EN]: 'g/cm³', [Language.KM]: 'ក្រាមក្នុងមួយសង់ទីម៉ែត្រគូប (g/cm³)' }, factor: 1000 },
    ]
  },
  {
    id: 'flowrate',
    icon: 'Droplets',
    name: { [Language.EN]: 'Flow Rate', [Language.KM]: 'អត្រាលំហូរ' },
    units: [
      { id: 'm3s', name: { [Language.EN]: 'm³/s', [Language.KM]: 'ម៉ែត្រគូបក្នុងមួយវិនាទី (m³/s)' }, factor: 1 },
      { id: 'ls', name: { [Language.EN]: 'L/s', [Language.KM]: 'លីត្រក្នុងមួយវិនាទី (L/s)' }, factor: 0.001 },
      { id: 'lmin', name: { [Language.EN]: 'L/min', [Language.KM]: 'លីត្រក្នុងមួយនាទី (L/min)' }, factor: 0.001 / 60 },
      { id: 'm3h', name: { [Language.EN]: 'm³/h', [Language.KM]: 'ម៉ែត្រគូបក្នុងមួយម៉ោង (m³/h)' }, factor: 1 / 3600 },
    ]
  },
  {
    id: 'viscosity',
    icon: 'FlaskConical',
    name: { [Language.EN]: 'Viscosity', [Language.KM]: 'ភាពខាប់' },
    units: [
      { id: 'pas', name: { [Language.EN]: 'Pa·s', [Language.KM]: 'ប៉ាស្កាល់វិនាទី (Pa·s)' }, factor: 1 },
      { id: 'cp', name: { [Language.EN]: 'cP', [Language.KM]: 'សង់ទីភ័រ (cP)' }, factor: 0.001 },
    ]
  },
  {
    id: 'concentration',
    icon: 'Beaker',
    name: { [Language.EN]: 'Concentration', [Language.KM]: 'កំហាប់' },
    units: [
      { id: 'wt', name: { [Language.EN]: 'wt%', [Language.KM]: 'ភាគរយទម្ងន់ (wt%)' }, factor: 1 },
      { id: 'fraction', name: { [Language.EN]: 'Fraction', [Language.KM]: 'ប្រភាគ' }, factor: 0.01 },
      { id: 'ppm', name: { [Language.EN]: 'ppm', [Language.KM]: 'ភីភីអឹម (ppm)' }, factor: 1 },
      { id: 'mgl', name: { [Language.EN]: 'mg/L', [Language.KM]: 'មីលីក្រាមក្នុងមួយលីត្រ (mg/L)' }, factor: 1 },
    ]
  }
];

export const TRANSLATIONS = {
  [Language.EN]: {
    title: 'Engineering Unit Converter',
    subtitle: 'Student Learning Tool',
    selectCategory: 'Select a Category',
    inputValue: 'Input Value',
    fromUnit: 'From Unit',
    toUnit: 'To Unit',
    calculate: 'Calculate',
    reset: 'Reset',
    result: 'Result',
    history: 'History',
    clearHistory: 'Clear History',
    noHistory: 'No history yet',
    developedBy: 'Developed by Thoeurn Sovanleap',
    studentInfo: 'Chemical Engineering Student',
    back: 'Back',
    formula: 'Formula used',
    explanation: {
      mass: 'Mass conversion based on SI standards.',
      volume: 'Volume conversion for fluids and solids.',
      length: 'Metric length conversion.',
      area: 'Surface area conversion.',
      temperature: 'Temperature scale conversion.',
      pressure: 'Pressure units for engineering applications.',
      energy: 'Energy and work conversion.',
      power: 'Power and work rate conversion.',
      density: 'Mass per unit volume conversion.',
      flowrate: 'Volumetric flow rate conversion.',
      viscosity: 'Dynamic viscosity conversion.',
      concentration: 'Solution concentration conversion.',
    }
  },
  [Language.KM]: {
    title: 'កម្មវិធីប្តូរឯកតាវិស្វកម្ម',
    subtitle: 'ឧបករណ៍សិក្សាសម្រាប់និស្សិត',
    selectCategory: 'ជ្រើសរើសប្រភេទ',
    inputValue: 'បញ្ចូលតម្លៃ',
    fromUnit: 'ពីឯកតា',
    toUnit: 'ទៅឯកតា',
    calculate: 'គណនា',
    reset: 'កំណត់ឡើងវិញ',
    result: 'លទ្ធផល',
    history: 'ប្រវត្តិ',
    clearHistory: 'លុបប្រវត្តិ',
    noHistory: 'មិនទាន់មានប្រវត្តិនៅឡើយទេ',
    developedBy: 'បង្កើតដោយ ធឿន សុវណ្ណលាភ',
    studentInfo: 'និស្សិតវិស្វកម្មគីមី',
    back: 'ត្រឡប់ក្រោយ',
    formula: 'រូបមន្តដែលប្រើ',
    explanation: {
      mass: 'ការប្តូរម៉ាស់ផ្អែកលើស្តង់ដារ SI។',
      volume: 'ការប្តូរមាឌសម្រាប់វត្ថុរាវ និងវត្ថុរឹង។',
      length: 'ការប្តូរប្រវែងប្រព័ន្ធម៉ែត្រ។',
      area: 'ការប្តូរផ្ទៃក្រឡា។',
      temperature: 'ការប្តូរខ្នាតសីតុណ្ហភាព។',
      pressure: 'ឯកតាសម្ពាធសម្រាប់កម្មវិធីវិស្វកម្ម។',
      energy: 'ការប្តូរថាមពល និងការងារ។',
      power: 'ការប្តូរអនុភាព។',
      density: 'ការប្តូរដង់ស៊ីតេ។',
      flowrate: 'ការប្តូរអត្រាលំហូរមាឌ។',
      viscosity: 'ការប្តូរភាពខាប់ឌីណាមិក។',
      concentration: 'ការប្តូរកំហាប់សូលុយស្យុង។',
    }
  }
};
