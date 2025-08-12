import { QueryClient, QueryClientProvider as Provider } from "@tanstack/react-query";

const client = new QueryClient();

export default function QueryProvider({ children }) {
  return <Provider client={client}>{children}</Provider>;
}
