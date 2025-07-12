import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  CheckCircle,
  Heart,
  Smile,
  BookOpen,
  Music,
  Gamepad2,
  Coffee,
  Star,
  MessageCircle,
} from "lucide-react";

const activities = [
  {
    icon: MessageCircle,
    title: "Engaging Conversations",
    description:
      "Meaningful discussions about life experiences, current events, and shared interests",
    details: [
      "Life story sharing",
      "Current events discussion",
      "Reminiscing about memories",
      "Family updates and news",
    ],
  },
  {
    icon: Gamepad2,
    title: "Games & Puzzles",
    description:
      "Mental stimulation through board games, card games, and puzzles",
    details: [
      "Board games and cards",
      "Crossword puzzles",
      "Memory games",
      "Jigsaw puzzles",
    ],
  },
  {
    icon: BookOpen,
    title: "Reading Together",
    description: "Shared reading experiences and literary discussions",
    details: [
      "Reading aloud",
      "Book discussions",
      "Poetry appreciation",
      "Magazine browsing",
    ],
  },
  {
    icon: Music,
    title: "Music Appreciation",
    description:
      "Enjoying music from different eras and sharing musical memories",
    details: [
      "Listening to favorite songs",
      "Music from their era",
      "Singing together",
      "Musical reminiscence",
    ],
  },
];

const benefits = [
  {
    title: "Combat Loneliness",
    description:
      "Regular social interaction helps reduce feelings of isolation and loneliness.",
    icon: Heart,
  },
  {
    title: "Mental Stimulation",
    description:
      "Engaging activities and conversations help maintain cognitive function.",
    icon: BookOpen,
  },
  {
    title: "Emotional Support",
    description:
      "A caring presence provides comfort and emotional stability during difficult times.",
    icon: Smile,
  },
  {
    title: "Improved Mood",
    description:
      "Regular companionship and enjoyable activities naturally boost spirits and outlook.",
    icon: Star,
  },
];

export default function Companionship() {
  return (
    <Layout
      title="Companionship Services"
      description="Professional companionship services providing social interaction, emotional support, and meaningful activities to enhance quality of life and combat loneliness."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-care-500 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                  Companionship Services
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Combat loneliness and isolation with our warm, professional
                companionship services. Our carefully selected companions
                provide meaningful social interaction, emotional support, and
                engaging activities tailored to your interests and preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Find Your Companion</Link>
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
                src="https://images.pexels.com/photos/7551473/pexels-photo-7551473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Senior and caregiver enjoying conversation"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-care-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities & Engagement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Meaningful Activities & Engagement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our companions engage in activities that bring joy, stimulation,
              and genuine connection to your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-care-100 p-3 rounded-lg flex-shrink-0">
                      <activity.icon className="h-6 w-6 text-care-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-care-800 mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {activity.description}
                      </p>
                      <ul className="space-y-2">
                        {activity.details.map((detail, detailIndex) => (
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

      {/* Image Gallery */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Moments of Joy & Connection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our companionship services bring happiness and meaningful
              connections to daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Reading together"
                className="rounded-lg shadow-md w-full"
              />
              <img
                src="https://images.pexels.com/photos/7488720/pexels-photo-7488720.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Playing games"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/8032934/pexels-photo-8032934.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Enjoying conversation"
                className="rounded-lg shadow-md w-full"
              />
              <img
                src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Sharing tea time"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/8866793/pexels-photo-8866793.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Music appreciation"
                className="rounded-lg shadow-md w-full"
              />
              <img
                src="https://images.pexels.com/photos/7551473/pexels-photo-7551473.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Gentle care"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              The Benefits of Companionship
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional companionship provides numerous physical, mental, and
              emotional benefits that enhance overall quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-care-100 p-3 rounded-lg flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-care-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-care-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-care-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <blockquote className="text-muted-foreground mb-4 italic">
                  "My companion has become like a dear friend. We share stories,
                  play cards, and she always brightens my day. I look forward to
                  her visits more than anything."
                </blockquote>
                <div className="font-semibold text-care-800">
                  Eleanor Thompson
                </div>
                <div className="text-sm text-muted-foreground">
                  Client since 2021
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
                <blockquote className="text-muted-foreground mb-4 italic">
                  "Since Dad started receiving companionship services, he's like
                  a different person. He's more engaged, happier, and has
                  something to look forward to each day."
                </blockquote>
                <div className="font-semibold text-care-800">Michael Davis</div>
                <div className="text-sm text-muted-foreground">
                  Son of client
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
            Ready for Meaningful Companionship?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Experience the joy of genuine friendship and support with our
            professional companion services. Let us help you stay connected and
            engaged.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Your Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-care-600"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
