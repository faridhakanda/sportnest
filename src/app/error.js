"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="grid mx-auto my-auto items-center justify-center">
      <Image
      className="mx-2"
        src="/error404.webp"
        alt="error404 page"
        width={400}
        height={400}
      />
      <Link className="mx-auto justify-center my-2" href={"/"}>
        <Button className={"rounded-md font-bold mx-auto justify-center my-2"}>
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
