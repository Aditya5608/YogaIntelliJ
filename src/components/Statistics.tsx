import React from 'react';
import { TrendingUp, Target, Clock, Award, Calendar, BarChart3 } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = {
    totalSessions: 47,
    totalTime: 1420, // minutes
    averageAccuracy: 92.5,
    favoritePose: 'Downward Dog',
    streak: 12,
    improvement: 15.3
  };

  const weeklyData = [
    { day: 'Mon', sessions: 2, accuracy: 89 },
    { day: 'Tue', sessions: 1, accuracy: 94 },
    { day: 'Wed', sessions: 3, accuracy: 91 },
    { day: 'Thu', sessions: 2, accuracy: 96 },
    { day: 'Fri', sessions: 1, accuracy: 88 },
    { day: 'Sat', sessions: 4, accuracy: 93 },
    { day: 'Sun', sessions: 2, accuracy: 95 }
  ];

  const poseStats = [
    { name: 'Downward Dog', attempts: 156, accuracy: 95, improvement: '+8%' },
    { name: 'Tree Pose', attempts: 134, accuracy: 89, improvement: '+12%' },
    { name: 'Warrior Pose', attempts: 128, accuracy: 92, improvement: '+5%' },
    { name: 'Triangle Pose', attempts: 98, accuracy: 87, improvement: '+15%' },
    { name: 'Chair Pose', attempts: 87, accuracy: 94, improvement: '+3%' },
    { name: 'Cobra Pose', attempts: 76, accuracy: 91, improvement: '+7%' }
  ];

  const achievements = [
    { title: 'First Steps', description: 'Complete your first session', earned: true },
    { title: 'Week Warrior', description: 'Practice for 7 consecutive days', earned: true },
    { title: 'Accuracy Master', description: 'Achieve 95% accuracy in a session', earned: true },
    { title: 'Pose Explorer', description: 'Try all 8 supported poses', earned: false },
    { title: 'Dedication', description: 'Complete 50 sessions', earned: false },
    { title: 'Zen Master', description: 'Practice for 30 consecutive days', earned: false }
  ];

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold gradient-text mb-4">
          Your Yoga Journey
        </h1>
        <p className="text-xl text-gray-600">
          Track your progress and celebrate your achievements in yoga practice
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="glass-card rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold gradient-text mb-2">{stats.totalSessions}</div>
          <div className="text-gray-600">Total Sessions</div>
        </div>

        <div className="glass-card rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold gradient-text mb-2">{formatTime(stats.totalTime)}</div>
          <div className="text-gray-600">Practice Time</div>
        </div>

        <div className="glass-card rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold gradient-text mb-2">{stats.averageAccuracy}%</div>
          <div className="text-gray-600">Avg Accuracy</div>
        </div>

        <div className="glass-card rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold gradient-text mb-2">{stats.streak}</div>
          <div className="text-gray-600">Day Streak</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Weekly Progress */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Weekly Progress</h3>
            <BarChart3 className="w-5 h-5 text-gray-500" />
          </div>

          <div className="space-y-4">
            {weeklyData.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(day.sessions / 4) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{day.sessions} sessions</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-800">{day.accuracy}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pose Performance */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Pose Performance</h3>
            <Target className="w-5 h-5 text-gray-500" />
          </div>

          <div className="space-y-4">
            {poseStats.map((pose, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-800">{pose.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-green-600 font-medium">{pose.improvement}</span>
                    <span className="text-sm text-gray-600">{pose.accuracy}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{pose.attempts} attempts</span>
                  <div className="w-24 bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-1.5 rounded-full"
                      style={{ width: `${pose.accuracy}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="glass-card rounded-2xl p-6 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Achievements</h3>
          <Award className="w-5 h-5 text-gray-500" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                achievement.earned
                  ? 'border-primary-200 bg-primary-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.earned
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                    : 'bg-gray-300'
                }`}>
                  <Award className={`w-5 h-5 ${achievement.earned ? 'text-white' : 'text-gray-500'}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium mb-1 ${
                    achievement.earned ? 'text-gray-800' : 'text-gray-500'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${
                    achievement.earned ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Insights & Recommendations</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Most Improved Pose</h4>
                <p className="text-sm text-gray-600">
                  Triangle Pose shows your biggest improvement (+15%) this week. Keep practicing!
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Consistency Streak</h4>
                <p className="text-sm text-gray-600">
                  You're on a {stats.streak}-day streak! Try to reach 30 days for the Zen Master achievement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Focus Area</h4>
                <p className="text-sm text-gray-600">
                  Consider practicing Tree Pose more often to improve your balance and accuracy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Next Goal</h4>
                <p className="text-sm text-gray-600">
                  You're close to completing 50 sessions! Only 3 more to unlock the Dedication achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;