import React from 'react';

interface SectionItem {
  title: string;
  image: string;
  colSpan?: number;
}

interface SubSection {
  title?: string;
  items: SectionItem[];
  isWide?: boolean;
  customAspect?: string;
}

interface Section {
  title: string;
  subSections: SubSection[];
}

const MultimodalPage: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Image",
      subSections: [
        {
          title: "Customized Scenes",
          items: [
            { title: "Train set", image: "images/multimodal/bs_rgb_City001.png" },
            { title: "Val set", image: "images/multimodal/bs_rgb_City027.png" },
            { title: "Test set", image: "images/multimodal/bs_rgb_City023.png" },
          ]
        }
      ]
    },
    {
      title: "Lidar",
      subSections: [
        {
          title: "Customized Scenes",
          items: [
            { title: "Train set", image: "images/multimodal/lidar_City_train.png" },
            { title: "Val set", image: "images/multimodal/lidar_City_val.png" },
            { title: "Test set", image: "images/multimodal/lidar_City_test.png" },
          ]
        }
      ]
    },
    {
      title: "Near-field Codebook",
      subSections: [
        {
          isWide: true,
          items: [
            { title: "Compact codebook (20 × 20 × 10)", image: "images/multimodal/small_codebook_vis.png" },
            { title: "Dense codebook (90 × 45 × 16)", image: "images/multimodal/large_codebook_vis.png" },
          ]
        }
      ]
    },
    {
      title: "Beamforming",
      subSections: [
        {
          isWide: true,
          // Previous was aspect-[5/3] (1.666). Increasing height by 5% means Aspect = 1.666 / 1.05 = 1.587 -> aspect-[100/63]
          customAspect: "aspect-[100/63]",
          items: [
            { title: "Compact codebook (20 × 20 × 10)", image: "images/multimodal/small_codebook_beam_3d_visualization.png" },
            { title: "Dense codebook (90 × 45 × 16)", image: "images/multimodal/large_codebook_beam_3d_visualization.png" },
          ]
        }
      ]
    },
    {
      title: "Beam index",
      subSections: [
        {
          isWide: true,
          // Previous was aspect-[3/2] (1.5). Increasing height by 2% means Aspect = 1.5 / 1.02 = 1.4705 -> aspect-[25/17]
          customAspect: "aspect-[25/17]",
          items: [
            { title: "LoS Scenario", image: "images/multimodal/beam_vis_los.png" },
            { title: "NLoS Scenario", image: "images/multimodal/beam_vis_nlos.png" },
          ]
        }
      ]
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback to placeholder if local image is missing
    e.currentTarget.src = "https://picsum.photos/600/400?grayscale";
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Multimodal Visualization
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed w-full">
              This section visualizes representative multimodal sensing data included in the dataset, including camera images, LiDAR point clouds, near-field codebooks, and beamforming results. Typical examples are selected from the training, validation, and test splits. <span className="italic">Note that the following multimodal visualizations are available only in the Multimodal Near-Field Dataset over Customized Scenes.</span>
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="flex flex-col items-center w-full">
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
                  {section.title}
                </h3>

                <div className="w-full flex flex-col gap-12">
                  {section.subSections.map((subSection, subIdx) => {
                     // Check if any item in this subsection has a specific colSpan
                     const hasCustomSpans = subSection.items.some((i) => i.colSpan);

                     return (
                      <div key={subIdx} className="w-full flex flex-col gap-6">
                        {subSection.title && (
                          <h4 className="text-xl font-semibold text-slate-700 text-center border-b border-slate-100 pb-2 mx-auto w-fit px-8">
                            {subSection.title}
                          </h4>
                        )}
                        
                        {/* Special handling for 5 items to keep the 3+2 layout */}
                        {subSection.items.length === 5 ? (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {subSection.items.slice(0, 3).map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-full aspect-[4/3] bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-md hover:ring-2 hover:ring-teal-500 hover:ring-offset-2">
                                      <img src={item.image} alt={item.title} onError={handleImageError} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <span className="mt-4 font-bold text-slate-700 text-lg tracking-wide group-hover:text-teal-600 transition-colors text-center">{item.title}</span>
                                </div>
                              ))}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 md:mx-auto">
                              {subSection.items.slice(3).map((item, idx) => (
                                <div key={idx + 3} className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-full aspect-[4/3] bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-md hover:ring-2 hover:ring-teal-500 hover:ring-offset-2">
                                      <img src={item.image} alt={item.title} onError={handleImageError} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <span className="mt-4 font-bold text-slate-700 text-lg tracking-wide group-hover:text-teal-600 transition-colors text-center">{item.title}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          // Standard Grid Logic
                          <div className={`grid grid-cols-1 gap-6 ${
                              hasCustomSpans ? 'md:grid-cols-3' : // Use 3 cols if we have spans
                              subSection.items.length >= 3 ? 'md:grid-cols-3' : 
                              subSection.items.length === 2 ? (subSection.isWide ? 'md:grid-cols-2' : 'md:grid-cols-2 md:w-2/3 md:mx-auto') :
                              subSection.items.length === 1 ? 'md:grid-cols-1 md:w-1/2 md:mx-auto' : // Center single items nicely
                              'md:grid-cols-3'
                          }`}>
                            {subSection.items.map((item, idx) => (
                                <div 
                                  key={idx} 
                                  className={`flex flex-col items-center group cursor-pointer ${item.colSpan ? `md:col-span-${item.colSpan}` : ''}`}
                                >
                                  <div className={`w-full bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-md hover:ring-2 hover:ring-teal-500 hover:ring-offset-2 ${
                                    item.colSpan === 2 
                                      ? 'aspect-[8/3]' 
                                      : subSection.customAspect 
                                        ? subSection.customAspect 
                                        : subSection.isWide 
                                          ? 'aspect-[2/1]' 
                                          : 'aspect-[4/3]'
                                  }`}>
                                    <img src={item.image} alt={item.title} onError={handleImageError} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                                  </div>
                                  <span className="mt-4 font-bold text-slate-700 text-lg tracking-wide group-hover:text-teal-600 transition-colors text-center">{item.title}</span>
                                </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultimodalPage;