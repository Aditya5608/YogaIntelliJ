import React from 'react';
import { Camera, Zap, Target, Users } from 'lucide-react';

interface HeroProps {
  onStartClassifying: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClassifying }) => {
  const features = [
    {
      icon: Camera,
      title: 'Real-time Detection',
      description: 'Advanced AI analyzes your poses in real-time using your camera'
    },
    {
      icon: Target,
      title: 'Pose Correction',
      description: 'Get instant feedback and guidance to improve your form'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Powered by TensorFlow.js for instant pose classification'
    },
    {
      icon: Users,
      title: '8 Yoga Poses',
      description: 'Supports chair, cobra, dog, tree, triangle, warrior, shoulder stand poses'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Content */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <span className="gradient-text">Perfect Your</span>
            <br />
            <span className="text-gray-800">Yoga Practice</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of yoga with our AI-powered pose classifier. 
            Get real-time feedback, improve your form, and master 8 essential yoga poses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onStartClassifying}
              className="btn-primary text-lg px-8 py-4 group"
            >
              <Camera className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start Classifying
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="pose-card text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                99.2%
              </div>
              <p className="text-gray-600 font-medium">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <span className="loading-dots">Real-time</span>
              </div>
              <p className="text-gray-600 font-medium">Processing Speed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                8+
              </div>
              <p className="text-gray-600 font-medium">Supported Poses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;