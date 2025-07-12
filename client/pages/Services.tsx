import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ChefHat,
  Home,
  Users,
  Stethoscope,
  ShoppingCart,
  Heart,
  Pill,
  Dog,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Companionship",
    description:
      "Friendly conversation, social activities, and emotional support to combat loneliness and isolation.",
    features: [
      "Social interaction",
      "Emotional support",
      "Activity planning",
      "Mental stimulation",
    ],
    image:
      "https://images.pexels.com/photos/7551473/pexels-photo-7551473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "/services/companionship",
  },
  {
    icon: ChefHat,
    title: "Meal Preparation",
    description:
      "Nutritious meals prepared according to dietary requirements and personal preferences.",
    features: [
      "Custom meal planning",
      "Dietary accommodations",
      "Fresh ingredients",
      "Kitchen safety",
    ],
    image:
      "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "/services/meal-preparation",
  },
  {
    icon: Home,
    title: "Home Management",
    description:
      "Light housekeeping, organizing, and maintaining a clean, safe living environment.",
    features: [
      "Light housekeeping",
      "Organizing",
      "Laundry",
      "Home safety checks",
    ],
    image:
      "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "/services/home-management",
  },
  {
    icon: Stethoscope,
    title: "Medical Assistance",
    description:
      "Medication reminders, appointment coordination, and health monitoring support.",
    features: [
      "Medication reminders",
      "Appointment scheduling",
      "Health monitoring",
      "Doctor communication",
    ],
    image:
      "https://images.pexels.com/photos/7551473/pexels-photo-7551473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "/services/medical-assistance",
  },
  {
    icon: ShoppingCart,
    title: "Shopping & Errands",
    description:
      "Grocery shopping, prescription collection, and assistance with daily errands.",
    features: [
      "Grocery shopping",
      "Prescription pickup",
      "Banking errands",
      "Personal shopping",
    ],
    image:
      "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "/services/shopping",
  },
  {
    icon: Pill,
    title: "Prescription Collection",
    description:
      "Safe and reliable prescription collection and delivery service.",
    features: [
      "Prescription pickup",
      "Medication delivery",
      "Pharmacy coordination",
      "Safety protocols",
    ],
    image:
      "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "/services/prescriptions",
  },
  {
    icon: Dog,
    title: "Dog Walking & Pet Care",
    description:
      "Professional pet care services including walking, feeding, and companionship.",
    features: [
      "Dog walking",
      "Pet feeding",
      "Pet companionship",
      "Exercise routines",
    ],
    image:
      "https://images.pexels.com/photos/7551473/pexels-photo-7551473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "/services/pet-care",
  },
  {
    icon: Heart,
    title: "Special Requests",
    description:
      "Customized services tailored to your specific needs and preferences.",
    features: [
      "Custom care plans",
      "Flexible scheduling",
      "Personalized services",
      "Special accommodations",
    ],
    image:
      "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "/services/special-requests",
  },
];

export default function Services() {
  return (
    <Layout
      title="Our Services"
      description="Comprehensive home care services including companionship, meal preparation, home management, medical assistance, and more. Personalized care plans available."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-care-800 mb-6">
            Our Care Services
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive home care services designed to help you
            maintain independence and comfort in your own home. Each service is
            personalized to meet your unique needs and preferences.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Your Free Assessment</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-care-100 p-2 rounded-lg">
                      <service.icon className="h-6 w-6 text-care-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-care-800">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality care with
              personalized service that adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-care-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-muted-foreground">
                Services available when you need them, with flexible scheduling
                to fit your lifestyle.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-trust-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Regular quality checks and client feedback ensure consistently
                excellent service delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-warm-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-muted-foreground">
                Every care plan is tailored to your individual needs,
                preferences, and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us create a
            personalized care plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-care-600"
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
