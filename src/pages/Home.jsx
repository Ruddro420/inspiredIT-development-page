import Faq from "../components/Faq";
import Features from "../components/Features";
import HeaderNav from "../components/HeaderNav";
import Hero from "../components/Hero";
import Language from "../components/Language";
import Mentor from "../components/Mentor";
import Module from "../components/Module";

const Home = () => {
    return (
        <div>
            <HeaderNav />
            <Hero />
            <Features />
            <Module />
            <Language />
            <Faq />
            <Mentor />
        </div>
    );
};

export default Home;