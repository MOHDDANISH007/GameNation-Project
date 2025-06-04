import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });
import XboxXGames from "../models/xbox_x/xbox_x.model.js";
import XboxXDetails from "../models/xbox_x/xbox_x_details.model.js"


const xboxXGamesData = [
    {
        "Type": "XBOX_X",
        "game_id": 1,
        "game_name": "Cyberpunk 2077: Phantom Liberty (Xbox X Edition)",
        "price_inr": 4599,
        "image_link": "https://a.media-amazon.com/images/I/819bg+506sL._SY879_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 2,
        "game_name": "Mafia 3 (Xbox X Edition)",
        "price_inr": 5399,
        "image_link": "https://a.media-amazon.com/images/I/81PPJp12iwL._SX679_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 3,
        "game_name": "GTA 5 (Xbox X Edition)",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/91sGvkrMZmL._SX679_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 4,
        "game_name": "Alan Wake 2 (Xbox X Edition)",
        "price_inr": 4199,
        "image_link": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 5,
        "game_name": "State of Decay 3 (Xbox X Edition)",
        "price_inr": 4299,
        "image_link": "https://s3-ap-southeast-1.amazonaws.com/qisahn-upgrade-production/public/spree/products/34986/large/XBX-State-of-Decay-3.jpg?1654663110"
    },
    {
        "Type": "XBOX_X",
        "game_id": 6,
        "game_name": "Hellblade II: Senua’s Saga (Xbox X Edition)",
        "price_inr": 4799,
        "image_link": "https://zamve.com/wp-content/uploads/2024/04/Senuas-Saga-Hellblade-2-Xbox-One-Xbox-Series-XS-Digital-or-Physical-Game-from-zamve.com_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 7,
        "game_name": "Fable Reimagined (Xbox X Edition)",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/91VQbs2RLFL._SY679_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 8,
        "game_name": "The Witcher 3 (Xbox X Edition)",
        "price_inr": 5599,
        "image_link": "https://i.ebayimg.com/images/g/0KEAAOSwgJ5hYVIZ/s-l1600.webp"
    },
    {
        "Type": "XBOX_X",
        "game_id": 9,
        "game_name": "Control  (Xbox X Edition)",
        "price_inr": 3899,
        "image_link": "https://a.media-amazon.com/images/I/615gD35bU4L._SX522_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 10,
        "game_name": "Star Wars: Eclipse (Xbox X Edition)",
        "price_inr": 5199,
        "image_link": "https://image.coolblue.nl/max/788xauto/products/1686526"
    },
    {
        "Type": "XBOX_X",
        "game_id": 11,
        "game_name": "Far Cry 6 (Xbox X Edition)",
        "price_inr": 1599,
        "image_link": "https://a.media-amazon.com/images/I/61EzxJfMzgL._SL1125_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 12,
        "game_name": "Hogwarts Legacy (Xbox X Edition)",
        "price_inr": 4299,
        "image_link": "https://a.media-amazon.com/images/I/8137RKRSs3L._SX679_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 13,
        "game_name": "Assassin's Creed Syndicate (Xbox X Edition)",
        "price_inr": 5399,
        "image_link": "https://a.media-amazon.com/images/I/813txKiS9kL._SX522_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 14,
        "game_name": "FIFA 23 (Xbox X Edition)",
        "price_inr": 2099,
        "image_link": "https://a.media-amazon.com/images/I/813FuI3y8zL._SX679_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 15,
        "game_name": "Sonic X Shadow Generations (Xbox X Edition)",
        "price_inr": 3099,
        "image_link": "https://game-legends.de/thumbnail/23/2b/0e/1718551301/1147712-sonic-x-shadow-generations-xone-xsrx-2d_800x800.webp?ts=1718551304"
    },
    {
        "Type": "XBOX_X",
        "game_id": 16,
        "game_name": "Hitman 3 (Xbox X Edition)",
        "price_inr": 5599,
        "image_link": "https://m.media-amazon.com/images/I/61qu5Iyg3RL._SX522_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 17,
        "game_name": "Red Dead Redemption 2 (Xbox X Edition)",
        "price_inr": 4699,
        "image_link": "https://a.media-amazon.com/images/I/81JuQGZ77WL._SL1500_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 18,
        "game_name": "Fatal Fury: City of the Wolves (Xbox X Edition)",
        "price_inr": 3099,
        "image_link": "https://s.pacn.ws/1/p/19n/fatal-fury-city-of-the-wolves-821617.1.jpg?v=simj99"
    },
    {
        "Type": "XBOX_X",
        "game_id": 19,
        "game_name": "Days Gone  (Xbox X Edition)",
        "price_inr": 4099,
        "image_link": "https://z.nooncdn.com/products/tr:n-t_400/v1556083525/N24425211A_1.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 20,
        "game_name": "Doom: The Dark Ages (Xbox X Edition)",
        "price_inr": 4699,
        "image_link": "https://totalcards.net/cdn/shop/files/Doom-the-Dark-ages-xbox.jpg?v=1718555919"
    },
    {
        "Type": "XBOX_X",
        "game_id": 21,
        "game_name": "Ghost Recon Wildlands (Xbox X Edition)",
        "price_inr": 5699,
        "image_link": "https://a.media-amazon.com/images/I/71-QQiUyLNL._SX522_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 22,
        "game_name": "Ghost Recon Breakpoint (Xbox X Edition)",
        "price_inr": 5699,
        "image_link": "https://mx2games.com/wp-content/uploads/2021/08/ghostrecon-breakpoint-xboxone.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 23,
        "game_name": "Battlefield 2042 (Xbox X Edition)",
        "price_inr": 2799,
        "image_link": "https://hgworld.in/wp-content/uploads/2021/11/xbox-one-vattek2042.png"
    },
    {
        "game_id": 24,
        "game_name": "Battlefield V (Xbox X Edition)",
        "price_inr": 3199,
        "image_link": "https://images-cdn.ubuy.co.in/64c6b576deff4109c838d467-battlefield-v-xbox-one.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 25,
        "game_name": "Crickets (Xbox X Edition)",
        "price_inr": 4699,
        "image_link": "https://a.media-amazon.com/images/I/81X7qCWLrNL._SX679_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 26,
        "game_name": "Forza Horizon 5 (Xbox X Edition)",
        "price_inr": 3699,
        "image_link": "https://a.media-amazon.com/images/I/71xxm98aRUL._SX522_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 27,
        "game_name": "Call of Duty: Black Ops 6 (Xbox X Edition)",
        "price_inr": 4999,
        "image_link": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 28,
        "game_name": "Watch Dog 2 (Xbox X Edition)",
        "price_inr": 5699,
        "image_link": "https://a.media-amazon.com/images/I/91T9BAXVnFL._SY879_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 29,
        "game_name": "The Outer Worlds 2 (Xbox X Edition)",
        "price_inr": 4699,
        "image_link": "https://a.media-amazon.com/images/I/81xYUtq0rcL._SX522_.jpg"
    },
    {
        "Type": "XBOX_X",
        "game_id": 30,
        "game_name": "Star Wars Jedi: Fallen Order (Xbox X Edition)",
        "price_inr": 5999,
        "image_link": "https://a.media-amazon.com/images/I/81cCRix0sWL._SL1500_.jpg"
    }
]


const xboxXDetailsGamesData = [
    {
        "id": "1",
        "title": "Cyberpunk 2077: Phantom Liberty (Xbox Series X Edition)",
        "developer": "CD Projekt Red",
        "price": 4599,
        "description": "Enter the dark future of Night City as V, a cyber-enhanced mercenary, in this open-world RPG featuring Ray Tracing, 4K visuals, and fast loading times on Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 30 hours, Main + Extra - 100 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 89,
        "releaseDate": "26 Sep 2023",
        "publisher": "CD Projekt",
        "countryOfOrigin": "Poland",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/AY5tccjZFKU?si=XzuIXVFvfkHcCkqV",
        "about": "Cyberpunk 2077: Phantom Liberty is a spy-thriller expansion featuring Idris Elba, with Xbox Series X enhancements including faster load times and Ray Tracing support.",
        "image": "https://a.media-amazon.com/images/I/819bg+506sL._SY879_.jpg",
        "faqs": [
            {
                "question": "Is this game Xbox exclusive?",
                "answer": "No, it's available on multiple platforms but Xbox Series X offers enhanced visuals."
            },
            {
                "question": "Does it require Xbox Live Gold?",
                "answer": "No, the campaign is fully playable offline."
            },
            {
                "question": "How does it use Xbox Series X features?",
                "answer": "It supports Ray Tracing, 4K visuals, and faster load times."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, Night City is a vast open-world environment."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "8",
                "name": "The Witcher 3 (Xbox Series X Edition)",
                "price": 5599,
                "image": "https://i.ebayimg.com/images/g/0KEAAOSwgJ5hYVIZ/s-l1600.webp"
            },
            {
                "id": "29",
                "name": "The Outer Worlds 2 (Xbox Series X Edition)",
                "price": 4699,
                "image": "https://a.media-amazon.com/images/I/81xYUtq0rcL._SX522_.jpg"
            },
            {
                "id": "17",
                "name": "Red Dead Redemption 2 (Xbox Series X Edition)",
                "price": 4699,
                "image": "https://a.media-amazon.com/images/I/81JuQGZ77WL._SL1500_.jpg"
            },
            {
                "id": "10",
                "name": "Star Wars: Eclipse (Xbox Series X Edition)",
                "price": 5199,
                "image": "https://image.coolblue.nl/max/788xauto/products/1686526"
            }
        ]
    },
    {
        "id": "2",
        "title": "Mafia 3 (Xbox Series X Edition)",
        "developer": "Hangar 13",
        "price": 5399,
        "description": "Experience the story of Lincoln Clay, a Vietnam veteran on a quest for revenge in 1968 New Bordeaux, now enhanced for Xbox Series X with 4K resolution and improved performance.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 15 hours, Main + Extra - 30 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 68,
        "releaseDate": "07 Oct 2016",
        "publisher": "2K Games",
        "countryOfOrigin": "USA",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/hzUTsNMSxl0?si=OdICem4Js9NJA9jG",
        "about": "Mafia III's Xbox Series X edition delivers enhanced visuals and performance, bringing the gritty crime drama to life with higher resolution and smoother framerates.",
        "image": "https://a.media-amazon.com/images/I/81PPJp12iwL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this a remaster or original game?",
                "answer": "This is the original game with Xbox Series X enhancements."
            },
            {
                "question": "Does it include all DLC?",
                "answer": "The Definitive Edition includes all story DLC content."
            },
            {
                "question": "Is there multiplayer?",
                "answer": "No, it's a single-player experience."
            },
            {
                "question": "How does it perform on Series X?",
                "answer": "Runs at 4K resolution with improved textures and framerate."
            }
        ],
        "similarProducts": [
            {
                "id": "3",
                "name": "GTA 5 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/91sGvkrMZmL._SX679_.jpg"
            },
            {
                "id": "28",
                "name": "Watch Dogs 2 (Xbox Series X Edition)",
                "price": 5699,
                "image": "https://a.media-amazon.com/images/I/91T9BAXVnFL._SY879_.jpg"
            },
            {
                "id": "17",
                "name": "Red Dead Redemption 2 (Xbox Series X Edition)",
                "price": 4699,
                "image": "https://a.media-amazon.com/images/I/81JuQGZ77WL._SL1500_.jpg"
            }
        ]
    },
    {
        "id": "3",
        "title": "GTA 5 (Xbox Series X Edition)",
        "developer": "Rockstar North",
        "price": 4999,
        "description": "Experience Los Santos like never before with enhanced graphics, faster loading, and up to 4K resolution in this Xbox Series X optimized version of Rockstar's epic crime saga.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 31 hours, Main + Extra - 80 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "Yes for online",
        "metacriticScore": 97,
        "releaseDate": "14 Nov 2014",
        "publisher": "Rockstar Games",
        "countryOfOrigin": "UK",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/hvoD7ehZPcM?si=iHYrDfCZHf0VzRAg",
        "about": "GTA V for Xbox Series X features technical improvements including faster load times, enhanced visuals up to 4K resolution, and improved performance.",
        "image": "https://a.media-amazon.com/images/I/91sGvkrMZmL._SX679_.jpg",
        "faqs": [
            {
                "question": "What's new in the Series X version?",
                "answer": "4K resolution, faster loading, improved textures and draw distances."
            },
            {
                "question": "Does it include GTA Online?",
                "answer": "Yes, with separate standalone version available."
            },
            {
                "question": "Can I transfer my progress?",
                "answer": "Yes, from Xbox One to Series X."
            },
            {
                "question": "Is this a free upgrade?",
                "answer": "No, it's a separate purchase."
            }
        ],
        "similarProducts": [
            {
                "id": "2",
                "name": "Mafia 3 (Xbox Series X Edition)",
                "price": 5399,
                "image": "https://a.media-amazon.com/images/I/81PPJp12iwL._SX679_.jpg"
            },
            {
                "id": "28",
                "name": "Watch Dogs 2 (Xbox Series X Edition)",
                "price": 5699,
                "image": "https://a.media-amazon.com/images/I/91T9BAXVnFL._SY879_.jpg"
            },
            {
                "id": "21",
                "name": "Ghost Recon Wildlands (Xbox Series X Edition)",
                "price": 5699,
                "image": "https://a.media-amazon.com/images/I/71-QQiUyLNL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "4",
        "title": "Alan Wake 2 (Xbox Series X Edition)",
        "developer": "Remedy Entertainment",
        "price": 4199,
        "description": "The long-awaited sequel to the cult classic psychological thriller, now with ray tracing, 4K visuals, and fast loading on Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Survival Horror",
        "gameplayHours": "Main Story - 16 hours, Main + Extra - 25 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 89,
        "releaseDate": "27 Oct 2023",
        "publisher": "Epic Games Publishing",
        "countryOfOrigin": "Finland",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/dlQ3FeNu5Yw?si=ZaaiKDlMZudobzl7",
        "about": "Alan Wake 2 is a survival horror game that continues the story of the bestselling author trapped in a nightmare, now enhanced for Xbox Series X with cutting-edge visuals.",
        "image": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg",
        "faqs": [
            {
                "question": "Do I need to play the first game?",
                "answer": "No, but it will enhance your understanding of the story."
            },
            {
                "question": "Is this an open-world game?",
                "answer": "No, it's more linear than the first game."
            },
            {
                "question": "Does it support ray tracing?",
                "answer": "Yes, on Xbox Series X."
            },
            {
                "question": "Is there multiplayer?",
                "answer": "No, it's a single-player experience."
            }
        ],
        "similarProducts": [
            {
                "id": "6",
                "name": "Hellblade II: Senua's Saga (Xbox Series X Edition)",
                "price": 4799,
                "image": "https://zamve.com/wp-content/uploads/2024/04/Senuas-Saga-Hellblade-2-Xbox-One-Xbox-Series-XS-Digital-or-Physical-Game-from-zamve.com_.jpg"
            },
            {
                "id": "19",
                "name": "Days Gone (Xbox Series X Edition)",
                "price": 4099,
                "image": "https://z.nooncdn.com/products/tr:n-t_400/v1556083525/N24425211A_1.jpg"
            },
            {
                "id": "15",
                "name": "Sonic X Shadow Generations (Xbox Series X Edition)",
                "price": 3099,
                "image": "https://game-legends.de/thumbnail/23/2b/0e/1718551301/1147712-sonic-x-shadow-generations-xone-xsrx-2d_800x800.webp?ts=1718551304"
            }
        ]
    },
    {
        "id": "5",
        "title": "State of Decay 3 (Xbox Series X Edition)",
        "developer": "Undead Labs",
        "price": 4299,
        "description": "The next evolution in zombie survival games, featuring an open world, base building, and permadeath, optimized for Xbox Series X with 4K visuals and faster loading.",
        "gameType": "Campaign",
        "genre": "Survival Horror",
        "gameplayHours": "Main Story - 20 hours, Main + Extra - 60 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 0,
        "releaseDate": "TBA 2025",
        "publisher": "Xbox Game Studios",
        "countryOfOrigin": "USA",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/0mJQqTzDp28?si=Z2uXTt8h2_Synd_s",
        "about": "State of Decay 3 continues the franchise's unique blend of survival horror and community management, now with next-gen visuals and gameplay improvements.",
        "image": "https://s3-ap-southeast-1.amazonaws.com/qisahn-upgrade-production/public/spree/products/34986/large/XBX-State-of-Decay-3.jpg?1654663110",
        "faqs": [
            {
                "question": "Is this Xbox exclusive?",
                "answer": "Yes, it's developed by Xbox Game Studios."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Details not yet confirmed."
            },
            {
                "question": "Is permadeath still a feature?",
                "answer": "Yes, characters can permanently die."
            },
            {
                "question": "Will it be on Game Pass?",
                "answer": "Yes, at launch."
            }
        ],
        "similarProducts": [
            {
                "id": "19",
                "name": "Days Gone (Xbox Series X Edition)",
                "price": 4099,
                "image": "https://z.nooncdn.com/products/tr:n-t_400/v1556083525/N24425211A_1.jpg"
            },
            {
                "id": "4",
                "name": "Alan Wake 2 (Xbox Series X Edition)",
                "price": 4199,
                "image": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
            },
            {
                "id": "6",
                "name": "Hellblade II: Senua's Saga (Xbox Series X Edition)",
                "price": 4799,
                "image": "https://zamve.com/wp-content/uploads/2024/04/Senuas-Saga-Hellblade-2-Xbox-One-Xbox-Series-XS-Digital-or-Physical-Game-from-zamve.com_.jpg"
            }
        ]
    },
    {
        "id": "6",
        "title": "Hellblade II: Senua's Saga (Xbox Series X Edition)",
        "developer": "Ninja Theory",
        "price": 4799,
        "description": "Senua returns in this psychological action-adventure, featuring stunning visuals, immersive audio, and intense combat, built from the ground up for Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 8 hours, Main + Extra - 12 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 0,
        "releaseDate": "21 May 2024",
        "publisher": "Xbox Game Studios",
        "countryOfOrigin": "UK",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/3VYGOkMnGCE?si=ZSJLevCjNsmvxyvc",
        "about": "Hellblade II continues Senua's journey through psychosis and Norse mythology, with cutting-edge visuals and audio design that push the Xbox Series X hardware.",
        "image": "https://zamve.com/wp-content/uploads/2024/04/Senuas-Saga-Hellblade-2-Xbox-One-Xbox-Series-XS-Digital-or-Physical-Game-from-zamve.com_.jpg",
        "faqs": [
            {
                "question": "Is this Xbox exclusive?",
                "answer": "Yes, it's developed by Xbox Game Studios."
            },
            {
                "question": "Do I need to play the first game?",
                "answer": "Recommended but not required."
            },
            {
                "question": "Is it VR compatible?",
                "answer": "No VR support announced."
            },
            {
                "question": "Will it be on Game Pass?",
                "answer": "Yes, available day one on Game Pass."
            }
        ],
        "similarProducts": [
            {
                "id": "4",
                "name": "Alan Wake 2 (Xbox Series X Edition)",
                "price": 4199,
                "image": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
            },
            {
                "id": "5",
                "name": "State of Decay 3 (Xbox Series X Edition)",
                "price": 4299,
                "image": "https://s3-ap-southeast-1.amazonaws.com/qisahn-upgrade-production/public/spree/products/34986/large/XBX-State-of-Decay-3.jpg?1654663110"
            },
            {
                "id": "8",
                "name": "The Witcher 3 (Xbox Series X Edition)",
                "price": 5599,
                "image": "https://i.ebayimg.com/images/g/0KEAAOSwgJ5hYVIZ/s-l1600.webp"
            }
        ]
    },
    {
        "id": "7",
        "title": "Fable Reimagined (Xbox Series X Edition)",
        "developer": "Playground Games",
        "price": 4999,
        "description": "The beloved RPG franchise returns with a fresh take, featuring an open world, humor, and moral choices, built specifically for Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 25 hours, Main + Extra - 50 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 0,
        "releaseDate": "TBA 2025",
        "publisher": "Xbox Game Studios",
        "countryOfOrigin": "UK",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/w6TJTHdgmts?si=nRc3nIgSGYJzy5Zp",
        "about": "Fable Reimagined brings new life to the classic franchise with next-gen visuals, an expansive open world, and the series' signature humor and morality system.",
        "image": "https://a.media-amazon.com/images/I/91VQbs2RLFL._SY679_.jpg",
        "faqs": [
            {
                "question": "Is this a reboot or sequel?",
                "answer": "It's a reimagining of the franchise."
            },
            {
                "question": "Will it be on Game Pass?",
                "answer": "Yes, available day one on Game Pass."
            },
            {
                "question": "Is multiplayer included?",
                "answer": "Details not yet confirmed."
            },
            {
                "question": "Will there be moral choices?",
                "answer": "Yes, the morality system returns."
            }
        ],
        "similarProducts": [
            {
                "id": "8",
                "name": "The Witcher 3 (Xbox Series X Edition)",
                "price": 5599,
                "image": "https://i.ebayimg.com/images/g/0KEAAOSwgJ5hYVIZ/s-l1600.webp"
            },
            {
                "id": "1",
                "name": "Cyberpunk 2077: Phantom Liberty (Xbox Series X Edition)",
                "price": 4599,
                "image": "https://a.media-amazon.com/images/I/819bg+506sL._SY879_.jpg"
            },
            {
                "id": "29",
                "name": "The Outer Worlds 2 (Xbox Series X Edition)",
                "price": 4699,
                "image": "https://a.media-amazon.com/images/I/81xYUtq0rcL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "8",
        "title": "The Witcher 3 (Xbox Series X Edition)",
        "developer": "CD Projekt Red",
        "price": 5599,
        "description": "Geralt's epic adventure gets a next-gen upgrade with 4K resolution, ray tracing, faster loading, and all DLC included for Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 50 hours, Main + Extra - 150 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 93,
        "releaseDate": "14 Dec 2022",
        "publisher": "CD Projekt",
        "countryOfOrigin": "Poland",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/c0i88t0Kacs?si=fMWawgb_RC5ohxiI",
        "about": "The Witcher 3's Xbox Series X edition includes visual and technical improvements, making this already stunning RPG even more immersive.",
        "image": "https://i.ebayimg.com/images/g/0KEAAOSwgJ5hYVIZ/s-l1600.webp",
        "faqs": [
            {
                "question": "Is this a free upgrade?",
                "answer": "Yes, for owners of the original game."
            },
            {
                "question": "Does it include all DLC?",
                "answer": "Yes, both expansions are included."
            },
            {
                "question": "What are the visual improvements?",
                "answer": "4K resolution, ray tracing, improved textures and performance."
            },
            {
                "question": "Is there new content?",
                "answer": "Some new small additions inspired by the Netflix show."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Cyberpunk 2077: Phantom Liberty (Xbox Series X Edition)",
                "price": 4599,
                "image": "https://a.media-amazon.com/images/I/819bg+506sL._SY879_.jpg"
            },
            {
                "id": "7",
                "name": "Fable Reimagined (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/91VQbs2RLFL._SY679_.jpg"
            },
            {
                "id": "17",
                "name": "Red Dead Redemption 2 (Xbox Series X Edition)",
                "price": 4699,
                "image": "https://a.media-amazon.com/images/I/81JuQGZ77WL._SL1500_.jpg"
            }
        ]
    },
    {
        "id": "9",
        "title": "Control (Xbox Series X Edition)",
        "developer": "Remedy Entertainment",
        "price": 3899,
        "description": "Explore the shifting halls of the Federal Bureau of Control in this supernatural action-adventure, enhanced for Xbox Series X with ray tracing and 60fps performance.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 12 hours, Main + Extra - 20 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 85,
        "releaseDate": "27 Aug 2020",
        "publisher": "505 Games",
        "countryOfOrigin": "Finland",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/PT5yMfC9LQM?si=CCArv6NjlussO9LY",
        "about": "Control Ultimate Edition for Xbox Series X includes all DLC and next-gen enhancements like ray tracing and 60fps performance modes.",
        "image": "https://a.media-amazon.com/images/I/615gD35bU4L._SX522_.jpg",
        "faqs": [
            {
                "question": "What's included in Ultimate Edition?",
                "answer": "Base game and all DLC expansions."
            },
            {
                "question": "What are the Series X enhancements?",
                "answer": "Ray tracing, 60fps performance mode, faster loading."
            },
            {
                "question": "Is this a free upgrade?",
                "answer": "Only for Ultimate Edition owners."
            },
            {
                "question": "Is it connected to Alan Wake?",
                "answer": "Yes, they share the same universe."
            }
        ],
        "similarProducts": [
            {
                "id": "4",
                "name": "Alan Wake 2 (Xbox Series X Edition)",
                "price": 4199,
                "image": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
            },
            {
                "id": "6",
                "name": "Hellblade II: Senua's Saga (Xbox Series X Edition)",
                "price": 4799,
                "image": "https://zamve.com/wp-content/uploads/2024/04/Senuas-Saga-Hellblade-2-Xbox-One-Xbox-Series-XS-Digital-or-Physical-Game-from-zamve.com_.jpg"
            },
            {
                "id": "10",
                "name": "Star Wars: Eclipse (Xbox Series X Edition)",
                "price": 5199,
                "image": "https://image.coolblue.nl/max/788xauto/products/1686526"
            }
        ]
    },
    {
        "id": "10",
        "title": "Star Wars: Eclipse (Xbox Series X Edition)",
        "developer": "Quantic Dream",
        "price": 5199,
        "description": "A new narrative-driven Star Wars adventure set in the High Republic era, featuring multiple playable characters and branching storylines, optimized for Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Adventure",
        "gameplayHours": "Main Story - 15 hours, Main + Extra - 30 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 0,
        "releaseDate": "TBA 2026",
        "publisher": "Lucasfilm Games",
        "countryOfOrigin": "France",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/1wWkQXUMQYI?si=mvAkMqUPfh1ofeg5",
        "about": "Star Wars: Eclipse is an ambitious interactive drama set during the High Republic era, featuring Quantic Dream's signature branching narrative style.",
        "image": "https://image.coolblue.nl/max/788xauto/products/1686526",
        "faqs": [
            {
                "question": "Is this open-world?",
                "answer": "No, it's more linear like other Quantic Dream games."
            },
            {
                "question": "How many playable characters?",
                "answer": "Multiple, but exact number not confirmed."
            },
            {
                "question": "Is it canon to Star Wars?",
                "answer": "Yes, it's an official Lucasfilm production."
            },
            {
                "question": "Will there be lightsaber combat?",
                "answer": "Details not yet revealed."
            }
        ],
        "similarProducts": [
            {
                "id": "30",
                "name": "Star Wars Jedi: Fallen Order (Xbox Series X Edition)",
                "price": 5999,
                "image": "https://a.media-amazon.com/images/I/81cCRix0sWL._SL1500_.jpg"
            },
            {
                "id": "9",
                "name": "Control (Xbox Series X Edition)",
                "price": 3899,
                "image": "https://a.media-amazon.com/images/I/615gD35bU4L._SX522_.jpg"
            },
            {
                "id": "4",
                "name": "Alan Wake 2 (Xbox Series X Edition)",
                "price": 4199,
                "image": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
            }
        ]
    },
    {
        "id": "11",
        "title": "Far Cry 6 (Xbox Series X Edition)",
        "developer": "Ubisoft Toronto",
        "price": 1599,
        "description": "Join the revolution on the tropical island of Yara, fighting against dictator Anton Castillo in this open-world FPS, enhanced for Xbox Series X with 4K and ray tracing.",
        "gameType": "Campaign",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 23 hours, Main + Extra - 60 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "Yes for multiplayer",
        "metacriticScore": 73,
        "releaseDate": "07 Oct 2021",
        "publisher": "Ubisoft",
        "countryOfOrigin": "Canada",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/-IJuKT1mHO8?si=4pd1o8IvsJX5pmYi",
        "about": "Far Cry 6 brings the series' signature open-world chaos to Xbox Series X with enhanced visuals, faster loading, and all post-launch content included.",
        "image": "https://a.media-amazon.com/images/I/61EzxJfMzgL._SL1125_.jpg",
        "faqs": [
            {
                "question": "Does it support ray tracing?",
                "answer": "Yes, on Xbox Series X."
            },
            {
                "question": "Is Giancarlo Esposito in the game?",
                "answer": "Yes, he plays the main antagonist."
            },
            {
                "question": "What's the resolution/framerate?",
                "answer": "4K at 60fps on Series X."
            },
            {
                "question": "Does it have co-op?",
                "answer": "Yes, two-player online co-op."
            }
        ],
        "similarProducts": [
            {
                "id": "21",
                "name": "Ghost Recon Wildlands (Xbox Series X Edition)",
                "price": 5699,
                "image": "https://a.media-amazon.com/images/I/71-QQiUyLNL._SX522_.jpg"
            },
            {
                "id": "22",
                "name": "Ghost Recon Breakpoint (Xbox Series X Edition)",
                "price": 5699,
                "image": "https://mx2games.com/wp-content/uploads/2021/08/ghostrecon-breakpoint-xboxone.jpg"
            },
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "12",
        "title": "Hogwarts Legacy (Xbox Series X Edition)",
        "developer": "Avalanche Software",
        "price": 4299,
        "description": "Attend Hogwarts in the 1800s in this open-world RPG, featuring spellcasting, magical creatures, and a fully realized wizarding world, optimized for Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Action/RPG",
        "gameplayHours": "Main Story - 35 hours, Main + Extra - 70 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 84,
        "releaseDate": "10 Feb 2023",
        "publisher": "Warner Bros. Games",
        "countryOfOrigin": "USA",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/1O6Qstncpnc?si=SkTeawejnwrIZ9nQ",
        "about": "Hogwarts Legacy for Xbox Series X delivers the most complete wizarding world experience with 4K visuals, ray tracing, and exclusive content.",
        "image": "https://a.media-amazon.com/images/I/8137RKRSs3L._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this connected to Harry Potter?",
                "answer": "It's set in the same universe but centuries earlier."
            },
            {
                "question": "Can I choose my house?",
                "answer": "Yes, all four houses are available."
            },
            {
                "question": "Is Quidditch included?",
                "answer": "No, it's not in the base game."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K, ray tracing, faster loading, and fidelity/performance modes."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Cyberpunk 2077: Phantom Liberty (Xbox Series X Edition)",
                "price": 4599,
                "image": "https://a.media-amazon.com/images/I/819bg+506sL._SY879_.jpg"
            },
            {
                "id": "8",
                "name": "The Witcher 3 (Xbox Series X Edition)",
                "price": 5599,
                "image": "https://i.ebayimg.com/images/g/0KEAAOSwgJ5hYVIZ/s-l1600.webp"
            },
            {
                "id": "7",
                "name": "Fable Reimagined (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/91VQbs2RLFL._SY679_.jpg"
            }
        ]
    },
    {
        "id": "13",
        "title": "Assassin's Creed Syndicate (Xbox Series X Edition)",
        "developer": "Ubisoft Quebec",
        "price": 5399,
        "description": "Explore Victorian London as twin assassins Jacob and Evie Frye in this enhanced version for Xbox Series X, featuring 4K resolution and improved performance.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 19 hours, Main + Extra - 40 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 76,
        "releaseDate": "23 Oct 2015",
        "publisher": "Ubisoft",
        "countryOfOrigin": "Canada",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/WTBbwgsyxvg?si=4GwINuSsoFPBUSaF",
        "about": "Assassin's Creed Syndicate's Xbox Series X version delivers the complete Victorian London experience with enhanced visuals and performance.",
        "image": "https://a.media-amazon.com/images/I/813txKiS9kL._SX522_.jpg",
        "faqs": [
            {
                "question": "Is this a remaster?",
                "answer": "No, it's the original game with Series X enhancements."
            },
            {
                "question": "Does it include all DLC?",
                "answer": "Yes, the Gold Edition includes all content."
            },
            {
                "question": "Can I play as both characters?",
                "answer": "Yes, you switch between Jacob and Evie."
            },
            {
                "question": "What are the enhancements?",
                "answer": "4K resolution, improved textures and framerate."
            }
        ],
        "similarProducts": [
            {
                "id": "2",
                "name": "Mafia 3 (Xbox Series X Edition)",
                "price": 5399,
                "image": "https://a.media-amazon.com/images/I/81PPJp12iwL._SX679_.jpg"
            },
            {
                "id": "3",
                "name": "GTA 5 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/91sGvkrMZmL._SX679_.jpg"
            },
            {
                "id": "28",
                "name": "Watch Dogs 2 (Xbox Series X Edition)",
                "price": 5699,
                "image": "https://a.media-amazon.com/images/I/91T9BAXVnFL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "14",
        "title": "FIFA 23 (Xbox Series X Edition)",
        "developer": "EA Vancouver",
        "price": 2099,
        "description": "The final FIFA-branded football simulation featuring HyperMotion2 technology, women's club football, and enhanced gameplay for Xbox Series X.",
        "gameType": "Multiplayer",
        "genre": "Sports",
        "gameplayHours": "N/A",
        "internetRequired": "Yes for online",
        "xboxLiveRequired": "Yes for online",
        "metacriticScore": 76,
        "releaseDate": "30 Sep 2022",
        "publisher": "EA Sports",
        "countryOfOrigin": "Canada",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "3+",
        "trailerVideo": "https://youtu.be/o3V-GvvzjE4?si=1c1LPMneDpHMzU2S",
        "about": "FIFA 23 for Xbox Series X delivers the most realistic football experience yet with advanced motion capture and next-gen visual enhancements.",
        "image": "https://a.media-amazon.com/images/I/813FuI3y8zL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this the last FIFA game?",
                "answer": "Yes, future games will be EA Sports FC."
            },
            {
                "question": "Does it have cross-play?",
                "answer": "Yes, between same-gen consoles."
            },
            {
                "question": "What's new this year?",
                "answer": "Women's club football, World Cup modes, HyperMotion2."
            },
            {
                "question": "Does it support 120fps?",
                "answer": "Yes, on Series X in certain modes."
            }
        ],
        "similarProducts": [
            {
                "id": "25",
                "name": "Crickets (Xbox Series X Edition)",
                "price": 4699,
                "image": "https://a.media-amazon.com/images/I/81X7qCWLrNL._SX679_.jpg"
            },
            {
                "id": "26",
                "name": "Forza Horizon 5 (Xbox Series X Edition)",
                "price": 3699,
                "image": "https://a.media-amazon.com/images/I/71xxm98aRUL._SX522_.jpg"
            },
            {
                "id": "23",
                "name": "Battlefield 2042 (Xbox Series X Edition)",
                "price": 2799,
                "image": "https://hgworld.in/wp-content/uploads/2021/11/xbox-one-vattek2042.png"
            }
        ]
    },
    {
        "id": "15",
        "title": "Sonic X Shadow Generations (Xbox Series X Edition)",
        "developer": "Sonic Team",
        "price": 3099,
        "description": "Celebrate Sonic's legacy with remastered classic levels and new Shadow the Hedgehog content, optimized for Xbox Series X with 4K visuals and 60fps.",
        "gameType": "Campaign",
        "genre": "Platformer",
        "gameplayHours": "Main Story - 8 hours, Main + Extra - 15 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 0,
        "releaseDate": "25 Oct 2024",
        "publisher": "SEGA",
        "countryOfOrigin": "Japan",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "7+",
        "trailerVideo": "https://youtu.be/CDmVayEU76w?si=ySt4xtm2xz4bTZcE",
        "about": "Sonic X Shadow Generations brings together the best of classic Sonic gameplay with new Shadow-focused content, all enhanced for Xbox Series X.",
        "image": "https://game-legends.de/thumbnail/23/2b/0e/1718551301/1147712-sonic-x-shadow-generations-xone-xsrx-2d_800x800.webp?ts=1718551304",
        "faqs": [
            {
                "question": "Is this a remaster or new game?",
                "answer": "Both - remastered Sonic Generations with new Shadow content."
            },
            {
                "question": "Can I play as Shadow?",
                "answer": "Yes, in new exclusive levels."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's single-player only."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, 60fps, faster loading."
            }
        ],
        "similarProducts": [
            {
                "id": "18",
                "name": "Fatal Fury: City of the Wolves (Xbox Series X Edition)",
                "price": 3099,
                "image": "https://s.pacn.ws/1/p/19n/fatal-fury-city-of-the-wolves-821617.1.jpg?v=simj99"
            },
            {
                "id": "4",
                "name": "Alan Wake 2 (Xbox Series X Edition)",
                "price": 4199,
                "image": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
            },
            {
                "id": "6",
                "name": "Hellblade II: Senua's Saga (Xbox Series X Edition)",
                "price": 4799,
                "image": "https://zamve.com/wp-content/uploads/2024/04/Senuas-Saga-Hellblade-2-Xbox-One-Xbox-Series-XS-Digital-or-Physical-Game-from-zamve.com_.jpg"
            }
        ]
    },
    {
        "id": "16",
        "title": "Hitman 3 (Xbox Series X Edition)",
        "developer": "IO Interactive",
        "price": 5599,
        "description": "Agent 47 returns in the dramatic conclusion to the World of Assassination trilogy, featuring enhanced visuals and performance on Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Stealth",
        "gameplayHours": "Main Story - 8 hours, Main + Extra - 30 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 87,
        "releaseDate": "20 Jan 2021",
        "publisher": "IO Interactive",
        "countryOfOrigin": "Denmark",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/Z29ORu6_p34?si=Gvri5pMGEZ6hlg6h",
        "about": "Hitman 3 for Xbox Series X delivers the ultimate stealth experience with 4K resolution, improved lighting, and all content from the entire trilogy.",
        "image": "https://m.media-amazon.com/images/I/61qu5Iyg3RL._SX522_.jpg",
        "faqs": [
            {
                "question": "Does it include previous games?",
                "answer": "Yes, through the World of Assassination bundle."
            },
            {
                "question": "Is VR supported?",
                "answer": "Not on Xbox platforms."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, 60fps, improved textures and lighting."
            },
            {
                "question": "Is there multiplayer?",
                "answer": "No, it's single-player focused."
            }
        ],
        "similarProducts": [
            {
                "id": "9",
                "name": "Control (Xbox Series X Edition)",
                "price": 3899,
                "image": "https://a.media-amazon.com/images/I/615gD35bU4L._SX522_.jpg"
            },
            {
                "id": "4",
                "name": "Alan Wake 2 (Xbox Series X Edition)",
                "price": 4199,
                "image": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
            },
            {
                "id": "29",
                "name": "The Outer Worlds 2 (Xbox Series X Edition)",
                "price": 4699,
                "image": "https://a.media-amazon.com/images/I/81xYUtq0rcL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "17",
        "title": "Red Dead Redemption 2 (Xbox Series X Edition)",
        "developer": "Rockstar Games",
        "price": 4699,
        "description": "Arthur Morgan's epic tale of the dying Wild West comes to Xbox Series X with enhanced 4K visuals, improved performance, and all existing content.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 50 hours, Main + Extra - 100 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "Yes for online",
        "metacriticScore": 97,
        "releaseDate": "26 Oct 2018",
        "publisher": "Rockstar Games",
        "countryOfOrigin": "USA",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/gmA6MrX81z4?si=JkY63C-tYaxjjQn5",
        "about": "Red Dead Redemption 2's Xbox Series X version delivers the complete cowboy experience with technical enhancements that make this already stunning game even more immersive.",
        "image": "https://a.media-amazon.com/images/I/81JuQGZ77WL._SL1500_.jpg",
        "faqs": [
            {
                "question": "Is this a free upgrade?",
                "answer": "No, it's a separate purchase."
            },
            {
                "question": "Does it include online?",
                "answer": "Yes, Red Dead Online is included."
            },
            {
                "question": "What are the enhancements?",
                "answer": "4K resolution, improved textures and performance."
            },
            {
                "question": "Is first-person mode included?",
                "answer": "Yes, from the original release."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Cyberpunk 2077: Phantom Liberty (Xbox Series X Edition)",
                "price": 4599,
                "image": "https://a.media-amazon.com/images/I/819bg+506sL._SY879_.jpg"
            },
            {
                "id": "8",
                "name": "The Witcher 3 (Xbox Series X Edition)",
                "price": 5599,
                "image": "https://i.ebayimg.com/images/g/0KEAAOSwgJ5hYVIZ/s-l1600.webp"
            },
            {
                "id": "3",
                "name": "GTA 5 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/91sGvkrMZmL._SX679_.jpg"
            }
        ]
    },
    {
        "id": "18",
        "title": "Fatal Fury: City of the Wolves (Xbox Series X Edition)",
        "developer": "SNK",
        "price": 3099,
        "description": "The legendary fighting series returns with new mechanics, characters, and visuals optimized for Xbox Series X with 4K resolution and rollback netcode.",
        "gameType": "Multiplayer",
        "genre": "Fighting",
        "gameplayHours": "N/A",
        "internetRequired": "Yes for online",
        "xboxLiveRequired": "Yes for online",
        "metacriticScore": 0,
        "releaseDate": "Early 2025",
        "publisher": "SNK",
        "countryOfOrigin": "Japan",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "12+",
        "trailerVideo": "https://youtu.be/lHjjlpCoBOQ?si=9EdQ0e2XsT_thBiz",
        "about": "Fatal Fury: City of the Wolves brings back Terry Bogard and the gang with new REV System mechanics and stunning visuals designed for Xbox Series X.",
        "image": "https://s.pacn.ws/1/p/19n/fatal-fury-city-of-the-wolves-821617.1.jpg?v=simj99",
        "faqs": [
            {
                "question": "Is this a sequel to Garou?",
                "answer": "Yes, it continues the Fatal Fury/Garou lineage."
            },
            {
                "question": "How many characters at launch?",
                "answer": "Exact number not yet confirmed."
            },
            {
                "question": "Does it have rollback netcode?",
                "answer": "Yes, for better online play."
            },
            {
                "question": "Is Terry Bogard in it?",
                "answer": "Yes, he's the series protagonist."
            }
        ],
        "similarProducts": [
            {
                "id": "15",
                "name": "Sonic X Shadow Generations (Xbox Series X Edition)",
                "price": 3099,
                "image": "https://game-legends.de/thumbnail/23/2b/0e/1718551301/1147712-sonic-x-shadow-generations-xone-xsrx-2d_800x800.webp?ts=1718551304"
            },
            {
                "id": "27",
                "name": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
            },
            {
                "id": "23",
                "name": "Battlefield 2042 (Xbox Series X Edition)",
                "price": 2799,
                "image": "https://hgworld.in/wp-content/uploads/2021/11/xbox-one-vattek2042.png"
            }
        ]
    },
    {
        "id": "19",
        "title": "Days Gone (Xbox Series X Edition)",
        "developer": "Bend Studio",
        "price": 4099,
        "description": "Ride through a post-apocalyptic Pacific Northwest as Deacon St. John, battling Freaker hordes in this open-world adventure now enhanced for Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 36 hours, Main + Extra - 60 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 71,
        "releaseDate": "26 Apr 2019",
        "publisher": "Sony Interactive Entertainment",
        "countryOfOrigin": "USA",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/RjRLSZalxgs?si=Lx4ufxAVXidzf52H",
        "about": "Days Gone for Xbox Series X features enhanced visuals and performance, making this open-world zombie survival game more immersive than ever.",
        "image": "https://z.nooncdn.com/products/tr:n-t_400/v1556083525/N24425211A_1.jpg",
        "faqs": [
            {
                "question": "Is this an Xbox exclusive?",
                "answer": "Originally a PlayStation exclusive, now on Xbox."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's single-player only."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, 60fps, faster loading."
            },
            {
                "question": "Is there a sequel planned?",
                "answer": "Not currently announced."
            }
        ],
        "similarProducts": [
            {
                "id": "5",
                "name": "State of Decay 3 (Xbox Series X Edition)",
                "price": 4299,
                "image": "https://s3-ap-southeast-1.amazonaws.com/qisahn-upgrade-production/public/spree/products/34986/large/XBX-State-of-Decay-3.jpg?1654663110"
            },
            {
                "id": "4",
                "name": "Alan Wake 2 (Xbox Series X Edition)",
                "price": 4199,
                "image": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
            },
            {
                "id": "6",
                "name": "Hellblade II: Senua's Saga (Xbox Series X Edition)",
                "price": 4799,
                "image": "https://zamve.com/wp-content/uploads/2024/04/Senuas-Saga-Hellblade-2-Xbox-One-Xbox-Series-XS-Digital-or-Physical-Game-from-zamve.com_.jpg"
            }
        ]
    },
    {
        "id": "20",
        "title": "Doom: The Dark Ages (Xbox Series X Edition)",
        "developer": "id Software",
        "price": 4699,
        "description": "The Doom Slayer returns in this medieval-inspired installment of the legendary FPS series, featuring brutal combat optimized for Xbox Series X.",
        "gameType": "Campaign",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 12 hours, Main + Extra - 20 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "Yes for multiplayer",
        "metacriticScore": 0,
        "releaseDate": "2025",
        "publisher": "Bethesda Softworks",
        "countryOfOrigin": "USA",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/s1i3YfGl5ag?si=qhNqz2phiArJGTz1",
        "about": "Doom: The Dark Ages takes the series' signature fast-paced combat to a medieval setting, with next-gen visuals and performance on Xbox Series X.",
        "image": "https://totalcards.net/cdn/shop/files/Doom-the-Dark-ages-xbox.jpg?v=1718555919",
        "faqs": [
            {
                "question": "Is this an Xbox exclusive?",
                "answer": "No, but published by Xbox Game Studios."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Yes, details to be announced."
            },
            {
                "question": "Will it be on Game Pass?",
                "answer": "Yes, available day one."
            },
            {
                "question": "Is it connected to previous Doom games?",
                "answer": "Continuity details not yet revealed."
            }
        ],
        "similarProducts": [
            {
                "id": "21",
                "name": "Ghost Recon Wildlands (Xbox Series X Edition)",
                "price": 5699,
                "image": "https://a.media-amazon.com/images/I/71-QQiUyLNL._SX522_.jpg"
            },
            {
                "id": "11",
                "name": "Far Cry 6 (Xbox Series X Edition)",
                "price": 1599,
                "image": "https://a.media-amazon.com/images/I/61EzxJfMzgL._SL1125_.jpg"
            },
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "21",
        "title": "Ghost Recon Wildlands (Xbox Series X Edition)",
        "developer": "Ubisoft Paris",
        "price": 5699,
        "description": "Lead a team of Ghosts through the vast open world of Bolivia to dismantle a drug cartel, now enhanced for Xbox Series X with 4K visuals and improved performance.",
        "gameType": "Campaign",
        "genre": "Tactical Shooter",
        "gameplayHours": "Main Story - 25 hours, Main + Extra - 60 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "Yes for co-op",
        "metacriticScore": 70,
        "releaseDate": "07 Mar 2017",
        "publisher": "Ubisoft",
        "countryOfOrigin": "France",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/WdJub3Kz2wI?si=WvePPmN6Q6bji21M",
        "about": "Ghost Recon Wildlands for Xbox Series X delivers the complete tactical military experience with enhanced visuals and all post-launch content included.",
        "image": "https://a.media-amazon.com/images/I/71-QQiUyLNL._SX522_.jpg",
        "faqs": [
            {
                "question": "Does it support 4-player co-op?",
                "answer": "Yes, online co-op is available."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, one of the largest in Ubisoft games."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, improved textures and framerate."
            },
            {
                "question": "Does it have PvP?",
                "answer": "Yes, through the Ghost War mode."
            }
        ],
        "similarProducts": [
            {
                "id": "22",
                "name": "Ghost Recon Breakpoint (Xbox Series X Edition)",
                "price": 5699,
                "image": "https://mx2games.com/wp-content/uploads/2021/08/ghostrecon-breakpoint-xboxone.jpg"
            },
            {
                "id": "11",
                "name": "Far Cry 6 (Xbox Series X Edition)",
                "price": 1599,
                "image": "https://a.media-amazon.com/images/I/61EzxJfMzgL._SL1125_.jpg"
            },
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "22",
        "title": "Ghost Recon Breakpoint (Xbox Series X Edition)",
        "developer": "Ubisoft Paris",
        "price": 5699,
        "description": "Stranded behind enemy lines on a high-tech island, use stealth and tactics to survive in this military shooter enhanced for Xbox Series X.",
        "gameType": "Campaign",
        "genre": "Tactical Shooter",
        "gameplayHours": "Main Story - 20 hours, Main + Extra - 50 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "Yes for co-op",
        "metacriticScore": 60,
        "releaseDate": "04 Oct 2019",
        "publisher": "Ubisoft",
        "countryOfOrigin": "France",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/y-9_d3IT_yA?si=fS3wF5r0Lc3KVXOD",
        "about": "Ghost Recon Breakpoint for Xbox Series X includes all post-launch content and improvements, with enhanced visuals and performance.",
        "image": "https://mx2games.com/wp-content/uploads/2021/08/ghostrecon-breakpoint-xboxone.jpg",
        "faqs": [
            {
                "question": "Does it have AI teammates?",
                "answer": "Yes, added in a post-launch update."
            },
            {
                "question": "Is it always-online?",
                "answer": "No, can be played offline."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, improved textures and framerate."
            },
            {
                "question": "Does it have loot mechanics?",
                "answer": "Yes, with gear score system."
            }
        ],
        "similarProducts": [
            {
                "id": "21",
                "name": "Ghost Recon Wildlands (Xbox Series X Edition)",
                "price": 5699,
                "image": "https://a.media-amazon.com/images/I/71-QQiUyLNL._SX522_.jpg"
            },
            {
                "id": "11",
                "name": "Far Cry 6 (Xbox Series X Edition)",
                "price": 1599,
                "image": "https://a.media-amazon.com/images/I/61EzxJfMzgL._SL1125_.jpg"
            },
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "23",
        "title": "Battlefield 2042 (Xbox Series X Edition)",
        "developer": "DICE",
        "price": 2799,
        "description": "Fight across dynamic battlegrounds in this all-out warfare FPS, featuring 128-player battles and enhanced visuals for Xbox Series X.",
        "gameType": "Multiplayer",
        "genre": "First-Person Shooter",
        "gameplayHours": "N/A",
        "internetRequired": "Yes",
        "xboxLiveRequired": "Yes",
        "metacriticScore": 68,
        "releaseDate": "19 Nov 2021",
        "publisher": "EA",
        "countryOfOrigin": "Sweden",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/ASzOzrB-a9E?si=JKGezisEFJkWtL4G",
        "about": "Battlefield 2042 for Xbox Series X delivers large-scale warfare with dynamic weather, destruction, and 128-player battles (64-player on Xbox).",
        "image": "https://hgworld.in/wp-content/uploads/2021/11/xbox-one-vattek2042.png",
        "faqs": [
            {
                "question": "Does it have a campaign?",
                "answer": "No, it's multiplayer focused."
            },
            {
                "question": "How many players?",
                "answer": "Up to 128 on next-gen (64 on Xbox)."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, 120fps mode, improved visuals."
            },
            {
                "question": "Does it have cross-play?",
                "answer": "Yes, between same-gen consoles."
            }
        ],
        "similarProducts": [
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
            },
            {
                "id": "24",
                "name": "Battlefield V (Xbox Series X Edition)",
                "price": 3199,
                "image": "https://images-cdn.ubuy.co.in/64c6b576deff4109c838d467-battlefield-v-xbox-one.jpg"
            },
            {
                "id": "11",
                "name": "Far Cry 6 (Xbox Series X Edition)",
                "price": 1599,
                "image": "https://a.media-amazon.com/images/I/61EzxJfMzgL._SL1125_.jpg"
            }
        ]
    },
    {
        "id": "24",
        "title": "Battlefield V (Xbox Series X Edition)",
        "developer": "DICE",
        "price": 3199,
        "description": "Experience WWII through unseen locations in this tactical FPS, now enhanced for Xbox Series X with 4K resolution and improved performance.",
        "gameType": "Multiplayer",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 6 hours, Main + Extra - N/A",
        "internetRequired": "Yes for multiplayer",
        "xboxLiveRequired": "Yes",
        "metacriticScore": 73,
        "releaseDate": "20 Nov 2018",
        "publisher": "EA",
        "countryOfOrigin": "Sweden",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/fb1MR85XFOc?si=a_zCqlxe7sYF_FkE",
        "about": "Battlefield V for Xbox Series X includes all post-launch content and enhancements, delivering the complete WWII experience.",
        "image": "https://images-cdn.ubuy.co.in/64c6b576deff4109c838d467-battlefield-v-xbox-one.jpg",
        "faqs": [
            {
                "question": "Does it have a battle royale?",
                "answer": "Yes, Firestorm mode is included."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, improved framerate."
            },
            {
                "question": "Is there cross-play?",
                "answer": "No, only same-platform matchmaking."
            },
            {
                "question": "Does it have a campaign?",
                "answer": "Yes, War Stories single-player missions."
            }
        ],
        "similarProducts": [
            {
                "id": "23",
                "name": "Battlefield 2042 (Xbox Series X Edition)",
                "price": 2799,
                "image": "https://hgworld.in/wp-content/uploads/2021/11/xbox-one-vattek2042.png"
            },
            {
                "id": "28",
                "name": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
            },
            {
                "id": "11",
                "name": "Far Cry 6 (Xbox Series X Edition)",
                "price": 1599,
                "image": "https://a.media-amazon.com/images/I/61EzxJfMzgL._SL1125_.jpg"
            }
        ]
    },
    {
        "id": "25",
        "title": "Crickets (Xbox Series X Edition)",
        "developer": "Big Ant Studios",
        "price": 4699,
        "description": "Experience authentic cricket gameplay with all formats, teams, and stadiums in this officially licensed cricket simulation for Xbox Series X.",
        "gameType": "Sports",
        "genre": "Sports",
        "gameplayHours": "N/A",
        "internetRequired": "Yes for online",
        "xboxLiveRequired": "Yes",
        "metacriticScore": 72,
        "releaseDate": "05 Apr 2023",
        "publisher": "Nacon",
        "countryOfOrigin": "Australia",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "3+",
        "trailerVideo": "https://youtu.be/ZobU-Ka6K00?si=iv3lrPqv6vrX9cXV",
        "about": "Crickets for Xbox Series X delivers the most authentic cricket experience with realistic physics, official teams, and multiple game modes.",
        "image": "https://a.media-amazon.com/images/I/81X7qCWLrNL._SX679_.jpg",
        "faqs": [
            {
                "question": "Is this officially licensed?",
                "answer": "Yes, with official teams and competitions."
            },
            {
                "question": "What formats are included?",
                "answer": "Test, ODI, T20 and more."
            },
            {
                "question": "Does it have career mode?",
                "answer": "Yes, with player progression."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, improved visuals."
            }
        ],
        "similarProducts": [
            {
                "id": "14",
                "name": "FIFA 23 (Xbox Series X Edition)",
                "price": 2099,
                "image": "https://a.media-amazon.com/images/I/813FuI3y8zL._SX679_.jpg"
            },
            {
                "id": "26",
                "name": "Forza Horizon 5 (Xbox Series X Edition)",
                "price": 3699,
                "image": "https://a.media-amazon.com/images/I/71xxm98aRUL._SX522_.jpg"
            },
            {
                "id": "27",
                "name": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "26",
        "title": "Forza Horizon 5 (Xbox Series X Edition)",
        "developer": "Playground Games",
        "price": 3699,
        "description": "Explore vibrant landscapes of Mexico in this open-world racing masterpiece, featuring hundreds of cars and enhanced visuals for Xbox Series X.",
        "gameType": "Racing",
        "genre": "Racing",
        "gameplayHours": "Main Story - 20 hours, Main + Extra - 100+ hours",
        "internetRequired": "No",
        "xboxLiveRequired": "Yes for online",
        "metacriticScore": 92,
        "releaseDate": "09 Nov 2021",
        "publisher": "Xbox Game Studios",
        "countryOfOrigin": "UK",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "3+",
        "trailerVideo": "https://youtu.be/FYH9n37B7Yw?si=gnQTAlLoijKavBjn",
        "about": "Forza Horizon 5 for Xbox Series X delivers stunning 4K visuals at 60fps, with ray tracing in Forzavista and reduced load times.",
        "image": "https://a.media-amazon.com/images/I/71xxm98aRUL._SX522_.jpg",
        "faqs": [
            {
                "question": "Is this on Game Pass?",
                "answer": "Yes, available day one."
            },
            {
                "question": "How many cars?",
                "answer": "Over 500 at launch."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K/60fps, ray tracing, faster loading."
            },
            {
                "question": "Does it have cross-play?",
                "answer": "Yes, with Xbox One and PC."
            }
        ],
        "similarProducts": [
            {
                "id": "14",
                "name": "FIFA 23 (Xbox Series X Edition)",
                "price": 2099,
                "image": "https://a.media-amazon.com/images/I/813FuI3y8zL._SX679_.jpg"
            },
            {
                "id": "25",
                "name": "Crickets (Xbox Series X Edition)",
                "price": 4699,
                "image": "https://a.media-amazon.com/images/I/81X7qCWLrNL._SX679_.jpg"
            },
            {
                "id": "27",
                "name": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg"
            }
        ]
    },
    {
        "id": "27",
        "title": "Call of Duty: Black Ops 6 (Xbox Series X Edition)",
        "developer": "Treyarch",
        "price": 4999,
        "description": "The next chapter in the Black Ops series delivers a mind-bending narrative, signature multiplayer, and round-based zombies, optimized for Xbox Series X.",
        "gameType": "Multiplayer",
        "genre": "First-Person Shooter",
        "gameplayHours": "Main Story - 8 hours, Main + Extra - N/A",
        "internetRequired": "Yes",
        "xboxLiveRequired": "Yes",
        "metacriticScore": 0,
        "releaseDate": "25 Oct 2024",
        "publisher": "Activision",
        "countryOfOrigin": "USA",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/h0uxvKUjsj4?si=B6wV10cz-d1iaIgu",
        "about": "Call of Duty: Black Ops 6 for Xbox Series X features cutting-edge visuals, 120fps multiplayer, and all the signature modes the series is known for.",
        "image": "https://a.media-amazon.com/images/I/81TRSZ5B4vL._SY879_.jpg",
        "faqs": [
            {
                "question": "Will it be on Game Pass?",
                "answer": "Yes, day one on Game Pass."
            },
            {
                "question": "Does it have zombies?",
                "answer": "Yes, round-based zombies returns."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K, 120fps, ray tracing support."
            },
            {
                "question": "Is there a beta?",
                "answer": "Yes, typically before launch."
            }
        ],
        "similarProducts": [
            {
                "id": "23",
                "name": "Battlefield 2042 (Xbox Series X Edition)",
                "price": 2799,
                "image": "https://hgworld.in/wp-content/uploads/2021/11/xbox-one-vattek2042.png"
            },
            {
                "id": "24",
                "name": "Battlefield V (Xbox Series X Edition)",
                "price": 3199,
                "image": "https://images-cdn.ubuy.co.in/64c6b576deff4109c838d467-battlefield-v-xbox-one.jpg"
            },
            {
                "id": "11",
                "name": "Far Cry 6 (Xbox Series X Edition)",
                "price": 1599,
                "image": "https://a.media-amazon.com/images/I/61EzxJfMzgL._SL1125_.jpg"
            }
        ]
    },
    {
        "id": "28",
        "title": "Watch Dogs 2 (Xbox Series X Edition)",
        "developer": "Ubisoft Montreal",
        "price": 5699,
        "description": "Hack the city of San Francisco as Marcus Holloway in this open-world action game, now enhanced for Xbox Series X with 4K visuals and improved performance.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 20 hours, Main + Extra - 45 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "Yes for online",
        "metacriticScore": 82,
        "releaseDate": "15 Nov 2016",
        "publisher": "Ubisoft",
        "countryOfOrigin": "Canada",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/hh9x4NqW0Dw?si=7QuOJvGS55ylwsaG",
        "about": "Watch Dogs 2 for Xbox Series X delivers the complete hacker experience with all DLC included and enhanced visuals for next-gen consoles.",
        "image": "https://a.media-amazon.com/images/I/91T9BAXVnFL._SY879_.jpg",
        "faqs": [
            {
                "question": "Is this a remaster?",
                "answer": "No, it's the original game with Series X enhancements."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "Yes, cooperative and competitive modes."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, improved textures and framerate."
            },
            {
                "question": "Is San Francisco open-world?",
                "answer": "Yes, a large recreation of the Bay Area."
            }
        ],
        "similarProducts": [
            {
                "id": "3",
                "name": "GTA 5 (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/91sGvkrMZmL._SX679_.jpg"
            },
            {
                "id": "2",
                "name": "Mafia 3 (Xbox Series X Edition)",
                "price": 5399,
                "image": "https://a.media-amazon.com/images/I/81PPJp12iwL._SX679_.jpg"
            },
            {
                "id": "13",
                "name": "Assassin's Creed Syndicate (Xbox Series X Edition)",
                "price": 5399,
                "image": "https://a.media-amazon.com/images/I/813txKiS9kL._SX522_.jpg"
            }
        ]
    },
    {
        "id": "29",
        "title": "The Outer Worlds 2 (Xbox Series X Edition)",
        "developer": "Obsidian Entertainment",
        "price": 4699,
        "description": "Explore new star systems in this sci-fi RPG sequel from the creators of Fallout: New Vegas, featuring enhanced visuals and gameplay for Xbox Series X.",
        "gameType": "Campaign",
        "genre": "RPG",
        "gameplayHours": "Main Story - 25 hours, Main + Extra - 50 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 0,
        "releaseDate": "TBA 2025",
        "publisher": "Xbox Game Studios",
        "countryOfOrigin": "USA",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "18+",
        "trailerVideo": "https://youtu.be/ClhDyC0ZECs?si=u56jzFxQ00GX8L19",
        "about": "The Outer Worlds 2 expands on the original's RPG systems with new worlds, factions, and next-gen visuals exclusive to Xbox Series X.",
        "image": "https://a.media-amazon.com/images/I/81xYUtq0rcL._SX522_.jpg",
        "faqs": [
            {
                "question": "Is this Xbox exclusive?",
                "answer": "Yes, published by Xbox Game Studios."
            },
            {
                "question": "Will it be on Game Pass?",
                "answer": "Yes, available day one."
            },
            {
                "question": "Is it connected to first game?",
                "answer": "Same universe, new story and characters."
            },
            {
                "question": "Does it have character creation?",
                "answer": "Yes, similar to the first game."
            }
        ],
        "similarProducts": [
            {
                "id": "1",
                "name": "Cyberpunk 2077: Phantom Liberty (Xbox Series X Edition)",
                "price": 4599,
                "image": "https://a.media-amazon.com/images/I/819bg+506sL._SY879_.jpg"
            },
            {
                "id": "8",
                "name": "The Witcher 3 (Xbox Series X Edition)",
                "price": 5599,
                "image": "https://i.ebayimg.com/images/g/0KEAAOSwgJ5hYVIZ/s-l1600.webp"
            },
            {
                "id": "7",
                "name": "Fable Reimagined (Xbox Series X Edition)",
                "price": 4999,
                "image": "https://a.media-amazon.com/images/I/91VQbs2RLFL._SY679_.jpg"
            }
        ]
    },
    {
        "id": "30",
        "title": "Star Wars Jedi: Fallen Order (Xbox Series X Edition)",
        "developer": "Respawn Entertainment",
        "price": 5999,
        "description": "Play as Cal Kestis, a young Jedi Padawan surviving Order 66, in this story-driven action game enhanced for Xbox Series X with 4K visuals and faster loading.",
        "gameType": "Campaign",
        "genre": "Action/Adventure",
        "gameplayHours": "Main Story - 17 hours, Main + Extra - 30 hours",
        "internetRequired": "No",
        "xboxLiveRequired": "No",
        "metacriticScore": 81,
        "releaseDate": "15 Nov 2019",
        "publisher": "EA",
        "countryOfOrigin": "USA",
        "platform": [
            "Xbox Series X"
        ],
        "pegiRating": "16+",
        "trailerVideo": "https://youtu.be/0GLbwkfhYZk?si=qH5cmfUXlqfBp4HL",
        "about": "Star Wars Jedi: Fallen Order for Xbox Series X delivers the complete Jedi experience with all DLC included and next-gen visual enhancements.",
        "image": "https://a.media-amazon.com/images/I/81cCRix0sWL._SL1500_.jpg",
        "faqs": [
            {
                "question": "Is this a free upgrade?",
                "answer": "Yes, for owners of the original game."
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's single-player only."
            },
            {
                "question": "What are Series X enhancements?",
                "answer": "4K resolution, 60fps, faster loading."
            },
            {
                "question": "Is it canon to Star Wars?",
                "answer": "Yes, it's an official Lucasfilm production."
            }
        ],
        "similarProducts": [
            {
                "id": "10",
                "name": "Star Wars: Eclipse (Xbox Series X Edition)",
                "price": 5199,
                "image": "https://image.coolblue.nl/max/788xauto/products/1686526"
            },
            {
                "id": "4",
                "name": "Alan Wake 2 (Xbox Series X Edition)",
                "price": 4199,
                "image": "https://a.media-amazon.com/images/I/81UcQdxgI0L._SY679_.jpg"
            },
            {
                "id": "6",
                "name": "Hellblade II: Senua's Saga (Xbox Series X Edition)",
                "price": 4799,
                "image": "https://zamve.com/wp-content/uploads/2024/04/Senuas-Saga-Hellblade-2-Xbox-One-Xbox-Series-XS-Digital-or-Physical-Game-from-zamve.com_.jpg"
            }
        ]
    }
]


async function insertXboxXGames() {
    try {
        // clear data from the database
        await XboxXGames.deleteMany({});
        await XboxXDetails.deleteMany({});

        // insert Xbox X games data
        const result = await XboxXGames.insertMany(xboxXGamesData);
        const resultDetails = await XboxXDetails.insertMany(xboxXDetailsGamesData);

        console.log("Xbox X Games and Details inserted successfully:", result.length, resultDetails.length);
    }
    catch(error){
        console.error("Error inserting Xbox X Games and Details:", error);
    }
}

async function main(){
    try{
        if(!process.env.MONGO_URI){
            throw new Error("MONGODB_URI is not defined");
        }
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
        await insertXboxXGames();
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
    console.log("Script completed successfully");
    process.exit(0);
}

main().then(()=>{
    console.log("All operations completed successfully");
}).catch((error)=>{
    console.error("An error occurred during the script execution:", error);
    process.exit(1);
});