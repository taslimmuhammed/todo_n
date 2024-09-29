'use client';
import { useRouter } from 'next/router';
export default function UpdateTodo(){
    const router = useRouter();    
    const { id } = router.query;
    return(<div>{id}</div>)
}