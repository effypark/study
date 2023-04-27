import React,{useEffect, useState} from 'react';
import '../assets/css/hoverMenu.css'

const HoverMenu = (()=>{
    return (
        <>
            <div className='hover-list-wrap'>
                <button
                    type="button"
                    className="open-button"
                >
                    <div className='img'></div>
                </button>
                <ul className='hover-list'>
                    <li>
                        <a href="">
                            <span>[test]</span>
                            메뉴메뉴1
                            <span>20232.03.05</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>[test]</span>
                            메뉴메뉴2
                            <span>20232.03.05</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>[test]</span>
                            메뉴메뉴3
                            <span>20232.03.05</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
});

export default HoverMenu;