// Use next.js page for the mobile app
// export { default } from "./pages";

import React from "react";
import MainApp from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
