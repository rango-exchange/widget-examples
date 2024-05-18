import { Fragment, useEffect } from "react";
import { Widget, useWallets } from "@rango-dev/widget-embedded";
import { WALLETS, WIDGET_CONFIG } from "./constants";
import { Button } from "@rango-dev/ui";
import { useAccount, useConnect, Connector, useDisconnect } from "wagmi";

function ExternalWallet({
  name,
  type,
  connector,
}: {
  name: string;
  type: string;
  connector?: Connector;
}) {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected, connector: connectedWallet } = useAccount();
  const walletIsConnected =
    isConnected && connectedWallet?.name === connector?.name;
  const {
    connect: rangoConnect,
    disconnect: rangoDisconnect,
    state,
  } = useWallets();

  const handleClick = () => {
    try {
      if (walletIsConnected) {
        disconnect();
      } else if (connector) {
        connect({ connector });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (
      walletIsConnected &&
      state(type).installed &&
      !state(type).connected &&
      !state(type).connecting
    ) {
      rangoConnect(type);
    } else if (
      !walletIsConnected &&
      state(type).installed &&
      state(type).connected
    ) {
      rangoDisconnect(type);
    }
  }, [walletIsConnected]);

  return (
    <Button
      disabled={!connector || !connector?.getProvider() || !state(type).installed}
      type={walletIsConnected ? "warning" : "primary"}
      size="large"
      onClick={handleClick}
    >
      {`${walletIsConnected ? "Disconnect" : "Connect"} ${name}`}
    </Button>
  );
}

export function Dapp({
  rangoWalletConnected,
}: {
  rangoWalletConnected: string | null;
}) {
  const { connectors, connect } = useConnect();
  const { disconnect: rangoDisconnect } = useWallets();
  const filteredWallets = WALLETS.map((w) => {
    return { ...w, connector: connectors.find((c) => c.name === w.name) };
  });

  useEffect(() => {
    if (rangoWalletConnected) {
      const connector = connectors.find(
        (c) =>
          WALLETS.find((w) => w.type === rangoWalletConnected)?.name === c.name
      );
      if (connector)
        connect(
          { connector },
          { onError: () => rangoDisconnect(rangoWalletConnected) }
        );
    }
  }, [rangoWalletConnected]);
  return (
    <div className="main-container">
      <div className="wallets-container">
        {filteredWallets.map((wallet, index) => (
          <Fragment key={index}>
            <ExternalWallet {...wallet} />
            <br />
          </Fragment>
        ))}
      </div>
      <Widget config={WIDGET_CONFIG} />
    </div>
  );
}
