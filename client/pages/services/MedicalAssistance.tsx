import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  CheckCircle,
  Clock,
  Shield,
  Phone,
  Calendar,
  Heart,
  AlertCircle,
  Pill,
  FileText,
  Activity,
} from "lucide-react";

const medicalServices = [
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Comprehensive medication support to ensure proper dosing and timing",
    features: [
      "Medication reminders",
      "Dosage verification",
      "Prescription coordination",
      "Side effect monitoring",
    ],
  },
  {
    icon: Calendar,
    title: "Appointment Coordination",
    description: "Complete management of medical appointments and scheduling",
    features: [
      "Appointment scheduling",
      "Transportation coordination",
      "Appointment reminders",
      "Follow-up management",
    ],
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Regular monitoring of vital signs and health indicators",
    features: [
      "Blood pressure checks",
      "Weight monitoring",
      "Symptom tracking",
      "Health record keeping",
    ],
  },
  {
    icon: Phone,
    title: "Doctor Communication",
    description: "Liaison between you and your healthcare providers",
    features: [
      "Medical questions relay",
      "Test result communication",
      "Care plan updates",
      "Emergency contact services",
    ],
  },
];

const healthAreas = [
  {
    title: "Chronic Condition Support",
    description:
      "Specialized care for diabetes, heart conditions, arthritis, and other chronic illnesses.",
    icon: Heart,
  },
  {
    title: "Post-Surgery Recovery",
    description:
      "Careful monitoring and support during recovery periods after medical procedures.",
    icon: Shield,
  },
  {
    title: "Preventive Care",
    description:
      "Proactive health monitoring to catch potential issues early and maintain wellness.",
    icon: Activity,
  },
  {
    title: "Emergency Response",
    description:
      "24/7 emergency support and quick response to urgent health situations.",
    icon: AlertCircle,
  },
];

const process = [
  {
    step: "1",
    title: "Health Assessment",
    description:
      "Comprehensive review of your medical history, current conditions, and care needs.",
  },
  {
    step: "2",
    title: "Care Plan Development",
    description:
      "Create a personalized medical assistance plan with your doctor's input.",
  },
  {
    step: "3",
    title: "Implementation",
    description:
      "Begin medical assistance services with trained, qualified caregivers.",
  },
  {
    step: "4",
    title: "Ongoing Monitoring",
    description:
      "Regular review and adjustment of care plans based on health changes.",
  },
];

export default function MedicalAssistance() {
  return (
    <Layout
      title="Medical Assistance"
      description="Professional medical assistance including medication reminders, appointment coordination, health monitoring, and doctor communication support."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-care-500 p-3 rounded-lg">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                  Medical Assistance
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Professional medical assistance to help you manage your health
                with confidence. From medication management to appointment
                coordination, our trained caregivers provide essential support
                to keep you healthy and safe at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Get Medical Support</Link>
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
                src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional medical care at home"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-care-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Medical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Comprehensive Medical Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our medical assistance services are designed to help you manage
              your health safely and effectively at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {medicalServices.map((service, index) => (
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

      {/* Health Areas */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Specialized Health Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide specialized support for various health conditions and
              medical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthAreas.map((area, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-care-100 p-3 rounded-lg flex-shrink-0">
                      <area.icon className="h-6 w-6 text-care-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-care-800 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Our Medical Assistance Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work closely with you and your healthcare team to provide
              seamless medical support.
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

      {/* Safety & Qualifications */}
      <section className="py-16 bg-care-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Qualified medical care"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-6">
                Qualified & Trained Caregivers
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Medical Training
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      All caregivers receive specialized medical assistance
                      training and ongoing education.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Certified & Licensed
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Our team holds relevant certifications and operates under
                      healthcare supervision.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      24/7 Support
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Emergency medical support available around the clock for
                      urgent situations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-care-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-care-800">
                      Compassionate Care
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Medical assistance provided with dignity, respect, and
                      genuine concern for your wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <AlertCircle className="h-12 w-12 text-warm-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-care-800 mb-4">
              Emergency Medical Response
            </h2>
            <p className="text-muted-foreground mb-6">
              Our caregivers are trained in emergency response procedures and
              maintain direct contact with emergency services when needed. Your
              safety is our top priority.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Phone className="h-6 w-6 text-care-600 mx-auto mb-2" />
                <div className="font-semibold text-sm">24/7 Hotline</div>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-care-600 mx-auto mb-2" />
                <div className="font-semibold text-sm">Emergency Training</div>
              </div>
              <div className="text-center">
                <Activity className="h-6 w-6 text-care-600 mx-auto mb-2" />
                <div className="font-semibold text-sm">Rapid Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Professional Medical Support Today
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Don't manage your health alone. Our qualified medical assistance
            team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Health Assessment</Link>
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
