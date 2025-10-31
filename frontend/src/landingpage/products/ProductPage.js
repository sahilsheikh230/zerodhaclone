import Hero from "./Hero"
import Left from "./Left"
import Right from "./Right"
import Universe from "./Universe"
export default  function ProductPage(){
return (
    <>
    <Hero></Hero>
    <Left image="https://zerodha.com/static/images/products-kite.png" heading="Kite"  para="Our ultra-fast flagship
     trading platform with streaming market data, advanced charts, an elegant UI, and more.
     Enjoy the Kite experience seamlessly on your Android and iOS devices." link1="Try demo" link2="Learn more"></Left>
    <Right image="https://zerodha.com/static/images/products-console.png" heading="Console"
     para="The central dashboard for your Zerodha account. Gain insights into your 
     trades and investments with in-depth reports and visualisations." link="Learn more"></Right>

    <Left image="https://zerodha.com/static/images/products-coin.png"
heading="Coin"
para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
link1="Coin "></Left>
<Right image="https://zerodha.com/static/images/kite-trade/landing.svg"
heading="Kite Connect API"
para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
link="Kite Connect "></Right>
<Left image="https://zerodha.com/static/images/varsity-products.png"
heading="Varsity mobile"
para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
></Left>
    <Universe></Universe>
    </>

)
}