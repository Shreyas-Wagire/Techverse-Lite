import React from 'react';
import Hero from '../components/Hero';
import GroupsSection from '../components/GroupsSection';

const Home: React.FC = () => {
    return (
        <div className="bg-white">
            <Hero />
            <GroupsSection />
        </div>
    );
};

export default Home;