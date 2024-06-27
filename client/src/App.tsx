import React from "react";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import { Main } from "./templates/Main";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { CardDetails } from "./GiftCard/components/CardDetails";
import { GiftCard } from "./GiftCard";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Main pageTitle="Cartes cadeaux">
        <GiftCard />
      </Main>
    ),
  },
  {
    path: "/:id",
    element: (
      <Main pageTitle="">
        <CardDetails />
      </Main>
    ),
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
