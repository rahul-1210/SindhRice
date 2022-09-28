import React from 'react';
import Product from './Product';
import Flag from './Flag';
import BrownRice from '../images/brownrice.jpg';
import WhiteRice from '../images/whiterice.jpg';
import BambooRice from '../images/bamboorice.jpg';
import BasmatiRice from '../images/basmatirice.jpg';
import WildRice from '../images/wildrice2.jpg';
import BlackRice from '../images/blackrice.jpg';
import RedRice from '../images/redrice.jpg';
import NepalFlag from '../images/nepalflag.png';
import SrilankaFlag from '../images/srilankaflag.jpg';
import ChinaFlag from '../images/chinaflag2.jpg';
import JapanFlag from '../images/japanflag.png';
import VietnamFlag from '../images/vietnamflag.jpg';
import ThailandFlag from '../images/thailandflag.jpg';
import LogoImage from '../images/ricegrain.jpg';

function Products() {
  const arr = [
    BrownRice,
    WhiteRice,
    BambooRice,
    BasmatiRice,
    WildRice,
    BlackRice,
    RedRice,
  ];
  const text = [
    '"Brown rice has a mild nutty flavor that adds a pleasant taste to any brown rice dish. Many health-conscious people prefer eating brown rice over other kinds of rice since it’s low in calories and filled with vitamins and minerals. It’s a 100% whole grain food item and light to eat too!"',
    '"The most versatile rice type has to be white rice. It is known worldwide and adapts to any form of cooking in any cuisine. It has a fluffy and a very slight sticky texture when fully cooked and provides energy to the body too. This is the best kind of rice for dishes that requires stuffing and stir-frying."',
    '"Bamboo rice is one of the major on rice name list, it is made from bamboo shoots, and actually a seed at the end of its life span. It can be challenging to find bamboo rice at your local grocery shop since it’s very uncommon. However, bamboo rice is very nutritious and has a great taste. "',
    '"Basmati rice is one of the most popular types of rice in India and also pan Asia. A lot of Indian and Asian cuisines use this flavorful rice to create exciting and exotic recipes. This rice is best served with fresh herbs and green onions along with traditional Indian side dishes."',
    '"Wild rice comes from a type of grass typically found in the United states’ lake region. This rice is commonly found around lakes like wild grasses and is harvested as whole-grain rice. Wild rice is packed with protein and is colorful from the outside."',
    '"Black rice, also known as the forbidden rice, is a form of glutinous rice. This rice is a little more expensive than other rice, and it is believed that only the upper class could afford to eat black rice in ancient China. There are many varieties of black rice available in the market and online, and one should try this unique rice at least once!"',
    '"Red rice is high in anthocyanin, an antioxidant that dyes the rice grain’s bran a reddish color. This is widely used in Thailand, Africa, and some parts of Bhutan. Red rice is traditionally cooked with a lot of herbs and spices pepper, garlic, and chili."',
  ];
  const name = [
    'Brown Rice.',
    'White Rice.',
    'Bamboo Rice.',
    'Basmati Rice.',
    'Wild Rice.',
    'Black Rice.',
    'Red Rice.',
  ];
  const flag = [
    NepalFlag,
    SrilankaFlag,
    ChinaFlag,
    JapanFlag,
    VietnamFlag,
    ThailandFlag,
  ];

  return (
    <div>
      <div className="product_header">
        <img className="logo__image" src={LogoImage} />
        <p className="header">Varities we offer..!!!</p>
        <img className="logo__image" src={LogoImage} />
      </div>
      {arr.map((src, idx) => {
        return (
          <Product img={src} text={text[idx]} idx={idx} type={name[idx]} />
        );
      })}
      <p className="header__2">Our Products Imported from</p>
      <div className="flags">
        {flag.map((src) => {
          return <Flag img={src} />;
        })}
      </div>
    </div>
  );
}

export default Products;