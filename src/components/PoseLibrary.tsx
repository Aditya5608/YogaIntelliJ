import React, { useState } from 'react';
import { Search, Filter, Clock, Target, Heart } from 'lucide-react';

const PoseLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const poses = [
    {
      id: 1,
      name: 'Chair Pose',
      sanskrit: 'Utkatasana',
      difficulty: 'beginner',
      category: 'standing',
      duration: '30-60 seconds',
      benefits: ['Strengthens thighs', 'Improves balance', 'Energizes body'],
      description: 'A powerful standing pose that builds strength in the legs and core while improving balance and focus.',
      instructions: [
        'Stand with feet hip-width apart',
        'Bend knees and lower hips as if sitting in a chair',
        'Raise arms overhead, palms facing each other',
        'Keep chest lifted and weight in heels',
        'Hold for 30-60 seconds'
      ],
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Cobra Pose',
      sanskrit: 'Bhujangasana',
      difficulty: 'beginner',
      category: 'backbend',
      duration: '15-30 seconds',
      benefits: ['Opens chest', 'Strengthens back', 'Improves posture'],
      description: 'A gentle backbend that opens the chest and strengthens the spine while improving flexibility.',
      instructions: [
        'Lie face down with palms under shoulders',
        'Press palms down and lift chest off the ground',
        'Keep hips on the floor',
        'Draw shoulders away from ears',
        'Hold for 15-30 seconds'
      ],
      image: 'https://images.pexels.com/photos/4056761/pexels-photo-4056761.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Downward Dog',
      sanskrit: 'Adho Mukha Svanasana',
      difficulty: 'beginner',
      category: 'inversion',
      duration: '1-3 minutes',
      benefits: ['Full body stretch', 'Calms mind', 'Energizes body'],
      description: 'One of the most recognizable yoga poses, providing a full-body stretch and gentle inversion.',
      instructions: [
        'Start on hands and knees',
        'Tuck toes under and lift hips up',
        'Straighten legs and create inverted V-shape',
        'Press hands firmly into ground',
        'Hold for 1-3 minutes'
      ],
      image: 'https://images.pexels.com/photos/4056532/pexels-photo-4056532.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Tree Pose',
      sanskrit: 'Vrikshasana',
      difficulty: 'intermediate',
      category: 'standing',
      duration: '30-60 seconds',
      benefits: ['Improves balance', 'Strengthens legs', 'Enhances focus'],
      description: 'A balancing pose that builds stability and concentration while strengthening the standing leg.',
      instructions: [
        'Stand on left leg, bend right knee',
        'Place right foot on inner left thigh',
        'Bring palms together at heart center',
        'Find a focal point to maintain balance',
        'Hold for 30-60 seconds, repeat other side'
      ],
      image: 'https://images.pexels.com/photos/4056534/pexels-photo-4056534.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: 'Triangle Pose',
      sanskrit: 'Trikonasana',
      difficulty: 'intermediate',
      category: 'standing',
      duration: '30-60 seconds',
      benefits: ['Stretches sides', 'Strengthens legs', 'Improves digestion'],
      description: 'A fundamental standing pose that creates length through the sides of the body while building leg strength.',
      instructions: [
        'Stand with feet wide apart',
        'Turn right foot out 90 degrees',
        'Reach right hand toward floor, left hand up',
        'Keep both sides of waist long',
        'Hold for 30-60 seconds, repeat other side'
      ],
      image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      name: 'Warrior Pose',
      sanskrit: 'Virabhadrasana I',
      difficulty: 'beginner',
      category: 'standing',
      duration: '30-60 seconds',
      benefits: ['Builds strength', 'Improves focus', 'Opens hips'],
      description: 'A powerful standing pose that builds strength and stability while opening the hips and chest.',
      instructions: [
        'Step left foot back 3-4 feet',
        'Turn left foot out 45 degrees',
        'Bend right knee over ankle',
        'Raise arms overhead',
        'Hold for 30-60 seconds, repeat other side'
      ],
      image: 'https://images.pexels.com/photos/4056536/pexels-photo-4056536.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      name: 'Shoulder Stand',
      sanskrit: 'Sarvangasana',
      difficulty: 'advanced',
      category: 'inversion',
      duration: '1-5 minutes',
      benefits: ['Calms nervous system', 'Improves circulation', 'Energizes body'],
      description: 'Known as the "queen of poses," this inversion provides numerous benefits for the entire body.',
      instructions: [
        'Lie on back with arms by sides',
        'Lift legs and hips off the ground',
        'Support lower back with hands',
        'Straighten legs toward ceiling',
        'Hold for 1-5 minutes'
      ],
      image: 'https://images.pexels.com/photos/4056537/pexels-photo-4056537.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];
  const categories = ['all', 'standing', 'backbend', 'inversion'];

  const filteredPoses = poses.filter(pose => {
    const matchesSearch = pose.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pose.sanskrit.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || pose.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'all' || pose.category === selectedCategory;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold gradient-text mb-4">
          Yoga Pose Library
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive collection of yoga poses with detailed instructions, 
          benefits, and proper alignment cues for practitioners of all levels.
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card rounded-2xl p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search poses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredPoses.length} of {poses.length} poses
        </p>
      </div>

      {/* Poses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPoses.map((pose) => (
          <div key={pose.id} className="pose-card group">
            {/* Image */}
            <div className="relative aspect-video mb-6 rounded-xl overflow-hidden">
              <img
                src={pose.image}
                alt={pose.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(pose.difficulty)}`}>
                  {pose.difficulty}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{pose.name}</h3>
                <p className="text-sm text-gray-500 italic">{pose.sanskrit}</p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {pose.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{pose.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4" />
                  <span className="capitalize">{pose.category}</span>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                  <Heart className="w-4 h-4 mr-1 text-red-500" />
                  Benefits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {pose.benefits.slice(0, 3).map((benefit, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-lg"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instructions Preview */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Instructions</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  {pose.instructions.slice(0, 2).map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-500 mr-2 font-medium">{index + 1}.</span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                  {pose.instructions.length > 2 && (
                    <li className="text-primary-600 font-medium">
                      +{pose.instructions.length - 2} more steps...
                    </li>
                  )}
                </ol>
              </div>

              {/* Action Button */}
              <button className="w-full btn-primary text-sm py-2">
                View Full Instructions
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredPoses.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No poses found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedDifficulty('all');
              setSelectedCategory('all');
            }}
            className="btn-primary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default PoseLibrary;