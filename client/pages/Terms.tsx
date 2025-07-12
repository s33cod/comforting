import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Shield, Users, Clock } from "lucide-react";

export default function Terms() {
  return (
    <Layout
      title="Terms & Conditions"
      description="Terms and Conditions for Comforting Care Solutions. Learn about our service agreements, policies, and terms of use."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-care-500 p-3 rounded-lg">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-care-800">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these Terms and Conditions carefully before using our
            services. By engaging our services, you agree to be bound by these
            terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  1. Service Agreement
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Comforting Care Solutions ("we", "us", "our") provides
                    professional home care services to clients ("you", "your")
                    in accordance with these Terms and Conditions. Our services
                    include but are not limited to companionship, personal care,
                    household management, and medical assistance support.
                  </p>
                  <p>
                    All services are provided subject to availability and are
                    tailored to individual client needs following a
                    comprehensive assessment. Service agreements may be modified
                    only through written consent from both parties.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  2. Booking and Scheduling
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Services may be booked through phone consultation, online
                    contact, or in-person assessment. We require at least 24
                    hours notice for service bookings, though we will endeavour
                    to accommodate urgent requests where possible.
                  </p>
                  <p>
                    Cancellations must be made at least 4 hours in advance to
                    avoid cancellation fees. Emergency cancellations due to
                    illness or unforeseen circumstances will be considered on a
                    case-by-case basis.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  3. Payment Terms
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Payment is due upon completion of services unless
                    alternative arrangements have been made in writing. We
                    accept cash, cheque, bank transfer, and major credit/debit
                    cards.
                  </p>
                  <p>
                    For regular clients, monthly billing is available with
                    payment due within 14 days of invoice date. Late payment may
                    result in service suspension and additional charges.
                  </p>
                  <p>
                    All prices are subject to change with 30 days written
                    notice. Emergency and out-of-hours services incur additional
                    charges as outlined in our pricing schedule.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  4. Quality and Standards
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    All caregivers are thoroughly vetted, trained, and
                    background-checked. We maintain comprehensive insurance
                    coverage including public liability and professional
                    indemnity insurance.
                  </p>
                  <p>
                    We are committed to providing services that meet the highest
                    professional standards. Regular supervision and quality
                    monitoring ensure consistent service delivery.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  5. Confidentiality and Privacy
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We are committed to protecting your privacy and maintaining
                    strict confidentiality of all personal information. All
                    staff members sign confidentiality agreements and are bound
                    by professional codes of conduct.
                  </p>
                  <p>
                    Information may only be shared with your explicit consent or
                    where required by law. Please refer to our Privacy Policy
                    for detailed information about data handling.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  6. Limitation of Liability
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    While we maintain comprehensive insurance and take every
                    precaution to ensure safe service delivery, our liability is
                    limited to the cost of services provided. We are not
                    responsible for pre-existing conditions or issues beyond our
                    reasonable control.
                  </p>
                  <p>
                    Emergency situations are handled according to established
                    protocols, including immediate contact with emergency
                    services and family members as appropriate.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  7. Termination of Services
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Either party may terminate services with 7 days written
                    notice. In cases of non-payment, inappropriate behaviour, or
                    breach of terms, we reserve the right to terminate services
                    immediately.
                  </p>
                  <p>
                    Upon termination, all outstanding fees become immediately
                    due and payable. We will ensure appropriate handover of care
                    responsibilities where applicable.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  8. Contact Information
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    For questions about these Terms and Conditions or to discuss
                    any concerns, please contact us:
                  </p>
                  <div className="bg-care-50 p-4 rounded-lg">
                    <p className="font-medium text-care-800">
                      Comforting Care Solutions
                    </p>
                    <p>63-66 Hatton Garden</p>
                    <p>London EC1N 8LE</p>
                    <p>Phone: +44 1322 329735</p>
                    <p>Email: info@comfortingcaresolutions.co.uk</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center bg-muted p-6 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2025
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                These terms are subject to English law and the exclusive
                jurisdiction of English courts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            We're here to help clarify any questions you may have about our
            terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-care-600"
            >
              <Link to="/privacy">Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
