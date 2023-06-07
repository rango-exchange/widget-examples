"use client";

import NoSSR from "react-no-ssr";
import { Widget } from "@rango-dev/widget-embedded";

function RangoWidget() {
  return <NoSSR>
    <Widget/> 
  </NoSSR>
}

export default RangoWidget;
