"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

export const NavBar = () => {
  const router = useRouter();
  const path = usePathname();

  const paragraphStylesWhenNotSelected = {
    margin: 0,
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  };

  const paragraphStylesWhentSelected = {
    margin: 0,
    color: "#000",
    fontSize: "18px",
    cursor: "pointer",
  };

  const selectedDiv = {
    width: "100px",
    height: "50px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const unSelectedDiv = {
    width: "100px",
    height: "50px",
    backgroundColor: "",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

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
          gap: 80,
        }}
      >
        <div style={path === "/home" ? selectedDiv : unSelectedDiv}>
          <p
            style={
              path === "/home"
                ? paragraphStylesWhentSelected
                : paragraphStylesWhenNotSelected
            }
            onClick={() => router.push("/home")}
          >
            Home
          </p>
        </div>
        <div style={path === "/expence" ? selectedDiv : unSelectedDiv}>
          <p
            style={
              path === "/expence"
                ? paragraphStylesWhentSelected
                : paragraphStylesWhenNotSelected
            }
            onClick={() => router.push("/expence")}
          >
            Expences
          </p>
        </div>
        <div style={path === "/settings" ? selectedDiv : unSelectedDiv}>
          <p
            style={
              path === "/settings"
                ? paragraphStylesWhentSelected
                : paragraphStylesWhenNotSelected
            }
            onClick={() => router.push("/settings")}
          >
            Setting
          </p>
        </div>
      </div>
    </div>
  );
};
