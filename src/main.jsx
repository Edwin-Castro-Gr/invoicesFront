import { createRoot } from "react-dom/client";
import { TokenProvider } from "./utils/tokenContext";
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <TokenProvider>
    <App />
  </TokenProvider>
);
