import { AnimatedSection } from './AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RootsFlowersAnimation } from './RootsFlowersAnimation';

const services = [
  {
    title: "Brand Strategy",
    description: "Comprehensive brand development and positioning strategies that resonate with your target audience.",
    icon: "🎯"
  },
  {
    title: "Digital Marketing",
    description: "Multi-channel digital campaigns designed to maximize reach and engagement across all platforms.",
    icon: "📱"
  },
  {
    title: "Content Creation",
    description: "Compelling visual and written content that tells your brand story and drives conversions.",
    icon: "✨"
  },
  {
    title: "Social Media",
    description: "Strategic social media management and growth across Instagram, Facebook, and LinkedIn.",
    icon: "📸"
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites that convert visitors into customers and reflect your brand identity.",
    icon: "💻"
  },
  {
    title: "Analytics & Insights",
    description: "Data-driven insights and reporting to optimize performance and maximize your marketing ROI.",
    icon: "📊"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="font-inter font-semibold text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
