import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import TodoItem from "./TodoItem"
import TodoHeader from "./TodoHeader"

interface Status{
    status:String
}
export default function TodoBox(props:Status){
    let {status} = props;
    
    return (
        <Table>
            <TodoHeader/>
        <TableBody>
          <TodoItem />
        </TableBody>
      </Table>
    )
}