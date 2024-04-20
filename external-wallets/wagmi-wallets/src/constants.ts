export const WALLETS = [
  {
    type: "metamask",
    name: "MetaMask",
  },
  { type: "coinbase", name: "Coinbase Wallet" },
];

export const WIDGET_CONFIG = {
  externalWallets: true,
  multiWallets: false,
  wallets: WALLETS.map((w) => w.type),
  // This API key is only for test purpose. Don't use it in production.
  apiKey: "c6381a79-2817-4602-83bf-6a641a409e32",
};
