import '../styles/doc.css';

import ExampleComponent from './ExampleComponent';


export const DemoComponent = () => {

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

    return (
        <div className=''>
            <div className=''>

                <article className='px-sm bg-rainy'>
                    <section id="allcountries">
                        <div className='f-2x f-w-700'>
                            Get a list of Countries
                        </div>
                        <div className='d-flex jc-fs ai-c gap-1'>
                            <div>
                                <button className='btn btn-eco bdr-rad-lg'>GET
                                </button>
                            </div>
                            <div>
                                <span className='f-11x f-w-600 ta-c py-md'>https://api.countrystatecity.in/v1/countries</span>
                            </div>
                        </div>

                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Security</div>
                            <table>
                                <tr>
                                    <td>Request Parameters</td><td>No parameters</td>
                                </tr>
                            </table>
                        </div>
                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Response</div>
                            <table>
                                <tr>
                                    <th>Code</th><th>Description</th>
                                </tr>
                                <tr>
                                    <td>200</td><td>Return a list of countries</td>
                                </tr>
                                <tr>
                                    <td>401</td><td>Unauthorized</td>
                                </tr>
                            </table>
                        </div>
                        <div className='' >
                            <ExampleComponent code={jsex} language="javascript" />
                        </div>
                    </section>
                </article>
                <article className='px-sm bg-smoke'>
                    <section id="allcountries">
                        <div className='f-2x f-w-700'>
                            Get a list of Countries
                        </div>
                        <div className='d-flex jc-fs ai-c gap-1'>
                            <div>
                                <button className='btn btn-eco bdr-rad-lg'>GET
                                </button>
                            </div>
                            <div>
                                <span className='f-11x f-w-600 ta-c py-md'>https://api.countrystatecity.in/v1/countries</span>
                            </div>
                        </div>

                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Security</div>
                            <table>
                                <tr>
                                    <td>Request Parameters</td><td>No parameters</td>
                                </tr>
                            </table>
                        </div>
                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Response</div>
                            <table>
                                <tr>
                                    <th>Code</th><th>Description</th>
                                </tr>
                                <tr>
                                    <td>200</td><td>Return a list of countries</td>
                                </tr>
                                <tr>
                                    <td>401</td><td>Unauthorized</td>
                                </tr>
                            </table>
                        </div>
                        <div className='' >
                            <ExampleComponent code={jsex} language="javascript" />
                        </div>
                    </section>
                </article>
                <article className='px-sm bg-rainy'>
                    <section id="allcountries">
                        <div className='f-2x f-w-700'>
                            Get a list of Countries
                        </div>
                        <div className='d-flex jc-fs ai-c gap-1'>
                            <div>
                                <button className='btn btn-eco bdr-rad-lg'>GET
                                </button>
                            </div>
                            <div>
                                <span className='f-11x f-w-600 ta-c py-md'>https://api.countrystatecity.in/v1/countries</span>
                            </div>
                        </div>

                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Security</div>
                            <table>
                                <tr>
                                    <td>Request Parameters</td><td>No parameters</td>
                                </tr>
                            </table>
                        </div>
                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Response</div>
                            <table>
                                <tr>
                                    <th>Code</th><th>Description</th>
                                </tr>
                                <tr>
                                    <td>200</td><td>Return a list of countries</td>
                                </tr>
                                <tr>
                                    <td>401</td><td>Unauthorized</td>
                                </tr>
                            </table>
                        </div>
                        <div className='' >
                            <ExampleComponent code={jsex} language="javascript" />
                        </div>
                    </section>
                </article>
                <article className='px-sm bg-smoke'>
                    <section id="allcountries">
                        <div className='f-2x f-w-700'>
                            Get a list of Countries
                        </div>
                        <div className='d-flex jc-fs ai-c gap-1'>
                            <div>
                                <button className='btn btn-eco bdr-rad-lg'>GET
                                </button>
                            </div>
                            <div>
                                <span className='f-11x f-w-600 ta-c py-md'>https://api.countrystatecity.in/v1/countries</span>
                            </div>
                        </div>

                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Security</div>
                            <table>
                                <tr>
                                    <td>Request Parameters</td><td>No parameters</td>
                                </tr>
                            </table>
                        </div>
                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Response</div>
                            <table>
                                <tr>
                                    <th>Code</th><th>Description</th>
                                </tr>
                                <tr>
                                    <td>200</td><td>Return a list of countries</td>
                                </tr>
                                <tr>
                                    <td>401</td><td>Unauthorized</td>
                                </tr>
                            </table>
                        </div>
                        <div className='' >
                            <ExampleComponent code={jsex} language="javascript" />
                        </div>
                    </section>
                </article>
                <article className='px-sm bg-smoke'>
                    <section id="allcountries">
                        <div className='f-2x f-w-700'>
                            Get a list of Countries
                        </div>
                        <div className='d-flex jc-fs ai-c gap-1'>
                            <div>
                                <button className='btn btn-eco bdr-rad-lg'>GET
                                </button>
                            </div>
                            <div>
                                <span className='f-11x f-w-600 ta-c py-md'>https://api.countrystatecity.in/v1/countries</span>
                            </div>
                        </div>

                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Security</div>
                            <table>
                                <tr>
                                    <td>Request Parameters</td><td>No parameters</td>
                                </tr>
                            </table>
                        </div>
                        <div className='f-w-500'>
                            <div className='f-15x f-w-600'>Response</div>
                            <table>
                                <tr>
                                    <th>Code</th><th>Description</th>
                                </tr>
                                <tr>
                                    <td>200</td><td>Return a list of countries</td>
                                </tr>
                                <tr>
                                    <td>401</td><td>Unauthorized</td>
                                </tr>
                            </table>
                        </div>
                        <div className='' >
                            <ExampleComponent code={jsex} language="javascript" />
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
};
