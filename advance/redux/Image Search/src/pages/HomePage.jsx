import SearchBar from "../components/SearchBar"
import ResultGrid from "../components/ResultGrid"
import Tabs from "../components/Tabs"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {

    const { query } = useSelector((store) => store.search);

    console.log(query);

    return (
        <div>
            <SearchBar />

            {query != '' ?
                <div>
                    <Tabs />
                    <ResultGrid />
                </div> : ''}
        </div>
    )
}

export default HomePage
