import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { createGlobalStyle } from "styled-components";

import { store } from "./store";

import AxiosService from "services/axios.service";
import "./index.css";
import App from "./containers/AppContainer";
import reportWebVitals from "./reportWebVitals";

AxiosService.init();

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

reportWebVitals();
