import { useState } from "react";

function TodoList() {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState<string[]>([])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            handleAddTodo()
        }
    }

    const handleAddTodo = () => {
       if(inputValue.trim()){
        setTodos([...todos,inputValue])
        setInputValue('')
       }
    }

    const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i)=> i !== index))
    }

    return ( 
        <div>
            <input
                onKeyDown={handleKeyPress}
                onChange={handleInputChange}
                type="text" 
                value={inputValue}
                className="px-6 py-3 bg-white/10 text-white font-medium text-sm leading-tight rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 border border-white/20 placeholder-white/50 backdrop-blur-sm"
                placeholder="Digite algo..."
            />            
            <button
                onClick={handleAddTodo} 
                className="m-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm leading-tight uppercase rounded-md shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300"
            >
                Enviar
            </button>
            <div className="mt-6 p-4 bg-white/5 rounded-md border border-white/10 backdrop-blur-sm">
            <ul className="mt-4 space-y-2">

            {
                    todos.map((todo,index)=>(

                        <li className="text-white border-b-1 border-white/10 font-medium text-lg flex justify-between" key={index}>
                            <span>{todo}</span>
                            <button
                            onClick={()=> removeTodo(index)}
                            className=" px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-600 text-white font-medium text-sm leading-tight uppercase rounded-md shadow-lg hover:shadow-xl hover:from-orange-400 hover:to-red-600 transition-all duration-300"
                            >X</button>
                        </li>
                    )) 
                }
            </ul>

            </div>
          
        </div>
     );
}

export default TodoList;