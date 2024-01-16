
const Project = () => {
    return (
        <div>
            <section id="course-project" className="bg-section-project">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className=" mb-10 lg:mb-16 text-center">
                    <div className="header-img">
                            <img src="/img/section/project.svg" />
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">কোর্সে যে <span>প্রজেক্ট</span> গুলো করানো হবে</h2>
                        <p className="text-gray-500 sm:text-xl">12টি প্রজেক্ট আমরা একসাথে করবো</p>
                    </div>
                    {/* Project Gallery show here */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 project-img">
                        <div className="">
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/1.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/2.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/3.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/4.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/5.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/6.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/7.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/8.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/9.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/10.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/11.png" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/img/projects/12.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;