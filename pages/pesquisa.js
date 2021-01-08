import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div>
            <h1 className='text-center font-bold mb-4    text-2xl'>Críticas e sugestões</h1>
            <p className='text-center mb-4'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='w-72 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 w-80 rounded my-2'/>
                <label className='font-bold'>Email:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 w-80 rounded my-2'/>
                <label className='font-bold'>Whatsapp:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 w-80 rounded my-2'/>
                <label className='font-bold'>Sua crítico ou sugestão:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 w-80 rounded my-2'/>
            </div>
        </div>
    )
}
export default Pesquisa