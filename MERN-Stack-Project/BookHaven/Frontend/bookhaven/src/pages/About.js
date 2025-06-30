import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <>
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
            <div className="about-container">
                <h1>About BookHaven</h1>
                <p>
                    <strong>BookHaven</strong> is your personal space to manage and track books you've read, want to read, or simply love.
                </p>
                <p>
                    Add, edit, or remove books from your list and keep your reading journey organized — all in one place.
                </p>
                <p className='about'>
                    <strong>~ Krisha Busa</strong>
                </p>
            </div>
        </>
    );
}

export default About;
