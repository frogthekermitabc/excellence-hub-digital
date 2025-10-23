import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Consultants from "./pages/Consultants";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import ISO9001 from "./pages/ISO9001";
import ISO14001 from "./pages/ISO14001";
import ISO45001 from "./pages/ISO45001";
import ISO27001 from "./pages/ISO27001";
import ISO37001 from "./pages/ISO37001";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/iso-9001" element={<ISO9001 />} />
          <Route path="/iso-14001" element={<ISO14001 />} />
          <Route path="/iso-45001" element={<ISO45001 />} />
          <Route path="/iso-27001" element={<ISO27001 />} />
          <Route path="/iso-37001" element={<ISO37001 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
