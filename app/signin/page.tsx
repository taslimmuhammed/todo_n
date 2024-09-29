'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from 'next/navigation';
import { Loader } from "lucide-react"

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  type R1 = {
    data:{
      token:string
    }
 }
 const handleSubmit = async () => {
  setIsLoading(true)
  try {
    console.log({
      email,
      password
    });
    
    const response:R1 = await axios.post('http://localhost:5000/auth/login', {
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
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
              {isLoading ? "Signing In..." : "Sign In"}
              {isLoading && <Loader/>}
            </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}