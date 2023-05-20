import React from 'react';
import '../styles/sidebar.css';
import '../styles/navbar.css';
export const NavbarComponent = (props) => {
    return (

        <nav className="custom-nav py-xs gap-1 bg-smoke">
            <div className="d-flex jc-fs txt-dark ai-c f-15x">
                <div className="px-xs">
                    {props.menuNavbar ? (<div className="d-flex ai-c jc-fs px-xs py-xs menu menu-btn bdr-rad-md" onClick={() => props.handleClickNavbar(!props.menuNavbar)}>
                        <span className="material-symbols-outlined">close</span>
                    </div>) :
                        (<div className="d-flex ai-c jc-fs px-xs py-xs menu menu-btn bdr-rad-md" onClick={() => props.handleClickNavbar(!props.menuNavbar)}>
                            <span className="material-symbols-outlined">menu</span>
                        </div>)}
                </div>
                <div>
                    <div className='brand'>
                        <span className="txt-over ta-l">CSC</span>
                        <span className=" f-w-700 txt-dark ta-l txt-metal">API</span>
                    </div>
                </div>
            </div>

            <div className="d-flex ai-c px-md">
                <div className="tabs-wrapper">
                    <button id="one" className="nav-link">
                        <span className="tab-content">
                            <span className="text-label">
                                Home
                            </span>
                        </span>
                    </button>
                </div>
                <div className="tabs-wrapper">
                    <button id="two" className="nav-link">
                        <span className="tab-content">
                            <span className="text-label">
                                Demo
                            </span>
                        </span>
                    </button>
                </div>
                <div className="tabs-wrapper">
                    <button id="three" className="nav-link">
                        <span className="tab-content">
                            <span className="text-label">
                                Github
                            </span>
                        </span>
                    </button>
                </div>
                <div className="tabs-wrapper">
                    <button id="four" className="nav-link">
                        <span className="tab-content">
                            <span className="text-label">
                                Playground
                            </span>
                        </span>
                    </button>
                </div>
            </div>


        </nav>

    );
};


// {props.menuSidebar && (
//     <button className="btn-menu btn-menu-close" onClick={() => props.handleClickSidebar(!props.menuSidebar)}>
//         <span className="material-symbols-outlined">close</span>
//     </button>
// )}