
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables FIRST
dotenv.config({ path: '../.env' }); // Adjust path if needed
import Ps4 from "../models/ps4/ps4.model.js"
import Ps4_Details from "../models/ps4/ps4_details.model.js";


const ps4Game = [
    {
        "Type": "PS4",
        "game_id": 1,
        "game_name": "Spider-Man 2 (PS4 Edition)",
        "price_inr": 3699,
        "image_link": "https://a.media-amazon.com/images/I/71rInOWdBAL._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 2,
        "game_name": "Far Cry 6 (PS4 Edition)",
        "price_inr": 1499,
        "image_link": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjfJ78V_mAH94FoNVMQ7Uee2QdkAjHH8sf_3xLA9hLSRwyjftyk_UJiJqDF7Fm7khJGdY9g_2PWADCNtOC1USgVrpzU5wV1riM7YijH8yJz1SX2yfCivhB"
    },
    {
        "Type": "PS4",
        "game_id": 3,
        "game_name": "Astro Bot (PS4 Edition)",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/716b4iZK6TL._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 4,
        "game_name": "Days Gone Remastered (PS4 Edition)",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/91JAyQ8RLCL._SX522_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 5,
        "game_name": "Horizon Zero Dawn Remastered (PS4 Edition)",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/819-3Ev22jL._SX522_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 6,
        "game_name": "Until Dawn (PS4 Edition)",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/81c7WFBfNyL._SX522_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 7,
        "game_name": "Marvel’s Spider-Man: Miles Morales (PS4 Edition)",
        "price_inr": 3399,
        "image_link": "https://a.media-amazon.com/images/I/811umGHYORL._SX569_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 8,
        "game_name": "God of War: Ragnarok (PS4 Edition)",
        "price_inr": 4299,
        "image_link": "https://a.media-amazon.com/images/I/81LtrvOKYbL._SY879_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 9,
        "game_name": "Hogwarts Legacy (PS4 Edition)",
        "price_inr": 4199,
        "image_link": "https://a.media-amazon.com/images/I/81z6AqCm5nL._SX522_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 10,
        "game_name": "Assassin's Creed Shadows (PS4 Edition)",
        "price_inr": 5299,
        "image_link": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 11,
        "game_name": "Double Dragon Revive (PS4 Edition)",
        "price_inr": 1999,
        "image_link": "https://s.pacn.ws/1/p/198/double-dragon-revive-814271.11.jpg?v=sgiek6&width=800&crop=1280,1563"
    },
    {
        "Type": "PS4",
        "game_id": 12,
        "game_name": "Sonic X Shadow Generations (PS4 Edition)",
        "price_inr": 2999,
        "image_link": "https://dmdworld.store/wp-content/uploads/2024/11/ps4-sonic-shadow.png"
    },
    {
        "Type": "PS4",
        "game_id": 13,
        "game_name": "The Last of Us Part II Remastered (PS4 Edition)",
        "price_inr": 3599,
        "image_link": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 14,
        "game_name": "Dragon's Dogma 2 (PS4 Edition)",
        "price_inr": 5499,
        "image_link": "https://a.media-amazon.com/images/I/81kbquO0o-L._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 15,
        "game_name": "Bloodborne - Game of the Year (PS4 Edition)",
        "price_inr": 4499,
        "image_link": "https://a.media-amazon.com/images/I/710ZADg0wbL._SY879_.jpg"
    },
    {
        "game_id": 16,
        "game_name": "Ghost of Yōtei (PS4 Edition)",
        "price_inr": 5499,
        "image_link": "https://a.media-amazon.com/images/I/61vCrYISMOL._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 17,
        "game_name": "Red Dead Redemption 2 (PS4 Edition)",
        "price_inr": 4599,
        "image_link": "https://rukminim2.flixcart.com/image/832/832/xif0q/physical-game/z/u/4/-original-imahfdkhykyv9eje.jpeg?q=70&crop=false"
    },
    {
        "Type": "PS4",
        "game_id": 18,
        "game_name": "Mafia 3 (PS4 Edition)",
        "price_inr": 3499,
        "image_link": "https://a.media-amazon.com/images/I/81rvq5IfZiL._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 19,
        "game_name": "Fatal Fury: City of the Wolves (PS4 Edition)",
        "price_inr": 2999,
        "image_link": "https://m.media-amazon.com/images/I/9131l3+42kL._AC_SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 20,
        "game_name": "GTA 5 (PS4 Edition)",
        "price_inr": 3999,
        "image_link": "https://m.media-amazon.com/images/I/81htlTqEckL._SX522_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 21,
        "game_name": "Doom: The Dark Ages (PS4 Edition)",
        "price_inr": 4599,
        "image_link": "https://a.media-amazon.com/images/I/91IoZT4nczL._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 22,
        "game_name": "Elden Ring: Nightreign (PS4 Edition)",
        "price_inr": 5599,
        "image_link": "https://cdn.hmv.com/r/w-1280/p-webp/hmv/files/b5/b5be37d0-a98c-48ae-aa0e-1cb8d6cef628.png"
    },
    {
        "Type": "PS4",
        "game_id": 23,
        "game_name": "FIFA 23 (PS4 Edition)",
        "price_inr": 5599,
        "image_link": "https://a.media-amazon.com/images/I/71RmYwT5JOL._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 24,
        "game_name": "Five Nights at Freddy's: Secret of the Mimic (PS4 Edition)",
        "price_inr": 2699,
        "image_link": "https://i.imgur.com/R91gtRg.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 25,
        "game_name": "Hitman 3 (PS4 Edition)",
        "price_inr": 3099,
        "image_link": "https://a.media-amazon.com/images/I/61ppuR4BooL._SX522_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 26,
        "game_name": "Kingdom Come: Deliverance  (PS4 Edition)",
        "price_inr": 4599,
        "image_link": "https://a.media-amazon.com/images/I/91j1wKFr+bL._SX522_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 27,
        "game_name": "Resident Evil 3 (PS4 Edition)",
        "price_inr": 3599,
        "image_link": "https://a.media-amazon.com/images/I/81zPtVj06kL._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 28,
        "game_name": "Call of Duty: Black Ops 6 (PS4 Edition)",
        "price_inr": 4899,
        "image_link": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6GCYz53QwiDoEUlj2MocvsK-RdvzlMGno-7E8DElsG9pjQt-LeDUZ5pL4m8JaH-PxQ_G76gR15VDbbK01t1u5hOKNKymq17qazRlJkFboYHEAh9zK-gBHQw"
    },
    {
        "Type": "PS4",
        "game_id": 29,
        "game_name": "Ghost Recon Wildlands (PS4 Edition)",
        "price_inr": 5599,
        "image_link": "https://a.media-amazon.com/images/I/91FhqicEyLL._SX679_.jpg"
    },
    {
        "Type": "PS4",
        "game_id": 30,
        "game_name": "Watch Dogs Legion (PS4 Edition)",
        "price_inr": 4599,
        "image_link": "https://a.media-amazon.com/images/I/81HsglxgCQL._SX679_.jpg"
    }
]

const ps4GameDetails = [
    {
        "id": "1",
        "title": "Spider-Man 2 (PS4 Edition)",
        "developer": "Insomniac Games",
        "price": 3699,
        "description": "Swing through an expanded New York City as Peter Parker and Miles Morales, battling Venom and other threats in this PS4-exclusive sequel.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 17 hours, Main + Extra - 25 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 90,
        "releaseDate": "20 Oct 2023",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/nq1M_Wc4FIc?si=1TvQ00_lZBUeZmmE",
        "about": "Spider-Man 2 is a PS4 sequel that expands on its predecessors with a larger open-world and new abilities.",
        "image": "https://a.media-amazon.com/images/I/71rInOWdBAL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS4 exclusive?",
                "answer": "Yes, Spider-Man 2 is exclusive to PS4."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
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
                "name": "Marvel's Spider-Man: Miles Morales (PS4 Edition)",
                "price": 3399,
                "image": "https://a.media-amazon.com/images/I/811umGHYORL._SX569_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS4 Edition)",
                "price": 3599,
                "image": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS4 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81LtrvOKYbL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "2",
        "title": "Far Cry 6 (PS4 Edition)",
        "developer": "Ubisoft Toronto",
        "price": 1499,
        "description": "Fight against a ruthless dictator in the fictional island of Yara in this open-world FPS.",
        "gameType": "Campaign",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 23 hours, Main + Extra - 40 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for multiplayer",
        "metacriticScore": 73,
        "releaseDate": "07 Oct 2021",
        "publisher": "Ubisoft",
        "countryOfOrigin": "Canada",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/-IJuKT1mHO8?si=0iF3RGrJ5D5deRdc",
        "about": "Far Cry 6 is an action-packed FPS set in a vibrant open-world.",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjfJ78V_mAH94FoNVMQ7Uee2QdkAjHH8sf_3xLA9hLSRwyjftyk_UJiJqDF7Fm7khJGdY9g_2PWADCNtOC1USgVrpzU5wV1riM7YijH8yJz1SX2yfCivhB",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online co-op multiplayer; single-player is offline."
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
                "name": "Assassin's Creed Shadows (PS4 Edition)",
                "price": 5299,
                "image": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
            },
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (PS4 Edition)",
                "price": 4899,
                "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6GCYz53QwiDoEUlj2MocvsK-RdvzlMGno-7E8DElsG9pjQt-LeDUZ5pL4m8JaH-PxQ_G76gR15VDbbK01t1u5hOKNKymq17qazRlJkFboYHEAh9zK-gBHQw"
            },
            {
                "id": "21",
                "name": "Doom: The Dark Ages (PS4 Edition)",
                "price": 4599,
                "image": "https://a.media-amazon.com/images/I/91IoZT4nczL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "3",
        "title": "Astro Bot (PS4 Edition)",
        "developer": "Team Asobi",
        "price": 3399,
        "description": "Join Astro on a vibrant platforming adventure across galaxies.",
        "gameType": "Campaign",
        "genre": "Platformer",
        "gameplayHours": "Main Story - 12 hours, Main + Extra - 18 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 94,
        "releaseDate": "06 Sep 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "Japan",
        "platform": [
            "PS4"
        ],
        "pegiRating": "7+",
        "trailerVideo": "https://youtu.be/unYFdcEjV9k?si=Kp3hVVJDcSuj1e3I",
        "about": "Astro Bot is a critically acclaimed PS4-exclusive platformer.",
        "image": "https://a.media-amazon.com/images/I/716b4iZK6TL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS4 exclusive?",
                "answer": "Yes, Astro Bot is designed exclusively for PS4."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's a single-player game playable offline."
            },
            {
                "question": "Is it suitable for kids?",
                "answer": "Yes, with a PEGI 7 rating, it's family-friendly."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Spider-Man 2 (PS4 Edition)",
                "price": 3699,
                "image": "https://a.media-amazon.com/images/I/71rInOWdBAL._SX679_.jpg"
            },
            {
                "id": "7",
                "name": "Marvel's Spider-Man: Miles Morales (PS4 Edition)",
                "price": 3399,
                "image": "https://a.media-amazon.com/images/I/811umGHYORL._SX569_.jpg"
            }
        ]
    },
    {
        "id": "4",
        "title": "Days Gone Remastered (PS4 Edition)",
        "developer": "Bend Studio",
        "price": 3399,
        "description": "Ride through a post-apocalyptic Pacific Northwest as Deacon St. John, battling Freaker hordes in this open-world adventure.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 36 hours, Main + Extra - 50 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 71,
        "releaseDate": "25 Oct 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/RjRLSZalxgs?si=UOeCNuuQNG61vEme",
        "about": "Days Gone Remastered brings the open-world zombie survival game to PS4 with upgraded visuals.",
        "image": "https://a.media-amazon.com/images/I/91JAyQ8RLCL._SX522_.jpg",
        "faqs": [
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
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
                "name": "The Last of Us Part II Remastered (PS4 Edition)",
                "price": 3599,
                "image": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg"
            },
            {
                "id": "5",
                "name": "Horizon Zero Dawn Remastered (PS4 Edition)",
                "price": 3399,
                "image": "https://a.media-amazon.com/images/I/819-3Ev22jL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "5",
        "title": "Horizon Zero Dawn Remastered (PS4 Edition)",
        "developer": "Guerrilla Games",
        "price": 3399,
        "description": "Explore a lush, post-apocalyptic world as Aloy, battling robotic creatures in this PS4 remaster.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 30 hours, Main + Extra - 45 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 89,
        "releaseDate": "31 Oct 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "Netherlands",
        "platform": [
            "PS4"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/kMN-x9goE7M?si=0Eo5cJE4miZAk4vv",
        "about": "Horizon Zero Dawn Remastered enhances the award-winning action RPG for PS4.",
        "image": "https://a.media-amazon.com/images/I/819-3Ev22jL._SX522_.jpg",
        "faqs": [
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
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
                "name": "Days Gone Remastered (PS4 Edition)",
                "price": 3399,
                "image": "https://a.media-amazon.com/images/I/91JAyQ8RLCL._SX522_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS4 Edition)",
                "price": 3599,
                "image": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "6",
        "title": "Until Dawn (PS4 Edition)",
        "developer": "Supermassive Games",
        "price": 3399,
        "description": "Make life-or-death choices in this cinematic horror adventure.",
        "gameType": "Campaign",
        "genre": "Interactive Drama/Horror",
        "gameplayHours": "Main Story - 8 hours, Main + Extra - 12 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 79,
        "releaseDate": "04 Oct 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "UK",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/8nApBGPy0ao?si=iFLa7JZQgemXGHy2",
        "about": "Until Dawn is a horror game where player choices shape the survival of eight friends in a chilling narrative.",
        "image": "https://a.media-amazon.com/images/I/81c7WFBfNyL._SX522_.jpg",
        "faqs": [
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "Can choices change the story?",
                "answer": "Yes, player choices significantly impact the narrative and endings."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player narrative experience."
            }
        ],
        "similarProducts": [
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS4 Edition)",
                "price": 3599,
                "image": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg"
            },
            {
                "id": "24",
                "name": "Five Nights at Freddy's: Secret of the Mimic (PS4 Edition)",
                "price": 2699,
                "image": "https://i.imgur.com/R91gtRg.jpg"
            }
        ]
    },
    {
        "id": "7",
        "title": "Marvel's Spider-Man: Miles Morales (PS4 Edition)",
        "developer": "Insomniac Games",
        "price": 3399,
        "description": "Swing through a snowy New York City as Miles Morales, mastering new powers in this superhero adventure.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 8 hours, Main + Extra - 13 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 85,
        "releaseDate": "12 Nov 2020",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/RHQe-UsmC_0?si=dYmA9JfHeK6MtrfU",
        "about": "Spider-Man: Miles Morales showcases Miles Morales as he balances superhero duties with personal life.",
        "image": "https://a.media-amazon.com/images/I/811umGHYORL._SX569_.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "No, the campaign is fully playable offline."
            },
            {
                "question": "Is multiplayer included?",
                "answer": "No, this is a single-player campaign."
            },
            {
                "question": "How does it compare to Spider-Man (2018)?",
                "answer": "It's a shorter, standalone story focusing on Miles Morales."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Spider-Man 2 (PS4 Edition)",
                "price": 3699,
                "image": "https://a.media-amazon.com/images/I/71rInOWdBAL._SX679_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS4 Edition)",
                "price": 3599,
                "image": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "8",
        "title": "God of War: Ragnarok (PS4 Edition)",
        "developer": "Santa Monica Studio",
        "price": 4299,
        "description": "Embark on an epic Norse mythology adventure as Kratos and Atreus in this critically acclaimed sequel.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 25 hours, Main + Extra - 50 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 94,
        "releaseDate": "09 Nov 2022",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/g1wr0DfV73E?si=IPgm3bOW9LSFaAgp",
        "about": "God of War: Ragnarok concludes the Norse saga with improved combat and exploration.",
        "image": "https://a.media-amazon.com/images/I/81LtrvOKYbL._SY879_.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
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
                "name": "Spider-Man 2 (PS4 Edition)",
                "price": 3699,
                "image": "https://a.media-amazon.com/images/I/71rInOWdBAL._SX679_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS4 Edition)",
                "price": 3599,
                "image": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "9",
        "title": "Hogwarts Legacy (PS4 Edition)",
        "developer": "Avalanche Software",
        "price": 4199,
        "description": "Attend Hogwarts School of Witchcraft and Wizardry in this open-world RPG set in the 1800s.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 35 hours, Main + Extra - 70 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 84,
        "releaseDate": "10 Feb 2023",
        "publisher": "Warner Bros. Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/h01wiXjP3CE?si=D3XDgjInLP6_Bi6z",
        "about": "Hogwarts Legacy lets players experience life as a Hogwarts student with an original story and magical abilities to master.",
        "image": "https://a.media-amazon.com/images/I/81z6AqCm5nL._SX522_.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
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
                "name": "Dragon's Dogma 2 (PS4 Edition)",
                "price": 5499,
                "image": "https://a.media-amazon.com/images/I/81kbquO0o-L._SX679_.jpg"
            },
            {
                "id": "22",
                "name": "Elden Ring: Nightreign (PS4 Edition)",
                "price": 5599,
                "image": "https://cdn.hmv.com/r/w-1280/p-webp/hmv/files/b5/b5be37d0-a98c-48ae-aa0e-1cb8d6cef628.png"
            }
        ]
    },
    {
        "id": "10",
        "title": "Assassin's Creed Shadows (PS4 Edition)",
        "developer": "Ubisoft Quebec",
        "price": 5299,
        "description": "Experience feudal Japan through dual protagonists in this open-world action RPG.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 30 hours, Main + Extra - 100 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 86,
        "releaseDate": "15 Nov 2024",
        "publisher": "Ubisoft",
        "countryOfOrigin": "Canada",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/vovkzbtYBC8?si=Y4IAyoGLmwkDYNmw",
        "about": "Assassin's Creed Shadows takes players to feudal Japan with two playable characters - a shinobi and a samurai.",
        "image": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "No, the campaign is fully playable offline."
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
                "name": "Ghost of Yōtei (PS4 Edition)",
                "price": 5499,
                "image": "https://a.media-amazon.com/images/I/61vCrYISMOL._SX679_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS4 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81LtrvOKYbL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "11",
        "title": "Double Dragon Revive (PS4 Edition)",
        "developer": "Arc System Works",
        "price": 1999,
        "description": "Revitalize the classic beat 'em up franchise with modern visuals and gameplay.",
        "gameType": "Campaign",
        "genre": "Beat 'em up",
        "gameplayHours": "Main Story - 6 hours, Main + Extra - 12 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online co-op",
        "metacriticScore": 78,
        "releaseDate": "28 Nov 2024",
        "publisher": "Modus Games",
        "countryOfOrigin": "Japan",
        "platform": [
            "PS4"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/CzvvUPRkLSc?si=RuXl1792KOz-hMfX",
        "about": "Double Dragon Revive brings the classic arcade beat 'em up to PS4 with modern graphics and new mechanics.",
        "image": "https://s.pacn.ws/1/p/198/double-dragon-revive-814271.11.jpg?v=sgiek6&width=800&crop=1280,1563",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online co-op; local co-op doesn't require PS Plus."
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
                "name": "Fatal Fury: City of the Wolves (PS4 Edition)",
                "price": 2999,
                "image": "https://m.media-amazon.com/images/I/9131l3+42kL._AC_SX679_.jpg"
            },
            {
                "id": "12",
                "name": "Sonic X Shadow Generations (PS4 Edition)",
                "price": 2999,
                "image": "https://dmdworld.store/wp-content/uploads/2024/11/ps4-sonic-shadow.png"
            }
        ]
    },
    {
        "id": "12",
        "title": "Sonic X Shadow Generations (PS4 Edition)",
        "developer": "Sonic Team",
        "price": 2999,
        "description": "Race through remastered classic levels and new Shadow campaigns in this definitive Sonic collection.",
        "gameType": "Campaign",
        "genre": "Platformer",
        "gameplayHours": "Main Story - 10 hours, Main + Extra - 20 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 82,
        "releaseDate": "25 Oct 2024",
        "publisher": "SEGA",
        "countryOfOrigin": "Japan",
        "platform": [
            "PS4"
        ],
        "pegiRating": "7+",
        "trailerVideo": "https://youtu.be/yVyt0LAxU0w?si=RnEQfao1g87Qplrg",
        "about": "Sonic X Shadow Generations combines remastered classic Sonic levels with new Shadow-focused content.",
        "image": "https://dmdworld.store/wp-content/uploads/2024/11/ps4-sonic-shadow.png",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
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
                "name": "Astro Bot (PS4 Edition)",
                "price": 3399,
                "image": "https://a.media-amazon.com/images/I/716b4iZK6TL._SX679_.jpg"
            },
            {
                "id": "11",
                "name": "Double Dragon Revive (PS4 Edition)",
                "price": 1999,
                "image": "https://s.pacn.ws/1/p/198/double-dragon-revive-814271.11.jpg?v=sgiek6&width=800&crop=1280,1563"
            }
        ]
    },
    {
        "id": "13",
        "title": "The Last of Us Part II Remastered (PS4 Edition)",
        "developer": "Naughty Dog",
        "price": 3599,
        "description": "Experience Ellie's emotional journey in this definitive PS4 version, including new content and gameplay modes.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 25 hours, Main + Extra - 40 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 93,
        "releaseDate": "19 Jan 2024",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/-llaUBqovHw?si=OUDRagwjaulfC7qp",
        "about": "The Last of Us Part II Remastered brings Naughty Dog's acclaimed sequel to PS4 with graphical enhancements and new content.",
        "image": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS4 exclusive?",
                "answer": "Yes, the remastered version is exclusive to PS4."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "Is there new content?",
                "answer": "Yes, including new gameplay modes and developer commentary."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Spider-Man 2 (PS4 Edition)",
                "price": 3699,
                "image": "https://a.media-amazon.com/images/I/71rInOWdBAL._SX679_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS4 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81LtrvOKYbL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "14",
        "title": "Dragon's Dogma 2 (PS4 Edition)",
        "developer": "Capcom",
        "price": 5499,
        "description": "Embark on an epic fantasy adventure with improved pawn AI and combat in this highly anticipated sequel.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 40 hours, Main + Extra - 100 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 87,
        "releaseDate": "22 Mar 2024",
        "publisher": "Capcom",
        "countryOfOrigin": "Japan",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/cT0rIgaiPWA?si=tfimK2SeKbYeEtaN",
        "about": "Dragon's Dogma 2 expands on the original's unique pawn system and combat with a vast open world.",
        "image": "https://a.media-amazon.com/images/I/81kbquO0o-L._SX679_.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
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
                "name": "Elden Ring: Nightreign (PS4 Edition)",
                "price": 5599,
                "image": "https://cdn.hmv.com/r/w-1280/p-webp/hmv/files/b5/b5be37d0-a98c-48ae-aa0e-1cb8d6cef628.png"
            },
            {
                "id": "9",
                "name": "Hogwarts Legacy (PS4 Edition)",
                "price": 4199,
                "image": "https://a.media-amazon.com/images/I/81z6AqCm5nL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "15",
        "title": "Bloodborne - Game of the Year (PS4 Edition)",
        "developer": "FromSoftware",
        "price": 4499,
        "description": "Hunt your nightmares in this brutal action RPG from the creators of Dark Souls in a cursed city where monstrous secrets lurk around every corner.",
        "gameType": "Single-player + Online Multiplayer",
        "genre": "Action/RPG/Horror",
        "gameplayHours": "Main Story - 30 hours, Completionist - 70+ hours",
        "internetRequired": "No (Required for online features)",
        "psPlusRequired": "Yes for multiplayer",
        "metacriticScore": 92,
        "releaseDate": "24 Mar 2015",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "Japan",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/G203e1HhixY?si=HNktmYC1_6dy9AmG",
        "about": "Bloodborne is a critically acclaimed action RPG set in the decaying city of Yharnam, where a mysterious blood-borne disease turns its inhabitants into grotesque beasts.",
        "image": "https://a.media-amazon.com/images/I/710ZADg0wbL._SY879_.jpg",
        "faqs": [
            {
                "question": "Is Bloodborne a PS4 exclusive?",
                "answer": "Yes, it remains a PlayStation exclusive."
            },
            {
                "question": "Does it include all DLC?",
                "answer": "Yes, the Game of the Year Edition includes 'The Old Hunters' expansion."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Yes, including co-op and PvP invasions."
            }
        ],
        "similarProducts": [
            {
                "id": "22",
                "name": "Elden Ring: Nightreign (PS4 Edition)",
                "price": 5599,
                "image": "https://cdn.hmv.com/r/w-1280/p-webp/hmv/files/b5/b5be37d0-a98c-48ae-aa0e-1cb8d6cef628.png"
            },
            {
                "id": "14",
                "name": "Dragon's Dogma 2 (PS4 Edition)",
                "price": 5499,
                "image": "https://a.media-amazon.com/images/I/81kbquO0o-L._SX679_.jpg"
            }
        ]
    },
    {
        "id": "16",
        "title": "Ghost of Yōtei (PS4 Edition)",
        "developer": "Sucker Punch Productions",
        "price": 5499,
        "description": "Journey to 13th century Mongolia in this sequel to Ghost of Tsushima, featuring enhanced combat and a vast open world.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 35 hours, Main + Extra - 80 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 91,
        "releaseDate": "17 May 2025",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/PVBLJYjSAhg?si=XJpIpSg4CRKuXJXA",
        "about": "Ghost of Yōtei expands on its predecessor's samurai combat with new Mongolian-inspired settings and improved stealth mechanics.",
        "image": "https://a.media-amazon.com/images/I/61vCrYISMOL._SX679_.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online multiplayer; single-player is available offline."
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
                "name": "Assassin's Creed Shadows (PS4 Edition)",
                "price": 5299,
                "image": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
            },
            {
                "id": "8",
                "name": "God of War: Ragnarok (PS4 Edition)",
                "price": 4299,
                "image": "https://a.media-amazon.com/images/I/81LtrvOKYbL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "17",
        "title": "Red Dead Redemption 2 (PS4 Edition)",
        "developer": "Rockstar Games",
        "price": 4599,
        "description": "Experience Arthur Morgan's epic Wild West tale in this version of Rockstar's masterpiece.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 60 hours, Main + Extra - 150 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 97,
        "releaseDate": "26 Oct 2024",
        "publisher": "Rockstar Games",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/eaW0tYpxyp0?si=Jxp47LCRnxTDoWTg",
        "about": "Red Dead Redemption 2 offers an immersive Wild West experience.",
        "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/physical-game/z/u/4/-original-imahfdkhykyv9eje.jpeg?q=70&crop=false",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for Red Dead Online; single-player is available offline."
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
                "name": "Ghost of Yōtei (PS4 Edition)",
                "price": 5499,
                "image": "https://a.media-amazon.com/images/I/61vCrYISMOL._SX679_.jpg"
            },
            {
                "id": "20",
                "name": "GTA 5 (PS4 Edition)",
                "price": 3999,
                "image": "https://m.media-amazon.com/images/I/81htlTqEckL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "18",
        "title": "Mafia 3 (PS4 Edition)",
        "developer": "Hangar 13",
        "price": 3499,
        "description": "Set in 1968 New Bordeaux, a reimagined New Orleans, Mafia 3 delivers a brutal story of revenge against the Italian mob.",
        "gameType": "Single-player Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 20 hours, Completionist - 40 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 68,
        "releaseDate": "07 Oct 2016",
        "publisher": "2K Games",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/j6dgC5RMXRs?si=4X5bIGjPLlHx4Uo2",
        "about": "Mafia 3 follows Lincoln Clay, a Vietnam veteran who builds a new criminal empire to take revenge on the Italian Mafia.",
        "image": "https://a.media-amazon.com/images/I/81rvq5IfZiL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game open-world?",
                "answer": "Yes, it features a fictionalized version of 1960s New Orleans."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience only."
            },
            {
                "question": "Are there DLCs included?",
                "answer": "The standard edition includes base game only; DLCs sold separately."
            }
        ],
        "similarProducts": [
            {
                "id": "17",
                "name": "Red Dead Redemption 2 (PS4 Edition)",
                "price": 4599,
                "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/physical-game/z/u/4/-original-imahfdkhykyv9eje.jpeg?q=70&crop=false"
            },
            {
                "id": "20",
                "name": "GTA 5 (PS4 Edition)",
                "price": 3999,
                "image": "https://m.media-amazon.com/images/I/81htlTqEckL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "19",
        "title": "Fatal Fury: City of the Wolves (PS4 Edition)",
        "developer": "SNK",
        "price": 2999,
        "description": "Revitalize the classic fighting franchise with modern mechanics and stunning visuals.",
        "gameType": "Multiplayer",
        "genre": "Fighting",
        "gameplayHours": "Main Story - 5 hours, Main + Extra - 20 hours",
        "internetRequired": "Yes for online multiplayer",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 83,
        "releaseDate": "14 Feb 2025",
        "publisher": "SNK",
        "countryOfOrigin": "Japan",
        "platform": [
            "PS4"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/lHjjlpCoBOQ?si=MsnQJP4LMNN-D2QT",
        "about": "Fatal Fury: City of the Wolves brings back Terry Bogard and the gang with new mechanics and stunning visuals.",
        "image": "https://m.media-amazon.com/images/I/9131l3+42kL._AC_SX679_.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online multiplayer; local versus doesn't require PS Plus."
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
                "name": "Double Dragon Revive (PS4 Edition)",
                "price": 1999,
                "image": "https://s.pacn.ws/1/p/198/double-dragon-revive-814271.11.jpg?v=sgiek6&width=800&crop=1280,1563"
            },
            {
                "id": "12",
                "name": "Sonic X Shadow Generations (PS4 Edition)",
                "price": 2999,
                "image": "https://dmdworld.store/wp-content/uploads/2024/11/ps4-sonic-shadow.png"
            }
        ]
    },
    {
        "id": "20",
        "title": "GTA 5 (PS4 Edition)",
        "developer": "Rockstar North",
        "price": 3999,
        "description": "Enter the lives of three very different criminals as they commit daring heists across Los Santos in this critically acclaimed open-world adventure.",
        "gameType": "Single-player + Online Multiplayer",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 31 hours, Completionist - 80+ hours",
        "internetRequired": "No (Required for GTA Online)",
        "psPlusRequired": "Yes for GTA Online",
        "metacriticScore": 97,
        "releaseDate": "18 Nov 2014",
        "publisher": "Rockstar Games",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/QkkoHAzjnUs?si=LGvSr4LWikSuhkTC",
        "about": "Grand Theft Auto V delivers Rockstar's largest and most ambitious open world yet, combining gripping storytelling with unprecedented player freedom.",
        "image": "https://m.media-amazon.com/images/I/81htlTqEckL._SX522_.jpg",
        "faqs": [
            {
                "question": "Does this include GTA Online?",
                "answer": "Yes, all PS4 editions include access to GTA Online."
            },
            {
                "question": "Is there first-person mode?",
                "answer": "Yes, this PS4 version introduced a full first-person perspective."
            },
            {
                "question": "Does it support cross-play?",
                "answer": "No, GTA Online is platform-specific."
            }
        ],
        "similarProducts": [
            {
                "id": "17",
                "name": "Red Dead Redemption 2 (PS4 Edition)",
                "price": 4599,
                "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/physical-game/z/u/4/-original-imahfdkhykyv9eje.jpeg?q=70&crop=false"
            },
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (PS4 Edition)",
                "price": 4899,
                "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6GCYz53QwiDoEUlj2MocvsK-RdvzlMGno-7E8DElsG9pjQt-LeDUZ5pL4m8JaH-PxQ_G76gR15VDbbK01t1u5hOKNKymq17qazRlJkFboYHEAh9zK-gBHQw"
            }
        ]
    },
    {
        "id": "21",
        "title": "Doom: The Dark Ages (PS4 Edition)",
        "developer": "id Software",
        "price": 4599,
        "description": "Rip and tear through medieval hellscapes in this brutal prequel to Doom (2016).",
        "gameType": "Campaign",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 15 hours, Main + Extra - 30 hours",
        "internetRequired": "Yes for multiplayer",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 88,
        "releaseDate": "23 May 2025",
        "publisher": "Bethesda Softworks",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/jGVt6zaTXAw?si=u-Vn067XIK8W7YWx",
        "about": "Doom: The Dark Ages takes the Slayer back to medieval times with brutal melee combat and classic shooting.",
        "image": "https://a.media-amazon.com/images/I/91IoZT4nczL._SX679_.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online multiplayer; campaign is playable offline."
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
                "name": "Call of Duty: Black Ops 6 (PS4 Edition)",
                "price": 4899,
                "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6GCYz53QwiDoEUlj2MocvsK-RdvzlMGno-7E8DElsG9pjQt-LeDUZ5pL4m8JaH-PxQ_G76gR15VDbbK01t1u5hOKNKymq17qazRlJkFboYHEAh9zK-gBHQw"
            },
            {
                "id": "2",
                "name": "Far Cry 6 (PS4 Edition)",
                "price": 1499,
                "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjfJ78V_mAH94FoNVMQ7Uee2QdkAjHH8sf_3xLA9hLSRwyjftyk_UJiJqDF7Fm7khJGdY9g_2PWADCNtOC1USgVrpzU5wV1riM7YijH8yJz1SX2yfCivhB"
            }
        ]
    },
    {
        "id": "22",
        "title": "Elden Ring: Nightreign (PS4 Edition)",
        "developer": "FromSoftware",
        "price": 5599,
        "description": "Journey through a dark fantasy world in this open-world RPG sequel.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 40 hours, Main + Extra - 100 hours",
        "internetRequired": "No",
        "psPlusRequired": "Yes for online co-op",
        "metacriticScore": 95,
        "releaseDate": "21 Feb 2025",
        "publisher": "Bandai Namco Entertainment",
        "countryOfOrigin": "Japan",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/ZotjeX4QjYQ?si=bCERs4mB2HRdUS8G",
        "about": "Elden Ring: Nightreign is a sequel to the critically acclaimed Elden Ring, offering a vast open-world and challenging combat.",
        "image": "https://cdn.hmv.com/r/w-1280/p-webp/hmv/files/b5/b5be37d0-a98c-48ae-aa0e-1cb8d6cef628.png",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online co-op and multiplayer; single-player is offline."
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
                "name": "Demon's Souls (PS4 Edition)",
                "price": 4499,
                "image": "https://a.media-amazon.com/images/I/710ZADg0wbL._SY879_.jpg"
            },
            {
                "id": "14",
                "name": "Dragon's Dogma 2 (PS4 Edition)",
                "price": 5499,
                "image": "https://a.media-amazon.com/images/I/81kbquO0o-L._SX679_.jpg"
            }
        ]
    },
    {
        "id": "23",
        "title": "FIFA 23 (PS4 Edition)",
        "developer": "EA Vancouver",
        "price": 5599,
        "description": "Experience the world's game with FIFA 23, featuring HyperMotion2 technology and both men's and women's FIFA World Cup tournaments.",
        "gameType": "Single-player + Online Multiplayer",
        "genre": "Sports/Simulation",
        "gameplayHours": "Career Mode - 50+ hours, Ultimate Team - Unlimited",
        "internetRequired": "Yes for online features",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 78,
        "releaseDate": "30 Sep 2022",
        "publisher": "Electronic Arts",
        "countryOfOrigin": "Canada",
        "platform": [
            "PS4"
        ],
        "pegiRating": "3+",
        "trailerVideo": "https://youtu.be/o3V-GvvzjE4?si=oABRUeXCWwkoPPcr",
        "about": "FIFA 23 brings football authenticity to life with advanced 11v11 match capture and women's club football.",
        "image": "https://a.media-amazon.com/images/I/71RmYwT5JOL._SX679_.jpg",
        "faqs": [
            {
                "question": "Does FIFA 23 have World Cup modes?",
                "answer": "Yes, it includes both men's and women's FIFA World Cup tournaments."
            },
            {
                "question": "Is cross-play supported?",
                "answer": "Yes, for PlayStation 4 to PlayStation 5 in certain modes."
            },
            {
                "question": "Is Ultimate Team available?",
                "answer": "Yes, FIFA Ultimate Team remains the flagship mode."
            }
        ],
        "similarProducts": [
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (PS4 Edition)",
                "price": 4899,
                "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6GCYz53QwiDoEUlj2MocvsK-RdvzlMGno-7E8DElsG9pjQt-LeDUZ5pL4m8JaH-PxQ_G76gR15VDbbK01t1u5hOKNKymq17qazRlJkFboYHEAh9zK-gBHQw"
            },
            {
                "id": "11",
                "name": "Double Dragon Revive (PS4 Edition)",
                "price": 1999,
                "image": "https://s.pacn.ws/1/p/198/double-dragon-revive-814271.11.jpg?v=sgiek6&width=800&crop=1280,1563"
            }
        ]
    },
    {
        "id": "24",
        "title": "Five Nights at Freddy's: Secret of the Mimic (PS4 Edition)",
        "developer": "Steel Wool Studios",
        "price": 2699,
        "description": "Survive terrifying nights in a new Freddy Fazbear location in this chilling horror experience.",
        "gameType": "Campaign",
        "genre": "Horror",
        "gameplayHours": "Main Story - 6 hours, Main + Extra - 10 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 78,
        "releaseDate": "15 Nov 2024",
        "publisher": "ScottGames",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/mwxONlHmYNg?si=gnjGQmGvhge8kvAi",
        "about": "Five Nights at Freddy's: Secret of the Mimic is a horror game that continues the series' tense survival gameplay.",
        "image": "https://i.imgur.com/R91gtRg.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
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
                "name": "Until Dawn (PS4 Edition)",
                "price": 3399,
                "image": "https://a.media-amazon.com/images/I/81c7WFBfNyL._SX522_.jpg"
            },
            {
                "id": "13",
                "name": "The Last of Us Part II Remastered (PS4 Edition)",
                "price": 3599,
                "image": "https://a.media-amazon.com/images/I/61KXzwaghhL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "25",
        "title": "Hitman 3 (PS4 Edition)",
        "developer": "IO Interactive",
        "price": 3099,
        "description": "Become the ultimate assassin in the dramatic conclusion to the World of Assassination trilogy.",
        "gameType": "Single-player + Online Features",
        "genre": "Stealth/Action",
        "gameplayHours": "Main Story - 10 hours, Completionist - 100+ hours",
        "internetRequired": "No (Required for online features)",
        "psPlusRequired": "No",
        "metacriticScore": 87,
        "releaseDate": "20 Jan 2021",
        "publisher": "IO Interactive",
        "countryOfOrigin": "Denmark",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/Z29ORu6_p34?si=MHhIH3Jl4Wit-xDR",
        "about": "Hitman 3 delivers the ultimate stealth experience with six new sandbox locations.",
        "image": "https://a.media-amazon.com/images/I/61ppuR4BooL._SX522_.jpg",
        "faqs": [
            {
                "question": "Does this include Hitman 1 & 2 content?",
                "answer": "You can import locations from previous games if you own them."
            },
            {
                "question": "Is there multiplayer?",
                "answer": "No, but online features include player-created contracts."
            },
            {
                "question": "Does it have DLC?",
                "answer": "Yes, including new maps and the 'Seven Deadly Sins' expansion."
            }
        ],
        "similarProducts": [
            {
                "id": "27",
                "name": "Resident Evil 3 (PS4 Edition)",
                "price": 3599,
                "image": "https://a.media-amazon.com/images/I/81zPtVj06kL._SX679_.jpg"
            },
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (PS4 Edition)",
                "price": 4899,
                "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6GCYz53QwiDoEUlj2MocvsK-RdvzlMGno-7E8DElsG9pjQt-LeDUZ5pL4m8JaH-PxQ_G76gR15VDbbK01t1u5hOKNKymq17qazRlJkFboYHEAh9zK-gBHQw"
            }
        ]
    },
    {
        "id": "26",
        "title": "Kingdom Come: Deliverance (PS4 Edition)",
        "developer": "Warhorse Studios",
        "price": 4599,
        "description": "Live as a medieval knight in a realistic open-world RPG for an immersive historical adventure.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 35 hours, Main + Extra - 70 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 87,
        "releaseDate": "11 Feb 2025",
        "publisher": "Deep Silver",
        "countryOfOrigin": "Czech Republic",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/sXDoP90YkOc?si=StlwHAWjEmUrf30R",
        "about": "Kingdom Come: Deliverance is a PS4 open-world RPG featuring realistic combat and expansive quests.",
        "image": "https://a.media-amazon.com/images/I/91j1wKFr+bL._SX522_.jpg",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
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
                "name": "Assassin's Creed Shadows (PS4 Edition)",
                "price": 5299,
                "image": "https://a.media-amazon.com/images/I/81U2bxexU0L._SX569_.jpg"
            },
            {
                "id": "16",
                "name": "Ghost of Yōtei (PS4 Edition)",
                "price": 5499,
                "image": "https://a.media-amazon.com/images/I/61vCrYISMOL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "27",
        "title": "Resident Evil 3 (PS4 Edition)",
        "developer": "Capcom",
        "price": 3599,
        "description": "Survive the zombie apocalypse in Raccoon City as Jill Valentine in this intense survival horror remake.",
        "gameType": "Campaign",
        "genre": "Survival Horror",
        "gameplayHours": "Main Story - 6 hours, Main + Extra - 15 hours",
        "internetRequired": "No",
        "psPlusRequired": "No",
        "metacriticScore": 79,
        "releaseDate": "03 Apr 2020",
        "publisher": "Capcom",
        "countryOfOrigin": "Japan",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/BBky2uCGqtM?si=lEmMkwT2hC5Y7q7X",
        "about": "Resident Evil 3 is a remake of the 1999 classic, featuring modernized gameplay and enhanced visuals.",
        "image": "https://a.media-amazon.com/images/I/81zPtVj06kL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this game PS4 compatible?",
                "answer": "Yes, it's playable on PS4."
            },
            {
                "question": "Does it require PS Plus?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "Does it include multiplayer?",
                "answer": "Yes, it includes the Resident Evil Resistance multiplayer mode."
            }
        ],
        "similarProducts": [
            {
                "id": "6",
                "name": "Until Dawn (PS4 Edition)",
                "price": 3399,
                "image": "https://a.media-amazon.com/images/I/81c7WFBfNyL._SX522_.jpg"
            },
            {
                "id": "24",
                "name": "Five Nights at Freddy's: Secret of the Mimic (PS4 Edition)",
                "price": 2699,
                "image": "https://i.imgur.com/R91gtRg.jpg"
            }
        ]
    },
    {
        "id": "28",
        "title": "Call of Duty: Black Ops 6 (PS4 Edition)",
        "developer": "Treyarch",
        "price": 4899,
        "description": "Engage in high-octane FPS action with a thrilling campaign, multiplayer, and zombies mode.",
        "gameType": "Multiplayer",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 10 hours, Main + Extra - 50 hours",
        "internetRequired": "Yes for multiplayer",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 83,
        "releaseDate": "25 Oct 2024",
        "publisher": "Activision",
        "countryOfOrigin": "USA",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/12SUwGTq6Gc?si=Qp7I-dtP8z_Cniq5",
        "about": "Call of Duty: Black Ops 6 is a PS4 FPS featuring a cinematic campaign, competitive multiplayer, and zombies mode.",
        "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6GCYz53QwiDoEUlj2MocvsK-RdvzlMGno-7E8DElsG9pjQt-LeDUZ5pL4m8JaH-PxQ_G76gR15VDbbK01t1u5hOKNKymq17qazRlJkFboYHEAh9zK-gBHQw",
        "faqs": [
            {
                "question": "Does it require PS Plus?",
                "answer": "Yes, for online multiplayer; campaign is playable offline."
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
                "name": "Far Cry 6 (PS4 Edition)",
                "price": 1499,
                "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQjfJ78V_mAH94FoNVMQ7Uee2QdkAjHH8sf_3xLA9hLSRwyjftyk_UJiJqDF7Fm7khJGdY9g_2PWADCNtOC1USgVrpzU5wV1riM7YijH8yJz1SX2yfCivhB"
            },
            {
                "id": "21",
                "name": "Doom: The Dark Ages (PS4 Edition)",
                "price": 4599,
                "image": "https://a.media-amazon.com/images/I/91IoZT4nczL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "29",
        "title": "Ghost Recon Wildlands (PS4 Edition)",
        "developer": "Ubisoft Paris",
        "price": 5599,
        "description": "Lead a team of elite Special Forces operatives in this massive open-world tactical shooter set in Bolivia.",
        "gameType": "Single-player + Online Co-op",
        "genre": "Tactical Shooter",
        "gameplayHours": "Main Story - 30 hours, Completionist - 100+ hours",
        "internetRequired": "No (Required for co-op)",
        "psPlusRequired": "Yes for online co-op",
        "metacriticScore": 70,
        "releaseDate": "07 Mar 2017",
        "publisher": "Ubisoft",
        "countryOfOrigin": "France",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/6NzKwT5_l9s?si=OgU_bvyMumWQcC9m",
        "about": "Ghost Recon Wildlands offers a massive military sandbox where you strategically dismantle a drug cartel.",
        "image": "https://a.media-amazon.com/images/I/91FhqicEyLL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is the game world large?",
                "answer": "Yes, it features one of gaming's largest open worlds with 11 distinct biomes."
            },
            {
                "question": "Can you play solo?",
                "answer": "Yes, with AI teammates (added in a post-launch update)."
            },
            {
                "question": "How many players for co-op?",
                "answer": "Supports up to 4-player online co-op."
            }
        ],
        "similarProducts": [
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (PS4 Edition)",
                "price": 4899,
                "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6GCYz53QwiDoEUlj2MocvsK-RdvzlMGno-7E8DElsG9pjQt-LeDUZ5pL4m8JaH-PxQ_G76gR15VDbbK01t1u5hOKNKymq17qazRlJkFboYHEAh9zK-gBHQw"
            },
            {
                "id": "30",
                "name": "Watch Dogs Legion (PS4 Edition)",
                "price": 4599,
                "image": "https://a.media-amazon.com/images/I/81HsglxgCQL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "30",
        "title": "Watch Dogs Legion (PS4 Edition)",
        "developer": "Ubisoft Toronto",
        "price": 4599,
        "description": "Build a resistance from virtually anyone you meet in a near-future London in this open-world action-adventure.",
        "gameType": "Single-player + Online Multiplayer",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 20 hours, Completionist - 60+ hours",
        "internetRequired": "No (Required for online features)",
        "psPlusRequired": "Yes for online multiplayer",
        "metacriticScore": 73,
        "releaseDate": "29 Oct 2020",
        "publisher": "Ubisoft",
        "countryOfOrigin": "Canada",
        "platform": [
            "PS4"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/ayqP0FE7SQ0?si=zFF598oGoV6H5D-K",
        "about": "Watch Dogs: Legion lets you recruit and play as any character in its open-world London.",
        "image": "https://a.media-amazon.com/images/I/81HsglxgCQL._SX679_.jpg",
        "faqs": [
            {
                "question": "Can you really play as any NPC?",
                "answer": "Yes, nearly every character can be recruited with unique perks and drawbacks."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Yes, including cooperative missions and PvP modes."
            },
            {
                "question": "Can you play after finishing the story?",
                "answer": "Yes, with endless recruitment possibilities and side activities."
            }
        ],
        "similarProducts": [
            {
                "id": "20",
                "name": "GTA 5 (PS4 Edition)",
                "price": 3999,
                "image": "https://m.media-amazon.com/images/I/81htlTqEckL._SX522_.jpg"
            },
            {
                "id": "17",
                "name": "Red Dead Redemption 2 (PS4 Edition)",
                "price": 4599,
                "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/physical-game/z/u/4/-original-imahfdkhykyv9eje.jpeg?q=70&crop=false"
            }
        ]
    }
]






async function insertPs4Games() {
    try {
        // Clear existing data
        await Ps4.deleteMany({});
        await Ps4_Details.deleteMany({});

        // Insert new data
        const result = await Ps4.insertMany(ps4Game);
        const resultDetails = await Ps4_Details.insertMany(ps4GameDetails);
        
        console.log(`Inserted ${result.length} PS4 games`);
        console.log(`Inserted ${resultDetails.length} PS4 game details`);
    } catch (err) {
        console.error("Error inserting PS4 games:", err);
        throw err; // Re-throw to handle in main()
    }
}   

async function main() {
    try {
        // Check if MONGO_URI is defined
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI environment variable is not defined");
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        // Insert data
        await insertPs4Games();
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        // Close the connection
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

// Run the main function
main();