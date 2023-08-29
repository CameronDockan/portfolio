// am short for about me
import {useRef, useEffect, useState} from 'react'


const AboutMe = () => {
    const amRef = useRef();
    const [visibilityPercentage, setVP] = useState(0);
    // TIC stands for thresholdIsCrossed
    const [TIC, setTIC] = useState(false);

    let amOptions = {
        threshold: [.1,.2,.3,.4,.5,.6,.7,.8,.9,1],
    }

    useEffect(() => {
        const amObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
                setVP(Math.floor(entry.intersectionRatio * 100))
        }, amOptions)

        amObserver.observe(amRef.current)

    }, [])

    useEffect(() => {
        // only 'if' statement and not 'if else' because 
        //we want section class to become true and stay true 
        //so that when the user scrolls back up the page, the section remains visible.
        if (visibilityPercentage > 10) {
            setTIC(true)
        }
    }, [visibilityPercentage])



    return (
        <>
            <section ref={amRef} className={TIC ? "am_section counter_section visible" : "am_section counter_section invisible"}>
                <div className="am_title_container">
                    <h1 className="am_title">About Me</h1><span className="am_title_line"></span>
                </div>
                
                <div className="am_changing_flex_container">
                    <div className="am_text">
                        <p>
                            Hello! My name is Brittany and I 
                            enjoy creating things that live on the internet. 
                            My interest in web development started back in 
                            2012 when I decided to try editing custom Tumblr 
                            themes — turns out hacking together a custom reblog 
                            button taught me a lot about HTML & CSS!
                        </p>
                        <p>
                        Fast-forward to today, and I’ve had the privilege of 
                        working at <a href="3">an advertising agency, a start-up, a huge corporation</a>
                        , and <a href="">a student-led design studio</a>. My main focus these days is building accessible, 
                        inclusive products and digital experiences at <a href="">Upstatement</a> for a variety of clients.
                        </p>
                        <p>I also recently <a href="">launched a course </a> that covers everything you need to build a 
                        web app with the Spotify API using Node & React.</p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                        <ul className="technologies_ul">
                            <li>
                                <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.25 21.8971L8.74997 33.1554C5.74997 34.8875 1.99997 32.7224 1.99997 29.2583V6.74167C1.99997 3.27757 5.74997 1.1125 8.74997 2.84456L28.25 14.1029C31.25 15.8349 31.25 20.1651 28.25 21.8971Z" fill="#0A192F" stroke="#BEA5A9" strokeWidth="3"/>
                                </svg>
                                <p>HTML</p>
                            </li>
                            <li>
                                <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.25 21.8971L8.74997 33.1554C5.74997 34.8875 1.99997 32.7224 1.99997 29.2583V6.74167C1.99997 3.27757 5.74997 1.1125 8.74997 2.84456L28.25 14.1029C31.25 15.8349 31.25 20.1651 28.25 21.8971Z" fill="#0A192F" stroke="#BEA5A9" strokeWidth="3"/>
                                </svg>
                                <p>CSS</p>
                            </li>
                            <li>
                                <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.25 21.8971L8.74997 33.1554C5.74997 34.8875 1.99997 32.7224 1.99997 29.2583V6.74167C1.99997 3.27757 5.74997 1.1125 8.74997 2.84456L28.25 14.1029C31.25 15.8349 31.25 20.1651 28.25 21.8971Z" fill="#0A192F" stroke="#BEA5A9" strokeWidth="3"/>
                                </svg>
                                <p>JavaScript (ES6+)</p>
                            </li>
                            <li>
                            <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.25 21.8971L8.74997 33.1554C5.74997 34.8875 1.99997 32.7224 1.99997 29.2583V6.74167C1.99997 3.27757 5.74997 1.1125 8.74997 2.84456L28.25 14.1029C31.25 15.8349 31.25 20.1651 28.25 21.8971Z" fill="#0A192F" stroke="#BEA5A9" strokeWidth="3"/>
                            </svg>
                                <p>React</p>
                            </li>
                            <li>
                                <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.25 21.8971L8.74997 33.1554C5.74997 34.8875 1.99997 32.7224 1.99997 29.2583V6.74167C1.99997 3.27757 5.74997 1.1125 8.74997 2.84456L28.25 14.1029C31.25 15.8349 31.25 20.1651 28.25 21.8971Z" fill="#0A192F" stroke="#BEA5A9" strokeWidth="3"/>
                                </svg>
                                <p>Redux</p>
                            </li>
                        </ul>
                    </div>
                    <div className="am_img_container">
                        <div className="am_img_as_div_bg">
                            <div className="am_img_overlay"></div>
                        </div>
                        {/* <img className="am_img" src="../src/assets/images/portfolio_pic.JPG" alt="" /> */}
                        <div className="am_img_frame"></div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default AboutMe