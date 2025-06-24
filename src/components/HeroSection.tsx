
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './AnimatedSection';
import { FootprintAnimation } from './FootprintAnimation';

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection delay={0}>
          <FootprintAnimation />
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <h1 className="font-playfair font-black text-6xl md:text-8xl lg:text-9xl text-gray-900 mb-6 tracking-tight lowercase">
            gjurm concept
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <p className="font-inter text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elevating brands through strategic digital marketing solutions that drive growth and create lasting impact
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Button>
          </div>
        </AnimatedSection>
      </div>
      
      <AnimatedSection delay={800} className="absolute bottom-8">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
