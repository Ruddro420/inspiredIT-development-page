import { Navbar } from "flowbite-react";
const HeaderNav = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
                        INSPIRED IT
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    <a style={{ padding: '10px', borderRadius: '5px' }} target="_blank" href="#" className="mobile-off-button gradient-border" rel="noreferrer">
                        Get started
                    </a>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#aboutMe">About</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;