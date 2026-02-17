
import { MenuItem, OpeningHours } from './types';

export const OPENING_HOURS: OpeningHours[] = [
  { day: 'Montag', hours: 'Geschlossen' },
  { day: 'Dienstag - Freitag', hours: '17:00 – 22:00' },
  { day: 'Samstag', hours: '11:00 – 22:00' },
  { day: 'Sonntag', hours: '11:00 – 21:00' },
];

export const CITYBAR_OPENING_HOURS: OpeningHours[] = [
  { day: 'Montag', hours: 'Ruhetag' },
  { day: 'Dienstag - Sonntag', hours: 'Ab 16:00 Uhr' },
];

export const ADDRESS = {
  street: 'Stadtpl. 40',
  city: '4400 Steyr',
  phone: '+43 7252 52292',
  email: 'office@texmex.at'
};

export const MENU_ITEMS: MenuItem[] = [
  // --- 1. SUPPEN (SOUPS) ---
  {
    id: 'soup1',
    name: 'SOPA TRADICIONAL',
    description: 'Original pikante, mexikanische Suppe. (A, G, F, L, C, H, M, N, O, D)',
    price: 5.10,
    category: 'soups',
    spicyLevel: 1,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b485c?q=80&w=800&auto=format&fit=crop', 
    availableIn: ['TEXMEX']
  },
  {
    id: 'soup2',
    name: 'CORN CHOWDER',
    description: 'Curry-Maiscremesuppe mit Obershaube und Croutons. (A, G, F, L, C)',
    price: 4.90,
    category: 'soups',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=800&auto=format&fit=crop', 
    availableIn: ['TEXMEX']
  },
  {
    id: 'soup3',
    name: 'GARLIC SOUP',
    description: 'Klassische Knoblauchcremesuppe mit Obershaube und Croutons. (A, G, F, L, C)',
    price: 4.90,
    category: 'soups',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1547592166-23acbe346499?q=80&w=800&auto=format&fit=crop', 
    availableIn: ['TEXMEX']
  },

  // --- 2. SNACKS ---
  {
    id: 'sn1',
    name: 'SWEET POTATO FRIES',
    description: 'Mit Sour-Cream. (A, G, F, L, C)',
    price: 6.20,
    category: 'snacks',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1623259838722-1925b42df529?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sn2',
    name: 'REIS',
    description: '(A, G, F, L, C)',
    price: 4.90,
    category: 'snacks',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sn3',
    name: 'WEDGES',
    description: 'Mit Sour-Cream. (A, G, F, L, C)',
    price: 4.90,
    category: 'snacks',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1605658661643-4e8913349987?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sn4',
    name: 'POMMES',
    description: '(A, G, F, L, C)',
    price: 4.90,
    category: 'snacks',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1630384060421-a4323ce56d20?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sn5',
    name: 'GEMÜSE',
    description: '(A, G, F, L, C)',
    price: 5.50,
    category: 'snacks',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1592686092916-613b7607d4b9?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sn6',
    name: 'SPECKBOHNEN',
    description: '(A, G, F, L, C)',
    price: 5.60,
    category: 'snacks',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=800&auto=format&fit=crop', 
    availableIn: ['TEXMEX']
  },
  {
    id: 'sn7',
    name: 'BAKED POTATO',
    description: 'Mit Sour-Cream. (A, G, F, L, C)',
    price: 5.20,
    category: 'snacks',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1644855422896-b63548d7d8e4?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sn8',
    name: 'TORTILLA CHIPS',
    description: 'Mit Sour-Cream / TexMex-Sauce / Käsesauce / Currydip / Guacamole. (A, G, F, L, C)',
    price: 9.90,
    category: 'snacks',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1576088237936-e8d12330a133?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 3. APERITIVOS ---
  {
    id: 'ap1',
    name: 'POTATO SKINS',
    description: 'Mit Käse und Speck gratiniert, dazu Sour-Cream. (A, G, F, L)',
    price: 10.20,
    category: 'aperitivos',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1605926637512-8d5dad677b4b?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ap2',
    name: 'CORN ON THE COB',
    description: 'Saftiger Maiskolben gewürzt und frisch vom Grill. (A, G, F, L)',
    price: 4.80,
    category: 'aperitivos',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1551806235-96a32d56a5c1?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ap3',
    name: 'GARLIC BREAD',
    description: 'Ofenfrisches Knoblauchbrot. (A, G, F, L)',
    price: 4.60,
    category: 'aperitivos',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1573145162464-9a3e62f40b20?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ap4',
    name: 'MOZZARELLA-STICKS',
    description: 'Knusprige Cheesesticks, dazu Sour-Cream. (A, G, F, L)',
    price: 7.90,
    category: 'aperitivos',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ap5',
    name: 'CRISPY ONIONRINGS',
    description: 'Im Backteig frittiert, dazu TexMex-Sauce. (A, G, F, L, C, H, M, N, O, D)',
    price: 7.90,
    category: 'aperitivos',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ap6',
    name: 'CHILI-CHEESE POPPERS',
    description: 'Gebackene und mit Cheddarkäse gefüllte Chilischoten, dazu Sour-Cream. (A, G, F, L)',
    price: 7.90,
    category: 'aperitivos',
    spicyLevel: 2, 
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1596707246797-42777f98d5c8?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ap7',
    name: 'FINGERFOOD SPECIAL',
    description: 'Chicken Wings, Mozzarellasticks, Onionrings, Chicken Strips, Poppers, Garlic Bread, Guacamole mit TexMex-Sauce und Sour-Cream. (A, G, F, L, C, H, M, N, O, D)',
    price: 15.20,
    category: 'aperitivos',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 4. NACHOS ---
  {
    id: 'na1',
    name: 'NACHOS BASIC',
    description: 'Knusprige Tortillachips mit Käse gratiniert. Mit Sour-Cream, Jalapeños und Käse-Sauce. (A, G, F, L)',
    price: 9.90,
    category: 'nachos',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'na2',
    name: 'NACHOS CHICKEN',
    description: 'Knusprige Tortillachips mit Käse gratiniert. Mit Sour-Cream, Jalapeños und diced Chicken. (A, G, F, L)',
    price: 11.20,
    category: 'nachos',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'na3',
    name: 'NACHOS CON CARNE',
    description: 'Knusprige Tortillachips mit Käse gratiniert. Mit Sour-Cream, Jalapeños and Chili con Carne. (A, G, F, L, C, H, M, N, O, D)',
    price: 11.20,
    category: 'nachos',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1673809627725-d39695679905?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'na4',
    name: 'NACHOS BEANS',
    description: 'Knusprige Tortillachips mit Käse gratiniert. Mit Sour-Cream, Jalapeños and baked Beans. (A, G, F, L)',
    price: 10.20,
    category: 'nachos',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1644321677329-8758e578c78c?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'na5',
    name: 'NACHOS ULTIMATE',
    description: 'Alles von oben – garniert mit Salat, Tomatenwürfel und Käse-Sauce. (A, G, F, L, C, H, M, N, O, D)',
    price: 15.20,
    category: 'nachos',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 5. TACOS ---
  {
    id: 'tc1',
    name: 'TACOS VEGETARIAN',
    description: 'Tacos gefüllt mit gebratenen Bohnen, Zwiebeln, Tomaten und Salat, Käse, Sour-Cream und TexMex-Sauce. (A, G, F, L, C, H, M, N, O, D)',
    price: 13.10,
    category: 'tacos',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'tc2',
    name: 'TACOS CON CARNE',
    description: 'Tacos gefüllt mit würzigem Chili con Carne, Salat, Tomaten, Käse, Sour-Cream und TexMex-Sauce. (A, G, F, L, C, H, M, N, O, D)',
    price: 14.10,
    category: 'tacos',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'tc3',
    name: 'TACOS DE POLLO',
    description: 'Tacos gefüllt mit gegrilltem Hühnerfleisch, Salat und Tomaten, TexMex-Sauce und Käse. (A, G, F, L, C, H, M, N, O, D)',
    price: 14.10,
    category: 'tacos',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 6. ENSALADAS (SALADS) ---
  {
    id: 'sal1',
    name: 'CAESARS SALAD',
    description: 'Knackiger Eisbergsalat mit Caesars Dressing, Croutons, Karotten und Parmesan, Tomaten. (A, G, F, L, C, H, M, N, O, D). Kleine Portion: € 8,30',
    price: 10.30,
    category: 'salads',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sal2',
    name: 'GRINGOSALAD',
    description: 'Knackiger Eisbergsalat mit Hausdressing, Speck-, Tomaten, Karotten und Croutons. (A, G, M, O). Kleine Portion: € 8,30',
    price: 10.30,
    category: 'salads',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sal3',
    name: 'CHICKEN CAESARS SALAD',
    description: 'Caesars Salad mit gebratenen Hühnerfilet-Streifen, Karotten, Tomaten. (A, G, F, L, C, H, M, N, O, D). Kleine Portion: € 13,00',
    price: 15.00,
    category: 'salads',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sal4',
    name: 'SHRIMPS CAESARS SALAD',
    description: 'Caesars Salad mit gegrillten Shrimps Tomaten und Karotten. (A, G, F, L, C, H, M, N, O, D, B). Kleine Portion: € 14,00',
    price: 17.00,
    category: 'salads',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sal5',
    name: 'CHICKEN FINGER BBQ',
    description: 'Gegrillte Hühnerfilet-Streifen fein gewürzt auf Eisbergsalat mit Karotten, Tomaten, Paprika und unserem Hausdressing. (A, G, F, L, C, M, O)',
    price: 16.00,
    category: 'salads',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sal6',
    name: 'CRISPY SALAD BOWL',
    description: 'Knusprige Tacoschüssel mit Eisbergsalat, Tomaten, Käse, Karotten, Sauerrahm, Paprika und Hausdressing. (A, G, F, L, C, H, M, N, O, D, B). Mit Chicken: € 17,30 | Beef: € 17,30 | Shrimps: € 19,30',
    price: 15.30,
    category: 'salads',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sal7',
    name: 'KEY-WEST CHICKEN SALAD',
    description: 'Knackiger Eisbergsalat mit Currydressing, Ananas-, Mandarinenstücken, Karotten, Walnüssen, Tomaten, Paprika und pikant gewürzten, gegrillten Hühnerbrust-Streifen. (A, G, F, L, C, H, M, N, O, D)',
    price: 17.30,
    category: 'salads',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sal8',
    name: 'CHICKENFINGER COCONUT',
    description: 'Knackiger Eisbergsalat mit gebackenen Hühnerfilet-Streifen in Kokosraspeln gewälzt, Tomaten, Karotten, Ananasstückchen, Paprika und Currydressing. (A, G, F, L, C, H, M, N, O, D)',
    price: 17.30,
    category: 'salads',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sal9',
    name: 'TEXAS BEEF SALAD',
    description: 'Knackiger Eisbergsalat mit medium gegrillten Beiriedscheiben, Tomaten, Paprika, Zwiebeln, Karotten, Salatgurke, Parmesan, Wedges und Hausdressing. (G, M, O)',
    price: 23.30,
    category: 'salads',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 7. STIR FRIES ---
  {
    id: 'sf1',
    name: 'VEGETARIEN STIR FRY',
    description: 'Scharf angebratenes Gemüse dazu Sour-Cream und Weißbrot. (A, G, F, L)',
    price: 14.30,
    category: 'stir_fries',
    spicyLevel: 1,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sf2',
    name: 'CHICKEN STIR FRY',
    description: 'Scharf angebratenes Gemüse dazu Sour-Cream und Weißbrot, mit gegrillter Hühnerbrust. (A, G, F, L)',
    price: 17.30,
    category: 'stir_fries',
    spicyLevel: 1,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'sf3',
    name: 'REISPFANNE „MEXICAN STYLE“',
    description: 'Deftig gewürzte Reismischung mit Gemüse in einer knusprigen Tacoschüssel. (A, G, F, L)',
    price: 17.30,
    category: 'stir_fries',
    spicyLevel: 1,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1534939561126-855f8621818e?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 8. FAJITAS ---
  {
    id: 'faj1',
    name: 'POLLO Y ASADOR',
    description: 'Hühnerbrust-Scheiben mit Paprika und Zwiebeln in der Pfanne serviert. Inkl. Sour-Cream, TexMex-Sauce, Guacamole & 4 kleinen Weizentortillas. (A, G, F, L, C, H, M, N, O, D)',
    price: 20.50,
    category: 'fajitas',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1534352956036-c01ac18bd982?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'faj2',
    name: 'EL DIABOLO GUSTO',
    description: 'Medium gebratene Rumpsteak-Streifen mit Paprika and Zwiebeln in der Pfanne serviert. Inkl. Sour-Cream, TexMex-Sauce, Guacamole & 4 kleinen Weizentortillas. (A, G, F, L, C, H, M, N, O, D)',
    price: 22.50,
    category: 'fajitas',
    spicyLevel: 1,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1515544062837-88748386a347?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'faj3',
    name: 'CHICKEN & BEEF',
    description: 'Hühnerbrust-Scheiben und Rumpsteak-Streifen mit Paprika und Zwiebeln in der Pfanne serviert. Inkl. Sour-Cream, TexMex-Sauce, Guacamole & 4 kleinen Weizentortillas. (A, G, F, L, C, H, M, N, O, D)',
    price: 21.50,
    category: 'fajitas',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'faj4',
    name: 'VERDURAS CON QUESO',
    description: 'Milde Gemüsemischung und Käse mit Paprika und Zwiebeln in der Pfanne serviert. Inkl. Sour-Cream, TexMex-Sauce, Guacamole & 4 kleinen Weizentortillas. (A, G, F, L, C, H, M, N, O, D)',
    price: 17.10,
    category: 'fajitas',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1626202167586-b4528b9df451?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  
  // --- 9. ENCHILADAS ---
  {
    id: 'ench1',
    name: 'CHEESE ENCHILADAS',
    description: 'Basic Enchilada mit Sauce, Gemüse, Bohnen und viel Käse. Gefüllte und mit Käse gratinierte Weizentortillas mit unserer geheimen TexMex-Enchilada-Sauce (nicht vegetarisch). Dazu servieren wir eine Portion Reis. (A, G, F, L, C, H, M, N, O, D)',
    price: 15.90,
    category: 'enchiladas',
    spicyLevel: 0,
    vegetarian: false, 
    image: 'https://images.unsplash.com/photo-1585509935936-8b2b647f384a?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ench2',
    name: 'CHICKEN ENCHILADAS',
    description: 'Gefüllte und mit Käse gratinierte Weizentortillas mit diced Chicken, Gemüse and Bohnen in unserer geheimen TexMex-Enchilada-Sauce. Dazu servieren wir eine Portion Reis. (A, G, F, L, C, H, M, N, O, D)',
    price: 17.50,
    category: 'enchiladas',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1628203920959-c29023402636?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ench3',
    name: 'BEEF ENCHILADAS',
    description: 'Gefüllte und mit Käse gratinierte Weizentortillas mit Gemüse, Bohnen und Chili con Carne (ohne TexMex-Enchilada-Sauce). Dazu servieren wir eine Portion Reis. (A, G, F, L, C, H, M, N, O, D)',
    price: 17.90,
    category: 'enchiladas',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1540327315180-2a86c8d7b73c?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 10. QUESADILLAS ---
  {
    id: 'ques1',
    name: 'CHEESE QUESADILLAS',
    description: 'Ofenfrische, gefüllte Weizentortillas mit Salat und Sauerrahm. Mit viel Käse, Paprika und Karotten. (A, G, F, L)',
    price: 13.30,
    category: 'quesadillas',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ques2',
    name: 'CHICKEN QUESADILLAS',
    description: 'Ofenfrische, gefüllte Weizentortillas mit Salat und Sauerrahm. Mit Käse, diced Chicken, Karotten und Paprika. (A, G, F, L)',
    price: 14.30,
    category: 'quesadillas',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ques3',
    name: 'BEEF QUESADILLAS',
    description: 'Ofenfrische, gefüllte Weizentortillas mit Salat und Sauerrahm. Mit Käse, Chili con Carne, Karotten und Paprika. (A, G, F, L, C, H, M, N, O, D)',
    price: 15.30,
    category: 'quesadillas',
    spicyLevel: 1, 
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1504185945330-dd4fa29a093f?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'ques4',
    name: 'SHRIMPS QUESADILLAS',
    description: 'Ofenfrische, gefüllte Weizentortillas mit Salat und Sauerrahm. Mit Käse, Paprika, Karotten, Tomaten und gegrillten Shrimps. (A, G, F, L, B)',
    price: 17.30,
    category: 'quesadillas',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1609167830220-7164af360975?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 11. BURRITOS ---
  {
    id: 'bur1',
    name: 'BANDITO BURRITO',
    description: 'Weizentortilla gerollt und gefüllt mit Chili con Carne, Reis, Salat, Tomaten, Cheddar, Zwiebeln, Karotten, Paprika und Guacamole. (A, G, F, L, B)',
    price: 19.30,
    category: 'burritos',
    spicyLevel: 1,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bur2',
    name: 'VEGGIE BURRITO',
    description: 'Weizentortilla gerollt und gefüllt mit deftig gewürzter Reismischung, Zwiebeln, Paprika, Karotten, Zucchini, Bohnen und Mais. (A, G, F, L)',
    price: 18.60,
    category: 'burritos',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 12. BARBECUE PARTY ---
  {
    id: 'bbq1',
    name: 'CERDO CON MAÍZ',
    description: 'Saftiges Schweinskotelett aus der Grillpfanne mit Buttermais, Speck, dazu knusprige Wedges und Sour-Cream. (A, G, F, L)',
    price: 20.40,
    category: 'bbq',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76690b67f11?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq2',
    name: 'CHULETA MEXICANA',
    description: 'Schweinekotelett mit scharfer Bohnen-Jalapeño-Kruste, Bohnen-Mais-Gemüse, Wedges, Sour-Cream und TexMex-Sauce. (A, G, F, L)',
    price: 21.40,
    category: 'bbq',
    spicyLevel: 2,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1628268994910-c58066e4a2e5?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq3',
    name: 'BROCHETA DE GAMBAS',
    description: 'Garnelenspieße auf würzigem Gemüse, dazu Garlic Bread und Currydip. (A, G, F, L)',
    price: 21.40,
    category: 'bbq',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq4',
    name: 'HAMBURGUESA DE POLLO',
    description: 'Saftig gegrillte Hühnerbrust mit Wedges, Buttermais, Spiegelei, Garlic Bread und knusprigem Speck, dazu Sour-Cream. (A, G, F, L , C, H , M, N, O)',
    price: 21.40,
    category: 'bbq',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc3f3dea?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq5',
    name: 'CHILI CON CARNE',
    description: 'Der scharfe, mexikanische Klassiker mit Garlic Bread. (A, G, F, L, C, H, M, N, O)',
    price: 17.80,
    category: 'bbq',
    spicyLevel: 2,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b485c?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq6',
    name: 'TEXMEX-GRILL',
    description: 'Hühnerfilet, Rindersteak (medium), Schweinskotelett mit Grillgemüse, Pommes frites, Sour-Cream und TexMex-Sauce. (A, G, F, L, C, H, M, N, O, D)',
    price: 23.90,
    category: 'bbq',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq7',
    name: 'BARBECUE SPARERIBS',
    description: 'Vom Lavasteingrill mit kräftiger BBQ-Sauce mariniert, dazu Baked Potato mit Sour-Cream. (A, G, F, L, C, H, M, N, O, D)',
    price: 23.40,
    category: 'bbq',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/2e/3f/2f/img-20170806-185836-largejpg.jpg',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq8',
    name: 'RIBS AND FRIENDS',
    description: 'Spareribs, Chickenwings, Corn, Mozzarellasticks, Baked Potato mit Sour-Cream und Onionrings. (A, G, F, L, C, H, M, N, O, D)',
    price: 24.40,
    category: 'bbq',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://storage.googleapis.com/a1aa/image/N800eUu3o1v_E8xXzKxX_RIBS_FRIENDS.png',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq9',
    name: 'RIBS ‘N WINGS',
    description: 'Kombination aus unseren Ribs und Wings dazu Baked Potato mit Sour-Cream. (A, G, F, L, C, H, M, N, O, D)',
    price: 24.40,
    category: 'bbq',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq10',
    name: 'CHICKEN WINGS',
    description: '10x knusprig saftige Chickenwings mit ofenfrischem Garlic Bread und Sour-Cream. (A, G, F, L)',
    price: 18.40,
    category: 'bbq',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq11',
    name: 'CHICKEN COMBO',
    description: 'Saftig gegrilltes Hühnerbrust-Filet und Hühnerspieß auf würzigem Gemüse mit gebratenen Kartoffelscheiben, Sour-Cream und TexMex-Sauce. (A, G, F, L, C, H, M, N, O, D)',
    price: 21.40,
    category: 'bbq',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'bbq12',
    name: 'DEVIL‘S CHICKEN',
    description: 'Scharf mariniertes und gegrilltes Hühnerbrust-Filet mit pikantem, geröstetem Gemüse (Zwiebel, Champignons, Paprika) dazu Baked Potato mit Sour-Cream und ein Corn on the Cob. (A, G, F, L)',
    price: 21.40,
    category: 'bbq',
    spicyLevel: 2,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868c6250a?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 13. BURGERS ---
  {
    id: 'burg1',
    name: 'CHICKENBURGER',
    description: 'Brioche Burger-Bun mit saftig gegrilltem Hühnerbrust-Filet, garniert mit Salat, Tomaten, Zwiebeln, Salatgurke und Remoulade. Dazu knusprige Pommes und Ketchup. (A, G, F, N)',
    price: 17.10,
    category: 'burgers',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'burg2',
    name: 'CHEESEBURGER',
    description: 'Brioche Burger-Bun mit 180g Rindfleisch-Patty (medium) und Cheddar, garniert mit Salat, Tomaten, Zwiebeln, Salatgurke und Remoulade. Dazu knusprige Pommes und Ketchup. (A, G, F, N)',
    price: 17.10,
    category: 'burgers',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'burg3',
    name: '„PABLO“ BURGER',
    description: 'Brioche Burger-Bun mit 180g Rindfleisch-Patty (medium), Speck, Cheddar, Jalapeños, Guacamole, Remoulade und Nachos, garniert mit Salat, Tomaten, Zwiebeln, Salatgurke. (A, G, F, N)',
    price: 20.10,
    category: 'burgers',
    spicyLevel: 1,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'burg4',
    name: '„SENORITA BONITA“ BURGER',
    description: 'Couscous-Gemüse-Cheddar-Bällchen mit Guacamole, Sour-Cream und gebratenen Kartoffelscheiben im Baguette. (Vegetarisch)',
    price: 17.50,
    category: 'burgers',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc3f3dea?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 14. STEAKS ---
  {
    id: 'stk1',
    name: 'LONE STAR SPECIAL',
    description: '260g Beiried (medium). Würzig-scharf mariniert, serviert auf gegrilltem Gemüse (Zwiebel, Paprika und Champignons) dazu ein Corn on the Cob und Baked Potato mit Sour-Cream. (A, G, F, L)',
    price: 35.40,
    category: 'steaks',
    spicyLevel: 1,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'stk2',
    name: 'SURF AND TURF',
    description: '260g Beiried (medium). Auf Röstgemüse und würzigen Chili-Gambas dazu Baked Potato mit Sour-Cream. (A, G, F, L, C, H, M, N, O, D)',
    price: 38.40,
    category: 'steaks',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7960c7?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'stk3',
    name: 'MEXICAN ROAST BEEF',
    description: '260g Beiried (medium). Auf saftig-schmackhaften Speckbohnen dazu Baked Potato mit Sour-Cream. (A, G, F, L)',
    price: 35.40,
    category: 'steaks',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'stk4',
    name: 'TEXANOS',
    description: '260g Beiried (medium). Auf feurig-scharfem Paprika-Maisgemüse dazu Spiegelei, TexMex-Sauce und Baked Potato mit Sour-Cream. (A, G, F, L, C, H, M, N, O, D)',
    price: 35.40,
    category: 'steaks',
    spicyLevel: 2,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'stk5',
    name: 'LONE STAR BACON',
    description: '260g Beiried (medium). Auf sautierten Zwiebeln mit herzhaftem Speck verfeinert, dazu Baked Potato mit Sour-Cream und grünem Salat. (A, G, F, L, M, N, O)',
    price: 35.40,
    category: 'steaks',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },

  // --- 15. DESSERT ---
  {
    id: 'des1',
    name: 'BROWNIE BLOWOUT',
    description: 'Warmer, hausgemachter Schokokuchen mit Schoko-Sauce, Schlagobers und Brownie-Eis. (A, G, F, C, H)',
    price: 7.40,
    category: 'dessert',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'des2',
    name: 'PANQUEQUE CON HIELO',
    description: 'Eispalatschinke mit Vanilleeis, Schokosauce und Schlagobers. (A, G, C, H)',
    price: 7.20,
    category: 'dessert',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'des3',
    name: 'NOUGATINOS',
    description: '3 Stk. Topfen-Nougatknödel mit Brownie-Eis und Schlagobers. (A, G, F, C, H)',
    price: 7.60,
    category: 'dessert',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'des4',
    name: 'GRANNY‘S APPLE PIE',
    description: 'Apfelkuchen nach Großmutters Rezept mit Schlagobers und Brownie-Eis. (A, G, F)',
    price: 7.10,
    category: 'dessert',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'des5',
    name: 'MAMACITAS VERFÜHRUNG',
    description: 'Brownie-Eis with Obststückchen und Schlagobers - auf Tacoteller serviert. (A, G, H)',
    price: 7.80,
    category: 'dessert',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'des6',
    name: 'AMERICAN CHEESECAKE',
    description: 'Käsekuchen mit Waldbeeren, Brownie-Eis und Schlagobers. (A, G, F, L)',
    price: 7.10,
    category: 'dessert',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  
  // --- EXTRAS (Burger Upgrades) ---
  {
    id: 'extra1',
    name: 'EXTRA: BACON / CHEDDAR / EI / JALAPEÑOS',
    description: 'Wahlweise als Upgrade für deinen Burger.',
    price: 2.50,
    category: 'extras',
    spicyLevel: 0,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop', 
    availableIn: ['TEXMEX']
  },
  {
    id: 'extra2',
    name: 'EXTRA: CHILI CON CARNE',
    description: 'Upgrade für deinen Burger.',
    price: 3.50,
    category: 'extras',
    spicyLevel: 1,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b485c?q=80&w=800&auto=format&fit=crop',
    availableIn: ['TEXMEX']
  },
  {
    id: 'extra3',
    name: 'GLUTENFREIER BUN',
    description: 'Upgrade für deinen Burger.',
    price: 2.90,
    category: 'extras',
    spicyLevel: 0,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop', 
    availableIn: ['TEXMEX']
  }
];

export const CATEGORY_LABELS: Record<string, string> = {
  soups: 'Suppen',
  snacks: 'Snacks',
  aperitivos: 'Aperitivos',
  nachos: 'Nachos',
  tacos: 'Tacos',
  salads: 'Salate',
  stir_fries: 'Stir Fries',
  fajitas: 'Fajitas',
  enchiladas: 'Enchiladas',
  quesadillas: 'Quesadillas',
  burritos: 'Burritos',
  bbq: 'Barbecue Party',
  burgers: 'Burgers',
  steaks: 'Steaks',
  ribs: 'Ribs',
  extras: 'Extras',
  dessert: 'Dessert',
  cocktails: 'Cocktails',
  longdrinks: 'Longdrinks',
  wine: 'Weine',
  beer: 'Bier',
  drinks: 'Getränke'
};
