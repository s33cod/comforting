import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We believe in treating every client with dignity, respect, and genuine care. Our compassionate approach ensures that each person feels valued and understood.",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "Trust is the foundation of our relationships. We are licensed, insured, and committed to maintaining the highest standards of reliability and integrity.",
  },
  {
    icon: Users,
    title: "Family",
    description:
      "We consider our clients and their families as part of our extended family. Building lasting relationships based on mutual respect and understanding is our priority.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from the quality of our care to the professionalism of our team members.",
  },
];

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Director of Care",
    image:
      "https://images.pexels.com/photos/7551473/pexels-photo-7551473.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "With over 15 years of experience in healthcare, Sarah founded Comforting Care Solutions to provide personalized, compassionate care in the comfort of home.",
  },
  {
    name: "Dr. Michael Thompson",
    role: "Medical Director",
    image:
      "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "Dr. Thompson oversees our medical care protocols and ensures that all services meet the highest healthcare standards.",
  },
  {
    name: "Emma Davies",
    role: "Care Coordinator",
    image:
      "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "Emma works closely with families to develop personalized care plans and coordinates our team of caregivers to ensure seamless service delivery.",
  },
];

const certifications = [
  "Licensed Care Provider",
  "Fully Insured & Bonded",
  "CQC Registered",
  "NHS Approved",
  "First Aid Certified Team",
  "Background Checked Staff",
];

export default function About() {
  return (
    <Layout
      title="About Us"
      description="Learn about Comforting Care Solutions - our mission, values, and experienced team dedicated to providing compassionate home care services."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-care-800 mb-6">
                About Comforting Care Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2014, Comforting Care Solutions has been providing
                exceptional home care services to families across the region.
                Our mission is simple: to help people maintain their
                independence and dignity while receiving the care they need in
                the comfort of their own homes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand that choosing care for yourself or a loved one is
                one of life's most important decisions. That's why we've built
                our reputation on trust, compassion, and excellence in
                everything we do.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Caregiver helping elderly person"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-care-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-care-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide compassionate, professional, and personalized care
                  services that enable our clients to live comfortably and
                  independently in their own homes. We are committed to
                  enhancing quality of life while respecting dignity and
                  promoting wellbeing for every individual we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-trust-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading provider of home care services in our
                  community, recognized for our excellence in care, innovation
                  in service delivery, and commitment to making a positive
                  difference in the lives of those we serve and their families.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape how we interact with
              our clients, their families, and our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-care-100 p-3 rounded-lg flex-shrink-0">
                      <value.icon className="h-6 w-6 text-care-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-care-800 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team is dedicated to ensuring the
              highest quality of care and service excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-care-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-care-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-16 bg-care-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Licensed & Certified
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of professional certification
              and licensing to ensure your safety and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="font-medium text-care-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of families who trust us to provide exceptional
            care. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-care-600"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
