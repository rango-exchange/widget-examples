import { WidgetConfig } from "@rango-dev/widget-embedded";
import { providers } from "./providers";

export const WIDGET_CONFIG: WidgetConfig = {
  externalWallets: true,
  // Providers implemented by DApp
  wallets: providers,
  // This API key is only for test purpose. Don't use it in production.
  apiKey: "c6381a79-2817-4602-83bf-6a641a409e32",

  walletConnectProjectId: "e24844c5deb5193c1c14840a7af6a40b",
};
