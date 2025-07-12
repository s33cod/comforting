import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { X, Cookie, Shield, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === "necessary") return; // Necessary cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-[100] p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center space-x-2">
            <Cookie className="h-5 w-5 text-care-600" />
            <h2 className="text-lg font-semibold">Cookie Preferences</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to enhance your browsing experience, analyze site
            traffic, and provide personalized content. By clicking "Accept All",
            you consent to our use of cookies as described in our{" "}
            <a href="/privacy" className="text-care-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          {showSettings && (
            <div className="space-y-4 border-t pt-4">
              <h3 className="font-medium flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Cookie Settings</span>
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">Necessary Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Essential for website functionality
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    Always Active
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">Analytics Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Help us understand how visitors use our website
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange("analytics")}
                    className={cn(
                      "w-12 h-6 rounded-full transition-colors relative",
                      preferences.analytics ? "bg-care-600" : "bg-gray-300",
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 bg-white rounded-full transition-transform absolute top-0.5",
                        preferences.analytics
                          ? "translate-x-6"
                          : "translate-x-0.5",
                      )}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">Marketing Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Used to deliver personalized advertisements
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange("marketing")}
                    className={cn(
                      "w-12 h-6 rounded-full transition-colors relative",
                      preferences.marketing ? "bg-care-600" : "bg-gray-300",
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 bg-white rounded-full transition-transform absolute top-0.5",
                        preferences.marketing
                          ? "translate-x-6"
                          : "translate-x-0.5",
                      )}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">Functional Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Enable enhanced functionality and personalization
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange("functional")}
                    className={cn(
                      "w-12 h-6 rounded-full transition-colors relative",
                      preferences.functional ? "bg-care-600" : "bg-gray-300",
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 bg-white rounded-full transition-transform absolute top-0.5",
                        preferences.functional
                          ? "translate-x-6"
                          : "translate-x-0.5",
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={acceptAll} className="flex-1">
              Accept All Cookies
            </Button>
            <Button
              onClick={() => setShowSettings(!showSettings)}
              variant="outline"
              className="flex-1"
            >
              <Settings className="h-4 w-4 mr-2" />
              {showSettings ? "Hide Settings" : "Cookie Settings"}
            </Button>
            {showSettings && (
              <Button
                onClick={acceptSelected}
                variant="outline"
                className="flex-1"
              >
                Accept Selected
              </Button>
            )}
            <Button onClick={rejectAll} variant="ghost" className="flex-1">
              Reject All
            </Button>
          </div>

          <div className="flex items-center text-xs text-muted-foreground">
            <Shield className="h-3 w-3 mr-1" />
            <span>
              Your privacy is important to us. Learn more in our{" "}
              <a href="/privacy" className="text-care-600 hover:underline">
                Privacy Policy
              </a>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
