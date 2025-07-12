import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Home,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Sparkles,
  Shirt,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Light Housekeeping",
    description:
      "Dusting, vacuuming, mopping, and maintaining clean living spaces",
    details: [
      "Weekly deep cleaning",
      "Daily maintenance cleaning",
      "Bathroom sanitation",
      "Kitchen cleaning",
    ],
  },
  {
    icon: Shirt,
    title: "Laundry Services",
    description: "Complete laundry care including washing, drying, and folding",
    details: [
      "Washing and drying",
      "Folding and organizing",
      "Ironing when needed",
      "Linen changes",
    ],
  },
  {
    icon: Sparkles,
    title: "Organization",
    description:
      "Decluttering and organizing spaces for safety and accessibility",
    details: [
      "Closet organization",
      "Room decluttering",
      "Storage solutions",
      "Safety optimization",
    ],
  },
  {
    icon: Shield,
    title: "Safety Checks",
    description: "Regular home safety assessments and maintenance alerts",
    details: [
      "Fall hazard identification",
      "Lighting assessments",
      "Emergency preparedness",
      "Maintenance alerts",
    ],
  },
];

const benefits = [
  {
    title: "Maintain Independence",
    description:
      "Keep living comfortably in your own home with a clean, organized environment.",
  },
  {
    title: "Reduce Stress",
    description:
      "Eliminate the worry and physical strain of maintaining your home.",
  },
  {
    title: "Safety First",
    description:
      "Regular safety checks help prevent accidents and maintain a secure environment.",
  },
  {
    title: "More Time",
    description:
      "Spend time on activities you enjoy rather than household chores.",
  },
];

export default function HomeManagement() {
  return (
    <Layout
      title="Home Management Services"
      description="Professional home management services including light housekeeping, organizing, laundry, and home safety checks to maintain a clean, safe living environment."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-care-500 p-3 rounded-lg">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                  Home Management
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Keep your home clean, organized, and safe with our comprehensive
                home management services. From light housekeeping to
                organization and safety checks, we help you maintain a
                comfortable living environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/pricing" className="text-black">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Clean, organized home interior"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-care-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Our Home Management Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive home care services designed to keep your living
              space clean, organized, and safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-care-100 p-3 rounded-lg flex-shrink-0">
                      <service.icon className="h-6 w-6 text-care-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-care-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Our Home Management Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure your home is maintained
              to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-care-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-muted-foreground text-sm">
                We assess your home and discuss your specific needs and
                preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-trust-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-muted-foreground text-sm">
                Create a customized cleaning and maintenance schedule that works
                for you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-warm-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground text-sm">
                Our trained professionals execute the plan with attention to
                detail.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-care-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Review</h3>
              <p className="text-muted-foreground text-sm">
                Regular check-ins to ensure satisfaction and adjust as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-6">
                Why Choose Our Home Management?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-care-100 p-2 rounded-lg flex-shrink-0">
                      <Star className="h-5 w-5 text-care-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-care-800 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/6195262/pexels-photo-6195262.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Clean and organized living room"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-care-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <blockquote className="text-lg text-muted-foreground mb-6 italic">
              "The home management service has been a game-changer for me. My
              house is always clean and organized, and I can focus on enjoying
              my retirement instead of worrying about chores."
            </blockquote>
            <div className="font-semibold text-care-800">Patricia Williams</div>
            <div className="text-sm text-muted-foreground">
              Client since 2022
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Cleaner, More Organized Home?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Let us take care of your home so you can focus on what matters most
            to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Your Assessment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-care-600"
            >
              <Link to="/pricing" className="text-black">
                View Pricing Plans
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
