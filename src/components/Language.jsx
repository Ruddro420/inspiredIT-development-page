import { Card } from "flowbite-react";

const Language = () => {
    const languages = [
        { id: 1, name: 'HTML', imgSrc: '/img/hero/html.png' },
        { id: 2, name: 'CSS', imgSrc: '/img/hero/css.png' },
        { id: 3, name: 'SASS', imgSrc: '/img/hero/sass.png' },
        { id: 4, name: 'BOOTSTRAP', imgSrc: '/img/hero/bootstrap.png' },
        { id: 5, name: 'JAVASCRIPT', imgSrc: '/img/hero/js.png' },
        { id: 6, name: 'REACT', imgSrc: '/img/hero/react.png' },
        { id: 6, name: 'WORDPRESS', imgSrc: '/img/hero/wordpress.png' },
        { id: 6, name: 'GITHUB', imgSrc: '/img/hero/github.png' },
    ]
    return (
        <div>
            <section id="course-technology" className="bg-section-language">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className=" mb-8 lg:mb-16 text-center">
                        <div className="header-img">
                            <img src="/img/section/tech.svg" />
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">কোর্সে যা যা <span>টেকনোলজী</span> শিখানো হবে</h2>
                        <p className="text-gray-500 sm:text-xl">এই কোর্সের ল্যাংগুয়েজ</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
                        {
                            languages.map(language => (
                                <div key={language.id} className="language-block">
                                    <Card className="language-img" imgSrc={language.imgSrc} horizontal>
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 mbl-heading">
                                            {language.name}
                                        </h5>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Language;