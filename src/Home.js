import Data from "./Components/Data";
import "./styles.css";
import {
  Route,
  Link,
  BrowserRouter,
  Routes,
  useNavigate,
  createSearchParams
} from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [inp, setinp] = useState("");
  const navigate = useNavigate();
  const recomfun = () => {
    navigate({
      pathname: "/user",
      search: createSearchParams({
        inp: inp
      }).toString()
    });
  };

  return (
    <div className="home_main">
      <div className="home_main_inp">
        <input
          type="text"
          placeholder="Enter username"
          onChange={(event) => {
            setinp(event.target.value);
          }}
        />
      </div>
      <div className="home_main_btn">
        <button onClick={recomfun}>Submit</button>
      </div>
    </div>
  );
}
