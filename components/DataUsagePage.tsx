import React from 'react';

const DataUsagePage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Reduced max-w from 96rem to 85rem to decrease width */}
      <div className="max-w-[85rem] mx-auto space-y-6">
        
        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Data Usage
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed w-full">
              This section first introduces the data generation pipeline of the Hybrid-Field Dataset over Realistic Scenarios and Road Networks and the Multimodal Near-Field Dataset over Customized Scenes. The datasets include RGB images, LiDAR, and GPS-based UAV trajectories to capture the surrounding environment and UAV mobility. Building upon these environment-aware observations, channel and beam-related modalities are further provided to support research on near-field propagation and beamforming. The detailed data organization, structure, and contents of the dataset are then described.
            </p>
        </div>

        {/* Project Box 1: Data Generation Pipeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Data Generation Pipeline
            </h2>
            
            <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto mb-6">
              The dataset is generated through a four-stage pipeline. Each stage focuses on a specific aspect of environment modeling, UAV mobility, wireless propagation, and multimodal data acquisition.
            </p>
            
            <div className="flex flex-col gap-10">
                {/* Step 1 */}
                <div className="flex flex-col items-start w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-left mb-2">
                        Step 1: Scene Construction
                    </h3>
                    
                    <div className="text-lg text-slate-600 leading-relaxed mb-4 w-full space-y-2">
                        <p>Two types of scenes are constructed:</p>
                        
                        <div>
                            <span className="text-xl font-bold text-slate-900 block mb-1">Mode 1: OSM-Based Realistic Scenes</span>
                            <ul className="list-disc pl-5 space-y-0.5 marker:text-teal-500">
                                <li>Realistic scenes are constructed based on OpenStreetMap (OSM), which provides detailed geometric information of static scene elements.</li>
                                <li>Building footprints, heights, and road layouts are extracted from OSM and transformed into a unified region-of-interest (ROI) coordinate system.</li>
                            </ul>
                        </div>

                        <div>
                            <span className="text-xl font-bold text-slate-900 block mb-1">Mode 2: Customized Scenes</span>
                            <ul className="list-disc pl-5 space-y-0.5 marker:text-teal-500">
                                <li>Customized scenes are generated within a 100 m × 100 m spatial area to simulate near-field propagation conditions.</li>
                                <li>Building layouts, heights, and sizes, as well as road configurations, are flexibly defined to create diverse controlled environments. Building layouts and heights are configurable, typically ranging from 20 m to 60 m.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 1 Image - Reduced width to 70% and centered */}
                    <div className="w-[70%] mx-auto bg-slate-50 rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                         <img 
                           src="images/datausage/Step1.png" 
                           alt="Step 1 Scene Construction Visualization" 
                           className="w-full h-auto object-cover"
                           onError={(e) => {
                             e.currentTarget.src = "https://placehold.co/1200x600/e2e8f0/475569?text=Step+1+Visualization+(Step1.png)";
                           }}
                         />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-start w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-left mb-2">
                        Step 2: UAV Mobility Simulation
                    </h3>
                    
                    <div className="text-lg text-slate-600 leading-relaxed mb-4 w-full space-y-2">
                        <p>Two types of UAV mobility modes are considered:</p>

                        <div>
                            <span className="text-xl font-bold text-slate-900 block mb-1">Mode 1: SUMO-Based UAV Trajectories over Real Road Networks</span>
                            
                            <div className="space-y-3 mt-2">
                                <div>
                                    <span className="font-bold text-slate-800 block">Horizontal Trajectory Modeling</span>
                                    <ul className="list-disc pl-5 space-y-0.5 marker:text-teal-500 mt-1">
                                        <li>UAV horizontal trajectories are generated using SUMO by simulating UAV motion along real-world road networks extracted from OSM.</li>
                                        <li>The simulated trajectories are first represented in the WGS84 geodetic coordinate system, and then converted into city-specific projected planar coordinate systems (e.g., Gauss–Krüger projection with EPSG:4526, EPSG:32118, EPSG:27700).</li>
                                        <li>All trajectories are finally expressed in a local ROI-centered coordinate frame for unified scene representation.</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="font-bold text-slate-800 block">Vertical Trajectory Modeling</span>
                                    <ul className="list-disc pl-5 space-y-0.5 marker:text-teal-500 mt-1">
                                        <li>
                                            Two altitude variation patterns are considered:
                                            <ul className="list-[circle] pl-5 space-y-0.5 marker:text-slate-400 mt-1">
                                                <li>Deterministic sinusoidal motion, representing periodic scanning or patrol tasks.</li>
                                                <li>Smoothed stochastic random walk, modeling altitude fluctuations caused by wind disturbances or non-deterministic maneuvers.</li>
                                            </ul>
                                        </li>
                                        <li>Altitude values are constrained within safe flight ranges, typically above surrounding buildings, to avoid collisions.</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="font-bold text-slate-800 block">3D Trajectory Representation</span>
                                    <ul className="list-disc pl-5 space-y-0.5 marker:text-teal-500 mt-1">
                                        <li>Horizontal and vertical motions are jointly combined to form complete 3D UAV trajectories.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-xl font-bold text-slate-900 block mb-1">Mode 2: Customized UAV Trajectories in Synthetic Scenes</span>
                            <ul className="list-disc pl-5 space-y-0.5 marker:text-teal-500">
                                <li>
                                    A diverse set of predefined UAV motion patterns is provided, categorized by difficulty level:
                                    <ul className="list-[circle] pl-5 space-y-0.5 marker:text-slate-400 mt-1">
                                        <li>Easy patterns: Patrol, Cruise, Orbit, Scan, Transit, Hover</li>
                                        <li>Hard patterns: Zigzag, Wall Hug, Sudden Turn, Inspect</li>
                                    </ul>
                                </li>
                                <li>Each trajectory pattern is associated with specific motion constraints, including horizontal speed, vertical speed, and altitude range, covering various low-, mid-, and high-altitude urban airspaces.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 2 Video - Smaller width than image, white background frame (padding) */}
                    <div className="w-[60%] mx-auto bg-white rounded-lg border border-slate-200 shadow-sm p-2 mb-6">
                         <video 
                           src="videos/SUMO_Trajectory.mp4" 
                           className="w-full h-auto rounded"
                           autoPlay
                           loop
                           muted
                           playsInline
                         >
                           Your browser does not support the video tag.
                         </video>
                    </div>

                    {/* Step 2 Image - Reduced width to 70% and centered */}
                    <div className="w-[70%] mx-auto bg-slate-50 rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                         <img 
                           src="images/datausage/Step2.png" 
                           alt="Step 2 UAV Mobility Simulation Visualization" 
                           className="w-full h-auto object-cover"
                           onError={(e) => {
                             e.currentTarget.src = "https://placehold.co/1200x600/e2e8f0/475569?text=Step+2+Visualization+(Step2.png)";
                           }}
                         />
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-start w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-left mb-2">
                        Step 3: Ray-Tracing-Based Channel Generation
                    </h3>
                    
                    <div className="text-lg text-slate-600 leading-relaxed mb-4 w-full">
                        <ul className="list-disc pl-5 space-y-2 marker:text-teal-500">
                            <li>Wireless channels are generated using a Sionna-based ray-tracing framework built on the constructed 3D scenes and simulated UAV trajectories.</li>
                            <li>A base station equipped with an XL-MIMO antenna array is deployed at a fixed location. Ray tracing is performed between the base station and the UAV to extract propagation paths, with the BS positioned at (0, 0, 30 m) in urban scenarios and at (0, 0, 65 m) in suburban and customized scenes.</li>
                            <li>Standardized ITU radio materials are assigned to different scene objects to model realistic electromagnetic interactions.</li>
                            <li>Both near-field and mixed-field propagation conditions are considered, determined by the propagation distance relative to the Rayleigh distance of the XL-MIMO array. Near-field channels capture spherical-wave effects and spatial non-stationarity across the large antenna array, while far-field channels follow conventional plane-wave assumptions.</li>
                            <li>The resulting channel state information is generated in a frame-wise manner and aligned with UAV trajectory samples.</li>
                        </ul>
                    </div>

                    {/* Step 3 Image - Reduced width to 45% (further reduced by 25% from 60%) and centered */}
                    <div className="w-[45%] mx-auto bg-slate-50 rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                         <img 
                           src="images/datausage/Step3.png" 
                           alt="Step 3 Ray-Tracing-Based Channel Generation Visualization" 
                           className="w-full h-auto object-cover"
                           onError={(e) => {
                             e.currentTarget.src = "https://placehold.co/1200x600/e2e8f0/475569?text=Step+3+Visualization+(Step3.png)";
                           }}
                         />
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-start w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-left mb-2">
                        Step 4: Multimodal Data Acquisition
                    </h3>
                    
                    <div className="text-lg text-slate-600 leading-relaxed mb-4 w-full space-y-4">
                        <ul className="list-disc pl-5 space-y-4 marker:text-teal-500">
                             <li>
                                <span className="text-xl font-bold text-slate-900 block mb-1">RGB Image</span>
                                <p>RGB images are rendered from fixed base-station-mounted cameras using a consistent viewpoint toward the UAV flight region.</p>
                             </li>
                             <li>
                                <span className="text-xl font-bold text-slate-900 block mb-1">LiDAR</span>
                                <p>LiDAR point clouds are generated from the base station perspective, capturing 3D geometric structures of buildings and the UAV within the scene. Each frame contains a fixed number of sampled points.</p>
                             </li>
                             <li>
                                <span className="text-xl font-bold text-slate-900 block mb-1">GPS</span>
                                <p>GPS is derived from simulated trajectories, with additive Gaussian noise applied.</p>
                             </li>
                             <li>
                                <span className="text-xl font-bold text-slate-900 block mb-1">Near-Field Beam Codebooks</span>
                                <p className="mb-2">Two near-field beam codebooks with different resolutions are constructed:</p>
                                <ul className="list-[circle] pl-5 space-y-6 marker:text-teal-500 mt-2">
                                    <li>
                                        <p>
                                          <span className="font-bold text-slate-800">Compact codebook (20 × 20 × 10):</span> The azimuth angle is uniformly sampled within [-72°, 72°] using 20 grid points, the elevation angle is sampled within [60°, 150°] using 20 grid points, and the propagation distance is discretized into 10 layers spanning [20 m, 155 m].
                                        </p>
                                        <div className="mt-4 w-full max-w-4xl mx-auto bg-slate-50 rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                                          <img 
                                            src="images/datausage/small_codebook_vis.png" 
                                            alt="Compact Codebook Visualization" 
                                            className="w-full h-auto object-contain"
                                            onError={(e) => {
                                              e.currentTarget.src = "https://placehold.co/800x600/e2e8f0/475569?text=Compact+Codebook+Vis";
                                            }}
                                          />
                                        </div>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="font-bold text-slate-800">Dense codebook (90 × 45 × 16):</span> The azimuth angle is uniformly discretized into 90 directions over [-72°, 72°], the elevation angle is discretized into 45 directions over [60°, 150°], and the distance dimension is sampled into 16 layers within [20 m, 155 m].
                                        </p>
                                        <div className="mt-4 w-full max-w-4xl mx-auto bg-slate-50 rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                                          <img 
                                            src="images/datausage/large_codebook_vis.png" 
                                            alt="Dense Codebook Visualization" 
                                            className="w-full h-auto object-contain"
                                            onError={(e) => {
                                              e.currentTarget.src = "https://placehold.co/800x600/e2e8f0/475569?text=Dense+Codebook+Vis";
                                            }}
                                          />
                                        </div>
                                    </li>
                                </ul>
                             </li>
                             <li>
                                <span className="text-xl font-bold text-slate-900 block mb-1">Beamforming</span>
                                <p>Based on the ray-tracing-generated channel, near-field beamforming is performed over the predefined codebooks. The large codebook provides finer angular-distance coverage and achieves higher beam alignment accuracy, particularly in single-LoS-dominant scenarios, while the small codebook offers lower complexity but coarser distance resolution. For each frame, the top-5 beams with the highest received power are identified, and their corresponding beam indices and beam powers are stored as supervision signals for learning-based beam prediction and selection.</p>
                                
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="w-full bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                                         <img 
                                           src="images/datausage/small_codebook_beam_3d_visualization.png" 
                                           alt="Small Codebook Beamforming Visualization" 
                                           className="w-full h-auto object-contain"
                                           onError={(e) => {
                                             e.currentTarget.src = "https://placehold.co/800x600/e2e8f0/475569?text=Small+Codebook+Beamforming";
                                           }}
                                         />
                                    </div>
                                    <div className="w-full bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                                         <img 
                                           src="images/datausage/large_codebook_beam_3d_visualization.png" 
                                           alt="Large Codebook Beamforming Visualization" 
                                           className="w-full h-auto object-contain"
                                           onError={(e) => {
                                             e.currentTarget.src = "https://placehold.co/800x600/e2e8f0/475569?text=Large+Codebook+Beamforming";
                                           }}
                                         />
                                    </div>
                                </div>
                             </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        {/* Project Box 2: The Hybrid-Field Dataset... */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              The Hybrid-Field Dataset over Realistic Scenarios and Road Networks
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: File Hierarchy */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">
                        File Hierarchy
                    </h3>
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 overflow-x-auto min-h-[300px]">
                        <pre className="text-sm font-mono text-slate-700 leading-relaxed">
{`├── LargeXLMIMOLAE_Dataset/
│   ├── Hybrid_Channel_UPA64X64_Train/
│   │   ├── Suburban/
│   │   │   └── Sydney/
│   │   │       └── train_all_dense.npz
│   │   └── Urban/
│   │       ├── Hangzhou/
│   │       │   └── train_all_dense.npz
│   │       ├── London/
│   │       │   └── train_all_dense.npz
│   │       ├── NewYork/
│   │       │   └── train_all_dense.npz
│   │       ├── Shanghai/
│   │       │   └── train_all_dense.npz
│   │       ├── Shenzhen/
│   │       │   └── train_all_dense.npz
│   │       ├── Tianjin/
│   │       │   └── train_all_dense.npz
│   │       └── Tokyo/
│   │           └── train_all_dense.npz
│   ├── Hybrid_Channel_UPA64X64_Val/
│   │   ├── Suburban/
│   │   │   └── Singapore/
│   │   │       └── val_all_dense.npz
│   │   └── Urban/
│   │       └── Singapore/
│   │           └── val_all_dense.npz
│   └── Hybrid_Channel_UPA64X64_Test/
│       ├── Suburban/
│       │   └── Dubai/
│       │       └── test_all_dense.npz
│       └── Urban/
│           └── Dubai/
│               └── test_all_dense.npz
└── Downstream_Dataset/
    └── Hybrid_Channel_UPA64X64_Train/
        ├── Suburban/
        │   └── Beijing/
        │       └── train_all_dense.npz
        ├── Urban/
        │   └── Beijing/
        │       └── train_all_dense.npz
        ├── Hybrid_Channel_UPA64X64_Val/
        │   ├── Suburban/
        │   │   └── Berlin/
        │   │       └── val_all_dense.npz
        │   └── Urban/
        │       └── Berlin/
        │           └── val_all_dense.npz
        └── Hybrid_Channel_UPA64X64_Test/
            ├── Suburban/
            │   └── Nanjing/
            │       └── test_all_dense.npz
            └── Urban/
                └── Nanjing/
                    └── test_all_dense.npz`}
                        </pre>
                    </div>
                </div>

                {/* Right Column: NPZ File Contents Description */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">
                        NPZ File Contents Description
                    </h3>
                    <div className="prose prose-slate text-slate-600 leading-relaxed max-w-none">
                        <p className="mb-4">
                            The .npz files store channel, geometry, and annotation data for near-field and mixed-field XL-MIMO scenarios. Separate .npz files are provided for different cities in the training, validation, and test splits. All data are organized in a frame-wise dense format, where each sample corresponds to a single time frame extracted from simulated UAV trajectories across different scenes, with a temporal sampling interval of 1 second and 10 frames selected per trajectory. Samples are ordered by scene index, trajectory index, and temporal frame index. Each key corresponds to a specific data component, as summarized below:
                        </p>
                        <ul className="list-none space-y-4 pl-0">
                            <li>
                                <strong className="text-slate-800 block mb-1">• H_ALL_scene_dense (shape: N × 4096 × 32 × 2)</strong>
                                A dense frame-wise XL-MIMO channel representation, where N denotes the number of samples, 4096 is the number of antennas, 32 is the number of subcarriers, and the last dimension stores the real and imaginary parts of the complex channel.
                            </li>
                            <li>
                                <strong className="text-slate-800 block mb-1">• POS_ALL_scene_dense (shape: N × 3)</strong>
                                The 3D positions of the UAV corresponding to each frame-wise sample, stored as (x, y, z) coordinates.
                            </li>
                            <li>
                                <strong className="text-slate-800 block mb-1">• ISNF_ALL_scene_dense (shape: N)</strong>
                                A binary indicator specifying whether each sample belongs to a near-field (NF) or far-field (FF) propagation condition.
                            </li>
                            <li>
                                <strong className="text-slate-800 block mb-1">• ANGLE_ALL_scene_dense (shape: N × 3)</strong>
                                Continuous geometric parameters for each sample in the form of (θ, φ, r), where θ and φ denote the azimuth and elevation angles (in radians), respectively, and r represents the propagation distance (in meters) between the UAV and the base station.
                            </li>
                            <li>
                                <strong className="text-slate-800 block mb-1">• INDEX_scene_dense (shape: N × 3)</strong>
                                Tracking indices (scene ID, trajectory ID, frame ID) for each frame-wise sample, enabling each dense entry to be uniquely traced back to its original scene, UAV trajectory, and temporal position after frame-wise densification.
                            </li>
                            <li>
                                <strong className="text-slate-800 block mb-1">• NF_COUNT, FAR_COUNT, TOTAL_COUNT (shape: 1)</strong>
                                Scalar values indicating the number of near-field samples, far-field samples, and the total number of samples in the dataset, respectively.
                            </li>
                            <li>
                                <strong className="text-slate-800 block mb-1">• M, K (shape: 1)</strong>
                                System configuration parameters specifying the number of antennas (M) and subcarriers (K) used in channel generation.
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h4 className="font-bold text-slate-800 mb-2">Usage example:</h4>
                            <div className="bg-slate-800 rounded-md p-4 overflow-x-auto">
                                <pre className="text-sm font-mono text-teal-300">
{`data = np.load("train_all_dense.npz")
H = data["H_ALL_scene_dense"]        # (N, 4096, 32, 2)
pos = data["POS_ALL_scene_dense"]    # (N, 3)`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Project Box 3: The Multimodal Near-Field Dataset... */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              The Multimodal Near-Field Dataset over Customized Scenes
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: File Hierarchy */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">
                        File Hierarchy
                    </h3>
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 overflow-x-auto min-h-[300px]">
                        <pre className="text-sm font-mono text-slate-700 leading-relaxed">
{`└── Dataset/
    ├── Synthetic_Channel/
    │   ├── City_001_dataset.h5
    │   ├── City_002_dataset.h5
    │   ├── City_003_dataset.h5
    │   ├── ...
    │   ├── City_029_dataset.h5
    │   └── City_030_dataset.h5
    ├── Synthetic_Image/
    │   ├── City_001_img.h5
    │   ├── City_002_img.h5
    │   ├── City_003_img.h5
    │   ├── ...
    │   ├── City_029_img.h5
    │   └── City_030_img.h5
    └── Synthetic_Lidar/
        ├── City_001_lidar.h5
        ├── City_002_lidar.h5
        ├── City_003_lidar.h5
        ├── ...
        ├── City_029_lidar.h5
        └── City_030_lidar.h5`}
                        </pre>
                    </div>
                </div>

                {/* Right Column: HDF5 File Contents Description */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">
                        HDF5 File Contents Description
                    </h3>
                    <div className="prose prose-slate text-slate-600 leading-relaxed max-w-none">
                        <p className="mb-4">
                            The HDF5 file stores channel data, geometric information, beam-related annotations, and auxiliary metadata for XL-MIMO beamforming and localization studies. All data are organized in a frame-wise format, where each sample corresponds to a single time frame extracted from simulated UAV trajectories, with a temporal sampling interval of 0.1 seconds and 20 frames selected per trajectory. Each key corresponds to a specific data component, as described below:
                        </p>

                        <div className="space-y-6">
                            {/* Synthetic_Channel */}
                            <div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3 text-teal-700">Synthetic_Channel</h4>
                                <ul className="list-none space-y-3 pl-0">
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• H (shape: N × 4096 × 1 × 2)</strong>
                                        Frame-wise XL-MIMO channel coefficients, where N denotes the number of samples, 4096 is the number of antenna elements, the third dimension corresponds to a narrowband representation, and the last dimension stores the real and imaginary parts of the complex channel.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• Pos (shape: N × 3)</strong>
                                        The 3D positions of the UAV corresponding to each sample, represented as (x, y, z) coordinates in meters.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• Angle (shape: N × 2)</strong>
                                        Continuous angular parameters associated with each sample, typically representing the azimuth and elevation angles between the UAV and the base station.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• BeamIdx (shape: N × 5 × 3)</strong>
                                        Indices of the top-5 candidate beams for each sample, where each beam is parameterized by a triplet of discrete indices corresponding to predefined codebook dimensions.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• BeamPower (shape: N× 5)</strong>
                                        Beam power values associated with the top-5 beam candidates in BeamIdx.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• Is_NF (shape: N)</strong>
                                        A binary indicator specifying whether each sample belongs to the near-field propagation regime.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• Has_LoS (shape: N)</strong>
                                        A binary flag indicating the presence of a line-of-sight (LoS) path for each sample.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• Traj_Is_NLoS (shape: N)</strong>
                                        A trajectory-level indicator specifying whether the corresponding UAV trajectory is dominated by non-line-of-sight (NLoS) propagation conditions.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• Mode_Idx (shape: N)</strong>
                                        An index identifying the operating mode or scenario category associated with each sample.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• Metadata (shape: N × 2)</strong>
                                        Auxiliary metadata encoding the simulation context of each sample in the form (city ID, trajectory ID), indicating the city (or scenario) and the UAV trajectory to which each frame-wise sample belongs.
                                    </li>
                                </ul>

                                <div className="mt-4 bg-slate-800 rounded-md p-4 overflow-x-auto">
                                    <pre className="text-sm font-mono text-teal-300">
{`with h5py.File("City_001_dataset.h5", "r") as f:
    pos = f["Pos"][:]       # (N, 3)
    H   = f["H"][:]         # (N, 4096, 1, 2)`}
                                    </pre>
                                </div>
                            </div>

                            {/* Synthetic_Image */}
                            <div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3 text-teal-700">Synthetic_Image</h4>
                                <ul className="list-none space-y-3 pl-0">
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• image (shape: N × 224 × 224 × 3)</strong>
                                        RGB images captured for each frame-wise sample, resized to 224 × 224 resolution with three color channels.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• frame_id (shape: N)</strong>
                                        The temporal frame index within each UAV trajectory, indicates the relative time step associated with each image sample.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• traj_id (shape: N)</strong>
                                        An identifier specifying the UAV trajectory to which each image sample belongs.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• is_night (shape: N)</strong>
                                        A binary flag indicating whether the corresponding image sample is captured under nighttime or low-illumination conditions.
                                    </li>
                                </ul>
                            </div>

                            {/* Synthetic_Lidar */}
                            <div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3 text-teal-700">Synthetic_Lidar</h4>
                                <ul className="list-none space-y-3 pl-0">
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• points (shape: N × 10000 × 3)</strong>
                                        Frame-wise LiDAR point clouds, where each sample contains 10,000 3D points represented by (x, y, z) coordinates.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• frame_id (shape: N)</strong>
                                        The temporal frame index within each UAV trajectory, indicating the relative time step associated with each LiDAR scan.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• traj_id (shape: N)</strong>
                                        An identifier specifying the UAV trajectory to which each LiDAR frame belongs.
                                    </li>
                                    <li>
                                        <strong className="text-slate-800 block mb-1">• is_weather_affected (shape: N)</strong>
                                        A binary flag indicating whether the corresponding LiDAR frame is affected by adverse weather conditions, such as rain or fog.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DataUsagePage;