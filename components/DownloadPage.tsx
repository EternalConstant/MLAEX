import React from 'react';
import { ExternalLink, HardDrive } from 'lucide-react';

const DownloadPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Container aligned with other pages */}
      <div className="max-w-[85rem] mx-auto space-y-6">
        
        {/* Main Content Box */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Download the Multimodal-LAE-XLMIMO Dataset
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed w-full mb-8">
              The Multimodal-LAE-XLMIMO dataset is available for download.
            </p>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <ul className="space-y-4">
                    <li className="flex items-start group">
                        <span className="mr-3 text-teal-500 mt-1">•</span>
                        <a 
                            href="https://drive.google.com/drive/folders/1PnjIwXSudX33-_4c_0Es1WZ10MXFgw82?usp=drive_link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-lg text-slate-800 hover:text-teal-600 font-medium transition-colors flex items-center gap-2 group-hover:underline underline-offset-4 decoration-teal-500/30"
                        >
                            <HardDrive size={20} className="text-slate-400 group-hover:text-teal-500 transition-colors" />
                            The Hybrid-Field Dataset over Realistic Scenarios and Road Networks: Download from OneDrive
                            <ExternalLink size={16} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-all ml-1" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DownloadPage;