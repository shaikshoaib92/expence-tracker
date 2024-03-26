"use client"

import { useRouter } from "next/navigation";
import React from "react";

export const NavBar = () => {
  const paragraphStyles = {
    margin: 0,
    color: "#fff",
    fontSize: "18px",
    cursor:"pointer"
  };

  const router = useRouter();

  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#0B776D",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 60,
        }}
      >
        <p style={paragraphStyles} onClick={() => router.push("/home")}>
          Home
        </p>
        <p style={paragraphStyles} onClick={() => router.push("/expence")}>
          Expences
        </p>
        <p style={paragraphStyles} onClick={() => router.push("/settings")}>
          Setting
        </p>
      </div>
    </div>
  );
};
