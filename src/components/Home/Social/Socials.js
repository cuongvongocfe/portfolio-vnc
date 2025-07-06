import React from 'react';
import "./Socials.css";

const Socials = () => {
    return (
        <div className="home__socials">
            <a href="https://github.com/cuongvongocfe" className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/cuong-vo-ngoc-b6b742226//" className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://dev.to/cuongvongocfe" className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-dev"></i>
            </a>

            <a href="https://discord.gg/Qg8eAbxy" className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-discord"></i>
            </a>

            <a href="mailto:vongoccuongfedev@gmail.com" className="home__social-link" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-google"></i>
            </a>
        </div>
    )
}

export default Socials