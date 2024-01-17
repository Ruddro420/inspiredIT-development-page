import { Accordion } from "flowbite-react";

const Faq = () => {
    return (
        <div>
            <section className="bg-section">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className=" mb-10 lg:mb-16 text-center">
                        <div className="header-img">
                            <img src="/img/section/faq.svg" />
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">সচরাচর জানতে চাওয়া <span>প্রশ্নের উত্তর</span></h2>
                        <p className="text-gray-500 sm:text-xl">আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি।</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:space-y-0">
                        <div className="">
                            <div className="faq-img">
                                <img src="/img/faq.svg" alt="faq-img" />
                            </div>
                        </div>
                        <div className="">
                            <Accordion collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">এই কোর্স টি কাদের জন্য ?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 ">
                                        যারা ফ্রন্ট এন্ড ওয়েব এন্ড ওয়ার্ডপ্রেস ডেভেলপার হতে চায়। যারা একদম শূন্য থেকে শুরু করে শেষ পর্যন্ত ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্ট শিখে ফ্রন্টএন্ড ডেভেলপার হিসেবে কোন ওয়েব অথবা সফটওয়্যার কোম্পানিতে চাকরি করতে চায়, তাদের জন্য।  এছাড়াও  ফ্রিল্যান্স মার্কেটপ্লেসেও ফ্রন্ট এন্ড ওয়েব ডেভেলপার এবং ওয়ার্ডপ্রেস এর যথেষ্ট চাহিদা রয়েছে। শুধু ওয়ার্ডপ্রেসকে কাজে লাগিয়েও ফ্রিল্যান্স মার্কেটপ্লেসে কাজের যথেষ্ট সুযোগ রয়েছে । 
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white"> এই কোর্স করার আগে এ আমার কি কোনো পূর্বের অভিজ্ঞতা প্রয়োজন আছে ?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        আমাদের সকল কোর্স এর মতো এই কোর্সটিও একদম বিগেনারদের জন্য। অর্থাৎ পূর্বের কোনো অভিজ্ঞতা ছাড়াই যে কেও কোর্সটি করতে পারবে। এছাড়াও আমাদের সাপোর্ট টিম তো থাকছেই।
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">এই কোর্স শেষ করতে কত দিন সময় লাগবে ?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        কোর্স এর টেকনিকাল পার্ট শেষ করতে ৪ মাস সময় লাগবে। তারপর ২ মাস ইন্টার্ন করানো হবে এবং ফ্রিল্যান্স মার্কেটপ্লেস ও লোকাল জব এর জন্য রেডি করা হবে। টোটাল ৬ মাস সময় লাগবে কোর্সটি শেষ হতে।
                                        </p>
                                        
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">কোর্স টি করতে আমার শিক্ষাগত ব্যাকগ্রাউন্ড কি থাকা লাগবে ?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        কোর্সটি করার জন্য আগে থেকে প্রোগ্রামিং জানা থাকা লাগবে না। যে কেও কোর্সটি করতে পারবে। তবে এই কোর্সটি সঠিক ভাবে শেষ করার জন্য প্রতিদিন অন্তত ৩-৫ ঘন্টা সময় দিতে হবে।
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white"> মোবাইল দিয়ে এ কোর্স টি করতে পারবো ?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        অন্তত পক্ষে কোর i3 অথবা i5 এর একটি ডেস্কটপ অথবা ল্যাপটপ লাগবে। মোবাইল দিয়ে কখনোই কোডিং শিখা সম্ভব নয়।
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">কোর্স করার পর কি আমি সিউর চাকরি পাবো অথবা ফ্রীল্যানসিং করতে পারবো ?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        কোনো কোর্স-ই আপনাকে গ্যারান্টি দিতে পারবে না আপনি কোর্স করার পর ই চাকুরী পাবেন অথবা ফ্রিল্যান্স মার্কেটপ্লেস এ ভালো করতে পারবেন। এটা সম্পূর্ণ আপনার উপর নির্ভর করবে। আমরা আপনাকে গাইড এবং সাহায্য করতে পারি , কষ্ট আপনাকেই করতে হবে ।
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">আমার প্রশ্নের উত্তর এখানে নেই। কোথায় প্রশ্ন করবো?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        আপনি চাইলে আপনার প্রশ্নটি বিস্তারিত লিখে এবং প্রয়োজনীয় রেফারেন্স যুক্ত করে আমাদের <a style={{color:'#12C2E9'}} href="https://www.facebook.com/inspireditfamily">ফেসবুক পেজে</a> ইনবক্স করতে পারেন। এছাড়াও আপনার জন্য আমাদের সাপোর্ট সেন্টার এর নাম্বার <a style={{color:'#12C2E9'}} href="tel:01738240668">+8801738240668</a> সকাল 10:00 টা থেকে রাত 08:00 টা পর্যন্ত খোলা থাকবে। এছাড়াও আমাদের অফিস <span><b>চারতলা মোড় , কলেজ রোড, রংপুর</b></span> এসে যোগাযোগ করতে পারবেন । 
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;