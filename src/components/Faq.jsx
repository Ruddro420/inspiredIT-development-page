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
                        <p className="text-white sm:text-xl">আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি।</p>
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
                                    <Accordion.Title className="text-white">কোর্সটি করার জন্য আগে থেকে কি কি জানতে হবে?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 ">
                                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                            dropdowns, modals, navbars, and more.
                                        </p>
                                        <p className="text-gray-500">
                                            Check out this guide to learn how to&nbsp;
                                            <a
                                                href="https://flowbite.com/docs/getting-started/introduction/"
                                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                                            >
                                                get started&nbsp;
                                            </a>
                                            and start developing websites even faster with components on top of Tailwind CSS.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white"> কোর্সের প্রথম ক্লাস কবে থেকে শুরু হবে?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                            has a design equivalent in our Figma file.
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Check out the
                                            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                Figma design system
                                            </a>
                                            based on the utility classes from Tailwind CSS and components from Flowbite.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">কোর্সের প্রথম ক্লাস কবে থেকে শুরু হবে?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                            components, whereas Tailwind UI offers sections of pages.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                            technical reason stopping you from using the best of two worlds.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                            <li>
                                                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Flowbite Pro
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://tailwindui.com/"
                                                    rel="nofollow"
                                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                >
                                                    Tailwind UI
                                                </a>
                                            </li>
                                        </ul>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">কোর্সের প্রথম ক্লাস কবে থেকে শুরু হবে?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                            components, whereas Tailwind UI offers sections of pages.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                            technical reason stopping you from using the best of two worlds.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                            <li>
                                                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Flowbite Pro
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://tailwindui.com/"
                                                    rel="nofollow"
                                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                >
                                                    Tailwind UI
                                                </a>
                                            </li>
                                        </ul>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">কোর্সের প্রথম ক্লাস কবে থেকে শুরু হবে?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                            components, whereas Tailwind UI offers sections of pages.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                            technical reason stopping you from using the best of two worlds.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                            <li>
                                                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Flowbite Pro
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://tailwindui.com/"
                                                    rel="nofollow"
                                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                >
                                                    Tailwind UI
                                                </a>
                                            </li>
                                        </ul>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">কোর্সের প্রথম ক্লাস কবে থেকে শুরু হবে?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                            components, whereas Tailwind UI offers sections of pages.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                            technical reason stopping you from using the best of two worlds.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                            <li>
                                                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Flowbite Pro
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://tailwindui.com/"
                                                    rel="nofollow"
                                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                >
                                                    Tailwind UI
                                                </a>
                                            </li>
                                        </ul>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="text-white">What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                            components, whereas Tailwind UI offers sections of pages.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                            technical reason stopping you from using the best of two worlds.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                            <li>
                                                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Flowbite Pro
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://tailwindui.com/"
                                                    rel="nofollow"
                                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                >
                                                    Tailwind UI
                                                </a>
                                            </li>
                                        </ul>
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