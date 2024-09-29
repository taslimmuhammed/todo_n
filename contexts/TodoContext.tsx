import { createContext, useContext, ReactNode, useState } from 'react';

interface C_Todo {
  id: number;
  name: string;
  description: string;
  category: string;
  done: boolean;
  date: string;
  popUp:boolean
}

interface TodoContextType {
  todos: C_Todo[];
  updateTodo: (id: number, updatedTodo: Partial<C_Todo>) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<C_Todo[]>([]);

  const updateTodo = (id: number, updatedTodo: Partial<C_Todo>) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, ...updatedTodo } : todo));
  };

  return (
    <TodoContext.Provider value={{ todos, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}