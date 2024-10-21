/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useGetNewsQuery } from "../redux/features/news/newsApi";

const HomePage = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data: articles, error, isLoading } = useGetNewsQuery({});

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-4 border-b border-gray-300">
          <Link className="flex items-center gap-2" to="#">
            <NewsOpenIcon className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-semibold text-gray-800">NewsHub</span>
          </Link>
          <nav className="flex gap-6">
            <Link className="text-lg font-medium text-gray-700 hover:text-gray-900" to="/">
              Home
            </Link>
            <Link className="text-lg font-medium text-gray-700 hover:text-gray-900" to="/news-filter">
              News Page
            </Link>
            <Link className="text-lg font-medium text-gray-700 hover:text-gray-900" to="/login">
              Login
            </Link>
            <Link className="text-lg font-medium text-gray-700 hover:text-gray-900" to="/register">
              Register
            </Link>
            {user && (
              <Link
                className="text-lg font-medium text-gray-700 hover:text-gray-900"
                to={`/${(user as any)?.role}/dashboard`}
              >
                Dashboard
              </Link>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow py-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest News</h2>

          {isLoading && <p className="text-center text-lg">Loading articles...</p>}
          {error && <p className="text-center text-red-500">Error fetching articles.</p>}
          {articles && articles.length === 0 && <p className="text-center text-lg">No articles available.</p>}

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            {articles?.map((article: any) => (
              <li
                key={article.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-700 mb-4">{article.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.source}</span>
                    <Link
                      to={article.url}
                      target="_blank"
                      className="text-sm text-green-500 hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center border-t border-gray-300">
          <p className="text-sm text-gray-600">© 2024 NewsHub. All rights reserved.</p>
          <nav className="flex justify-center gap-6 mt-4">
            <Link className="text-sm text-gray-600 hover:text-gray-900" to="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-600 hover:text-gray-900" to="#">
              Privacy Policy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

function NewsOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

export default HomePage;
