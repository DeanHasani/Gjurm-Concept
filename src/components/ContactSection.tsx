import { Button } from '@/components/ui/button';
import { AnimatedSection } from './AnimatedSection';
import { HammerAnimation } from './HammerAnimation';

export const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/gjurmconcept', '_blank');
  };

  return (
    <section id="contact-section" className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 lowercase relative">
            let's work togethe
            <span className="relative inline-block">
              r
              <HammerAnimation />
            </span>
          </h2>
          <p className="font-inter text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Ready to elevate your brand? Get in touch and let's create something extraordinary together.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              📱 WhatsApp
            </Button>
            <Button 
              onClick={handleInstagram}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              📸 Instagram
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="border-t border-gray-700 pt-12">
            <p className="font-inter text-gray-400 text-sm">
              © 2024 gjurm concept. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
