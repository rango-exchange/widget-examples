import { useCallback } from "react";
import {
  WidgetProvider,
  HandleWalletsUpdate,
} from "@rango-dev/widget-embedded";
import { Dapp } from "./Dapp";
import "./styles.css";
import { WIDGET_CONFIG } from "./constants";

export default function App() {
  const handleUpdate = useCallback<HandleWalletsUpdate>(
    (providerName, eventType, accounts, providerState, supportedChains) => {
      console.log({
        providerName,
        eventType,
        accounts,
        providerState,
        supportedChains,
      });
    },
    []
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
