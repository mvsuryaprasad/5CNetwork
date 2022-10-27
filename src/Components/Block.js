import { Link, useNavigate, createSearchParams } from "react-router-dom";
import "./styles.css";
export default function Block(props) {
  const navigate = useNavigate();
  const nav = () => {
    navigate({
      pathname: "/user/" + props.name,
      search: createSearchParams({
        name: props.name,
        description: props.description,
        avatar: props.avatar
      }).toString()
    });
  };
  return (
    <div className="repo">
      <div className="repo_img">
        <img src={props.avatar} onClick={nav} />
      </div>
      <div className="repo_details">
        <div className="repo_details_prt1">
          <div className="repo_details_prt1_name" onClick={nav}>
            {props.name}
          </div>
          <div className="repo_details_prt1_tick">
            <div class="verified-avatar-icon">✓</div>
          </div>
        </div>
        <div className="repo_details_prt2">{props.description}</div>
      </div>
    </div>
  );
}
