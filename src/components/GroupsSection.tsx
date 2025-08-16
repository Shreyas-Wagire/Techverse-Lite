import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, MessageCircle, Trophy, BookOpen, Globe, Star } from 'lucide-react';

const GroupsSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const activities = [
        {
            icon: Code2,
            title: 'Coding & DSA',
            description: 'Daily practice problems, doubt-solving sessions, and peer coding challenges.',
            color: 'from-blue-500 to-indigo-500',
            bgColor: 'from-blue-50 to-indigo-50'
        },
        {
            icon: Globe,
            title: 'Web Development',
            description: 'Learn full-stack development with hands-on projects and real-world deployment.',
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'from-emerald-50 to-teal-50'
        },
        {
            icon: MessageCircle,
            title: 'Group Discussions',
            description: 'Thrice-weekly sessions to improve communication and critical thinking skills.',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'from-purple-50 to-pink-50'
        },
        {
            icon: Trophy,
            title: 'Hackathons',
            description: 'Collaborate in team-based coding challenges with industry mentorship.',
            color: 'from-amber-500 to-orange-500',
            bgColor: 'from-amber-50 to-orange-50'
        },
        {
            icon: BookOpen,
            title: 'Resource Sharing',
            description: 'Access curated learning materials, roadmaps, and best practices daily.',
            color: 'from-teal-500 to-cyan-500',
            bgColor: 'from-teal-50 to-cyan-50'
        }
    ];

    return (
        <section className="pt-16 sm:pt-20 lg:pt-24 pb-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Premium Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-md">
                        <Star className="w-4 h-4 text-amber-500" />
                        What We Do
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Comprehensive Learning Environment
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                        TechVerse offers a comprehensive learning environment where students develop both technical and soft skills through various activities and collaborative projects.
                    </p>
                </motion.div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${activity.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <div
                                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                >
                                    <activity.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                                    {activity.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {activity.description}
                                </p>
                            </div>

                            {/* Hover Effect */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${activity.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default GroupsSection;