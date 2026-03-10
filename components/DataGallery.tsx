import React from 'react';

// Define the interface for data items
interface DataItem {
  title: string;
  // Use array to support multiple images/videos for one item
  images: string[];
  // Custom class for grid column spanning
  className?: string;
}

const DataGallery: React.FC = () => {
  // Images should be placed in: [Project Root]/public/images/Overview/
  const dataItems: DataItem[] = [
    { 
      title: "Channel", 
      images: ["images/Overview/Channel.jpg"],
      className: "lg:col-span-1"
    },
    { 
      title: "GPS", 
      images: ["images/Overview/GPS.jpg"],
      className: "lg:col-span-1"
    },
    { 
      title: "RGB Image", 
      // Using %20 to explicitly handle the space in the filename
      images: ["images/Overview/RGB%20Image.jpg"],
      className: "lg:col-span-1"
    },
    { 
      title: "Lidar", 
      images: ["images/Overview/Lidar.jpg"],
      className: "lg:col-span-1"
    },
    { 
      title: "Codebook", 
      // Two images displayed side-by-side
      images: ["images/Overview/Codebook1.jpg", "images/Overview/Codebook2.jpg"],
      className: "sm:col-span-2 lg:col-span-2"
    },
    { 
      title: "Beamforming", 
      // Two images displayed side-by-side
      images: ["images/Overview/Beamforming1.jpg", "images/Overview/Beamforming2.jpg"],
      className: "sm:col-span-2 lg:col-span-2"
    },
    // Example of how to add a video item:
    // {
    //   title: "Dataset Demo Video",
    //   images: ["videos/demo_clip.mp4"], // File ending in .mp4 will be rendered as video
    //   className: "sm:col-span-2 lg:col-span-2"
    // }
  ];

  const isVideo = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // If image fails to load, show a clear "Not Found" placeholder
    e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found";
    e.currentTarget.alt = "File not found - check public/images/Overview folder";
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Multimodal Data Involved</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataItems.map((item, index) => (
          <div 
            key={index} 
            className={`group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${item.className || ''}`}
          >
            {/* Media Container */}
            <div className={`relative overflow-hidden h-72 bg-white flex ${item.images.length > 1 ? 'divide-x divide-slate-100' : ''}`}>
              {item.images.map((src, imgIdx) => (
                <div key={imgIdx} className={`relative h-full ${item.images.length > 1 ? 'w-1/2' : 'w-full'}`}>
                    {isVideo(src) ? (
                        <video
                            src={src}
                            controls
                            preload="metadata"
                            className="w-full h-full object-contain bg-black/5"
                        >
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img 
                            src={src} 
                            alt={`${item.title} ${imgIdx + 1}`} 
                            onError={handleImageError}
                            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        />
                    )}
                </div>
              ))}
              
              {/* Overlay only for images to avoid blocking video controls */}
              {!item.images.some(isVideo) && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
              )}
            </div>

            {/* Title */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataGallery;