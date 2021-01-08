import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
const Layout = ({children}) => {
    return (
        <div>
            <Header/>
                <div className='container mx-auto'>
                    <div className='mt-12'>
                        {children}
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
export default Layout