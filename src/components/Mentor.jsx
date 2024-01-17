import { Card } from 'flowbite-react';
import { TbBrandFiverr } from "react-icons/tb";
import { FaBehance, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const Mentor = () => {
    return (
        <div>
            <section id='course-instructor' className="bg-section-mentor">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className=" mb-10 lg:mb-16 text-center">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">কোর্স <span>ইন্সট্রাক্টর</span></h2>
                        <p className="text-gray-500 sm:text-xl">মেন্টর হিসেবে যারা থাকছেন আপনাদের সাথে</p>
                    </div>
                    <div className="justify-between md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:space-y-0">
                        <div className="mentor-one">
                            <Card className="max-w-lg mentor-block mt-3">
                                <div className="flex flex-col items-center pb-10">
                                    <img
                                        src="/img/mentor/ruddro.png"
                                        alt="ruddro-mentor"
                                        className="mb-3 rounded-full shadow-lg"
                                        height="96"
                                        width="96"
                                    />
                                    <h5 className="mb-1 text-xl font-medium text-[#12c2e9]">Ali Fiad Ruddro</h5>
                                    <h6 className="text-sm text-white">Front-End Developer || WordPress Developer </h6>
                                    <p className='text-gray-500 mt-5 text-justify'>আলী ফিয়াদ রুদ্র , গত ৪ বছর যাবত ওয়েব ডেভেলপমেন্ট সেক্টর এ ফাইভার সহ বিভিন্ন লোকাল মার্কেটপ্লেসে কাজ করছেন । তিনি ফাইভার মার্কেটপ্লেসে লেভেল-২ সেলার হিসেবে কাজ করছেন । এছাড়া তিনি Techitrick.com এজেন্সির কো-ফাউন্ডার এবং বর্তমানে ফ্রীলান্সিং সেক্টরে Front-End & WordPress Developer  হিসেবে কাজ করছেন।</p>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="https://www.fiverr.com/ruddro420"
                                            className="inline-flex items-center rounded-lg bg-[#1DBF73] px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                            target='_blank' rel="noreferrer"
                                        >
                                            <TbBrandFiverr />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/ali-fiad-ruddro/"
                                            className="inline-flex items-center rounded-lg bg-[#0A66C2] px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                            target='_blank' rel="noreferrer"
                                        >
                                            <FaLinkedin />
                                        </a>
                                        <a
                                            href="https://github.com/Ruddro420"
                                            className="inline-flex items-center rounded-lg bg-[#FF00FF] px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                            target='_blank' rel="noreferrer"
                                        >
                                            <FaGithub />
                                        </a>
                                        <a
                                            href="https://ruddro.info/"
                                            className="inline-flex items-center rounded-lg bg-[#EF546D] px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                            target='_blank' rel="noreferrer"
                                        >
                                            <TbWorldWww />
                                        </a>

                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="mentor-one">
                            <Card className="max-w-lg mentor-block mt-3">
                                <div className="flex flex-col items-center pb-10">
                                    <img
                                        src="/img/mentor/mfahad.png"
                                        alt="ruddro-mentor"
                                        className="mb-3 rounded-full shadow-lg"
                                        height="96"
                                        width="96"
                                    />
                                    <h5 className="mb-1 text-xl font-medium text-[#12c2e9]">Mohiuddin Fahad</h5>
                                    <h6 className="text-sm text-white">CEO & Founder, Inspired IT </h6>
                                    <p className='text-gray-500 mt-5 text-justify'>সৈয়দ মুহীউদ্দীন ফাহাদ , গত  বছর ৮ বছর যাবত ফাইভার, আপওয়ার্ক সহ বিভিন্ন লোকাল মার্কেটপ্লেসে কাজ করছেন । এছাড়াও  ২০১৮ সালে তিনি প্রতিষ্ঠা করেন ইন্সপায়ার্ড আইটি যেটি বাংলাদেশের বেকারত্ব সমস্যা সমাধানে সুনির্দিষ্ট ও সুনির্ধারিত কোর্স মডিউল অনুসরন করে বিভিন্ন সেক্টরে মানুষকে দক্ষ করে তোলার পাশাপাশি তাদের কাজের সুযোগ তৈরী করে দিতে বিভিন্ন ভাবে কাজ করে যাচ্ছে। </p>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="https://www.facebook.com/mfahadbd668"
                                            className="inline-flex items-center rounded-lg bg-[#0866FF] px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                            target='_blank' rel="noreferrer"
                                        >
                                            <FaFacebook />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/mfahad668"
                                            className="inline-flex items-center rounded-lg bg-[#0A66C2] px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                            target='_blank' rel="noreferrer"
                                        >
                                            <FaLinkedin />
                                        </a>
                                        <a
                                            href="https://www.behance.net/mfahadbd"
                                            className="inline-flex items-center rounded-lg bg-[#FF00FF] px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                            target='_blank' rel="noreferrer"
                                        >
                                            <FaBehance />
                                        </a>
                                        <a
                                            href="https://mfahadbd.com/"
                                            className="inline-flex items-center rounded-lg bg-[#EF546D] px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                                            target='_blank' rel="noreferrer"
                                        >
                                            <TbWorldWww />
                                        </a>

                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mentor;