# Trips management

It's a trips management solution based on Vue 3

## Getting Started

1. Install dependencies:
   *yarn install*
2. Running the Development Server:
    *yarn serve*
3. Running Cypress Tests:
    *yarn cypress:open*

## Project Structure

1. Modularity and Reusability:

The project is organized into modules (trip-management and components) to ensure a modular and scalable architecture.
The trip module contains features related to trip management, encapsulating related components and functionality.
The /shared directory within trip-management is dedicated to shared components, promoting reusability across the module.

2. Component-Based Structure:

Each feature or module has its own directory containing related components, making it easy to locate and manage specific functionalities.
Generic components like CargoDetails.vue and NotFound.vue are placed in the /components directory for broader usability.

3. Clarity and Readability:

The structure aims to provide clarity and maintainability, making it easy for developers to understand the project organization and locate relevant files.


## Technologies Used

1. Vue.js v3
2. Vuex
3. Vue Router