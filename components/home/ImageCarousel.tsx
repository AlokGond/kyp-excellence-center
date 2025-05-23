import React, { useState, useEffect, useCallback } from 'react';
import { HeroSlide } from '../../types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ImageCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number; // in milliseconds
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ slides, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (autoPlayInterval > 0 && slides.length > 1) {
      const timer = setTimeout(goToNext, autoPlayInterval);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, autoPlayInterval, slides.length, goToNext]);

  if (!slides || slides.length === 0) {
    return <div className="text-center p-10 text-kyp-text-on-magenta">No slides to display.</div>;
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-1000 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.imageUrl}
              alt={slide.altText}
              className="w-full h-full object-cover"
            />
            {(slide.title || slide.subtitle) && (
                 <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4 md:p-8">
                {slide.title && <h2 className="text-2xl md:text-4xl font-poppins font-bold text-kyp-yellow mb-2 md:mb-4 animate-fade-in-up">{slide.title}</h2>}
                {slide.subtitle && <p className="text-md md:text-xl text-kyp-white animate-fade-in-up" style={{animationDelay: '0.3s'}}>{slide.subtitle}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-kyp-black/30 hover:bg-kyp-black/60 text-kyp-white p-2 rounded-full transition-colors duration-300 z-10"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-kyp-black/30 hover:bg-kyp-black/60 text-kyp-white p-2 rounded-full transition-colors duration-300 z-10"
            aria-label="Next slide"
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? 'bg-kyp-yellow scale-125' : 'bg-kyp-white/50 hover:bg-kyp-white/80'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
