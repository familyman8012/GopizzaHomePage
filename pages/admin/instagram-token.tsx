import axios from "axios";
import React, { useState } from "react";

async function refreshToken() {
  try {
    const response = await axios.get("/api/refresh-instar-token");
  } catch (error) {
    console.error(error);
  }
}

function RefreshTokenButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    await refreshToken();
    setIsLoading(false);
  }

  return (
    <button onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Refresh Token"}
    </button>
  );
}

export default RefreshTokenButton;
