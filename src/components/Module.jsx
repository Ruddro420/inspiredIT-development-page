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
                                            আমরা এই সপ্তাহে দুইটি মডিউল শেষ করবো । Web Development এর বিষয়গুলো নিয়ে আলোচনা করা হবে  এবং HTML এই বিভিন্ন টপিকস  সম্পর্কে জানবো এই সপ্তাহে । এই সপ্তাহে আমরা দুইটি প্রজেক্ট বানানো দেখানো হবে এবং দুইটি এসাইনমেন্ট দেয়া হবে। 
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>তৃতীয় এবং চতূর্থ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                                        <Timeline.Body>
                                            All of the pages and components are first designed in Figma and we keep a parity between the two versions
                                            even as we update the project.
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>পঞ্চম এবং ষষ্ঠ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                                        <Timeline.Body>
                                            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>সপ্তম সপ্তাহ এবং অষ্টম সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                                        <Timeline.Body>
                                            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                                            E-commerce & Marketing pages.
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>সপ্তম সপ্তাহ এবং অষ্টম সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                                        <Timeline.Body>
                                            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                                            E-commerce & Marketing pages.
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
                                            </div>
                                            <Timeline.Point />
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
                                        <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                                        <Timeline.Body>
                                            All of the pages and components are first designed in Figma and we keep a parity between the two versions
                                            even as we update the project.
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>একাদশ এবং দ্বাদশ  সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                                        <Timeline.Body>
                                            All of the pages and components are first designed in Figma and we keep a parity between the two versions
                                            even as we update the project.
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>ত্রয়োদশ এবং চতূর্দশ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                                        <Timeline.Body>
                                            All of the pages and components are first designed in Figma and we keep a parity between the two versions
                                            even as we update the project.
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>পঞ্চদশ এবং ষোড়শ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                                        <Timeline.Body>
                                            All of the pages and components are first designed in Figma and we keep a parity between the two versions
                                            even as we update the project.
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time>সপ্তদশ সপ্তাহ</Timeline.Time>
                                        <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                                        <Timeline.Body>
                                        আমরা এই সপ্তাহে দুইটি মডিউল শেষ করবো । Web Development এর বিষয়গুলো নিয়ে আলোচনা করা হবে  এবং HTML এই বিভিন্ন টপিকস  সম্পর্কে জানবো এই সপ্তাহে । এই সপ্তাহে আমরা দুইটি প্রজেক্ট বানানো দেখানো হবে এবং দুইটি এসাইনমেন্ট দেয়া হবে। 
                                            <div className="course-tag">
                                                <div>HTML</div> <div>GIT / GITHUB</div><div>DEVELOPMENT TOOLS</div><div>DISCUSSION WEB DEVELOPMENT</div>
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