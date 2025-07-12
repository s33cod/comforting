import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dog,
  CheckCircle,
  Heart,
  Clock,
  Shield,
  Activity,
  Home,
  Stethoscope,
  MapPin,
} from "lucide-react";

const petServices = [
  {
    icon: Activity,
    title: "Dog Walking",
    description:
      "Regular exercise and outdoor time to keep your dog healthy and happy",
    features: [
      "Daily or weekly walks",
      "Exercise tailored to pet's needs",
      "Safe, secure leash handling",
      "Weather-appropriate outings",
    ],
  },
  {
    icon: Heart,
    title: "Pet Feeding",
    description: "Reliable feeding schedules and dietary care for your pets",
    features: [
      "Scheduled feeding times",
      "Special dietary requirements",
      "Fresh water provision",
      "Medication administration",
    ],
  },
  {
    icon: Home,
    title: "Pet Companionship",
    description: "Loving attention and social interaction for your pets",
    features: [
      "Interactive playtime",
      "Comfort for anxious pets",
      "Social interaction",
      "Basic grooming",
    ],
  },
  {
    icon: Shield,
    title: "Pet Safety",
    description: "Ensuring your pet's safety and wellbeing at all times",
    features: [
      "Health monitoring",
      "Emergency response",
      "Safe environment checks",
      "Veterinary coordination",
    ],
  },
];

const petTypes = [
  {
    title: "Dogs",
    description:
      "All breeds and sizes welcome. From energetic puppies to senior dogs, we provide appropriate care for every age and temperament.",
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    title: "Cats",
    description:
      "Gentle care for feline friends, including feeding, litter maintenance, and companionship for indoor and outdoor cats.",
    image:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    title: "Small Pets",
    description:
      "Care for rabbits, birds, fish, and other small companions with attention to their unique needs and habitats.",
    image:
      "https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
];

const benefits = [
  {
    title: "Peace of Mind",
    description:
      "Know your beloved pets are receiving loving care in your absence.",
    icon: Heart,
  },
  {
    title: "Routine Maintenance",
    description:
      "Consistent schedules help pets feel secure and maintain their health.",
    icon: Clock,
  },
  {
    title: "Professional Care",
    description:
      "Trained pet caregivers who understand animal behavior and needs.",
    icon: Shield,
  },
  {
    title: "Emergency Support",
    description:
      "Quick response to any pet health concerns or emergency situations.",
    icon: Stethoscope,
  },
];

export default function PetCare() {
  return (
    <Layout
      title="Dog Walking & Pet Care"
      description="Professional pet care services including dog walking, pet feeding, companionship, and exercise routines for your beloved pets."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-care-500 p-3 rounded-lg">
                  <Dog className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                  Dog Walking & Pet Care
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Your pets are family, and they deserve the best care when you
                can't be there. Our professional pet care services provide
                loving attention, exercise, and companionship to keep your furry
                friends happy and healthy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Book Pet Care</Link>
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
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Happy dog being walked"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-care-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Pet Lovers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Comprehensive Pet Care Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From daily walks to feeding schedules, we provide complete care
              for your beloved pets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {petServices.map((service, index) => (
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

      {/* Pet Types */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              We Care for All Types of Pets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No matter what type of pet you have, our experienced caregivers
              provide appropriate care for their unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {petTypes.map((petType, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={petType.image}
                    alt={petType.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-care-800 mb-3">
                    {petType.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {petType.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Benefits of Professional Pet Care
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

      {/* Gallery */}
      <section className="py-16 bg-care-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Happy Pets, Happy Owners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the joy and contentment our pet care services bring to furry
              friends and their families.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Happy dog"
              className="rounded-lg shadow-md aspect-square object-cover"
            />
            <img
              src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Content cat"
              className="rounded-lg shadow-md aspect-square object-cover"
            />
            <img
              src="https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Small pet"
              className="rounded-lg shadow-md aspect-square object-cover"
            />
            <img
              src="https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Pet care"
              className="rounded-lg shadow-md aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-6">
                Trusted Pet Care You Can Count On
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Bonded & Insured
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      All pet caregivers are fully bonded and insured for your
                      protection and peace of mind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Animal Lovers
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Our team consists of genuine animal lovers with experience
                      caring for pets of all types.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Reliable Service
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Consistent, dependable care that fits your schedule and
                      your pet's routine.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Stethoscope className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Health Monitoring
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Trained to recognize signs of illness and coordinate with
                      veterinarians when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional pet care"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Give Your Pets the Care They Deserve
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Trust your beloved pets to our caring, experienced team. We treat
            them like family because we know they are yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Pet Care</Link>
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
