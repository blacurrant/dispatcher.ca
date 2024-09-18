
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/myroutes";
function App() {
  return (
    <div className="font-jost">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
