const restorentData ={
  "success": true,
  "data": {
    "restaurants": [
      {
        "id": 1,
        "name": "Burger King",
        "image": "https://images.unsplash.com/photo-1606756790138-2210e43a9a6c",
        "cuisines": ["Burgers", "Fast Food", "American"],
        "rating": 4.3,
        "deliveryTime": "28 mins",
        "costForTwo": "₹350 for two",
        "location": "CG Road, Ahmedabad",
        "isOpen": true,
        "offer": "50% OFF up to ₹100",
        "isVeg": false,
        "menu": [
          { "itemId": 1, "name": "Whopper", "price": 159, "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433b", "isVeg": false },
          { "itemId": 2, "name": "Veg Crispy Burger", "price": 99, "image": "https://images.unsplash.com/photo-1603048297172-c92544798aea", "isVeg": true }
        ]
      },
      {
        "id": 2,
        "name": "Domino's Pizza",
        "image": "https://images.unsplash.com/photo-1594007654729-407eedc4be40",
        "cuisines": ["Pizza", "Italian", "Fast Food"],
        "rating": 4.5,
        "deliveryTime": "26 mins",
        "costForTwo": "₹400 for two",
        "location": "Maninagar, Ahmedabad",
        "isOpen": true,
        "offer": "Buy 1 Get 1 Free",
        "isVeg": true,
        "menu": [
          { "itemId": 3, "name": "Farmhouse Pizza", "price": 349, "image": "https://images.unsplash.com/photo-1601924582975-7e19158266d2", "isVeg": true },
          { "itemId": 4, "name": "Chicken Dominator", "price": 459, "image": "https://images.unsplash.com/photo-1542281286-9e0a16bb7366", "isVeg": false }
        ]
      },
      {
        "id": 3,
        "name": "Chinese Wok Express",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        "cuisines": ["Chinese", "Asian", "Thai"],
        "rating": 4.2,
        "deliveryTime": "22 mins",
        "costForTwo": "₹300 for two",
        "location": "Satellite, Ahmedabad",
        "isOpen": true,
        "offer": "₹125 OFF",
        "isVeg": false,
        "menu": [
          { "itemId": 5, "name": "Veg Hakka Noodles", "price": 159, "image": "https://images.unsplash.com/photo-1606131731446-5568d745f3a5", "isVeg": true },
          { "itemId": 6, "name": "Chicken Manchurian", "price": 199, "image": "https://images.unsplash.com/photo-1576402187878-974f70c89084", "isVeg": false }
        ]
      },
      {
        "id": 4,
        "name": "The South Kitchen",
        "image": "https://images.unsplash.com/photo-1626082927389-401c4645d9ae",
        "cuisines": ["South Indian", "Snacks"],
        "rating": 4.6,
        "deliveryTime": "18 mins",
        "costForTwo": "₹200 for two",
        "location": "Vastral, Ahmedabad",
        "isOpen": true,
        "offer": "Flat ₹75 OFF",
        "isVeg": true,
        "menu": [
          { "itemId": 7, "name": "Masala Dosa", "price": 89, "image": "https://images.unsplash.com/photo-1603899122643-e7dca5f43a78", "isVeg": true },
          { "itemId": 8, "name": "Idli Sambhar", "price": 70, "image": "https://images.unsplash.com/photo-1626082930757-1de95bef0cb4", "isVeg": true }
        ]
      },
      {
        "id": 5,
        "name": "Royal Biryani Center",
        "image": "https://images.unsplash.com/photo-1576402187878-974f70c89084",
        "cuisines": ["Biryani", "Mughlai", "North Indian"],
        "rating": 4.4,
        "deliveryTime": "27 mins",
        "costForTwo": "₹450 for two",
        "location": "Sarkhej, Ahmedabad",
        "isOpen": true,
        "offer": "60% OFF",
        "isVeg": false,
        "menu": [
          { "itemId": 9, "name": "Hyderabadi Chicken Biryani", "price": 249, "image": "https://images.unsplash.com/photo-1598511723859-25e8f9d07ab1", "isVeg": false },
          { "itemId": 10, "name": "Veg Dum Biryani", "price": 199, "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb", "isVeg": true }
        ]
      },

      {
        "id": 6,
        "name": "Hocco Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
        "cuisines": ["Ice Cream", "Desserts"],
        "rating": 4.8,
        "deliveryTime": "12 mins",
        "costForTwo": "₹150 for two",
        "location": "Navrangpura, Ahmedabad",
        "isOpen": true,
        "offer": "20% OFF",
        "isVeg": true,
        "menu": [
          { "itemId": 11, "name": "Belgian Chocolate Scoop", "price": 99, "image": "https://images.unsplash.com/photo-1497051788611-2c64812349f6", "isVeg": true },
          { "itemId": 12, "name": "Strawberry Sundae", "price": 129, "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40", "isVeg": true }
        ]
      },

      {
        "id": 7,
        "name": "Urban Punjabi",
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19",
        "cuisines": ["North Indian", "Punjabi"],
        "rating": 4.3,
        "deliveryTime": "24 mins",
        "costForTwo": "₹300 for two",
        "location": "Science City, Ahmedabad",
        "isOpen": true,
        "offer": "40% OFF",
        "isVeg": true,
        "menu": [
          { "itemId": 13, "name": "Paneer Butter Masala", "price": 189, "image": "https://images.unsplash.com/photo-1603899124588-e676d5d30d52", "isVeg": true },
          { "itemId": 14, "name": "Amritsari Kulcha", "price": 129, "image": "https://images.unsplash.com/photo-1625246333196-59c59e86cdc6", "isVeg": true }
        ]
      },

      {
        "id": 8,
        "name": "MexiQ Grill",
        "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        "cuisines": ["Mexican", "Grill", "Wraps"],
        "rating": 4.5,
        "deliveryTime": "23 mins",
        "costForTwo": "₹350 for two",
        "location": "Sindhubhavan Road",
        "isOpen": true,
        "offer": "30% OFF",
        "isVeg": false,
        "menu": [
          { "itemId": 15, "name": "Chicken Burrito", "price": 219, "image": "https://images.unsplash.com/photo-1601924928361-418e0c469acc", "isVeg": false },
          { "itemId": 16, "name": "Veg Mexican Rice Bowl", "price": 179, "image": "https://images.unsplash.com/photo-1553621042-f6e147245754", "isVeg": true }
        ]
      },

      {
        "id": 9,
        "name": "Tokyo Sushi Bar",
        "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
        "cuisines": ["Japanese", "Sushi", "Asian"],
        "rating": 4.7,
        "deliveryTime": "32 mins",
        "costForTwo": "₹600 for two",
        "location": "Prahlad Nagar",
        "isOpen": true,
        "offer": "₹150 OFF",
        "isVeg": false,
        "menu": [
          { "itemId": 17, "name": "Salmon Sushi", "price": 399, "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c", "isVeg": false },
          { "itemId": 18, "name": "Veg Maki Roll", "price": 299, "image": "https://images.unsplash.com/photo-1607326957431-29d25d2b386f", "isVeg": true }
        ]
      },

      {
        "id": 10,
        "name": "Cafe Arabica",
        "image": "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        "cuisines": ["Cafe", "Coffee", "Bakery"],
        "rating": 4.6,
        "deliveryTime": "15 mins",
        "costForTwo": "₹250 for two",
        "location": "Thaltej",
        "isOpen": true,
        "offer": "15% OFF",
        "isVeg": true,
        "menu": [
          { "itemId": 19, "name": "Cold Coffee", "price": 129, "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348", "isVeg": true },
          { "itemId": 20, "name": "Chocolate Muffin", "price": 89, "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587", "isVeg": true }
        ]
      },

      {
        "id": 11,
        "name": "Fresh Juice House",
        "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505",
        "cuisines": ["Juices", "Healthy"],
        "rating": 4.2,
        "deliveryTime": "12 mins",
        "costForTwo": "₹180 for two",
        "location": "Gota",
        "isOpen": true,
        "offer": "₹50 OFF",
        "isVeg": true,
        "menu": [
          { "itemId": 21, "name": "Mango Shake", "price": 99, "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87", "isVeg": true },
          { "itemId": 22, "name": "Pineapple Juice", "price": 79, "image": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc", "isVeg": true }
        ]
      },

      {
        "id": 12,
        "name": "Punjabi Dhaba",
        "image": "https://images.unsplash.com/photo-1604908177223-d7d8c3c55e3b",
        "cuisines": ["Punjabi", "North Indian", "Thali"],
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "costForTwo": "₹250 for two",
        "location": "Nikol",
        "isOpen": true,
        "offer": "25% OFF",
        "isVeg": true,
        "menu": [
          { "itemId": 23, "name": "Dal Makhani", "price": 149, "image": "https://images.unsplash.com/photo-1601050690597-df0568c318e8", "isVeg": true },
          { "itemId": 24, "name": "Paneer Tikka", "price": 189, "image": "https://images.unsplash.com/photo-1625246333196-59c59e86cdc6", "isVeg": true }
        ]
      },

      {
        "id": 13,
        "name": "Shree Sandwich Hub",
        "image": "https://images.unsplash.com/photo-1565299634946-b28f40a0ae38",
        "cuisines": ["Snacks", "Sandwich", "Fast Food"],
        "rating": 4.0,
        "deliveryTime": "16 mins",
        "costForTwo": "₹120 for two",
        "location": "Paldi",
        "isOpen": true,
        "offer": "10% OFF",
        "isVeg": true,
        "menu": [
          { "itemId": 25, "name": "Grill Sandwich", "price": 79, "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe", "isVeg": true },
          { "itemId": 26, "name": "Cheese Mayo Sandwich", "price": 99, "image": "https://images.unsplash.com/photo-1542327897-4141b3059dbc", "isVeg": true }
        ]
      },

      {
        "id": 14,
        "name": "Kathiyawadi Rasoi",
        "image": "https://images.unsplash.com/photo-1676300183224-80440f19b1bb",
        "cuisines": ["Kathiyawadi", "Gujarati", "Thali"],
        "rating": 4.1,
        "deliveryTime": "21 mins",
        "costForTwo": "₹220 for two",
        "location": "Naroda",
        "isOpen": true,
        "offer": "25% OFF",
        "isVeg": true,
        "menu": [
          { "itemId": 27, "name": "Ringan No Olo", "price": 129, "image": "https://images.unsplash.com/photo-1625246333196-59c59e86cdc6", "isVeg": true },
          { "itemId": 28, "name": "Bajra Roti", "price": 40, "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", "isVeg": true }
        ]
      },

      {
        "id": 15,
        "name": "Tandoori Nights",
        "image": "https://images.unsplash.com/photo-1604908554057-d39e8a30f362",
        "cuisines": ["Tandoori", "Mughlai", "North Indian"],
        "rating": 4.7,
        "deliveryTime": "30 mins",
        "costForTwo": "₹500 for two",
        "location": "Bodakdev",
        "isOpen": true,
        "offer": "40% OFF",
        "isVeg": false,
        "menu": [
          { "itemId": 29, "name": "Tandoori Chicken", "price": 259, "image": "https://images.unsplash.com/photo-1601050690597-df0568c318e8", "isVeg": false },
          { "itemId": 30, "name": "Paneer Tikka Masala", "price": 199, "image": "https://images.unsplash.com/photo-1625246333196-59c59e86cdc6", "isVeg": true }
        ]
      },
       {
    "id": 26,
    "name": "Biryani Blues",
    "image": "https://images.unsplash.com/photo-1606661229400-b8fdb6dfba32",
    "cuisines": ["Biryani", "Hyderabadi", "Kebabs"],
    "rating": 4.4,
    "deliveryTime": "29 mins",
    "costForTwo": "₹450 for two",
    "location": "Prahlad Nagar, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 27,
    "name": "Wow! Momo",
    "image": "https://images.unsplash.com/photo-1511918984145-48de785d4c4e",
    "cuisines": ["Momos", "Chinese", "Snacks"],
    "rating": 4.3,
    "deliveryTime": "21 mins",
    "costForTwo": "₹250 for two",
    "location": "Navrangpura, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 28,
    "name": "Subway",
    "image": "https://images.unsplash.com/photo-1605478371319-5b1cdbcdaad6",
    "cuisines": ["Healthy", "Sandwich", "Fast Food"],
    "rating": 4.1,
    "deliveryTime": "24 mins",
    "costForTwo": "₹300 for two",
    "location": "CG Road, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 29,
    "name": "Pizza Hut",
    "image": "https://images.unsplash.com/photo-1601924582975-7aa6d1d8fdac",
    "cuisines": ["Pizza", "Italian", "Fast Food"],
    "rating": 4.2,
    "deliveryTime": "27 mins",
    "costForTwo": "₹550 for two",
    "location": "Maninagar, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 30,
    "name": "La Pino'z Pizza",
    "image": "https://images.unsplash.com/photo-1548365328-73c2c69b4b68",
    "cuisines": ["Pizza", "Fast Food"],
    "rating": 4.6,
    "deliveryTime": "22 mins",
    "costForTwo": "₹400 for two",
    "location": "Bodakdev, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 31,
    "name": "Tasty Paratha House",
    "image": "https://images.unsplash.com/photo-1631601915603-1e9cd65ac523",
    "cuisines": ["North Indian", "Paratha", "Thali"],
    "rating": 4.1,
    "deliveryTime": "18 mins",
    "costForTwo": "₹180 for two",
    "location": "Vastrapur, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 32,
    "name": "Tea Post",
    "image": "https://images.unsplash.com/photo-1509043759401-136742328bb3",
    "cuisines": ["Tea", "Fast Food", "Snacks"],
    "rating": 4.4,
    "deliveryTime": "15 mins",
    "costForTwo": "₹100 for two",
    "location": "Gandhinagar, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 33,
    "name": "King's Punjabi Dhaba",
    "image": "https://images.unsplash.com/photo-1528493366314-e317cd98ddab",
    "cuisines": ["Punjabi", "North Indian", "Thali"],
    "rating": 4.2,
    "deliveryTime": "20 mins",
    "costForTwo": "₹260 for two",
    "location": "Chandkheda, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 34,
    "name": "Mahalaxmi Pav Bhaji",
    "image": "https://images.unsplash.com/photo-1626082927389-401c4645d9ae",
    "cuisines": ["Street Food", "Snacks"],
    "rating": 4.5,
    "deliveryTime": "17 mins",
    "costForTwo": "₹200 for two",
    "location": "Vastral, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 35,
    "name": "Jassi De Parathe",
    "image": "https://images.unsplash.com/photo-1603896424491-5acb10b1cbd8",
    "cuisines": ["Punjabi", "Paratha", "North Indian"],
    "rating": 4.7,
    "deliveryTime": "25 mins",
    "costForTwo": "₹500 for two",
    "location": "Thaltej, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 36,
    "name": "Havmor Ice Cream",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    "cuisines": ["Ice Cream", "Desserts"],
    "rating": 4.8,
    "deliveryTime": "18 mins",
    "costForTwo": "₹150 for two",
    "location": "Naranpura, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 37,
    "name": "Justice Sandwich Hub",
    "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "cuisines": ["Sandwich", "Snacks"],
    "rating": 4.0,
    "deliveryTime": "16 mins",
    "costForTwo": "₹120 for two",
    "location": "Paldi, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 38,
    "name": "Alpine Chinese Corner",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "cuisines": ["Chinese", "Asian"],
    "rating": 4.2,
    "deliveryTime": "23 mins",
    "costForTwo": "₹280 for two",
    "location": "Nikol, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 39,
    "name": "Shakti Juice Center",
    "image": "https://images.unsplash.com/photo-1613470205022-9c189b89f1a8",
    "cuisines": ["Juice", "Shakes", "Healthy"],
    "rating": 4.1,
    "deliveryTime": "12 mins",
    "costForTwo": "₹120 for two",
    "location": "Memnagar, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 40,
    "name": "Barbeque Nation",
    "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "cuisines": ["BBQ", "Grill", "Buffet"],
    "rating": 4.6,
    "deliveryTime": "35 mins",
    "costForTwo": "₹1500 for two",
    "location": "Sindhubhavan Road, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 41,
    "name": "Kabir Kathiyawadi",
    "image": "https://images.unsplash.com/photo-1676300183224-80440f19b1bb",
    "cuisines": ["Kathiyawadi", "Gujarati"],
    "rating": 4.3,
    "deliveryTime": "20 mins",
    "costForTwo": "₹250 for two",
    "location": "Naroda, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 42,
    "name": "Momo Zone",
    "image": "https://images.unsplash.com/photo-1562967914-608f82629710",
    "cuisines": ["Momos", "Chinese", "Snacks"],
    "rating": 4.4,
    "deliveryTime": "22 mins",
    "costForTwo": "₹230 for two",
    "location": "Sabarmati, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 43,
    "name": "South Masala",
    "image": "https://images.unsplash.com/photo-1626082927393-401c4645d9ae",
    "cuisines": ["South Indian", "Dosa", "Idli"],
    "rating": 4.5,
    "deliveryTime": "18 mins",
    "costForTwo": "₹180 for two",
    "location": "Science City, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 44,
    "name": "Urban Grill",
    "image": "https://images.unsplash.com/photo-1543773495-d4d85eba9d35",
    "cuisines": ["Grill", "Wraps", "Fast Food"],
    "rating": 4.3,
    "deliveryTime": "24 mins",
    "costForTwo": "₹350 for two",
    "location": "Iscon, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 45,
    "name": "Bombay Chaat House",
    "image": "https://images.unsplash.com/photo-1641795149391-1b845a70d820",
    "cuisines": ["Street Food", "Snacks", "Chaat"],
    "rating": 4.2,
    "deliveryTime": "14 mins",
    "costForTwo": "₹150 for two",
    "location": "CG Road, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 46,
    "name": "The Coffee Bar",
    "image": "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
    "cuisines": ["Cafe", "Coffee", "Bakery"],
    "rating": 4.6,
    "deliveryTime": "19 mins",
    "costForTwo": "₹300 for two",
    "location": "Shivranjani, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 47,
    "name": "Spice Hub",
    "image": "https://images.unsplash.com/photo-1604908554057-d39e8a30f362",
    "cuisines": ["North Indian", "Thali", "Punjabi"],
    "rating": 4.0,
    "deliveryTime": "23 mins",
    "costForTwo": "₹280 for two",
    "location": "Narol, Ahmedabad",
    "isOpen": false
  },
  {
    "id": 48,
    "name": "Royal Tandoor",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    "cuisines": ["Tandoori", "Mughlai"],
    "rating": 4.5,
    "deliveryTime": "28 mins",
    "costForTwo": "₹550 for two",
    "location": "Vejalpur, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 49,
    "name": "Italiano Pasta House",
    "image": "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8b1e",
    "cuisines": ["Italian", "Pasta", "Fast Food"],
    "rating": 4.6,
    "deliveryTime": "26 mins",
    "costForTwo": "₹420 for two",
    "location": "Satellite, Ahmedabad",
    "isOpen": true
  },
  {
    "id": 50,
    "name": "Shree Dosa Factory",
    "image": "https://images.unsplash.com/photo-1626082927393-401c4645d9ae",
    "cuisines": ["South Indian", "Snacks"],
    "rating": 4.2,
    "deliveryTime": "18 mins",
    "costForTwo": "₹160 for two",
    "location": "Bopal, Ahmedabad",
    "isOpen": true
  }
    ]
  }
}

export default restorentData;