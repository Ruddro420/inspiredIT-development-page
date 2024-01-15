import { Card } from 'flowbite-react';
const Mentor = () => {
    return (
        <div>
            <section className="bg-section">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className=" mb-10 lg:mb-16 text-center">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">কোর্স <span>ইন্সট্রাক্টর</span></h2>
                        <p className="text-white sm:text-xl">মেন্টর হিসেবে যারা থাকছেন আপনাদের সাথে</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:space-y-0">
                        <div className="">
                            <Card className="max-w-sm">
                                <div className="flex justify-end px-4 pt-4">

                                </div>
                                <div className="flex flex-col items-center pb-10">
                                    {/* <Image
                                        alt="Bonnie image"
                                        height="96"
                                        src="/images/people/profile-picture-3.jpg"
                                        width="96"
                                        className="mb-3 rounded-full shadow-lg"
                                    /> */}
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                        >
                                            Add friend
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                        >
                                            Message
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mentor;