import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Users, Star, Zap } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0">
                {/* Subtle gradient orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100/40 to-indigo-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-100/40 to-pink-100/30 rounded-full blur-3xl" />
                
                {/* Premium grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16">
                <div className="text-center">
                    {/* Premium Welcome Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-blue-700 rounded-full text-sm font-semibold mb-8 shadow-lg border border-white/50"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Star className="w-4 h-4 text-amber-500" />
                        <span className="hidden sm:inline">Welcome to TechVerse</span>
                        <span className="sm:hidden">TechVerse</span>
                    </motion.div>

                    {/* Main Heading - Mobile Optimized */}
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                            TechVerse
                        </span>
                    </motion.h1>

                    {/* Tagline - Mobile Optimized */}
                    <motion.p
                        className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-4 font-medium px-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Student-Led Tech Community
                    </motion.p>

                    {/* Description - Mobile Optimized */}
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        A vibrant community where students learn, practice, and grow together through 
                        <span className="font-semibold text-blue-600"> coding challenges</span>, 
                        <span className="font-semibold text-purple-600"> web development</span>, 
                        <span className="font-semibold text-emerald-600"> group discussions</span>, and 
                        <span className="font-semibold text-amber-600"> hackathons</span>.
                    </motion.p>

                    {/* Premium CTA Button - Mobile Optimized */}
                    <motion.div
                        className="mb-16 px-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                onClick={() => window.open('https://techverse-club.vercel.app/', '_blank')}
                                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 hover:from-blue-600 hover:via-purple-700 hover:to-indigo-700 text-white rounded-2xl font-bold text-lg sm:text-xl flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                                <span>Visit TechVerse</span>
                                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>
                            
                            <motion.button
                                onClick={() => window.open('https://chat.whatsapp.com/IIi5w2Agj2OHGcFNNcclM2?mode=ac_t', '_blank')}
                                className="group w-full sm:w-auto px-8 py-4 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-2xl font-bold text-lg sm:text-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* <Users className="h-5 w-5 sm:h-6 sm:w-6" /> */}
                                <span>Join WhatsApp</span>
                                {/* <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" /> */}
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Premium Stats Grid - Mobile Optimized */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <div className="text-center group">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">200+</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Active Members</div>
                        </div>
                        
                        <div className="text-center group">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">5</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Specialized Groups</div>
                        </div>
                        
                        <div className="text-center group">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">5+</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">GD Sessions</div>
                        </div>
                        
                        <div className="text-center group">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">100+</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Resources Shared</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;