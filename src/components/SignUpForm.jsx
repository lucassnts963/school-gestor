import { useState } from "react"

export function SignUpForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!username || !password || !confirmPassword) {
            alert('Você precisa preencher todos os campos!')
            return
        }

        if (password !== confirmPassword) {
            alert('As senhas devem ser iguais!')
            return
        }

        console.log(username, password, confirmPassword)
    }

    return (
        <form className="flex flex-col gap-2 w-96 p-5" onSubmit={handleSubmit}>
            <h1 className="text-red-50 font-semibold text-3xl mb-6 uppercase">Cadastro de Aluno</h1>
            <input className="p-2 rounded outline-none bg-red-300 text-red-500 placeholder:text-red-200 focus:border-2 focus:border-red-950" type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input className="p-2 rounded outline-none bg-red-300 text-red-500 placeholder:text-red-200 focus:border-2 focus:border-red-950" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input className="p-2 rounded outline-none bg-red-300 text-red-500 placeholder:text-red-200 focus:border-2 focus:border-red-950" type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button type="submit" className="bg-red-600 rounded p-2 text-red-100 uppercase font-semibold hover:bg-red-500">Cadastrar</button>
        </form>
    )
}