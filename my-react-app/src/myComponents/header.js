import React, { useState, useSyncExternalStore } from 'react';
import './Header.css';


const handleClick = () => {
    // var element = document.getElementById("navbtn");
    var element = document.getElementById("main");
    element.classList.toggle("active");

    const xMarkIcon = document.querySelector('.fa-xmark');
    const barsIcon = document.querySelector('.fa-bars');

    if (xMarkIcon.style.display === 'none' || xMarkIcon.style.display === '') {
        xMarkIcon.style.display = 'inline-block';
        barsIcon.style.display = 'none';
    } else {
        xMarkIcon.style.display = 'none';
        barsIcon.style.display = 'inline-block';
    }
};

export default function header() {
    return (
        <>
            <nav className="nav">
                <div className="container " id='main'>
                    <button className='navbtn' onClick={handleClick}>
                        <i className="fa-solid fa-xmark fa-2xl"></i>
                        <i className="fa-solid fa-bars fa-2xl"></i>
                    </button>
                    <h1 className="logo"><a href="/index.html">My Website</a></h1>
                    <ul>
                        <li><a href="#" className="current">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                {/* <button >Click me</button> */}
            </nav>
        </>
    )
}
