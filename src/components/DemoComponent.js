import { useState } from 'react';
import { allCountries } from '../sampleData/countryData';
import axios from 'axios';
import DataComponent from './DataComponent';


export const DemoComponent = () => {


    const [geoData, setGeoData] = useState({ data: { loading: true, countryData: [], stateData: [], cityData: [], isoCountry: '', isoState: '' }, inputs: { country: '', city: '', state: '' } });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setGeoData({ ...geoData, inputs: { ...geoData.inputs, [name]: value } });
        filterResults(name, value);
    }

    const filterResults = (name, value) => {
        let namevalue = value.toLowerCase();
        switch (name) {
            case 'country':
                if (namevalue.length > 0) {
                    let filteredCountries = [...filteredData.country].filter(country => country.name.toLowerCase().includes(namevalue));
                    setFilteredData({ ...filteredData, country: [...filteredCountries] })
                } else {
                    setFilteredData({ ...filteredData, country: [...geoData.data.countryData] })
                }
                break;
            case 'state':
                if (namevalue.length > 0) {
                    let filteredStates = [...filteredData.state].filter(state => state.name.toLowerCase().includes(namevalue));
                    setFilteredData({ ...filteredData, state: [...filteredStates] })
                } else {
                    setFilteredData({ ...filteredData, state: [...geoData.data.stateData] })
                }
                break;
            case 'city':
                if (namevalue.length > 0) {
                    let filteredCities = [...filteredData.city].filter(city => city.name.toLowerCase().includes(namevalue));
                    setFilteredData({ ...filteredData, city: [...filteredCities] })
                } else {
                    setFilteredData({ ...filteredData, city: [...geoData.data.cityData] })
                }
                break;
            default:
                setFilteredData({ ...filteredData });
                break;
        }
    }

    const [filteredData, setFilteredData] = useState({ country: [], state: [], city: [] });

    const fetchStates = (countryISOCode) => {
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
                setFilteredData({ ...filteredData, state: responseData })
                setGeoData({ ...geoData, data: { ...geoData.data, loading: false, isoCountry: countryISOCode, stateData: responseData, cityData: [] } });
            })
            .catch(function (error) {
                setGeoData({ ...geoData, data: { ...geoData.data, loading: false, stateData: [] } });
            });
    };

    const fetchCities = (stateISOCode) => {
        var config = {
            method: 'get',
            url: `https://api.countrystatecity.in/v1/countries/${geoData.data.isoCountry}/states/${stateISOCode}/cities`,
            headers: {
                'X-CSCAPI-KEY': 'SHpyMnNLakRodnlTaHVvQ09ZekxsN2dSYW9rNU9uY3h5M1hiZ2cyOQ=='
            }
        };
        axios(config)
            .then(function (response) {
                const responseData = response.data;
                setFilteredData({ ...filteredData, city: responseData })
                setGeoData({ ...geoData, data: { ...geoData.data, loading: false, isoState: stateISOCode, cityData: responseData } });
            })
            .catch(function (error) {
                setGeoData({ ...geoData, data: { ...geoData.data, loading: false, cityData: [] } });
            });
    };

    const fetchNone = (sometinh) => {
        console.log(sometinh);
    }

    const fetchNations = () => {
        setFilteredData({ ...filteredData, country: [...allCountries] })
        setGeoData({ ...geoData, data: { ...geoData.data, loading: false, countryData: [...allCountries] } });
    }

    return (
        <main>
            <div className="px-xs py-xs">
                <div className='px-xs py-xs d-flex jc-c ai-c ta-c'>
                    <button className='btn btn-over bdr-rad-lg' onClick={fetchNations}>Fetch Countries</button>
                </div>

                <div className="d-flex gap-1 fd-row jc-c ai-fs" style={{ 'flexWrap': 'wrap' }}>
                    <div className='d-flex fd-col'>
                        <div className="bdr-rad-sm mx-auto px-xs py-xs bg-smoke bdr-rad-md" style={{ 'border': '2px solid var(--metal-dark)' }}>
                            <div className='px-xs py-xs'>
                                <p className='ta-c f-w-700 f-11x'>Countries</p>
                                <hr />
                                <div className='d-flex fd-row gap-1'>
                                    <input onInput={handleInputs} style={{ 'border': '2px solid var(--metal-dark)', 'flexShrink': '1' }} value={geoData.inputs.country} name="country"
                                        className="w-100 py-xs px-xs bdr-rad-sm bdr-rad-md" type="text" placeholder="Default input" aria-label="default input example" />
                                </div>
                            </div>
                            {geoData.data.countryData && <DataComponent dataValuesArray={filteredData.country} fetchLocations={fetchStates} />}
                        </div>
                    </div>

                    <div className='d-flex fd-col'>
                        <div className="bdr-rad-sm mx-auto px-xs py-xs bg-smoke bdr-rad-md" style={{ 'border': '2px solid var(--metal-dark)' }}>
                            <div className='px-xs py-xs'>
                                <p className='ta-c f-w-700 f-11x'>States</p>
                                <hr />
                                <div className='d-flex fd-row gap-1'>
                                    <input onInput={handleInputs} style={{ 'border': '2px solid var(--metal-dark)', 'flexShrink': '1' }} value={geoData.inputs.state} name="state"
                                        className="w-100 py-xs px-xs bdr-rad-sm bdr-rad-md" type="text" placeholder="Default input" aria-label="default input example" />
                                </div>
                            </div>
                            {geoData.data.stateData && <DataComponent dataValuesArray={filteredData.state} fetchLocations={fetchCities} />}
                        </div>
                    </div>

                    <div className='d-flex fd-col'>
                        <div className="bdr-rad-sm mx-auto px-xs py-xs bg-smoke bdr-rad-md" style={{ 'border': '2px solid var(--metal-dark)' }}>
                            <div className='px-xs py-xs'>
                                <p className='ta-c f-w-700 f-11x'>City</p>
                                <hr />
                                <div className='d-flex fd-row gap-1'>
                                    <input onInput={handleInputs} style={{ 'border': '2px solid var(--metal-dark)', 'flexShrink': '1' }}
                                        className="w-100 py-xs px-xs bdr-rad-sm bdr-rad-md" type="text" placeholder="Default input" value={geoData.inputs.city} name="city" aria-label="default input example" />
                                </div>
                            </div>
                            {geoData.data.cityData && <DataComponent dataValuesArray={filteredData.city} fetchLocations={fetchNone} />}
                        </div>
                    </div>
                </div>
            </div >

        </main >
    );
};
