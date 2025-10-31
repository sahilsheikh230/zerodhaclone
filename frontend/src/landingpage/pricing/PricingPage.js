import Brokerage from "./Brockerage";
import Hero from "./Hero";
import Money from "./Money";

export default function PricingPage(){
    return(
        <div>
            <Hero></Hero>
            <Money></Money>
            <Brokerage></Brokerage>
        </div>
    )
}