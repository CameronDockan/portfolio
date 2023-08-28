// p stand for projects
const Projects = () => {
    return (
        <>
            <section className="p_section counter_section">
                <div className="p_title_container">
                    <h1 className="p_title">Projects</h1>
                    <div className="p_title_line"></div>
                </div>


                <ul className="projects_ul">
                <li className="project_container">
                    <div className="p_icon_container">
                        <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 38H42.5C44.7091 38 46.5 36.2091 46.5 34V10.5C46.5 8.29086 44.7091 6.5 42.5 6.5H20.7695C19.6425 6.5 18.5678 6.02459 17.8097 5.19069L15.1903 2.30931C14.4322 1.47541 13.3575 1 12.2305 1H5.5C3.29086 1 1.5 2.79086 1.5 5V34C1.5 36.2091 3.29086 38 5.5 38Z" stroke="#BEA5A9" strokeWidth="2"/>
                        </svg>
                        <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="none">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0">
                            </g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                                <rect width="48" height="48" fill="white" fillOpacity="0.01">
                                </rect> 
                                <path d="M29.3444 30.4767C31.7481 29.9771 33.9292 29.1109 35.6247 27.8393C38.5202 25.6677 40 22.3137 40 19C40 16.6754 39.1187 14.5051 37.5929 12.6669C36.7427 11.6426 39.2295 4.00001 37.02 5.02931C34.8105 6.05861 31.5708 8.33691 29.8726 7.8341C28.0545 7.29577 26.0733 7.00001 24 7.00001C22.1992 7.00001 20.4679 7.22313 18.8526 7.63452C16.5046 8.23249 14.2591 6.00001 12 5.02931C9.74086 4.05861 10.9736 11.9633 10.3026 12.7946C8.84119 14.6052 8 16.7289 8 19C8 22.3137 9.79086 25.6677 12.6863 27.8393C14.6151 29.2858 17.034 30.2077 19.7401 30.6621" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M19.7402 30.662C18.5817 31.9372 18.0024 33.148 18.0024 34.2946C18.0024 35.4411 18.0024 38.3465 18.0024 43.0108" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M29.3443 30.4767C30.4421 31.9175 30.991 33.2112 30.991 34.3577C30.991 35.5043 30.991 38.3886 30.991 43.0108" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M6 31.2156C6.89887 31.3255 7.56554 31.7388 8 32.4555C8.65169 33.5304 11.0742 37.5181 13.8251 37.5181C15.6591 37.5181 17.0515 37.5181 18.0024 37.5181" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round">
                                </path> 
                            </g>
                        </svg>
                    </div>
                    <br />
                    <h1 className="project_name">SHREDDEPOT</h1>
                    <br />
                    <p className="project_description">
                        Mock e-commerce website with a shopping cart, persisted state, and weather API integration.
                    </p>
                    <br />
                    <ul className="tech_ul">
                        <li>React</li>
                        <li>Redux</li>
                        <li>NextJS</li>

                    </ul>
                </li>
                <li className="project_container">
                    <div className="p_icon_container">
                        <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 38H42.5C44.7091 38 46.5 36.2091 46.5 34V10.5C46.5 8.29086 44.7091 6.5 42.5 6.5H20.7695C19.6425 6.5 18.5678 6.02459 17.8097 5.19069L15.1903 2.30931C14.4322 1.47541 13.3575 1 12.2305 1H5.5C3.29086 1 1.5 2.79086 1.5 5V34C1.5 36.2091 3.29086 38 5.5 38Z" stroke="#BEA5A9" strokeWidth="2"/>
                        </svg>
                        <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="none">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0">
                            </g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                                <rect width="48" height="48" fill="white" fillOpacity="0.01">
                                </rect> 
                                <path d="M29.3444 30.4767C31.7481 29.9771 33.9292 29.1109 35.6247 27.8393C38.5202 25.6677 40 22.3137 40 19C40 16.6754 39.1187 14.5051 37.5929 12.6669C36.7427 11.6426 39.2295 4.00001 37.02 5.02931C34.8105 6.05861 31.5708 8.33691 29.8726 7.8341C28.0545 7.29577 26.0733 7.00001 24 7.00001C22.1992 7.00001 20.4679 7.22313 18.8526 7.63452C16.5046 8.23249 14.2591 6.00001 12 5.02931C9.74086 4.05861 10.9736 11.9633 10.3026 12.7946C8.84119 14.6052 8 16.7289 8 19C8 22.3137 9.79086 25.6677 12.6863 27.8393C14.6151 29.2858 17.034 30.2077 19.7401 30.6621" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M19.7402 30.662C18.5817 31.9372 18.0024 33.148 18.0024 34.2946C18.0024 35.4411 18.0024 38.3465 18.0024 43.0108" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M29.3443 30.4767C30.4421 31.9175 30.991 33.2112 30.991 34.3577C30.991 35.5043 30.991 38.3886 30.991 43.0108" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M6 31.2156C6.89887 31.3255 7.56554 31.7388 8 32.4555C8.65169 33.5304 11.0742 37.5181 13.8251 37.5181C15.6591 37.5181 17.0515 37.5181 18.0024 37.5181" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round">
                                </path> 
                            </g>
                        </svg>
                    </div>
                    <br />
                    <h1 className="project_name">URL Saver (Chrome Extension)</h1>
                    <br />
                    <p className="project_description">
                        A chrome extension that allows users to save the current tab's URL to a document which displays that URL as a hyperlink inside of an unordered list.
                    </p>
                    <br />
                    <ul className="tech_ul">
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>Tabs API</li>

                    </ul>
                </li>
                <li className="project_container">
                    <div className="p_icon_container">
                        <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 38H42.5C44.7091 38 46.5 36.2091 46.5 34V10.5C46.5 8.29086 44.7091 6.5 42.5 6.5H20.7695C19.6425 6.5 18.5678 6.02459 17.8097 5.19069L15.1903 2.30931C14.4322 1.47541 13.3575 1 12.2305 1H5.5C3.29086 1 1.5 2.79086 1.5 5V34C1.5 36.2091 3.29086 38 5.5 38Z" stroke="#BEA5A9" strokeWidth="2"/>
                        </svg>
                        <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="none">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0">
                            </g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                                <rect width="48" height="48" fill="white" fillOpacity="0.01">
                                </rect> 
                                <path d="M29.3444 30.4767C31.7481 29.9771 33.9292 29.1109 35.6247 27.8393C38.5202 25.6677 40 22.3137 40 19C40 16.6754 39.1187 14.5051 37.5929 12.6669C36.7427 11.6426 39.2295 4.00001 37.02 5.02931C34.8105 6.05861 31.5708 8.33691 29.8726 7.8341C28.0545 7.29577 26.0733 7.00001 24 7.00001C22.1992 7.00001 20.4679 7.22313 18.8526 7.63452C16.5046 8.23249 14.2591 6.00001 12 5.02931C9.74086 4.05861 10.9736 11.9633 10.3026 12.7946C8.84119 14.6052 8 16.7289 8 19C8 22.3137 9.79086 25.6677 12.6863 27.8393C14.6151 29.2858 17.034 30.2077 19.7401 30.6621" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M19.7402 30.662C18.5817 31.9372 18.0024 33.148 18.0024 34.2946C18.0024 35.4411 18.0024 38.3465 18.0024 43.0108" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M29.3443 30.4767C30.4421 31.9175 30.991 33.2112 30.991 34.3577C30.991 35.5043 30.991 38.3886 30.991 43.0108" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M6 31.2156C6.89887 31.3255 7.56554 31.7388 8 32.4555C8.65169 33.5304 11.0742 37.5181 13.8251 37.5181C15.6591 37.5181 17.0515 37.5181 18.0024 37.5181" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round">
                                </path> 
                            </g>
                        </svg>
                    </div>
                    <br />
                    <h1 className="project_name">Meri Bon</h1>
                    <br />
                    <p className="project_description">
                        Mock e-commerce website with a shopping cart, persisted state, and weather API integration.
                    </p>
                    <br />
                    <ul className="tech_ul">
                        <li>React</li>
                        <li>NextJS</li>
                    </ul>
                </li>
                <li className="project_container">
                    <div className="p_icon_container">
                        <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 38H42.5C44.7091 38 46.5 36.2091 46.5 34V10.5C46.5 8.29086 44.7091 6.5 42.5 6.5H20.7695C19.6425 6.5 18.5678 6.02459 17.8097 5.19069L15.1903 2.30931C14.4322 1.47541 13.3575 1 12.2305 1H5.5C3.29086 1 1.5 2.79086 1.5 5V34C1.5 36.2091 3.29086 38 5.5 38Z" stroke="#BEA5A9" strokeWidth="2"/>
                        </svg>
                        <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="none">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0">
                            </g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                                <rect width="48" height="48" fill="white" fillOpacity="0.01">
                                </rect> 
                                <path d="M29.3444 30.4767C31.7481 29.9771 33.9292 29.1109 35.6247 27.8393C38.5202 25.6677 40 22.3137 40 19C40 16.6754 39.1187 14.5051 37.5929 12.6669C36.7427 11.6426 39.2295 4.00001 37.02 5.02931C34.8105 6.05861 31.5708 8.33691 29.8726 7.8341C28.0545 7.29577 26.0733 7.00001 24 7.00001C22.1992 7.00001 20.4679 7.22313 18.8526 7.63452C16.5046 8.23249 14.2591 6.00001 12 5.02931C9.74086 4.05861 10.9736 11.9633 10.3026 12.7946C8.84119 14.6052 8 16.7289 8 19C8 22.3137 9.79086 25.6677 12.6863 27.8393C14.6151 29.2858 17.034 30.2077 19.7401 30.6621" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M19.7402 30.662C18.5817 31.9372 18.0024 33.148 18.0024 34.2946C18.0024 35.4411 18.0024 38.3465 18.0024 43.0108" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M29.3443 30.4767C30.4421 31.9175 30.991 33.2112 30.991 34.3577C30.991 35.5043 30.991 38.3886 30.991 43.0108" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round"></path> 
                                <path d="M6 31.2156C6.89887 31.3255 7.56554 31.7388 8 32.4555C8.65169 33.5304 11.0742 37.5181 13.8251 37.5181C15.6591 37.5181 17.0515 37.5181 18.0024 37.5181" stroke="#e3f0ff" strokeWidth="4" strokeLinecap="round">
                                </path> 
                            </g>
                        </svg>
                    </div>
                    <br />
                    <h1 className="project_name">San Miguel</h1>
                    <br />
                    <p className="project_description">
                        HTML5 Topdown Video Game
                    </p>
                    <br />
                    <ul className="tech_ul">
                        <li>JavaScript</li>
                        <li>Canvas API</li>
                    </ul>
                </li>


                </ul>

            </section>
        </>
    )
}

export default Projects