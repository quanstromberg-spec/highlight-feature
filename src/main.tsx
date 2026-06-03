import React from "react";
import ReactDOM from "react-dom/client";
import Settings from "@husqvarna/ui-core/settings";
import "@husqvarna/ui-core/style.css";
import HighlightFeature from "./pages/HighlightFeature";

Settings.componentIdentifier = true;
Settings.iconSpritePath = "/highlight-feature/icons.svg";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HighlightFeature />
  </React.StrictMode>
);
