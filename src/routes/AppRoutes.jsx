import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";
import Innovation from "../pages/Innovation";
import WeavingStories from "../pages/WeavingStories";
import ElevatedCraft from "../pages/ElevatedCraft";
<<<<<<< HEAD
import OurPeople from "../pages/OurPeople";
import Sustainability from "../pages/Sustainability";
import CraftingTomorrow from "../pages/CraftingTomorrow";
import GlobalFootprint from "../pages/GlobalFootprint"; 
import OurInfrastructure from "../pages/OurInfrastructure"; 
import Community from "../pages/Community";
import Media from "../pages/Media";
=======
import Technology from "../pages/Technology";
import Leadership from "../pages/Leadership";
import ContactUs from "../pages/ContactUs";
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/weavingstories" element={<WeavingStories />} />
            <Route path="/elevatedcraft" element={<ElevatedCraft />} />
<<<<<<< HEAD
            <Route path="/ourpeople" element={<OurPeople />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/craftingtomorrow" element={<CraftingTomorrow />} />
            <Route path="/globalfootprint" element={<GlobalFootprint />} />
            <Route path="/ourinfrastructure" element={<OurInfrastructure />} />
            <Route path="/community" element={<Community />} />
            <Route path="/media" element={<Media />} />
=======
            <Route path="/technology" element={<Technology />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contactus" element={<ContactUs />} />
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6
        </Routes>
    );
}
