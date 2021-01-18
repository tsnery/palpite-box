import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-600 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: Tainan Nery / {''}
                <a className='hover:underline' href='https://github.com/tsnery' target='_blank'>Github</a>
                <div className='mt-2'>
                    <img className='inline px-4' src='/logo_semana_fsm.png'/>
                    <img className='inline px-4' src='/logo_devpleno.png'/>
                </div>
            </div>
        </div>
    )
}
export default Footer