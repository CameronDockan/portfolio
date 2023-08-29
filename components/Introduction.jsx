import { useState, useEffect } from "react"

const Introduction = () => {


    const [greetingIA, setGIA] = useState();
    const [nameIA, setNIA] = useState();
    const [whatIDoShortIA, setWIDSIA] = useState();
    const [whatIDoLongIA, setWIDLIA] = useState();
    const [bestProjIA, setBPIA] = useState();
    // intro
    useEffect(() => {
        setGIA(false);
        setNIA(false);
        setWIDSIA(false);
        setWIDLIA(false);
        setBPIA(false);

        setTimeout(() => {
            setGIA(true);
            setNIA(true);
            setWIDSIA(true);
            setWIDLIA(true);
            setBPIA(true);
        }, 3500)
    }, [])

    return (
        <>
        <section className="intro_section">
            <div className="intro_container">
                <div className={greetingIA ? "greeting visible" : "greeting invisible"}>
                    <p>Hi, my name is</p>
                </div>
                <div className={nameIA ? "name visible" : "name invisible"}>
                    <p>Cameron Dockan.</p>
                </div>
                <div className={whatIDoShortIA ? "what_i_do_short visible" : "what_i_do_short invisible"}>
                    <p>I build things for the web.</p>
                </div>
                <div>
                    <p className={whatIDoLongIA ? "what_i_do_long visible" : "what_i_do_long invisible"}>
                        I’m a software engineer specializing in 
                        building (and occasionally designing)
                        exceptional digital experiences. 
                        Currently, I’m focused on building accessible, 
                        applications using <span>Javascript</span>
                    </p>
                </div>
                <div className={bestProjIA ? "link_to_best_proj_container visible" : "link_to_best_proj_container invisible"}>
                    <button className="best_proj_btn">Check out my game!</button>
                </div>
            </div>

        </section>
        </>
    )
}

export default Introduction