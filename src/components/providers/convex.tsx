import { ConvexProviderWithHerculesAuth } from "@usehercules/auth/convex-react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = import.meta.env.VITE_CONVEX_URL;
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

export function HerculesConvexProvider({ children }: { children: React.ReactNode }) {
  if (!convex) {
    return <>{children}</>;
  }

  const useHercules = !!import.meta.env.VITE_HERCULES_OIDC_AUTHORITY;

  if (useHercules) {
    return (
      <ConvexProviderWithHerculesAuth client={convex}>
        {children}
      </ConvexProviderWithHerculesAuth>
    );
  }

  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  );
}
