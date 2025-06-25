import { AnimatedSection } from './AnimatedSection';
import { RootsFlowersAnimation } from './RootsFlowersAnimation';

const services = [
  {
    title: "Brand Strategy",
    description: "Comprehensive brand development and positioning strategies that resonate with your target audience.",
    icon: "/gifs/strategy.gif",
  },
  {
    title: "Digital Marketing",
    description: "Multi-channel digital campaigns designed to maximize reach and engagement across all platforms.",
    icon: "/gifs/marketing.gif"
  },
  {
    title: "Content Creation",
    description: "Compelling visual and written content that tells your brand story and drives conversions.",
    icon: "/gifs/creation.gif"
  },
  {
    title: "Social Media",
    description: "Strategic social media management and growth across Instagram, Facebook, and LinkedIn.",
    icon: "/gifs/socialmedia.gif"
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites that convert visitors into customers and reflect your brand identity.",
    icon: "/gifs/web.gif"
  },
  {
    title: "Analytics and Insights",
    description: "Data-driven insights and reporting to optimize performance and maximize your marketing ROI.",
    icon: "/gifs/analytics.gif"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 mb-6 lowercase relative">
              From concept to{' '}
              <span className="relative inline-block">
                Life
                <RootsFlowersAnimation />
              </span>
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              We craft comprehensive digital experiences that drive results and elevate your brand presence
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.title}
                className={`
                  min-h-screen 
                  flex 
                  items-center 
                  justify-center 
                  px-6 
                  ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
                  flex-col md:gap-20 gap-12
                  max-w-7xl mx-auto
                `}
              >
                {/* Image + Title */}
                <AnimatedSection delay={index * 100} direction={isEven ? 'left' : 'right'}>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 max-w-md">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-72 h-72 object-contain mb-6"
                    />
                    <h3 className="text-4xl md:text-5xl font-inter text-gray-800">{service.title}</h3>
                  </div>
                </AnimatedSection>

                {/* Description */}
                <AnimatedSection delay={index * 100 + 100} direction={isEven ? 'right' : 'left'}>
                  <div className="w-full md:w-2/2 max-w-md text-gray-600 text-xl md:text-3xl font-inter leading-relaxed text-center md:text-left">
                    {service.description}
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};