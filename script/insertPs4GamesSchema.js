import mongoose from "mongoose";
import ps4GamesSchema from  "../models/gamesSchema/ps4GamesSchema.js";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });


const ps4Game = [
    {
        "game_id": 1,
        "base_name": "Spider-Man 2",
        "full_name": "Spider-Man 2 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 3699,
        "image_link": "https://a.media-amazon.com/images/I/71rInOWdBAL._SX679_.jpg"
    },
    {
        "game_id": 2,
        "base_name": "Far Cry 6",
        "full_name": "Far Cry 6 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 1499,
        "image_link": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjfJ78V_mAH94FoNVMQ7Uee2QdkAjHH8sf_3xLA9hLSRwyjftyk_UJiJqDF7Fm7khJGdY9g_2PWADCNtOC1USgVrpzU5wV1riM7YijH8yJz1SX2yfCivhB"
    },
    {
        "game_id": 3,
        "base_name": "Astro Bot",
        "full_name": "Astro Bot (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/716b4iZK6TL._SX679_.jpg"
    },
    {
        "game_id": 4,
        "base_name": "Days Gone",
        "full_name": "Days Gone Remastered (PS4 Edition)",
        "platform": "PS4",
        "edition": "Remastered PS4 Edition",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/91JAyQ8RLCL._SX522_.jpg"
    },
    {
        "game_id": 5,
        "base_name": "Horizon Zero Dawn",
        "full_name": "Horizon Zero Dawn Remastered (PS4 Edition)",
        "platform": "PS4",
        "edition": "Remastered PS4 Edition",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/819-3Ev22jL._SX522_.jpg"
    },
    {
        "game_id": 6,
        "base_name": "Until Dawn",
        "full_name": "Until Dawn (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/81c7WFBfNyL._SX522_.jpg"
    },
    {
        "game_id": 7,
        "base_name": "Marvel's Spider-Man: Miles Morales",
        "full_name": "Marvel's Spider-Man: Miles Morales (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/811umGHYORL._SX569_.jpg"
    },
    {
        "game_id": 8,
        "base_name": "God of War: Ragnarok",
        "full_name": "God of War: Ragnarok (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 4299,
        "image_link": "https://a.media-amazon.com/images/I/81LtrvOKYbL._SY879_.jpg"
    },
    {
        "game_id": 9,
        "base_name": "Hogwarts Legacy",
        "full_name": "Hogwarts Legacy (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 4199,
        "image_link": "https://a.media-amazon.com/images/I/81z6AqCm5nL._SX522_.jpg"
    },
    {
        "game_id": 10,
        "base_name": "Assassin's Creed Shadows",
        "full_name": "Assassin's Creed Shadows (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 5299,
        "image_link": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
    },
    {
        "game_id": 11,
        "base_name": "Double Dragon Revive",
        "full_name": "Double Dragon Revive (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 1999,
        "image_link": "https://s.pacn.ws/1/p/198/double-dragon-revive-814271.11.jpg?v=sgiek6&width=800&crop=1280,1563"
    },
    {
        "game_id": 12,
        "base_name": "Sonic X Shadow Generations",
        "full_name": "Sonic X Shadow Generations (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 2999,
        "image_link": "https://dmdworld.store/wp-content/uploads/2024/11/ps4-sonic-shadow.png"
    },
    {
        "game_id": 13,
        "base_name": "The Last of Us Part II",
        "full_name": "The Last of Us Part II Remastered (PS4 Edition)",
        "platform": "PS4",
        "edition": "Remastered PS4 Edition",
        "price_inr": 3599,
        "image_link": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg"
    },
    {
        "game_id": 14,
        "base_name": "Dragon's Dogma 2",
        "full_name": "Dragon's Dogma 2 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 5499,
        "image_link": "https://a.media-amazon.com/images/I/81kbquO0o-L._SX679_.jpg"
    },
    {
        "game_id": 15,
        "base_name": "Bloodborne",
        "full_name": "Bloodborne - Game of the Year (PS4 Edition)",
        "platform": "PS4",
        "edition": "Game of the Year PS4 Edition",
        "price_inr": 4499,
        "image_link": "https://a.media-amazon.com/images/I/710ZADg0wbL._SY879_.jpg"
    },
    {
        "game_id": 16,
        "base_name": "Ghost of Yōtei",
        "full_name": "Ghost of Yōtei (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 5499,
        "image_link": "https://a.media-amazon.com/images/I/61vCrYISMOL._SX679_.jpg"
    },
    {
        "game_id": 17,
        "base_name": "Red Dead Redemption 2",
        "full_name": "Red Dead Redemption 2 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 4599,
        "image_link": "https://rukminim2.flixcart.com/image/832/832/xif0q/physical-game/z/u/4/-original-imahfdkhykyv9eje.jpeg?q=70&crop=false"
    },
    {
        "game_id": 18,
        "base_name": "Mafia 3",
        "full_name": "Mafia 3 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 3499,
        "image_link": "https://a.media-amazon.com/images/I/81rvq5IfZiL._SX679_.jpg"
    },
    {
        "game_id": 19,
        "base_name": "Fatal Fury: City of the Wolves",
        "full_name": "Fatal Fury: City of the Wolves (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 2999,
        "image_link": "https://m.media-amazon.com/images/I/9131l3+42kL._AC_SX679_.jpg"
    },
    {
        "game_id": 20,
        "base_name": "GTA 5",
        "full_name": "GTA 5 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 3999,
        "image_link": "https://m.media-amazon.com/images/I/81htlTqEckL._SX522_.jpg"
    },
    {
        "game_id": 21,
        "base_name": "Doom: The Dark Ages",
        "full_name": "Doom: The Dark Ages (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 4599,
        "image_link": "https://a.media-amazon.com/images/I/91IoZT4nczL._SX679_.jpg"
    },
    {
        "game_id": 22,
        "base_name": "Elden Ring: Nightreign",
        "full_name": "Elden Ring: Nightreign (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 5599,
        "image_link": "https://cdn.hmv.com/r/w-1280/p-webp/hmv/files/b5/b5be37d0-a98c-48ae-aa0e-1cb8d6cef628.png"
    },
    {
        "game_id": 23,
        "base_name": "FIFA 23",
        "full_name": "FIFA 23 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 5599,
        "image_link": "https://a.media-amazon.com/images/I/71RmYwT5JOL._SX679_.jpg"
    },
    {
        "game_id": 24,
        "base_name": "Five Nights at Freddy's: Secret of the Mimic",
        "full_name": "Five Nights at Freddy's: Secret of the Mimic (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 2699,
        "image_link": "https://i.imgur.com/R91gtRg.jpg"
    },
    {
        "game_id": 25,
        "base_name": "Hitman 3",
        "full_name": "Hitman 3 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 3099,
        "image_link": "https://a.media-amazon.com/images/I/61ppuR4BooL._SX522_.jpg"
    },
    {
        "game_id": 26,
        "base_name": "Kingdom Come: Deliverance",
        "full_name": "Kingdom Come: Deliverance (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 4599,
        "image_link": "https://a.media-amazon.com/images/I/91j1wKFr+bL._SX522_.jpg"
    },
    {
        "game_id": 27,
        "base_name": "Resident Evil 3",
        "full_name": "Resident Evil 3 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 3599,
        "image_link": "https://a.media-amazon.com/images/I/81zPtVj06kL._SX679_.jpg"
    },
    {
        "game_id": 28,
        "base_name": "Call of Duty: Black Ops 6",
        "full_name": "Call of Duty: Black Ops 6 (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 4899,
        "image_link": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6GCYz53QwiDoEUlj2MocvsK-RdvzlMGno-7E8DElsG9pjQt-LeDUZ5pL4m8JaH-PxQ_G76gR15VDbbK01t1u5hOKNKymq17qazRlJkFboYHEAh9zK-gBHQw"
    },
    {
        "game_id": 29,
        "base_name": "Ghost Recon Wildlands",
        "full_name": "Ghost Recon Wildlands (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 5599,
        "image_link": "https://a.media-amazon.com/images/I/91FhqicEyLL._SX679_.jpg"
    },
    {
        "game_id": 30,
        "base_name": "Watch Dogs Legion",
        "full_name": "Watch Dogs Legion (PS4 Edition)",
        "platform": "PS4",
        "edition": "PS4 Edition",
        "price_inr": 4599,
        "image_link": "https://a.media-amazon.com/images/I/81HsglxgCQL._SX679_.jpg"
    }
];


const insertPs4GamesSchema = async () => {
    try{
        await ps4GamesSchema.deleteMany({});

        await ps4GamesSchema.insertMany(ps4Game);
        console.log("PS4 games schema inserted successfully.");   
    }
    catch (error) {
        console.error("Error inserting PS4 games schema:", error);
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
        await insertPs4GamesSchema();
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