/* eslint-disable @typescript-eslint/no-explicit-any */
// NewsList.tsx
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useGetNewsQuery } from "../../redux/features/news/newsApi";

const NewsList = () => {
    const { search, category, source, sortBy } = useSelector((state: RootState) => state.news);
    const { data, error, isLoading } = useGetNewsQuery({ search, category, source, sortBy });

    console.log("API response:", data);
    const articles = Array.isArray(data) ? data : [];

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin h-10 w-10 border-4 border-t-4 border-green-500 border-gray-200 rounded-full"></div>
            </div>
        );
    }

    if (error) return <p className="text-red-500 text-center">Error loading articles.</p>;
    if (articles.length === 0) return <p className="text-center">No articles found.</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Latest News</h1>
            <div className="news-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article: any) => (
                    <div key={article.id || article.title} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                        {article.image_url && (
                            <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                        )}
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200">
                                {article.title || "No title available"}
                            </h2>
                            <p className="text-gray-600 mt-2">{article.description || "No description available"}</p>
                            {article.url && (
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-green-500 hover:text-green-700 font-semibold border-b-2 border-transparent hover:border-green-500 transition-colors duration-200"
                                >
                                    Read more
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsList;
