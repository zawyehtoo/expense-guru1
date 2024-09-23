"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";
import { getRelevantRoute } from "@/lib/route";
import { Route } from "@/enums/route";
import Landing from "@/components/mobile/landing";

export default function GoogleAuthCallback() {
  const { setLoggedInUserData } = useLogin();
  const router = useRouter();

  useEffect(() => {
    const handleLogin = async () => {
      const data = await setLoggedInUserData();
      if (data) {
        router.push(getRelevantRoute(Route.HOME)); // Redirect to home page after successful login
      } else {
        router.push(getRelevantRoute(Route.LOGIN)); // Redirect to login page if there's an issue
      }
    };

    handleLogin();
  }, [setLoggedInUserData, router]);

  return <Landing />;
}
