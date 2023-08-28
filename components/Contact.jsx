// c stands for contact

const Contact = () => {
    return (
        <>
            <section className="c_section counter_section">
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