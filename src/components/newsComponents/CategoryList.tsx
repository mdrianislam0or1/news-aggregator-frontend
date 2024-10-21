import { useDispatch } from "react-redux";
import { setCategory, setSource } from "../../redux/features/news/newsSlice";

const CategoryList = () => {
    const dispatch = useDispatch();

    const categories = [
        "Technology",
        "Business",
        "Sports",
        "Politics",
        "Regional",
        "World",
        "Academia",
        "Recipe",
        "Food",
        "General",
    ];

    const sources = [
        "bbc-news",
        "techcrunch",
        "cnn",
        "bbc-sport",
        "reuters",
        "the-verge",
        "national-geographic",
        "new-york-times",
        "techradar",
        "financial-times",
        "huffington-post",
        "cnbc",
        "axios",
        "bbc-world",
        "guardian-uk",
        "al-jazeera-english",
        "breitbart-news",
        "associated-press",
        "bbc-news-au",
        "britannica",
        "time",
        "independent",
        "the-lrb-rb",
        "the-guardian-uk",
        "bbc-news-live",
        "bbc-entertainment",
        "the-times-of-india",
        "usa-today",
        "al-jazeera-arab",
    ]

    const handleCategoryClick = (category: string) => {
        dispatch(setCategory(category.toLowerCase()));
    };

    const handleSourceClick = (source: string) => {
        dispatch(setSource(source.toLocaleLowerCase()));
    }

    return (
        <>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
                <ul className="space-y-2">
                    {categories.map((category) => (
                        <li key={category}>
                            <button
                                onClick={() => handleCategoryClick(category)}
                                className="block w-full text-left text-green-600 hover:text-green-800 transition-colors duration-200"
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Source</h2>
                <ul className="space-y-2">
                    {sources.map((source) => (
                        <li key={source}>
                            <button
                                onClick={() => handleSourceClick(source)}
                                className="block w-full text-left text-green-600 hover:text-green-800 transition-colors duration-200"
                            >
                                {source}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CategoryList;
