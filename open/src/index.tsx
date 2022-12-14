import React from "react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { Theme } from "./theme";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
     <QueryClientProvider client={queryClient}>
     <ThemeProvider theme={Theme}>
     <App />
    </ThemeProvider>
  </QueryClientProvider>
);

