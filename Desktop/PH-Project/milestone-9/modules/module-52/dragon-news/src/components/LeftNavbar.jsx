import { useEffect, useState } from "react";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(' https://openapi.programming-hero.com/api/news/categories')
            .then(response => response.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h3>All Categories (8)</h3>
            <div>
                {
                    categories.map(category => <button key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;