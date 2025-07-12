import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  CheckCircle,
  Clock,
  Shield,
  CreditCard,
  MapPin,
  Apple,
  Package,
  Car,
} from "lucide-react";

const shoppingServices = [
  {
    icon: Apple,
    title: "Grocery Shopping",
    description:
      "Complete grocery shopping service with fresh, quality products",
    features: [
      "Fresh produce selection",
      "Dietary requirement consideration",
      "Brand preference accommodation",
      "Weekly or bi-weekly service",
    ],
  },
  {
    icon: Package,
    title: "Personal Shopping",
    description: "Shopping for personal items, clothing, and household goods",
    features: [
      "Clothing and accessories",
      "Household essentials",
      "Gift purchasing",
      "Special occasion items",
    ],
  },
  {
    icon: CreditCard,
    title: "Banking Errands",
    description: "Assistance with banking tasks and financial errands",
    features: [
      "Bank deposits",
      "Cash withdrawals",
      "Bill payments",
      "Financial document handling",
    ],
  },
  {
    icon: Car,
    title: "General Errands",
    description: "Various errands and tasks around the community",
    features: [
      "Post office visits",
      "Dry cleaning pickup",
      "Return/exchange items",
      "Appointment coordination",
    ],
  },
];

const process = [
  {
    step: "1",
    title: "List Creation",
    description:
      "We work with you to create detailed shopping lists based on your needs and preferences.",
  },
  {
    step: "2",
    title: "Budget Planning",
    description:
      "Set spending limits and payment preferences for each shopping trip.",
  },
  {
    step: "3",
    title: "Smart Shopping",
    description:
      "Our trained shoppers select the best quality items within your budget.",
  },
  {
    step: "4",
    title: "Delivery & Receipt",
    description:
      "Items are delivered to your home with receipts and change if applicable.",
  },
];

const benefits = [
  {
    title: "Time Savings",
    description:
      "Spend your time on activities you enjoy rather than running errands.",
    icon: Clock,
  },
  {
    title: "Quality Selection",
    description:
      "Experienced shoppers who know how to select the best quality items.",
    icon: CheckCircle,
  },
  {
    title: "Budget Management",
    description: "Careful attention to your budget and spending preferences.",
    icon: CreditCard,
  },
  {
    title: "Convenience",
    description: "Everything delivered to your door at your preferred time.",
    icon: Package,
  },
];

export default function Shopping() {
  return (
    <Layout
      title="Shopping & Errands"
      description="Professional shopping and errand services including grocery shopping, prescription pickup, banking, and personal shopping assistance."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-care-500 p-3 rounded-lg">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                  Shopping & Errands
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Let us handle your shopping and errands so you can focus on what
                matters most. From grocery shopping to banking errands, our
                trusted team takes care of your needs with attention to detail
                and respect for your preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Start Shopping Service</Link>
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
                src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional shopping service"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-care-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Same</div>
                <div className="text-sm">Day Service</div>
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
              Complete Shopping & Errand Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From weekly grocery runs to special shopping requests, we handle
              all your shopping and errand needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shoppingServices.map((service, index) => (
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

      {/* How It Works */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              How Our Shopping Service Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple, reliable process ensures you get exactly what you
              need, when you need it.
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

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Why Choose Our Shopping Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="bg-care-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-care-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-care-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Preferences */}
      <section className="py-16 bg-care-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-6">
                Your Preferences Matter
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-care-100 p-2 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-care-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-care-800 mb-1">
                      Brand Preferences
                    </h3>
                    <p className="text-muted-foreground">
                      We respect your preferred brands and will always shop
                      according to your specific requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-care-100 p-2 rounded-lg flex-shrink-0">
                    <Apple className="h-5 w-5 text-care-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-care-800 mb-1">
                      Fresh Quality
                    </h3>
                    <p className="text-muted-foreground">
                      Our shoppers are trained to select the freshest produce
                      and highest quality items available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-care-100 p-2 rounded-lg flex-shrink-0">
                    <CreditCard className="h-5 w-5 text-care-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-care-800 mb-1">
                      Budget Conscious
                    </h3>
                    <p className="text-muted-foreground">
                      We work within your budget and look for the best deals and
                      value for your money.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-care-100 p-2 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-care-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-care-800 mb-1">
                      Flexible Timing
                    </h3>
                    <p className="text-muted-foreground">
                      Schedule shopping trips at your convenience, with same-day
                      service available for urgent needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Fresh grocery shopping"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-care-800 mb-8">
            Safety & Trust You Can Count On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-care-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Bonded & Insured</h3>
                <p className="text-sm text-muted-foreground">
                  All our shoppers are fully bonded and insured for your
                  protection and peace of mind.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-care-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Background Checked</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive background checks ensure you can trust who's
                  shopping for you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-care-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Local Knowledge</h3>
                <p className="text-sm text-muted-foreground">
                  Our shoppers know the best local stores and can find the
                  products you want.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Simplify Your Life?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Let us handle your shopping and errands so you can focus on the
            things you enjoy most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Start Shopping Service</Link>
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
