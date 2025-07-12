import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Clock,
  Users,
  ChefHat,
  Home,
  Stethoscope,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    image:
      "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    title: "Compassionate Care in Your Own Home",
    subtitle: "Professional, trusted, and personalized care services",
    description:
      "We provide dedicated support to help you maintain independence and comfort in familiar surroundings.",
    cta: "Learn More About Our Services",
    ctaLink: "/services",
  },
  {
    image:
      "https://images.pexels.com/photos/5858844/pexels-photo-5858844.jpeg?auto=compress&cs=tinysrgb",
    title: "24/7 Support When You Need It Most",
    subtitle: "Emergency care and ongoing assistance",
    description:
      "Our experienced caregivers are available around the clock to provide peace of mind for you and your family.",
    cta: "Contact Us Today",
    ctaLink: "/contact",
  },
  {
    image:
      "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    title: "Personalized Care Plans",
    subtitle: "Tailored to your unique needs",
    description:
      "Every individual is unique. We create customized care plans that adapt to your specific requirements and preferences.",
    cta: "Get Your Free Assessment",
    ctaLink: "/contact",
  },
];

const services = [
  {
    icon: Users,
    title: "Companionship",
    description:
      "Friendly conversation, social activities, and emotional support to combat loneliness.",
    link: "/services/companionship",
  },
  {
    icon: ChefHat,
    title: "Meal Preparation",
    description:
      "Nutritious meals prepared according to dietary requirements and personal preferences.",
    link: "/services/meal-preparation",
  },
  {
    icon: Home,
    title: "Home Management",
    description:
      "Light housekeeping, organizing, and maintaining a clean, safe living environment.",
    link: "/services/home-management",
  },
  {
    icon: Stethoscope,
    title: "Medical Assistance",
    description:
      "Medication reminders, appointment coordination, and health monitoring support.",
    link: "/services/medical-assistance",
  },
  {
    icon: ShoppingCart,
    title: "Shopping & Errands",
    description:
      "Grocery shopping, prescription collection, and assistance with daily errands.",
    link: "/services/shopping",
  },
  {
    icon: Heart,
    title: "Special Requests",
    description:
      "Customized services tailored to your specific needs and preferences.",
    link: "/services/special-requests",
  },
];

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "24/7", label: "Available Support" },
  { number: "100%", label: "Licensed & Insured" },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <Layout
      title="Home"
      description="Comforting Care Solutions - Professional home care services providing compassionate, personalized support to help you maintain independence and comfort in your own home."
    >
      {/* Hero Slideshow */}
      <section className="relative h-[80vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0",
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center 70%",
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl mb-6 text-care-200">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link to={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentSlide ? "bg-white" : "bg-white/50",
              )}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-care-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Why Choose Comforting Care Solutions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality care with
              compassion, professionalism, and respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-care-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
              <p className="text-muted-foreground">
                Our caregivers treat every client with dignity, respect, and
                genuine care.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-trust-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">
                Fully licensed, bonded, and insured for your peace of mind and
                protection.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-warm-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Round-the-clock support and emergency care when you need it
                most.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-care-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-muted-foreground">
                Skilled professionals with years of experience in home care
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Our Care Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services designed to help you live
              comfortably and independently at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="bg-care-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-care-500 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-care-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-care-800">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-care-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-care-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the families we've had
              the privilege to serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The care team has been absolutely wonderful. They've helped
                  my mother maintain her independence while ensuring she's safe
                  and comfortable at home."
                </p>
                <div className="font-semibold">Sarah Thompson</div>
                <div className="text-sm text-muted-foreground">
                  Daughter of client
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Professional, caring, and reliable. I couldn't ask for better
                  support. They've become like family to us."
                </p>
                <div className="font-semibold">Margaret Wilson</div>
                <div className="text-sm text-muted-foreground">Client</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The 24/7 support gives us such peace of mind. Knowing help is
                  always available has made all the difference for our family."
                </p>
                <div className="font-semibold">James Parker</div>
                <div className="text-sm text-muted-foreground">
                  Son of client
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you create
            a personalized care plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border-white  hover:bg-white hover:text-care-600"
            >
              <Link to="/pricing" className="text-black">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
