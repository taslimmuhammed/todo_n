import { Calendar } from "@/components/ui/calendar"
import React from "react"

export default function Calendarmain(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())
 
    return (
      <div className="flex items-center justify-center h-screen w-full">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      /></div>
    )
}