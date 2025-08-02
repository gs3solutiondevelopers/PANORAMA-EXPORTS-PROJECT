import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";
import Innovation from "../pages/Innovation";
import WeavingStories from "../pages/WeavingStories";
import ElevatedCraft from "../pages/ElevatedCraft";
import Technology from "../pages/Technology";
import Leadership from "../pages/Leadership";
import ContactUs from "../pages/ContactUs";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/weavingstories" element={<WeavingStories />} />
            <Route path="/elevatedcraft" element={<ElevatedCraft />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contactus" element={<ContactUs />} />
        </Routes>
    );
}
