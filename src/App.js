import { Provider } from "react-redux";
import store from "./app/store";
import './App.css';
import DTasks from "./features/task/DTasks";

function App() {
  return (
    <Provider store={store}>
      <DTasks></DTasks>
    </Provider>
  );
}

export default App;
