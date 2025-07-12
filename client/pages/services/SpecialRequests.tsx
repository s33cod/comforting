import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  CheckCircle,
  Star,
  Sparkles,
  Users,
  Clock,
  Shield,
  Lightbulb,
} from "lucide-react";

const specialServices = [
  {
    icon: Users,
    title: "Family Event Support",
    description:
      "Special assistance during family gatherings, holidays, and celebrations",
    examples: [
      "Holiday preparation help",
      "Family gathering support",
      "Birthday celebration assistance",
      "Special occasion planning",
    ],
  },
  {
    icon: Lightbulb,
    title: "Hobby & Interest Support",
    description:
      "Assistance with personal hobbies, crafts, and special interests",
    examples: [
      "Gardening assistance",
      "Arts and crafts projects",
      "Collection organization",
      "Photography support",
    ],
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Custom schedules for unique needs, including overnight and weekend care",
    examples: [
      "Overnight companionship",
      "Weekend-only services",
      "Holiday coverage",
      "Emergency availability",
    ],
  },
  {
    icon: Sparkles,
    title: "Personal Projects",
    description:
      "Help with special projects, organization tasks, and personal goals",
    examples: [
      "Memory book creation",
      "Photo organization",
      "Letter writing",
      "Technology assistance",
    ],
  },
];

const customizationAreas = [
  {
    title: "Cultural Considerations",
    description:
      "We respect and accommodate cultural preferences, dietary requirements, and religious observances.",
  },
  {
    title: "Language Support",
    description:
      "Caregivers who speak your preferred language for comfortable communication.",
  },
  {
    title: "Specific Health Needs",
    description:
      "Specialized care for unique health conditions or recovery requirements.",
  },
  {
    title: "Personal Preferences",
    description:
      "Accommodation of specific routines, preferences, and comfort requirements.",
  },
];

export default function SpecialRequests() {
  return (
    <Layout
      title="Special Requests"
      description="Customized care services tailored to your unique needs and preferences. Flexible, personalized solutions for any special requirements."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-care-500 p-3 rounded-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                  Special Requests
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every person is unique, and so are their care needs. Our special
                requests service provides completely customized solutions
                tailored to your specific requirements, preferences, and
                circumstances. No request is too unique for our flexible,
                compassionate team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Discuss Your Needs</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/pricing">Custom Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8032934/pexels-photo-8032934.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Personalized care and attention"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-care-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Customizable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Types of Special Requests We Fulfill
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From unique scheduling needs to specialized support, we adapt our
              services to meet your individual requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialServices.map((service, index) => (
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
                        {service.examples.map((example, exampleIndex) => (
                          <li
                            key={exampleIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {example}
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

      {/* Customization Process */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Our Customization Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work closely with you to understand your unique needs and
              create a personalized care plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-care-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Listen</h3>
              <p className="text-muted-foreground text-sm">
                We carefully listen to your specific needs, preferences, and
                concerns.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-trust-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">
                Create a custom care plan that addresses your unique
                requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-warm-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Match</h3>
              <p className="text-muted-foreground text-sm">
                Pair you with the ideal caregiver who fits your personality and
                needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-care-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Adapt</h3>
              <p className="text-muted-foreground text-sm">
                Continuously adjust and refine the service based on your
                feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-6">
                Areas We Customize
              </h2>
              <div className="space-y-6">
                {customizationAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-care-100 p-2 rounded-lg flex-shrink-0">
                      <Star className="h-5 w-5 text-care-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-care-800 mb-1">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8032936/pexels-photo-8032936.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Personalized care planning"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 bg-care-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Real Special Request Examples
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some examples of how we've helped clients with their
              unique needs and requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-care-800 mb-3">
                  Genealogy Research Support
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We helped Mary organize her family photos and documents,
                  creating a beautiful family history book for her
                  grandchildren.
                </p>
                <div className="text-xs text-care-600 font-medium">
                  Project Duration: 3 months
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-care-800 mb-3">
                  Garden Restoration
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  John wanted to restore his late wife's garden. Our caregiver
                  with gardening experience helped him replant and maintain it.
                </p>
                <div className="text-xs text-care-600 font-medium">
                  Ongoing seasonal support
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-care-800 mb-3">
                  Technology Learning
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We provided dedicated tech support to help Patricia learn to
                  video call her family and use her tablet for entertainment.
                </p>
                <div className="text-xs text-care-600 font-medium">
                  6-week learning program
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Special Request?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            No matter how unique your needs, we're here to help. Contact us to
            discuss how we can create a customized solution just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Discuss Your Request</Link>
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
