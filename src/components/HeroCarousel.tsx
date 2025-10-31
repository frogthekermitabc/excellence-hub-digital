import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";

interface HeroSlide {
  image: string;
  alt: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoplayDelay?: number;
  children: React.ReactNode;
}

const HeroCarousel = ({ slides, autoplayDelay = 5000, children }: HeroCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: autoplayDelay,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-[400px] -ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 h-[400px]">
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Controls */}
        <CarouselPrevious className="left-4 z-20 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30" />
        <CarouselNext className="right-4 z-20 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30" />

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === index
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
