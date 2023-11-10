// GitHubOAuth.js
import React, { useState } from "react";
import OAuthProvider from "react-oauth-flow";

const GitHubOAuth = () => {
  const [token, setToken] = useState(null);

  const onSuccess = async (response) => {
    const accessToken = response.access_token;
    setToken(accessToken);

    // Send the token to your backend for further processing
    // e.g., make a POST request to your backend API
  };

  const onFailure = (error) => {
    console.error("OAuth failure:", error);
  };

  return (
    <OAuthProvider
      authorizeUrl="https://github.com/login/oauth/authorize"
      clientId="YOUR_GITHUB_CLIENT_ID"
      redirectUri="YOUR_REDIRECT_URI"
      onSuccess={onSuccess}
      onFailure={onFailure}
    >
      {({ url }) => (
        <div>
          <button onClick={() => (window.location.href = url)}>
            Login with GitHub
          </button>
          {token && <p>Authenticated with token: {token}</p>}
        </div>
      )}
    </OAuthProvider>
  );
};

export default GitHubOAuth;
