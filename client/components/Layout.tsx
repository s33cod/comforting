import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Heart,
  Phone,
  Mail,
  Home as HomeIcon,
  Info,
  Briefcase,
  PoundSterling,
  Newspaper,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: Info },
    {
      name: "Services",
      href: "/services",
      icon: Briefcase,
      children: [
        { name: "Meal Preparation", href: "/services/meal-preparation" },
        { name: "Home Management", href: "/services/home-management" },
        { name: "Companionship", href: "/services/companionship" },
        { name: "Special Requests", href: "/services/special-requests" },
        { name: "Collecting Prescriptions", href: "/services/prescriptions" },
        { name: "Shopping", href: "/services/shopping" },
        { name: "Medical Assistance", href: "/services/medical-assistance" },
        { name: "Dog Walking/Pet Care", href: "/services/pet-care" },
      ],
    },
    { name: "Pricing", href: "/pricing", icon: PoundSterling },
    { name: "News", href: "/news", icon: Newspaper },
    { name: "Contact", href: "/contact", icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      {title && <title>{title} | Comforting Care Solutions</title>}
      {description && <meta name="description" content={description} />}

      {/* Top Bar */}
      <div className="bg-care-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Call us: +44 1322 329735</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@comfortingcaresolutions.co.uk</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Available 24/7 for emergency care</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc958b415ffc540ad9c90ee1b661265c5%2Fbe0781d3cc6e400b87fe0e5566e770d6"
                alt="Comforting Care Solutions Logo"
                className="h-10 w-auto sm:h-12 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={cn(
                      "text-foreground hover:text-care-600 px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-2",
                      location.pathname === item.href && "text-care-600",
                    )}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </Link>
                  {item.children && (
                    <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-care-50 hover:text-care-600"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 text-base font-medium text-foreground hover:text-care-600 hover:bg-care-50",
                      location.pathname === item.href &&
                        "text-care-600 bg-care-50",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-care-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-care-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc958b415ffc540ad9c90ee1b661265c5%2F2f33b0288ac24d85a6ad6b5d880373ad?format=webp&width=800"
                  alt="Comforting Care Solutions Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-care-200 text-sm">
                Providing compassionate, professional care services to help you
                maintain independence and comfort in your own home.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-care-200">
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-care-200">
                <li>
                  <Link
                    to="/services/companionship"
                    className="hover:text-white"
                  >
                    Companionship
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/meal-preparation"
                    className="hover:text-white"
                  >
                    Meal Preparation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/home-management"
                    className="hover:text-white"
                  >
                    Home Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/medical-assistance"
                    className="hover:text-white"
                  >
                    Medical Assistance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-care-200">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+44 1322 329735</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@comfortingcaresolutions.co.uk</span>
                </div>
                <p className="mt-4">
                  63-66 Hatton Garden
                  <br />
                  London EC1N 8LE
                  <br />
                  24/7 Support Available
                  <br />
                  Licensed & Insured
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-care-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-care-200 space-y-4 md:space-y-0">
              <p>&copy; 2025 Comforting Care Solutions. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}
