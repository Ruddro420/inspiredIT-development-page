import { Card } from "flowbite-react";

const Language = () => {
    return (
        <div>
            <section className="bg-section-language">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className=" mb-8 lg:mb-16 text-center">
                        <div className="header-img">
                            <img src="/img/section/tech.svg" />
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">কোর্সে যা যা <span>টেকনোলজী</span> শিখানো হবে</h2>
                        <p className="text-white sm:text-xl">এই কোর্সের ল্যাংগুয়েজ</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
                        <div className="language-block">
                            <Card className="language-img" imgSrc="/img/hero/html.png" horizontal>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                    HTML
                                </h5>
                            </Card>
                        </div>
                        <div className="language-block">
                            <Card className="language-img" imgSrc="/img/hero/css.png" horizontal>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                    CSS
                                </h5>
                            </Card>
                        </div>
                        <div className="language-block">
                            <Card className="language-img" imgSrc="/img/hero/sass.png" horizontal>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                    SASS
                                </h5>
                            </Card>
                        </div>
                        <div className="language-block">
                            <Card className="language-img" imgSrc="/img/hero/bootstrap.png" horizontal>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                    BOOTSTRAP
                                </h5>
                            </Card>
                        </div>
                        <div className="language-block">
                            <Card className="language-img" imgSrc="/img/hero/js.png" horizontal>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                    JAVASCRIPT
                                </h5>
                            </Card>
                        </div>
                        <div className="language-block">
                            <Card className="language-img" imgSrc="/img/hero/react.png" horizontal>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                    REACT
                                </h5>
                            </Card>
                        </div>
                        <div className="language-block">
                            <Card className="language-img" imgSrc="/img/hero/wordpress.png" horizontal>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                    WORDPRESS
                                </h5>
                            </Card>
                        </div>
                        <div className="language-block">
                            <Card className="language-img" imgSrc="/public/img/hero/github.png" horizontal>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                    GITHUB
                                </h5>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Language;