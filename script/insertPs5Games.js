import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });
import Ps5 from "../models/ps5/ps5.model.js";
import Ps5_Details from "../models/ps5/ps5_detail.model.js";




const ps5Games = [
    {
        "Type": "PS5",
        "game_id": 1,
        "game_name": "Spider-Man 2 (PS5 Edition)",
        "price_inr": 4299,
        "image_link": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 2,
        "game_name": "Far Cry 6 (PS5 Edition)",
        "price_inr": 1819,
        "image_link": "https://a.media-amazon.com/images/I/81ptKW1gJBL._SX522_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 3,
        "game_name": "Astro Bot (PS5 Edition)",
        "price_inr": 3999,
        "image_link": "https://a.media-amazon.com/images/I/81+2xsG+w-L._SY679_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 4,
        "game_name": "Days Gone Remastered (PS5 Edition)",
        "price_inr": 3999,
        "image_link": "https://pbs.twimg.com/media/Ecg8G80XkAA_Wct?format=jpg&name=medium"
    },
    {
        "Type": "PS5",
        "game_id": 5,
        "game_name": "Horizon Zero Dawn Remastered (PS5 Edition)",
        "price_inr": 3999,
        "image_link": "https://c.media-amazon.com/images/I/91ANF4cvbUL._SX522_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 6,
        "game_name": "Until Dawn (PS5 Edition)",
        "price_inr": 3999,
        "image_link": "https://a.media-amazon.com/images/I/71Kv+24lUML._SX522_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 7,
        "game_name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
        "price_inr": 3999,
        "image_link": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 8,
        "game_name": "God of War: Ragnarok (PS5 Edition)",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 9,
        "game_name": "Hogwarts Legacy (PS5 Edition)",
        "price_inr": 4799,
        "image_link": "https://a.media-amazon.com/images/I/81etAae966L._SX679_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 10,
        "game_name": "Assassin's Creed Shadows (PS5 Edition)",
        "price_inr": 5999,
        "image_link": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 11,
        "game_name": "Double Dragon Revive (PS5 Edition)",
        "price_inr": 2249,
        "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lnVZpxo1JPcNJrGoRl7_URdi6qCY--NbyA&s"
    },
    {
        "Type": "PS5",
        "game_id": 12,
        "game_name": "Sonic X Shadow Generations (PS5 Edition)",
        "price_inr": 3499,
        "image_link": "https://a.media-amazon.com/images/I/81iEU3zUKcL._SX679_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 13,
        "game_name": "The Last of Us Part II Remastered (PS5 Edition)",
        "price_inr": 3999,
        "image_link": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 14,
        "game_name": "Dragon's Dogma 2 (PS5 Edition)",
        "price_inr": 5999,
        "image_link": "https://a.media-amazon.com/images/I/81aI1M6LnVL._SX522_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 15,
        "game_name": "Demon's Souls (PS5 Edition)",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 16,
        "game_name": "Ghost of Yōtei (PS5 Edition)",
        "price_inr": 5999,
        "image_link": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024"
    },
    {
        "Type": "PS5",
        "game_id": 17,
        "game_name": "Red Dead Redemption 2 (PS5 Edition)",
        "price_inr": 4999,
        "image_link": "https://acdn-us.mitiendanube.com/stores/004/093/683/products/red-dead-ps5-2fbdc6998cc7f6f6c917145402060936-1024-1024.webp"
    },
    {
        "Type": "PS5",
        "game_id": 18,
        "game_name": "Clair Obscur: Expedition 33 (PS5 Edition)",
        "price_inr": 3999,
        "image_link": "https://www.tradergames.fr/612252-large_default/clair-obscur-expedition-33-ps5-euro-preorder.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 19,
        "game_name": "Fatal Fury: City of the Wolves (PS5 Edition)",
        "price_inr": 3499,
        "image_link": "https://m.media-amazon.com/images/I/91BzCahTg-L._AC_SX679_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 20,
        "game_name": "Oblivion Remastered (PS5 Edition)",
        "price_inr": 4499,
        "image_link": "https://generations.com.pk/wp-content/uploads/2025/04/ps5-4.png"
    },
    {
        "Type": "PS5",
        "game_id": 21,
        "game_name": "Doom: The Dark Ages (PS5 Edition)",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/81iK5ajGufL._SY879_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 22,
        "game_name": "Elden Ring: Nightreign (PS5 Edition)",
        "price_inr": 5999,
        "image_link": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEEVefOyBsbOw-uGGOXKYBV0DqgiHBncxo3OXNHIfZBkOrXFsGkBoc4uOQWUzDtxGTnwCA1NbJlu8N8RKgGeeiqQmE6bbqyMqK4QxIEUkZ6n771DXThK90Pw"
    },
    {
        "Type": "PS5",
        "game_id": 23,
        "game_name": "Death Stranding 2: On the Beach (PS5 Edition)",
        "price_inr": 5999,
        "image_link": "https://m.media-amazon.com/images/I/81T36HWb3QL._SX522_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 24,
        "game_name": "Five Nights at Freddy's: Secret of the Mimic (PS5 Edition)",
        "price_inr": 2999,
        "image_link": "https://static.xtralife.com/conversions/89CR-P31X633227-fullhd_w1920_h1080_q75-fnafsecretofthemimicps5-1739404202.webp"
    },
    {
        "Type": "PS5",
        "game_id": 25,
        "game_name": "The Midnight Walk (PS5 Edition)",
        "price_inr": 3499,
        "image_link": "https://images.pushsquare.com/536cd2c651644/midnight-walk-cover.cover_large.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 26,
        "game_name": "Kingdom Come: Deliverance 2 (PS5 Edition)",
        "price_inr": 4999,
        "image_link": "https://e2zstore.com/wp-content/uploads/2025/01/kcd-2-ps5.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 27,
        "game_name": "Resident Evil 3 (PS4 Edition)",
        "price_inr": 3599,
        "image_link": "https://a.media-amazon.com/images/I/81zPtVj06kL._SX679_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 28,
        "game_name": "Call of Duty: Black Ops 6 (PS5 Edition)",
        "price_inr": 5299,
        "image_link": "https://a.media-amazon.com/images/I/81ler-4aUFL._SX569_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 29,
        "game_name": "Metal Gear Solid Delta: Snake Eater (PS5 Edition)",
        "price_inr": 5999,
        "image_link": "https://m.media-amazon.com/images/I/915Egnuk2uL._AC_SX679_.jpg"
    },
    {
        "Type": "PS5",
        "game_id": 30,
        "game_name": "The Outer Worlds 2 (PS5 Edition)",
        "price_inr": 4999,
        "image_link": "https://s.pacn.ws/1/p/1ar/the-outer-worlds-2-841711.1.jpg?v=soeulv&width=800&crop=800,1024"
    }
]

const Ps5Details = [
    {
        "id": "1",
        "title": "Spider-Man 2 (PS5 Edition)",
        "developer": "Insomniac Games",
        "price": 4299,
        "description": "Swing through an expanded New York City as Peter Parker and Miles Morales, battling Venom and other threats in this PS5-exclusive sequel with Ray Tracing, 3D Audio, and DualSense haptics.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 17 hours, Main + Extra - 25 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 90,
        "releaseDate": "20 Oct 2023",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/nq1M_Wc4FIc?si=1TvQ00_lZBUeZmmE",
        "about": "Spider-Man 2 is a PS5-exclusive sequel that expands on its predecessors with a larger open-world, new abilities, and PS5 features like Ray Tracing, 3D Audio, and DualSense support.",
        "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "Yes, Spider-Man 2 is exclusive to PS5."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports Ray Tracing, 3D Audio, and DualSense haptics for immersion."
            },
            {
                "question": "Is it a sequel?",
                "answer": "Yes, it follows Spider-Man (2018) and Miles Morales."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player campaign."
            }
        ],
        "similarProducts": [
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "3",
                "name": "Astro Bot (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81+2xsG+w-L._SY679_.jpg"
            },
            {
                "id": "5",
                "name": "Horizon Zero Dawn Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://c.media-amazon.com/images/I/91ANF4cvbUL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "2",
        "title": "Far Cry 6 (PS5 Edition)",
        "developer": "Ubisoft Toronto",
        "price": 1819,
        "description": "Fight against a ruthless dictator in the fictional island of Yara in this open-world FPS, optimized for PS5 with 4K visuals, 3D Audio, and DualSense haptics.",
        "gameType": "Campaign",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 23 hours, Main + Extra - 40 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for multiplayer",
        "metacriticScore": 73,
        "releaseDate": "07 Oct 2021",
        "publisher": "Ubisoft",
        "countryOfOrigin": "Canada",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/-IJuKT1mHO8?si=0iF3RGrJ5D5deRdc",
        "about": "Far Cry 6 is an action-packed FPS set in a vibrant open-world, featuring PS5 enhancements like 4K resolution, faster load times, and immersive DualSense feedback.",
        "image": "https://a.media-amazon.com/images/I/81ptKW1gJBL._SX522_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms, but PS5 offers enhanced visuals."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online co-op multiplayer; single-player is offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            }
        ],
        "similarProducts": [
            {
                "id": "10",
                "name": "Assassin's Creed Shadows (PS5 Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
            },
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (PS5 Edition)",
                "price": 5299,
                "image": "https://a.media-amazon.com/images/I/81ler-4aUFL._SX569_.jpg"
            },
            {
                "id": "21",
                "name": "Doom: The Dark Ages (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81iK5ajGufL._SY879_.jpg"
            },
            {
                "id": "16",
                "name": "Ghost of Yōtei (PS5 Edition)",
                "price": 5999,
                "image": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024"
            }
        ]
    },
    {
        "id": "3",
        "title": "Astro Bot (PS5 Edition)",
        "developer": "Team Asobi",
        "price": 3999,
        "description": "Join Astro on a vibrant platforming adventure across galaxies, utilizing PS5's DualSense controller for immersive gameplay with stunning visuals and 3D Audio.",
        "gameType": "Campaign",
        "genre": "Platformer",
        "gameplayHours": "Main Story - 12 hours, Main + Extra - 18 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 94,
        "releaseDate": "06 Sep 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "Japan",
        "platform": ["PS5"],
        "pegiRating": "7+",
        "trailerVideo": "https://youtu.be/unYFdcEjV9k?si=Kp3hVVJDcSuj1e3I",
        "about": "Astro Bot is a critically acclaimed PS5-exclusive platformer that showcases the DualSense controller's haptic feedback and adaptive triggers, delivering a joyful and innovative gaming experience.",
        "image": "https://a.media-amazon.com/images/I/81+2xsG+w-L._SY679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "Yes, Astro Bot is designed exclusively for PS5."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's a single-player game playable offline."
            },
            {
                "question": "How does DualSense enhance gameplay?",
                "answer": "The DualSense provides haptic feedback and adaptive triggers to simulate different surfaces and actions."
            },
            {
                "question": "Is it suitable for kids?",
                "answer": "Yes, with a PEGI 7 rating, it's family-friendly."
            },
            {
                "question": "Is it a sequel to Astro's Playroom?",
                "answer": "Yes, it's a full-fledged follow-up to the PS5 pre-installed game."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "5",
                "name": "Horizon Zero Dawn Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://c.media-amazon.com/images/I/91ANF4cvbUL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "4",
        "title": "Days Gone Remastered (PS5 Edition)",
        "developer": "Bend Studio",
        "price": 3999,
        "description": "Ride through a post-apocalyptic Pacific Northwest as Deacon St. John, battling Freaker hordes in this PS5-remastered open-world adventure with enhanced graphics and DualSense support.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 36 hours, Main + Extra - 50 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 71,
        "releaseDate": "25 Oct 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/RjRLSZalxgs?si=UOeCNuuQNG61vEme",
        "about": "Days Gone Remastered brings the open-world zombie survival game to PS5 with upgraded visuals, 4K support, and DualSense haptic feedback for an immersive experience.",
        "image": "https://pbs.twimg.com/media/Ecg8G80XkAA_Wct?format=jpg&name=medium",
        "faqs": [
            {
                "question": "What's new in the PS5 remaster?",
                "answer": "Enhanced 4K visuals, 60 FPS, and DualSense haptic feedback."
            },
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "Can I upgrade from PS4?",
                "answer": "Yes, PS4 owners can upgrade for a small fee."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player campaign."
            }
        ],
        "similarProducts": [
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "5",
                "name": "Horizon Zero Dawn Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://c.media-amazon.com/images/I/91ANF4cvbUL._SX522_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "5",
        "title": "Horizon Zero Dawn Remastered (PS5 Edition)",
        "developer": "Guerrilla Games",
        "price": 3999,
        "description": "Explore a lush, post-apocalyptic world as Aloy, battling robotic creatures in this PS5 remaster with upgraded 4K visuals, Ray Tracing, and DualSense support.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 30 hours, Main + Extra - 45 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 89,
        "releaseDate": "31 Oct 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "Netherlands",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/kMN-x9goE7M?si=0Eo5cJE4miZAk4vv",
        "about": "Horizon Zero Dawn Remastered enhances the award-winning action RPG for PS5, featuring improved graphics, Ray Tracing, and immersive DualSense features for a breathtaking adventure.",
        "image": "https://c.media-amazon.com/images/I/91ANF4cvbUL._SX522_.jpg",
        "faqs": [
            {
                "question": "What's new in the PS5 remaster?",
                "answer": "4K visuals, Ray Tracing, 60 FPS, and DualSense support."
            },
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "Can I upgrade from PS4?",
                "answer": "Yes, PS4 owners can upgrade for a small fee."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a vast open-world environment."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player campaign."
            }
        ],
        "similarProducts": [
            {
                "id": "4",
                "name": "Days Gone Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://pbs.twimg.com/media/Ecg8G80XkAA_Wct?format=jpg&name=medium"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "6",
        "title": "Until Dawn (PS5 Edition)",
        "developer": "Supermassive Games",
        "price": 3999,
        "description": "Make life-or-death choices in this cinematic horror adventure, remastered for PS5 with enhanced visuals, 3D Audio, and DualSense haptics.",
        "gameType": "Campaign",
        "genre": "Interactive Drama/Horror",
        "gameplayHours": "Main Story - 8 hours, Main + Extra - 12 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 79,
        "releaseDate": "04 Oct 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "UK",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/8nApBGPy0ao?si=iFLa7JZQgemXGHy2",
        "about": "Until Dawn is a remastered PS5 horror game where player choices shape the survival of eight friends in a chilling narrative, enhanced with PS5's 3D Audio and DualSense features.",
        "image": "https://a.media-amazon.com/images/I/71Kv+24lUML._SX522_.jpg",
        "faqs": [
            {
                "question": "What's new in the PS5 version?",
                "answer": "Improved visuals, 3D Audio, and DualSense support for immersion."
            },
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "Does it support multiplayer?",
                "answer": "No, it's a single-player narrative experience."
            },
            {
                "question": "Can choices change the story?",
                "answer": "Yes, player choices significantly impact the narrative and endings."
            },
            {
                "question": "Is it a remake or remaster?",
                "answer": "It's a remaster with enhanced visuals and PS5 features."
            }
        ],
        "similarProducts": [
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            },
            {
                "id": "24",
                "name": "Five Nights at Freddy's: Secret of the Mimic (PS5 Edition)",
                "price": 2999,
                "image": "https://static.xtralife.com/conversions/89CR-P31X633227-fullhd_w1920_h1080_q75-fnafsecretofthemimicps5-1739404202.webp"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "7",
        "title": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
        "developer": "Insomniac Games",
        "price": 3999,
        "description": "Swing through a snowy New York City as Miles Morales, mastering new powers in this PS5-optimized superhero adventure with Ray Tracing, 3D Audio, and DualSense haptics.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 8 hours, Main + Extra - 13 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 85,
        "releaseDate": "12 Nov 2020",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/RHQe-UsmC_0?si=dYmA9JfHeK6MtrfU",
        "about": "Spider-Man: Miles Morales is a PS5 launch title showcasing Miles Morales as he balances superhero duties with personal life, featuring stunning visuals and PS5-exclusive features like Ray Tracing and fast load times.",
        "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg",
        "faqs": [
            {
                "question": "Does this game utilize PS5 features?",
                "answer": "Yes, it supports Ray Tracing, 3D Audio, and DualSense haptic feedback."
            },
            {
                "question": "Is an internet connection required?",
                "answer": "No, the campaign is fully playable offline."
            },
            {
                "question": "Can I upgrade from PS4 to PS5?",
                "answer": "Yes, the PS4 version can be upgraded to PS5 for free."
            },
            {
                "question": "Is multiplayer included?",
                "answer": "No, this is a single-player campaign."
            },
            {
                "question": "How does it compare to Spider-Man (2018)?",
                "answer": "It's a shorter, standalone story focusing on Miles Morales with improved PS5 features."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "5",
                "name": "Horizon Zero Dawn Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://c.media-amazon.com/images/I/91ANF4cvbUL._SX522_.jpg"
            },
            {
                "id": "4",
                "name": "Days Gone Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://pbs.twimg.com/media/Ecg8G80XkAA_Wct?format=jpg&name=medium"
            }
        ]
    },
    {
        "id": "8",
        "title": "God of War: Ragnarok (PS5 Edition)",
        "developer": "Santa Monica Studio",
        "price": 4999,
        "description": "Embark on an epic Norse mythology adventure as Kratos and Atreus, featuring stunning PS5 visuals, 3D Audio, and DualSense haptics in this critically acclaimed sequel.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 25 hours, Main + Extra - 50 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 94,
        "releaseDate": "09 Nov 2022",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/g1wr0DfV73E?si=IPgm3bOW9LSFaAgp",
        "about": "God of War: Ragnarok concludes the Norse saga with improved combat, exploration, and storytelling, optimized for PS5 with enhanced visuals and immersive features.",
        "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's also available on PS4 but with enhanced features on PS5."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, 60 FPS, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "It features large, interconnected areas but isn't fully open-world."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "16",
                "name": "Ghost of Yōtei (PS5 Edition)",
                "price": 5999,
                "image": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024"
            },
            {
                "id": "5",
                "name": "Horizon Zero Dawn Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://c.media-amazon.com/images/I/91ANF4cvbUL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "9",
        "title": "Hogwarts Legacy (PS5 Edition)",
        "developer": "Avalanche Software",
        "price": 4799,
        "description": "Attend Hogwarts School of Witchcraft and Wizardry in this open-world RPG set in the 1800s, featuring magical combat, creature taming, and PS5-exclusive features.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 35 hours, Main + Extra - 70 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 84,
        "releaseDate": "10 Feb 2023",
        "publisher": "Warner Bros. Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/h01wiXjP3CE?si=D3XDgjInLP6_Bi6z",
        "about": "Hogwarts Legacy lets players experience life as a Hogwarts student with an original story, magical abilities to master, and a vast open world to explore, enhanced for PS5 with exclusive content.",
        "image": "https://a.media-amazon.com/images/I/81etAae966L._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms but has PS5-exclusive content."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, fast loading, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open world including Hogwarts and surrounding areas."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "14",
                "name": "Dragon's Dogma 2 (PS5 Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81aI1M6LnVL._SX522_.jpg"
            },
            {
                "id": "20",
                "name": "Oblivion Remastered (PS5 Edition)",
                "price": 4499,
                "image": "https://generations.com.pk/wp-content/uploads/2025/04/ps5-4.png"
            },
            {
                "id": "22",
                "name": "Elden Ring: Nightreign (PS5 Edition)",
                "price": 5999,
                "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEEVefOyBsbOw-uGGOXKYBV0DqgiHBncxo3OXNHIfZBkOrXFsGkBoc4uOQWUzDtxGTnwCA1NbJlu8N8RKgGeeiqQmE6bbqyMqK4QxIEUkZ6n771DXThK90Pw"
            },
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            },
            {
                "id": "5",
                "name": "Horizon Zero Dawn Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://c.media-amazon.com/images/I/91ANF4cvbUL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "10",
        "title": "Assassin's Creed Shadows (PS5 Edition)",
        "developer": "Ubisoft Quebec",
        "price": 5999,
        "description": "Experience feudal Japan through dual protagonists in this open-world action RPG, featuring stealth, parkour, and combat optimized for PS5 with enhanced visuals and DualSense support.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 30 hours, Main + Extra - 100 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 86,
        "releaseDate": "15 Nov 2024",
        "publisher": "Ubisoft",
        "countryOfOrigin": "Canada",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/vovkzbtYBC8?si=Y4IAyoGLmwkDYNmw",
        "about": "Assassin's Creed Shadows takes players to feudal Japan with two playable characters - a shinobi and a samurai - featuring a dynamic world, seasons system, and PS5-exclusive enhancements.",
        "image": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms but has PS5-exclusive features."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, the campaign is fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, Ray Tracing, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open world of feudal Japan."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "16",
                "name": "Ghost of Yōtei (PS5 Edition)",
                "price": 5999,
                "image": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024"
            },
            {
                "id": "26",
                "name": "Kingdom Come: Deliverance 2 (PS5 Edition)",
                "price": 4999,
                "image": "https://e2zstore.com/wp-content/uploads/2025/01/kcd-2-ps5.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "11",
        "title": "Double Dragon Revive (PS5 Edition)",
        "developer": "Arc System Works",
        "price": 2249,
        "description": "Revitalize the classic beat 'em up franchise with modern visuals and gameplay in this PS5-exclusive revival, featuring cooperative play and DualSense-enhanced combat.",
        "gameType": "Campaign",
        "genre": "Beat 'em up",
        "gameplayHours": "Main Story - 6 hours, Main + Extra - 12 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online co-op",
        "metacriticScore": 78,
        "releaseDate": "28 Nov 2024",
        "publisher": "Modus Games",
        "countryOfOrigin": "Japan",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/CzvvUPRkLSc?si=RuXl1792KOz-hMfX",
        "about": "Double Dragon Revive brings the classic arcade beat 'em up to PS5 with modern graphics, new mechanics, and cooperative gameplay enhanced by DualSense features.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lnVZpxo1JPcNJrGoRl7_URdi6qCY--NbyA&s",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "Yes, it's a PS5-exclusive revival of the Double Dragon series."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online co-op; local co-op doesn't require PS Plus."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports DualSense haptics for combat feedback and 3D Audio."
            },
            {
                "question": "Is it a remake or new game?",
                "answer": "It's a new entry in the series with modern gameplay."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Yes, it features both local and online cooperative play."
            }
        ],
        "similarProducts": [
            {
                "id": "19",
                "name": "Fatal Fury: City of the Wolves (PS5 Edition)",
                "price": 3499,
                "image": "https://m.media-amazon.com/images/I/91BzCahTg-L._AC_SX679_.jpg"
            },
            {
                "id": "12",
                "name": "Sonic X Shadow Generations (PS5 Edition)",
                "price": 3499,
                "image": "https://a.media-amazon.com/images/I/81iEU3zUKcL._SX679_.jpg"
            },
            {
                "id": "3",
                "name": "Astro Bot (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81+2xsG+w-L._SY679_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            }
        ]
    },
    {
        "id": "12",
        "title": "Sonic X Shadow Generations (PS5 Edition)",
        "developer": "Sonic Team",
        "price": 3499,
        "description": "Race through remastered classic levels and new Shadow campaigns in this definitive Sonic collection, enhanced for PS5 with 4K visuals and DualSense support.",
        "gameType": "Campaign",
        "genre": "Platformer",
        "gameplayHours": "Main Story - 10 hours, Main + Extra - 20 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 82,
        "releaseDate": "25 Oct 2024",
        "publisher": "SEGA",
        "countryOfOrigin": "Japan",
        "platform": ["PS5"],
        "pegiRating": "7+",
        "trailerVideo": "https://youtu.be/yVyt0LAxU0w?si=RnEQfao1g87Qplrg",
        "about": "Sonic X Shadow Generations combines remastered classic Sonic levels with new Shadow-focused content, optimized for PS5 with enhanced visuals and performance.",
        "image": "https://a.media-amazon.com/images/I/81iEU3zUKcL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms but has PS5 enhancements."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, fast loading, and DualSense haptics."
            },
            {
                "question": "Is it a remake or new game?",
                "answer": "It's an expanded remaster of Sonic Generations with new content."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "3",
                "name": "Astro Bot (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81+2xsG+w-L._SY679_.jpg"
            },
            {
                "id": "11",
                "name": "Double Dragon Revive (PS5 Edition)",
                "price": 2249,
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lnVZpxo1JPcNJrGoRl7_URdi6qCY--NbyA&s"
            },
            {
                "id": "19",
                "name": "Fatal Fury: City of the Wolves (PS5 Edition)",
                "price": 3499,
                "image": "https://m.media-amazon.com/images/I/91BzCahTg-L._AC_SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "13",
        "title": "The Last of Us Part II Remastered (PS5 Edition)",
        "developer": "Naughty Dog",
        "price": 3999,
        "description": "Experience Ellie's emotional journey with enhanced visuals, 3D Audio, and DualSense support in this definitive PS5 version, including new content and gameplay modes.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 25 hours, Main + Extra - 40 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 93,
        "releaseDate": "19 Jan 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/-llaUBqovHw?si=OUDRagwjaulfC7qp",
        "about": "The Last of Us Part II Remastered brings Naughty Dog's acclaimed sequel to PS5 with graphical enhancements, new content, and full DualSense integration for a more immersive experience.",
        "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "Yes, the remastered version is exclusive to PS5."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, 60 FPS, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is there new content?",
                "answer": "Yes, including new gameplay modes and developer commentary."
            },
            {
                "question": "Can I upgrade from PS4?",
                "answer": "Yes, for a small fee if you own the original PS4 version."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "16",
                "name": "Ghost of Yōtei (PS5 Edition)",
                "price": 5999,
                "image": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024"
            },
            {
                "id": "6",
                "name": "Until Dawn (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/71Kv+24lUML._SX522_.jpg"
            }
        ]
    },
    {
        "id": "14",
        "title": "Dragon's Dogma 2 (PS5 Edition)",
        "developer": "Capcom",
        "price": 5999,
        "description": "Embark on an epic fantasy adventure with improved pawn AI and combat in this highly anticipated sequel, optimized for PS5 with enhanced visuals and performance.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 40 hours, Main + Extra - 100 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 87,
        "releaseDate": "22 Mar 2024",
        "publisher": "Capcom",
        "countryOfOrigin": "Japan",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/cT0rIgaiPWA?si=tfimK2SeKbYeEtaN",
        "about": "Dragon's Dogma 2 expands on the original's unique pawn system and combat with a vast open world, improved AI companions, and PS5-exclusive graphical enhancements.",
        "image": "https://a.media-amazon.com/images/I/81aI1M6LnVL._SX522_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms but has PS5 enhancements."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, faster loading, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large, seamless open world."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, but you can share and use other players' pawns online."
            }
        ],
        "similarProducts": [
            {
                "id": "22",
                "name": "Elden Ring: Nightreign (PS5 Edition)",
                "price": 5999,
                "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEEVefOyBsbOw-uGGOXKYBV0DqgiHBncxo3OXNHIfZBkOrXFsGkBoc4uOQWUzDtxGTnwCA1NbJlu8N8RKgGeeiqQmE6bbqyMqK4QxIEUkZ6n771DXThK90Pw"
            },
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            },
            {
                "id": "9",
                "name": "Hogwarts Legacy (PS5 Edition)",
                "price": 4799,
                "image": "https://a.media-amazon.com/images/I/81etAae966L._SX679_.jpg"
            },
            {
                "id": "20",
                "name": "Oblivion Remastered (PS5 Edition)",
                "price": 4499,
                "image": "https://generations.com.pk/wp-content/uploads/2025/04/ps5-4.png"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            }
        ]
    },
    {
        "id": "15",
        "title": "Demon's Souls (PS5 Edition)",
        "developer": "Bluepoint Games",
        "price": 4999,
        "description": "Experience the brutal and beautiful remake of the Souls classic, rebuilt from the ground up for PS5 with stunning visuals, 3D Audio, and DualSense haptics.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 30 hours, Main + Extra - 60 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online features",
        "metacriticScore": 92,
        "releaseDate": "12 Nov 2020",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/2TMs2E6cms4?si=HNktmYC1_6dy9AmG",
        "about": "Demon's Souls is a faithful yet enhanced remake of the 2009 classic, featuring completely rebuilt visuals, performance modes, and immersive PS5 features.",
        "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "Yes, this remake is exclusive to PS5."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online multiplayer and messages; single-player is available offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, 60 FPS, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it harder than Dark Souls?",
                "answer": "It's considered challenging but has different mechanics than later Souls games."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Yes, including cooperative and competitive online play."
            }
        ],
        "similarProducts": [
            {
                "id": "22",
                "name": "Elden Ring: Nightreign (PS5 Edition)",
                "price": 5999,
                "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEEVefOyBsbOw-uGGOXKYBV0DqgiHBncxo3OXNHIfZBkOrXFsGkBoc4uOQWUzDtxGTnwCA1NbJlu8N8RKgGeeiqQmE6bbqyMqK4QxIEUkZ6n771DXThK90Pw"
            },
            {
                "id": "14",
                "name": "Dragon's Dogma 2 (PS5 Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81aI1M6LnVL._SX522_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "16",
        "title": "Ghost of Yōtei (PS5 Edition)",
        "developer": "Sucker Punch Productions",
        "price": 5999,
        "description": "Journey to 13th century Mongolia in this sequel to Ghost of Tsushima, featuring enhanced combat, a vast open world, and stunning PS5-exclusive visuals.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 35 hours, Main + Extra - 80 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 91,
        "releaseDate": "17 May 2025",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/PVBLJYjSAhg?si=XJpIpSg4CRKuXJXA",
        "about": "Ghost of Yōtei expands on its predecessor's samurai combat with new Mongolian-inspired settings, improved stealth mechanics, and breathtaking PS5-exclusive visuals.",
        "image": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "Yes, Ghost of Yōtei is exclusive to PS5."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online multiplayer; single-player is available offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, Ray Tracing, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open world with dynamic weather and seasons."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Yes, including cooperative and competitive online modes."
            }
        ],
        "similarProducts": [
            {
                "id": "10",
                "name": "Assassin's Creed Shadows (PS5 Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "17",
        "title": "Red Dead Redemption 2 (PS5 Edition)",
        "developer": "Rockstar Games",
        "price": 4999,
        "description": "Experience Arthur Morgan's epic Wild West tale with enhanced PS5 visuals, 3D Audio, and DualSense support in this definitive version of Rockstar's masterpiece.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 60 hours, Main + Extra - 150 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 97,
        "releaseDate": "26 Oct 2024",
        "publisher": "Rockstar Games",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/eaW0tYpxyp0?si=Jxp47LCRnxTDoWTg",
        "about": "Red Dead Redemption 2 for PS5 enhances the original with 4K resolution, improved frame rates, faster loading, and DualSense integration for a more immersive Wild West experience.",
        "image": "https://acdn-us.mitiendanube.com/stores/004/093/683/products/red-dead-ps5-2fbdc6998cc7f6f6c917145402060936-1024-1024.webp",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's an enhanced version of the multi-platform game."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for Red Dead Online; single-player is available offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, 60 FPS, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features one of the most detailed open worlds ever created."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Yes, through Red Dead Online."
            }
        ],
        "similarProducts": [
            {
                "id": "16",
                "name": "Ghost of Yōtei (PS5 Edition)",
                "price": 5999,
                "image": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "18",
        "title": "Clair Obscur: Expedition 33 (PS5 Edition)",
        "developer": "Sandfall Interactive",
        "price": 3999,
        "description": "Embark on a turn-based RPG adventure with real-time elements in this stylish PS5-exclusive, featuring unique combat mechanics and a hauntingly beautiful world.",
        "gameType": "Campaign",
        "genre": "Turn-based RPG",
        "gameplayHours": "Main Story - 30 hours, Main + Extra - 50 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 85,
        "releaseDate": "21 Nov 2024",
        "publisher": "Kepler Interactive",
        "countryOfOrigin": "France",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/2VaLOc1FpSo?si=3FJp2RGNmOw25FXV",
        "about": "Clair Obscur: Expedition 33 blends turn-based combat with real-time elements in a visually stunning world, designed specifically to showcase PS5's capabilities.",
        "image": "https://www.tradergames.fr/612252-large_default/clair-obscur-expedition-33-ps5-euro-preorder.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "Yes, it's a PS5-exclusive RPG."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, fast loading, and DualSense haptics."
            },
            {
                "question": "Is it turn-based?",
                "answer": "Yes, but with real-time elements in combat."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "22",
                "name": "Elden Ring: Nightreign (PS5 Edition)",
                "price": 5999,
                "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEEVefOyBsbOw-uGGOXKYBV0DqgiHBncxo3OXNHIfZBkOrXFsGkBoc4uOQWUzDtxGTnwCA1NbJlu8N8RKgGeeiqQmE6bbqyMqK4QxIEUkZ6n771DXThK90Pw"
            },
            {
                "id": "14",
                "name": "Dragon's Dogma 2 (PS5 Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81aI1M6LnVL._SX522_.jpg"
            },
            {
                "id": "9",
                "name": "Hogwarts Legacy (PS5 Edition)",
                "price": 4799,
                "image": "https://a.media-amazon.com/images/I/81etAae966L._SX679_.jpg"
            },
            {
                "id": "20",
                "name": "Oblivion Remastered (PS5 Edition)",
                "price": 4499,
                "image": "https://generations.com.pk/wp-content/uploads/2025/04/ps5-4.png"
            },
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "19",
        "title": "Fatal Fury: City of the Wolves (PS5 Edition)",
        "developer": "SNK",
        "price": 3499,
        "description": "Revitalize the classic fighting franchise with modern mechanics and stunning visuals in this PS5-exclusive fighter, featuring DualSense-enhanced combat.",
        "gameType": "Multiplayer",
        "genre": "Fighting",
        "gameplayHours": "Main Story - 5 hours, Main + Extra - 20 hours",
        "internetRequired": "Yes for online multiplayer",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 83,
        "releaseDate": "14 Feb 2025",
        "publisher": "SNK",
        "countryOfOrigin": "Japan",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/lHjjlpCoBOQ?si=MsnQJP4LMNN-D2QT",
        "about": "Fatal Fury: City of the Wolves brings back Terry Bogard and the gang with new mechanics, stunning visuals, and PS5-exclusive features for the ultimate fighting game experience.",
        "image": "https://m.media-amazon.com/images/I/91BzCahTg-L._AC_SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, but the PS5 version has exclusive features."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online multiplayer; local versus doesn't require PS Plus."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports DualSense haptics for combat feedback and 3D Audio."
            },
            {
                "question": "Is it a sequel to Garou?",
                "answer": "Yes, it continues the story from Garou: Mark of the Wolves."
            },
            {
                "question": "Does it have single-player content?",
                "answer": "Yes, including a story mode and arcade mode."
            }
        ],
        "similarProducts": [
            {
                "id": "11",
                "name": "Double Dragon Revive (PS5 Edition)",
                "price": 2249,
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lnVZpxo1JPcNJrGoRl7_URdi6qCY--NbyA&s"
            },
            {
                "id": "12",
                "name": "Sonic X Shadow Generations (PS5 Edition)",
                "price": 3499,
                "image": "https://a.media-amazon.com/images/I/81iEU3zUKcL._SX679_.jpg"
            },
            {
                "id": "3",
                "name": "Astro Bot (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81+2xsG+w-L._SY679_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            }
        ]
    },
    {
        "id": "20",
        "title": "Oblivion Remastered (PS5 Edition)",
        "developer": "Bethesda Game Studios",
        "price": 4499,
        "description": "Revisit Cyrodiil in this complete remaster of the classic RPG, featuring enhanced visuals, improved gameplay, and all DLC for PS5 with DualSense support.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 40 hours, Main + Extra - 200 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 89,
        "releaseDate": "15 Mar 2025",
        "publisher": "Bethesda Softworks",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/wFJ3PZuAjK4?si=LGvSr4LWikSuhkTC",
        "about": "Oblivion Remastered brings Bethesda's classic RPG to PS5 with completely rebuilt visuals, modernized gameplay, and all DLC included for the definitive experience.",
        "image": "https://generations.com.pk/wp-content/uploads/2025/04/ps5-4.png",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, but the PS5 version has exclusive enhancements."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, faster loading, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features one of gaming's most beloved open worlds."
            },
            {
                "question": "Does it include all DLC?",
                "answer": "Yes, all expansion content is included."
            }
        ],
        "similarProducts": [
            {
                "id": "22",
                "name": "Elden Ring: Nightreign (PS5 Edition)",
                "price": 5999,
                "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEEVefOyBsbOw-uGGOXKYBV0DqgiHBncxo3OXNHIfZBkOrXFsGkBoc4uOQWUzDtxGTnwCA1NbJlu8N8RKgGeeiqQmE6bbqyMqK4QxIEUkZ6n771DXThK90Pw"
            },
            {
                "id": "14",
                "name": "Dragon's Dogma 2 (PS5 Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81aI1M6LnVL._SX522_.jpg"
            },
            {
                "id": "9",
                "name": "Hogwarts Legacy (PS5 Edition)",
                "price": 4799,
                "image": "https://a.media-amazon.com/images/I/81etAae966L._SX679_.jpg"
            },
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            }
        ]
    },
    {
        "id": "21",
        "title": "Doom: The Dark Ages (PS5 Edition)",
        "developer": "id Software",
        "price": 4999,
        "description": "Rip and tear through medieval hellscapes in this brutal prequel to Doom (2016), featuring enhanced PS5 visuals, 3D Audio, and DualSense-enhanced combat.",
        "gameType": "Campaign",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 15 hours, Main + Extra - 30 hours",
        "internetRequired": "Yes for multiplayer",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 88,
        "releaseDate": "23 May 2025",
        "publisher": "Bethesda Softworks",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/jGVt6zaTXAw?si=u-Vn067XIK8W7YWx",
        "about": "Doom: The Dark Ages takes the Slayer back to medieval times with brutal melee combat, classic shooting, and PS5-exclusive enhancements for maximum carnage.",
        "image": "https://a.media-amazon.com/images/I/81iK5ajGufL._SY879_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, but the PS5 version has exclusive features."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online multiplayer; campaign is playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, 120 FPS, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it a prequel?",
                "answer": "Yes, it's set before the events of Doom (2016)."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Yes, including competitive and cooperative modes."
            }
        ],
        "similarProducts": [
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (PS5 Edition)",
                "price": 5299,
                "image": "https://a.media-amazon.com/images/I/81ler-4aUFL._SX569_.jpg"
            },
            {
                "id": "2",
                "name": "Far Cry 6 (PS5 Edition)",
                "price": 1819,
                "image": "https://a.media-amazon.com/images/I/81ptKW1gJBL._SX522_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            }
        ]
    },
    {
        "id": "22",
        "title": "Elden Ring: Nightreign (PS5 Edition)",
        "developer": "FromSoftware",
        "price": 5999,
        "description": "Journey through a dark fantasy world in this open-world RPG sequel, enhanced for PS5 with Ray Tracing, 4K visuals, and DualSense haptics for a punishing yet breathtaking adventure.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 40 hours, Main + Extra - 100 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online co-op",
        "metacriticScore": 95,
        "releaseDate": "21 Feb 2025",
        "publisher": "Bandai Namco Entertainment",
        "countryOfOrigin": "Japan",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/ZotjeX4QjYQ?si=bCERs4mB2HRdUS8G",
        "about": "Elden Ring: Nightreign is a PS5 sequel to the critically acclaimed Elden Ring, offering a vast open-world, challenging combat, and PS5 features like Ray Tracing and 3D Audio.",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEEVefOyBsbOw-uGGOXKYBV0DqgiHBncxo3OXNHIfZBkOrXFsGkBoc4uOQWUzDtxGTnwCA1NbJlu8N8RKgGeeiqQmE6bbqyMqK4QxIEUkZ6n771DXThK90Pw",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms, but PS5 offers enhanced visuals."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online co-op and multiplayer; single-player is offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports Ray Tracing, 4K visuals, and DualSense haptics."
            },
            {
                "question": "Is it a sequel to Elden Ring?",
                "answer": "Yes, it's a direct sequel with new regions and stories."
            },
            {
                "question": "Is it beginner-friendly?",
                "answer": "No, it's designed for players familiar with FromSoftware's challenging games."
            }
        ],
        "similarProducts": [
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            },
            {
                "id": "14",
                "name": "Dragon's Dogma 2 (PS5 Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81aI1M6LnVL._SX522_.jpg"
            },
            {
                "id": "20",
                "name": "Oblivion Remastered (PS5 Edition)",
                "price": 4499,
                "image": "https://generations.com.pk/wp-content/uploads/2025/04/ps5-4.png"
            },
            {
                "id": "18",
                "name": "Clair Obscur: Expedition 33 (PS5 Edition)",
                "price": 3999,
                "image": "https://www.tradergames.fr/612252-large_default/clair-obscur-expedition-33-ps5-euro-preorder.jpg"
            },
            {
                "id": "9",
                "name": "Hogwarts Legacy (PS5 Edition)",
                "price": 4799,
                "image": "https://a.media-amazon.com/images/I/81etAae966L._SX679_.jpg"
            }
        ]
    },
    {
        "id": "23",
        "title": "Death Stranding 2: On the Beach (PS5 Edition)",
        "developer": "Kojima Productions",
        "price": 5999,
        "description": "Embark on a surreal journey to reconnect a fractured world, optimized for PS5 with 4K visuals, Ray Tracing, and DualSense haptics for an immersive narrative experience.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 35 hours, Main + Extra - 80 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online features",
        "metacriticScore": 90,
        "releaseDate": "28 Feb 2025",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "Japan",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/di51fb3ATng?si=oABRUeXCWwkoPPcr",
        "about": "Death Stranding 2: On the Beach is a PS5-exclusive sequel to Hideo Kojima's genre-defying game, featuring expansive exploration, cinematic storytelling, and PS5 features like Ray Tracing and 3D Audio.",
        "image": "https://m.media-amazon.com/images/I/81T36HWb3QL._SX522_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms, but PS5 offers enhanced visuals."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online co-op and multiplayer; single-player is available offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports Ray Tracing, 4K visuals, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large, seamless open-world environment."
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the game supports solo play, but co-op is a core feature."
            }
        ],
        "similarProducts": [
            {
                "id": "14",
                "name": "Dragon's Dogma 2 (PS5 Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81aI1M6LnVL._SX522_.jpg"
            },
            {
                "id": "22",
                "name": "Elden Ring: Nightreign (PS5 Edition)",
                "price": 5999,
                "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEEVefOyBsbOw-uGGOXKYBV0DqgiHBncxo3OXNHIfZBkOrXFsGkBoc4uOQWUzDtxGTnwCA1NbJlu8N8RKgGeeiqQmE6bbqyMqK4QxIEUkZ6n771DXThK90Pw"
            },
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            },
            {
                "id": "9",
                "name": "Hogwarts Legacy (PS5 Edition)",
                "price": 4799,
                "image": "https://a.media-amazon.com/images/I/81etAae966L._SX679_.jpg"
            },
            {
                "id": "18",
                "name": "Clair Obscur: Expedition 33 (PS5 Edition)",
                "price": 3999,
                "image": "https://www.tradergames.fr/612252-large_default/clair-obscur-expedition-33-ps5-euro-preorder.jpg"
            }
        ]
    },
    {
        "id": "24",
        "title": "Five Nights at Freddy's: Secret of the Mimic (PS5 Edition)",
        "developer": "Steel Wool Studios",
        "price": 2999,
        "description": "Survive terrifying nights in a new Freddy Fazbear location, enhanced for PS5 with 4K visuals, 3D Audio, and DualSense haptics for a chilling horror experience.",
        "gameType": "Campaign",
        "genre": "Horror",
        "gameplayHours": "Main Story - 6 hours, Main + Extra - 10 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 78,
        "releaseDate": "15 Nov 2024",
        "publisher": "ScottGames",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/mwxONlHmYNg?si=gnjGQmGvhge8kvAi",
        "about": "Five Nights at Freddy's: Secret of the Mimic is a PS5 horror game that continues the series' tense survival gameplay, with PS5 features like 3D Audio and DualSense support.",
        "image": "https://static.xtralife.com/conversions/89CR-P31X633227-fullhd_w1920_h1080_q75-fnafsecretofthemimicps5-1739404202.webp",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms, but PS5 offers enhanced visuals."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it suitable for kids?",
                "answer": "No, it has a PEGI 16 rating due to horror themes."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "6",
                "name": "Until Dawn (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/71Kv+24lUML._SX522_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "25",
        "title": "The Midnight Walk (PS5 Edition)",
        "developer": "MoonHood",
        "price": 3499,
        "description": "Explore a surreal, clay-crafted world in this narrative-driven adventure, optimized for PS5 with 4K visuals, 3D Audio, and DualSense haptics for a hauntingly immersive experience.",
        "gameType": "Campaign",
        "genre": "Adventure/Horror",
        "gameplayHours": "Main Story - 10 hours, Main + Extra - 15 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 85,
        "releaseDate": "30 Sep 2025",
        "publisher": "MoonHood",
        "countryOfOrigin": "Poland",
        "platform": ["PS5"],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/QnBE7mU6ZsI?si=Czd18iTcnU3OCRd8",
        "about": "The Midnight Walk is a PS5 narrative-driven adventure with a unique clay-crafted aesthetic, featuring atmospheric exploration and PS5 features like Ray Tracing and DualSense support.",
        "image": "https://images.pushsquare.com/536cd2c651644/midnight-walk-cover.cover_large.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms, but PS5 offers enhanced visuals."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports Ray Tracing, 4K visuals, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "No, it's a narrative-driven game with linear environments."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "6",
                "name": "Until Dawn (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/71Kv+24lUML._SX522_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            }
        ]
    },
    {
        "id": "26",
        "title": "Kingdom Come: Deliverance 2 (PS5 Edition)",
        "developer": "Warhorse Studios",
        "price": 4999,
        "description": "Live as a medieval knight in a realistic open-world RPG, enhanced for PS5 with 4K visuals, Ray Tracing, and DualSense haptics for an immersive historical adventure.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 35 hours, Main + Extra - 70 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 87,
        "releaseDate": "11 Feb 2025",
        "publisher": "Deep Silver",
        "countryOfOrigin": "Czech Republic",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/sXDoP90YkOc?si=StlwHAWjEmUrf30R",
        "about": "Kingdom Come: Deliverance II is a PS5 open-world RPG that continues the story of Henry, featuring realistic combat, expansive quests, and PS5 features like Ray Tracing and 3D Audio.",
        "image": "https://e2zstore.com/wp-content/uploads/2025/01/kcd-2-ps5.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms, but PS5 offers enhanced visuals."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports Ray Tracing, 4K visuals, and DualSense haptics."
            },
            {
                "question": "Is it a remake or remaster?",
                "answer": "It's a full remake with rebuilt visuals and gameplay."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player campaign."
            }
        ],
        "similarProducts": [
            {
                "id": "10",
                "name": "Assassin's Creed Shadows (PS5 Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
            },
            {
                "id": "16",
                "name": "Ghost of Yōtei (PS5 Edition)",
                "price": 5999,
                "image": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            }
        ]
    },
    {
        "id": "27",
        "title": "Resident Evil 3 (PS4 Edition)",
        "developer": "Capcom",
        "price": 3599,
        "description": "Survive the zombie apocalypse in Raccoon City as Jill Valentine in this intense survival horror remake, featuring enhanced PS4 visuals and gameplay.",
        "gameType": "Campaign",
        "genre": "Survival Horror",
        "gameplayHours": "Main Story - 6 hours, Main + Extra - 15 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 79,
        "releaseDate": "03 Apr 2020",
        "publisher": "Capcom",
        "countryOfOrigin": "Japan",
        "platform": ["PS4"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/BBky2uCGqtM?si=lEmMkwT2hC5Y7q7X",
        "about": "Resident Evil 3 is a remake of the 1999 classic, featuring modernized gameplay, enhanced visuals, and a reimagined Raccoon City to explore while being pursued by the relentless Nemesis.",
        "image": "https://a.media-amazon.com/images/I/81zPtVj06kL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 compatible?",
                "answer": "Yes, it's playable on PS5 via backward compatibility."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "Is it a remake?",
                "answer": "Yes, it's a complete remake of the original Resident Evil 3."
            },
            {
                "question": "Does it include multiplayer?",
                "answer": "Yes, it includes the Resident Evil Resistance multiplayer mode."
            },
            {
                "question": "Is it open-world?",
                "answer": "No, it features linear levels with some exploration."
            }
        ],
        "similarProducts": [
            {
                "id": "6",
                "name": "Until Dawn (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/71Kv+24lUML._SX522_.jpg"
            },
            {
                "id": "24",
                "name": "Five Nights at Freddy's: Secret of the Mimic (PS5 Edition)",
                "price": 2999,
                "image": "https://static.xtralife.com/conversions/89CR-P31X633227-fullhd_w1920_h1080_q75-fnafsecretofthemimicps5-1739404202.webp"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            }
        ]
    },
    {
        "id": "28",
        "title": "Call of Duty: Black Ops 6 (PS5 Edition)",
        "developer": "Treyarch",
        "price": 5299,
        "description": "Engage in high-octane FPS action with a thrilling campaign, multiplayer, and zombies mode, optimized for PS5 with 4K visuals, 3D Audio, and DualSense haptics.",
        "gameType": "Multiplayer",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 10 hours, Main + Extra - 50 hours",
        "internetRequired": "Yes for multiplayer",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 83,
        "releaseDate": "25 Oct 2024",
        "publisher": "Activision",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/12SUwGTq6Gc?si=Qp7I-dtP8z_Cniq5",
        "about": "Call of Duty: Black Ops 6 is a PS5 FPS featuring a cinematic campaign, competitive multiplayer, and zombies mode, enhanced with PS5 features like Ray Tracing and DualSense support.",
        "image": "https://a.media-amazon.com/images/I/81ler-4aUFL._SX569_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on multiple platforms, but PS5 offers enhanced visuals."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online multiplayer; campaign is playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports Ray Tracing, 4K visuals, and DualSense haptics."
            },
            {
                "question": "Does it have a single-player campaign?",
                "answer": "Yes, it includes a full campaign mode."
            },
            {
                "question": "Is zombies mode included?",
                "answer": "Yes, it features a cooperative zombies mode."
            }
        ],
        "similarProducts": [
            {
                "id": "2",
                "name": "Far Cry 6 (PS5 Edition)",
                "price": 1819,
                "image": "https://a.media-amazon.com/images/I/81ptKW1gJBL._SX522_.jpg"
            },
            {
                "id": "21",
                "name": "Doom: The Dark Ages (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81iK5ajGufL._SY879_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            }
        ]
    },
    {
        "id": "29",
        "title": "Metal Gear Solid Delta: Snake Eater (PS5 Edition)",
        "developer": "Konami",
        "price": 5999,
        "description": "Relive the classic stealth adventure as Naked Snake in this PS5 remake, featuring 4K visuals, Ray Tracing, and DualSense haptics for immersive espionage.",
        "gameType": "Campaign",
        "genre": "Stealth/Action",
        "gameplayHours": "Main Story - 16 hours, Main + Extra - 25 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 88,
        "releaseDate": "30 Sep 2025",
        "publisher": "Konami",
        "countryOfOrigin": "Japan",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/iNX8QCeymFM?si=OgU_bvyMumWQcC9m",
        "about": "Metal Gear Solid Delta: Snake Eater is a PS5 remake of the iconic stealth game, rebuilt with modern visuals, enhanced gameplay, and PS5 features like 3D Audio and DualSense support.",
        "image": "https://m.media-amazon.com/images/I/915Egnuk2uL._AC_SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, but the PS5 version has exclusive enhancements."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, Ray Tracing, and DualSense haptics."
            },
            {
                "question": "Is it a faithful remake?",
                "answer": "Yes, it maintains the original story while modernizing gameplay."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/61-yWhGaJTL._SX522_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81E5a+Vym-L._SX679_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "16",
                "name": "Ghost of Yōtei (PS5 Edition)",
                "price": 5999,
                "image": "https://s.pacn.ws/1/p/19z/827647.1.jpg?v=skci1y&width=800&crop=800,1024"
            }
        ]
    },
    {
        "id": "30",
        "title": "The Outer Worlds 2 (PS5 Edition)",
        "developer": "Obsidian Entertainment",
        "price": 4999,
        "description": "Explore a vibrant sci-fi universe in this open-world RPG sequel, featuring 4K visuals, 3D Audio, and DualSense haptics for an immersive role-playing experience.",
        "gameType": "Campaign",
        "genre": "RPG",
        "gameplayHours": "Main Story - 25 hours, Main + Extra - 50 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 87,
        "releaseDate": "08 Oct 2024",
        "publisher": "Private Division",
        "countryOfOrigin": "USA",
        "platform": ["PS5"],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/LOf2np-KBG8?si=tOvxpDCUHkz4TRsT",
        "about": "The Outer Worlds 2 is a PS5 RPG sequel that expands on its predecessor with a rich sci-fi narrative, player-driven choices, and PS5 features like Ray Tracing and DualSense support.",
        "image": "https://s.pacn.ws/1/p/1ar/the-outer-worlds-2-841711.1.jpg?v=soeulv&width=800&crop=800,1024",
        "faqs": [
            {
                "question": "Is this game PS5 exclusive?",
                "answer": "No, it's available on PC, but PS5 offers enhanced visuals."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "How does it use PS5 features?",
                "answer": "It supports 4K visuals, 3D Audio, and DualSense haptics."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features multiple open-world planets to explore."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player RPG."
            }
        ],
        "similarProducts": [
            {
                "id": "6",
                "name": "Until Dawn (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/71Kv+24lUML._SX522_.jpg"
            },
            {
                "id": "24",
                "name": "Five Nights at Freddy's: Secret of the Mimic (PS5 Edition)",
                "price": 2999,
                "image": "https://static.xtralife.com/conversions/89CR-P31X633227-fullhd_w1920_h1080_q75-fnafsecretofthemimicps5-1739404202.webp"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS5 Edition)",
                "price": 3999,
                "image": "https://a.media-amazon.com/images/I/81hEsg04h0L._SX569_.jpg"
            },
            {
                "id": "15",
                "name": "Demon's Souls (PS5 Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
            },
            {
                "id": "1",
                "name": "Spider-Man 2 (PS5 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81qBiCSoegL._SX569_.jpg"
            }
        ]
    }
]


async function insertps5Games() {
    try {
        // Clear existing data
        await Ps5.deleteMany({});
        await Ps5_Details.deleteMany({});

        // Insert new data
        const gamesResult = await Ps5.insertMany(ps5Games);
        const detailsResult = await Ps5_Details.insertMany(Ps5Details);
        
        console.log(`Inserted ${gamesResult.length} PS5 games`);
        console.log(`Inserted ${detailsResult.length} PS5 game details`);
    } catch (err) {
        console.error("Error inserting PS5 games:", err);
        throw err;
    }
}

async function main() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI environment variable is not defined");
        }

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");

        await insertps5Games();
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

main();