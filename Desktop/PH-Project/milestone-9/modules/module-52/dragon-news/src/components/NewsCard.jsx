import { FaEye, FaStar } from 'react-icons/fa';
const NewsCard = (props = {}) => {
    const { singleNews } = props || {};
    return (
        <div className="card bg-base-100 shadow-xl rounded-lg p-4">
            <div className="flex items-center mb-4">
                <img
                    src={singleNews.author.img}
                    alt={singleNews.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <p className="text-sm font-semibold">{singleNews.author.name}</p>
                    <p className="text-xs text-gray-500">{singleNews.author.published_date}</p>
                </div>
            </div>

            <h2 className="card-title text-lg font-bold  hover:underline">
                {singleNews.title}
            </h2>

            <img
                src={singleNews.thumbnail_url}
                alt="News thumbnail"
                className="w-full h-48 md:h-80 object-cover mt-4 rounded-md"
            />

            <p className="text-sm text-gray-600 mt-3">
                {singleNews.details.slice(0, 100)}...
                <span className="text-primary font-semibold cursor-pointer">Read More</span>
            </p>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={`text-yellow-400 ${i < Math.round(singleNews.rating.number) ? 'fill-current' : 'text-gray-300'}`}
                        />
                    ))}
                    <span className="ml-2 text-sm font-semibold text-gray-600">{singleNews.rating.number}</span>
                </div>

                <div className="flex items-center">
                    <FaEye className="text-gray-500 mr-1" />
                    <span className="text-sm font-semibold text-gray-600">{singleNews.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;