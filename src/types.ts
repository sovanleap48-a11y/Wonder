export enum Language {
  EN = 'en',
  KM = 'km'
}

export interface Unit {
  id: string;
  name: {
    [Language.EN]: string;
    [Language.KM]: string;
  };
  factor: number; // Base factor for conversion (usually to SI)
  offset?: number; // For temperature conversions
}

export interface Category {
  id: string;
  icon: string;
  name: {
    [Language.EN]: string;
    [Language.KM]: string;
  };
  units: Unit[];
  formula?: {
    [Language.EN]: string;
    [Language.KM]: string;
  };
}

export interface ConversionHistory {
  id: string;
  category: string;
  fromValue: number;
  fromUnit: string;
  toValue: number;
  toUnit: string;
  timestamp: number;
}
