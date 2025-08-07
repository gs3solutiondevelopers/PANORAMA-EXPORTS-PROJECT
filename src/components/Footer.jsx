import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const footerLinks = {
        company: [
            { title: "Contact Us", path: "/contact" },
            { title: "Privacy Notice", path: "/privacy" },
            { title: "Cookie Notice", path: "/cookies" },
            { title: "Be Aware of Fraudulent Job Offers", path: "/fraud" },
            { title: "Terms & Conditions", path: "/terms" }
        ],
        careers: [
            { title: "Careers", path: "/careers" },
            { title: "Leadership Programs", path: "/leadership-programs" },
            { title: "Life at Panorama", path: "/life-at-panorama" },
            { title: "Teamwork & Culture", path: "/culture" }
        ],
        social: [
            { name: "Facebook", icon: "facebook", url: "#" },
            { name: "Instagram", icon: "instagram", url: "#" },
            { name: "X", icon: "x", url: "#" },
            { name: "LinkedIn", icon: "linkedin", url: "#" },
            { name: "YouTube", icon: "youtube", url: "#" }
        ]
    };

    return (
        <footer className="bg-[#182123] text-white">
            <div className="container mx-auto px-4 pt-10 pb-5">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-blue-100 hover:text-white transition-colors duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Careers */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Careers</h3>
                        <ul className="space-y-2">
                            {footerLinks.careers.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-blue-100 hover:text-white transition-colors duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Connect With Us
                        </h3>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mb-6">
                            {footerLinks.social.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                                    title={social.name}
                                >
                                    {social.icon === "facebook" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-blue-500"
                                        >
                                            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                                        </svg>
                                    )}
                                    {social.icon === "instagram" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-purple-800"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608C4.517 2.497 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.396 3.678 1.378c-.981.981-1.247 2.093-1.306 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.325 2.393 1.306 3.374.981.981 2.093 1.247 3.374 1.306C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.325 3.374-1.306.981-.981 1.247-2.093 1.306-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.325-2.393-1.306-3.374-.981-.981-2.093-1.247-3.374-1.306C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                        </svg>
                                    )}
                                    {social.icon === "x" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-white"
                                        >
                                            <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 0 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z" />
                                        </svg>
                                    )}
                                    {social.icon === "linkedin" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-blue-700"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z" />
                                        </svg>
                                    )}
                                    {social.icon === "youtube" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-red-600"
                                        >
                                            <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-sm font-semibold mb-3">
                                Subscribe to our newsletter for the latest: now
                                straight to your inbox.
                            </h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                                />
                                <button className="bg-white text-[#073281] px-6 py-2 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-blue-100 mb-4 md:mb-0">
                            © 2025 All Rights Reserved. Panorama Exports Pvt.
                            Ltd.
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link
                                to="/cookie-preferences"
                                className="text-sm text-blue-100 hover:text-white transition-colors duration-200"
                            >
                                Cookie Preferences
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 