import axios from "axios"
import { useState } from "react"

export function RegisterForm() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    /* Manejo de cambio */
    const handleChange = (evento) => {
        setForm({
            ...form,
            [evento.target.name]: evento.target.value,
        })
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault()
        try {
            await axios.post("http://localhost:9999/api/users", form);
            setForm({
                email: '',
                password: ''
            })
            alert('Su cuenta Se a Registrado')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-base-100">
                <form onSubmit={handleSubmit} className="w-full max-w-lg px-4">
                    <fieldset className="bg-base-200 border border-base-300 rounded-box p-8 shadow-lg">
                        <legend className="text-3xl font-bold mb-6 text-center">Sign Up</legend>

                        <label className="label">Email</label>
                        <input
                            onChange={handleChange}
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            className="input input-bordered w-full"
                            placeholder="Email"
                        />

                        <label className="label mt-4">Password</label>
                        <input
                            onChange={handleChange}
                            required
                            type="password"
                            name="password"
                            value={form.password}
                            className="input input-bordered w-full"
                            placeholder="Password"
                        />

                        <button type="submit" className="btn btn-neutral mt-6 w-full text-lg">
                            Sign Up
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

