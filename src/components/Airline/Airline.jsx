import { Card } from "react-bootstrap";

const Airline = (props) => {
    let logoUrl = `https://kayak.com/${props.airline.logoURL}`
    return (
        <Card className='AirlineRow justify-content-center'
        >
            <div>
                <img className="airline-img" id="airlineImage" src={logoUrl} alt="airlineImage" />
            </div>
            <div className="airLine-Detail">
                <span className="airline-Name">{props.airline.name}</span>
                <span className="airline-allianceName">{props.airline.alliance}</span>
                <span className="airline-phone">{props.airline.phone}</span>
                <span className="airline-website">{props.airline.site}</span>

            </div>
        </Card>
    )
}

export default Airline;