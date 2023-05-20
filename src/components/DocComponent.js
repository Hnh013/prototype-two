import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { allCountries } from '../sampleData/countryData';

export const DocComponent = () => {
    const [countryData, setCountryData] = useState({ loading: true, data: [], stateData: [], cityData: [], isoCountry: '', isoState: '' });

    const [inputs, setInputs] = useState({ country: '', city: '', state: '' });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value })
    }

    const [alerts, setAlerts] = useState({ warn: 'alert alert-warning alert-dismissible fade show d-none', danger: 'alert alert-danger alert-dismissible fade show d-none' })

    const hideShowAlert = (type, hide = true) => {
        type === 'warn' ? !hide ? setAlerts({ ...alerts, warn: alerts.warn.split(' ').slice(0, -1).join(' ') }) : setAlerts({ ...alerts, danger: alerts.warn + ' d-none' }) : !hide ? setAlerts({ ...alerts, danger: alerts.warn.split(' ').slice(0, -1).join(' ') }) : setAlerts({ ...alerts, danger: alerts.danger + ' d-none' });
    }

    // const APIcall = () => {

    //     setCountryData({ loading: false, data: [] })
    //     var config = {
    //         method: 'get',
    //         url: 'https://api.countrystatecity.in/v1/countries',
    //         headers: {
    //             'X-CSCAPI-KEY': 'SHpyMnNLakRodnlTaHVvQ09ZekxsN2dSYW9rNU9uY3h5M1hiZ2cyOQ=='
    //         }
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             const responseData = response.data;
    //             setCountryData({ loading: false, data: responseData })
    //         })
    //         .catch(function (error) {
    //             setCountryData({ loading: false, data: [{ "id": "1", "name": "Error" }] })
    //         });
    // };

    const searchGeo = (entity) => {
        if (entity === 'country') {
            let currentcountry = inputs.country.toLowerCase();
            let isoCode = [...countryData.data].find(country => country.name.toLowerCase() === currentcountry);
            isoCode ? APIcallState(isoCode.iso2) : hideShowAlert('warn', false);
        } else {
            let currentstate = inputs.state.toLowerCase();
            let isoCode = [...countryData.stateData].find(state => state.name.toLowerCase() === currentstate);
            isoCode ? APIcallCity(isoCode.iso2) : hideShowAlert('warn', false);

        }
    }

    const APIcallState = (countryISOCode) => {

        setCountryData({ ...countryData })
        var config = {
            method: 'get',
            url: `https://api.countrystatecity.in/v1/countries/${countryISOCode}/states`,
            headers: {
                'X-CSCAPI-KEY': 'SHpyMnNLakRodnlTaHVvQ09ZekxsN2dSYW9rNU9uY3h5M1hiZ2cyOQ=='
            }
        };

        axios(config)
            .then(function (response) {
                const responseData = response.data;
                setCountryData({ ...countryData, loading: false, isoCountry: countryISOCode, stateData: responseData, cityData: [] });
            })
            .catch(function (error) {
                setCountryData({ ...countryData, loading: false, stateData: [] })
                hideShowAlert('danger', false);
            });
    };

    const APIcallCity = (stateISOCode) => {
        console.log(countryData.isoCountry);
        setCountryData({ ...countryData })
        var config = {
            method: 'get',
            url: `https://api.countrystatecity.in/v1/countries/${countryData.isoCountry}/states/${stateISOCode}/cities`,
            headers: {
                'X-CSCAPI-KEY': 'SHpyMnNLakRodnlTaHVvQ09ZekxsN2dSYW9rNU9uY3h5M1hiZ2cyOQ=='
            }
        };

        axios(config)
            .then(function (response) {
                const responseData = response.data;
                setCountryData({ ...countryData, loading: false, cityData: responseData, isoState: stateISOCode })
            })
            .catch(function (error) {
                setCountryData({ ...countryData, loading: false, cityData: [] })
                hideShowAlert('danger', false);
            });
    };

    useEffect(() => {
        setCountryData({ ...countryData, loading: false, data: [...allCountries] });
    }, []);

    return (
        <>
            <div className="container overflow-hidden text-center">
                <div className="gx-2 p-2 bg-light d-flex flex-column flex-md-row justify-content-between">
                    <div className=" flex-shrink-1 p-3">
                        <div className='p-2 border border-dark rounded'>
                            <p>Country</p>
                            <hr />
                            <div className='d-flex'>
                                <input className="form-control" value={inputs.country} name='country' onChange={(e) => handleInputs(e)} type="text" placeholder="Default input" aria-label="default input example" />
                                <button className='btn btn-success btn-sm' onClick={() => searchGeo('country')}><i className="bi bi-search"></i></button></div>
                        </div>
                        {countryData.data.length &&
                            <table className='table table-striped d-none d-md-block'>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countryData.data.map(country => <tr key={country.id}><th scope="row" >{country.iso2}</th><td>{country.name}</td><td><button className='btn btn-sm btn-primary' onClick={() => APIcallState(country.iso2)} ><i className="bi bi-search"></i></button></td></tr>)}
                                </tbody>
                            </table>}
                    </div>
                    <div className=" flex-shrink-1 p-3">
                        <div className='p-2 border border-dark rounded'>
                            <p>State</p>
                            <hr />
                            <div className='d-flex'>
                                <input className="form-control" value={inputs.state} name='state' onChange={(e) => handleInputs(e)} type="text" placeholder="Default input" aria-label="default input example" />
                                <button className='btn btn-success btn-sm' onClick={() => searchGeo('state')}><i className="bi bi-search"></i></button></div>
                        </div>
                        {countryData.stateData && countryData.stateData.length ?
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">State</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countryData.stateData.map(country => <tr key={country.id}><th scope="row">{country.iso2}</th><td>{country.name}</td><td><button className='btn btn-sm btn-primary' onClick={() => APIcallCity(country.iso2)} ><i className="bi bi-search"></i></button></td></tr>)}
                                </tbody>
                            </table> : <div>No Data</div>}
                    </div>
                    <div className="flex-shrink-1 p-3">
                        <div className='p-2 border border-dark rounded'>
                            <p>City</p>
                            <hr />
                            <input className="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                        </div>

                        {countryData.cityData && countryData.cityData.length ?
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countryData.cityData.map(country => <tr key={country.id}><th scope="row">{country.id}</th><td>{country.name}</td></tr>)}
                                </tbody>
                            </table> : <div>No Data</div>}
                    </div>
                </div>
            </div>
        </>
    )

}
