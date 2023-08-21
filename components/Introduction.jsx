const Introduction = () => {
    return (
        <>
        <section className="intro_section">
            <div className="greeting">
                <p>Hi, my name is</p>
            </div>
            <div className="name">
                <p>Cameron Dockan.</p>
            </div>
            <div className="what_i_do_short">
                <p>I build things for the web.</p>
            </div>
            <div>
                <p className="what_i_do_long">
                I’m a software engineer specializing in 
            building (and occasionally designing)
             exceptional digital experiences. 
             Currently, I’m focused on building accessible, 
             applications using <span>Javascript</span>
                </p>
            </div>
            <div className="link_to_best_proj_container">
                <button className="best_proj_btn">Check out my game!</button>
            </div>
        </section>
        </>
    )
}

export default Introduction