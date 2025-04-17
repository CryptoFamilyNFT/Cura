/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import WrappedTreeScene from "./3d/TreeScene";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import mascotte from "../../assets/Images/albero.png";
import { SignUp } from "../Mutation/SignUp";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/User/userSlice";
import { useNavigate } from "react-router";
import Page1 from '../../pages/landing-page/Page1';
import Page2 from '../../pages/landing-page/Page2';
import Page3 from '../../pages/landing-page/Page3';

export const Hero = ({ handleTheme }) => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const [isMobile, setIsMobile] = useState(false);
    const [currentSection, setCurrentSection] = useState(0);
    const [prevSection, setPrevSection] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.floor(latest * 4); // 4 sezioni totali
        const clamped = Math.min(index, 3);
        if (clamped !== currentSection) {
            setPrevSection(currentSection);
            setCurrentSection(clamped);
        }
    });

    const gradients = [
        "from-[#23687D] to-[#A1C877]",
        "from-[#1a1a1a] to-[#333333]",
        "from-[#4e4376] to-[#2b5876]",
        "from-[#000000] to-[#434343]",
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-[900vh] overflow-x-hidden scroll-smooth"
        >
            {/* 3D Tree Scene */}
            <div className="fixed top-0 left-0 w-full h-screen z-0">
                <WrappedTreeScene />

                {/* Background Fade Layers */}
                <motion.div
                    key={`prev-${prevSection}`}
                    className={`absolute inset-0 bg-gradient-to-t ${gradients[prevSection]}`}
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    style={{ zIndex: 1 }}
                />
                <motion.div
                    key={`current-${currentSection}`}
                    className={`absolute inset-0 bg-gradient-to-t ${gradients[currentSection]}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 1.2 }}
                    style={{ zIndex: 0 }}
                />
            </div>

            {/* Sezioni JSX */}
            <div className="relative z-20 flex flex-col items-center gap-64 pt-[150px] pb-[300px] px-6 md:px-16">

                {/* Sezione 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="w-full max-w-5xl rounded-3xl shadow-xl p-10 md:p-16 backdrop-blur-2xl transition-all duration-700 bg-white/30 text-black relative flex flex-col items-center"
                >
                    {!isMobile && (
                        <img
                            src={mascotte}
                            alt="Mascotte"
                            className="absolute bottom-0 -left-15 w-1/2 max-w-[300px] opacity-90"
                            />
                    )}
                    <h2 className="text-3xl font-bold mb-4 text-[#23697e] text-center">Respira. Ascolta. Riconnettiti.</h2>
                    <p className="text-lg text-[#10323c] text-center mb-6"></p>
                    {user.user.isAuthenticated && (
                        <div className="text-center">
                            <p className="text-sm text-gray-500 mb-4">
                                Connesso come <span className="font-semibold">{user.user.email}</span>
                            </p>
                            <div className="flex gap-4 justify-center">
                                <button
                                    className="px-6 py-2 bg-[#23697e] text-white rounded-lg shadow-md hover:bg-[#1d5566] transition"
                                    onClick={navigate("/profile")}
                                >
                                    Vai al profilo
                                </button>
                                <button
                                    className="px-6 py-2 bg-gray-300 text-black rounded-lg shadow-md hover:bg-gray-400 transition"
                                    onClick={() => dispatch(logout)}
                                >
                                    Esci
                                </button>
                            </div>
                        </div>
                    )}
                    {!user.user.isAuthenticated && (
                        <div className="flex items-center justify-center mt-4">
                            <SignUp struct={true} />
                        </div>
                    )}
                </motion.div>

                {/* Sezione 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="w-full max-w-5xl rounded-3xl shadow-xl p-10 md:p-16 backdrop-blur-2xl transition-all duration-700 bg-black/40 text-white"
                >
                    <Page1 />
                </motion.div>

                {/* Sezione 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="w-full max-w-5xl rounded-3xl shadow-xl p-10 md:p-16 backdrop-blur-2xl transition-all duration-700 bg-white/30 text-black"
                >
                                        <Page2/>
                </motion.div>

                {/* Sezione 4 */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="w-full max-w-5xl rounded-3xl shadow-xl p-10 md:p-16 backdrop-blur-2xl transition-all duration-700 bg-black/40 text-white"
                >
                                                            <Page3/>

                </motion.div>
            </div>
        </div>
    );
};
