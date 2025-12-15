import React from "react";
import LinkHub from "@/pages/LinkHub";

// If you want to keep your old home component accessible later, import it here:
// import OldHome from './components/OldHome';

function App() {
  return (
    <>
      {/* This is your NEW "Traffic Controller" Landing Page.
        It is now the first thing people see.
      */}
      <LinkHub />

      {/* ------------------------------------------------
        ARCHIVE: Your old site code (Saved for later)
        ------------------------------------------------
        If you ever want to bring the old site back, just 
        comment out <LinkHub /> and uncomment the lines below:
      */}

      {/* import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
} 
 
 export default App;
 
 */}

      {/* OR if you decide to use Router later:
        <Routes>
          <Route path="/" element={<LinkHub />} />
          <Route path="/v1" element={<OldHome />} />
        </Routes> 
      */}
    </>
  );
}

export default App;
