"use client";
import React, { useMemo, useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import TotalBalance from "@/components/common/totalBalance";
import Greeting from "@/components/common/greeting";
import FinanceCard from "@/components/desktop/financeCard";
import Image from "next/image";
import { TotalIncome } from "@/components/common/totalIncome";
import TotalExpense from "@/components/common/totalExpense";
import { useWallet } from "@/hooks/useWallet";
import { PieChartDonut } from "@/components/common/piechart";
import { BarChartComponent } from "@/components/common/barchart";
import { useTransaction } from "@/hooks/useTransaction";
import WithSuspense from "@/components/common/withSuspense";

const Page = () => {
  const { authUser } = useLogin();
  const { totalBalance } = useWallet();

  const financeCards = [
    {
      label: "Total balance",
      img: { src: "/footerIcon/wallet.svg", alt: "Total balance icon" },
      children: (
        <TotalBalance
          className={totalBalance < 0 ? "text-destructive" : "text-[#398C84]"}
        />
      ),
    },
    {
      label: "Income",
      img: { src: "/income-icon.png", alt: "Income icon" },
      badgeClass: "bg-primary-transparent",
      children: <TotalIncome className="font-bold text-3xl text-[#398C84]" />,
    },
    {
      label: "Expense",
      img: { src: "/expense-icon.png", alt: "Expense icon" },
      badgeClass: "bg-destructive-transparent",
      children: (
        <TotalExpense className="font-bold text-3xl text-destructive" />
      ),
    },
  ];
  return (
    <>
      <div className="h-full -z-10">
        <div className="w-full h-32 relative">
          <Image
            alt="background"
            src={"/home-bg.png"}
            fill
            className="object-cover object-top"
          />
          <div className="z-50 absolute p-5 w-full">
            <div className="text-white">
              <Greeting className="text-xl font-semibold" />
              <div className="text-lg">{authUser.username}</div>
            </div>
            <div className="absolute top-24 left-0 flex justify-between gap-8 w-full mx-auto px-4">
              {financeCards.map((card, index) => (
                <FinanceCard
                  key={card.label.length + index}
                  label={card.label}
                  img={card.img}
                  badgeClass={card.badgeClass}
                >
                  {card.children}
                </FinanceCard>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-6 justify-between items-start mt-20 p-4">
         <WithSuspense>
         <div className="w-[40%]">
            <PieChartDonut />
          </div>
          <div className="w-[60%]">
            <BarChartComponent />
          </div>
         </WithSuspense>
        </div>
      </div>
    </>
  );
};

export default Page;
