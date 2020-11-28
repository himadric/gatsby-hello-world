import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!!" />
      <p>What a world.</p>
      <img src="https://images.squarespace-cdn.com/content/v1/5e7a9ac19363353135519ba1/1598103423646-IW2XK2AWOKA3RJJN0UI1/ke17ZwdGBToddI8pDm48kP_3dlE6Z-nSybPzNV5cA2B7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLLxGPZs9cXJqW7PQ94qJw_m5AUZeTgUV-7fREHU8BcWzsiyRoFq1vPZJzl3VcPFh/YB7A0152-positive.jpg?format=500w" alt="" />
    </div>
  );
}