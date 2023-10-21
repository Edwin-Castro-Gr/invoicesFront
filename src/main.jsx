import React from "react";
import { createRoot } from "react-dom/client";
import { TokenProvider } from "./utils/tokenContext";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <TokenProvider>
    <App />
  </TokenProvider>
);
