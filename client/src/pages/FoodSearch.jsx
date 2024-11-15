import React, { useState } from 'react';
import '../styles/FoodSearch.css';

const FoodSearch = () => {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setCalories(null);

    // Example API call using Nutritionix
    const API_KEY = 'YOUR_API_KEY';
    const API_URL = `https://api.nutritionix.com/v1_1/search/${foodItem}?results=0:1&fields=item_name,nf_calories&appId=YOUR_APP_ID&appKey=${API_KEY}`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.hits.length > 0) {
        const foodData = data.hits[0]._source;
        setCalories(foodData.nf_calories);
      } else {
        setError('Food item not found.');
      }
    } catch (err) {
      setError('Error fetching data.');
    }
  };

  return (
    <div className="food-search">
      <h2>Find Calories in Your Food</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          placeholder="Enter food item (e.g., roti)"
        />
        <button type="submit">Search</button>
      </form>
      {calories !== null && <p>Calories: {calories}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FoodSearch;
