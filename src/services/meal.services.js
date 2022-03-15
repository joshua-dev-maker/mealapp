import meal from "../models/meal.model"
import sampleData from "../utils/sampleData"

const mealServices = {
    fetchAllMeals() {
        return sampleData.meals.map((meal)=>{
            const newMeal = new meal();
            newMeal.Id = meal.id;
            newMeal.name = meal.name;
            newMeal.size = meal.size;
            newMeal.quantity = meal.quantity;
        })
    },
    createMeal(meal){
        const mealLength = sampleData.meal.length;
        const lastId = sampleData.meal[mealLength - 1].id;
        const newId = lastId + 1;
        meal.id = newId;
        sampleData.meals.push(meal);
        return meal;
    },
    getAMeal(id) {
        const meal = sampleData.meal.filter(meal => meal.id == id);
        return meal || {};
    }
};

export default mealServices;

