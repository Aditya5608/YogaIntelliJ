import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PoseClassifier from './components/PoseClassifier';
import PoseLibrary from './components/PoseLibrary';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'classifier':
        return <PoseClassifier />;
      case 'library':
        return <PoseLibrary />;
      case 'statistics':
        return <Statistics />;
      default:
        return <Hero onStartClassifying={() => setActiveSection('classifier')} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pt-20">
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;