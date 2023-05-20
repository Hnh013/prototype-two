import '../styles/header.css';

import world from '../world.svg';

export const HeaderComponent = () => {
    return (
        <header>
            <div className="header-container bg-smoke">
                <div className='py-lg px-sm'>
                    <div>
                        <div className=''>
                            <div className='d-flex jc-c ai-c ta-c'>
                                <img className='img-world' src={world} alt={"world"} />
                            </div>
                        </div>
                        <div className='f-2x f-w-700 ta-c'>
                            Country State City API
                        </div>
                        <div className='f-15x f-w-600 ta-c'>
                            Documentation Website
                        </div>

                        <div className='f-11x f-w-600 ta-c py-md'>
                            Get dummy/fake JSON Countries , States and Cities data to use as placeholder in development or in prototype testing.
                        </div>
                    </div>
                    <div className='py-sm d-flex gap-1 jc-c ai-c' >


                        <button className='btn bdr-rad-md btn-metal f-w-600'>
                            View On Github <span className='px-xs'></span>
                            <a href="https://www.google.com" className=''><i className="fa fa-github"></i></a>
                        </button>
                        <button className='btn bdr-rad-md btn-rainy f-w-600'>
                            Read The Docs <span className='px-xs'></span>
                            <a href="https://www.google.com" className=''><i className="fa fa-book"></i></a>
                        </button>

                    </div>



                </div>
            </div>
        </header >
    );
};
