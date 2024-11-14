import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(' https://openapi.programming-hero.com/api/news/categories')
            .then(response => response.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h3 className="font-semibold">All Categories ({categories.length})</h3>
            <div className="flex flex-col gap-3 mt-4">
                {
                    categories.map(category => <NavLink className="btn" key={category.category_id} to={`category/${category.category_id}`}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;