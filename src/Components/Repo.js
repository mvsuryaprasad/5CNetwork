import { useSearchParams } from "react-router-dom";
import "./styles.css";
export default function Repo() {
  const [data] = useSearchParams();
  console.log(data.get["name"]);
  return (
    <div className="repo_all">
      <div className="repo_one_prt1">
        <div className="repo_one_prt1_img">
          <img src={data.get("avatar")} />
        </div>
        <div className="repo_one_prt1_git">
          <div class="verified-avatar-icon">✓</div>
          <div className="git_text">
            <div>Verified By GitHub</div>
          </div>
        </div>
        <div className="git_text_verify">
          GitHub confirms thata this app meets the requirements for verfication
        </div>
        <div className="categories">
          <div className="categories_main">Categories</div>
          <div className="categories_mian_sub">
            <div className="subcat">IDEs</div>
            <div className="subcat">free</div>
            <div className="subcat">Paid</div>
          </div>
        </div>
      </div>
      <div class="repo_one_prt2">
        <div className="repo_one_prt2_appli">Application</div>
        <div className="repo_one_prt2_name">{data.get("name")}</div>
        <div className="repo_one_prt2_btn">
          <button>Set up a plan</button>
        </div>
        <div className="repo_one_prt2_dis">{data.get("description")}</div>
      </div>
    </div>
  );
}
