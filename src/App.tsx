import "./styles.css";
import List from "./components/List/List";
//data fake
import { TASKS } from "./BD/mockdata.js";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <List items={TASKS} title="To Do" />
    </div>
  );
}
