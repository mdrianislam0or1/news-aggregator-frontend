import CategoryList from './CategoryList';
import NewsFilter from './NewsFilter';
import NewsList from './NewsList';

const NewsPage = () => {
    return (
        <div className=" px-4 mx-auto">
            <div className="grid grid-cols-12 gap-2">
                <div className=" sm:order-first md:order-first lg:order-first col-span-12 md:col-span-3">
                    <NewsFilter />
                </div>

                <div className="col-span-12 md:col-span-6">
                    <NewsList />
                </div>

                <div className="order-first md:order-last lg:order-last col-span-12 md:col-span-3">
                    <CategoryList />
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
