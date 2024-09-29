import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React, { useState } from "react"
import axios from "axios";
import { toast } from "react-toastify";
import { fromatDate } from "@/utils/utils"
type Todo = {
  id: Number,
  name: string,
  description: string,
  category: string,
  done: boolean,
  date: string
}
export default function TodoItem(props: Todo) {
  const [date, setDate] = useState<Date>(new Date(parseInt(props.date)))
  const [isLoading, setIsLoading] = useState(false);
  const [Name, setName] = useState(props.name);
  const [Description, setDescription] = useState(props.description)
  const [Category, setCategory] = useState(props.category)
  const updateTodo = async () => {
    const jwtToken = localStorage.getItem("token");


    try {
      const response = await axios.put<Todo[]>('http://localhost:5000/update/' + props.id, {
      }, {
        headers: {
          authorization: `Bearer ${jwtToken}`
        }
      });
      window.location.reload()
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
  return (
    <TableRow>
      <TableCell>
        <Checkbox id="terms1" />
      </TableCell>
      <TableCell className="font-medium">
        {Name}
      </TableCell>
      <TableCell>
        <Badge variant="outline">{props.category}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {Description}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {fromatDate(date)}
      </TableCell>
      
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-haspopup="true"
                size="icon"
                variant="ghost"
              >
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">            
                <DropdownMenuItem>
                  <div>
                  Edit
                  </div>
                  </DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>

    </TableRow>
  )
}