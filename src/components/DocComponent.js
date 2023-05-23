import '../styles/doc.css';

import ExampleComponent from './ExampleComponent';


export const DocComponent = () => {

    const jsex =
        `
    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://api.countrystatecity.in/v1/countries',
        headers: { 'X-CSCAPI-KEY': 'API_KEY' }
        };
        
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
    `;

    const jsex2 =
        `   
    [
        {
          "id": 101,
          "name": "India",
          "iso2": "IN"
        },
        ...
    ]
    `;
    const jsex3 =
        `
    {
        "error'": "Unauthorized. You shouldn't be here."
    }
    `;

    const jsex4 =
        `
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://api.countrystatecity.in/v1/countries/IN',
            headers: {
              'X-CSCAPI-KEY': 'API_KEY'
            }
        };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    `;

    const jsex5 =
        `
        {
            "id": 101,
            "name": "India",
            "iso3": "IND",
            "iso2": "IN",
            "phonecode": "91",
            "capital": "New Delhi",
            "currency": "INR",
            "native": "भारत",
            "emoji": "🇮🇳",
            "emojiU": "U+1F1EE U+1F1F3"
        }
    `;

    const jsex6 =
        `
        {
            "error'": "Unauthorized. You shouldn't be here."
        }
    `;

    const jsex7 =
        `
        {
            "error'": "Country not found."
        }
    `;

    return (
        <div className=''>
            <div className='px-xs'>
                <section id="fetch-countries" className='px-sm py-xs d-flex fd-col gap-1'>
                    <div title="fetch-countries-section-heading px-xs" className=''>
                        <div className='txt-metal f-2x f-w-700'>Fetch All Countries</div>
                    </div>
                    <div title="fetch-countries-section-subheading" className=''>
                        <div className='txt-metal-dark f-w-600 f-15x'>Get a list of all the countries</div>
                    </div>
                    <div title="fetch-countries-section-api-url" className='d-flex ai-c' >
                        <div>
                            <span className='bg-metal-dark bdr-rad-sm txt-smoke f-w-600 px-xs py-xs'>GET</span>
                        </div>
                        <div>
                            <span className='f-w-600 px-xs'>https://api.countrystatecity.in/v1/countries</span>
                        </div>
                    </div>
                    <div title="fetch-countries-content" className='txt-over d-flex fd-col gap-1 py-md'>
                        <div title="fetch-countries-security">
                            <div className='f-w-600 f-11x txt-metal'>Security</div>
                            <div>
                                <div>This api use API KEY as an authentication method.</div>
                                <div>
                                    <table>
                                        <thead><tr><th>WHAT</th><th>:</th><td>API Key</td></tr></thead>
                                        <tbody><tr><th>WHERE</th><th>:</th><td>Header</td></tr></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div title="fetch-countries-request-params">
                            <div className='f-w-600 f-11x txt-metal'>Request Parameters</div>
                            <div>No Parameters</div>
                        </div>
                        <div title="fetch-countries-response">
                            <div className='f-w-600 f-11x txt-metal'>Response</div>
                            <div>
                                <div>This api use API KEY as an authentication method.</div>
                                <div>
                                    <table>
                                        <thead><tr><th>CODE</th><th>&nbsp;</th><th>DESCRIPTION</th></tr></thead>
                                        <tbody>
                                            <tr><th>200</th><th>:</th><td>Return a list of countries</td></tr>
                                            <tr><th>401</th><th>:</th><td>Unauthorized</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div title="fetch-countries-usage-examples">
                            <div className='f-w-600 f-11x txt-metal'>Example Usage</div>
                            <div>
                                <ExampleComponent code={jsex} language="javascript" />
                            </div>
                        </div>
                        <div title="fetch-countries-success-response">
                            <div className='f-w-600 f-11x txt-metal'>Example Success Response</div>
                            <div>
                                <ExampleComponent code={jsex2} language="javascript" />
                            </div>
                        </div>
                        <div title="fetch-countries-failure-response">
                            <div className='f-w-600 f-11x txt-metal'>Example Failure Response</div>
                            <div>
                                <ExampleComponent code={jsex3} language="javascript" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="fetch-country-details" className='px-sm py-xs d-flex fd-col gap-1'>
                    <div title="fetch-country-details-section-heading px-xs" className=''>
                        <div className='txt-metal f-2x f-w-700'>Fetch Country Details</div>
                    </div>
                    <div title="fetch-country-details-section-subheading" className=''>
                        <div className='txt-metal-dark f-w-600 f-15x'>Get Country Details From ISO2 Code</div>
                    </div>
                    <div title="fetch-country-details-section-api-url" className='d-flex ai-c gap-1' style={{ 'flexWrap': 'wrap' }} >
                        <div>
                            <span className='bg-metal-dark bdr-rad-sm txt-smoke f-w-600 px-xs py-xs'>GET</span>
                        </div>
                        <div className='py-xs'>
                            <span className='f-w-600 px-xs py-xs'>https://api.countrystatecity.in/v1/countries/[ciso]</span>
                        </div>
                    </div>
                    <div title="fetch-country-details-content" className='txt-over d-flex fd-col gap-1 py-md'>
                        <div title="fetch-country-details-security">
                            <div className='f-w-600 f-11x txt-metal'>Security</div>
                            <div>
                                <div>This api use API KEY as an authentication method.</div>
                                <div>
                                    <table>
                                        <thead><tr><th>WHAT</th><th>:</th><td>API Key</td></tr></thead>
                                        <tbody><tr><th>WHERE</th><th>:</th><td>Header</td></tr></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div title="fetch-country-details-request-params">
                            <div className='f-w-600 f-11x txt-metal'>Request Parameters</div>
                            <div>
                                <table>
                                    <thead>
                                        <tr><th>Name</th><th>Located in</th><th>Description</th><th>Required</th><th>Type</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>[ciso]</td><td>URL</td><td>ISO2 Code of Country</td><td>Required</td><td>string</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div title="fetch-country-details-response">
                            <div className='f-w-600 f-11x txt-metal'>Response</div>
                            <div>
                                <div>This api use API KEY as an authentication method.</div>
                                <div>
                                    <table>
                                        <thead><tr><th>CODE</th><th>&nbsp;</th><th>DESCRIPTION</th></tr></thead>
                                        <tbody>
                                            <tr><th>200</th><th>:</th><td>Return a list of countries</td></tr>
                                            <tr><th>401</th><th>:</th><td>Unauthorized</td></tr>
                                            <tr><th>404</th><th>:</th><td>Not Found</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div title="fetch-country-details-usage-examples">
                            <div className='f-w-600 f-11x txt-metal'>Example Usage</div>
                            <div>
                                <ExampleComponent code={jsex4} language="javascript" />
                            </div>
                        </div>
                        <div title="fetch-country-details-success-response">
                            <div className='f-w-600 f-11x txt-metal'>Example Success Response</div>
                            <div>
                                <ExampleComponent code={jsex5} language="javascript" />
                            </div>
                        </div>
                        <div title="fetch-country-details-failure-response">
                            <div className='f-w-600 f-11x txt-metal'>Example Failure Response</div>
                            <div>
                                <ExampleComponent code={jsex6} language="javascript" />
                            </div>
                        </div>
                        <div title="fetch-country-details-failure-response">
                            <div className='f-w-600 f-11x txt-metal'>Example Not Found Response</div>
                            <div>
                                <ExampleComponent code={jsex7} language="javascript" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
