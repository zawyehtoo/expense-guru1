"use client";
import React from "react";
import Lottie from "lottie-react";
import Loading from "@/lotties/loading.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getRelevantRoute, isMobile } from "@/lib/route";
import { Route } from "@/enums/route";
import dynamic from "next/dynamic";

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
      router.push(
        isMobile()
          ? getRelevantRoute(Route.WELCOME)
          : getRelevantRoute(Route.HOME)
      );
    }
  }, [loading]);
  return (
    <div className="h-dvh w-full flex flex-col justify-center items-center text-white font-bold text-3xl bg-[#488d88]">
      <Lottie animationData={Loading} />
      <div className="relative top-[-10px]">Expense Guru</div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Landing), {
  ssr: false,
});