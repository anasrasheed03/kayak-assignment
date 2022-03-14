import Airline from '../Airline/Airline'
const AirlineList = (props) => {
  return (
    <>
      {props.airlineList.map((airline, index) => {
        return (
          <div className="gridBox center">
            <Airline key={index} airline={airline} viewDetails={props.viewDetails} />
          </div>
        )
      })
      }
    </>
  )
}

export default AirlineList;