import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Database } from "lucide-react";

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy for Comforting Care Solutions. Learn how we collect, use, and protect your personal information."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-care-500 p-3 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-care-800">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information when you use our
            services.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  1. Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We collect information that you provide directly to us, such
                    as when you create an account, request services, or contact
                    us for support. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Personal contact information (name, address, phone, email)
                    </li>
                    <li>
                      Health and medical information relevant to care needs
                    </li>
                    <li>Emergency contact details</li>
                    <li>Payment and billing information</li>
                    <li>Care preferences and special requirements</li>
                    <li>Communication records and service feedback</li>
                  </ul>
                  <p>
                    We may also collect information automatically through your
                    use of our website, including device information, usage
                    patterns, and technical data.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and deliver our care services</li>
                    <li>
                      Assess your care needs and develop personalized care plans
                    </li>
                    <li>Match you with appropriate caregivers</li>
                    <li>Process payments and maintain billing records</li>
                    <li>
                      Communicate with you about services and appointments
                    </li>
                    <li>Ensure safety and emergency response capabilities</li>
                    <li>Improve our services and develop new offerings</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except in
                    the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      With caregivers assigned to your care (limited to
                      necessary information)
                    </li>
                    <li>
                      With emergency services when required for your safety
                    </li>
                    <li>With healthcare providers as authorized by you</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>
                      With service providers who assist in our operations (under
                      strict confidentiality agreements)
                    </li>
                  </ul>
                  <p>
                    All third parties who have access to your information are
                    bound by confidentiality agreements and data protection
                    requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  4. Data Security
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encrypted data transmission and storage</li>
                    <li>Access controls and authentication systems</li>
                    <li>Regular security assessments and updates</li>
                    <li>Staff training on data protection procedures</li>
                    <li>
                      Secure disposal of personal information when no longer
                      needed
                    </li>
                  </ul>
                  <p>
                    While we strive to protect your personal information, no
                    method of transmission over the internet is 100% secure. We
                    continuously work to improve our security measures.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  5. Your Rights and Choices
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Under data protection legislation, you have several rights
                    regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Right to Access:</strong> Request copies of your
                      personal information
                    </li>
                    <li>
                      <strong>Right to Rectification:</strong> Request
                      correction of inaccurate information
                    </li>
                    <li>
                      <strong>Right to Erasure:</strong> Request deletion of
                      your information in certain circumstances
                    </li>
                    <li>
                      <strong>Right to Restriction:</strong> Request limitation
                      of processing in certain cases
                    </li>
                    <li>
                      <strong>Right to Portability:</strong> Request transfer of
                      your information
                    </li>
                    <li>
                      <strong>Right to Object:</strong> Object to processing in
                      certain circumstances
                    </li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the
                    information provided below. We will respond to your request
                    within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  6. Data Retention
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We retain your personal information only for as long as
                    necessary to fulfill the purposes for which it was collected
                    and to comply with legal obligations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Active client records: Duration of service plus 7 years
                    </li>
                    <li>
                      Medical and care records: As required by healthcare
                      regulations
                    </li>
                    <li>Financial records: 7 years from last transaction</li>
                    <li>Marketing communications: Until you opt out</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  7. Cookies and Website Information
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our website uses cookies and similar technologies to improve
                    your browsing experience, analyze site traffic, and provide
                    personalized content. You can control cookie settings
                    through your browser preferences.
                  </p>
                  <p>
                    We may use analytics tools to understand how visitors use
                    our website. This information is aggregated and does not
                    identify individual users.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  8. Updates to This Policy
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal requirements. We
                    will notify you of any material changes by posting the
                    updated policy on our website and, where appropriate,
                    contacting you directly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-care-800 mb-4">
                  9. Contact Information
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="bg-care-50 p-4 rounded-lg">
                    <p className="font-medium text-care-800">
                      Data Protection Officer
                    </p>
                    <p>Comforting Care Solutions</p>
                    <p>63-66 Hatton Garden</p>
                    <p>London EC1N 8LE</p>
                    <p>Phone: +44 1322 329735</p>
                    <p>Email: privacy@comfortingcare.co.uk</p>
                  </div>
                  <p>
                    You also have the right to lodge a complaint with the
                    Information Commissioner's Office (ICO) if you believe your
                    data protection rights have been breached.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center bg-muted p-6 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2025
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This policy is governed by UK data protection legislation
                including the Data Protection Act 2018 and UK GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            We're committed to protecting your privacy. Contact us if you have
            any questions or concerns.
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
              <Link to="/terms">Terms & Conditions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
