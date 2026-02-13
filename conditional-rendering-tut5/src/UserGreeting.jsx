import React from "react";

function UserGreeting({ isLoggedIn = false, name = "Guest" }) {
  const welcomeMessage = <h2 className="welcome-message">welcome {name}</h2>;

  const loginPrompt = <h2 className="login-prompt">Not logged in</h2>;

  console.log(isLoggedIn, name);

  return isLoggedIn ? welcomeMessage : loginPrompt;
}

export default UserGreeting;
