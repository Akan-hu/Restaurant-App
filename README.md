# # Tadka Food - React Native App
# Overview
Tadka Food is a React Native app that showcases popular Indian restaurants and their popular dishes. 
The app provides an intuitive interface for users to explore different restaurants, view their menus, and add dishes to their cart. The backend is powered by Sanity CMS, providing a flexible and robust content management solution.

# Features
Popular Restaurants: View a list of popular Indian restaurants.

Popular Dishes: Explore popular dishes from each restaurant.

Cart Management: Add and manage dishes in your cart using Redux Toolkit.

Animations: Enhanced user experience with Lottie animations.

Google Maps Integration: Locate restaurants on Google Maps.

# Technologies Used
React Native CLI
Sanity CMS
Redux Toolkit
Lottie Animations
Google Maps

# Usage
Home Screen: Browse through a list of popular Indian restaurants.

Restaurant Screen: View details and popular dishes of a selected restaurant.

Cart Screen: Manage your selected dishes in the cart and proceed to checkout.

• Components
RestaurantCard: Displays information about a restaurant.

DishItem: Displays information about a dish, with an option to add to the cart.

Cart: Manages the state of cart items using Redux Toolkit.

# Backend Setup
The backend is managed using Sanity CMS. Ensure you have the correct queries set up to fetch restaurant and dish data.

Example Sanity query for fetching restaurants:

groq query

*[_type == "restaurant"]{
  _id,
  name,
  address,
  ...
}
.

<img width="340" alt="Screenshot 1946-03-03 at 8 45 39 PM" src="https://github.com/Akan-hu/Restaurant-App/assets/114865006/4b5c4e1b-2c4a-4bd6-8335-53d7177866c0">

<img width="340" alt="Screenshot 1946-02-28 at 11 37 10 AM" src="https://github.com/Akan-hu/Restaurant-App/assets/114865006/fcf13fd1-88bb-48ea-900a-1bb824982d6d">

<img width="340" alt="Screenshot 1946-02-28 at 11 37 22 AM" src="https://github.com/Akan-hu/Restaurant-App/assets/114865006/92b45605-0394-4401-a2c9-4a0049c6e087">


<img width="340" alt="Screenshot 1946-03-03 at 8 41 58 PM" src="https://github.com/Akan-hu/Restaurant-App/assets/114865006/a6b67d61-b400-4eec-92df-a15ea55c5b3a">


