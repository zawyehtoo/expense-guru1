"use client";
import React from "react";
import styles from "./welcome.module.css";
import BG from "../../../../public/welcome-bg.png";
import Person from "../../../../public/welcome-man.png";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/button";
import { Route } from "@/enums/route";
import { getMobileRoute } from "@/lib/route";

export const Welcome = () => {
  return (
    <div className="flex flex-col h-dvh space-y-5">
      <div className={`${styles.bg} flex justify-center items-center h-[65%]`}>
        <Image
          src={Person}
          alt="background-person"
          className="w-[277px] relative left-[-10px]"
          quality={100}
          priority
        ></Image>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col justify-center items-center text-3xl leading-9 font-bold text-[#488d88]">
          <h3>Spend Smarter</h3>
          <h2>Save Money</h2>
        </div>
        <div className="flex justify-center items-center">
          <Button>
            <Link href={getMobileRoute(Route.SIGNUP)}>Get Started</Link>
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <p className="me-2">Already have an account? </p>
          <span>
            <Link href={getMobileRoute(Route.LOGIN)} className="text-primary text-[#488d88]">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
