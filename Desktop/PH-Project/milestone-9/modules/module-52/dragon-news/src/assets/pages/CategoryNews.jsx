import { useLoaderData } from "react-router-dom";
import NewsCard from "../../components/NewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    return (
        <div>
            <h3 className="font-semibold mb-3">Dragon News</h3>
            <p className="text-gray-500 font-semibold">{news.length} news found</p>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;