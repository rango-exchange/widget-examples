import { Fragment, useCallback } from "react";
import { useWallets, Widget } from "@rango-dev/widget-embedded";
import { providers } from "./providers";
import { WIDGET_CONFIG } from "./constants";
import { Button } from "@rango-dev/ui";

function ExternalWallet({ providerName }: { providerName: string }) {
  const { state, connect, disconnect } = useWallets();
  const providerState = state(providerName);
  const handleClick = useCallback(() => {
    try {
      if (providerState.connected) {
        disconnect(providerName);
      } else {
        connect(providerName);
      }
    } catch (error) {
      console.error(error);
    }
  }, [providerName, providerState, connect, disconnect]);
  return (
    <Button
      disabled={!providerState.installed}
      type={providerState.connected ? "warning" : "primary"}
      size="large"
      onClick={handleClick}
    >
      {providerState.connected
        ? `disconnect ${providerName}`
        : `connect ${providerName}`}
    </Button>
  );
}

export function Dapp() {
  return (
    <div className="main-container">
      <div className="wallets-container">
        {providers.map((provider, index) => (
          <Fragment key={index}>
            <ExternalWallet
              providerName={
                typeof provider === "string" ? provider : provider.config.type
              }
            />
            <br />
          </Fragment>
        ))}
      </div>
      <Widget config={WIDGET_CONFIG} />
    </div>
  );
}
