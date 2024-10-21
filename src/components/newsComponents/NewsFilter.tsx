import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, setSortBy } from "../../redux/features/news/newsSlice";

const NewsFilter = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortByState] = useState("latest"); // Add state for sorting

    const handleSearch = () => {
        dispatch(setSearch(searchTerm));
        dispatch(setSortBy(sortBy)); // Dispatch sorting value to Redux store
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter News Articles</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-full"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="sortBy" className="block mb-2 text-gray-800">Sort by:</label>
                <select
                    id="sortBy"
                    value={sortBy}
                    onChange={(e) => setSortByState(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-full"
                >
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>

            <button
                onClick={handleSearch}
                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors duration-200 w-full"
            >
                Search
            </button>
        </div>
    );
};

export default NewsFilter;
