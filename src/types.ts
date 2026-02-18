
export type Brand = 'TEXMEX' | 'CITYBAR';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'soups' | 'snacks' | 'aperitivos' | 'salads' | 'tacos' | 'fajitas' | 'burritos' | 'quesadillas' | 'enchiladas' | 'burgers' | 'steaks' | 'ribs' | 'drinks' | 'dessert' | 'cocktails' | 'longdrinks' | 'wine' | 'beer' | 'nachos' | 'extras' | 'stir_fries' | 'bbq';
  spicyLevel?: 0 | 1 | 2 | 3; // 0 = none, 3 = very spicy
  vegetarian?: boolean;
  image?: string;
  availableIn: Brand[]; // Defines where this item is shown
  selectedExtras?: MenuItem[]; // Nested items (e.g., upgrades for burgers)
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface OpeningHours {
  day: string;
  hours: string;
}

export enum View {
  HOME = 'HOME',
  MENU = 'MENU',
  CONTACT = 'CONTACT',
  ITEM_DETAIL = 'ITEM_DETAIL',
  IMPRESSUM = 'IMPRESSUM',
  PRIVACY = 'PRIVACY'
}
