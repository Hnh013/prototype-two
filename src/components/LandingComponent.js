import '../styles/doc.css';
import ExampleComponent from "./ExampleComponent";



const jsex = `
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries", 
requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
`;


export const LandingComponent = () => {

    return (
        <div className="">
            <div className="py-md bg-rainy px-sm">
                <div className='f-2x f-w-700 ta-c'>
                    Got tired of Lorem ipsum data?
                </div>
                <div className='f-11x f-w-600 ta-c py-md'>
                    With CSCAPI, what you get is different types of REST Endpoints filled with JSON data which you can use in developing the frontend with your favorite framework and library without worrying about writing a backend.
                </div>
                <div className='py-sm d-flex gap-1 jc-c ai-c' >
                    <button className='btn bdr-rad-md btn-over f-w-600'>
                        Go to Demo <span className='px-xs'></span>
                        <a href="https://www.google.com" className=''><i className="fa fa-github"></i></a>
                    </button>
                    <button className='btn bdr-rad-md btn-metal f-w-600'>
                        Playground <span className='px-xs'></span>
                        <a href="https://www.google.com" className=''><i className="fa fa-book"></i></a>
                    </button>

                </div>
            </div>
            <div className='py-md bg-smoke px-sm'>
                <div className='px-xs py-md'>
                    <div className='txt-metal f-11x f-w-600 py-sm'>
                        Examples
                    </div>
                    <div className='txt-over f-15x f-w-600'>
                        Quick snippets to get started with Country State City API
                    </div>
                </div>
                <div className=''>
                    <ExampleComponent code={jsex} language="javascript" />
                </div>
            </div>
        </div>
    );
};














