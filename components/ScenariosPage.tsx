import React from 'react';

const ScenariosPage: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
     // Fallback to placeholder if local image is missing
    e.currentTarget.src = "https://picsum.photos/600/400?grayscale";
  };

  // Helper component for consistent item rendering
  const SceneItem = ({ title, image, colSpan = 1 }: { title: string, image: string, colSpan?: number }) => (
    <div className={`flex flex-col items-center group cursor-pointer ${colSpan > 1 ? `md:col-span-${colSpan}` : ''}`}>
      {/* 
         Restored aspect ratio to aspect-[4/3] (and aspect-[8/3] for colSpan=2) to maintain original layout size.
         Kept object-contain to ensure images are fully visible without cropping.
         Kept bg-white for cleaner look.
      */}
      <div className={`w-full bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-md hover:ring-2 hover:ring-teal-500 hover:ring-offset-2 ${colSpan === 2 ? 'aspect-[8/3]' : 'aspect-[4/3]'}`}>
        <img 
            src={image} 
            alt={title} 
            onError={handleImageError} 
            // object-contain ensures full image visibility
            className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <span className="mt-4 font-bold text-slate-700 text-lg tracking-wide group-hover:text-teal-600 transition-colors text-center">
        {title}
      </span>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Scene Visualization
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed w-full">
              This section visualizes representative scenes, UAV mobility patterns, and wireless channel characteristics included in the dataset. Typical examples are selected from the training, validation, and test splits. Both the Hybrid-Field Dataset over Realistic Scenarios and Road Networks and the Multimodal Near-Field Dataset over Customized Scenes are presented for comparison.
            </p>
        </div>

        {/* Project Box 1: Scene and UAV Mobility Visualization */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Scene and UAV Mobility Visualization
            </h2>

            <div className="space-y-16">
                {/* Section 1.1: OSM-based */}
                <div className="flex flex-col items-center w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
                        OSM-based Urban and Suburban Scenes with Trajectory
                    </h3>
                    
                    <div className="w-full flex flex-col gap-12">
                        {/* Urban */}
                        <div className="w-full flex flex-col gap-6">
                             <h4 className="text-xl font-semibold text-slate-700 text-center border-b border-slate-100 pb-2 mx-auto w-fit px-8">
                                Urban Scene
                             </h4>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <SceneItem title="Train set" image="images/scene/train_urban.png" />
                                <SceneItem title="Val set" image="images/scene/val_urban.png" />
                                <SceneItem title="Test set" image="images/scene/test_urban.png" />
                             </div>
                        </div>

                        {/* Suburban */}
                        <div className="w-full flex flex-col gap-6">
                             <h4 className="text-xl font-semibold text-slate-700 text-center border-b border-slate-100 pb-2 mx-auto w-fit px-8">
                                Suburban Scene
                             </h4>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <SceneItem title="Train set" image="images/scene/train_suburban.png" />
                                <SceneItem title="Val set" image="images/scene/val_suburban.png" />
                                <SceneItem title="Test set" image="images/scene/test_suburban.png" />
                             </div>
                        </div>
                    </div>
                </div>

                {/* Section 1.2: Customized */}
                <div className="flex flex-col items-center w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
                        Customized Scenes with Trajectory
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        <SceneItem title="Train set" image="images/scene/train_scene_City001.png" />
                        <SceneItem title="Val set" image="images/scene/val_scene_City027.png" />
                        <SceneItem title="Test set" image="images/scene/test_scene_City023.png" />
                    </div>
                </div>
            </div>
        </div>

        {/* Project Box 2: Ray-tracing */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Ray-tracing-based Channel Visualization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SceneItem title="OSM-based Urban and Suburban Scenes" image="images/scene/RT1.png" colSpan={2} />
                <SceneItem title="Customized Scenes" image="images/scene/RT2.png" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default ScenariosPage;