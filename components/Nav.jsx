import { useState } from "react"

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive)
        console.log(isActive)
    };

    return (
        <>
        <header>
            <nav className="main_nav">
                <div className="logo_container">
                    <svg id="logo_filled" width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 0L44.5458 9.41276L49.3732 30.563L35.8471 47.5242H14.1529L0.626802 30.563L5.45421 9.41276L25 0Z" fill="#BEA5A9"/>
                    </svg>
                    
                    <svg  id="logo_stroked" width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.32198 10.1048L25 1.10992L43.678 10.1048L48.2911 30.316L35.3655 46.5242H14.6345L1.70889 30.316L6.32198 10.1048Z" fill="#0A192F" stroke="#BEA5A9" strokeWidth="2"/>
                        <path d="M24.2523 23.5H22.9312C22.8531 23.12 22.7164 22.7862 22.5211 22.4986C22.3293 22.2109 22.0949 21.9695 21.818 21.7741C21.5445 21.5753 21.2409 21.4261 20.9071 21.3267C20.5733 21.2273 20.2253 21.1776 19.8631 21.1776C19.2025 21.1776 18.6042 21.3445 18.068 21.6783C17.5353 22.0121 17.1109 22.5039 16.7949 23.1538C16.4824 23.8036 16.3261 24.6009 16.3261 25.5455C16.3261 26.4901 16.4824 27.2873 16.7949 27.9371C17.1109 28.587 17.5353 29.0788 18.068 29.4126C18.6042 29.7464 19.2025 29.9134 19.8631 29.9134C20.2253 29.9134 20.5733 29.8636 20.9071 29.7642C21.2409 29.6648 21.5445 29.5174 21.818 29.3221C22.0949 29.1232 22.3293 28.88 22.5211 28.5923C22.7164 28.3011 22.8531 27.9673 22.9312 27.5909H24.2523C24.1528 28.1484 23.9717 28.6474 23.7089 29.0877C23.4462 29.5281 23.1195 29.9027 22.7288 30.2116C22.3382 30.517 21.8996 30.7496 21.4131 30.9094C20.9302 31.0692 20.4135 31.1491 19.8631 31.1491C18.9327 31.1491 18.1052 30.9219 17.3808 30.4673C16.6564 30.0128 16.0864 29.3665 15.6709 28.5284C15.2555 27.6903 15.0477 26.696 15.0477 25.5455C15.0477 24.3949 15.2555 23.4006 15.6709 22.5625C16.0864 21.7244 16.6564 21.0781 17.3808 20.6236C18.1052 20.169 18.9327 19.9418 19.8631 19.9418C20.4135 19.9418 20.9302 20.0217 21.4131 20.1815C21.8996 20.3413 22.3382 20.5756 22.7288 20.8846C23.1195 21.19 23.4462 21.5629 23.7089 22.0032C23.9717 22.44 24.1528 22.9389 24.2523 23.5ZM29.7534 31H26.3869V20.0909H29.9026C30.9608 20.0909 31.8663 20.3093 32.6192 20.7461C33.372 21.1793 33.9491 21.8026 34.3504 22.6158C34.7516 23.4254 34.9523 24.3949 34.9523 25.5241C34.9523 26.6605 34.7499 27.6388 34.345 28.4592C33.9402 29.2759 33.3507 29.9045 32.5766 30.3448C31.8024 30.7816 30.8614 31 29.7534 31ZM27.708 29.8281H29.6682C30.5702 29.8281 31.3177 29.6541 31.9107 29.3061C32.5038 28.9581 32.9459 28.4627 33.2371 27.82C33.5283 27.1772 33.6739 26.4119 33.6739 25.5241C33.6739 24.6435 33.5301 23.8853 33.2424 23.2496C32.9548 22.6104 32.5251 22.1204 31.9533 21.7795C31.3816 21.435 30.6696 21.2628 29.8173 21.2628H27.708V29.8281Z" fill="#E3F0FF"/>
                    </svg>
                </div>

                <button 
                className="burger_btn" 
                onClick={toggleClass}
                >
                    <div className={isActive? "line top active": "line top inactive"}></div>
                    <div className={isActive? "line middle active": "line middle inactive"}></div>
                    <div className={isActive? "line bottom active": "line bottom inactive"}></div>
                    <div className={isActive? "circle active": "circle inactive"}></div>
                </button>

                <ol className="nav_ol">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>

                    <div className="resume_div_container">
                        <div className="resume_fill_div">
                        </div>
                        <button className="resume_btn"><a href="#">Resume</a></button>
                    </div>
                </ol>
            </nav>

            <nav className={isActive?"collapsible_nav opened":"collapsible_nav closed"}>
                <ul>
                    <li>
                        <div>01.</div>
                        <a href="#">About</a>
                        </li>
                    <li>
                        <div>02.</div>
                        <a href="#">Experience</a>
                        </li>
                    <li>
                        <div>03.</div>
                        <a href="#">Work</a>
                        </li>
                    <li>
                        <div>04.</div>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <div className="resume_div_container_alt">
                            <div className="resume_fill_div_alt"></div>
                            <button className="resume_btn_alt">
                                <a href="#">Resume</a>
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>


        </>
    )
}

export default Nav