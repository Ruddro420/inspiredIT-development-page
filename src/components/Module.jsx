import { Timeline } from "flowbite-react";

const Module = () => {
    return (
        <div>
            <section id="course-module" className="bg-section">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className=" mb-8 lg:mb-16 text-center">
                        <div className="module-header-img">
                            <img src="/img/section/module.svg" />
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">কোর্সে যে যে <span>মডিউল</span> থাকছে</h2>
                        <p className="text-gray-500 sm:text-xl">12 টি মডিউলে সাজানো হয়েছে পুরো কোর্সটি</p>
                    </div>
                    <div className="md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:space-y-0 module-overflow">
                        <div className="ml-lg-5 bg-block-module ">
                            <Timeline>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>প্রথম এবং দ্বিতীয় সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Discussion Web Development & HTML</Timeline.Title>
                                        <Timeline.Body>
                                            আমরা মডিউলে আমরা Web Development এর বিষয়গুলো নিয়ে আলোচনা করা হবে এবং HTML এই বিভিন্ন টপিকস সম্পর্কে জানবো এই সপ্তাহে এছাড়াও CSS ফান্ডামেন্ট বিষয় গুলো শিখবো । এই মডিউলে দুইটি প্রজেক্ট বানানো দেখানো হবে এবং দুইটি এসাইনমেন্ট দেয়া হবে।
                                            <div className="course-tag">
                                                <div>DISCUSSION</div>
                                                <div>TOOLS</div>
                                                <div>HTML</div>
                                                <div>GIT/GITHUB</div>
                                                <div>CSS BASIC</div>
                                                <div>2 ASSIGNMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>তৃতীয় এবং চতূর্থ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>CSS Mastering & Sass</Timeline.Title>
                                        <Timeline.Body>
                                            এই মডিউলে আমরা CSS এর উপর মাস্টার হবো এবং CSS এর কোড খুব সহজে আমরা কিভাবে লিখবো সেটার জন্য আমরা Sass শিখবো । কিভাবে একটি বড় প্রজেক্টে ম্যানেজ করতে হয় সেটি আমরা এই মডিউলে শিখবো । এই মডিউলে একটি বড় প্রজেক্ট করে দেখানো হবে এবং দুইটি এসাইনমেন্ট দেয়া হবে ।
                                            <div className="course-tag">
                                                <div>CSS MASTERING</div>
                                                <div>SASS</div>
                                                <div>PROJECT STRUCTURE</div>
                                                <div>2 ASSIGNMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>পঞ্চম এবং ষষ্ঠ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>CSS Advanced & Bootstrap Framework</Timeline.Title>
                                        <Timeline.Body>
                                            এই মডিউলে আমরা CSS Advanced টপিকস নিয়ে কাজ করবো , কিভাবে একটি ওয়েবসাইট এনিম্যাটিক করা যায় সে বিষয়ে দেখবো। একটি ওয়েবসাইটকে কিভাবে রেসপন্সিভ করা যায় তা শিখবো এই মডিউলে আমরা । এছাড়াও এই মডিউলে আমরা কাজ করবো Bootstrap Framework নিয়ে । Bootstrap এর খুটিনাটি সব কিছু শিখবো আমরা এই মডিউলে ।
                                            <div className="course-tag">
                                                <div>CSS ADVANCED</div>
                                                <div>ANIMATION</div>
                                                <div>RESPONSIVE</div>
                                                <div>BOOTSTRAP</div>
                                                <div>1 ASSIGNMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>সপ্তম সপ্তাহ এবং অষ্টম সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Two Projects & Website Conversion</Timeline.Title>
                                        <Timeline.Body>
                                            এই মডিউলে দুইটি প্রজেক্ট করে দেখানো হবে এবং ফ্রিল্যান্স মার্কেটপ্লেসে কি ধরণের কাজ থাকে সে বিষয়ে আলোচনা করা হবে এবং যেকোনো ডিজাইন থেকে কিভাবে একটি ওয়েবসাইটে কর্নভাট করতে হয় তা দেখানো হবে । এই মডিউলেই আপনি নিজেকে মার্কেটপ্লেসে এর জন্য রেডি করতে পারবেন । এই মডিউলে দুইটি এসাইন্টমেন্ট দেয়া হবে ।
                                            <div className="course-tag">
                                                <div>TWO PROJECTS</div>
                                                <div>MARKETPLACE IDEAS</div>
                                                <div>READY TO WORK</div>
                                                <div>1 ASSIGNMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                        <div className="bg-block-module mt-3">
                            <Timeline>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>নবম এবং দশম সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Real Game With JavaScript</Timeline.Title>
                                        <Timeline.Body>
                                            এই মডিউল থেকে শুরু হবে আপনাদের ডেফল্পমেন্ট এর আসল মজা । এই মডিউলে আমরা একদম ব্যাসিক থেকে JavaScript শিখবো । JavaScript এর ফান্ডামেন্টাল টপিকস গুলো সম্পর্কে ভালোভাবে শিখবো। কারণ ভিত্তি যদি শক্ত না হয় তাহলে কিন্তু বাড়ি ভালো হবে নাহ। তাই এই মডিউলটি হবে আপনাদের ক্যারিয়ারের টার্নিং পয়েন্ট ।
                                            <div className="course-tag">
                                                <div>VANILLA JAVASCRIPT</div>
                                                <div>MODERN JS</div>
                                                <div>DOM MANIPULATION</div>
                                                <div>2 ASSIGNMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>একাদশ এবং দ্বাদশ  সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>React Fundamental & Hooks</Timeline.Title>
                                        <Timeline.Body>
                                            এই মডিউল থেকেই আপনাদের রিয়েক্ট এর যাত্রা শুরু হবে । এই মডিউলে আমরা রিয়েক্ট ফান্ডামেন্টাল সম্পর্কে জানবো এবং কিভাবে রিয়েক্ট ব্যবহার করে একটি সিংগেল পেজ এপ্লিকেশন বানানো যায় সেটি দেখবো । ডম ম্যানিপুলেটিং, রিয়াক্ট লাইভ সাইকেল, পার্ফরমেন্স বুস্টিং, হুক কাস্টমাইজেশন এই ফান্ডামেন্টাল বিষয়গুলো সম্পর্কে বিস্তারিত জানবো । দুইটি প্রজেক্ট দেখানো হবে এবং দুইটি এসাইনমেন্ট থাকবে । 
                                            <div className="course-tag">
                                                <div>REACT BASIC</div>
                                                <div>COMPONENTS</div>
                                                <div>JSX</div>
                                                <div>STATE</div>
                                                <div>PROPS</div>
                                                <div>1 ASSIGNMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>ত্রয়োদশ এবং চতূর্দশ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>React Router, Axios, Redux</Timeline.Title>
                                        <Timeline.Body>
                                            এই মডিউলটি হবে খুবই দরকারী কারণ এখানে রিয়েক্ট এর এডভান্স কিছু টপিকস নিয়ে কাজ করানো হবে । API কি জিনিস কিভাবে কাজ করে , কিভাবে API ম্যানেজ করতে হবে সব কিছুই এই মডিউলে দেখানো হবে । সবচেয়ে মজার যে জিনিস সেটি হলো Redux নিয়ে এই মডিউলে কাজ করানো হবে । দুইটি প্রজেক্ট দেখানো হবে এবং দুইটি এসাইনমেন্ট থাকবে । 
                                            <div className="course-tag">
                                                <div>ROUTER</div> 
                                                <div>AXIOS</div>
                                                <div>CONTEXT API</div>
                                                <div>REDUX</div>
                                                <div>FIREBASE</div>
                                                <div>1 ASSIGNMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>পঞ্চদশ এবং ষোড়শ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>WordPress Fundamental & Customization</Timeline.Title>
                                        <Timeline.Body>
                                        এই মডিউলে ওয়ার্ডপ্রেসের ফান্ডামেন্টাল টপিকস নিয়ে কাজ করানো হবে এবং ওয়ার্ডপ্রেস কাস্টমাইজেশন করানো হবে যাতে আপনি ফ্রিল্যান্সিং মার্কেটপ্লেসের কাজের উপযোগী হন । আগের মডিউলের সব কাজগুলো যদি ঠিক ঠাক ভাবে করতে পারেন তাহলে এই ওয়ার্ডপ্রেস হবে আপনাদের কাছে খেলনার মতো । এই মডিউলে দুইটি প্রজেক্ট দেখানো হবে এবং দুইটি এসাইন্টমেন্ট থাকবে । 
                                            <div className="course-tag">
                                                <div>WORDPRESS</div> 
                                                <div>ELEMENTOR</div>
                                                <div>CUSTOMIZATION</div>
                                                <div>THEME</div>
                                                <div>1 ASSIGNMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>সপ্তদশ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>WordPress Advanced & WooCommerce</Timeline.Title>
                                        <Timeline.Body>
                                        এটি আমাদের কোর্সের শেষ মডিউল । এই মডিউলে ওয়ার্ডপ্রেসের এডভান্স কিছু টপিকস নিয়ে কাজ করানো হবে এবং বহুল প্রতীক্ষিত ই-কর্মাস সাইট কিভাবে ওয়ার্ডপ্রেস দিয়ে বানানো যায় সেই বিষয়ে কাজ করানো হবে । এই মডিউলে একটি ই-কর্মাস সাইট বিল্ড করে দেখানো হবে এবং একটি এসাইন্টমেন্ট দেয়া হবে । 
                                            <div className="course-tag">
                                                <div>WOOCOMMERCE</div> 
                                                <div>E-COMMERCE</div>
                                                <div>WORDPRESS ADVANCED</div>
                                                <div>1 ASSIGNMENT</div>
                                            </div>
                                            <Timeline.Point />
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Module;