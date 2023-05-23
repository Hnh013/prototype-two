import React, { useState } from "react";

const DataComponent = (props) => {
    const [initialLength, setInitialLength] = useState(5);

    const manipulateList = (show) => {
        switch (show) {
            case 'full':
                setInitialLength(props.dataValuesArray.length);
                break;
            case 'initial':
                setInitialLength(5);
                break;
            case 'more':
                (initialLength + 10 < props.dataValuesArray.length) ? setInitialLength(initialLength + 10) : setInitialLength(props.dataValuesArray.length);
                break;
            default:
                setInitialLength(5);
                break;
        }
    }

    return (
        (props.dataValuesArray && props.dataValuesArray.length) ?
            (<div className='bg-rainy px-xs py-xs d-flex fd-col gap-1 bdr-rad-sm'>
                {props.dataValuesArray.map((x, index) =>
                    (index < initialLength) ?
                        (<div className='bg-smoke bdr-rad-sm py-xs px-xs f-w-600 d-flex ai-c jc-sb' key={x.id}>
                            {x.name && <div>{x.name.length > 20 ? `${x.name.slice(0, 25)}...` : x.name}</div>}
                            <div className='d-flex ai-c jc-c'>
                                <span onClick={() => props.fetchLocations(x.iso2)} className="material-symbols-outlined txt-metal">captive_portal</span>
                            </div>
                        </div>) : ('')
                )}

                {(initialLength > 5) &&
                    <>
                        <div className='bg-smoke bdr-rad-sm py-xs px-xs f-w-600 d-flex fd-col ai-c jc-c' onClick={() => manipulateList('initial')}>
                            <div className='ta-c f-w-600'>Show Less</div>
                            <div className='d-flex ai-c jc-c'>
                                <span className="material-symbols-outlined">keyboard_double_arrow_up</span>
                            </div>
                        </div>
                    </>
                }
                {(initialLength < props.dataValuesArray.length) && (initialLength >= props.dataValuesArray.length - 10) &&
                    <>
                        <div className='bg-smoke bdr-rad-sm py-xs px-xs f-w-600 d-flex fd-col ai-c jc-c' onClick={() => manipulateList('full')}>
                            <div className='ta-c f-w-600'>Show More</div>
                            <div className='d-flex ai-c jc-c'>
                                <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
                            </div>
                        </div>
                    </>
                }
                {(initialLength < props.dataValuesArray.length - 10) &&
                    <>
                        <div className='bg-smoke bdr-rad-sm py-xs px-xs f-w-600 d-flex fd-col ai-c jc-c' onClick={() => manipulateList('more')}>
                            <div className='ta-c f-w-600'>Show 10 More</div>
                            <div className='d-flex ai-c jc-c'>
                                <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
                            </div>
                        </div>
                    </>
                }

            </div>) :
            (<div className='bg-rainy px-xs py-xs d-flex fd-col gap-1'>
                <div className='bg-smoke bdr-rad-sm py-xs px-xs f-w-600'>No Cities</div>
            </div>)
    );
};

export default DataComponent;