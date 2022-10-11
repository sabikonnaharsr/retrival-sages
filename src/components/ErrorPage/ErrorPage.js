import React from 'react';
import Header from '../Header/Header';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-slate-700 font-bold text-2xl pt-20 '>Sorry Developer ! This Route Is Not Found <span className='text-4xl'>404 !!</span></h1>
        </div>
    );
};

export default ErrorPage;