import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Citation from './components/Citation';
import Footer from './components/Footer';
import ScenariosPage from './components/ScenariosPage';
import MultimodalPage from './components/MultimodalPage';
import DataGallery from './components/DataGallery';
import DataUsagePage from './components/DataUsagePage';
import DownloadPage from './components/DownloadPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'scenarios' | 'multimodal' | 'usage' | 'download'>('home');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <section id="overview">
              <Hero />
            </section>

            {/* Adjusted width to ~80% (lg:w-[80%]) as requested, ensuring responsive padding */}
            <section id="introduction" className="py-16 px-4 sm:px-6 lg:px-8 w-full md:w-[90%] lg:w-[80%] mx-auto space-y-12">
              <Introduction />

              {/* 
                === Video Section Example === 
                Uncomment and update the src path to add a project demo video.
                Place your video file in the public/videos folder.
              */}
              {/* 
              <VideoDisplay 
                title="Project Demo"
                description="Watch a demonstration of the Multimodal-LAE-XLMIMO dataset generation pipeline and visualization."
                src="videos/demo.mp4" 
              /> 
              */}
            </section>

            <section id="gallery" className="py-12 px-4 sm:px-6 lg:px-8 max-w-[90%] mx-auto w-full">
              <DataGallery />
            </section>

            <section id="citation" className="py-16 px-4 sm:px-6 lg:px-8 max-w-[90%] mx-auto w-full">
              <Citation />
            </section>
          </>
        )}
        
        {currentPage === 'scenarios' && (
          <ScenariosPage />
        )}

        {currentPage === 'multimodal' && (
          <MultimodalPage />
        )}

        {currentPage === 'usage' && (
          <DataUsagePage />
        )}

        {currentPage === 'download' && (
          <DownloadPage />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;