import React, { useState, useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Camera, Play, Pause, RotateCcw, Download, AlertCircle } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

const PoseClassifier: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [currentPose, setCurrentPose] = useState<string>('');
  const [confidence, setConfidence] = useState<number>(0);
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [sessionStats, setSessionStats] = useState({
    totalPoses: 0,
    correctPoses: 0,
    sessionTime: 0
  });

  const poseClasses = [
    'Chair Pose', 'Cobra Pose', 'Downward Dog', 'No Pose',
    'Shoulder Stand', 'Tree Pose', 'Triangle Pose', 'Warrior Pose'
  ];

  const poseDescriptions = {
    'Chair Pose': 'Sit back as if sitting in a chair, arms raised overhead',
    'Cobra Pose': 'Lie on stomach, lift chest with arms supporting',
    'Downward Dog': 'Inverted V-shape, hands and feet on ground',
    'Tree Pose': 'Stand on one leg, other foot on inner thigh',
    'Triangle Pose': 'Wide-legged forward fold with one hand to floor',
    'Warrior Pose': 'Lunge position with arms extended',
    'Shoulder Stand': 'Lie on back, legs straight up in the air',
    'No Pose': 'No yoga pose detected'
  };

  // Load the model
  useEffect(() => {
    const loadModel = async () => {
      try {
        setIsModelLoading(true);
        // In a real implementation, you would load the actual model
        // const loadedModel = await tf.loadLayersModel('/model/model.json');
        // setModel(loadedModel);
        
        // Simulate model loading for demo
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsModelLoading(false);
      } catch (err) {
        setError('Failed to load the AI model. Please refresh the page.');
        setIsModelLoading(false);
      }
    };

    loadModel();
  }, []);

  // Simulate pose detection for demo
  const simulatePoseDetection = useCallback(() => {
    if (!isCapturing) return;

    // Simulate random pose detection
    const randomPose = poseClasses[Math.floor(Math.random() * poseClasses.length)];
    const randomConfidence = 0.7 + Math.random() * 0.3;
    
    setCurrentPose(randomPose);
    setConfidence(randomConfidence);
    
    setSessionStats(prev => ({
      ...prev,
      totalPoses: prev.totalPoses + 1,
      correctPoses: randomConfidence > 0.8 ? prev.correctPoses + 1 : prev.correctPoses
    }));
  }, [isCapturing, poseClasses]);

  useEffect(() => {
    if (isCapturing) {
      const interval = setInterval(simulatePoseDetection, 1000);
      return () => clearInterval(interval);
    }
  }, [isCapturing, simulatePoseDetection]);

  // Session timer
  useEffect(() => {
    if (isCapturing) {
      const timer = setInterval(() => {
        setSessionStats(prev => ({
          ...prev,
          sessionTime: prev.sessionTime + 1
        }));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isCapturing]);

  const toggleCapture = () => {
    if (isModelLoading) return;
    setIsCapturing(!isCapturing);
  };

  const resetSession = () => {
    setIsCapturing(false);
    setCurrentPose('');
    setConfidence(0);
    setSessionStats({
      totalPoses: 0,
      correctPoses: 0,
      sessionTime: 0
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="glass-card rounded-2xl p-8 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Model</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-display font-bold gradient-text mb-4">
          AI Yoga Pose Classifier
        </h1>
        <p className="text-xl text-gray-600">
          Position yourself in front of the camera and perform yoga poses for real-time classification
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Camera Feed */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-2xl p-6">
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6">
              {isModelLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading AI Model...</p>
                  </div>
                </div>
              ) : (
                <>
                  <Webcam
                    ref={webcamRef}
                    audio={false}
                    className="w-full h-full object-cover"
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                      width: 1280,
                      height: 720,
                      facingMode: "user"
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Recording indicator */}
                    {isCapturing && (
                      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-500 text-white px-3 py-2 rounded-lg">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        <span className="font-medium">LIVE</span>
                      </div>
                    )}
                    
                    {/* Pose detection overlay */}
                    {currentPose && isCapturing && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="glass-card rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">{currentPose}</h3>
                              <p className="text-sm text-gray-600">{poseDescriptions[currentPose as keyof typeof poseDescriptions]}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold gradient-text">
                                {(confidence * 100).toFixed(1)}%
                              </div>
                              <div className="text-sm text-gray-600">Confidence</div>
                            </div>
                          </div>
                          
                          {/* Confidence bar */}
                          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${confidence * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={toggleCapture}
                disabled={isModelLoading}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isCapturing
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'btn-primary'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isCapturing ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span>Stop Detection</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Start Detection</span>
                  </>
                )}
              </button>
              
              <button
                onClick={resetSession}
                className="btn-secondary"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Stats Panel */}
        <div className="space-y-6">
          {/* Session Stats */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Session Stats</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Session Time</span>
                <span className="font-bold text-lg">{formatTime(sessionStats.sessionTime)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Poses</span>
                <span className="font-bold text-lg">{sessionStats.totalPoses}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Accuracy</span>
                <span className="font-bold text-lg gradient-text">
                  {sessionStats.totalPoses > 0 
                    ? ((sessionStats.correctPoses / sessionStats.totalPoses) * 100).toFixed(1)
                    : 0}%
                </span>
              </div>
            </div>
          </div>

          {/* Supported Poses */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Supported Poses</h3>
            
            <div className="space-y-3">
              {poseClasses.filter(pose => pose !== 'No Pose').map((pose, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    currentPose === pose
                      ? 'bg-gradient-to-r from-primary-100 to-secondary-100 border-2 border-primary-300'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium text-gray-800">{pose}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {poseDescriptions[pose as keyof typeof poseDescriptions]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tips for Better Detection</h3>
            
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Ensure good lighting and clear background</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Position your full body in the camera frame</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Hold poses for 2-3 seconds for accurate detection</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Wear contrasting clothing for better recognition</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoseClassifier;