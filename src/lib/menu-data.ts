export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  veg?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "soups-salads",
    name: "Soups & Salads",
    items: [
      { name: "Veg Hot & Sour Soup", description: "Spicy & Tangy Broth With Vegetables", price: "₹135.00", veg: true },
      { name: "Classic Veg Sweet Corn Soup", description: "Smooth & Flavorful Corn Based Soup", price: "₹135.00", veg: true },
      { name: "Spicy Veg Manchow Soup", description: "Spicy Tangy Soup with Veggies & A Rich Broth", price: "₹145.00", veg: true },
      { name: "Thai Veg Laksa Soup", description: "Creamy & Aromatic Stock Water", price: "₹175.00", veg: true },
      { name: "Tangy Veg Wonton Soup", description: "Tangy & Flavorful", price: "₹175.00", veg: true },
      { name: "Chicken Hot & Sour Soup", description: "Spicy & Tangy Broth With Vegetables", price: "₹159.00", veg: false },
      { name: "Chicken Sweet Corn Soup", description: "Smooth & Flavorful Corn Based Soup", price: "₹159.00", veg: false },
      { name: "Spicy Chicken Manchow Soup", description: "Spicy Tangy Soup with Veggies & A Rich Broth", price: "₹175.00", veg: false },
      { name: "Thai Chicken Laksa Soup", description: "Creamy & Aromatic Stock Water", price: "₹215.00", veg: false },
      { name: "Tangy Chicken Wonton Soup", description: "Tangy & Flavorful", price: "₹229.00", veg: false },
      { name: "Crispy Fried Egg Salad Bowl", description: "Fried Egg & Exotic Vegetable Salad Tossed With A Bright Spicy & Flavorful Dressing", price: "₹265.00", veg: false }
    ]
  },
  {
    id: "specials",
    name: "Cafe De Vela Special",
    items: [
      { name: "Chicken Dimsum (5 Pcs) ( Must Try )", description: "Soft dumplings stuffed with flavorful minced chicken.", price: "₹469.00", veg: false },
      { name: "Chicken Steak (500 Ml)", description: "Juicy grilled chicken steak served with rich sauce and sides.", price: "₹489.00", veg: false },
      { name: "Roll Chicken", description: "Crispy chicken roll packed with spices and flavor.", price: "₹265.00", veg: false },
      { name: "Spl. Ferrero Rocher Shake", description: "Creamy chocolate shake blended with Ferrero Rocher.", price: "₹249.00", veg: true },
      { name: "Spl. Lotus Biscoff Shake", description: "Smooth milkshake infused with Lotus Biscoff cookies.", price: "₹259.00", veg: true },
      { name: "Veg Dimsum (5 Pcs) ( Must Try )", description: "Steamed dumplings filled with fresh seasoned vegetables.", price: "₹425.00", veg: true }
    ]
  },
  {
    id: "chinese-appetizers",
    name: "Chinese Appetizers",
    items: [
      { name: "Crispy Chilli Potato Bites", description: "Crispy fried potato fingers tossed in a bold garlic-chilli sauce with spring onions and sesame.", price: "₹149.00", veg: true },
      { name: "Honey Tossed Chilli Potatoes", description: "Twice-fried potatoes glazed with a sweet-spicy honey chilli sauce, topped with crushed chillies and scallions.", price: "₹149.00", veg: true },
      { name: "Classic Veg Manchurian Dry", description: "Crunchy veggie dumplings wok-tossed in a tangy, umami-rich Indo-Chinese sauce.", price: "₹175.00", veg: true },
      { name: "Desi Chilli Paneer Dry", description: "Soft paneer cubes seared and tossed in spicy garlic-chilli sauce with capsicum and onions.", price: "₹175.00", veg: true },
      { name: "Fiery Schezwan Mushroom", description: "Juicy mushrooms stir-fried in hot Schezwan sauce with sharp ginger-garlic and green chillies.", price: "₹175.00", veg: true },
      { name: "Schezwan Spiced Paneer", description: "Paneer cubes tossed in fiery red Schezwan sauce - bold, spicy, and full of crunch.", price: "₹175.00", veg: true },
      { name: "Street-Style Chilli Chicken Dry", description: "Tender chicken cubes tossed with bell peppers in a spicy garlic-chilli sauce - a fiery classic.", price: "₹175.00", veg: false },
      { name: "Hot Garlic Chilli Wings", description: "Crispy fried chicken wings coated in a dry chilli rub with roasted spices and spring onion.", price: "₹265.00", veg: false },
      { name: "Chinese Chicken Satay Sticks", description: "Juicy grilled chicken skewers marinated in Asian spices and served with a zesty peanut dip.", price: "₹219.00", veg: false },
      { name: "Lemongrass Chicken Balls", description: "Thai-inspired chicken balls infused with lemongrass and herbs, pan-tossed with soy and garlic.", price: "₹175.00", veg: false },
      { name: "Golden Crispy Chicken Tempura", description: "Chicken fingers coated in light tempura batter, fried to a golden crisp with subtle seasoning.", price: "₹175.00", veg: false },
      { name: "Drums Of Heaven (Classic Indo-Chinese Wings)", description: "Chicken lollipops glazed in a spicy garlic sauce - juicy inside, crunchy outside.", price: "₹219.00", veg: false },
      { name: "Chicken Lollipop Dry", description: "Classic Frenched chicken wings fried crisp and tossed with a dry spice mix.", price: "₹219.00", veg: false },
      { name: "Crispy Panko Chicken Bites", description: "Chicken strips coated in Japanese-style panko crumbs, deep-fried for that ultimate crunch.", price: "₹219.00", veg: false }
    ]
  },
  {
    id: "wok-mains",
    name: "Wok Mains",
    items: [
      { name: "Veg Manchurian In Signature Gravy", description: "Crisp vegetable dumplings simmered in a bold, tangy soy-based gravy with garlic, ginger, and spring onions.", price: "₹175.00", veg: true },
      { name: "Spicy Chilli Paneer Gravy", description: "Soft paneer cubes tossed in a spicy Indo-Chinese chilli garlic sauce, enriched with peppers and scallions.", price: "₹175.00", veg: true },
      { name: "Schezwan Mushroom Gravy", description: "Juicy mushrooms cooked in a fiery Schezwan-style gravy with deep garlic and chili undertones.", price: "₹175.00", veg: true },
      { name: "Paneer Kung Pao Gravy", description: "Cubes of paneer in a bold sweet-spicy Kung Pao sauce with roasted peanuts, peppers, and a dash of soy.", price: "₹175.00", veg: true },
      { name: "Veggies In Schezwan Sauce", description: "Stir-fried seasonal vegetables smothered in a punchy, spicy Schezwan gravy full of red chili heat.", price: "₹175.00", veg: true },
      { name: "Wok-Tossed Veggies In Black Pepper Sauce", description: "Crunchy vegetables tossed in a peppery, umami-rich sauce with subtle notes of ginger and soy.", price: "₹175.00", veg: true },
      { name: "Kung Pao Style Veggies", description: "A classic wok-tossed medley of vegetables in sweet, tangy Kung Pao sauce with toasted cashews.", price: "₹175.00", veg: true },
      { name: "Classic Chilli Chicken Gravy", description: "Juicy chicken chunks cooked in a spicy garlic-chilli gravy with bell peppers and spring onions.", price: "₹175.00", veg: false },
      { name: "Spicy Chilli Wings Gravy", description: "Fried wings bathed in a thick, tangy chili sauce laced with garlic and soy.", price: "₹265.00", veg: false },
      { name: "Lemon Infused Chicken Gravy", description: "Tender chicken glazed in a bright, citrusy lemon gravy with subtle ginger and green chili.", price: "₹175.00", veg: false },
      { name: "Kung Pao Chicken Classic Gravy", description: "Spicy, sweet, and smoky chicken tossed with bell peppers, roasted peanuts, and classic Kung Pao sauce.", price: "₹175.00", veg: false }
    ]
  },
  {
    id: "noodles-rice",
    name: "Noodles & Fried Rice",
    items: [
      { name: "Street-Style Veg Fried Rice", description: "Fragrant basmati rice stir-fried with fresh seasonal vegetables, tossed in light soy sauce and spices for a flavorful, wholesome dish.", price: "₹245.00", veg: true },
      { name: "Street-Style Veg Hakka Noodles", description: "Stir Fried Noodles Tossed With Fresh Veggies & Flavorful Spices", price: "₹189.00", veg: true },
      { name: "Fiery Veg Chilli Garlic Noodles", description: "Spicy Noodles Infused With Bold Chilli Oil & Garlic Flavour", price: "₹189.00", veg: true },
      { name: "Veg Singapore Style Noodles", description: "Noodles Stir Fried With Veggies & Touch Of Mild Spices", price: "₹245.00", veg: true },
      { name: "Korean Gochujang Veg Noodles", description: "Korean Noodles With Soy Sauce,Veggies & Savoury Kick", price: "₹245.00", veg: true },
      { name: "Spicy Hot Garlic Veg Noodles", description: "The Prominent Flavours Of This Sauce Are A Balnce Of Heat, Tangy & Spicy", price: "₹189.00", veg: true },
      { name: "Asian Veg Ramen Bowl", description: "Spicy & Tangy Ramen Spices - Stir Fried Vegetables", price: "₹435.00", veg: true },
      { name: "Veg Chilli Garlic Fried Rice", description: "Spicy Rice With Chilli & Garlic", price: "₹245.00", veg: true },
      { name: "Butter Garlic Fried Rice (Veg)", description: "Rice With Buttery Garlic Goodness", price: "₹215.00", veg: true },
      { name: "Smoky Burnt Garlic Fried Rice", description: "Aromatic & Delicious Fried Rice With A Punch Of Roasted Garlic", price: "₹245.00", veg: true },
      { name: "Thai Spicy Basil Fried Rice", description: "A wholesome medley of fresh vegetables saut", price: "₹215.00", veg: true },
      { name: "Hick Chick Special Veg Fried Rice", description: "Light Sauces & Spices", price: "₹215.00", veg: true },
      { name: "Chicken Hakka Street Noodles", description: "Stir Fried Noodles Tossed With Fresh Veggies & Flavorful Spices", price: "₹225.00", veg: false },
      { name: "Fiery Chicken Chilli Garlic Noodles", description: "Spicy Noodles Infused With Bold Chilli Oil & Garlic Flavour", price: "₹225.00", veg: false },
      { name: "Chicken Singapore Style Noodles", description: "Noodles Stir Fried With Veggies & Touch Of Mild Spices", price: "₹225.00", veg: false },
      { name: "Korean Chicken Noodles Bowl", description: "Korean Noodles With Soy Sauce,Veggies & Savoury Kick", price: "₹225.00", veg: false },
      { name: "Hot Garlic Chicken Noodles", description: "The Prominent Flavours Of This Sauce Are A Balnce Of Heat, Tangy & Spicy", price: "₹225.00", veg: false },
      { name: "Chicken Ramen Bowl", description: "Spicy & Tangy Ramen Spices - Stir Fried Vegetables / Fried Chicken", price: "₹475.00", veg: false },
      { name: "Spicy Chicken Chilli Garlic Rice", description: "Spicy Rice With Chilli & Garlic", price: "₹225.00", veg: false },
      { name: "Butter Garlic Chicken Rice", description: "Rice With Buttery Garlic Goodness", price: "₹199.00", veg: false },
      { name: "Smoky Burnt Garlic Chicken Rice", description: "Aromatic & Delicious Fried Rice With A Punch Of Roasted Garlic", price: "₹225.00", veg: false },
      { name: "Thai Basil Chicken Fried Rice", description: "Fragrant basmati rice tossed with tender chicken pieces and aromatic basil leaves. Each bite delivers a perfect harmony of spice, herbs, and savory richness that is both comforting and flavorful.", price: "₹255.00", veg: false },
      { name: "Hick Chick Special Chicken Rice", description: "Light Sauces & Spices", price: "₹255.00", veg: false }
    ]
  },
  {
    id: "momos-dimsums",
    name: "Momos & Dimsums",
    items: [
      { name: "Steamed Veg Momos", description: "Soft Steamed Filled With Savoury Stuffing", price: "₹159.00", veg: true },
      { name: "Crispy Fry Veg Momos", description: "Crispy Golden Fried momo", price: "₹175.00", veg: true },
      { name: "Crispy Veg Kurkure Momos", description: "Crispy Golden Fried momo", price: "₹175.00", veg: true },
      { name: "Pan-Fried Veg Kothe Momos", description: "A Nice Golden Brown Pan Fried To Perfection", price: "₹175.00", veg: true },
      { name: "Nepali Veg Jhol Momos ( Must Try )", description: "A Traditional & Authentic Dish Originates From Nepal &Tibet. These momo Served In A Flavorful, Rich, Spicy, & Tangy Broth Called Jhol Base Of Roasted Sesame Seeds, Peanuts & Coriander", price: "₹239.00", veg: true },
      { name: "Steamed Chicken Momos", description: "Soft Steamed Filled With Savoury Stuffing", price: "₹175.00", veg: false },
      { name: "Crispy Chicken Fry Momos", description: "Crispy Golden Fried momo", price: "₹175.00", veg: false },
      { name: "Crispy Chicken Kurkure Momos", description: "Crispy Golden Fried momo", price: "₹175.00", veg: false },
      { name: "Pan-Fried Chicken Kothe Momos", description: "A Nice Golden Brown Pan Fried To Perfection", price: "₹175.00", veg: false },
      { name: "Nepali Chicken Jhol Momos ( Must Try )", description: "A Traditional & Authentic Dish Originates From Nepal &Tibet. These momo Served In A Flavorful, Rich, Spicy, & Tangy Broth Called Jhol Base Of Roasted Sesame Seeds, Peanuts & Coriander", price: "₹319.00", veg: false },
      { name: "Har Gao Chicken Crystal Dimsums [5 Pcs] ( Must Try )", description: "Stuffed With Chicken & Dill", price: "₹469.00", veg: false },
      { name: "Green Garden Veg Dimsums [5 Pcs] ( Must Try )", description: "Exotic Vegetables & Stuffed With Chinese Seasoning", price: "₹425.00", veg: true }
    ]
  },
  {
    id: "pizza-pasta",
    name: "Pizzas & Pastas",
    items: [
      { name: "Spicy Veg Penne Arrabbiata Pasta", description: "Penne Pasta, Spicy Tomato Sauce, Vegetables, Garlic, Parsley", price: "₹265.00", veg: true },
      { name: "Creamy Veg Penne Alfredo Pasta", description: "Penne Pasta, Bechamel Sauce, Butter, Cream", price: "₹265.00", veg: true },
      { name: "Classic Veg Spaghetti Aglio Olio", description: "Spaghetti Pasta, Vegetables, Garlic, Olive Oil, Black Olives, Parsley", price: "₹309.00", veg: true },
      { name: "Spicy Chicken Penne Arrabbiata", description: "Penne Pasta, Spicy Tomato Sauce, Vegetables, Garlic, Parsley", price: "₹319.00", veg: false },
      { name: "Creamy Chicken Penne Alfredo", description: "Penne Pasta, Bechamel Sauce, Butter, Cream", price: "₹319.00", veg: false },
      { name: "Chicken Spaghetti Aglio Olio", description: "Spaghetti Pasta, Vegetables, Garlic, Olive Oil, Black Olives, Parsley", price: "₹355.00", veg: false },
      { name: "Cheesy Veg Macaroni Pasta", description: "Bechamel Sauce, Butter, Cream.", price: "₹265.00", veg: true },
      { name: "Veg Pasta In Mixed Sauce", description: "Vegetables, Cream, Italian Red Sauce", price: "₹265.00", veg: true },
      { name: "Veg Tandoori Delight Pizza ( Must Try )", description: "Tandoori Paneer, Onion, Corn, mozzarella Cheese", price: "₹310.00", veg: true },
      { name: "Classic Margherita Pizza", description: "Italian Tomato Sauce Base, Tomato Slice, Basil, Mozzarella Cheese", price: "₹235.00", veg: true },
      { name: "Veggie Extravaganza Pizza", description: "Bell Peppers, Mixed Olives, Zucchini, Cherry Tomato, Caper, Mozzarella & Feta Cheese", price: "₹299.00", veg: true },
      { name: "Spicy Peri Peri Chicken Pizza", description: "Peri Peri Chicken, Onions, Bell Peppers, Mozzarella Cheese", price: "₹305.00", veg: false },
      { name: "Cheesy Golden Corn Pizza", description: "Sweet Corns, Zucchini, Tomato Sauce, Mozzarella Cheese", price: "₹305.00", veg: true },
      { name: "Chilli Murgh Chicken Pizza", description: "Chilli Chicken, Onions, Mozzarella Cheese", price: "₹305.00", veg: false }
    ]
  },
  {
    id: "burgers-sandwiches-wraps",
    name: "Burgers, Sandwiches & Wraps",
    items: [
      { name: "Desi Aloo Tikki Burger", description: "Crispy Aloo Tikki With Fresh Veggies & Creamy Mayo In A Soft Bun", price: "₹175.00", veg: true },
      { name: "Veggie Queen Cheese Burger", description: "Vegetable Crispy Patty, Stuffed Cheese Slice, Fresh Veggies", price: "₹175.00", veg: true },
      { name: "Tandoori Paneer Grill Burger", description: "Spiced Tandoori Paneer With Fresh Veggies & Tangy Mayo In A Soft Bun", price: "₹219.00", veg: true },
      { name: "Grilled Paneer Cheese Burger", description: "Grilled Paneer, Fresh Veggies, Creamy Mayo, Cheese Slice", price: "₹219.00", veg: true },
      { name: "Paneer Coin Grilled Sandwich", description: "Stuffed With Creamy Spread, Delicious Paner, Sweet Corn & Fresh Veggies", price: "₹219.00", veg: true },
      { name: "Veg Grilled Sandwich", description: "Blend Of Creamy Spread, Fresh Veggies & Served With French Fries", price: "₹175.00", veg: true },
      { name: "Chicken Mayo Sandwich", description: "Blend Of Creamy Spread, Juicy Chicken & Fresh Veggies", price: "₹295.00", veg: false },
      { name: "Chicken & Egg Club Sandwich", description: "Blend Of Creamy Spread, Delicious Grilled Chicken, Egg, Fresh Veggies Served With French Fries", price: "₹325.00", veg: false },
      { name: "Veggie Delight Wrap ( Must Try )", description: "Fresh Veggies, Wrapped In Soft Tortilla", price: "₹145.00", veg: true },
      { name: "Classic Chicken Wrap ( Must Try )", description: "Juicy Chicken, Fresh Veggies, Soft Tortilla", price: "₹249.00", veg: false },
      { name: "Tandoori Paneer Wrap ( Must Try )", description: "Spiced Paner, Fresh Veggies, Soft Tortilla", price: "₹199.00", veg: true }
    ]
  },
  {
    id: "garlic-bread-sides",
    name: "Garlic Bread & Sides",
    items: [
      { name: "Classic French Fries", description: "Golden & Crispy, A Classic Fries", price: "₹175.00", veg: true },
      { name: "Peri Peri Masala Fries", description: "Crispy Fries, Tangy & Spicy", price: "₹219.00", veg: true },
      { name: "Loaded Cheese Fries", description: "Fries Served With Liquid Cheese", price: "₹219.00", veg: true },
      { name: "Crispy Potato Wedges", description: "Chunky Pieces OF Deep Fried Potatoes, Seasoned With A Blend Of Spices - Salt, Pepper, Garlic Powder, Paprika", price: "₹239.00", veg: true },
      { name: "Toasted Garlic Bread", description: "Crispy Toast With Garlic & Butter", price: "₹185.00", veg: true },
      { name: "Cheesy Garlic Bread", description: "Garlic Bread Topped With Mozzarella", price: "₹185.00", veg: true },
      { name: "Tandoori Paneer Garlic Bread", description: "Garlic Bread Stuffed With Tandoori Paner, Spices & Mozzarella Cheese", price: "₹219.00", veg: true },
      { name: "Classic Tomato Bruschetta", description: "Crusty Bread Topped With Ripe Tomatoes, Fresh Basil, Garlic, Olive Oil", price: "₹175.00", veg: true },
      { name: "Chicken Cheese Garlic Bread", description: "Crusty bread loaded with chicken, tomatoes, basil, and a splash of balsamic and olive oil for a burst of flavor in every bite.", price: "₹175.00", veg: false }
    ]
  },
  {
    id: "platters",
    name: "Platters",
    items: [
      { name: "Signature Veg Wok Platter", description: "Pick Any Four Items Of Your Choice. Chilli Potato, Noodles, Fried Rice, Garlic Bread, Manchurian, Peri Peri Fries. Any Two Mocktails Of Your Choice", price: "₹879.00", veg: true },
      { name: "Signature Non-Veg Wok Platter", description: "Pick Any Four Items Of Your Choice. Chilli Chicken, Chicken Noodles, Chicken Fried Rice, Garlic Bread, Chicken Manchurian, Peri Peri Fries, Chilli Potato. Any Two Mocktails Of Your Choice", price: "₹1,055.00", veg: false }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Choco Lava Cake With Vanilla Ice Cream", description: "Warm molten chocolate cake with a gooey center, served with creamy vanilla ice cream for the ultimate indulgence.", price: "₹175.00", veg: true },
      { name: "Chocolate Truffle Cake With Ice Cream", description: "Rich chocolate truffle cake paired with velvety vanilla ice cream", price: "₹145.00", veg: true },
      { name: "Eggless Blueberry Cheesecake", description: "Creamy, eggless New York-style cheesecake topped with a luscious blueberry compote.", price: "₹220.00", veg: true },
      { name: "Classic Blueberry Cheesecake", description: "Silky baked cheesecake enriched with eggs, layered with tangy blueberry topping.", price: "₹229.00", veg: false }
    ]
  },
  {
    id: "beverages",
    name: "Beverages & Milkshakes",
    items: [
      { name: "Tiramisu Dessert Shake", description: "Espresso-infused tiramisu blended into a creamy shake with notes of mascarpone and cocoa.", price: "₹205.00", veg: true },
      { name: "Kitkat Crunch Shake", description: "Creamy milkshake loaded with Kitkat chunks for that perfect crunchy-creamy fix.", price: "₹229.00", veg: true },
      { name: "Oreo Blast Shake", description: "A cookies & cream dream - crushed Oreos blended into a thick, frosty shake.", price: "₹219.00", veg: true },
      { name: "Ferrero Rocher Luxury Shake", description: "A luxurious blend of hazelnut, chocolate, and crushed Ferrero Rocher candies.", price: "₹249.00", veg: true },
      { name: "Lotus Biscoff Cream Shake", description: "Caramelized Lotus Biscoff blended into a creamy shake with warm spiced undertones.", price: "₹259.00", veg: true },
      { name: "Rich Alphonso Mango Shake", description: "Alphonso mangoes churned into a velvety milkshake - pure tropical bliss.", price: "₹205.00", veg: true },
      { name: "Creamy Butterscotch Shake", description: "Creamy shake with rich butterscotch sauce and crunchy praline bits.", price: "₹185.00", veg: true },
      { name: "Classic Cold Coffee", description: "Smooth and refreshing chilled coffee with a subtle roasted flavor.", price: "₹185.00", veg: true },
      { name: "Hazelnut Iced Coffee", description: "Iced coffee elevated with nutty hazelnut essence and creamy milk.", price: "₹195.00", veg: true },
      { name: "Strawberry Cream Shake", description: "Sweet strawberries blended into a smooth, pink delight topped with whipped cream.", price: "₹195.00", veg: true },
      { name: "Vanilla Bean Milkshake", description: "Classic vanilla shake made with premium ice cream - simple, smooth, timeless.", price: "₹185.00", veg: true },
      { name: "Classic Virgin Mojito", description: "Zesty lime and mint muddled to perfection with soda - crisp and refreshing.", price: "₹175.00", veg: true },
      { name: "Green Apple Mojito Cooler", description: "Sparkling mojito with green apple twist for a sweet-sour refresh.", price: "₹175.00", veg: true },
      { name: "Tropical Mango Mojito", description: "A tropical blend of mango and mint served over ice with a fizzy splash.", price: "₹175.00", veg: true },
      { name: "Blueberry Iced Tea", description: "Chilled brewed tea infused with ripe blueberry flavor and a touch of lemon.", price: "₹175.00", veg: true },
      { name: "Peach Iced Tea", description: "Refreshing iced tea with fragrant peach notes and a citrusy zing.", price: "₹175.00", veg: true },
      { name: "Kokum Cooler Mojito", description: "A tangy-spiced mojito made with kokum and mint for a bold desi refresher.", price: "₹175.00", veg: true },
      { name: "Classic Cappuccino", description: "Frothy hot cappuccino made with rich espresso and steamed milk.", price: "₹175.00", veg: true },
      { name: "Hazelnut Cappuccino", description: "Silky smooth hazelnut-flavored coffee with a warm, nutty aroma.", price: "₹175.00", veg: true },
      { name: "Belgian Hot Chocolate", description: "Creamy, molten hot chocolate topped with froth - a warm hug in a cup.", price: "₹175.00", veg: true },
      { name: "Red Bull Energy Drink", description: "The iconic energy drink - bold, fizzy, and ready to recharge your vibe.", price: "₹159.00", veg: true },
      { name: "Mineral Water", description: "On M.R.P", price: "₹69.00", veg: true }
    ]
  }
];
