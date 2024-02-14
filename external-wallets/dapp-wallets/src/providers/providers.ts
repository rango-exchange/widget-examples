import { ProviderInterface } from "@rango-dev/widget-embedded";
import { coinbaseProvider } from "./coinbase-provider";
import { metamaskProvider } from "./metamask-provider";

/*
 *  We have already implemented these providers. This is only for demonstration purposes.
 *  To use an external wallet provider that is not yet supported by us, you can create your own implementation of the Provider interface and pass it to the widget.
 */
export const providers: ProviderInterface[] = [
  metamaskProvider,
  coinbaseProvider,
];
