import React from 'react';

interface VideoDisplayProps {
    src: string;
    poster?: string;
    title?: string;
    description?: string;
}

const VideoDisplay: React.FC<VideoDisplayProps> = ({ src, poster, title, description }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 w-full">
            {(title || description) && (
                <div className="mb-8 text-center">
                    {title && <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>}
                    {description && <p className="text-lg text-slate-600 max-w-4xl mx-auto">{description}</p>}
                </div>
            )}
            <div className="relative w-full rounded-xl overflow-hidden bg-slate-900 aspect-video shadow-md">
                <video 
                    className="w-full h-full object-contain"
                    controls
                    poster={poster}
                    preload="metadata"
                >
                    <source src={src} type="video/mp4" />
                    {/* Add more sources if needed, e.g. webm */}
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoDisplay;