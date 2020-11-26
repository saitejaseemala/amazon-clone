    import React from "react";
    import "./Home.css";
    import Product from "./Product";

    function Home() {
    return (
        <div className="home">
        <div className="home__container">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Mirzapurs2/Launch/Phase2/1500x600_Hero-Tall_np._CB419394629_.jpg"
            alt=""
            />

            <div className="home__row">
            <Product title="Razer Mamba Elite (Gaming Mouse, Ergonomic design
                                        1 million clicks, 6 switches)"
                     id="789009876"
                     price={89.99}
                     image="https://www.maxgaming.com/bilder/artiklar/15623.jpg?m=1588925276"
                     rating={4} />
                        
            <Product title="Apple Macbook Pro (Bionic Processor, Swift reply, faster
                            access, 1 TB HDD, 512GB SSD, 12GB RAM)"
                     id="34566543"
                     price={1299}
                     image="https://images-na.ssl-images-amazon.com/images/I/81UQQ8DEgaL._SL1500_.jpg"
                     rating={5} />
                        
            <Product
                    id="1234321"
                    title="New Gaming Hyperx Headset (Google Assistant,
                           With MIC, Noise cancellation)"
                    price={199.99}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4505/4505300_sd.jpg"
                    rating={3} />
                        
            <Product
                 id="9182345"     
                 title="Amazon Echo (3rd genneration) |
                     Smart speaker with Alexa, Charcoal Fabric"
                 price={98.99}
                 image="https://i.gadgets360cdn.com/products/smart-home/large/1551964773_832_amazon_echo-dot-3rd-gen-smart-speaker.jpg"
                 rating={4} />
            </div>

            <div className="home__row">
            <Product
                id="4903850"
                title="OnePlus Nord 5G (Blue Marble, 8GB RAM, 128GB Storage)"
                price={199.99}
                image="https://m.media-amazon.com/images/I/71aqNzEqj0L._AC_UY218_.jpg"
                rating={4} />
            <Product
                id="23445930"
                title="boAt AAVANTE Bar 1250 80W 2.1 Channel Bluetooth Soundbar with boAt Signature 
                                        Sound, Wired Subwoofer, Bluetooth v5.0 "
                price={98.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61NbNYrhNyL._SL1500_.jpg"
                rating={4} />
                    
            <Product
                ID="78902352"     
                title="JBL Flip 3 Stealth Waterproof Portable Bluetooth Speaker with Rich Deep Bass (Black), Without Mic"
                price={98.99}
                image="https://images-eu.ssl-images-amazon.com/images/I/41dTPHU90DL._AC_SX184_.jpg"
                rating={3} />
                        
            <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            </div>

            <div className="home__row">
            <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
            </div>
        </div>
        </div>
    );
    }

    export default Home;