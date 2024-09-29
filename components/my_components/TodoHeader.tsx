import {
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
export default function TodoHeader(){
    return (
        <TableHeader>
          <TableRow>
            <TableHead>
              Done
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">
              Category
            </TableHead>
            <TableHead className="hidden md:table-cell">
              Description
            </TableHead>
            <TableHead className="hidden md:table-cell">
              Date
            </TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
    )
}