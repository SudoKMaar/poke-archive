# Poké Archive

![Poké Archive Logo](./src/assets/PokeArchive.png)

"Unleash the Pokémon Knowledge"

Deployed at: https://pokearchive.netlify.app/

Poké Archive is a web application that allows users to explore and discover information about Pokémon. It provides a comprehensive database of Pokémon, their characteristics, abilities, evolutions, and more. With Poké Archive, users can dive deep into the world of Pokémon and enhance their knowledge and understanding of these beloved creatures.

## Features

- **Search Pokémon**: Users can search for specific Pokémon using the search bar. The application provides real-time search suggestions and displays relevant Pokémon cards based on the user's input.

- **Random Pokémon**: Users can explore a collection of random Pokémon displayed on the home page. These Pokémon are randomly selected from the extensive database.

- **Pokédex**: The application offers a complete Pokédex, containing detailed information about each Pokémon. Users can access a Pokémon's profile, including its type, abilities, stats, and evolution chain.

- **Compare Pokémon**: Users can compare the characteristics of different Pokémon side by side. The comparison feature allows users to analyze and compare various aspects, such as stats, abilities, and types, to understand the differences and similarities between Pokémon.

- **User Collection**: Registered users can create their own Pokémon collection by adding Pokémon to their personal list. They can view, manage, and remove Pokémon from their collection.

- **Authentication**: Poké Archive provides user authentication functionality, allowing users to create accounts, log in, and access their personalized features, such as the user collection.

- **Performance Optimization**: The application incorporates lazy loading techniques to optimize performance. Components and data are loaded dynamically as needed, reducing initial load times and improving the overall user experience.

- **Dynamic Color Change**: The color scheme of the application dynamically changes based on the primary color of the Pokémon being viewed. This feature adds visual appeal and enhances the immersive experience for users.

## Technologies Used

- **React**: The application is built using the React library, providing a robust and efficient user interface.

- **Redux**: Redux is used for state management, ensuring a predictable and centralized state container.

- **React Router**: React Router is used for declarative routing, enabling seamless navigation between different pages of the application.

- **React Toastify**: A library for displaying toast notifications to the user.

- **Axios**: A library for making HTTP requests to retrieve Pokémon data from external APIs.

- **Firebase**: Firebase is used for user authentication and cloud storage. It provides a secure and scalable backend infrastructure for the application.

- **Firebase Authentication**: Provides user authentication functionality, allowing users to register, login, and manage their accounts.

- **Firebase Firestore**: A NoSQL database used to store user information and Pokémon collections.

- **SCSS (Sass)**: A CSS preprocessor that enhances CSS with variables, mixins, nesting, and other features, providing a more maintainable and modular code structure.

- **Lazy Loading**: React's lazy loading feature is utilized to load components and data asynchronously, improving performance by deferring the loading of non-critical resources.

## Getting Started

Follow these steps to run the Poké Archive project locally:

1. Clone the repository: `git clone https://github.com/SudoKMaar/poke-archive.git`
2. Navigate to the project directory: `cd poke-archive`
3. Install dependencies: `yarn install`
4. Set up Firebase configuration:
   - Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Copy the Firebase configuration object (apiKey, authDomain, projectId, etc.) from the Firebase project settings.
   - Replace the placeholder Firebase configuration in `src/utils/firebaseConfig.js` with your own Firebase configuration.
5. Start the development server: `yarn start`
6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Contributing

Contributions to Poké Archive are welcome! If you find a bug or want to add a new feature, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Implement your changes and ensure all tests pass.
4. Commit your changes: `git commit -m "Add feature-name"`
5. Push to the branch: `git push origin feature-name`
6. Open a pull request and provide a detailed description of your changes.

## License

Poké Archive is released under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- Pokémon data is sourced from the [PokéAPI](https://pokeapi.co/).
- This project was created by [Abhishek Kumar](https://www.linkedin.com/in/abhishekkmaar/) and developed as part of his personal project(KMaar Miscellaneous Studio).