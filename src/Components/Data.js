import axios from "axios";
import { useState, useEffect } from "react";
import Block from "./Block";
import "./styles.css";

export default function Data(props) {
  const [dataapi, setdataapi] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/" + props.filter + "/repos")
      .then((response) => {
        setdataapi(response.data);
      });
  }, [props.filter]);
  return (
    <div className="repo_all">
      {dataapi.map((x) => {
        return (
          <Block
            name={x["name"]}
            url={x["html_url"]}
            description={x["description"]}
            avatar={x.owner["avatar_url"]}
            inp={props.filter}
          />
        );
      })}
    </div>
  );
}

// "Hi bro!".toLowerCase().replace(/\s/g,'').includes(props.filter)
