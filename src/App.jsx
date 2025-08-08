import React, { useState } from "react";
import Landing from "./components/Landing";
<<<<<<< HEAD
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
=======
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import bg from "./assets/bg.webp";
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6

function App() {
    const [entered, setEntered] = useState(false);

    const handleEnter = () => {
        setEntered(true);
    };

    return (
        <>
<<<<<<< HEAD
            {!entered && <Landing onEnter={handleEnter} />}
            {entered && (
                <div className="">
                    <Navbar />
                    <AppRoutes />
                    <Footer />
                </div>
            )}
=======
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {!entered && <Landing onEnter={handleEnter} />}
                {entered && (
                    <>
                        <Navbar />
                        <AppRoutes />
                    </>
                )}
            </div>
>>>>>>> 12a532232ddea265dd477a75a35a581eea7df7f6
        </>
    );
}

export default App;
