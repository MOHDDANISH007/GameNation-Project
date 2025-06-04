import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });

import Products from '../models/console/console.model.js'; // Ensure .js extension
import ProductDetails from '../models/console/console_detail.model.js';

const productsData = [
    {
        "Type": "Console",
        "product_id": 1,
        "console_name": "PlayStation 5 Standard Edition",
        "price_inr": 49990,
        "images_by_color": {
            "White": "https://a.media-amazon.com/images/I/51BGH9oKKIL._SL1000_.jpg",
            "Black": "https://zozila.com/wp-content/uploads/2023/09/Untitled-design.png"
        }
    },
    {
        "Type": "Console",
        "product_id": 2,
        "console_name": "PlayStation 5 Digital Edition",
        "price_inr": 39990,
        "images_by_color": {
            "White": "https://a.media-amazon.com/images/I/41c+1Roq2aL._SX679_.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 3,
        "console_name": "PlayStation 5 Slim",
        "price_inr": 42990,
        "images_by_color": {
            "White": "https://a.media-amazon.com/images/I/41c+1Roq2aL._SX679_.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 4,
        "console_name": "PlayStation 5 Pro",
        "price_inr": 54990,
        "images_by_color": {
            "White": "https://zozila.com/wp-content/uploads/2024/11/pro-2-TB.jpg",
            "Black": "https://media.direct.playstation.com/is/image/sierialto/digital-console-cover-ps5-midnight-black-standing-front-hero-1?$Background_Large$"
        }
    },
    {
        "Type": "Console",
        "product_id": 5,
        "console_name": "PlayStation 4",
        "price_inr": 32990,
        "images_by_color": {
            "Jet Black": "https://images-cdn.ubuy.co.in/67035e2a633ed700d62eb9c6-sony-playstation-4-pro-console-1tb-jet.jpg",
            "Glacier White": "https://images-cdn.ubuy.co.in/667aadfedd50d91ca778f0f6-pre-owned-sony-playstation-4-pro-glacier.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 6,
        "console_name": "PlayStation 4 Slim",
        "price_inr": 30990,
        "images_by_color": {
            "Jet Black": "https://a.media-amazon.com/images/I/71M4SBulbJL._SL1500_.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 7,
        "console_name": "PlayStation 4 Pro",
        "price_inr": 37990,
        "images_by_color": {
            "Jet Black": "https://www.sony.co.in/image/83e724c6b5df327fc96f9c05d3ccc2ce?fmt=jpeg&wid=600&qlt=85",
            "White": "https://5.imimg.com/data5/SELLER/Default/2023/9/344937549/UU/KP/BT/198348429/brand-new-sony-playstation-4-ps4-pro-1tb-glacier-white-discountinued-1000x1000.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 8,
        "console_name": "Xbox One",
        "price_inr": 28990,
        "images_by_color": {
            "White": "https://m.media-amazon.com/images/I/612wQCy8x+L._SL1000_.jpg",
            "Black": "https://m.media-amazon.com/images/I/51wHpKXVzxL._AC_SX679_.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 9,
        "console_name": "Xbox One S",
        "price_inr": 24990,
        "images_by_color": {
            "White": "https://images-cdn.ubuy.co.in/64eece20aa759d37cc28a73e-microsoft-xbox-one-s-500gb-white.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 10,
        "console_name": "Xbox One X",
        "price_inr": 34990,
        "images_by_color": {
            "Black": "https://a.media-amazon.com/images/I/61RkJyhvV+L._SL1000_.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 11,
        "console_name": "Xbox Series X",
        "price_inr": 52990,
        "images_by_color": {
            "Matte Black": "https://a.media-amazon.com/images/I/61-jjE67uqL._SL1500_.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 12,
        "console_name": "Xbox Series S",
        "price_inr": 34990,
        "images_by_color": {
            "White": "https://images-cdn.ubuy.co.in/64eece20aa759d37cc28a73e-microsoft-xbox-one-s-500gb-white.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 13,
        "console_name": "PS5 DualSense Wireless Controller - White",
        "price_inr": 5749,
        "images_by_color": {
            "White": "https://a.media-amazon.com/images/I/61Q1Pa4X4-L._SL1500_.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 14,
        "console_name": "PS5 DualSense Wireless Controller - Midnight Black",
        "price_inr": 5899,
        "images_by_color": {
            "Black": "https://shopatsc.com/cdn/shop/products/DUALSENSE_MIDNIGHTBLACK_01_PR_RGB_WithNotice_1024x1024@2x.jpg?v=1622802764"
        }
    },
    {
        "Type": "Console",
        "product_id": 15,
        "console_name": "PS5 DualSense Wireless Controller - Starlight Blue",
        "price_inr": 6199,
        "images_by_color": {
            "Starlight Blue": "https://m.media-amazon.com/images/I/61x3P0RNrsL.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 16,
        "console_name": "PS5 DualSense Wireless Controller - Chroma Teal",
        "price_inr": 6607,
        "images_by_color": {
            "Chroma Teal": "https://m.media-amazon.com/images/I/417n9klq4NL.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 17,
        "console_name": "PS4 DualShock 4 Wireless Controller - Jet Black",
        "price_inr": 4499,
        "images_by_color": {
            "Jet Black": "https://a.media-amazon.com/images/I/41qfg+ISiiL.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 18,
        "console_name": "PS4 DualShock 4 Wireless Controller - Glacier White",
        "price_inr": 4499,
        "images_by_color": {
            "Glacier White": "https://m.media-amazon.com/images/I/71J6h1x4UfL.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 19,
        "console_name": "Xbox Core Wireless Controller - Carbon Black",
        "price_inr": 5490,
        "images_by_color": {
            "Carbon Black": "https://m.media-amazon.com/images/I/61YNiiJizXL.jpg"
        }
    },
    {
        "Type": "Console",
        "product_id": 20,
        "console_name": "Xbox Core Wireless Controller - Electric Volt",
        "price_inr": 6590,
        "images_by_color": {
            "Electric Volt": "https://m.media-amazon.com/images/I/511p8oS7pPL.jpg"
        }
    }
]

const productsDetailsData = [
    {
        "product_id": 1,
        "product_name": "PlayStation 5 Standard Edition",
        "current_price": 49990,
        "original_price": 49990,
        "discount": "0%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery Available",
        "description": {
            "overview": "The ultimate PlayStation experience with ultra-high speed SSD, immersive controller feedback, and stunning graphics.",
            "features": [
                {
                    "title": "Lightning Fast Loading",
                    "content": "Near instant load times with custom SSD"
                },
                {
                    "title": "4K Gaming",
                    "content": "Stunning visuals at up to 120fps"
                },
                {
                    "title": "Tempest 3D Audio",
                    "content": "Immersive spatial sound technology"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "DualSense Controller",
            "HDMI Cable",
            "Power Cable",
            "Stand"
        ],
        "specifications": {
            "CPU": "AMD Ryzen Zen 2",
            "GPU": "AMD Radeon RDNA 2",
            "Memory": "16GB GDDR6",
            "Storage": "825GB NVMe SSD",
            "Dimensions": "390 x 104 x 260 mm"
        },
        "selling_points": [
            {
                "icon": "⚡",
                "title": "Fast Loading",
                "description": "Ultra-high speed SSD"
            },
            {
                "icon": "🎮",
                "title": "Immersive",
                "description": "Haptic feedback controllers"
            },
            {
                "icon": "👁️",
                "title": "Stunning",
                "description": "4K/120fps gaming"
            }
        ],
        "faqs": [
            {
                "question": "Does it include games?",
                "answer": "No games included in base package"
            },
            {
                "question": "PS4 compatibility?",
                "answer": "Yes, most PS4 games work"
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
            }
        ],
        "media": {
            "images_by_color": {
                "White": "https://a.media-amazon.com/images/I/51BGH9oKKIL._SL1000_.jpg",
                "Black": "https://zozila.com/wp-content/uploads/2023/09/Untitled-design.png"
            },
            "video": "https://youtu.be/1BU4VXofbQk?si=Vsr7NeAfjmpEzWP3"
        }
    },
    {
        "product_id": 2,
        "product_name": "PlayStation 5 Digital Edition",
        "current_price": 39990,
        "original_price": 39990,
        "discount": "0%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery Available",
        "description": {
            "overview": "All-digital PS5 console with identical performance to standard edition, without disc drive.",
            "features": [
                {
                    "title": "Digital Library",
                    "content": "Access your entire digital collection"
                },
                {
                    "title": "Slimmer Design",
                    "content": "More compact form factor"
                },
                {
                    "title": "Same Power",
                    "content": "Identical specs to standard PS5"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "DualSense Controller",
            "HDMI Cable",
            "Power Cable",
            "Stand"
        ],
        "specifications": {
            "CPU": "AMD Ryzen Zen 2",
            "GPU": "AMD Radeon RDNA 2",
            "Memory": "16GB GDDR6",
            "Storage": "825GB NVMe SSD",
            "Dimensions": "390 x 92 x 260 mm"
        },
        "selling_points": [
            {
                "icon": "💰",
                "title": "Value",
                "description": "More affordable option"
            },
            {
                "icon": "📱",
                "title": "Sleek",
                "description": "Disc-free design"
            },
            {
                "icon": "⚡",
                "title": "Fast",
                "description": "Same SSD performance"
            }
        ],
        "faqs": [
            {
                "question": "Can I add disc drive?",
                "answer": "No, this model is digital-only"
            },
            {
                "question": "Game sharing?",
                "answer": "Supports digital game sharing"
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            },
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
            }
        ],
        "media": {
            "images_by_color": {
                "White": "https://a.media-amazon.com/images/I/41c+1Roq2aL._SX679_.jpg"
            },
            "video": "https://youtu.be/RkC0l4iekYo?si=0iTtY2cylZiyOgmr"
        }
    },
    {
        "product_id": 3,
        "product_name": "PlayStation 5 Slim",
        "current_price": 42990,
        "original_price": 44990,
        "discount": "4%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery Available",
        "description": {
            "overview": "Redesigned PS5 with 30% smaller volume and 1TB storage, maintaining all next-gen features.",
            "features": [
                {
                    "title": "Compact Size",
                    "content": "30% smaller than original"
                },
                {
                    "title": "More Storage",
                    "content": "1TB built-in SSD"
                },
                {
                    "title": "Modular Design",
                    "content": "Optional disc drive for digital edition"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "DualSense Controller",
            "HDMI Cable",
            "Power Cable",
            "Stand"
        ],
        "specifications": {
            "CPU": "AMD Ryzen Zen 2",
            "GPU": "AMD Radeon RDNA 2",
            "Memory": "16GB GDDR6",
            "Storage": "1TB NVMe SSD",
            "Dimensions": "358 x 96 x 216 mm"
        },
        "selling_points": [
            {
                "icon": "📏",
                "title": "Slimmer",
                "description": "More compact design"
            },
            {
                "icon": "💾",
                "title": "Storage",
                "description": "1TB built-in SSD"
            },
            {
                "icon": "🔄",
                "title": "Flexible",
                "description": "Optional disc drive"
            }
        ],
        "faqs": [
            {
                "question": "Performance difference?",
                "answer": "Identical to original PS5"
            },
            {
                "question": "Cooling?",
                "answer": "Improved cooling system"
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            },
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
            }
        ],
        "media": {
            "images_by_color": {
                "White": "https://a.media-amazon.com/images/I/41c+1Roq2aL._SX679_.jpg"
            },
            "video": "https://www.youtube.com/watch?v=1BU4VXofbQk"
        }
    },
    {
        "product_id": 4,
        "product_name": "PlayStation 5 Pro",
        "current_price": 54990,
        "original_price": 54990,
        "discount": "0%",
        "availability": "Coming Soon",
        "delivery_note": "Pre-order Now",
        "description": {
            "overview": "Premium PS5 model with enhanced graphics performance and advanced features for discerning gamers.",
            "features": [
                {
                    "title": "8K Gaming",
                    "content": "Native 8K output support"
                },
                {
                    "title": "Enhanced GPU",
                    "content": "More powerful graphics processor"
                },
                {
                    "title": "Advanced Cooling",
                    "content": "Improved thermal solution"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "DualSense Controller",
            "HDMI 2.1 Cable",
            "Power Cable",
            "Vertical Stand"
        ],
        "specifications": {
            "CPU": "AMD Ryzen Zen 2 (Enhanced)",
            "GPU": "AMD Radeon RDNA 3",
            "Memory": "16GB GDDR6",
            "Storage": "1TB NVMe SSD",
            "Dimensions": "390 x 110 x 260 mm"
        },
        "selling_points": [
            {
                "icon": "👑",
                "title": "Premium",
                "description": "Highest performance PS5"
            },
            {
                "icon": "🖥️",
                "title": "8K Ready",
                "description": "Future-proof resolution"
            },
            {
                "icon": "❄️",
                "title": "Cooling",
                "description": "Advanced thermal design"
            }
        ],
        "faqs": [
            {
                "question": "Release date?",
                "answer": "Available for pre-order now"
            },
            {
                "question": "Performance boost?",
                "answer": "Significantly more powerful GPU"
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            },
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
            }
        ],
        "media": {
            "images_by_color": {
                "White": "https://zozila.com/wp-content/uploads/2024/11/pro-2-TB.jpg",
                "Black": "https://media.direct.playstation.com/is/image/sierialto/digital-console-cover-ps5-midnight-black-standing-front-hero-1?$Background_Large$"
            },
            "video": "https://youtu.be/6HaRMiTfvks?si=m7rA28ujifG7lBOD"
        }
    },
    {
        "product_id": 5,
        "product_name": "PlayStation 4",
        "current_price": 32990,
        "original_price": 39990,
        "discount": "18%",
        "availability": "Limited Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "The legendary PlayStation 4 console that revolutionized gaming with its powerful hardware and exclusive titles.",
            "features": [
                {
                    "title": "Full HD Gaming",
                    "content": "1080p resolution gaming"
                },
                {
                    "title": "Vast Library",
                    "content": "Thousands of PS4 games available"
                },
                {
                    "title": "Share Play",
                    "content": "Play with friends remotely"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "DualShock 4 Controller",
            "HDMI Cable",
            "Power Cable",
            "USB Cable"
        ],
        "specifications": {
            "CPU": "AMD Jaguar 8-core",
            "GPU": "AMD GCN, 1.84 TFLOPS",
            "Memory": "8GB GDDR5",
            "Storage": "500GB/1TB HDD",
            "Dimensions": "275 x 53 x 305 mm"
        },
        "selling_points": [
            {
                "icon": "💰",
                "title": "Value",
                "description": "Affordable entry to PlayStation"
            },
            {
                "icon": "🎮",
                "title": "Library",
                "description": "Huge game selection"
            },
            {
                "icon": "👥",
                "title": "Social",
                "description": "Share Play feature"
            }
        ],
        "faqs": [
            {
                "question": "PS5 compatibility?",
                "answer": "Most PS4 games work on PS5"
            },
            {
                "question": "4K support?",
                "answer": "No native 4K, some games support checkerboarding"
            },
            {
                "question": "Is PS Plus required?",
                "answer": "No, it's fully playable offline."
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            }
        ],
        "media": {
            "images_by_color": {
                "Jet Black": "https://images-cdn.ubuy.co.in/67035e2a633ed700d62eb9c6-sony-playstation-4-pro-console-1tb-jet.jpg",
                "Glacier White": "https://images-cdn.ubuy.co.in/667aadfedd50d91ca778f0f6-pre-owned-sony-playstation-4-pro-glacier.jpg"
            },
            "video": "https://youtu.be/Jw8HCFZkBds?si=6Lkj3iSpWBkAtyiI"
        }
    },
    {
        "product_id": 6,
        "product_name": "PlayStation 4 Slim",
        "current_price": 30990,
        "original_price": 32990,
        "discount": "6%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Slimmer and lighter PS4 model with the same great gaming experience in a more compact design.",
            "features": [
                {
                    "title": "Compact Design",
                    "content": "30% smaller than original PS4"
                },
                {
                    "title": "Quieter Operation",
                    "content": "Improved cooling system"
                },
                {
                    "title": "Energy Efficient",
                    "content": "Lower power consumption"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "DualShock 4 Controller",
            "HDMI Cable",
            "Power Cable",
            "USB Cable"
        ],
        "specifications": {
            "CPU": "AMD Jaguar 8-core",
            "GPU": "AMD GCN, 1.84 TFLOPS",
            "Memory": "8GB GDDR5",
            "Storage": "500GB/1TB HDD",
            "Dimensions": "265 x 39 x 288 mm"
        },
        "selling_points": [
            {
                "icon": "📏",
                "title": "Compact",
                "description": "Smaller footprint"
            },
            {
                "icon": "🔇",
                "title": "Quiet",
                "description": "Redesigned cooling"
            },
            {
                "icon": "💡",
                "title": "Efficient",
                "description": "Lower power use"
            }
        ],
        "faqs": [
            {
                "question": "Performance difference?",
                "answer": "Same as original PS4"
            },
            {
                "question": "HDR support?",
                "answer": "Yes, via software update"
            },
            {
                "question": "PC compatible?",
                "answer": "Yes, via Bluetooth or USB"
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            }
        ],
        "media": {
            "images_by_color": {
                "Jet Black": "https://a.media-amazon.com/images/I/71M4SBulbJL._SL1500_.jpg"
            },
            "video": "https://youtu.be/f4ALJgnDDkU?si=OsVgi6-Bv-0Dvh1T"
        }
    },
    {
        "product_id": 7,
        "product_name": "PlayStation 4 Pro",
        "current_price": 37990,
        "original_price": 39990,
        "discount": "5%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "High-performance PS4 model with 4K gaming and enhanced graphics for the ultimate PlayStation experience.",
            "features": [
                {
                    "title": "4K Gaming",
                    "content": "Native and checkerboard 4K support"
                },
                {
                    "title": "Boost Mode",
                    "content": "Improved performance for all games"
                },
                {
                    "title": "HDR Support",
                    "content": "Vibrant colors and contrast"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "DualShock 4 Controller",
            "HDMI Cable",
            "Power Cable",
            "USB Cable"
        ],
        "specifications": {
            "CPU": "AMD Jaguar 8-core (Enhanced)",
            "GPU": "AMD Polaris, 4.2 TFLOPS",
            "Memory": "8GB GDDR5",
            "Storage": "1TB HDD",
            "Dimensions": "295 x 55 x 327 mm"
        },
        "selling_points": [
            {
                "icon": "🖥️",
                "title": "4K",
                "description": "Stunning resolution"
            },
            {
                "icon": "⚡",
                "title": "Power",
                "description": "More than 2x GPU power"
            },
            {
                "icon": "🌈",
                "title": "HDR",
                "description": "Vibrant colors"
            }
        ],
        "faqs": [
            {
                "question": "Native 4K?",
                "answer": "Some games native, others checkerboard"
            },
            {
                "question": "PSVR improvements?",
                "answer": "Better image quality"
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            },
            {
                "question": "HDR support?",
                "answer": "Yes, via software update"
            }
        ],
        "media": {
            "images_by_color": {
                "Jet Black": "https://www.sony.co.in/image/83e724c6b5df327fc96f9c05d3ccc2ce?fmt=jpeg&wid=600&qlt=85",
                "White": "https://5.imimg.com/data5/SELLER/Default/2023/9/344937549/UU/KP/BT/198348429/brand-new-sony-playstation-4-ps4-pro-1tb-glacier-white-discountinued-1000x1000.jpg"
            },
            "video": "https://youtu.be/Hme5BhT52_U?si=MeYjxrqlcLicMzQS"
        }
    },
    {
        "product_id": 8,
        "product_name": "Xbox One",
        "current_price": 28990,
        "original_price": 34990,
        "discount": "17%",
        "availability": "Limited Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Microsoft's entertainment system that combines gaming with TV, movies and music in one device.",
            "features": [
                {
                    "title": "All-in-One",
                    "content": "Gaming, TV and entertainment"
                },
                {
                    "title": "Kinect Ready",
                    "content": "Motion and voice control"
                },
                {
                    "title": "Xbox Live",
                    "content": "Online multiplayer and services"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "Xbox Controller",
            "HDMI Cable",
            "Power Brick",
            "Headset"
        ],
        "specifications": {
            "CPU": "AMD Jaguar 8-core",
            "GPU": "AMD GCN, 1.31 TFLOPS",
            "Memory": "8GB DDR3",
            "Storage": "500GB HDD",
            "Dimensions": "333 x 274 x 79 mm"
        },
        "selling_points": [
            {
                "icon": "📺",
                "title": "Entertainment",
                "description": "More than just games"
            },
            {
                "icon": "🎤",
                "title": "Kinect",
                "description": "Voice/motion controls"
            },
            {
                "icon": "🌐",
                "title": "Online",
                "description": "Xbox Live services"
            }
        ],
        "faqs": [
            {
                "question": "Backwards compatible?",
                "answer": "Some Xbox 360 games supported"
            },
            {
                "question": "4K support?",
                "answer": "No native 4K gaming"
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
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
        "media": {
            "images_by_color": {
                "White": "https://m.media-amazon.com/images/I/612wQCy8x+L._SL1000_.jpg",
                "Black": "https://m.media-amazon.com/images/I/51wHpKXVzxL._AC_SX679_.jpg"
            },
            "video": "https://youtu.be/pEoZbXB78NI?si=pIV0XAqN3yWfF7__"
        }
    },
    {
        "product_id": 9,
        "product_name": "Xbox One S",
        "current_price": 24990,
        "original_price": 29990,
        "discount": "17%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Slimmer, more powerful Xbox One with HDR gaming and 4K media playback in a 40% smaller design.",
            "features": [
                {
                    "title": "4K Media",
                    "content": "Ultra HD Blu-ray and streaming"
                },
                {
                    "title": "HDR Gaming",
                    "content": "High dynamic range visuals"
                },
                {
                    "title": "Compact",
                    "content": "40% smaller than original"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "Xbox Wireless Controller",
            "HDMI Cable",
            "Power Cable"
        ],
        "specifications": {
            "CPU": "AMD Jaguar 8-core (Enhanced)",
            "GPU": "AMD GCN, 1.4 TFLOPS",
            "Memory": "8GB DDR3",
            "Storage": "500GB/1TB HDD",
            "Dimensions": "295 x 230 x 64 mm"
        },
        "selling_points": [
            {
                "icon": "📀",
                "title": "4K Blu-ray",
                "description": "Ultra HD playback"
            },
            {
                "icon": "🌈",
                "title": "HDR",
                "description": "Vibrant colors"
            },
            {
                "icon": "📏",
                "title": "Compact",
                "description": "Smaller design"
            }
        ],
        "faqs": [
            {
                "question": "4K gaming?",
                "answer": "Media only, games upscale to 4K"
            },
            {
                "question": "Power brick?",
                "answer": "Built-in power supply"
            },
            {
                "question": "Does it have multiplayer?",
                "answer": "No, it's a single-player campaign."
            },
            {
                "question": "Storage expansion?",
                "answer": "Supports same expansion card as Series X"
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            }
        ],
        "media": {
            "images_by_color": {
                "White": "https://images-cdn.ubuy.co.in/64eece20aa759d37cc28a73e-microsoft-xbox-one-s-500gb-white.jpg"
            },
            "video": "https://youtu.be/XuTwtOo88r8?si=iXkVSuW4gNy8ZPcL"
        }
    },
    {
        "product_id": 10,
        "product_name": "Xbox One X",
        "current_price": 34990,
        "original_price": 44990,
        "discount": "22%",
        "availability": "Limited Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "The world's most powerful console with true 4K gaming, enhanced graphics and faster load times.",
            "features": [
                {
                    "title": "Native 4K",
                    "content": "True 4K gaming resolution"
                },
                {
                    "title": "6 Teraflops",
                    "content": "Massive graphics power"
                },
                {
                    "title": "Enhanced Games",
                    "content": "Better textures and performance"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "Xbox Wireless Controller",
            "HDMI Cable",
            "Power Cable"
        ],
        "specifications": {
            "CPU": "AMD Jaguar 8-core (Custom)",
            "GPU": "AMD Polaris, 6 TFLOPS",
            "Memory": "12GB GDDR5",
            "Storage": "1TB HDD",
            "Dimensions": "300 x 240 x 60 mm"
        },
        "selling_points": [
            {
                "icon": "👑",
                "title": "Powerful",
                "description": "Most powerful console"
            },
            {
                "icon": "🖥️",
                "title": "4K",
                "description": "Native 4K gaming"
            },
            {
                "icon": "⚡",
                "title": "Performance",
                "description": "Enhanced games"
            }
        ],
        "faqs": [
            {
                "question": "Xbox Series X comparison?",
                "answer": "Series X is next-gen with better specs"
            },
            {
                "question": "Backwards compatible?",
                "answer": "Supports many Xbox 360 and original Xbox games"
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            },
            {
                "question": "Storage expansion?",
                "answer": "Supports same expansion card as Series X"
            }
        ],
        "media": {
            "images_by_color": {
                "Black": "https://a.media-amazon.com/images/I/61RkJyhvV+L._SL1000_.jpg"
            },
            "video": "https://youtu.be/g-gp-Voq6MQ?si=FUlvQJAkP41fsP7s"
        }
    },
    {
        "product_id": 11,
        "product_name": "Xbox Series X",
        "current_price": 52990,
        "original_price": 52990,
        "discount": "0%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Microsoft's next-gen powerhouse with 12 Teraflops of GPU performance, 4K gaming at 120fps, and lightning-fast load times.",
            "features": [
                {
                    "title": "12 Teraflops",
                    "content": "Massive graphics power"
                },
                {
                    "title": "Quick Resume",
                    "content": "Switch between multiple games instantly"
                },
                {
                    "title": "Smart Delivery",
                    "content": "Always play the best version of games"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "Xbox Wireless Controller",
            "HDMI 2.1 Cable",
            "Power Cable"
        ],
        "specifications": {
            "CPU": "AMD Zen 2 (8-core)",
            "GPU": "AMD RDNA 2, 12 TFLOPS",
            "Memory": "16GB GDDR6",
            "Storage": "1TB NVMe SSD",
            "Dimensions": "151 x 151 x 301 mm"
        },
        "selling_points": [
            {
                "icon": "⚡",
                "title": "Power",
                "description": "12 Teraflops GPU"
            },
            {
                "icon": "⏱️",
                "title": "Fast",
                "description": "Instant load times"
            },
            {
                "icon": "🔄",
                "title": "Smart",
                "description": "Smart Delivery"
            }
        ],
        "faqs": [
            {
                "question": "Backwards compatible?",
                "answer": "Plays all Xbox One, many 360 and original Xbox games"
            },
            {
                "question": "Expandable storage?",
                "answer": "Yes, with proprietary expansion card"
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            },
            {
                "question": "Storage expansion?",
                "answer": "Supports same expansion card as Series X"
            }
        ],
        "media": {
            "images_by_color": {
                "Matte Black": "https://a.media-amazon.com/images/I/61-jjE67uqL._SL1500_.jpg"
            },
            "video": "https://youtu.be/0tUqIHwHDEc?si=bYLfnznLtdtCjCtV"
        }
    },
    {
        "product_id": 12,
        "product_name": "Xbox Series S",
        "current_price": 34990,
        "original_price": 34990,
        "discount": "0%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Next-gen performance in the smallest Xbox ever, optimized for 1440p gaming with all-digital convenience.",
            "features": [
                {
                    "title": "1440p Gaming",
                    "content": "Up to 120fps at 1440p"
                },
                {
                    "title": "All-Digital",
                    "content": "Disc-free gaming"
                },
                {
                    "title": "Compact",
                    "content": "Smallest Xbox ever"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Console",
            "Xbox Wireless Controller",
            "HDMI 2.1 Cable",
            "Power Cable"
        ],
        "specifications": {
            "CPU": "AMD Zen 2 (8-core)",
            "GPU": "AMD RDNA 2, 4 TFLOPS",
            "Memory": "10GB GDDR6",
            "Storage": "512GB NVMe SSD",
            "Dimensions": "151 x 65 x 275 mm"
        },
        "selling_points": [
            {
                "icon": "💰",
                "title": "Value",
                "description": "Affordable next-gen"
            },
            {
                "icon": "📱",
                "title": "Compact",
                "description": "Small form factor"
            },
            {
                "icon": "⚡",
                "title": "Next-Gen",
                "description": "Same CPU as Series X"
            }
        ],
        "faqs": [
            {
                "question": "4K gaming?",
                "answer": "Media playback only, games upscale to 4K"
            },
            {
                "question": "Storage expansion?",
                "answer": "Supports same expansion card as Series X"
            },
            {
                "question": "Can I play solo?",
                "answer": "Yes, the campaign is fully playable solo."
            },
            {
                "question": "Is it open-world?",
                "answer": "Yes, it features a large open-world environment."
            },
            {
                "question": "Backwards compatible?",
                "answer": "Plays all Xbox One, many 360 and original Xbox games"
            }
        ],
        "media": {
            "images_by_color": {
                "White": "https://images-cdn.ubuy.co.in/64eece20aa759d37cc28a73e-microsoft-xbox-one-s-500gb-white.jpg"
            },
            "video": "https://youtu.be/KHLfCFMKxPg?si=PNVQc4MU4HphYYLt"
        }
    },
    {
        "product_id": 13,
        "product_name": "PS5 DualSense Wireless Controller - White",
        "current_price": 5749,
        "original_price": 5999,
        "discount": "4%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "The revolutionary PS5 controller with immersive haptic feedback, dynamic adaptive triggers and built-in microphone.",
            "features": [
                {
                    "title": "Haptic Feedback",
                    "content": "Feel physical sensations in games"
                },
                {
                    "title": "Adaptive Triggers",
                    "content": "Dynamic resistance in triggers"
                },
                {
                    "title": "Built-in Mic",
                    "content": "Chat without a headset"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Controller",
            "USB-C Cable"
        ],
        "specifications": {
            "Battery": "Built-in rechargeable",
            "Connectivity": "Bluetooth/USB-C",
            "Features": "Touchpad, motion sensors, create button",
            "Weight": "280g"
        },
        "selling_points": [
            {
                "icon": "👋",
                "title": "Haptics",
                "description": "Advanced vibration"
            },
            {
                "icon": "🎯",
                "title": "Triggers",
                "description": "Adaptive resistance"
            },
            {
                "icon": "🎙️",
                "title": "Mic",
                "description": "Built-in microphone"
            }
        ],
        "faqs": [
            {
                "question": "Battery life?",
                "answer": "Approximately 12-15 hours"
            },
            {
                "question": "PC compatible?",
                "answer": "Yes, with limited features"
            }
        ],
        "media": {
            "images_by_color": {
                "White": "https://a.media-amazon.com/images/I/61Q1Pa4X4-L._SL1500_.jpg"
            },
            "video": "https://youtu.be/SebzB8W3bVU?si=suOsUn5MtrWnkKLI"
        }
    },
    {
        "product_id": 14,
        "product_name": "PS5 DualSense Wireless Controller - Midnight Black",
        "current_price": 5899,
        "original_price": 5999,
        "discount": "2%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Sleek black version of the innovative PS5 controller with all the same advanced features.",
            "features": [
                {
                    "title": "Premium Finish",
                    "content": "Elegant dark color scheme"
                },
                {
                    "title": "Same Features",
                    "content": "All DualSense functionality"
                },
                {
                    "title": "Contrast Buttons",
                    "content": "White buttons for visibility"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Controller",
            "USB-C Cable"
        ],
        "specifications": {
            "Battery": "Built-in rechargeable",
            "Connectivity": "Bluetooth/USB-C",
            "Features": "Touchpad, motion sensors, create button",
            "Weight": "280g"
        },
        "selling_points": [
            {
                "icon": "⚫",
                "title": "Style",
                "description": "Sleek black design"
            },
            {
                "icon": "⚡",
                "title": "Features",
                "description": "All DualSense tech"
            },
            {
                "icon": "🎮",
                "title": "Comfort",
                "description": "Ergonomic shape"
            }
        ],
        "faqs": [
            {
                "question": "Different from white?",
                "answer": "Only color difference"
            },
            {
                "question": "Battery same?",
                "answer": "Identical battery performance"
            },
            {
                "question": "PC compatible?",
                "answer": "Yes, with limited features"
            },
            {
                "question": "Same as black?",
                "answer": "Identical except color"
            },
            {
                "question": "Does it have AI teammates?",
                "answer": "Yes, added in a post-launch update."
            }
        ],
        "media": {
            "images_by_color": {
                "Black": "https://shopatsc.com/cdn/shop/products/DUALSENSE_MIDNIGHTBLACK_01_PR_RGB_WithNotice_1024x1024@2x.jpg?v=1622802764"
            },
            "video": "https://youtu.be/FvLK66CFRH4?si=8y2B-fWgn9THbFQm"
        }
    },
    {
        "product_id": 15,
        "product_name": "PS5 DualSense Wireless Controller - Starlight Blue",
        "current_price": 6199,
        "original_price": 6199,
        "discount": "0%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Vibrant blue DualSense controller that brings cosmic style to your PS5 gaming sessions.",
            "features": [
                {
                    "title": "Cosmic Color",
                    "content": "Inspired by space exploration"
                },
                {
                    "title": "Full Features",
                    "content": "All DualSense functionality"
                },
                {
                    "title": "Unique Style",
                    "content": "Stand out from standard colors"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Controller",
            "USB-C Cable"
        ],
        "specifications": {
            "Battery": "Built-in rechargeable",
            "Connectivity": "Bluetooth/USB-C",
            "Features": "Touchpad, motion sensors, create button",
            "Weight": "280g"
        },
        "selling_points": [
            {
                "icon": "🔵",
                "title": "Color",
                "description": "Vibrant blue finish"
            },
            {
                "icon": "🌌",
                "title": "Theme",
                "description": "Space-inspired"
            },
            {
                "icon": "🎮",
                "title": "Performance",
                "description": "Same great controller"
            }
        ],
        "faqs": [
            {
                "question": "Limited edition?",
                "answer": "No, but may become unavailable"
            },
            {
                "question": "Texture same?",
                "answer": "Same feel as standard"
            },
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
            }
        ],
        "media": {
            "images_by_color": {
                "Starlight Blue": "https://m.media-amazon.com/images/I/61x3P0RNrsL.jpg"
            },
            "video": "https://youtu.be/WFDhXXMVcBo?si=CSlZi1OhccdEgQsd"
        }
    },
    {
        "product_id": 16,
        "product_name": "PS5 DualSense Wireless Controller - Chroma Teal",
        "current_price": 6607,
        "original_price": 6999,
        "discount": "6%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Striking teal-colored DualSense controller that adds vibrant personality to your gaming setup.",
            "features": [
                {
                    "title": "Bold Color",
                    "content": "Eye-catching teal finish"
                },
                {
                    "title": "Same Tech",
                    "content": "All DualSense features included"
                },
                {
                    "title": "Premium Feel",
                    "content": "High-quality materials"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Controller",
            "USB-C Cable"
        ],
        "specifications": {
            "Battery": "Built-in rechargeable",
            "Connectivity": "Bluetooth/USB-C",
            "Features": "Touchpad, motion sensors, create button",
            "Weight": "280g"
        },
        "selling_points": [
            {
                "icon": "🟢",
                "title": "Vibrant",
                "description": "Unique teal color"
            },
            {
                "icon": "⚡",
                "title": "Features",
                "description": "Full DualSense tech"
            },
            {
                "icon": "👌",
                "title": "Quality",
                "description": "Premium build"
            }
        ],
        "faqs": [
            {
                "question": "Special edition?",
                "answer": "Part of colors collection"
            },
            {
                "question": "Texture?",
                "answer": "Same as standard controller"
            },
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
            }
        ],
        "media": {
            "images_by_color": {
                "Chroma Teal": "https://m.media-amazon.com/images/I/417n9klq4NL.jpg"
            },
            "video": "https://youtu.be/7AKEgRMB8Jk?si=9DovpIDmupoj_OAJ"
        }
    },
    {
        "product_id": 17,
        "product_name": "PS4 DualShock 4 Wireless Controller - Jet Black",
        "current_price": 4499,
        "original_price": 4999,
        "discount": "10%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Classic PlayStation 4 controller with precise controls, built-in speaker and touch pad.",
            "features": [
                {
                    "title": "Precision Control",
                    "content": "Accurate analog sticks"
                },
                {
                    "title": "Built-in Speaker",
                    "content": "Additional game audio"
                },
                {
                    "title": "Touch Pad",
                    "content": "Innovative input surface"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Controller",
            "Micro-USB Cable"
        ],
        "specifications": {
            "Battery": "Built-in rechargeable",
            "Connectivity": "Bluetooth/USB",
            "Features": "Touchpad, light bar, 3.5mm jack",
            "Weight": "210g"
        },
        "selling_points": [
            {
                "icon": "⚫",
                "title": "Classic",
                "description": "Original PS4 color"
            },
            {
                "icon": "👌",
                "title": "Comfort",
                "description": "Ergonomic design"
            },
            {
                "icon": "🔄",
                "title": "Versatile",
                "description": "Works on PC too"
            }
        ],
        "faqs": [
            {
                "question": "PS5 compatible?",
                "answer": "Works with PS4 games on PS5"
            },
            {
                "question": "Battery life?",
                "answer": "Approximately 8 hours"
            },
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
            }
        ],
        "media": {
            "images_by_color": {
                "Jet Black": "https://a.media-amazon.com/images/I/41qfg+ISiiL.jpg"
            },
            "video": "https://youtu.be/PNrHVX7Y5qk?si=C96SFXvdLNQPU3pk"
        }
    },
    {
        "product_id": 18,
        "product_name": "PS4 DualShock 4 Wireless Controller - Glacier White",
        "current_price": 4499,
        "original_price": 4999,
        "discount": "10%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Sleek white version of the PS4 controller with all the same precision controls and features.",
            "features": [
                {
                    "title": "Light Color",
                    "content": "Bright white finish"
                },
                {
                    "title": "Same Features",
                    "content": "All DualShock 4 functionality"
                },
                {
                    "title": "Light Bar",
                    "content": "Dynamic color indicators"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Controller",
            "Micro-USB Cable"
        ],
        "specifications": {
            "Battery": "Built-in rechargeable",
            "Connectivity": "Bluetooth/USB",
            "Features": "Touchpad, light bar, 3.5mm jack",
            "Weight": "210g"
        },
        "selling_points": [
            {
                "icon": "⚪",
                "title": "Style",
                "description": "Clean white look"
            },
            {
                "icon": "🌈",
                "title": "Light Bar",
                "description": "Colorful indicators"
            },
            {
                "icon": "🎮",
                "title": "Reliable",
                "description": "Proven PS4 controller"
            }
        ],
        "faqs": [
            {
                "question": "Dirt visible?",
                "answer": "May show dirt more than dark colors"
            },
            {
                "question": "Same as black?",
                "answer": "Identical except color"
            },
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
            }
        ],
        "media": {
            "images_by_color": {
                "Glacier White": "https://m.media-amazon.com/images/I/71J6h1x4UfL.jpg"
            },
            "video": "https://youtu.be/PNrHVX7Y5qk?si=a0PsTwNPsLIuaIoW"
        }
    },
    {
        "product_id": 19,
        "product_name": "Xbox Core Wireless Controller - Carbon Black",
        "current_price": 5490,
        "original_price": 5999,
        "discount": "8%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "The refined Xbox wireless controller with enhanced comfort, textured grip and Bluetooth connectivity.",
            "features": [
                {
                    "title": "Improved Ergonomics",
                    "content": "More comfortable grip"
                },
                {
                    "title": "Textured Surfaces",
                    "content": "Better hold during gameplay"
                },
                {
                    "title": "Bluetooth",
                    "content": "Connect to multiple devices"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Controller",
            "AA Batteries"
        ],
        "specifications": {
            "Battery": "2x AA (included) or rechargeable",
            "Connectivity": "Bluetooth/Xbox Wireless",
            "Features": "3.5mm jack, share button",
            "Weight": "287g"
        },
        "selling_points": [
            {
                "icon": "⚫",
                "title": "Classic",
                "description": "Signature Xbox design"
            },
            {
                "icon": "👌",
                "title": "Comfort",
                "description": "Enhanced ergonomics"
            },
            {
                "icon": "🔗",
                "title": "Connectivity",
                "description": "Bluetooth support"
            }
        ],
        "faqs": [
            {
                "question": "Battery life?",
                "answer": "Approximately 30-40 hours"
            },
            {
                "question": "PC compatible?",
                "answer": "Yes, via Bluetooth or USB"
            },
            {
                "question": "Same as black?",
                "answer": "Identical except color"
            },
            {
                "question": "Different from white?",
                "answer": "Only color difference"
            },
            {
                "question": "Battery same?",
                "answer": "Identical battery performance"
            }
        ],
        "media": {
            "images_by_color": {
                "Carbon Black": "https://m.media-amazon.com/images/I/61YNiiJizXL.jpg"
            },
            "video": "https://youtu.be/XU9o5Dn9Wgw?si=Bl-Tsm-_sqYwjlZ-"
        }
    },
    {
        "product_id": 20,
        "product_name": "Xbox Core Wireless Controller - Electric Volt",
        "current_price": 6590,
        "original_price": 6999,
        "discount": "6%",
        "availability": "In Stock",
        "delivery_note": "Free Delivery",
        "description": {
            "overview": "Vibrant green Xbox controller with all the precision and comfort of the Core series in a bold color.",
            "features": [
                {
                    "title": "Striking Color",
                    "content": "Electric green finish"
                },
                {
                    "title": "Same Features",
                    "content": "Full Core controller functionality"
                },
                {
                    "title": "Hybrid D-pad",
                    "content": "Precise directional input"
                }
            ]
        },
        "warranty": {
            "duration": "1 year",
            "description": "Manufacturer warranty"
        },
        "included_items": [
            "Controller",
            "AA Batteries"
        ],
        "specifications": {
            "Battery": "2x AA (included) or rechargeable",
            "Connectivity": "Bluetooth/Xbox Wireless",
            "Features": "3.5mm jack, share button",
            "Weight": "287g"
        },
        "selling_points": [
            {
                "icon": "🟢",
                "title": "Vibrant",
                "description": "Eye-catching color"
            },
            {
                "icon": "🎮",
                "title": "Precision",
                "description": "Accurate controls"
            },
            {
                "icon": "⚡",
                "title": "Energy",
                "description": "Long battery life"
            }
        ],
        "faqs": [
            {
                "question": "Special edition?",
                "answer": "Part of colors collection"
            },
            {
                "question": "Performance?",
                "answer": "Same as standard Core controller"
            },
            {
                "question": "PC compatible?",
                "answer": "Yes, via Bluetooth or USB"
            },
            {
                "question": "Battery life?",
                "answer": "Approximately 30-40 hours"
            },
            {
                "question": "Same as black?",
                "answer": "No, different color"
            }
        ],
        "media": {
            "images_by_color": {
                "Electric Volt": "https://m.media-amazon.com/images/I/511p8oS7pPL.jpg"
            },
            "video": "https://youtu.be/Tb7oxk8TMbg?si=8be0ZyfYxWOEW6Dt"
        }
    }
]



async function insertProducts() {
    try{
        // Clear existing data
        await Products.deleteMany({});
        await ProductDetails.deleteMany({});

        // Insert new products
        const insertedProducts = await Products.insertMany(productsData);
        const insertedDetails = await ProductDetails.insertMany(productsDetailsData)
        console.log(`Inserted ${insertedProducts.length} products and ${insertedDetails.length} product details successfully.`);
    }
    catch(error){
        console.error("Error inserting products:", error);
    }
}

async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
        await insertProducts();
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

main().catch(error => {
    console.error("Error in main function:", error);
});

