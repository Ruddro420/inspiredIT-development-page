
const Support = () => {
    return (
        <section className="bg-section">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:space-y-0">
                    <div className="">
                        <div className="faq-img">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">সার্বক্ষণিক সহায়তার জন্য থাকছে <span>টেলিগ্রাম</span> সাপোর্ট চ্যানেল</h2>
                            <p className="text-gray-500 sm:text-xl">এই কোর্সের জন্য আমরা একটি প্রাইভেট টেলিগ্রাম সাপোর্ট গ্রুপ তৈরী করেছি যেখানে কোর্স ইন্সট্রাক্টর আলী ফিয়ার রুদ্র এবং মুহীউদ্দীন ফাহাদ সরাসরি আপনাদের বিভিন্ন প্রশ্নের উত্তর দিবেন। আমরা অঙ্গীকার করছি সর্বোচ্চ ২৪ ঘণ্টার মধ্যে আপনাদের প্রশ্নের উত্তর দিতে পারবো। তবে অধিকাংশ ক্ষেত্রে তার চেয়েও কম সময়ে আপনারা উত্তর পেয়ে যাবেন। এছাড়া প্রতি সপ্তাহে আলোচিত মডিউলের উপর লাইভ সেশন থাকবে যেখানে আপনারা সরাসরি প্রশ্ন করে উত্তর পেতে পারবেন।</p>
                        </div>
                        <div className="mt-10">
                            <a style={{ padding: '10px', borderRadius: '5px', fontSize: '20px', color: 'white', cursor: 'pointer' }} target="_blank" href="#" className="course-button gradient-border" rel="noreferrer">
                                সাপোর্ট সেন্টারে কল করুন
                            </a>
                        </div>
                    </div>
                    <div className="support-img">
                        <img src="/img/section/support.svg" alt="faq-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;