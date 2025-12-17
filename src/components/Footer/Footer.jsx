import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import '../../index.css';
import './Footer.css';
import GitHubIcon from '../../assets/images/Navbar/github.svg';
import LinkedInIcon from '../../assets/images/Navbar/linkedin.svg';

export const Footer = () => {
    // Original Hacked Text Effect: https://codepen.io/Hyperplexed/full/rNrJgrd
    const hackedRef = useRef(null);
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let interval = null;
        const hacked = hackedRef.current;
        if (!hacked) return;

        const onMouseOver = event => {  
            let iteration = 0;  
            clearInterval(interval);
            interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)]
                })
                .join("");
                if (iteration >= event.target.dataset.value.length) { 
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 40);
        };

        hacked.addEventListener("mouseover", onMouseOver);

        return () => {
            hacked.removeEventListener("mouseover", onMouseOver);
            clearInterval(interval);
        };
    }, []);
   

    return (
        <motion.footer
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "linear" }}
        >
            <hr></hr>

            <div className='footer-text'>
                <div>
                    <h2>Let&apos;s create together.</h2>
                    <p>Based in California.</p>
                </div>

                <div className='links-container'>
                    <a className='footer-links' href='https://github.com/fjtria' target='_blank' rel='noopener noreferrer' title='GitHub'>
                        <img src={GitHubIcon} alt='GitHub' loading='lazy'></img>
                        <p>@fjtria ↗</p>
                    </a>
                    <a className='footer-links' href='https://www.linkedin.com/in/fjtria/' target='_blank' rel='noopener noreferrer' title='LinkedIn'>
                        <img src={LinkedInIcon} alt='LinkedIn' loading='lazy'></img>
                        <p>@fjtria ↗</p>
                    </a>
                </div>
            </div>
            
            <h6 ref={hackedRef} data-value='@FJTRIA'>@FJTRIA</h6>
        </motion.footer>
    );
}