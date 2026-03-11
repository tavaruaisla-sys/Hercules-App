import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default";
import AuthCallback from "./pages/auth/Callback";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <DefaultProviders>
      <div className="absolute top-0 left-0 p-4 z-50 pointer-events-none">
        <h1 className="text-sm font-bold opacity-20">Welcome to Deanna</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
