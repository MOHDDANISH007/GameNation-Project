import mongoose from "mongoose";
import ps5GamesSchema from  "../models/gamesSchema/ps5GamesSchema.js";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });


const ps5Games = [
    {
        "game_id": 1,
        "base_name": "Spider-Man 2",
        "full_name": "Spider-Man 2 (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 4299,
        "image_link": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
    },
    {
        "game_id": 2,
        "base_name": "Far Cry 6",
        "full_name": "Far Cry 6 (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 1819,
        "image_link": "https://a.media-amazon.com/images/I/81ptKW1gJBL._SX522_.jpg"
    },
    {
        "game_id": 3,
        "base_name": "Astro Bot",
        "full_name": "Astro Bot (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3999,
        "image_link": "https://a.media-amazon.com/images/I/81+2xsG+w-L._SY679_.jpg"
    },
    {
        "game_id": 4,
        "base_name": "Days Gone Remastered",
        "full_name": "Days Gone Remastered (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3999,
        "image_link": "https://pbs.twimg.com/media/Ecg8G80XkAA_Wct?format=jpg&name=medium"
    },
    {
        "game_id": 5,
        "base_name": "Horizon Zero Dawn Remastered",
        "full_name": "Horizon Zero Dawn Remastered (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3999,
        "image_link": "https://c.media-amazon.com/images/I/91ANF4cvbUL._SX522_.jpg"
    },
    {
        "game_id": 6,
        "base_name": "Until Dawn",
        "full_name": "Until Dawn (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3999,
        "image_link": "https://a.media-amazon.com/images/I/71Kv+24lUML._SX522_.jpg"
    },
    {
        "game_id": 7,
        "base_name": "Marvel's Spider-Man: Miles Morales",
        "full_name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3999,
        "image_link": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
    },
    {
        "game_id": 8,
        "base_name": "God of War: Ragnarok",
        "full_name": "God of War: Ragnarok (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
    },
    {
        "game_id": 9,
        "base_name": "Hogwarts Legacy",
        "full_name": "Hogwarts Legacy (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 4799,
        "image_link": "https://a.media-amazon.com/images/I/81etAae966L._SX679_.jpg"
    },
    {
        "game_id": 10,
        "base_name": "Assassin's Creed Shadows",
        "full_name": "Assassin's Creed Shadows (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 5999,
        "image_link": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
    },
    {
        "game_id": 11,
        "base_name": "Double Dragon Revive",
        "full_name": "Double Dragon Revive (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 2249,
        "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lnVZpxo1JPcNJrGoRl7_URdi6qCY--NbyA&s"
    },
    {
        "game_id": 12,
        "base_name": "Sonic X Shadow Generations",
        "full_name": "Sonic X Shadow Generations (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3499,
        "image_link": "https://a.media-amazon.com/images/I/81iEU3zUKcL._SX679_.jpg"
    },
    {
        "game_id": 13,
        "base_name": "The Last of Us Part II Remastered",
        "full_name": "The Last of Us Part II Remastered (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3999,
        "image_link": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
    },
    {
        "game_id": 14,
        "base_name": "Dragon's Dogma 2",
        "full_name": "Dragon's Dogma 2 (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 5999,
        "image_link": "https://a.media-amazon.com/images/I/81aI1M6LnVL._SX522_.jpg"
    },
    {
        "game_id": 15,
        "base_name": "Demon's Souls",
        "full_name": "Demon's Souls (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
    },
    {
        "game_id": 16,
        "base_name": "Ghost of Yōtei",
        "full_name": "Ghost of Yōtei (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 5999,
        "image_link": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024"
    },
    {
        "game_id": 17,
        "base_name": "Red Dead Redemption 2",
        "full_name": "Red Dead Redemption 2 (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 4999,
        "image_link": "https://acdn-us.mitiendanube.com/stores/004/093/683/products/red-dead-ps5-2fbdc6998cc7f6f6c917145402060936-1024-1024.webp"
    },
    {
        "game_id": 18,
        "base_name": "Clair Obscur: Expedition 33",
        "full_name": "Clair Obscur: Expedition 33 (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3999,
        "image_link": "https://www.tradergames.fr/612252-large_default/clair-obscur-expedition-33-ps5-euro-preorder.jpg"
    },
    {
        "game_id": 19,
        "base_name": "Fatal Fury: City of the Wolves",
        "full_name": "Fatal Fury: City of the Wolves (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3499,
        "image_link": "https://m.media-amazon.com/images/I/91BzCahTg-L._AC_SX679_.jpg"
    },
    {
        "game_id": 20,
        "base_name": "Oblivion Remastered",
        "full_name": "Oblivion Remastered (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 4499,
        "image_link": "https://generations.com.pk/wp-content/uploads/2025/04/ps5-4.png"
    },
    {
        "game_id": 21,
        "base_name": "Doom: The Dark Ages",
        "full_name": "Doom: The Dark Ages (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/81iK5ajGufL._SY879_.jpg"
    },
    {
        "game_id": 22,
        "base_name": "Elden Ring: Nightreign",
        "full_name": "Elden Ring: Nightreign (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 5999,
        "image_link": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEEVefOyBsbOw-uGGOXKYBV0DqgiHBncxo3OXNHIfZBkOrXFsGkBoc4uOQWUzDtxGTnwCA1NbJlu8N8RKgGeeiqQmE6bbqyMqK4QxIEUkZ6n771DXThK90Pw"
    },
    {
        "game_id": 23,
        "base_name": "Death Stranding 2: On the Beach",
        "full_name": "Death Stranding 2: On the Beach (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 5999,
        "image_link": "https://m.media-amazon.com/images/I/81T36HWb3QL._SX522_.jpg"
    },
    {
        "game_id": 24,
        "base_name": "Five Nights at Freddy's: Secret of the Mimic",
        "full_name": "Five Nights at Freddy's: Secret of the Mimic (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 2999,
        "image_link": "https://static.xtralife.com/conversions/89CR-P31X633227-fullhd_w1920_h1080_q75-fnafsecretofthemimicps5-1739404202.webp"
    },
    {
        "game_id": 25,
        "base_name": "The Midnight Walk",
        "full_name": "The Midnight Walk (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 3499,
        "image_link": "https://images.pushsquare.com/536cd2c651644/midnight-walk-cover.cover_large.jpg"
    },
    {
        "game_id": 26,
        "base_name": "Kingdom Come: Deliverance 2",
        "full_name": "Kingdom Come: Deliverance 2 (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 4999,
        "image_link": "https://e2zstore.com/wp-content/uploads/2025/01/kcd-2-ps5.jpg"
    },
    {
        "game_id": 27,
        "base_name": "Resident Evil 3",
        "full_name": "Resident Evil 3 (PS4 Edition)",
        "platform": "PS5",
        "edition": "PS4 Edition",
        "price_inr": 3599,
        "image_link": "https://a.media-amazon.com/images/I/81zPtVj06kL._SX679_.jpg"
    },
    {
        "game_id": 28,
        "base_name": "Call of Duty: Black Ops 6",
        "full_name": "Call of Duty: Black Ops 6 (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 5299,
        "image_link": "https://a.media-amazon.com/images/I/81ler-4aUFL._SX569_.jpg"
    },
    {
        "game_id": 29,
        "base_name": "Metal Gear Solid Delta: Snake Eater",
        "full_name": "Metal Gear Solid Delta: Snake Eater (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 5999,
        "image_link": "https://m.media-amazon.com/images/I/915Egnuk2uL._AC_SX679_.jpg"
    },
    {
        "game_id": 30,
        "base_name": "The Outer Worlds 2",
        "full_name": "The Outer Worlds 2 (PS5 Edition)",
        "platform": "PS5",
        "edition": "PS5 Edition",
        "price_inr": 4999,
        "image_link": "https://s.pacn.ws/1/p/1ar/the-outer-worlds-2-841711.1.jpg?v=soeulv&width=800&crop=800,1024"
    }
]






const insertPs5GamesSchema = async () => {
    try{
        await ps5GamesSchema.deleteMany({});

        await ps5GamesSchema.insertMany(ps5Games);
        console.log("PS5 games schema inserted successfully.");   
    }
    catch (error) {
        console.error("Error inserting PS5 games schema:", error);
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
        await insertPs5GamesSchema();
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