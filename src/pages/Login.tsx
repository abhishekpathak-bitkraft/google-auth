import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
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
        <GoogleOAuthProvider clientId="259636043206-uliarepqr5uf1pqqci8ektl2tuim58j3.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              console.log("cred ", credentialResponse);

              const token = credentialResponse.credential;
              console.log("token: ", token);
              // console.log(token);
              // navigate("/dashboard")
              let res = await fetch(
                "http://localhost:8080/api/v1/auth/google",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ token }),
                }
              );
              let result = await res.json();

              console.log("result: ", result);
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
