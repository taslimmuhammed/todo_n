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
import { Button } from "@/components/ui/button"
import {MoreHorizontal} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export default function TodoItem(){
    return (
          <TableRow>
            <TableCell>
            <Checkbox id="terms1" /> 
            </TableCell>
            <TableCell className="font-medium">
              Laser Lemonade Machine
            </TableCell>
            <TableCell>
              <Badge variant="outline">Draft</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              25
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-07-12
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
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
    )
}