
import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Menu, X, Users } from "lucide-react"

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // setIsScrolled(window.scrollY > 50) // This line was removed as per the edit hint
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavigation = (path: string) => {
        window.location.href = path
        setIsMenuOpen(false)
    }

    return (
        <>
            {/* Mobile backdrop */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Main navbar */}
            <motion.nav
                className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-auto"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                {/* Desktop navbar */}
                <div className="hidden lg:flex items-center bg-white/95 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-white/20">
                    <button onClick={() => handleNavigation("/")} className="flex items-center space-x-2 mr-6 group">
                        <div className="relative">
                            <Code className="h-6 w-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                            <motion.div
                                className="absolute inset-0 bg-blue-400/20 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1.2, opacity: 0 }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />
                        </div>
                        <span className="text-base font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">TechVerse</span>
                    </button>

                    <div className="flex items-center space-x-3">
                        {/* Join Club Button */}
                        <button
                            onClick={() => window.open("https://chat.whatsapp.com/IIi5w2Agj2OHGcFNNcclM2?mode=ac_t", "_blank")}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Join Club
                        </button>
                    </div>
                </div>

                {/* Mobile navbar */}
                <div className="lg:hidden">
                    <div className="flex items-center bg-white/95 backdrop-blur-xl rounded-full px-3 py-2 shadow-2xl border border-white/20 mx-14" >
                        <button onClick={() => handleNavigation("/")} className="flex items-center space-x-2 mr-3 group">
                            <Code className="h-5 w-5 text-blue-600" />
                            <span className="text-sm font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">TechVerse</span>
                        </button>

                        <div className="flex items-center space-x-2 ml-auto">
                            {/* Join Club Button for Mobile */}
                            <button
                                onClick={() => window.open("https://forms.google.com/club-registration", "_blank")}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Join
                            </button>

                            {/* Mobile menu button */}
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-200">
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="h-4 w-4" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="h-4 w-4" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="p-6 space-y-4">
                                    {/* CTA buttons */}
                                    <div className="space-y-3">
                                        <motion.button
                                            onClick={() => {
                                                window.open("https://forms.google.com/club-registration", "_blank")
                                                setIsMenuOpen(false)
                                            }}
                                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 }}
                                        >
                                            <div className="flex items-center justify-center gap-3">
                                                <Users className="h-5 w-5" />
                                                Join TechVerse Club
                                            </div>
                                        </motion.button>
                                    </div>
                                    
                                    {/* Quick Info */}
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-sm text-gray-500 text-center">
                                            Join our vibrant tech community today!
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar
