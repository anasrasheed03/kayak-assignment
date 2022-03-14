import { useState, useEffect } from "react";

const Filter = (props) => {
    const [filteredAlliance, setFilteredAlliance] = useState([])

    const handleOnChange = (e) => {
        let selectedAlliance = e.target.value;
        let selectedAllianceList = filteredAlliance.filter(
            (item) => item !== selectedAlliance
        );
        e.target.checked && selectedAllianceList.push(selectedAlliance)
        setFilteredAlliance(selectedAllianceList)
    }

    useEffect(() => {
        props.filterHandler(filteredAlliance)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteredAlliance])

    return (
        <>
            <h1 className="main-heading">Airlines</h1>
            <h4 className="main-subheading">Filter by Airlines</h4>
            <div className="filters">
                {props.filters.map(filter => (
                    <>
                        <input type="checkbox" id={filter.value} name={filter.label} value={filter.value} onChange={handleOnChange} /><label className="">{filter.label}</label>
                    </>
                ))}

            </div>
        </>
    )
}

export default Filter;