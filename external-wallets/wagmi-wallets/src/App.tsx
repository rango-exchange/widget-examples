import { useCallback, useState } from "react";
import {
  HandleWalletsUpdate,
  WidgetProvider,
} from "@rango-dev/widget-embedded";
import { Dapp } from "./Dapp";
import "./styles.css";
import { WALLETS, WIDGET_CONFIG } from "./constants";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function App() {
  const { connect, connectors } = useConnect();
  const [rangoWalletConnected, setRangoWalletConnected] = useState<string | null>(
    null
  );
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const handleUpdate = useCallback<HandleWalletsUpdate>(
    (providerName, eventType, accounts, providerState, supportedChains) => {
      if (providerState.connected && !isConnected) {
        setRangoWalletConnected(providerName);
      } else if (
        isConnected &&
        !providerState.connected &&
        !providerState.connecting
      ) {
        setRangoWalletConnected(null);
        disconnect();
      } else {
        setRangoWalletConnected(null);
      }
    },
    [isConnected]
  );

  return (
    <div className="App">
      <WidgetProvider
        config={WIDGET_CONFIG}
        // Listen to the wallet provider events and get the latest updates
        onUpdateState={handleUpdate}
      >
        <Dapp rangoWalletConnected={rangoWalletConnected} />
      </WidgetProvider>
    </div>
  );
}
