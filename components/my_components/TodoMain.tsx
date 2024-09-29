import Link from "next/link"
import {
  Loader,
  PlusCircle,
} from "lucide-react"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import TodoBox from "@/components/my_components/TodoBox"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React, { useState } from "react"
import axios from "axios";
import { toast } from "react-toastify";
export default function Todomain(){
  const [date, setDate] =useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState(false);
  const [Name, setName] = useState("workout");
  const [Description, setDescription] = useState("go to the gym")
  const [Category, setCategory] = useState("health")
  const handleClick = async ()=>{
    setIsLoading(true)
    try {
      console.log({
        name:Name,
        description: Description,
        category: Category,
        date : date.getTime()
      });
      const token = localStorage.getItem("token")
      console.log(token);
      const response = await axios.post('http://localhost:5000/create_todo', {
        name:Name,
        description: Description,
        category: Category,
        date : date.getTime()+""
      },
      {
        headers: {
          authorization: `Bearer ${token}` 
        }
      });
      console.log(response);
      toast("Succefully added todo",{type:"success"})
    } catch (error:any) {
      console.error('Error:', error.response.data.message);
      toast(error.response.data.message, {type:"error"})
    }finally{setIsLoading(false)}
  }
    return(<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="active">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="done">Done</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
            <Popover>
            <PopoverTrigger asChild>
              <Button size="lg" className="h-7 gap-2 py-5">
                <PlusCircle className="h-5 w-5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-lg">
                  Add todo
                </span>
              </Button>
              </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add todo</h4>
            <p className="text-sm text-muted-foreground">
              Enter details of the todo below.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">name</Label>
              <Input
                id="width"
                defaultValue="workout"
                className="col-span-2 h-8"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Description</Label>
              <Input
                id="maxWidth"
                defaultValue="go to the gym"
                className="col-span-2 h-8"
                onChange={(e)=>setDescription(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Category</Label>
              <Input
                id="height"
                defaultValue="health"
                className="col-span-2 h-8"
                onChange={(e)=>setCategory(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Date</Label>
              <DatePicker
                selected={date}
                onChange={(d) => d&&setDate(d)}
                minDate={new Date()}
              />
            </div>
          </div>
          <div className="text-center">
          <Button onClick={handleClick} disabled={isLoading}>
          {isLoading ? "Adding..." : "Add"}
          {isLoading && <Loader/>}
          </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
            </div>
          </div>
          <TabsContent value="active">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Upcoming todos</CardTitle>
                <CardDescription>
                  Manage all your todos here.
                </CardDescription>
              </CardHeader>
              <CardContent>
              <TodoBox status="active"/>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  have a good day    :)
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="done">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Done todos</CardTitle>
                <CardDescription>
                  Manage all your todos here.
                </CardDescription>
              </CardHeader>
              <CardContent>
              <TodoBox status="done"/>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  congratz on finishing them    :)
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>)
}