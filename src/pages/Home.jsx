import EndCourse from "../components/EndCourse";
import Faq from "../components/Faq";
import Features from "../components/Features";
import HeaderNav from "../components/HeaderNav";
import Hero from "../components/Hero";
import Language from "../components/Language";
import MainFooter from "../components/MainFooter";
import Mentor from "../components/Mentor";
import Module from "../components/Module";
import OrderNow from "../components/OrderNow";
import Project from "../components/Project";
import Support from "../components/Support";

const Home = () => {
    return (
        <div>
            <HeaderNav />
            <Hero />
            <Features />
            <Module />
            <Language />
            <Project />
            <EndCourse />
            <Support />
            <Faq />
            <Mentor />
            <OrderNow />
            <MainFooter />
        </div>
    );
};

export default Home;