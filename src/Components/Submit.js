import { useSearchParams } from "react-router-dom";
import Data from "./Data";

export default function Submit() {
  const [data] = useSearchParams();
  return (
    <div>
      <Data filter={data.get("inp")} />
    </div>
  );
}
