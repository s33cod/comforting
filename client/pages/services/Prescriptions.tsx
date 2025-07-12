import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Pill,
  CheckCircle,
  Clock,
  Shield,
  MapPin,
  Phone,
  Truck,
  AlertCircle,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Prescription Collection",
    description:
      "Safe and reliable collection of prescriptions from your pharmacy",
    features: [
      "Regular scheduled pickups",
      "Emergency collections",
      "Multiple pharmacy coordination",
      "Secure transport",
    ],
  },
  {
    icon: Clock,
    title: "Medication Scheduling",
    description: "Coordination with pharmacies for optimal medication timing",
    features: [
      "Refill reminders",
      "Schedule coordination",
      "Dosage verification",
      "Pharmacy communication",
    ],
  },
  {
    icon: Shield,
    title: "Safety Protocols",
    description:
      "Strict safety measures to ensure medication integrity and security",
    features: [
      "Temperature-controlled transport",
      "Secure storage during transit",
      "ID verification procedures",
      "Chain of custody tracking",
    ],
  },
  {
    icon: Phone,
    title: "Pharmacy Liaison",
    description: "Direct communication with your pharmacy for seamless service",
    features: [
      "Insurance verification",
      "Prescription status updates",
      "Doctor consultation coordination",
      "Special request handling",
    ],
  },
];

const process = [
  {
    step: "1",
    title: "Setup",
    description:
      "We coordinate with your pharmacy and establish pickup authorizations.",
  },
  {
    step: "2",
    title: "Schedule",
    description:
      "Create a regular pickup schedule based on your medication needs.",
  },
  {
    step: "3",
    title: "Collect",
    description:
      "Securely collect your prescriptions with proper ID verification.",
  },
  {
    step: "4",
    title: "Deliver",
    description:
      "Promptly deliver medications to your home with signature confirmation.",
  },
];

export default function Prescriptions() {
  return (
    <Layout
      title="Prescription Collection"
      description="Safe and reliable prescription collection and delivery service with pharmacy coordination and safety protocols."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-care-500 p-3 rounded-lg">
                  <Pill className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                  Prescription Collection
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Never worry about missing your medications again. Our secure
                prescription collection and delivery service ensures you always
                have your medications on time, handled with the utmost care and
                professionalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Setup Service</Link>
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
                src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Secure medication handling"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-care-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">24hr</div>
                <div className="text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Comprehensive Prescription Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From regular collections to emergency pickups, we provide complete
              prescription management support.
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
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
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

      {/* Process */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              How Our Service Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures your medications are collected and
              delivered safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-care-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Secure medication storage"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-6">
                Safety & Security First
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Secure Transport
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      All medications are transported in secure,
                      temperature-controlled containers to maintain their
                      integrity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Identity Verification
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Strict ID verification procedures ensure medications only
                      reach authorized individuals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Timely Delivery
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Scheduled deliveries ensure you never run out of essential
                      medications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Real-time Tracking
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Track your prescription collection and delivery status in
                      real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16 bg-care-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-warm-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-care-800 mb-4">
              Emergency Prescription Service
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              When you need medications urgently, our 24-hour emergency service
              ensures you get what you need, when you need it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-care-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    Emergency collections available any time of day or night
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Truck className="h-8 w-8 text-care-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Express Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Priority handling for urgent medication needs
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-care-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Direct Hotline</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated emergency line for immediate assistance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss Your Medications Again
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Let us handle your prescription collection so you can focus on your
            health and wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Setup Collection Service</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-care-600"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
