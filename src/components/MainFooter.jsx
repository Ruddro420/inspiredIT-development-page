import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
const MainFooter = () => {
    return (
        <div>
            <Footer className="mbl-footer-container">
                <div className="w-full bg-black text-white px-10 py-6">
                    <div className="w-full sm:flex sm:items-center sm:justify-between ">
                        <Footer.Copyright
                            by="Inspired IT | All Right Reserved"
                            href="#"
                            year={2024}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center mbl-social-icon">
                            <Footer.Icon
                                href="https://web.facebook.com/inspireditfamily?_rdc=1&_rdr"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="https://www.instagram.com/inspireditfamily/"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                href="https://www.youtube.com/@inspireditfamily"
                                icon={BsYoutube}
                            />
                            
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default MainFooter;