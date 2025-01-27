'use client';
import {
  Home,
  PanelLeft,
  Calendar,
  PersonStandingIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react"
import Todomain from "@/components/my_components/TodoMain"
import Calendarmain from "@/components/my_components/CalenderMain";
import ProfileMain from "@/components/my_components/ProfileMain";


export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions."

export default function Dashboard() {
  const [Screen, setScreen] = useState(0);
  return (
    <TooltipProvider>
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
     
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <div
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            {/* <Package2 className="h-4 w-4 transition-all group-hover:scale-110" /> */}
            <span className="sr-only">todo</span>
          </div>
          
          <Tooltip>
            <TooltipTrigger asChild onClick={()=>setScreen(0)}>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8"
                
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild onClick={()=>setScreen(1)}>
              <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                   
              >
                <Calendar className="h-5 w-5" />
                <span className="sr-only">Calender</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">Calender</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild onClick={()=>setScreen(2)}>
              <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                   
              >
                <PersonStandingIcon className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">Profile</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild >
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <div
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <span className="sr-only">todo</span>
                </div>
                <div
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  onClick={()=>setScreen(0)}
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </div>
                <div
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  onClick={()=>setScreen(1)}
                >
                  <Calendar className="h-5 w-5" />
                  Calender
                </div>
                <div
                  className="flex items-center gap-4 px-2.5 text-foreground"
                  onClick={()=>setScreen(2)}
                >
                  <PersonStandingIcon className="h-5 w-5" />
                  Profile
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        {
          Screen==0? <Todomain/>:Screen==1?<Calendarmain/>:<ProfileMain/>
        }
      </div>
    </div>
    </TooltipProvider>
  )
}
