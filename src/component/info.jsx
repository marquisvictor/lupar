import { useState } from "react"


function Info() {
    const [data, setData] = useState([])
  return data.length >= 1 ? <MapInfo data={data} /> : <DefaultInfo />
}

function MapInfo () {
    return (
        <div>
            <p>This is map</p>
        </div>
    )
}


function DefaultInfo() {
    return (
        <div className="section-container">
            <div className="section-heading">

                Welcome to this Platform
            </div>
            <div className="section-text">
            <p> This is a tool that you can use to view, query and create your own property reports. More than a mapping tool, it's a gateway to a whole range of planning information.</p>
            <div>
                <b>Search for information</b>
                <p className="intro">The interactive single search bar allows you to search for a range of information simply by entering the information you are looking for. Start by typing at least the first 3 letters of your search. Items you can search for are:</p>
                <ul className="intro-list">
                    <li>Address</li>
                    <li>Lot on Plan</li>
                    <li>SPI</li>
                    <li>Heriage Number</li>
                    <li>Locality</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Info
