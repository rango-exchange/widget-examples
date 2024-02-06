"use client";

import NoSSR from "react-no-ssr";
import { Widget } from "@rango-dev/widget-embedded";

function RangoWidget() {
  return (
    //@ts-ignore
    <NoSSR>
      <Widget
        config={{
          apiKey: "c6381a79-2817-4602-83bf-6a641a409e32",
          walletConnectProjectId: "e24844c5deb5193c1c14840a7af6a40b",
        }}
      />
    </NoSSR>
  );
}

export default RangoWidget;
