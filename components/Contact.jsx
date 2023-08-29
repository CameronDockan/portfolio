// c stands for contact
import {useRef, useEffect, useState} from 'react'


const Contact = () => {

    const cRef = useRef();
    const [visibilityPercentage, setVP] = useState(0);
    const [TIC, setTIC] = useState(false);

    let cOptions = {
        threshold: [.1,.2,.3,.4,.5,.6,.7,.8,.9,1],
    }

    // console.log(TIC, visibilityPercentage)

    useEffect(() => {
        const cObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVP(Math.floor(entry.intersectionRatio * 100))            
        }, cOptions)
        cObserver.observe(cRef.current)
    }, [])

    useEffect(() => {
        if (visibilityPercentage > 10) {
            setTIC(true)
        }
    }, [visibilityPercentage])

    return (
        <>
            <section ref={cRef} className={TIC ? "c_section counter_section visible" : "c_section counter_section invisible"}>
                <div className="c_title_container">
                    <h1 className="c_title">Contact</h1>
                    <div className="c_title_line"></div>
                </div>

                <div className="c_content_container">
                    <h3 className="c_small_title">
                        What's Next?
                    </h3>
                    <h2 className="c_large_title">
                        Get In Touch
                    </h2>
                    <p className="c_main_text">
                    I’m not currently looking for opportunities as a Front-End Developer. 
                    My inbox is always open.
                    </p>
                    <div className="email_btn_container">
                        <div className="email_fill_div"></div>
                        <a className="email_a" href="mailto:cdockan@gmail.com">Say Hello</a>
                    </div> 
                </div>

            </section>
        </>
    )
}

export default Contact