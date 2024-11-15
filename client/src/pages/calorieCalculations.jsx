export default function calculateCaloriesBurned(sets, weight) {
    // Adjust the formula based on your specific needs and user preferences
    const METs = sets * 3; // Example: METs based on intensity (1-10)
    const caloriesPerMinute = METs * (weight / 2.20462) / 200;
    const totalCalories = caloriesPerMinute * sets * 12;
    return Math.round(totalCalories);
  }