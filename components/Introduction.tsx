import React from 'react';
import { Diamond } from 'lucide-react';

const Introduction: React.FC = () => {
  const features = [
    <span key="feat-1">Supports Sionna-based ray-tracing modeling of both <strong className="font-bold text-slate-800">near-field and far-field upper mid-band XL-MIMO channels</strong>.</span>,
    <span key="feat-2">Provides integrated <strong className="font-bold text-slate-800">multimodal data</strong>, including camera images, LiDAR point clouds, UAV positions, near-field XL-MIMO channel, beam-related labels, and near-field or far-field labels.</span>,
    <span key="feat-3">Consists of two complementary sub-datasets designed to support diverse <strong className="font-bold text-slate-800">low-altitude communication and sensing studies</strong>.</span>,
    <span key="feat-4"><strong className="font-bold text-slate-800">The Hybrid-Field Dataset over Realistic Scenarios and Road Networks</strong> covers over 10 representative global cities with both urban and suburban settings, and provides a large-scale pre-training dataset together with a compact downstream small dataset.</span>,
    <span key="feat-5"><strong className="font-bold text-slate-800">The Multimodal Near-Field Dataset over Customized Scenes</strong> comprises 30 scene layouts, with UAV trajectories categorized into easy and difficult motion patterns. It includes both LoS and NLoS propagation conditions.</span>
  ];

  const images = [
    "images/Overview/scene_1.png",
    "images/Overview/scene_2.png",
    "images/Overview/scene_3.png",
    "images/Overview/scene_4.png"
  ];

  return (
    <div className="w-full">
      {/* Project Box Wrapper */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text Content */}
          {/* Reduced spacing between main blocks from space-y-4 to space-y-3 */}
          <div className="space-y-3">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-teal-600 sm:text-4xl mb-2">
                What is Multimodal-LAE-XLMIMO?
              </h2>
            </div>
            
            {/* Reduced paragraph spacing from space-y-2 to space-y-1.5 */}
            <div className="text-lg text-slate-600 leading-relaxed space-y-1.5 text-justify">
              <p>
                A comprehensive open-source dataset for multimodal sensing-aided XL-MIMO wireless communications in low-altitude scenarios.
              </p>
              <p>
                The dataset is created using a unified and configurable pipeline that integrates real map-based scene construction, UAV mobility simulation, and Sionna-driven ray-tracing channel modeling and sensing. It features:
              </p>
            </div>
            
            {/* Reduced list spacing from space-y-2 to space-y-1.5 */}
            <ul className="space-y-1.5 pt-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Diamond className="h-3 w-3 text-teal-500 flex-shrink-0 mt-2 mr-3 fill-teal-500" />
                  <span className="text-slate-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-16">
            {images.map((src, index) => (
              <div key={index} className="relative bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                 {/* 
                   Dynamic aspect ratio based on row index:
                   - Row 1 (index 0, 1): aspect-[160/99]
                   - Row 2 (index 2, 3): aspect-[40/27]
                 */}
                 <div className={`w-full ${index < 2 ? 'aspect-[160/99]' : 'aspect-[40/27]'}`}>
                    <img 
                      src={src} 
                      alt={`Scene visualization ${index + 1}`} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                         e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found";
                      }}
                    />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;