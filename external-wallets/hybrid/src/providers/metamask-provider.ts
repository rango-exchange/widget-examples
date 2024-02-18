import { ProviderInterface } from "@rango-dev/widget-embedded";
import {
  config,
  getInstance,
  connect,
  subscribe,
  canSwitchNetworkTo,
  switchNetwork,
  getSigners,
  getWalletInfo,
} from "@rango-dev/provider-metamask";

export const metamaskProvider: ProviderInterface = {
  config,
  getInstance,
  connect,
  subscribe,
  canSwitchNetworkTo,
  switchNetwork,
  getSigners,
  getWalletInfo,
};
