"use client";
import React from "react";
import SignUpForm from "@/components/common/signUpForm";
import { CardHeader, CardContent, CardTitle, Card } from "@/components/ui/card";
import BG from "../../../../public/welcome-bg.png";

const SignUpPage = () => {
  return (
    <div
      className="flex items-center h-dvh justify-center"
      style={{
        backgroundImage: `url(${BG.src})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card className="mx-auto w-[340px] max-w-sm drop-shadow-2xl shadow-primary">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;