import React, {useState} from 'react'

export default function TodoForm(props) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.tambahTodo(input)
        setInput("")
    }

  return (
    <form onSubmit={handleSubmit} className="todolist-form">
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="todolist-input"
            placeholder="Contoh : Bakso"
        />
        <button type="submit" className="todolist-button">Tambah</button>
    </form>
  )
}
