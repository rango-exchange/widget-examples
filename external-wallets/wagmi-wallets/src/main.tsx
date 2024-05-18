import React from 'react';
import ReactDOM from "react-dom/client";
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import App from './App';
import { config } from './config';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
     <WagmiProvider config={config} reconnectOnMount={false}>
            <QueryClientProvider client={new QueryClient()}>
    <App />
    </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
