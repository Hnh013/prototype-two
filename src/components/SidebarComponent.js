import React from 'react';
import '../styles/sidebar.css';

export const SidebarComponent = (props) => {
    return (
        <div>
            <div className="side-menu-div">
                <div className={props.menuSidebar ? `side-nav-open` : `side-nav-close`}>
                    {props.menuSidebar && (
                        <div className="d-flex btn-menu-close menu-btn-dark txt-over ai-c jc-fs px-xs py-xs bdr-rad-md" onClick={() => props.handleClickSidebar(!props.menuSidebar)}>
                            <span className="material-symbols-outlined">close</span>
                        </div>
                    )}
                    <div className='py-lg'>
                        <div className='py-lg'>
                            <div className="px-xs gap-1 d-flex fd-col txt-metal">
                                <div className="f-15x f-w-600">Documentation</div>
                                <div className="f-11x f-w-600"></div>
                            </div>
                            <div className="">
                                <div className="d-flex fd-col gap-1">
                                    <a href="https://www.google.com" className="d-flex ai-c f-w-600 txt-metal-dark">
                                        <span className="txt-metal material-symbols-outlined px-xs">captive_portal</span>
                                        <span className="txt-over">Fetch All Countries</span>
                                    </a>
                                    <a href="https://www.google.com" className="d-flex ai-c f-w-600 txt-metal-dark">
                                        <span className="txt-metal material-symbols-outlined px-xs">captive_portal</span>
                                        <span className="txt-over">Fetch Country Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
