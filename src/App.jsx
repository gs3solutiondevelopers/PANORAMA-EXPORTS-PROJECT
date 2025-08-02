import React, { useState } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import bg from "./assets/bg.webp";

function App() {
    const [entered, setEntered] = useState(false);

    const handleEnter = () => {
        setEntered(true);
    };

    return (
        <>
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
        </>
    );
}

export default App;
