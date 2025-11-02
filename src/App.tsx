import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PhotographerLogin from "./pages/PhotographerLogin";
import PhotographerDashboard from "./pages/PhotographerDashboard";
import AlbumView from "./pages/AlbumView";
import ClientLogin from "./pages/ClientLogin";
import ClientAlbumView from "./pages/ClientAlbumView";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/photographer/login" element={<PhotographerLogin />} />
          <Route path="/photographer" element={<PhotographerDashboard />} />
          <Route path="/photographer/album/:id" element={<AlbumView />} />
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/client/album/:id" element={<ClientAlbumView />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
