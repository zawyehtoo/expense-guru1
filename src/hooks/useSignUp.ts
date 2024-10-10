import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SignUpUserType } from "@/validations/signup";
import axiosInstance from "@/lib/axios";
import { HttpStatus } from "@/enums/httpStatus";
import { getRelevantRoute } from "@/lib/route";
import { Route } from "@/enums/route";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const signup = async (user: Omit<SignUpUserType, "confirmPassword">) => {
    try {
      setLoading(true);
      const { status } = await axiosInstance.post("/users/register", user);
      if (status === HttpStatus.CREATED) {
        setLoading(false);
        router.push(getRelevantRoute(Route.LOGIN));
      }
    } catch (error: any) {
      setLoading(false);
      console.error(`Error From Sign up : ${error}`);
    }
  };
  return { signup, loading };
};
