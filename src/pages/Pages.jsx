import React, { useState, useEffect } from 'react';
import Blog from '../components/Blog';
import BlogCard from '../components/BlogCard';
import axios from 'axios';

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side";

const Pages = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(url);
        setMeals(data.meals);
        console.log(data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };
    
    fetchBlog();
  }, []);

  return (
    <div style={{
      background:"#f9f9f7",
    }}>
      <div className='container'>
      <Blog/>
      <div className='flex j-between wrap' style={{ gap: "24px", marginTop: "72px" }}>
        {meals.map((meal) => (
          <BlogCard key={meal.idMeal} title={meal.strMeal} bgImg={meal.strMealThumb} />
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Pages;
