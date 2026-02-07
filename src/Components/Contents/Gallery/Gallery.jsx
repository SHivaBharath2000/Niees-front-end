import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { galleryData } from '../../../State&Api/Api';

const Gallery = () => {
  const dispatch = useDispatch();
  const galleryItems = useSelector((state) => state.Niees.galleryItems || []);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch function-ai thonithu (re-trigger panna வசதியாக)
  const loadGallery = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      // Dispatch-ai await seivathal pending detect seiya mudiyum
      const result = await dispatch(galleryData());
      
      // Request fail aanaal error state-ku kondu sellum
      if (result.error) throw new Error("API Failed");
      
    } catch (err) {
      console.error("Gallery API Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    loadGallery();
  }, [loadGallery]);

  return (
    <div className="bg-[#F8FAFC] py-16 font-sans selection:bg-blue-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[2.5em]">
        
        <div className="flex justify-center mb-16">
          <ul className="flex items-center text-[12px] font-bold uppercase tracking-widest">
            <li 
              className={`cursor-pointer px-5 py-4 transition-all duration-300 ${
                filter === 'all' ? 'bg-[#333333] text-white' : 'text-[#333333]'
              }`}
              onClick={() => setFilter('all')}
            >
              Gallery Item
            </li>
          </ul>
        </div>

        {/* Error State - Pending-la thangi ninnaal Retrigger seiya */}
        {error && !loading && (
          <div className="flex flex-col items-center py-20">
            <p className="text-red-500 mb-4">Server busy or Connection timed out!</p>
            <button 
              onClick={loadGallery}
              className="bg-green-600 text-white px-8 py-3 rounded-full font-bold uppercase text-[12px] hover:bg-green-700 transition-all"
            >
              Retry Retrigger
            </button>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filter === 'all' && galleryItems.length > 0 ? (
              galleryItems.map((item) => (
                <div 
                  key={item._id || item.id} 
                  className="group relative overflow-hidden rounded-sm bg-white aspect-[4/3] cursor-pointer"
                >
                  <img 
                    src={item.src} 
                    alt="Gallery"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))
            ) : (
              <div className="col-span-full h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-400 italic">No gallery items found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;