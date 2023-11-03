import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import Cookies from "js-cookie";

function Dashboard({ user }: any) {
  let navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  return (
    <div>
      Dashboard
      <br />
      <button
        onClick={() => {
          console.log("clicked");
          
        }}
      >
        logout
      </button>
      <br />
      {JSON.stringify(user)}
    </div>
  );
}

export default Dashboard;
