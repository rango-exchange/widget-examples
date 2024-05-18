## Project Documentation: Integrating Rango Widget External Wallet feature with Wagmi

**In this project, an external wallet is seamlessly integrated with Wagmi in Rango..**

### Configuration Setup:
Because Wagmi can only connect to one wallet at a time, the widget configuration should include `multiWallets: false`. Wagmi's single-wallet constraint is ensured by this setting.

### Connection Management:
Utilize the `useWallet` hook's `connect` and `disconnect` functions for efficient management of wallet connections and disconnections within the widget. Additionally, monitor connection and disconnection events using the `onUpdateState` method within the `WidgetProvider` component to handle wallet connections with Wagmi methods effectively.

### Documentation:
For detailed guidance on connecting wallets in Wagmi, refer to: [Wagmi Connect Wallet Guide](https://wagmi.sh/react/guides/connect-wallet
) 

For integrating external wallets with Rango's widget, consult: [Rango Widget Integration - External Wallets Documentation](https://docs.rango.exchange/widget-integration/external-wallets) 
