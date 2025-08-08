<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";

import firstImg from "../assets/images/first.jpg";
import secondImg from "../assets/images/first.jpg";
import thirdImg from "../assets/images/first.jpg";
import fourthImg from "../assets/images/first.jpg";
import fifthImg from "../assets/images/first.jpg";
import sixthImg from "../assets/images/first.jpg";
=======
import { Link } from "react-router-dom";

import firstImg from "../assets/images/first.jpg";
import secondImg from "../assets/images/2nd.jpg";
import thirdImg from "../assets/images/3rd.jpg";
import fourthImg from "../assets/images/4th.jpg";
import fifthImg from "../assets/images/5th.jpg";
import sixthImg from "../assets/images/6th.jpg";
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6

export default function Navbar() {
    const navItems = [
        {
            label: "OUR STORY",
<<<<<<< HEAD
            path: "",
            subItems: [
                {
                    label: "Excellence Roots",
                    path: "/ourstory/excellenceroots",
=======
            path: "/ourstory",
            subItems: [
                {
                    label: "Roots of Excellence",
                    path: "/ourstory/rootofexcellence",
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6
                    image: firstImg,
                },
                {
                    label: "Vision & Value",
                    path: "/ourstory/visionandvalue",
                    image: secondImg,
                },
                {
                    label: "Leadership",
                    path: "/ourstory/leadership",
                    image: thirdImg,
                },
                {
                    label: "Milestone",
                    path: "/ourstory/milestone",
                    image: fourthImg,
                },
                {
                    label: "Group Purpose",
                    path: "/ourstory/groupPurpose",
                    image: fifthImg,
                },
                {
                    label: "Values",
                    path: "/ourstory/values",
                    image: sixthImg,
                },
            ],
        },
        {
            label: "WEAVING STORIES",
<<<<<<< HEAD
            path: "",
            subItems: [
                {
                    label: "Excellence Roots",
                    path: "/ourstory/excellenceroots",
                    image: firstImg,
                },
                {
                    label: "Vision & Value",
                    path: "/ourstory/visionandvalue",
                    image: secondImg,
                },
                {
                    label: "Leadership",
                    path: "/ourstory/leadership",
                    image: thirdImg,
                },
                {
                    label: "Milestone",
                    path: "/ourstory/milestone",
                    image: fourthImg,
                },
                {
                    label: "Group Purpose",
                    path: "/ourstory/groupPurpose",
=======
            path: "/weavingstories",
            subItems: [
                {
                    label: "Roots of Excellence",
                    path: "/ourstory/rootofexcellence",
                    image: firstImg,
                },
                {
                    label: "Mission",
                    path: "/ourstory/mission",
                    image: secondImg,
                },
                {
                    label: "Founder",
                    path: "/ourstory/founder",
                    image: thirdImg,
                },
                {
                    label: "Team",
                    path: "/ourstory/team",
                    image: fourthImg,
                },
                {
                    label: "Heritage",
                    path: "/ourstory/heritage",
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6
                    image: fifthImg,
                },
                {
                    label: "Values",
                    path: "/ourstory/values",
                    image: sixthImg,
                },
            ],
        },
        {
            label: "INNOVATION",
<<<<<<< HEAD
            path: "",
            subItems: [
                {
                    label: "Excellence Roots",
                    path: "/ourstory/excellenceroots",
                    image: firstImg,
                },
                {
                    label: "Vision & Value",
                    path: "/ourstory/visionandvalue",
                    image: secondImg,
                },
                {
                    label: "Leadership",
                    path: "/ourstory/leadership",
                    image: thirdImg,
                },
                {
                    label: "Milestone",
                    path: "/ourstory/milestone",
                    image: fourthImg,
                },
                {
                    label: "Group Purpose",
                    path: "/ourstory/groupPurpose",
=======
            path: "/innovation",
            subItems: [
                {
                    label: "Roots of Excellence",
                    path: "/ourstory/rootofexcellence",
                    image: firstImg,
                },
                {
                    label: "Mission",
                    path: "/ourstory/mission",
                    image: secondImg,
                },
                {
                    label: "Founder",
                    path: "/ourstory/founder",
                    image: thirdImg,
                },
                {
                    label: "Team",
                    path: "/ourstory/team",
                    image: fourthImg,
                },
                {
                    label: "Heritage",
                    path: "/ourstory/heritage",
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6
                    image: fifthImg,
                },
                {
                    label: "Values",
                    path: "/ourstory/values",
                    image: sixthImg,
                },
            ],
        },
        {
            label: "ELEVATED CRAFT",
<<<<<<< HEAD
            path: "",
            subItems: [
                {
                    label: "Excellence Roots",
                    path: "/ourstory/excellenceroots",
                    image: firstImg,
                },
                {
                    label: "Vision & Value",
                    path: "/ourstory/visionandvalue",
                    image: secondImg,
                },
                {
                    label: "Leadership",
                    path: "/ourstory/leadership",
                    image: thirdImg,
                },
                {
                    label: "Milestone",
                    path: "/ourstory/milestone",
                    image: fourthImg,
                },
                {
                    label: "Group Purpose",
                    path: "/ourstory/groupPurpose",
                    image: fifthImg,
=======
            path: "/elevatedcraft",
            subItems: [
                {
                    label: "Roots of Excellence",
                    path: "/ourstory/rootofexcellence",
                    image: "/images/rootofexcellence.jpg",
                },
                {
                    label: "Mission",
                    path: "/ourstory/mission",
                    image: "/images/rootofexcellence.jpg",
                },
                {
                    label: "Founder",
                    path: "/ourstory/founder",
                    image: "/images/rootofexcellence.jpg",
                },
                {
                    label: "Team",
                    path: "/ourstory/team",
                    image: "/images/rootofexcellence.jpg",
                },
                {
                    label: "Heritage",
                    path: "/ourstory/heritage",
                    image: "/images/rootofexcellence.jpg",
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6
                },
                {
                    label: "Values",
                    path: "/ourstory/values",
<<<<<<< HEAD
                    image: sixthImg,
                },
            ],
        },
        // {
        //     label: "MORE",
        //     path: "",
        //     subItems: [
        //         {
        //             label: "SUSTAINABILITY",
        //             path: "/sustainability",
        //         },
        //         {
        //             label: "OUR PEOPLE",
        //             path: "/ourpeople",
        //         },
        //     ],
        // },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${
                scrolled ? "bg-white" : "bg-transparent backdrop-blur-md"
            } shadow-md 2xl:h-24 sm:h-20 max-h-20 fixed top-0 left-0 right-0 z-50 transition-colors duration-500`}
        >
            <div className=" mx-auto px-4 2xl:h-24 sm:h-20 max-h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center h-full justify-center w-[30%]"
                >
                    <img
                        src="/panoramalogo.jpg"
                        alt="Panorama Exports Logo"
                        className="2xl:h-24 sm:h-20 max-h-20 w-auto object-contain"
                    />
                </Link>

                {/* Navigation Links */}
                <ul className="w-[60%] hidden lg:flex gap-8 justify-end items-center relative text-white xl:text-base text-sm font-semibold mr-5">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group">
                            <Link
                                to={item.path}
                                className={`${
                                    scrolled
                                        ? "text-[#073281] hover:text-[#073281]"
                                        : "text-white hover:text-red-300"
                                } transition-colors duration-500 font-medium hover:underline underline-offset-4`}
                            >
                                {item.label}
                            </Link>

                            {item.subItems && (
                                <ul className="absolute left-1/2 -translate-x-1/2 pt-1 hidden group-hover:flex flex-col shadow-lg rounded-sm text-base z-10 xl:w-[450px] w-[300px]">
                                    <div
                                        className={`flex justify-center xl:text-2xl text-lg xl:mb-[4px] mb-[7px] ${
                                            scrolled
                                                ? "text-[#073281] hover:text-[#073281]"
                                                : "text-white hover:text-red-300"
                                        } transition-colors duration-500 font-medium`}
                                    >
                                        <FaAnglesDown />
                                    </div>
                                    <div className="bg-white p-4 rounded-sm grid xl:grid-cols-3 grid-cols-2 gap-4">
                                        {item.subItems.map(
                                            (subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="hover:bg-gray-100 hover:text-gray-600 text-blue-900 whitespace-nowrap text-center"
                                                >
                                                    <Link to={subItem.path}>
                                                        <img
                                                            src={subItem.image}
                                                            alt={item.label}
                                                            className="w-full h-[90px] object-cover rounded-sm"
                                                        />
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </div>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div
                    className={`${
                        scrolled
                            ? "text-[#073281] hover:text-[#073281]"
                            : "text-white hover:text-red-300"
                    } transition-colors duration-500 hidden lg:flex text-white mr-5 px-2 xl:text-base text-sm font-medium hover:underline underline-offset-4`}
                >
                    MORE
                </div>

                <div className="flex">
                    {/* Language Switcher */}
                    <div
                        className={`flex items-center space-x-2 2xl:ml-16 ml:2 mr-2 ${
                            scrolled ? "text-[#073281]" : "text-white"
                        }`}
                    >
                        <button
                            className={`xl:text-base text-sm transition-colors duration-500 ${
                                scrolled
                                    ? "text-[#073281] hover:text-[#073281]"
                                    : "hover:text-red-300"
                            }`}
                        >
                            EN
                        </button>
                        <span className="text-sm">|</span>
                        <button
                            className={`xl:text-base text-sm transition-colors duration-500 ${
                                scrolled
                                    ? "text-[#073281] hover:text-[#073281]"
                                    : "hover:text-red-300"
                            }`}
                        >
                            HI
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md text-white hover:text-red-300 ml-10"
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-black bg-opacity-80 px-4 py-6 space-y-4 text-white text-base">
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Ourstory" onClick={() => setIsOpen(false)}>
                            Our Story
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/manufacturing"
                            onClick={() => setIsOpen(false)}
                        >
                            Manufacturing
                        </Link>
                    </li>
                    <li>
                        <Link to="/people" onClick={() => setIsOpen(false)}>
                            People
                        </Link>
                    </li>
                    <li>
                        <Link to="/innovation" onClick={() => setIsOpen(false)}>
                            Innovation
                        </Link>
                    </li>
                    <li>
                        <Link to="/media" onClick={() => setIsOpen(false)}>
                            Media
                        </Link>
                    </li>
                    <li className="flex space-x-4 pt-2">
                        <button className="hover:text-red-300">EN</button>
                        <span>|</span>
                        <button className="hover:text-red-300">HI</button>
                    </li>
                </ul>
            )}
=======
                    image: "/images/rootofexcellence.jpg",
                },
            ],
        },
        {
            label: "TECHNOLOGY",
            path: "/technology",
        },
        {
            label: "LEADERSHIP",
            path: "/leadership",
        },
        {
            label: "CONTACT US",
            path: "/contactus",
        },
    ];


    return (
        <nav className="bg-transparent border-b text-black text-xl font-semibold px-4 flex">
            <div className="w-[40%] text-2xl flex justify-center mr-5">
                <Link to="/">
                    <div className="flex items-center gap-4">
                        <img src="/logo.png" alt="Logo" className="h-20 w-20" />
                        PANORAMA EXPORTS
                    </div>
                </Link>
            </div>
            <ul className="w-[60%] flex gap-8 justify-center items-center relative">
                {navItems.map((item, index) => (
                    <li key={index} className="relative group">
                        <Link
                            to={item.path}
                            className="hover:text-gray-600  hover:underline underline-offset-4"
                        >
                            {item.label}
                        </Link>

                        {item.subItems && (
                            <ul className="absolute left-1/2 -translate-x-1/2 pt-2 hidden group-hover:flex flex-col shadow-lg text-base z-10 w-[450px]">
                                <div className="bg-white p-2 rounded-sm grid grid-cols-3 gap-2">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="hover:bg-gray-100 whitespace-nowrap text-center"
                                        >
                                            <Link to={subItem.path}>
                                                <img
                                                    src={subItem.image}
                                                    alt={item.label}
                                                    className="w-full h-[110px] object-cover rounded-sm"
                                                />
                                                {subItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6
        </nav>
    );
}
