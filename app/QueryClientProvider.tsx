'use client';

import {
  QueryClient,
  QueryClientProvider as ReactQueryClienntProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const QueryClientProvider = ({children}:PropsWithChildren) => {
  return (
    <ReactQueryClienntProvider client={queryClient}>
        {children}
    </ReactQueryClienntProvider>
  )
};

export default QueryClientProvider;
