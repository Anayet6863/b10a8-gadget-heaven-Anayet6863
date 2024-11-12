import React, { useEffect } from 'react';

const ErrorPage = () => {
    useEffect(()=>{
        document.title = "Gadget Heaven || Error!"
},[])
    return (
        <div className=' mx-auto flex justify-center items-center h-screen bg-slate-300'>
            <h1  className='text-7xl text-red-600'>Opps!Error 404!.</h1>
        </div>
    );
};

export default ErrorPage;