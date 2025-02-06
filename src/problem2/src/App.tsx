import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./components/router/Router";

const queryClient = new QueryClient({
  defaultOptions: { mutations: { retry: 3 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
