import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 9.5 14.5 10 14 10H10C9.5 10 9 9.5 9 9V7.5L3 7V9C3 9.5 3.5 10 4 10H8V16C8 16.5 8.5 17 9 17H15C15.5 17 16 16.5 16 16V10H20C20.5 10 21 9.5 21 9Z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          YogaIntelliJ
        </h1>
        
        <p className="text-xl text-white/90 mb-8">
          Initializing AI Yoga Pose Classifier
        </p>
        
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;