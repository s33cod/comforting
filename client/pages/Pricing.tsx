import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DollarSign,
  CheckCircle,
  Clock,
  Users,
  Heart,
  Shield,
  Star,
  Phone,
} from "lucide-react";

const pricingPlans = [
  {
    name: "Essential Care",
    price: "£15",
    period: "per hour",
    description: "Perfect for basic companionship and light assistance",
    features: [
      "Companionship visits",
      "Light housekeeping",
      "Meal preparation",
      "Medication reminders",
      "Shopping assistance",
      "Pet care",
    ],
    popular: false,
    color: "care",
  },
  {
    name: "Comprehensive Care",
    price: "£20",
    period: "per hour",
    description: "Our most popular plan with enhanced services",
    features: [
      "All Essential Care services",
      "Medical assistance",
      "Appointment coordination",
      "Emergency response",
      "Specialized health monitoring",
      "Family communication",
    ],
    popular: true,
    color: "trust",
  },
  {
    name: "Premium Care",
    price: "£28",
    period: "per hour",
    description: "Comprehensive care with 24/7 support",
    features: [
      "All Comprehensive Care services",
      "24/7 emergency availability",
      "Dedicated care coordinator",
      "Weekly health reports",
      "Family meetings",
      "Specialized medical support",
    ],
    popular: false,
    color: "warm",
  },
];

const packages = [
  {
    name: "Daily Support Package",
    hours: "4 hours daily",
    price: "£240",
    period: "per week",
    savings: "Save £40/week",
    description: "Perfect for those needing regular daily assistance",
  },
  {
    name: "Weekly Care Package",
    hours: "20 hours weekly",
    price: "£300",
    period: "per week",
    savings: "Save £100/week",
    description: "Flexible hours spread throughout the week",
  },
  {
    name: "Overnight Care Package",
    hours: "10 hours nightly",
    price: "£120",
    period: "per night",
    savings: "Save £30/night",
    description: "Overnight support for peace of mind",
  },
];

const additionalServices = [
  { service: "Emergency Response (24/7)", price: "£50/month", unit: "monthly" },
  { service: "Transportation to Appointments", price: "£25", unit: "per trip" },
  { service: "Prescription Collection", price: "£10", unit: "per collection" },
  { service: "Specialized Medical Care", price: "£35", unit: "per hour" },
  { service: "Holiday/Weekend Rates", price: "+£5", unit: "per hour" },
  { service: "Same-Day Booking", price: "£15", unit: "booking fee" },
];

const faqs = [
  {
    question: "Are there any hidden fees?",
    answer:
      "No, our pricing is completely transparent. The only additional costs are for specialized services or emergency calls, which are clearly outlined.",
  },
  {
    question: "Do you offer family discounts?",
    answer:
      "Yes, we offer 10% discounts for multiple family members and 15% for long-term care agreements (6+ months).",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, cheque, bank transfer, and all major credit/debit cards. We also offer monthly billing for regular clients.",
  },
  {
    question: "Can I customize my care package?",
    answer:
      "Absolutely! All our packages can be customized to meet your specific needs and budget. Contact us for a personalized quote.",
  },
];

export default function Pricing() {
  return (
    <Layout
      title="Pricing"
      description="Transparent, affordable pricing for our comprehensive home care services. Contact us for a personalized quote and free consultation."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-care-500 p-3 rounded-lg">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-care-800">
              Transparent Pricing
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Quality care shouldn't break the bank. Our transparent pricing
            ensures you know exactly what you're paying for, with no hidden fees
            or surprises. Every care plan is customized to your needs and
            budget.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Care Plans & Hourly Rates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the level of care that's right for you. All plans can be
              customized to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${
                  plan.popular
                    ? "ring-2 ring-trust-500 shadow-lg scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-trust-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-6 ${plan.popular ? "pt-12" : ""}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-care-800 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-care-600">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link to="/contact">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Money-Saving Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save money with our pre-paid packages designed for regular care
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative">
                <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  {pkg.savings}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-care-800 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-care-600">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground"> {pkg.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-sm font-medium text-care-700 mb-4">
                    {pkg.hours}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Additional Services & Fees
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Optional add-on services to enhance your care experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {additionalServices.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-care-800">
                        {item.service}
                      </span>
                      <span className="text-care-600 font-semibold">
                        {item.price}{" "}
                        <span className="text-sm text-muted-foreground font-normal">
                          {item.unit}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-care-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              What's Included in Every Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-care-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Fully Insured & Bonded
              </h3>
              <p className="text-muted-foreground text-sm">
                Complete protection and peace of mind included at no extra cost.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-trust-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Trained Professionals
              </h3>
              <p className="text-muted-foreground text-sm">
                All caregivers are professionally trained and background
                checked.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-warm-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-muted-foreground text-sm">
                Care when you need it, with flexible scheduling options.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-care-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compassionate Care</h3>
              <p className="text-muted-foreground text-sm">
                Genuine care and attention that treats you like family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-care-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Personalized Quote Today
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Every care situation is unique. Contact us for a free consultation
            and personalized pricing based on your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-care-600"
            >
              <span className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call 0800 123 4567</span>
              </span>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
