import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login({ setUser }: any) {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);

      let res = await fetch("http://localhost:8080/api/v1/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: tokenResponse.code,
        }),
      });
      console.log("res: ", res);
    },
    flow: "auth-code",
  });

  return (
    <>
      <div
        style={{
          width: "20rem",
        }}
      >
        <h1>Login</h1>
        <h1>apple</h1>
        <div id="apple">
          {/* <GoogleLogin
              text="continue_with"
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
            /> */}
          <button onClick={() => login()}>Sign in with Google 🚀 </button>;
        </div>
      </div>
    </>
  );
}

export default Login;
