import React from 'react';
import { Copy } from 'lucide-react';

const Citation: React.FC = () => {
  const bibtex = `@article{YourName2025Dataset,
  title={A Large-Scale Open-Source Dataset for Multimodal Sensing},
  author={Lastname, Firstname and Other, Author},
  journal={IEEE Transactions on Wireless Communications},
  year={2025},
  publisher={IEEE}
}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 md:p-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Citation
        </h2>
        
        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          If you find the Multimodal-LAE-XLMIMO Dataset useful for your research, please consider citing:
        </p>

        <div className="relative group">
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
                className="text-xs flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-md transition-colors border border-slate-700 backdrop-blur-sm" 
                onClick={() => {
                  navigator.clipboard.writeText(bibtex);
                  // Optional: You could add a temporary "Copied!" state here
                }}
            >
                <Copy size={14} /> Copy BibTeX
            </button>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto shadow-inner border border-slate-800">
            <pre className="text-teal-100 text-sm font-mono leading-relaxed">
              {bibtex}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citation;