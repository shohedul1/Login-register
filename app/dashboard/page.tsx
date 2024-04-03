"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Dashboard = () => {

  const { data: session } = useSession();

  return (
    <div
      className="min-h-screen py-20"
      style={{
        backgroundImage: `url("/background.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-2xl grid place-items-center mx-auto py-40 gap-6 bg-slate-50">
        <span className="text-4xl tracking-wide font-semibold capitalize text-[#5D7DF3]">
          welcome to the Dashboard
        </span>
        {session && <span className="text-2xl tracking-normal py-10 font-semibold">{session.user?.name}</span>}
        {session?.user?.image !== undefined ? (
          <div className="bg-red-500 w-[100px] h-[100px] rounded-full relative flex items-center justify-center" >
            <Image src={session.user?.image || '/default-image.jpg'} alt='image' width={80} height={80} className="rounded-full" />
          </div>
        ) : (
          <div>Hello</div>
        )}




        <button onClick={() => signOut()} className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
