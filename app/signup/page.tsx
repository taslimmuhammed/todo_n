'use client';
import Link from "next/link";
import axios, { AxiosError } from 'axios';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import { Audio, FidgetSpinner } from 'react-loader-spinner';
import { Loader, Loader2 } from "lucide-react";
export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export default function LoginForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
 type R1 = {
    data:{
      token:string
    }
 }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      console.log({
        firstname: firstName,
        lastname: lastName,
        email,
        password
      });
      
      const response:R1 = await axios.post('http://localhost:5000/auth/signup', {
        firstname: firstName,
        lastname: lastName,
        email,
        password
      });
      console.log(response.data.token);
      localStorage.setItem("token",response.data.token);
      toast("Succefully created accout",{type:"success"})
      router.replace("/")
    } catch (error:any) {
      console.error('Error:', error.response.data.message);
      toast(error.response.data.message, {type:"error"})
    }finally{setIsLoading(false)}
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
              {isLoading ? "Signing Up..." : "Sign Up"}
              {isLoading && <Loader/>}
            </Button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {result && (
            <p className="text-green-500">
              {/* Sign up successful! User: {result.user?.name} (Token: {result.token}) */}
            </p>
          )}
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function showToast(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
