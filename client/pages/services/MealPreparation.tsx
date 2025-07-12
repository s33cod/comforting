import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, CheckCircle, Clock, Heart } from "lucide-react";

export default function MealPreparation() {
  return (
    <Layout
      title="Meal Preparation Services"
      description="Professional meal preparation services with customized meal planning, dietary accommodations, and fresh, nutritious meals prepared in your home."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-care-500 p-3 rounded-lg">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                  Meal Preparation
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nutritious, delicious meals prepared with care in the comfort of
                your own home. Our experienced caregivers create personalized
                meal plans that accommodate dietary restrictions and personal
                preferences.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Caregiver preparing healthy meal"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-care-800 mb-6">
                What We Offer
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Personalized Meal Planning
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We work with you to create meal plans that reflect your
                    tastes, dietary needs, and health requirements. Whether you
                    need diabetic-friendly meals, low-sodium options, or simply
                    prefer certain cuisines, we tailor every meal to your
                    preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Fresh, Quality Ingredients
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our caregivers can shop for fresh ingredients or work with
                    groceries you already have. We focus on nutritious,
                    high-quality ingredients to ensure every meal supports your
                    health and wellbeing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Safe Food Preparation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our trained caregivers follow strict food safety protocols
                    to ensure all meals are prepared safely and hygienically in
                    your kitchen.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Service Features
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Custom meal planning",
                      "Dietary accommodations",
                      "Grocery shopping assistance",
                      "Fresh ingredient preparation",
                      "Kitchen safety protocols",
                      "Meal portioning",
                      "Leftover management",
                      "Special occasion meals",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-care-800 mb-4">
              Benefits of Our Meal Preparation Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-care-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Better Nutrition</h3>
              <p className="text-muted-foreground">
                Enjoy balanced, nutritious meals that support your health and
                dietary goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-trust-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Time & Energy</h3>
              <p className="text-muted-foreground">
                No more worrying about meal planning, shopping, or cooking -
                we'll handle it all.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-warm-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Enjoy Your Favorites
              </h3>
              <p className="text-muted-foreground">
                Continue enjoying the foods you love, prepared safely in your
                own kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Delicious, Nutritious Meals?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Let us take care of meal planning and preparation so you can focus
            on enjoying delicious, healthy food.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Schedule Your Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
