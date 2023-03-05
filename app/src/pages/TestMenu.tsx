import React,{useEffect, useState} from 'react';
import HoverMenu from '../Components/HoverMenu'
import '../assets/css/testMenu.css'

const TestMenu = (()=>{
    return (
        <>
            <div className='menu-wrap'>
                <HoverMenu/>
                <HoverMenu/>
            </div>
            <div className='test'></div>
        </>
    )
});

export default TestMenu;