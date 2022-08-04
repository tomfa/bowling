import type { NextPage } from "next";
import { RequestData } from "../types";

const postData = (data: RequestData) =>
  fetch("/api/calculate-score", { method: "POST", body: JSON.stringify(data) });

const Home: NextPage = () => {
  return (
    <div>
      <button onClick={() => postData({ throws: [5] })}>Throw</button>
    </div>
  );
};

export default Home;
