import React from 'react'
import Mainpage from './components/Mainpage'
import Secondpage from './components/Secondpage'
import Thirdpage from './components/Thirdpage'
import Fourthpage from './components/Fourthpage'
import {AnimatePresence} from "framer-motion"
const App = () => {
  
  const mainpagedishes = [
    {
      title: "Mutton Biriyani",
      description: "Experience the legendary taste of Vellore's biriyani, where traditional cooking meets bold, aromatic spices. Each dish tells a story of authentic, flavorful, and unforgettable South Indian biriyani crafted with passion and heritage.",
      image: "https://i.pinimg.com/736x/0e/4d/24/0e4d24cae8c9783ae7c827df7cacb58d.jpg"
    },
    {
      title: "Chicken Biriyani",
      description: "Savor the rich taste of Chicken Biriyani, where tender chicken is infused with a blend of aromatic spices and slow-cooked with basmati rice. Each grain is bursting with flavor, celebrating the essence of South Indian biriyani with every bite—a true culinary masterpiece crafted with tradition and expertise.",
      image: "https://i.pinimg.com/736x/a7/39/c2/a739c2f3639bccae6a71b15a5013519c.jpg"
    }
  ]
  
  const menu =[
    {
      title: "Chicken Biryani + Egg",
      description: "Comes with ONION, RAITA & BRINJALCURRY | Serves 1 | A delectable blend of tender chicken, fragrant biryani rice, and luscious, perfectly cooked egg, creating an irresistible non-veg main course.",
      price: 190,
      rating: 4.3,
      reviews: 4736,
      maincategory: "maincourse",
      category: "biriyani",
      image:"https://i.pinimg.com/564x/a5/c6/83/a5c6838a80ade5e042ee02c474fb40e7.jpg",
      isBestseller: true
    },
    {
      title: "Mutton Biryani",
      description: "Comes with ONION, RAITA & BRINJALCURRY | Serves 1 | A tantalizing and flavorful non-vegetarian main course that takes your taste buds on a culinary adventure.",
      price: 250,
      rating: 4.3,
      reviews: 2929,
      maincategory: "maincourse",
      category: "biriyani",
      image:"https://i.pinimg.com/564x/96/15/d1/9615d1db6143c9642f6d585616b97e26.jpg",
      isBestseller: true,
      customizable: true
    },
    {
      title: "Plain Biryani (Kuska)",
      description: "Comes with ONION, RAITA & BRINJALCURRY | Serves 1 | A flavorful non-vegetarian main course bursting with aromatic spices and rich flavors.",
      price: 120,
      rating: 4.4,
      reviews: 1237,
      maincategory: "maincourse",
      image:"https://i.pinimg.com/564x/b5/66/c8/b566c8e693b463ab4291010702a904e7.jpg",
      category: "biriyani",
      isBestseller: true
    },
    {
      title: "Chicken 65 Biryani",
      description: "650 gm | Serves 1 | Plain biriyani + chicken 65 (4 pieces) + boiled egg served with onion raita, brinjal curry.",
      price: 200,
      rating: 4.2,
      reviews: 638,
      maincategory: "maincourse",
      image:"https://i.pinimg.com/564x/7b/0f/08/7b0f0871ab6f25a46d0a80258d302a99.jpg",
      category: "biriyani",
      isBestseller: true
    },
    {
      title: "Mutton Biriyani Bucket",
      description: "A delectable main course bursting with flavorful mutton, perfectly layered with fragrant long grain rice.",
      price: 1498,
      rating: 4.2,
      reviews: 24,
      maincategory: "maincourse",
      image:"https://i.pinimg.com/564x/ba/e7/bd/bae7bd0f1f3aedcdf939e838912308c6.jpg",
      category: "biriyani"
    },
    {
      title: "Chicken Biriyani Bucket",
      description: "A flavorful and satisfying main course that brings together tender chicken and fragrant rice in a crave-worthy bucket.",
      price: 1200,
      rating: 4.8,
      reviews: 79,
      image:"https://i.pinimg.com/564x/ba/e7/bd/bae7bd0f1f3aedcdf939e838912308c6.jpg",
      maincategory: "maincourse",
      category: "biriyani"
    },
    {
      title: "Mutton Biriyani - Family Pack (for 4 adults)",
      description: "Serves 1 | Mutton biriyani for 4 persons + chicken 65 (250gms) boiled eggs (4 nos) + 600ml cool drink white rice with rasam - (serves 4).",
      price: 1299,
      rating: 4.1,
      reviews: 86,
      maincategory: "maincourse",
      category: "biriyani",
      image:"https://i.pinimg.com/564x/ba/e7/bd/bae7bd0f1f3aedcdf939e838912308c6.jpg",
      customizable: true
    },
    {
      title: "Chicken Biriyani - Family Pack (for 4 adults)",
      description: "Serves 1 | Chicken biriyani for 4 persons + chicken 65 (250gms) boiled eggs (4 nos) + 600ml cool drink white rice with rasam - (serves 4).",
      price: 1149,
      rating: 3.8,
      reviews: 56,
      maincategory: "maincourse",
      category: "biriyani",
      image:"https://i.pinimg.com/564x/ba/e7/bd/bae7bd0f1f3aedcdf939e838912308c6.jpg",
      customizable: true
    },
    {
      title: "Egg Biryani",
      description: "Serves 1 | Served with onion raitha, brinjal curry.",
      price: 140,
      rating: 4.5,
      reviews: 447,
      maincategory: "maincourse",
      image:"https://i.pinimg.com/736x/d7/38/af/d738af6d049fe5e0cfe1665aa03f6c7c.jpg",
      category: "biriyani"
    },
      {
        title: "Schezwan Gobi Rice",
        description: "Serves 1 | A delectable and flavorful rice dish that will tantalize your taste buds with its enticing blend of bold and aromatic flavors.",
        price: 135,
        rating: 4.4,
        reviews: 342,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/cc/68/5c/cc685c34fa8a72fe23148a08f7d3bfb7.jpg"
      },
      {
        title: "Schezwan Mushroom Rice",
        description: "Serves 1 | Fresh veggies and mushroom tossed in a pan with steamed rice and flavorful sauces and Schezwan spices.",
        price: 135,
        rating: 4.1,
        reviews: 235,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/34/9a/d9/349ad959ce5356857d2e5af82438924f.jpg"
      },
      {
        title: "Curd Rice",
        description: "Serves 1 | A soothing dish created by mixing rice, green chillies and yogurt together.",
        price: 90,
        rating: 4.5,
        reviews: 1085,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/cd/da/b5/cddab5c187b8f8529ff8d1acdf2d9f6d.jpg"
      },
      {
        title: "Schezwan Chicken Rice",
        description: "Boneless | Serves 1 | Cooked basmati rice stir-fried in a wok with schezwan sauce, mixed with egg, vegetables and chicken.",
        price: 179,
        rating: 4.4,
        reviews: 1144,
        maincategory: "maincourse",
        category: "rice",
        isVeg: false,
        image:"https://i.pinimg.com/564x/6a/dd/a3/6adda361313da1234716633b56250b0c.jpg"
      },
      {
        title: "Schezwan Prawns Rice",
        description: "Serves 1 | A flavorful and aromatic combination of succulent prawns and fragrant rice, perfect for a satisfying main course.",
        price: 195,
        rating: 4.2,
        reviews: 45,
        maincategory: "maincourse",
        category: "rice",
        isVeg: false,
        image:"https://i.pinimg.com/736x/31/3c/07/313c076bffcc9969f3e0408ce29a4f68.jpg"
      },
      {
        title: "Mixed Non-Veg Rice",
        description: "Serves 1 | Combination of Prawns, Mutton and Chicken Rice.",
        price: 199,
        rating: 4.5,
        reviews: 179,
        maincategory: "maincourse",
        category: "rice",
        isVeg: false,
        image:"https://i.pinimg.com/564x/65/eb/a8/65eba8e765c35f7a919fb4767c52bb0e.jpg"
      },
      {
        title: "Schezwan Mixed Non-Veg Rice",
        description: "Serves 1 | Combination of Prawns, Mutton and Chicken Rice.",
        price: 209,
        rating: 3.9,
        reviews: 92,
        maincategory: "maincourse",
        category: "rice",
        isVeg: false,
        image:"https://i.pinimg.com/564x/65/eb/a8/65eba8e765c35f7a919fb4767c52bb0e.jpg"
      },
      {
        title: "Garlic Chicken Rice",
        description: "Serves 1 | A mouthwatering blend of tender chicken and fragrant garlic, served over fluffy rice for a satisfying main course.",
        price: 185,
        rating: 3.9,
        reviews: 51,
        maincategory: "maincourse",
        category: "rice",
        isVeg: false,
        image:"https://i.pinimg.com/564x/14/41/aa/1441aaedc79c17bad09f1ac1646726fa.jpg"
      },
      {
        title: "Schezwan Mutton Rice",
        description: "Serves 1 | A delightful blend of tender mutton and aromatic rice in a rich, flavorful sauce.",
        price: 225,
        rating: 4.3,
        reviews: 18,
        maincategory: "maincourse",
        category: "rice",
        isVeg: false,
        image:"https://i.pinimg.com/736x/cb/02/2f/cb022fb7350a020a891b294f871d1ffb.jpg"
      },
      {
        title: "Schezwan Veg Rice",
        description: "Serves 1 | A tantalizing fusion of flavors and textures that bring together aromatic rice and a zesty blend of herbs and sauces for a flavorful vegetarian delight.",
        price: 125,
        rating: 4.6,
        reviews: 262,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/45/a1/90/45a1908a7ca63b0da6c52cbc3415981e.jpg"
      },
      {
        title: "Mixed Veg Rice",
        description: "Serves 1 | Cooked basmati rice stir-fried in a wok, mixed with vegetables, paneer and mushroom.",
        price: 130,
        rating: 4.4,
        reviews: 1673,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/45/a1/90/45a1908a7ca63b0da6c52cbc3415981e.jpg"
      },
      {
        title: "Schezwan Paneer Rice",
        description: "Serves 1 | A flavorsome and vibrant combination of aromatic Schezwan sauce, tangy paneer, and aromatic rice.",
        price: 145,
        rating: 4.2,
        reviews: 193,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/75/03/5b/75035bf7bd2380abea9d98e15f11b007.jpg"
      },
      {
        title: "Mushroom Rice",
        description: "Serves 1 | Succulent pieces of mushroom tossed with rice and spices that is simply delicious!",
        price: 125,
        rating: 4.4,
        reviews: 271,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/c4/fb/95/c4fb95629c48fe419b534e266af21d8d.jpg"
      },
      {
        title: "Mixed Veg Schezwan Rice",
        description: "Serves 1 | A flavorful combination of mixed vegetables and tangy Schezwan sauce, creating a delectable main course bursting with delightful flavors.",
        price: 140,
        rating: 4.7,
        reviews: 124,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/45/a1/90/45a1908a7ca63b0da6c52cbc3415981e.jpg"
      },
      {
        title: "Ghee Rice",
        description: "Serves 1 | Aromatic and delicious rice dish with spices and healthy ghee.",
        price: 110,
        rating: 4.3,
        reviews: 151,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/d5/9a/2c/d59a2c4ef5a77e6c6ff141405eb1c682.jpg"
      },
      {
        title: "Kaju Rice",
        description: "Serves 1 | A fragrant and flavorful main course featuring a delightful blend of rice and cashews.",
        price: 110,
        rating: 4.1,
        reviews: 125,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image: "https://i.pinimg.com/564x/54/ef/0c/54ef0c3b9792b7eae6ba11e096bc6c7d.jpg"
      },
      {
        title: "Jeera Rice",
        description: "Serves 1 | A flavourful rice cooked with long grain basmati and tempered with cumin seeds.",
        price: 110,
        rating: 4.0,
        reviews: 307,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
      image:"https://i.pinimg.com/736x/5b/72/91/5b729124bfdc306b348c478f31e13b10.jpg"
          },
      {
        title: "Veg Pulao",
        description: "Serves 1 | A dish of rice and vegetables cooked together with aromatic spices and herbs.",
        price: 119,
        rating: 4.5,
        reviews: 308,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/736x/3f/f7/dd/3ff7dde39882afdbe6007fecbe1e4c10.jpg"
      },
      {
        title: "Steamed Rice",
        description: "A comforting and satisfying main course that perfectly complements any veg or non-veg curry.",
        price: 49,
        rating: 3.8,
        reviews: 13,
        maincategory: "maincourse",
        category: "rice",
        isVeg: true,
        image:"https://i.pinimg.com/564x/e7/9f/e6/e79fe63edf32518050dbc5d6e73f3ba5.jpg"
      },    
        {
          title: "Chicken Fried Rice",
          description: "Boneless | Serves 1 | Cooked basmati rice stir-fried in a wok, mixed with egg, vegetables and chicken.",
          price: 170,
          rating: 4.4,
          reviews: 4904,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: false,
          image:"https://i.pinimg.com/564x/c2/b3/fd/c2b3fd99cedcb45c01f3562a57d21028.jpg"
        },
        {
          title: "Veg Fried Rice",
          description: "Serves 1 | A deliciously aromatic and flavorful dish prepared from rice and stir-fried vegetables.",
          price: 120,
          rating: 4.4,
          reviews: 1297,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: true,
          image:"https://i.pinimg.com/736x/56/1c/a3/561ca3254baef3ad889fa5b6faf1fcfd.jpg"
        },
        {
          title: "Mutton Fried Rice",
          description: "Serves 1 | A slightly spicy dish made by tossing juicy mutton and rice in a flavorful sauce.",
          price: 220,
          rating: 4.4,
          reviews: 119,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: false,
          image:"https://i.pinimg.com/736x/f8/17/a4/f817a40b015f90a4529405eecb8f30a9.jpg"
        },
        {
          title: "Prawns Fried Rice",
          description: "Serves 1 | A delicious dish of cooked rice that has been stir-fried in a wok with fresh prawns.",
          price: 190,
          rating: 4.4,
          reviews: 183,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: false,
          image:"https://i.pinimg.com/736x/31/3c/07/313c076bffcc9969f3e0408ce29a4f68.jpg"
        },
        {
          title: "Schezwan Egg Fried Rice",
          description: "Serves 1 | Cooked basmati rice stir-fried in a wok with schezwan sauce, mixed with egg & vegetables.",
          price: 149,
          rating: 4.4,
          reviews: 258,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: false,
          image:"https://i.pinimg.com/564x/a7/6e/57/a76e573ff491dd18a6dce5b125bf3546.jpg"
        },
        {
          title: "Gobi Fried Rice",
          description: "Serves 1 | Cooked basmati rice stir fried in a wok, mixed with vegetables and fried cauliflower.",
          price: 125,
          rating: 4.4,
          reviews: 497,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: true,
          image:"https://i.pinimg.com/564x/b9/d3/c5/b9d3c5f12f8b035f1828d09a4488af88.jpg"
        },
        {
          title: "Paneer Fried Rice",
          description: "Serves 1 | Cooked basmati rice stir-fried in a wok, mixed with vegetables and paneer.",
          price: 130,
          rating: 4.3,
          reviews: 928,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: true,
          image:"https://i.pinimg.com/564x/50/10/70/501070b8ad052e84ffbc51dda93b80b2.jpg"
        },
        {
          title: "Egg Fried Rice",
          description: "Serves 1 | Cooked basmati rice stir-fried in a wok, mixed with egg and vegetables.",
          price: 139,
          rating: 4.4,
          reviews: 833,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: false,
          image:"https://i.pinimg.com/564x/28/e9/4c/28e94caac8618f0f31607978678a1e86.jpg"
        },
        {
          title: "Manchow Chicken Rice",
          description: "Serves 1 | An authentic blend of flavors and textures, this non-vegetarian delight transports your taste buds to the Far East with every bite.",
          price: 180,
          rating: 4.2,
          reviews: 43,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: false,
          image:"https://i.pinimg.com/564x/c2/b3/fd/c2b3fd99cedcb45c01f3562a57d21028.jpg"

        },
        {
          title: "Manchow Veg Rice",
          description: "Serves 1 | A flavorful and satisfying vegetarian option that's sure to tantalize your taste buds.",
          price: 130,
          rating: 4.1,
          reviews: 56,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: true,
          image:"https://i.pinimg.com/736x/56/1c/a3/561ca3254baef3ad889fa5b6faf1fcfd.jpg"

        },
        {
          title: "Manchow Egg Rice",
          description: "Serves 1 | A flavorful combination of eggs and rice that is sure to satisfy your taste buds.",
          price: 149,
          rating: 4.0,
          reviews: 27,
          maincategory: "maincourse",
          category: "friedrice",
          isVeg: false,
          image:"https://i.pinimg.com/564x/28/e9/4c/28e94caac8618f0f31607978678a1e86.jpg"

        },
          {
            title: "Kadai Paneer",
            description: "Serves 1 | Paneer cubes and bell peppers stir fried in kadai with aromatic masala",
            price: 140,
            rating: 4.2,
            reviews: 525,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/736x/bf/3b/22/bf3b22653efb4bcf54d76ffec4df1fd5.jpg"
          },
          {
            title: "Paneer Butter Masala",
            description: "Serves 1 | Creamy and mildly sweet gravy made with butter, tomatoes, cashews, spices and paneer.",
            price: 190,
            rating: 4.4,
            reviews: 1746,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/d6/be/99/d6be99b3ffc8033087e466883f7459f1.jpg"
          },
          {
            title: "Paneer Chettinad",
            description: "Serves 1 | A south Indian style paneer masala with spicy, freshly ground chettinad masala. Ideal with naan, rotis or rice.",
            price: 145,
            rating: 4.4,
            reviews: 123,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/49/82/38/498238f7dd856417dcbfd4e28cebabb9.jpg"
          },
          {
            title: "Gobi Mattar",
            description: "Serves 1 | A comforting dish of tender cauliflower and green peas in a flavorful sauce.",
            price: 130,
            rating: 5.0,
            reviews: 19,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/c9/f0/7b/c9f07be6da45672999de71adaf0f8264.jpg"
          },
          {
            title: "Gobi Butter Masala",
            description: "Serves 1 | A rich vegetable dish in a butter-based sauce inspired by Indian flavors.",
            price: 160,
            rating: 4.2,
            reviews: 41,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/736x/0f/5d/1d/0f5d1dd3e8b043fd58abc74d715c6c54.jpg"
          },
          {
            title: "Paneer Masala",
            description: "Serves 1 | A creamy paneer masala with sweet and medium spicy flavors.",
            price: 140,
            rating: 4.1,
            reviews: 89,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/d6/be/99/d6be99b3ffc8033087e466883f7459f1.jpg"
          },
          {
            title: "Mattar Paneer",
            description: "Serves 1 | Paneer and green peas cooked in an onion-tomato gravy.",
            price: 140,
            rating: 4.6,
            reviews: 410,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/07/8d/a3/078da393d53b6b2173b4fb963f48867f.jpg"
          },
          {
            title: "Mushroom Masala",
            description: "Serves 1 | Fresh mushrooms in a delicious onion-tomato gravy with spices.",
            price: 140,
            rating: 4.3,
            reviews: 596,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/736x/aa/04/2a/aa042ab5712576f22ff27f9d16795c46.jpg"
          },
          {
            title: "Gobi Masala",
            description: "Serves 1 | Dry gobi matar sabzi made from cabbage, green peas, and spices.",
            price: 130,
            rating: 4.6,
            reviews: 46,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/62/d0/17/62d0174a01f89c1e3674c04c25eaecff.jpg"
          },
          {
            title: "Aloo Gobi Masala",
            description: "Serves 1 | Gobi in masala with assorted spices and vegetables.",
            price: 130,
            rating: 4.8,
            reviews: 26,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/736x/3f/8a/e0/3f8ae022c5f0da71bc41ad181708eaad.jpg"
          },
          {
            title: "Mixed Veg Curry",
            description: "Serves 1 | Medley of vegetables in a flavorful curry sauce.",
            price: 130,
            rating: 4.5,
            reviews: 81,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/736x/3e/59/39/3e59398cbd1555b64cd67691c0bf6624.jpg"
          },
          {
            title: "Kadai Veg",
            description: "Serves 1 | Mixed vegetable curry in ghee, mustard base, tempered with spices.",
            price: 130,
            rating: 4.2,
            reviews: 161,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/736x/9b/8e/c7/9b8ec7f55a6fcd946b93cfe3c97bd1ba.jpg"
          },
          {
            title: "Babycorn Masala",
            description: "Serves 1 | Tender baby corn in a rich masala gravy.",
            price: 130,
            rating: 2.7,
            reviews: 22,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/25/9a/49/259a492d903f1f1e6105a6c13634c192.jpg"
          },
          {
            title: "Aloo Mattar",
            description: "Serves 1 | Potatoes and peas in a flavorful main course.",
            price: 130,
            rating: 5.0,
            reviews: 19,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/c4/59/c0/c459c0398b7eee90542283ded78c560c.jpg"
          },
          {
            title: "Dal Tadka",
            description: "Serves 1 | Yellow dal tempered with ghee, chili, and spices.",
            price: 140,
            rating: 4.5,
            reviews: 73,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/736x/08/78/2c/08782c6021898a19d2c8a0823bf777e2.jpg"
          },
          {
            title: "Sambar Rice",
            description: "Serves 1 | Rice with vegetables in a tangy, aromatic sauce.",
            price: 80,
            rating: 4.4,
            reviews: 604,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/76/3d/2b/763d2b977174f31b85dedce8acaa658d.jpg"
          },
          {
            title: "Dal Fry",
            description: "Serves 1 | Lentils with spices, ginger, garlic, onion, tomatoes.",
            price: 120,
            rating: 4.2,
            reviews: 145,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/71/3c/0f/713c0f6adf6432396b2b56994149c18e.jpg"
          },
          {
            title: "Veg Chettinad",
            description: "Serves 1 | Vegetarian Chettinad delight with authentic flavors.",
            price: 130,
            rating: 4.3,
            reviews: 42,
            maincategory: "maincourse",
            category: "veg",
            isVeg: true,
            image:"https://i.pinimg.com/564x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"
          },
            {
              title: "Chicken Chettinad",
              price: 189,
              rating: 4.2,
              reviews: 973,
              description: "Medium Spicy | With Bone | Serves 1 | South Indian chicken curry made with chicken, grated coconut and fresh ground spices.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/736x/94/23/32/942332cbb072b7cc8a401d4fbe63a056.jpg"
            },
            {
              title: "Mutton Chettinad",
              price: 220,
              rating: 3.9,
              reviews: 206,
              description: "Serves 1 | Pieces of tender Chicken mixed with Chettinad style masala with gravy substance to provide a exclusive South Indian Style.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/564x/9e/9b/63/9e9b638904852d92bc118a320c1f7171.jpg"
            },
            {
              title: "Chicken Masala",
              price: 179,
              rating: 4.3,
              reviews: 172,
              description: "Serves 1 | A delicious Indian dish made with chicken, spices, herbs, onions and tomatoes.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/564x/99/ac/64/99ac6413fd17d1f89eeeb1db9b4b4508.jpg"
            },
            {
              title: "Chicken Pepper Masala",
              price: 189,
              rating: 4.4,
              reviews: 1060,
              description: "Medium Spicy | With Bone | 400 ml | Serves 1 | Chicken is marinated and cooked in a delicious onion-tomato based gravy seasoned with crushed black pepper.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/564x/90/35/5f/90355f8ef76c787e7254302a4dd5e5b3.jpg"
            },
            {
              title: "Mutton Masala",
              price: 220,
              rating: 4.3,
              reviews: 162,
              description: "Serves 1 | A simple, yet wholesome meal comprising of flavor-packed mutton masala gravy.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/564x/83/67/4f/83674f255ed8f35910a2912429464802.jpg"
            },
            {
              title: "Mutton Rogan Josh",
              price: 230,
              rating: 3.8,
              reviews: 326,
              description: "Serves 1 | Kashmiri style mutton curry made with spices like fennel seeds and dry ginger. Spicy, loaded with yummy flavours.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/564x/e4/28/84/e42884cb977f56645c6b5be80cf2d061.jpg"
            },
            {
              title: "Mughlai Chicken Gravy",
              price: 199,
              rating: 4.3,
              reviews: 309,
              description: "Serves 1 | A flavorful and aromatic chicken gravy that will transport you to the royal kitchens of Mughal India.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/564x/3d/c7/42/3dc7428aae65f3a9b7c608b612fab37e.jpg"
            },
            {
              title: "Hyderabad Chicken Gravy",
              price: 189,
              rating: 4.3,
              reviews: 316,
              description: "450 gm | Serves 1 | Chicken is cooked in a rich, spicy and aromatic gravy flavoured with garam masala, coconut and a good amount of heat with chillis.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/564x/fc/dc/5d/fcdc5d6cc69d9c39096360844eb5dd47.jpg"
            },
            {
              title: "Mutton Pepper Masala",
              price: 230,
              rating: 3.9,
              reviews: 143,
              description: "Serves 1 | Spicy mutton with lip smacking flavours of pepper and freshly ground spices.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
            image:"https://i.pinimg.com/564x/9d/b9/9a/9db99a73d8d6cefde27904016117cb7d.jpg"
                      },
            {
              title: "Butter Chicken Masala",
              price: 199,
              rating: 4.3,
              reviews: 1039,
              description: "Medium Spicy | With Bone | 400 ml | Serves 1 | Creamy and mild sweet gravy made with butter, tomatoes, cashews, spices and tandoori chicken.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/564x/3b/4e/db/3b4edb7069e52b87c1dadc59f95d188c.jpg"
            },
            {
              title: "Kadai Chicken",
              price: 179,
              rating: 4.0,
              reviews: 493,
              description: "Serves 1 | Tender chicken, shallots of onion and bell peppers stir fried in kadai with aromatic masala.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/736x/80/af/42/80af42595d48fa59f11345973eb8a876.jpg"
            },
            {
              title: "Chicken Tikka Masala",
              price: 129,
              rating: 4.1,
              reviews: 225,
              description: "450 gm | Serves 1 | Perfectly charred chicken pieces, mixed in a rich onion and tomato-based gravy.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/736x/eb/85/e8/eb85e8deebc750a551d309bf44ff2ef2.jpg"
            },
            {
              title: "Chicken Do Pyaza",
              price: 179,
              rating: 4.1,
              reviews: 56,
              description: "Serves 1 | A rich, creamy curry of soft succulent chicken pieces, plenty of onions and lots of spices, herbs and tomatoes.",
              maincategory: "maincourse",
              category: "non-veg",
              isVeg: false,
              image:"https://i.pinimg.com/736x/4b/88/17/4b8817d46c904e1e16ef54c1aa007d27.jpg"
            },
              {
                title: "Schezwan Chicken Noodles",
                price: 180,
                rating: 4.5,
                reviews: 345,
                description: "Serves 1 | Noodles stir fried in a wok with schezwan sauce, mixed with egg, vegetables and chicken.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: false,
                image:"https://i.pinimg.com/564x/2b/76/e0/2b76e010654620fe330befb3de32ef93.jpg"
              },
              {
                title: "Chicken Noodles",
                price: 170,
                rating: 4.4,
                reviews: 1068,
                description: "Serves 1 | Noodles stir-fried in a wok, mixed with egg, vegetables and chicken.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: false,
                image:"https://i.pinimg.com/564x/15/f9/db/15f9dbbea093563430a5cd65e7ec7a66.jpg"
              },
              {
                title: "Schezwan Prawns Noodles",
                price: 200,
                rating: 3.7,
                reviews: 24,
                description: "Serves 1 | Indulge in a tantalizing fusion of flavors with this delectable Main Course dish featuring succulent prawns and irresistible Schezwan-infused noodles.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: false,
                image:"https://i.pinimg.com/564x/80/a2/79/80a2792c1234ec24cd6e6aa5848a16da.jpg"
              },
              {
                title: "Mutton Noodles",
                price: 220,
                rating: 3.8,
                reviews: 22,
                description: "Serves 1 | Delicious mutton paired with savory noodles, a satisfying and flavorful main course.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: false,
                image:"https://i.pinimg.com/564x/06/b8/52/06b8525b828d1722c9a0ce823a1f17cc.jpg"
              },
              {
                title: "Prawns Noodles",
                price: 190,
                rating: 4.7,
                reviews: 23,
                description: "Serves 1 | Delectable noodles tossed along with assorted fresh veggies, prawns, sauces and spices - perfect to satisfy your hunger.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: false,
                image:'https://i.pinimg.com/564x/44/ce/84/44ce848442659d87acf80dd8f6756654.jpg'
              },
              {
                title: "Mixed Non-Veg Noodles",
                price: 210,
                rating: 4.0,
                reviews: 57,
                description: "Serves 1 | Combination of Prawns, Mutton and Chicken Rice.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: false,
                image:"https://i.pinimg.com/736x/79/f1/f7/79f1f7d5d002b602405274f4397cec57.jpg"
              },
              {
                title: "Paneer Noodles",
                price: 130,
                rating: 4.3,
                reviews: 142,
                description: "Serves 1 | A delightful and flavorful fusion of soft paneer and perfectly cooked noodles, creating a delectable main course.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: true,
                image:"https://i.pinimg.com/736x/8a/1f/90/8a1f90ab610564c0f8e70ce341ffb72b.jpg"
              },
              {
                title: "Egg Noodles",
                price: 140,
                rating: 4.6,
                reviews: 205,
                description: "Serves 1 | A vibrant and wholesome dish with noodles and juicy seasonal vegetables, eggs tossed in a tangy soy and tomato-based dressing.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: false,
                image:"https://i.pinimg.com/736x/1d/78/c4/1d78c4520c00bf513968d20a4ca566e9.jpg"
              },
              {
                title: "Schezwan Veg Noodles",
                price: 130,
                rating: 4.3,
                reviews: 416,
                description: "Serves 1 | Noodles stir fried in a wok, with schezwan sauce, tossed with cabbage and bell pepper.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: true,
                image:"https://i.pinimg.com/564x/54/a9/96/54a996841d4f36b9e27be74bc32784dd.jpg"
              },
              {
                title: "Schezwan Egg Noodles",
                price: 150,
                rating: 4.2,
                reviews: 62,
                description: "Serves 1 | A delectable blend of noodles and savory flavors, bringing together the richness of eggs in a delightful main course.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: false,
                image:"https://i.pinimg.com/564x/1b/4e/df/1b4edf88ebe7dde5aa86e7987f58664d.jpg"
              },
              {
                title: "Mushroom Noodles",
                price: 130,
                rating: 4.7,
                reviews: 134,
                description: "Serves 1 | A savory and satisfying combination of earthy mushrooms and tender noodles.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: true,
                image:"https://i.pinimg.com/564x/37/2b/c9/372bc9580166c21d16f176b94781253f.jpg"
              },
              {
                title: "Schezwan Paneer Noodles",
                price: 135,
                rating: 4.3,
                reviews: 128,
                description: "Serves 1 | Deliciously flavorful noodles loaded with pan-fried paneer and vibrant Schezwan sauce.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: true,
                image:"https://i.pinimg.com/564x/14/11/48/14114859f32acd26e82a86df86b1b04c.jpg"
              },
              {
                title: "Veg Noodles",
                price: 120,
                rating: 4.4,
                reviews: 387,
                description: "Serves 1 | Noodles stir-fried in a wok, tossed with cabbage and bell pepper.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: true,
                image:'https://i.pinimg.com/564x/35/9d/28/359d28299cfbf2e050ddf80c0d05b008.jpg'
              },
              {
                title: "Mixed Veg Noodles",
                price: 130,
                rating: 4.6,
                reviews: 121,
                description: "Serves 1 | A delightful fusion of vibrant vegetables and flavorsome noodles, creating a scrumptious and satisfying main course.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: true,
                image:"https://i.pinimg.com/564x/9a/26/ee/9a26ee1b0dd09b22341a270b25068121.jpg"
              },
              {
                title: "Schezwan Mutton Noodles",
                price: 230,
                rating: 1.3,
                reviews: 10,
                description: "Serves 1 | Flavorful mutton noodles tossed in a tantalizing Schezwan sauce, delivering a delightful gastronomic experience.",
                maincategory: "maincourse",
                category: "noodles",
                isVeg: false,
                image:"https://i.pinimg.com/564x/91/df/cf/91dfcf190c240bf6a4cb91129e9c5238.jpg"
              },
                {
                  title: "Chicken Keema Naan",
                  price: 90,
                  rating: 4.4,
                  reviews: 114,
                  description: "Serves 1 | Juicy chicken keema stuffed in soft and fragrant naan, a mouthwatering delight for meat lovers.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: false,
                  image:"https://i.pinimg.com/564x/84/96/c9/8496c93551d62169c1dc172d408504c5.jpg"
                },
                {
                  title: "Mutton Keema Naan",
                  price: 99,
                  rating: 4.4,
                  reviews: 37,
                  description: "Serves 1 | A flavorful and succulent main course featuring tender mutton keema served with delectable naan bread.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: false,
                  image:"https://i.pinimg.com/564x/84/96/c9/8496c93551d62169c1dc172d408504c5.jpg"
                },
                {
                  title: "Parotta(2 Pcs)",
                  price: 60,
                  rating: 4.5,
                  reviews: 3396,
                  description: "Serves 1 | A flavorful and satisfying main course that will delight your taste buds with its delectable blend of textures.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/564x/dc/66/60/dc666013e379b97b3a0b42fefd3ddcbc.jpg"
                },
                {
                  title: "Egg Chapati",
                  price: 55,
                  rating: 4.1,
                  reviews: 121,
                  description: "Serves 1 | A flavorful twist on classic chapati, filled with a scrumptious egg filling that will leave your taste buds craving for more.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: false,
                  image:"https://i.pinimg.com/564x/0b/69/4f/0b694f1f9f496845271e3f1814ad6ab0.jpg"
                },
                {
                  title: "Chilli Parotta",
                  price: 120,
                  rating: 4.3,
                  reviews: 948,
                  description: "Serves 1 | A filling and flavorful dish prepared with shredded parotta that is tossed in a sauteed chillies, onion, tomato spiced mixture.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/736x/45/4b/de/454bde630f2a6fc003db5c7d6532fa20.jpg"
                },
                {
                  title: "Butter Naan (1 Pc)",
                  price: 49,
                  rating: 4.4,
                  reviews: 3239,
                  description: "Serves 1 | Deliciously buttery, this classic Indian bread is the perfect accompaniment to any main course.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/564x/6d/9a/5d/6d9a5db24704b60c8249681ded09bd48.jpg"
                },
                {
                  title: "Garlic Naan (1 Pc)",
                  price: 49,
                  rating: 4.3,
                  reviews: 361,
                  description: "Serves 1 | A flavorful and aromatic Indian bread, perfect for savoring as the star of your vegetarian main course.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/736x/f8/15/08/f815083198c8d4b93878dd8e4ab57065.jpg"
                },
                {
                  title: "Egg Parotta",
                  price: 55,
                  rating: 4.4,
                  reviews: 239,
                  description: "Serves 1 | Flatbread made of wheat/flour is shredded into bite-size pieces and stir-fried with scrambled egg along with other spices.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: false,
                  image:"https://i.pinimg.com/564x/80/4f/94/804f94930581bcdecbd4a11e2e5f893e.jpg"
                },
                {
                  title: "Chappati(2 Pcs)",
                  price: 59,
                  rating: 4.5,
                  reviews: 988,
                  description: "Serves 1 | A delectable and fulfilling Indian bread dish that will captivate your taste buds.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/564x/e7/c0/34/e7c034bc423816a6ab69b9170c672d9e.jpg"
                },
                {
                  title: "Paneer Kulcha",
                  price: 65,
                  rating: 4.3,
                  reviews: 90,
                  description: "Serves 1 | A delectable vegetarian main course that combines soft, succulent paneer with flavorful and aromatic kulcha bread.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:'https://i.pinimg.com/564x/41/24/84/41248484b397ecba821cf09c3c575227.jpg'
                },
                {
                  title: "Plain Naan (1 Pc)",
                  price: 39,
                  rating: 4.5,
                  reviews: 575,
                  description: "Serves 1 | A classic and flavorful Indian bread, perfect for savoring as a main course.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/564x/6d/9a/5d/6d9a5db24704b60c8249681ded09bd48.jpg"
                },
                {
                  title: "Tandoori Parotta",
                  price: 49,
                  rating: 4.4,
                  reviews: 38,
                  description: "Serves 1 | A delectable and flavorful Indian bread preparation, bursting with rich flavors and aromatic spices.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/564x/fa/e4/2d/fae42d66a20e0c311e6666678064c1bc.jpg"
                },
                {
                  title: "Stuffed Veg Kulcha",
                  price: 70,
                  rating: 3.9,
                  reviews: 45,
                  description: "Serves 1 | A delectable and savory main course bursting with flavorful stuffing, perfect for a satisfying vegetarian meal.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/736x/b7/cc/e5/b7cce5c82035924102c8d13bd29398b9.jpg"
                },
                {
                  title: "Butter Kulcha",
                  price: 49,
                  rating: 4.4,
                  reviews: 107,
                  description: "Serves 1 | A delectable and indulgent butter-based bread with a fluffy texture, perfect for satisfying cravings during main meals.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/564x/40/aa/e6/40aae6976ccd19dde076a9e45cd25452.jpg"
                },
                {
                  title: "Pudina Roti",
                  price: 45,
                  rating: 4.8,
                  reviews: 65,
                  description: "Serves 1 | A fragrant and flavorful main course featuring a traditional Indian flatbread infused with the refreshing taste of mint.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:'https://i.pinimg.com/564x/39/ff/26/39ff2688a84df493846fef33cedab1d4.jpg'
                },
                {
                  title: "Roti (1 Pc)",
                  price: 40,
                  rating: 4.5,
                  reviews: 437,
                  description: "Serves 1 | A delectable and satisfying veggie main course that will leave you craving for more.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/564x/2a/27/09/2a27096c2010304ec371e3ee9371a070.jpg"
                },
                {
                  title: "Butter Roti",
                  price: 40,
                  rating: 4.4,
                  reviews: 339,
                  description: "Serves 1 | A mouthwatering veg main course that harmoniously combines the rich flavor of butter with the warm, flaky texture of roti.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/564x/b6/01/23/b60123b524bb4725d704cf9522ac050f.jpg"
                },
                {
                  title: "Plain Kulcha (1 Pc)",
                  price: 40,
                  rating: 4.1,
                  reviews: 331,
                  description: "Serves 1 | Delicious and flavorful Indian bread perfect as a main course.",
                  maincategory: "maincourse",
                  category: "indianbreads",
                  isVeg: true,
                  image:"https://i.pinimg.com/736x/cc/91/96/cc9196c0bf8f3e70b7d56b2b72cf0cbd.jpg"
                },
                  {
                    title: "Prawns Masala",
                    price: 205,
                    rating: 4.0,
                    reviews: 324,
                    description: "Serves 1 | Prawns cooked in a delicious onion-tomato based gravy with delicious spices.",
                    category: "seafood",
                    maincategory: "maincourse",
                    isVeg: false,
                    image:'https://i.pinimg.com/564x/32/cd/5a/32cd5a30754392e703f3eafbc910b46b.jpg'
                  },
                  {
                    title: "Prawns Pepper Masala",
                    price: 205,
                    rating: 4.3,
                    reviews: 70,
                    description: "Serves 1 | Tantalizingly flavored prawns infused with a rich and aromatic pepper masala, offering an irresistible main course experience.",
                    category: "seafood",
                    maincategory: "maincourse",
                    isVeg: false,
                    image:"https://i.pinimg.com/564x/64/7f/9b/647f9b35d255b2cd915fc3ee3d46160c.jpg"
                  },
                  {
                    title: "Fish Curry",
                    price: 99,
                    rating: 4.4,
                    reviews: 388,
                    description: "450 gm | Serves 1 | Fish cooked in authentic Indian spices giving the dish a mouthwatering taste.",
                    category: "seafood",
                    maincategory: "maincourse",
                    isVeg: false,
                    image:"https://i.pinimg.com/564x/a2/1e/2d/a21e2df094e8bc893b31adb9aed7479b.jpg"
                  },
                    {
                      title: "Egg Curry",
                      price: 130,
                      rating: 4.4,
                      reviews: 350,
                      description: "Serves 1 | A simple yet flavourful blend of boiled eggs in smooth gravy.",
                      category: "egg",
                      maincategory: "maincourse",
                      isVeg: false,
                      image:"https://i.pinimg.com/564x/78/45/00/7845000c64d3ddd3feebd3bf9a975ada.jpg"
                    },
                    {
                      title: "Egg Keema Masala",
                      price: 130,
                      rating: 4.3,
                      reviews: 294,
                      description: "Serves 1 | Scrambled eggs cooked in a delicious onion, tomato-based gravy with delicious spices.",
                      category: "egg",
                      maincategory: "maincourse",
                      isVeg: false,
                      image:"https://i.pinimg.com/564x/cf/b6/63/cfb66320d8c5cf840c331d72ed0ceb33.jpg"
                    },
                      {
                        title: "Chicken Kothu Parotta",
                        price: 170,
                        rating: 4.4,
                        reviews: 1354,
                        description: "Medium Spicy | Boneless | Comes with CURRY | Serves 1 | Shredded parottas tossed with eggs, chicken and chicken.",
                        category: "kothu parota",
                        maincategory: "maincourse",
                        isVeg: false,
                        image:"https://i.pinimg.com/564x/2d/94/84/2d9484873f7122d3b0a88679b56be713.jpg"
                      },
                      {
                        title: "Mutton Kothu Parotta",
                        price: 199,
                        rating: 4.5,
                        reviews: 70,
                        description: "Serves 1 | Shredded parottas tossed with eggs, minced mutton and chicken curry.",
                        category: "kothu parota",
                        maincategory: "maincourse",
                        isVeg: false,
                        image:'https://i.pinimg.com/564x/72/65/98/7265986c108fcbbbaa73eb8c5b9d0843.jpg'
                      },
                      {
                        title: "Egg Kothu Parotta",
                        price: 140,
                        rating: 4.5,
                        reviews: 396,
                        description: "Serves 1 | Crispy parotta minced and mixed with curry masala, onion, egg and stir fried with egg on a hot tawa.",
                        category: "kothu parota",
                        maincategory: "maincourse",
                        isVeg: false,
                        image:"https://i.pinimg.com/564x/3b/86/3e/3b863e763143d61cf257c5a9f1538488.jpg"
                      },
                      {
                        title: "Veg Kothu Parotta",
                        price: 120,
                        rating: 4.1,
                        reviews: 352,
                        description: "Serves 1 | A flavorful and satisfying stir-fry bursting with a medley of seasoned vegetables and tender parotta.",
                        category: "kothu parota",
                        maincategory: "maincourse",
                        isVeg: true,
                        image:"https://i.pinimg.com/564x/3b/d2/d8/3bd2d867db0df0084dd1e6d03a79fc07.jpg"
                      },
                        {
                          title: "Egg Podimas",
                          price: 65,
                          rating: 4.5,
                          reviews: 663,
                          description: "Serves 1 | A savory scramble of tender eggs, bursting with flavor and perfect for a quick and satisfying bite.",
                          category: "eggs to order",
                          maincategory: "maincourse",
                          isVeg: false,
                          image:"https://i.pinimg.com/564x/7a/f0/56/7af056ca7e1497eb3fb2ea7a3618c183.jpg"
                        },
                        {
                          title: "BOILED EGGS - 2NOS",
                          price: 35,
                          rating: 4.5,
                          reviews: 564,
                          description: "Serves 1 | A classic and satisfying option for egg lovers, these boiled eggs are a simple yet flavorful treat.",
                          category: "eggs to order",
                          maincategory: "maincourse",
                          isVeg: false,
                          image:"https://i.pinimg.com/736x/b0/ac/b8/b0acb80f68e8683d07e2ed01ec553bf1.jpg"
                        },
                        {
                          title: "Omelette(1pc)",
                          price: 30,
                          rating: 4.4,
                          reviews: 384,
                          description: "Serves 1 | A mouthwatering and satisfying omelette perfect for a quick bite.",
                          category: "eggs to order",
                          maincategory: "maincourse",
                          isVeg: false,
                          image:"https://i.pinimg.com/736x/a3/6e/4e/a36e4ecd7d20c5e998950ac7cceb4b03.jpg"
                        },
                        
                          {
                            title: "Non Veg Meals",
                            price: 179,
                            rating: 4.4,
                            reviews: 1641,
                            description: "Serves 1 | Chicken gravy with pieces, fish curry with pieces, boiled egg, white rice, sambar, poriyal, rasam, buttermilk, sweet.",
                            category: "meals",
                            maincategory: "meals",
                            isVeg: false,
                            image:"https://i.pinimg.com/564x/41/75/a4/4175a46be368bab1a66bed5b7cf639c0.jpg"
                          },
                          {
                            title: "Fish Meals",
                            price: 139,
                            rating: 4.3,
                            reviews: 717,
                            description: "Serves 1 | Fish Curry (3Pcs) + White Rice + Rasam + Buttermilk + Kootu.",
                            category: "meals",
                            maincategory: "meals",
                            isVeg: false,
                            image:"https://i.pinimg.com/736x/82/b4/f4/82b4f4947772398e30347fd584588804.jpg"
                          },
                          {
                            title: "Veg Meals",
                            price: 125,
                            rating: 4.4,
                            reviews: 3830,
                            description: "Serves 1 | Sambar + Kaara Kuzhambu + Kootu + Poriyal + Rasam + Buttermilk + Sweet + Vadai/Pakoda + Vathal + White Rice.",
                            category: "meals",
                            maincategory: "meals",
                            isVeg: true,
                            image:"https://i.pinimg.com/736x/c5/4e/0f/c54e0f8784494aa5099ccea4e8f8013e.jpg"
                          }
                                                
                                            
                                        
                                
      ]
      
  
  
  return (
    <div>
   <AnimatePresence>
   <Mainpage dishes={mainpagedishes} />
    <Secondpage menu={menu} />
    <Thirdpage />
    <Fourthpage />
   </AnimatePresence>
    </div>
  )
}

export default App
