import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Opportunity from "./pages/Opportunity";
import Technology from "./pages/Technology";
import Investors from "./pages/Investors";
import Team from "./pages/Team";
import UseOfFunds from "./pages/UseOfFunds";
import Projections from "./pages/Projections";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/opportunity" component={Opportunity} />
      <Route path="/technology" component={Technology} />
      <Route path="/investors" component={Investors} />
      <Route path="/team" component={Team} />
      <Route path="/use-of-funds" component={UseOfFunds} />
      <Route path="/projections" component={Projections} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
