import { Navbar } from "flowbite-react";
const HeaderNav = () => {
    return (
        <div>
            <Navbar fluid rounded className="bg-[#182133] nav-container">
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
                       <a href="https://inspireditbd.com/">
                       INSPIRED IT
                       </a>
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    <a style={{ padding: '10px', borderRadius: '5px' }} target="_blank" href="#" className="mobile-off-button gradient-border" rel="noreferrer">
                        যোগাযোগ করুন 
                    </a>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#hero-section" className="nav-menu">হোম</Navbar.Link>
                    <Navbar.Link href="#course-module">কোর্স মডিউল</Navbar.Link>
                    <Navbar.Link href="#course-technology">কোর্স টেকনোলজী</Navbar.Link>
                    <Navbar.Link href="#course-project">কোর্স প্রজেক্ট</Navbar.Link>
                    <Navbar.Link href="#course-instructor">কোর্স ইন্সট্রাক্টর</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;