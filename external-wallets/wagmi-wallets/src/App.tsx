import { useCallback } from "react";
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
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  const handleUpdate = useCallback<HandleWalletsUpdate>(
    (providerName, eventType, accounts, providerState, supportedChains) => {
      if (providerState.connected && !isConnected) {
        const connector = connectors.find(
          (c) => WALLETS.find((w) => w.type === providerName)?.name === c.name
        );
        if (connector) connect({ connector });
      } else if (
        isConnected &&
        !providerState.connected &&
        !providerState.connecting
      ) {
        disconnect();
      }
      console.log({
        providerName,
        eventType,
        accounts,
        providerState,
        supportedChains,
      });
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
        <Dapp />
      </WidgetProvider>
    </div>
  );
}
