"use client";
import React from "react";
import Lottie from "lottie-react";
import Loading from "@/lotties/loading.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "@/lib/route";
import { Route } from "@/enums/route";

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      router.push(isMobile() ? `${Route.MOBILE}${Route.WELCOME}` : Route.HOME);
    }
  }, [loading]);
  return (
    <div className="h-dvh w-full flex flex-col justify-center items-center text-white font-bold text-3xl">
      <Lottie animationData={Loading} />
      <div className="relative top-[-10px]">Expense Guru</div>
    </div>
  );
};

export default Landing;