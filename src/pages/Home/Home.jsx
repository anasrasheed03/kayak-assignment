import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import AirlineList from '../../components/AirlineList/AirlineList';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter'
import fetchJsonp from "fetch-jsonp";
import './Home.css'

const Home = () => {
    const [airlineList, setAirlineList] = useState([])
    const api = 'https://www.kayak.com/h/mobileapis/directory/airlines/homework';
    const [loading, setLoading] = useState(false)
    const [filteredAllianceList, setFilteredAllianceList] = useState([])
    useEffect(() => {
        loadData(api)
    }, [])

    const airlineFilters = [
        {
            value: "OW",
            label: "Oneworld"
        },
        {
            value: "ST",
            label: "Sky Team"
        },
        {
            value: "SA",
            label: "Star Alliance"
        }
    ];


    const filterHandler = (filterList) => {
        if (filterList.length > 0) {
            let filteredList = airlineList.filter(airline => {
                return filterList.includes(airline.alliance)
            })
            setFilteredAllianceList(filteredList)
        } else {
            setFilteredAllianceList([])

        }
    }

    const loadData = (api) => {
        if (api) {
            setLoading(true)
            fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
                jsonpCallback: 'jsonp'
            })
                .then(res => res.json())
                .then(res => {
                    setAirlineList(res)
                }).catch(error => {
                    setAirlineList([]);
                    console.error('Error:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return (
        <div className="App">
            <Header />
            <div className="main">
                <Filter filters={airlineFilters} filterHandler={filterHandler} />
            </div>
            <div className="airLineGridContainer">
                {!loading && airlineList?.length > 0 ?
                    <AirlineList airlineList={filteredAllianceList.length > 0 ? filteredAllianceList : airlineList} setLoading={setLoading} loadData={loadData} />
                    :
                    <>
                        {!loading && <div className="norecord">
                            <p>No records found.</p>
                        </div>}
                    </>
                }
            </div>
            {loading && <Loader />}

        </div>
    )

}
export default Home;