import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Opportunity from "./pages/Opportunity";
import Technology from "./pages/Technology";
import Therapeutics from "./pages/Therapeutics";
import Investors from "./pages/Investors";
import Team from "./pages/Team";
import UseOfFunds from "./pages/UseOfFunds";
import Projections from "./pages/Projections";
import Performance from "./pages/Performance";
import Contact from "./pages/Contact";
import Hiring from "./pages/Hiring";
import Memberships from "./pages/Memberships";
import FAQ from "./pages/FAQ";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/opportunity" component={Opportunity} />
      <Route path="/memberships" component={Memberships} />
      <Route path="/therapeutics" component={Therapeutics} />
      <Route path="/technology" component={Technology} />
      <Route path="/performance" component={Performance} />
      <Route path="/investors" component={Investors} />
      <Route path="/team" component={Team} />
      <Route path="/use-of-funds" component={UseOfFunds} />
      <Route path="/projections" component={Projections} />
      <Route path="/hiring" component={Hiring} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Use base path for GitHub Pages deployment
  const base = import.meta.env.BASE_URL || "/";
  
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <WouterRouter base={base.endsWith('/') ? base.slice(0, -1) : base}>
            <ScrollToTop />
            <Routes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
