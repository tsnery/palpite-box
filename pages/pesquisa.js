import {React, useState} from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email:'',
        Whatsapp:'',
        Opiniao:''
    })
    const save = async() => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            console.log(data)
        } catch (err) {
            console.log(err)
        } 
    }
    const formHandler = (e) => {
        const {name, value} = e.target
        setForm(old => ({
            ...old,
            [name]:value
        }))
    }
    return (
        <div>
            <h1 className='text-center font-bold mb-4    text-2xl'>Críticas e sugestões</h1>
            <p className='text-center mb-4'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <form className='w-72 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input 
                    type='text' 
                    className='p-4 block shadow bg-blue-100 w-80 rounded my-2'
                    name='Nome'
                    value={form.Nome}
                    onChange={formHandler}
                    required
                    />
                <label className='font-bold'>Email:</label>
                <input 
                    type='text' 
                    className='p-4 block shadow bg-blue-100 w-80 rounded my-2'
                    name='Email'
                    value={form.Email}
                    onChange={formHandler}
                    required
                    />
                <label className='font-bold'>Whatsapp:</label>
                <input 
                    type='text' 
                    className='p-4 block shadow bg-blue-100 w-80 rounded my-2'
                    name='Whatsapp'
                    value={form.Whatsapp}
                    onChange={formHandler}
                />
                <label className='font-bold'>Sua crítico ou sugestão:</label>
                <input 
                    type='text' 
                    className='p-4 block shadow bg-blue-100 w-80 rounded my-2'
                    name='Opiniao'
                    value={form.Opiniao}
                    onChange={formHandler}
                    required
                    />
                <button 
                    className="bg-blue-400 px-12 py-4 mt-2 mb-4 rounded font-bold text-white shadow-lg hover:shadow" 
                    onClick={save}>Enviar
                </button>
            </form>
        </div>
    )
}
export default Pesquisa