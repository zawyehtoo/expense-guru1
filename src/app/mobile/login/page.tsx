"use client";
import React from "react";
import LoginForm from "@/components/common/loginForm";
import { CardHeader, CardTitle, Card } from "@/components/ui/card";
import BG from "../../../../public/welcome-bg.png";

const LoginPage = () => {
  return (
    <div
      className="h-dvh flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${BG.src})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card className="w-[80%]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <LoginForm></LoginForm>
      </Card>
    </div>
  );
};

export default LoginPage;
