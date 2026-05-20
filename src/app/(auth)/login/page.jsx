"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log("user login data: ", user);
    const { data, error } = await authClient.signIn.email({
        email: user?.email,
        password: user?.password
    })
    if (data) {
        toast.success('User logged in successfully!');
        redirect('/');
    }
    if (error) {
        toast.error('User not recognized. try again!')
    }
  };
  const handleGoogle = async() => {
    await authClient.signIn.social({
        provider: "google"
    });
  }
  return (
    <div className="mx-auto   my-4 px-2     w-sm sm:w-md md:w-lg ">
      <div className="border-1  mx-2 my-1 px-1  rounded-md border-slate-50 shadow-md">
        <Form
          className="flex my-auto px-2 pt-4 pb-1  flex-col gap-4"
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button className={" w-full rounded-md font-bold text-xl"} type="submit">
              Login
            </Button>
          </div>
        </Form>
        
        <div className="flex mx-auto px-2 py-1  flex-col gap-4">
          <div className="flex justify-center items-center gap-2">
            <Separator className="w-24 sm:w-24 md:w-32" />
            
            <p className="whitespace-nowrap">Or</p>
            <Separator className="w-24 sm:w-24 md:w-32" />
          </div>
          <Button
            onClick={handleGoogle}
            className={"flex gap-4 items-center font-bold w-full rounded-md"}
            variant="outline"
            type="submit"
          >
            <FcGoogle />
            Google
          </Button>
          <div className="flex text-center items-center mx-auto justify-center space-x-3 mb-2">
            <p className="text-[#647489]">Don't have an account? </p>
            <Link className="text-blue-500 font-bold" href={"/signup"}>
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
