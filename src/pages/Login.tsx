import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login({ setUser }: any) {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          width: "20rem",
        }}
      >
        <h1>Login</h1>
        <GoogleOAuthProvider clientId="">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              console.log("user: ", decoded);
              setUser(decoded);
              navigate("/dashboard")
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </>
  );
}

export default Login;
