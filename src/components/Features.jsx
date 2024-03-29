
const Features = () => {
    const features = [
        { id: 1, title: '১৭ সপ্তাহে ১০ টি মডিউল', des: 'ধাপে ধাপে শেখার জন্য কোর্সটি ১৭ সপ্তাহে  ১২টি মডিউল  ভাগ করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হবে । ', src: '/img/features/learning.png' },
        { id: 2, title: 'সাবক্ষনিক লাইভ সার্পোট', des: 'ইন্সপায়ার্ড আইটি এই কোর্স এ থাকছে লাইভ কোডিং ক্লাস এর পাশাপাশি গুগল মিট ওয়ান অন ওয়ান সাপোর্ট সিস্টেম, তাই যে কেও কোনো সমস্যায় পড়লেই সাপোর্ট নিয়ে এগিয়ে যেতে পারবে । ', src: '/img/features/support.png' },
        { id: 3, title: 'মার্কেটপ্লেস এবং ইন্টারভিউ', des: 'কোর্স এর সাথে থাকছে, ফাইভার ও আপওয়ার্ক ক্র্যাশ প্রোগ্রাম। এছাড়াও ইন্টারভিউ ও বিভিন্ন মার্কেটপ্লেসে কিভাবে নিজেকে প্রেজেন্ট করতে পারবেন তা দেখানো হবে । ', src: '/img/features/marketplace.png' },
        { id: 4, title: '12 টি এসাইনমেন্ট', des: 'প্রতি সপ্তাহ শেষেই থাকবে এসাইনমেন্ট যেগুলো আপনারা নিজে করবেন। এসাইনমেন্ট-এর সল্যুশন ক্লাস শেষে গিটহাবে শেয়ার করে দেয়া হবে যেন নিজেরা প্র্যাকটিস করতে পারেন। ', src: '/img/features/assignment.png' },
        { id: 5, title: 'প্রতি সপ্তাহে প্রশ্নউত্তর সেশন', des: 'এসাইনমেন্টের উপর গুরুত্ত্বপূর্ণ টপিক নিয়ে আলোচনা সহ প্রতি সপ্তাহে প্রশ্নউত্তর সেশন থাকবে যেখানে আপনারা বিভিন্ন টপিক নিয়ে প্রশ্ন করতে পারবেন।', src: '/img/features/question-mark.png' },
        { id: 6, title: '12 টি প্রজেক্ট', des: 'পুরো কোর্সটিতে আমরা প্রজেক্ট ভিত্তিক লার্নিং প্রসেস ফলো করেছি। কোর্সে আমরা মিলেমিশে 12 টি প্রজেক্ট করবো। কিছু প্রজেক্ট সরাসরি করে দেখানো হবে এবং কিছু নিজেরা করবেন।', src: '/img/features/completed-task.png' },

    ]
    return (
        <div>
            <section className="bg-section">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className=" mb-8 lg:mb-16 text-center">
                        <div className="header-img">
                            <img src="/img/header-img.png" />
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">এক নজরে আমাদের <span>রিয়েক্ট এন্ড ওয়ার্ডপ্রেস</span> কোর্স</h2>
                        <p className="text-gray-500 sm:text-xl">এই কোর্সে যা যা থাকছে</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
                        {
                            features.map(feature => (
                                <div key={feature.id} className="bg-block">
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                        <img src="/img/features/learning.png" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold dark:text-white">{feature.title} </h3>
                                    <p className="text-gray-500 dark:text-gray-400">{feature.des}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;