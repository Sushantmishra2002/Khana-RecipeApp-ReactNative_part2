export interface Recipe {
  id: string;
  name: string;
  cuisine: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: number;
  cookTime: number;
  servings: number;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  youtubeId: string;
  tags: string[];
  calories: number;
  rating: number;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    cuisine: 'Indian',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 45,
    servings: 4,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Creamy and rich Indian curry with tender chicken in tomato-based sauce',
    ingredients: [
      '1 lb chicken breast, cubed',
      '1 cup heavy cream',
      '1 can tomato sauce',
      '2 tbsp butter',
      '1 onion, diced',
      '3 cloves garlic, minced',
      '1 tbsp garam masala',
      '1 tsp turmeric',
      '1 tsp paprika',
      'Salt to taste',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Marinate chicken with yogurt and spices for 30 minutes',
      'Heat butter in a large pan and cook chicken until golden',
      'Remove chicken and sauté onions until soft',
      'Add garlic and spices, cook for 1 minute',
      'Add tomato sauce and simmer for 10 minutes',
      'Return chicken to pan with cream',
      'Simmer for 15 minutes until sauce thickens',
      'Garnish with cilantro and serve with rice'
    ],
    youtubeId: 'dzJTsV2_4Fc',
    tags: ['curry', 'spicy', 'comfort food'],
    calories: 450,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Spaghetti Carbonara',
    cuisine: 'Italian',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Classic Roman pasta dish with eggs, cheese, and pancetta',
    ingredients: [
      '400g spaghetti',
      '200g pancetta or guanciale',
      '4 large eggs',
      '100g Pecorino Romano cheese',
      '100g Parmesan cheese',
      'Black pepper',
      'Salt for pasta water'
    ],
    instructions: [
      'Boil salted water and cook spaghetti al dente',
      'Fry pancetta until crispy',
      'Whisk eggs with grated cheeses and black pepper',
      'Drain pasta, reserving some pasta water',
      'Mix hot pasta with pancetta',
      'Remove from heat and quickly mix in egg mixture',
      'Add pasta water if needed for creaminess',
      'Serve immediately with extra cheese'
    ],
    youtubeId: 'D_2DBLAt57c',
    tags: ['pasta', 'quick', 'classic'],
    calories: 520,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Chicken Teriyaki',
    cuisine: 'Japanese',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sweet and savory Japanese chicken glazed with teriyaki sauce',
    ingredients: [
      '2 lbs chicken thighs',
      '1/2 cup soy sauce',
      '1/4 cup mirin',
      '1/4 cup sake',
      '3 tbsp brown sugar',
      '2 tbsp vegetable oil',
      '1 tbsp grated ginger',
      '2 cloves garlic, minced',
      'Green onions for garnish',
      'Sesame seeds'
    ],
    instructions: [
      'Mix soy sauce, mirin, sake, and brown sugar for teriyaki sauce',
      'Heat oil in a large skillet over medium-high heat',
      'Season chicken and cook skin-side down for 6 minutes',
      'Flip chicken and cook another 6 minutes',
      'Add ginger and garlic, cook for 1 minute',
      'Pour teriyaki sauce over chicken',
      'Simmer until sauce thickens and chicken is glazed',
      'Garnish with green onions and sesame seeds'
    ],
    youtubeId: 'LbKcHOKDTN4',
    tags: ['asian', 'glazed', 'sweet'],
    calories: 380,
    rating: 4.6
  },
  {
    id: '4',
    name: 'Beef Tacos',
    cuisine: 'Mexican',
    difficulty: 'Easy',
    prepTime: 20,
    cookTime: 15,
    servings: 6,
    image: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Authentic Mexican street tacos with seasoned ground beef',
    ingredients: [
      '1 lb ground beef',
      '12 corn tortillas',
      '1 onion, diced',
      '2 cloves garlic, minced',
      '1 tbsp chili powder',
      '1 tsp cumin',
      '1 tsp paprika',
      '1/2 tsp oregano',
      'Salt and pepper',
      'Fresh cilantro',
      'Lime wedges',
      'Diced tomatoes',
      'Shredded cheese'
    ],
    instructions: [
      'Heat tortillas in a dry skillet until warm',
      'Cook ground beef in a large skillet',
      'Add onions and cook until soft',
      'Add garlic and spices, cook for 1 minute',
      'Season with salt and pepper',
      'Warm tortillas and fill with beef mixture',
      'Top with cilantro, tomatoes, and cheese',
      'Serve with lime wedges'
    ],
    youtubeId: 'Q51GDKR9_So',
    tags: ['mexican', 'street food', 'spicy'],
    calories: 320,
    rating: 4.5
  },
  {
    id: '5',
    name: 'Pad Thai',
    cuisine: 'Thai',
    difficulty: 'Medium',
    prepTime: 25,
    cookTime: 15,
    servings: 4,
    image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Classic Thai stir-fried noodles with sweet and tangy flavors',
    ingredients: [
      '8 oz rice noodles',
      '1/4 cup fish sauce',
      '3 tbsp brown sugar',
      '2 tbsp tamarind paste',
      '2 tbsp vegetable oil',
      '3 eggs, beaten',
      '1 cup bean sprouts',
      '3 green onions, chopped',
      '1/4 cup peanuts, crushed',
      '2 limes, quartered',
      '1 lb shrimp or chicken'
    ],
    instructions: [
      'Soak rice noodles in warm water until soft',
      'Mix fish sauce, brown sugar, and tamarind for sauce',
      'Heat oil in a wok over high heat',
      'Add protein and cook until done',
      'Push to one side, scramble eggs',
      'Add drained noodles and sauce',
      'Toss everything together for 2-3 minutes',
      'Add bean sprouts and green onions',
      'Serve with peanuts and lime wedges'
    ],
    youtubeId: 'Upb72-HLN4k',
    tags: ['noodles', 'stir-fry', 'thai'],
    calories: 420,
    rating: 4.7
  },
  {
    id: '6',
    name: 'French Croissants',
    cuisine: 'French',
    difficulty: 'Hard',
    prepTime: 180,
    cookTime: 20,
    servings: 8,
    image: 'https://images.pexels.com/photos/3992206/pexels-photo-3992206.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Buttery, flaky French pastries perfect for breakfast',
    ingredients: [
      '500g bread flour',
      '10g salt',
      '80g sugar',
      '10g instant yeast',
      '300ml warm milk',
      '250g butter, cold',
      '1 egg for wash'
    ],
    instructions: [
      'Mix flour, salt, sugar, and yeast in a bowl',
      'Add warm milk and knead into smooth dough',
      'Wrap and refrigerate for 1 hour',
      'Roll butter into rectangle between parchment',
      'Roll dough and encase butter completely',
      'Perform 3 rounds of folding with 30-min rests',
      'Roll out and cut into triangles',
      'Roll triangles into croissant shape',
      'Proof for 2 hours until doubled',
      'Brush with egg wash and bake at 375°F for 15-20 minutes'
    ],
    youtubeId: 'hY19NK9hP8s',
    tags: ['pastry', 'breakfast', 'french'],
    calories: 280,
    rating: 4.9
  },
  {
    id: '7',
    name: 'Greek Moussaka',
    cuisine: 'Greek',
    difficulty: 'Hard',
    prepTime: 60,
    cookTime: 90,
    servings: 8,
    image: 'https://images.pexels.com/photos/5737233/pexels-photo-5737233.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional Greek casserole with layers of eggplant, meat sauce, and béchamel',
    ingredients: [
      '3 large eggplants, sliced',
      '1 lb ground lamb',
      '1 onion, diced',
      '2 cans diced tomatoes',
      '1/2 cup red wine',
      '3 tbsp olive oil',
      '2 bay leaves',
      '1 tsp cinnamon',
      'For béchamel: 4 tbsp butter, 4 tbsp flour, 2 cups milk',
      '1 cup Parmesan cheese',
      'Salt and pepper'
    ],
    instructions: [
      'Salt eggplant slices and let drain for 30 minutes',
      'Brush with oil and grill until tender',
      'Cook lamb with onions until browned',
      'Add tomatoes, wine, and spices, simmer 30 minutes',
      'Make béchamel: melt butter, whisk in flour, add milk',
      'Layer eggplant, meat sauce, repeat',
      'Top with béchamel and cheese',
      'Bake at 350°F for 45 minutes until golden',
      'Rest for 15 minutes before serving'
    ],
    youtubeId: 'lWaXXS8jMjM',
    tags: ['casserole', 'mediterranean', 'hearty'],
    calories: 540,
    rating: 4.6
  },
  {
    id: '8',
    name: 'Korean Kimchi Fried Rice',
    cuisine: 'Korean',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spicy and flavorful Korean fried rice with fermented kimchi',
    ingredients: [
      '3 cups cooked rice, day-old',
      '1 cup kimchi, chopped',
      '1/4 cup kimchi juice',
      '2 tbsp vegetable oil',
      '2 eggs',
      '2 green onions, sliced',
      '1 tbsp soy sauce',
      '1 tsp sesame oil',
      '1 tsp sugar',
      'Sesame seeds for garnish'
    ],
    instructions: [
      'Heat oil in a large skillet or wok',
      'Add kimchi and stir-fry for 2 minutes',
      'Add rice and break up any clumps',
      'Mix in kimchi juice, soy sauce, and sugar',
      'Stir-fry for 5-6 minutes until heated through',
      'Push rice to one side, scramble eggs',
      'Mix eggs into rice',
      'Drizzle with sesame oil',
      'Garnish with green onions and sesame seeds'
    ],
    youtubeId: '8VGJkt58_Ug',
    tags: ['rice', 'spicy', 'fermented'],
    calories: 350,
    rating: 4.4
  },
  {
    id: '9',
    name: 'Brazilian Feijoada',
    cuisine: 'Brazilian',
    difficulty: 'Hard',
    prepTime: 30,
    cookTime: 180,
    servings: 8,
    image: 'https://images.pexels.com/photos/5737264/pexels-photo-5737264.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional Brazilian black bean stew with various meats',
    ingredients: [
      '1 lb black beans, soaked overnight',
      '1/2 lb bacon, chopped',
      '1/2 lb Portuguese sausage',
      '1/2 lb pork shoulder',
      '1/4 lb beef jerky',
      '1 onion, diced',
      '4 cloves garlic, minced',
      '2 bay leaves',
      '1 orange, zested',
      'Salt and pepper',
      'Collard greens for serving'
    ],
    instructions: [
      'Drain and rinse soaked beans',
      'In a large pot, cook bacon until crispy',
      'Add sausage and pork, brown on all sides',
      'Add onions and garlic, cook until soft',
      'Add beans, bay leaves, and enough water to cover',
      'Bring to boil, then simmer for 2-3 hours',
      'Add beef jerky in last hour',
      'Season with salt, pepper, and orange zest',
      'Serve with rice, collard greens, and orange slices'
    ],
    youtubeId: 'JpOXKhMQP7s',
    tags: ['beans', 'hearty', 'traditional'],
    calories: 620,
    rating: 4.5
  },
  {
    id: '10',
    name: 'Moroccan Tagine',
    cuisine: 'Moroccan',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 60,
    servings: 6,
    image: 'https://images.pexels.com/photos/5737249/pexels-photo-5737249.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Aromatic North African stew cooked with exotic spices',
    ingredients: [
      '2 lbs lamb or chicken, cubed',
      '2 onions, sliced',
      '1 cup dried apricots',
      '1/2 cup almonds',
      '2 tsp cinnamon',
      '1 tsp ginger',
      '1 tsp turmeric',
      '1/2 tsp saffron',
      '2 cups chicken broth',
      '2 tbsp olive oil',
      'Fresh mint and cilantro'
    ],
    instructions: [
      'Heat oil in tagine or heavy pot',
      'Brown meat on all sides',
      'Add onions and cook until soft',
      'Add all spices and cook for 1 minute',
      'Add broth and bring to boil',
      'Cover and simmer for 45 minutes',
      'Add apricots and almonds',
      'Cook for 15 more minutes until tender',
      'Garnish with fresh herbs and serve with couscous'
    ],
    youtubeId: 'NsYJUHYzS9M',
    tags: ['stew', 'aromatic', 'north african'],
    calories: 480,
    rating: 4.7
  }
];

// Generate more recipes programmatically to reach 1000+
export const generateMoreRecipes = (): Recipe[] => {
  const cuisines = ['Italian', 'Chinese', 'Indian', 'Mexican', 'Thai', 'French', 'Japanese', 'Korean', 'Greek', 'Spanish', 'Turkish', 'Vietnamese', 'Lebanese', 'Moroccan', 'Brazilian', 'Peruvian', 'Ethiopian', 'Russian', 'German', 'British'];
  const dishTypes = ['Curry', 'Soup', 'Salad', 'Pasta', 'Rice Bowl', 'Stir Fry', 'Grilled', 'Roasted', 'Steamed', 'Fried'];
  const proteins = ['Chicken', 'Beef', 'Pork', 'Fish', 'Lamb', 'Shrimp', 'Tofu', 'Vegetables'];
  const adjectives = ['Spicy', 'Creamy', 'Crispy', 'Tender', 'Savory', 'Sweet', 'Tangy', 'Aromatic', 'Rich', 'Fresh'];

  const additionalRecipes: Recipe[] = [];
  const pexelsImages = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  for (let i = 11; i <= 1000; i++) {
    const cuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
    const dishType = dishTypes[Math.floor(Math.random() * dishTypes.length)];
    const protein = proteins[Math.floor(Math.random() * proteins.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
    additionalRecipes.push({
      id: i.toString(),
      name: `${adjective} ${cuisine} ${protein} ${dishType}`,
      cuisine,
      difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)] as 'Easy' | 'Medium' | 'Hard',
      prepTime: Math.floor(Math.random() * 60) + 10,
      cookTime: Math.floor(Math.random() * 120) + 15,
      servings: Math.floor(Math.random() * 6) + 2,
      image: pexelsImages[Math.floor(Math.random() * pexelsImages.length)],
      description: `Delicious ${adjective.toLowerCase()} ${cuisine.toLowerCase()} dish featuring ${protein.toLowerCase()}`,
      ingredients: [
        `1 lb ${protein.toLowerCase()}`,
        '2 tbsp olive oil',
        '1 onion, diced',
        '2 cloves garlic, minced',
        'Salt and pepper to taste',
        'Mixed herbs and spices'
      ],
      instructions: [
        'Prepare all ingredients',
        `Season ${protein.toLowerCase()} with salt and pepper`,
        'Heat oil in a large pan',
        'Cook according to traditional method',
        'Serve hot with appropriate sides'
      ],
      youtubeId: 'dQw4w9WgXcQ',
      tags: [cuisine.toLowerCase(), protein.toLowerCase(), adjective.toLowerCase()],
      calories: Math.floor(Math.random() * 400) + 200,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10
    });
  }

  return additionalRecipes;
};

export const allRecipes = [...recipes, ...generateMoreRecipes()];