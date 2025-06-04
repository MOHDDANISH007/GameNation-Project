import mongoose from "mongoose";
import xboxOneGamesSchema from  "../models/gamesSchema/xboxOneGamesSchema.js";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });


const xboxOneData = [
    {
        "game_id": 1,
        "base_name": "Cyberpunk 2077: Phantom Liberty",
        "full_name": "Cyberpunk 2077: Phantom Liberty (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4599,
        "image_link": "https://a.media-amazon.com/images/I/819bg+506sL._SY879_.jpg"
    },
    {
        "game_id": 2,
        "base_name": "Mafia 3",
        "full_name": "Mafia 3 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 5399,
        "image_link": "https://a.media-amazon.com/images/I/81PPJp12iwL._SX679_.jpg"
    },
    {
        "game_id": 3,
        "base_name": "GTA 5",
        "full_name": "GTA 5 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/91sGvkrMZmL._SX679_.jpg"
    },
    {
        "game_id": 4,
        "base_name": "Alan Wake 2",
        "full_name": "Alan Wake 2 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4199,
        "image_link": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
    },
    {
        "game_id": 5,
        "base_name": "State of Decay 3",
        "full_name": "State of Decay 3 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4299,
        "image_link": "https://s3-ap-southeast-1.amazonaws.com/qisahn-upgrade-production/public/spree/products/34986/large/XBX-State-of-Decay-3.jpg?1654663110"
    },
    {
        "game_id": 6,
        "base_name": "Hellblade II: Senua's Saga",
        "full_name": "Hellblade II: Senua's Saga (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4799,
        "image_link": "https://zamve.com/wp-content/uploads/2024/04/Senuas-Saga-Hellblade-2-Xbox-One-Xbox-Series-XS-Digital-or-Physical-Game-from-zamve.com_.jpg"
    },
    {
        "game_id": 7,
        "base_name": "Fable Reimagined",
        "full_name": "Fable Reimagined (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/91VQbs2RLFL._SY679_.jpg"
    },
    {
        "game_id": 8,
        "base_name": "The Witcher 3",
        "full_name": "The Witcher 3 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 5599,
        "image_link": "https://i.ebayimg.com/images/g/0KEAAOSwgJ5hYVIZ/s-l1600.webp"
    },
    {
        "game_id": 9,
        "base_name": "Control",
        "full_name": "Control (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 3899,
        "image_link": "https://a.media-amazon.com/images/I/615gD35bU4L._SX522_.jpg"
    },
    {
        "game_id": 10,
        "base_name": "Star Wars: Eclipse",
        "full_name": "Star Wars: Eclipse (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 5199,
        "image_link": "https://image.coolblue.nl/max/788xauto/products/1686526"
    },
    {
        "game_id": 11,
        "base_name": "Far Cry 6",
        "full_name": "Far Cry 6 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 1599,
        "image_link": "https://a.media-amazon.com/images/I/61EzxJfMzgL._SL1125_.jpg"
    },
    {
        "game_id": 12,
        "base_name": "Hogwarts Legacy",
        "full_name": "Hogwarts Legacy (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4299,
        "image_link": "https://a.media-amazon.com/images/I/8137RKRSs3L._SX679_.jpg"
    },
    {
        "game_id": 13,
        "base_name": "Assassin's Creed Syndicate",
        "full_name": "Assassin's Creed Syndicate (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 5399,
        "image_link": "https://a.media-amazon.com/images/I/813txKiS9kL._SX522_.jpg"
    },
    {
        "game_id": 14,
        "base_name": "FIFA 23",
        "full_name": "FIFA 23 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 2099,
        "image_link": "https://a.media-amazon.com/images/I/813FuI3y8zL._SX679_.jpg"
    },
    {
        "game_id": 15,
        "base_name": "Sonic X Shadow Generations",
        "full_name": "Sonic X Shadow Generations (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 3099,
        "image_link": "https://game-legends.de/thumbnail/23/2b/0e/1718551301/1147712-sonic-x-shadow-generations-xone-xsrx-2d_800x800.webp?ts=1718551304"
    },
    {
        "game_id": 16,
        "base_name": "Hitman 3",
        "full_name": "Hitman 3 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 5599,
        "image_link": "https://m.media-amazon.com/images/I/61qu5Iyg3RL._SX522_.jpg"
    },
    {
        "game_id": 17,
        "base_name": "Red Dead Redemption 2",
        "full_name": "Red Dead Redemption 2 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4699,
        "image_link": "https://a.media-amazon.com/images/I/81JuQGZ77WL._SL1500_.jpg"
    },
    {
        "game_id": 18,
        "base_name": "Fatal Fury: City of the Wolves",
        "full_name": "Fatal Fury: City of the Wolves (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 3099,
        "image_link": "https://s.pacn.ws/1/p/19n/fatal-fury-city-of-the-wolves-821617.1.jpg?v=simj99"
    },
    {
        "game_id": 19,
        "base_name": "Days Gone",
        "full_name": "Days Gone (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4099,
        "image_link": "https://z.nooncdn.com/products/tr:n-t_400/v1556083525/N24425211A_1.jpg"
    },
    {
        "game_id": 20,
        "base_name": "Doom: The Dark Ages",
        "full_name": "Doom: The Dark Ages (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4699,
        "image_link": "https://totalcards.net/cdn/shop/files/Doom-the-Dark-ages-xbox.jpg?v=1718555919"
    },
    {
        "game_id": 21,
        "base_name": "Ghost Recon Wildlands",
        "full_name": "Ghost Recon Wildlands (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 5699,
        "image_link": "https://a.media-amazon.com/images/I/71-QQiUyLNL._SX522_.jpg"
    },
    {
        "game_id": 22,
        "base_name": "Ghost Recon Breakpoint",
        "full_name": "Ghost Recon Breakpoint (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 5699,
        "image_link": "https://mx2games.com/wp-content/uploads/2021/08/ghostrecon-breakpoint-xboxone.jpg"
    },
    {
        "game_id": 23,
        "base_name": "Battlefield 2042",
        "full_name": "Battlefield 2042 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 2799,
        "image_link": "https://hgworld.in/wp-content/uploads/2021/11/xbox-one-vattek2042.png"
    },
    {
        "game_id": 24,
        "base_name": "Battlefield V",
        "full_name": "Battlefield V (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 3199,
        "image_link": "https://images-cdn.ubuy.co.in/64c6b576deff4109c838d467-battlefield-v-xbox-one.jpg"
    },
    {
        "game_id": 25,
        "base_name": "Crickets",
        "full_name": "Crickets (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4699,
        "image_link": "https://a.media-amazon.com/images/I/81X7qCWLrNL._SX679_.jpg"
    },
    {
        "game_id": 26,
        "base_name": "Forza Horizon 5",
        "full_name": "Forza Horizon 5 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 3699,
        "image_link": "https://a.media-amazon.com/images/I/71xxm98aRUL._SX522_.jpg"
    },
    {
        "game_id": 27,
        "base_name": "Call of Duty: Black Ops 6",
        "full_name": "Call of Duty: Black Ops 6 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
    },
    {
        "game_id": 28,
        "base_name": "Watch Dog 2",
        "full_name": "Watch Dog 2 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 5699,
        "image_link": "https://a.media-amazon.com/images/I/91T9BAXVnFL._SY879_.jpg"
    },
    {
        "game_id": 29,
        "base_name": "The Outer Worlds 2",
        "full_name": "The Outer Worlds 2 (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 4699,
        "image_link": "https://a.media-amazon.com/images/I/81xYUtq0rcL._SX522_.jpg"
    },
    {
        "game_id": 30,
        "base_name": "Star Wars Jedi: Fallen Order",
        "full_name": "Star Wars Jedi: Fallen Order (Xbox One Edition)",
        "platform": "XBOX_ONE",
        "edition": "Xbox One Edition",
        "price_inr": 5999,
        "image_link": "https://a.media-amazon.com/images/I/81cCRix0sWL._SL1500_.jpg"
    }
]



const insertXboxOneGamesSchema = async () => {
    try{
        await xboxOneGamesSchema.deleteMany({});

        await xboxOneGamesSchema.insertMany(xboxOneData);
        console.log("Xbox One games schema inserted successfully.");   
    }
    catch (error) {
        console.error("Error inserting Xbox One games schema:", error);
    }
}

const main = async () => {
    try{
        if(!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in the environment variables.");
        }   

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB successfully.");
        await insertXboxOneGamesSchema();
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB.");
    }
}

main().catch(error => {
    console.error("An error occurred in the main function:", error);
});