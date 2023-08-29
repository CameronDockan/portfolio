// e stands for experience
import {useRef, useEffect, useState} from 'react'

const Experience = () => {

    const eRef = useRef();
    const [visibilityPercentage, setVP] = useState(0);
    const [TIC, setTIC] = useState(false);

    let eOptions = {
        threshold: [.1,.2,.3,.4,.5,.6,.7,.8,.9,1],
    }

    // console.log(TIC, visibilityPercentage)

    useEffect(() => {
        const eObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
                setVP(Math.floor(entry.intersectionRatio * 100))
        }, eOptions)

        eObserver.observe(eRef.current)
    }, [])

    useEffect(() => {
        if (visibilityPercentage > 10) {
            setTIC(true)
        }
    }, [visibilityPercentage])


    return (
        <>
            <section ref={eRef} className={TIC ? "e_section counter_section visible" : "e_section counter_section invisible"}>
                <div className="e_title_container">
                    <h1 className="e_title">Experience</h1>
                    <div className="e_title_line"></div>
                </div>
                <div className="commissioned_proj_container">
                    <div className="commissioned_proj_div">
                        <p className="proj_type_p">Commisioned Project</p>
                        <h1>Crossfaded Hair Studio Website</h1>
                        <br />
                        <p className="project_description">
                            Professional business website, with 4 custom HTML5 Canvas Animations,
                            custom virtual scroll button widget (found on the merchandice page), video content, etc.
                        </p>
                        <br />
                        <br />
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Canvas API</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience