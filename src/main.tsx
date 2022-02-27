import { render } from "preact";
import { App } from "./app";
import "./style.css";
import "virtual:windi.css";

render(<App />, document.getElementById("app")!);
