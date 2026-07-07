// Import menu images
import alooDoubleComboImg from '../assets/menu/Aloo Double Dhamaal (Combo).jpg';
import alooMastiMeal2Img from '../assets/menu/Aloo Masti Meal (2).jpg';
import bbSpecialPaneerMakhaniImg from '../assets/menu/BB Special Paneer Makhani.jpg';
import bunbaySpecialPaneerMakhaniImg from '../assets/menu/BunBay Special Paneer Makhani.jpg';
import blueLagoonImg from '../assets/menu/Blue Lagoon.jpg';
import chatakedarAlooTikkiBurgerImg from '../assets/menu/Chatakedar Aloo Tikki Burger.jpg';
import cheeseFireBoxImg from '../assets/menu/Cheese & Fire Box (Combo).jpg';
import cheeseHungamaMealImg from '../assets/menu/Cheese Hungama Meal.jpg';
import cheeseRushTikkiImg from '../assets/menu/Cheese Rush Tikki.jpg';
import cheeseSauceLoadedFriesImg from '../assets/menu/Cheese Sauce Loaded Fries.jpg';
import classicFriesImg from '../assets/menu/Classic Fries.jpg';
import doubleChatakedarAlooTikkiBurgerImg from '../assets/menu/Double Chatakedar Aloo Tikki Burger.jpg';
import judwaDhamakaBurgerImg from '../assets/menu/Judwa Dhamaka Burger.jpg';
import makhanShakhanBurgerImg from '../assets/menu/Makhan Shakhan Burger.jpg';
import mintMojitoImg from '../assets/menu/Mint Mojito.jpg';
import paneerNawabiMealImg from '../assets/menu/Paneer Nawabi Meal.jpg';
import periPeriFriesImg from '../assets/menu/Peri Peri Fries.jpg';
import periPeriMayoLoadedFriesImg from '../assets/menu/Peri Peri Mayo Loaded Fries.jpg';
import periPeriPaneerBlazeImg from '../assets/menu/Peri Peri Paneer Blaze.jpg';
import periPeriZingBurgerImg from '../assets/menu/Peri Peri Zing Burger.jpg';
import royalMakhaniFeastImg from '../assets/menu/Royal Makhani Feast.jpg';
import snapSizzleImg from '../assets/menu/Snap & Sizzle.jpg';
import spicyZestyTwinPackImg from '../assets/menu/Spicy & Zesty Twin Pack.jpg';
import veggieCrunchDelightImg from '../assets/menu/Veggie Crunch Delight.jpg';
import zingZingMealImg from '../assets/menu/Zing Zing Meal.jpg';

export const menuItems = [
  // --- Burgers ---
  {
    id: 1,
    name: "BunBay Special Paneer Makhani",
    category: "burgers",
    price: 189,
    image: bunbaySpecialPaneerMakhaniImg, // Changed image
    description: "Golden crispy paneer layered with a rich, buttery makhani sauce, fresh lettuce, and creamy mayo—crafted for a truly indulgent and satisfying bite.",
    tags: ["Best Seller", "Paneer", "Spicy", "Veg"] // Removed double patty, added spicy
  },
  {
    id: 2,
    name: "Snap and Sizzle",
    category: "burgers",
    price: 139,
    image: snapSizzleImg,
    description: "Golden crispy veggie patty layered with fresh greens, crunchy cabbage, and pickled cucumber, finished with a bold Dijon mustard and creamy mayo blend—crafted for a perfectly balanced, zesty bite.",
    tags: ["New", "Veg"]
  },
  {
    id: 3,
    name: "Cheese Rush Tikki",
    category: "burgers",
    price: 79,
    image: cheeseRushTikkiImg,
    description: "Crispy aloo tikki layered with rich melted cheese, fresh veggies, and creamy sauces—comfort food with a cheesy twist.",
    tags: ["Best Seller", "Cheesy", "Veg"]
  },
  {
    id: 4,
    name: "Peri Peri Paneer Blaze",
    category: "burgers",
    price: 179,
    image: periPeriPaneerBlazeImg,
    description: "Crispy paneer with creamy peri peri sauce, fresh veggies, and jalapeños—spicy, zesty, and satisfying.",
    tags: ["Spicy", "Paneer", "Veg"]
  },
  {
    id: 5,
    name: "Peri Peri Zing Burger",
    category: "burgers",
    price: 119,
    image: periPeriZingBurgerImg,
    description: "Crispy aloo tikki with creamy peri peri sauce, fresh veggies, and jalapeños—spicy, zesty, and full of flavour.",
    tags: ["Spicy", "Veg"]
  },
  {
    id: 6,
    name: "Judwa Dhamaka Burger",
    category: "burgers",
    price: 109,
    image: judwaDhamakaBurgerImg,
    description: "Two crispy aloo tikkis layered with double melted cheese, fresh veggies, and creamy sauces—made for big cravings and bigger appetites.",
    tags: ["Double Patty", "Veg"]
  },
  {
    id: 7,
    name: "Makhan Shakhan Burger",
    category: "burgers",
    price: 159,
    image: makhanShakhanBurgerImg,
    description: "Crispy patty loaded with rich, buttery makhani sauce, fresh crunch, and creamy mayo—smooth, indulgent, and satisfying.",
    tags: ["Spicy", "Creamy", "Veg"] // Added spicy
  },
  {
    id: 8,
    name: "Veggie Crunch Delight",
    category: "burgers",
    price: 89,
    image: veggieCrunchDelightImg,
    description: "Golden crispy veggie patty with a fresh crunch of lettuce, onions, and creamy mayo—simple, satisfying, and delicious in every bite.",
    tags: ["Classic", "Veg"]
  },
  {
    id: 9,
    name: "Double Chatakedar Aloo Tikki Burger",
    category: "burgers",
    price: 69,
    image: doubleChatakedarAlooTikkiBurgerImg,
    description: "Twice the aloo tikki, twice the satisfaction—made with flavourful Indian spices, fresh ingredients, and a comforting street-style taste in every bite.",
    tags: ["New", "Veg"] // Removed spicy
  },
  {
    id: 10,
    name: "Chatakedar Aloo Tikki Burger",
    category: "burgers",
    price: 49,
    image: chatakedarAlooTikkiBurgerImg,
    description: "Crispy desi aloo tikki, loaded with bold spices, fresh veggies, and creamy sauce—your everyday comfort burger with a street-style kick.",
    tags: ["Veg"] // Removed spicy
  },

  // --- Sides & Fries ---
  {
    id: 11,
    name: "Peri Peri Mayo Loaded Fries",
    category: "sides",
    price: 149,
    image: periPeriMayoLoadedFriesImg,
    description: "Fiery peri-peri fries loaded with a rich drizzle of peri-peri mayo and dynamic cheese sauce.",
    tags: ["Spicy", "Cheesy", "Veg"]
  },
  {
    id: 12,
    name: "Peri Peri Fries",
    category: "sides",
    price: 119,
    image: periPeriFriesImg,
    description: "Crispy golden fries tossed in our signature hot and tangy peri-peri spice mix.",
    tags: ["Spicy", "Veg"]
  },
  {
    id: 13,
    name: "Cheese Sauce Loaded Fries",
    category: "sides",
    price: 139,
    image: cheeseSauceLoadedFriesImg,
    description: "Golden fries drenched in warm, creamy, melted cheese sauce—pure indulgence.",
    tags: ["Cheesy", "Veg"]
  },
  {
    id: 14,
    name: "Classic Fries",
    category: "sides",
    price: 99,
    image: classicFriesImg,
    description: "Crispy, golden potato fries lightly salted to perfection—the ultimate classic side.",
    tags: ["Classic", "Veg"]
  },

  // --- Beverages ---
  {
    id: 15,
    name: "Blue Lagoon",
    category: "beverages",
    price: 89,
    image: blueLagoonImg,
    description: "A vibrant, tropical blue mocktail featuring a refreshing blend of citrus flavors, blue curaçao, and sparkling soda.", // Removed Sprite
    tags: ["Refreshing", "Veg"]
  },
  {
    id: 16,
    name: "Mint Mojito",
    category: "beverages",
    price: 79,
    image: mintMojitoImg,
    description: "A refreshing blend of fresh mint leaves, lime juice, sparkling soda, and a touch of sweetness.",
    tags: ["Refreshing", "Best Seller", "Veg"]
  },

  // --- Combos ---
  {
    id: 17,
    name: "Royal Makhani Feast",
    category: "combos",
    price: 299,
    image: royalMakhaniFeastImg,
    description: "BunBay Special Paneer Makhani Burger + Makhan Shakhan Burger combo—a makhani lover's dream.",
    tags: ["Best Seller", "Paneer", "Spicy", "Veg"] // Added spicy
  },
  {
    id: 18,
    name: "Cheese & Fire Box",
    category: "combos",
    price: 219,
    image: cheeseFireBoxImg,
    description: "Cheese Rush Burger + Peri Peri Paneer Blaze Burger combo—spicy, cheesy, and satisfying.",
    tags: ["Spicy", "Cheesy", "Veg"]
  },
  {
    id: 19,
    name: "Aloo Double Dhamaal",
    category: "combos",
    price: 99,
    image: alooDoubleComboImg,
    description: "Chatakedar Aloo Tikki Burger + Double Chatakedar Aloo Tikki Burger combo—double the street-style delight.",
    tags: ["Veg"]
  },
  {
    id: 20,
    name: "Spicy & Zesty Twin Pack",
    category: "combos",
    price: 229,
    image: spicyZestyTwinPackImg,
    description: "Peri Peri Zing Burger + Snap & Sizzle Burger combo—perfectly balanced heat and crunch.",
    tags: ["Spicy", "Veg"]
  },

  // --- Meals ---
  {
    id: 21,
    name: "Paneer Nawabi Meal",
    category: "combos",
    price: 329,
    image: paneerNawabiMealImg,
    description: "BunBay Special Paneer Makhani + Cheese Sauce Loaded Fries + Blue Lagoon.",
    tags: ["Paneer", "Value Deal", "Veg"]
  },
  {
    id: 22,
    name: "Zing Zing Meal",
    category: "combos",
    price: 249,
    image: zingZingMealImg,
    description: "Peri Peri Zing Burger + Peri Peri Fries + Blue Lagoon.",
    tags: ["Spicy", "Value Deal", "Veg"]
  },
  {
    id: 23,
    name: "Cheese Hungama Meal",
    category: "combos",
    price: 209,
    image: cheeseHungamaMealImg,
    description: "Cheese Rush Tikki + Classic Fries + Mint Mojito.",
    tags: ["Cheesy", "Value Deal", "Veg"]
  },
  {
    id: 24,
    name: "Aloo Masti Meal",
    category: "combos",
    price: 169,
    image: alooMastiMeal2Img,
    description: "Chatakedar Aloo Tikki Burger + Classic Fries + Mint Mojito.",
    tags: ["Value Deal", "Veg"]
  }
];
