import { useState } from 'react'
function ToDoForm({ addTask }) {
    const [userInput, setUserInput ] = useState('')
    
    const change = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const submit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const keyPress = (e) => {
        if(e.key === 'Enter'){
            submit(e)
        }
    }

    return (
        <form onSubmit={ submit }>
            <input
                value={userInput}
                tupe='text'
                onChange={change}
                onKeyDown={keyPress}
                placeholder='Введите значение...'
            />
            <button>Сохранить</button> 
               
        </form>
    ) 
}

export default ToDoForm