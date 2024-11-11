"use client";
import Link from "next/link";
import Image from "next/image";

interface LogoPros {
  isBlack?: boolean;
  width?: number;
  height?: number;
}

export default function Logo({ isBlack, width, height }: LogoPros) {
  console.log("log, isBlack", isBlack);
  return (
    <Link
      style={{
        display: "flex",
        alignItems: "center",
      }}
      href="/"
    >
      {isBlack ? (
        <Image
          src="/logoBlack.svg"
          alt="logo"
          width={width}
          height={height}
          className="w-12 h-12"
        />
      ) : (
        <Image
          src="/logoWhite.svg"
          alt="logo"
          width={width}
          height={height}
          className="w-12 h-12"
        />
      )}
    </Link>
  );
}
