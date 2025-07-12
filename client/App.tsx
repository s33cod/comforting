import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import MealPreparation from "./pages/services/MealPreparation";
import HomeManagement from "./pages/services/HomeManagement";
import Companionship from "./pages/services/Companionship";
import SpecialRequests from "./pages/services/SpecialRequests";
import Prescriptions from "./pages/services/Prescriptions";
import Shopping from "./pages/services/Shopping";
import MedicalAssistance from "./pages/services/MedicalAssistance";
import PetCare from "./pages/services/PetCare";
import Pricing from "./pages/Pricing";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/meal-preparation"
            element={<MealPreparation />}
          />
          <Route
            path="/services/home-management"
            element={<HomeManagement />}
          />
          <Route path="/services/companionship" element={<Companionship />} />
          <Route
            path="/services/special-requests"
            element={<SpecialRequests />}
          />
          <Route path="/services/prescriptions" element={<Prescriptions />} />
          <Route path="/services/shopping" element={<Shopping />} />
          <Route
            path="/services/medical-assistance"
            element={<MedicalAssistance />}
          />
          <Route path="/services/pet-care" element={<PetCare />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
