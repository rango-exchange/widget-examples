import { useCallback } from "react";
import { WidgetProvider } from "@rango-dev/widget-embedded";
import { Dapp } from "./Dapp";
import { WIDGET_CONFIG } from "./constants";
import "./styles.css";

export default function App() {
  const handleUpdate = useCallback(
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
