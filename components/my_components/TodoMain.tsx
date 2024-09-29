import Link from "next/link"
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Settings,
  ShoppingCart,
  Calendar,
  Users2,
  PersonStandingIcon
} from "lucide-react"
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import TodoBox from "@/components/my_components/TodoBox"

export default function Todomain(){
    return(<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="active">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="done">Done</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button size="lg" className="h-7 gap-2 py-5">
                <PlusCircle className="h-5 w-5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-lg">
                  Add todo
                </span>
              </Button>
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