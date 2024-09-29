import {
    Table,
    TableBody,
  } from "@/components/ui/table"
import TodoItem from "./TodoItem"
import TodoHeader from "./TodoHeader"
import axios from "axios"
import { useEffect, useState } from "react"
import { Popover } from "../ui/popover"

interface Status{
    status:String
}
type Todo ={
  id:Number,
  name:string,
  description: string,
  category:string,
  done:boolean,
  date:string
}

export default function TodoBox(props:Status){
    let {status} = props;
    const [todos, settodos] = useState<Todo[]>([]);
    const fetchTodos = async () => {
      const jwtToken = localStorage.getItem("token"); 
      console.log(jwtToken);
      
      try {
        const response = await axios.get<Todo[]>('http://localhost:5000/get_all_todo', {
          headers: {
            authorization: `Bearer ${jwtToken}` 
          }
        });
    
        const res: Todo[] = response.data;
        settodos(res)
        console.log('Todos:', res);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    useEffect(() => {
      fetchTodos()
    }, [])
    
    return (
        
        <div>
          {todos.length==0?"No todos found":
          <Popover>
          <Table>
          <TodoHeader/>
          <TableBody>
          {todos.map(todo=> <TodoItem {...todo} key={todo.id+""}/>)}
          </TableBody>
          </Table>
          </Popover>
          }
        </div>
        
      
    )
}