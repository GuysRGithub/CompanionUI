import { Provider } from "react-redux";
import store from "./app/store";
import './App.css';
import DTasks from "./features/task/DTasks";
import { EnhancedForm as Form } from "./components/Form";

function App() {
  return (
    <Provider store={store}>
      <div className="w-1/3 mx-auto">
        <Form></Form>
      </div>
    </Provider>
  );
}

export default App;
