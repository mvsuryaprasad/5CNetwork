import "./styles.css";
import Home from "./Home";
import Submit from "./Components/Submit";
import Repo from "./Components/Repo";
import {
  Route,
  Link,
  BrowserRouter,
  Routes,
  useNavigate
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user" element={<Submit />}></Route>
            <Route path="/user/*" element={<Repo />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
