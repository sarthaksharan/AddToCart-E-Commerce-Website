import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://pbs.twimg.com/media/FBnajmQVEAUOJRN?format=jpg&name=medium"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Adidas Football : MANCHESTER UNITED 21/22 Home Jersey"
            price={4999}
            rating={5}
            image="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/521b75fb72634652ba2fad24006c8760_9366/Manchester_United_21-22_Home_Jersey_Red_H31447_01_laydown.jpg"
          />
          <Product
            id="49538094"
            title="Scuderia Ferrari 20/21 Team Jacket"
            price={7999}
            rating={4}
            image="https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-20/21-team-jacket_ss4_p-12005506+u-lqxjy8hdgpjbl80dhx4p+v-193c3ffe6d3347449b29855b44cd497c.jpg?_hv=1&w=900"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="ZARA: RHINESTONE FAUX SUEDE CROPPED JACKET"
            price={5590}
            rating={5}
            image="https://static.zara.net/photos///2021/I/0/1/p/4432/714/710/2/w/750/4432714710_6_1_1.jpg?ts=1631198610463"
          />
          <Product
            id="49538094"
            title="ZARA: FAUX LEATHER BOMBER JACKET"
            price={4590}
            rating={4}
            image="https://static.zara.net/photos///2021/I/0/2/p/3918/391/800/2/w/750/3918391800_6_1_1.jpg?ts=1632474514754"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="The Ultimate Hitchhiker's Guide to the Galaxy: The Complete Trilogy in Five Parts (Paperback)"
            price={507}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/512AZUtxRkL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="23445930"
            title="Humble Pi: A Comedy of Maths Errors: (Paperback)"
            price={346}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41m5hxCZt-L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="3254354345"
            title="To Kill A Mockingbird: 50th Anniversary Edition:(Paperback)"
            price={274}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/51pT5XQHSKL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Nike Unisex White & Black Colourblocked LeBron 18 Low Basketball Shoes"
            price={14495}
            rating={3}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14528354/2021/9/6/2e6aa221-889a-471d-ac74-fafd3f11099a1630914009462-Nike-Unisex-White--Black-Colourblocked-LeBron-18-Low-Basketb-1.jpg"
          />
          <Product
            id="23445930"
            title="UNDER ARMOUR Unisex Green HOVR Summit Mid Walking Shoes"
            price={13999}
            rating={5}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12247264/2021/6/4/27d02ccb-18f0-40ec-a2a0-abaab42e6aff1622789668350-UNDER-ARMOUR-Unisex-Sports-Shoes-3441622789667979-1.jpg"
          />
          <Product
            id="3254354345"
            title="Puma Men Blue Future Z 1.2 FG/AG Football Non-Marking Shoes"
            price={13599}
            rating={4}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14824756/2021/8/23/e5be4db9-2cb4-4746-b6c9-9d871d5359b51629710252688-Puma-Men-Sports-Shoes-3131629710252172-1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Lavie Extra Large Malnov Women’s Tote Bag"
            price={1500}
            rating={3}
            image="https://m.media-amazon.com/images/I/71Fn+A6IekS._UL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Caprese Women's Sling Bag (Orange)"
            price={1149}
            rating={5}
            image="https://m.media-amazon.com/images/I/613haB1lCvL._UL1200_.jpg"
          />
          <Product
            id="3254354345"
            title="Baggit Women's Bowling Bag (Blue)"
            price={1690}
            rating={4}
            image="https://m.media-amazon.com/images/I/61mSiZE1e1L._UL1200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Homgee General Sound 41-Inch Acoustic Folk Guitar Non-Cutaway Dreadnought Guitar Sitka Spruce Top wi Gig Bag"
            price={76168}
            rating={4}
            image="https://m.media-amazon.com/images/I/61RK++dKe1L._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Kadence Wanderer Series Brown Mahogany wood Ukulele 21 inches (Combo, Bag with Tuner)"
            price={3500}
            rating={4}
            image="https://m.media-amazon.com/images/I/61KWZzwYHhL._SL1000_.jpg"
          />
          
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Apple MacBook Pro MVVJ2HN/A Core i7 9th Gen macOS Catalina Laptop (16 GB RAM, 512 GB SSD, AMD Radeon Pro 5300M/Intel UHD 630 + 4 GB Graphics, 40.64cm, Space Grey)"
            price={199900}
            rating={4}
            image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605170406/Croma%20Assets/Computers%20Peripherals/Laptop/Images/8935708393502.png/mxw_2048,f_auto"
          />
          <Product
            id="49538094"
            title="Apple iPhone 13 Pro Max (1TB ROM, MLLM3HN/A, Gold)"
            price={179900}
            rating={4}
            image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631858621/Croma%20Assets/Communication/Mobiles/Images/243537_7_u6qsm8.png/mxw_2048,f_auto"
          />
          
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Bose Lifestyle 6.1 Channel Home Theatre System (650, Black)"
            price={399999}
            rating={4}
            image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605259488/Croma%20Assets/Entertainment/Home%20Theatres%20and%20Audio%20Systems/Images/8984541233182.png/mxw_2048,f_auto"
          />
          <Product
            id="49538094"
            title="OnePlus Smart Band (40.4mm) (Step Count, W101N, Black, Aluminum Rubber Dual Strap)"
            price={2499}
            rating={4}
            image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1610369882/Croma%20Assets/Wearable/Wearable%20Devices/Images/231755_ls5rii.png/mxw_2048,f_auto"
          />
          
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Sony Bravia Z9J Series 215cm (85 Inch) Ultra HD 8K LED Google Smart TV (Cognitive Processor XR, XR-85Z9J, Black)"
            price={1299990}
            rating={4}
            image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1633441227/Croma%20Assets/Entertainment/Television/Images/244920_k92l7p.png/mxw_2048,f_auto"
          />
          
        </div>

      </div>
    </div>
  );
}

export default Home;
