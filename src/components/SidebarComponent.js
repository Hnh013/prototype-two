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
                            <div className="px-xs gap-1 d-flex fd-col txt-metal-dark">
                                <div className="f-15x f-w-600">Docs</div>
                                <div className="f-11x f-w-600">Subtitle</div>
                            </div>
                            <div className="drawer-content-sm">
                                <div className="drawer-list">
                                    <a href="https://www.google.com" className="drawer-link drawer-list-item f-w-500 txt-metal-dark">
                                        <span className="drawer-icon material-symbols-outlined">book</span>
                                        All Countries
                                    </a>
                                    <a href="https://www.google.com" className="drawer-link drawer-list-item f-w-500 txt-metal-dark">
                                        <span className="drawer-icon material-symbols-outlined">book</span>
                                        Country Details
                                    </a>
                                    <a href="https://www.google.com" className="drawer-link drawer-list-item f-w-500 txt-metal-dark">
                                        <span className="drawer-icon material-symbols-outlined">book</span>
                                        States By Country
                                    </a>
                                    <a href="https://www.google.com" className="drawer-link drawer-list-item f-w-500 txt-metal-dark">
                                        <span className="drawer-icon material-symbols-outlined">book</span>
                                        State Details
                                    </a>
                                    <a href="https://www.google.com" className="drawer-link drawer-list-item f-w-500 txt-metal-dark">
                                        <span className="drawer-icon material-symbols-outlined">book</span>
                                        City by State and Country
                                    </a>
                                    <a href="https://www.google.com" className="drawer-link drawer-list-item f-w-500 txt-metal-dark">
                                        <span className="drawer-icon material-symbols-outlined">book</span>
                                        City By Country
                                    </a>
                                    <a href="https://www.google.com" className="drawer-link drawer-list-item f-w-500 txt-metal-dark">
                                        <span className="drawer-icon material-symbols-outlined">book</span>
                                        City Details
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
