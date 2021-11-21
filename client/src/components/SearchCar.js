import React, { useRef, useState } from "react";

function SearchCar() { 
    const baseURL = "http://localhost:8080/api/sellcar";
    const filterURL = "http://localhost:8080/api/car?make&model=&trim=&year=";

    const get_id = useRef(null);
    const get_make = useRef(null);
    const get_model = useRef(null);
    const get_trim = useRef(null);
    const get_year = useRef(null);
    

    const [getCar, setGetCar] = useState(null);

    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }

    async function getAllCar() {
        try {
            const res = await fetch(`${baseURL}`);

            if(!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }

            const data = await res.json();

            const result = {
                status: res.status + "-" + res.statusText,
                headers: {
                    "Content-Type": res.headers.get("Content-Type"),
                    "Content-Length": res.headers.get("Content-Length"),
                },
                length: res.headers.get("Content-Length"),
                data: data,
            };

            setGetCar(formatResponse(result));
        } catch (err) {
            setGetCar(err.message);
        }
    }

    // async function getCarById() {
    //     const id = get_id.current.value;

    //     if(id) {
    //         try {
    //             const res = await fetch(`${baseURL}/${id}`);

    //             if(!res.ok) {
    //                 const message = `An error has occured: ${res.status} - ${res.statusText}`;
    //                 throw new Error(message);
    //             }

    //             const data = await res.json();

    //             const result = {
    //                 data: data,
    //                 status: res.status,
    //                 statusText: res.statusText,
    //                 headers: {
    //                     "Content-Type": res.headers.get("Content-Type"),
    //                     "Content-Length": res.headers.get("Content-Length"),
    //                 },
    //             };

    //             setGetCar(formatResponse(result));
    //         }   catch (err) {
    //             setGetCar(err.message);
    //         }
    //     }
    // }

    async function getCarByMake() {
        const make = get_make.current.value;
        const model = get_model.current.value;
        const trim = get_trim.current.value;
        const year = get_year.current.value;

        if(make) {
            try {
                let url = new URL(`${filterURL}`);
                const params = {make: make, model: model, trim: trim, year: year};
                url.search = new URLSearchParams(params);

                const res = await fetch(url);

                if(!res.ok) {
                    const message = `An error has occured: ${res.status} - ${res.statusText}`;
                    throw new Error(message);
                }

                const data = await res.json();

                const result = {
                    status: res.status + "-" + res.statusText,
                    headers: {
                        "Content-Type": res.headers.get("Content-Type"),
                        "Content-Length": res.headers.get("Content-Length"),
                    },
                    data: data,
                };

                setGetCar(formatResponse(result));
            }   catch(err) {
                setGetCar(err.message);
            }
        }

    }

    const clearGetOutput = () => {
        setGetCar(null);
    }

    return (
        <div className="card">
            <div className="card-header">Sell Car</div>
            <div className="card-body">
                <div className="input-group input-group-sm">
                    {/* <button className="btn btn-sm btn-primary" onClick={getAllCar}>Get All Cars</button>

                    <input type="text" ref={get_id} className="form-control ml-2" placeholder="ID" />
                    <div className="input-group-append">
                        <button className="btn btn-sm btn-primary" onClick={getCarById}>Get by ID</button>
                    </div> */}

                    <input type="text" ref={get_make} className="form-control ml-2" placeholder="Make" />
                    <input type="text" ref={get_model} className="form-control ml-2" placeholder="Model" />
                    <input type="text" ref={get_trim} className="form-control ml-2" placeholder="Trim" />
                    <input type="text" ref={get_year} className="form-control ml-2" placeholder="Year" />
                    <div className="input-group-append">
                        <button className="btn btn-sm btn-primary" onClick={getCarByMake}>Find Car</button>
                    </div>

                    <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>


                </div>

                { getCar && <div className="alert alert-secondary mt-2" role="alert"><pre>{getCar}</pre></div>}
            </div>

            {/* <div>{get_make}</div> */}
        </div>
    );
 }

 export default SearchCar;