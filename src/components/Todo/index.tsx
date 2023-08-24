import React, { useState } from "react";

type Todo = {
    name: string;
    id: number;
    finish?: boolean | false;
};
export default function Todo() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const addTodo = (todo: string) => {
        setTodoList([...todoList, {
            name: todo,
            id: todoList.length + 1,
            finish: false
        }])
    };
    const deleteTodo=(id:number)=>{
        setTodoList([...todoList.filter(item => item.id !== id)])
    }
    const finishTodo=(id:number)=>{
        setTodoList([...todoList.map((item)=> item.id === id ? {...item, finish:!item.finish} : item)])
    }
    return (
        <div>
            <AddTodo addTodo={addTodo} />
            {
                todoList.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} finishTodo={finishTodo} />
                ))
            }
        </div>
    );
}
type AddTodoType = {
    addTodo: (todo: string) => void;
};
function AddTodo(props: AddTodoType) {
    const [todo, setTodo] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };
    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo("")
    };
    return (
        <div>
            <input
                type="text"
                name="name"
                value={todo}
                placeholder="input to do"
                onChange={handleChange}
            />
            <button onClick={onSubmit}>Add to do</button>
        </div>
    );
}


type TodoItemProps={
    todo:Todo,
    deleteTodo:(id:number)=>void;
    finishTodo:(id:number)=>void;
}
function TodoItem(props: TodoItemProps) {
    const onDeleteTodo = (e: React.MouseEvent<HTMLElement>) =>{
        e.preventDefault();
        props.deleteTodo(props.todo.id)
    }
    const onFinishTodo = (e: React.MouseEvent<HTMLElement>) =>{
        e.preventDefault();
        props.finishTodo(props.todo.id)
    }
    return (
        <div style={{ display: "flex", flex: "wrap", gap: "40px", alignItems: "center" }}>
            <h1 style={props.todo.finish ? {textDecorationLine:"line-through"} :{}}>
                {props.todo.name}
            </h1>
            <div>
                <button onClick={onDeleteTodo}>Delete</button>
                <button onClick={onFinishTodo}>Finish</button>
                
            </div>

        </div>
    )
}
