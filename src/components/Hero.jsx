
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="inner-hero">
                <div className="inner-text">
                    <p>MASTER THE ART OF FRONTEND & WORDPRESS DEVELOPMENT</p>
                    <h1 className="text-white">Creative<span> Frontend</span> and <span>WordPress </span> Development.</h1>
                    <p>আপনার ভাবনার, জানার, শিখার জগতকে আরও বড় করতেই তো রয়েছি আমরা। আপনার দক্ষতাকে আমরা করবো গতিশীল। আর তা আমাদের আপ-টু-ডেটেড কারিকুলামের মাধ্যমে যা আপনাদের জন্য সাজিয়েছি আমরা সম্পূর্ণ নতুনভাবে।</p>
                    <div>
                        <a style={{ padding: '20px', borderRadius: '5px', fontSize: '20px', color: 'white', cursor: 'pointer' }} target="_blank" href="#" className="course-button gradient-border" rel="noreferrer">
                            কোর্স মডিউল দেখুন
                        </a>
                    </div>
                </div>

            </div>
            <div className="gradient-circle"></div>
            <div className="gradient-circle-two"></div>
            {/* Hero Images */}
            <div className="hero-img-react"><img src="/img/hero/react.png" /></div>
            <div className="hero-img-wordpress"><img src="/img/hero/wordpress.png" /></div>
            <div className="hero-img-html"><img src="/img/hero/html.png" /></div>
            <div className="hero-img-css"><img src="/img/hero/css.png" /></div>
            <div className="hero-img-js"><img src="/img/hero/js.png" /></div>
            <div className="hero-img-bootstrap"><img src="/img/hero/bootstrap.png" /></div>
        </div>
    );
};

export default Hero;