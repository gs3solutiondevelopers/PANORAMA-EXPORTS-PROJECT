import { Link } from "react-router-dom";

import firstImg from "../assets/images/first.jpg";
import secondImg from "../assets/images/2nd.jpg";
import thirdImg from "../assets/images/3rd.jpg";
import fourthImg from "../assets/images/4th.jpg";
import fifthImg from "../assets/images/5th.jpg";
import sixthImg from "../assets/images/6th.jpg";

export default function Navbar() {
    const navItems = [
        {
            label: "OUR STORY",
            path: "/ourstory",
            subItems: [
                {
                    label: "Roots of Excellence",
                    path: "/ourstory/rootofexcellence",
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
                },
                {
                    label: "Values",
                    path: "/ourstory/values",
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
        </nav>
    );
}
