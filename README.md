OVERVIEW
This is a React-based web application that allows users to create their personalized Advent Calendar for the holiday season. Users can explore various Christmas-themed activities, movies, books, and write down their own ideas,  save their favorites, and then distribute them in a calendar through differnt dates with the help of with drag-and-drop functionality. The app features a festive design, friendly typography, soft pastel colors, including a snowfall animation and interactive navigation.


FEATURES

UX:
Personalized Advent Calendar
Users can curate their list of Christmas movies, books, activities("Advent Ideas" component), and submitted own ideas ("Custom Thoughts" component).

Saved Items Tracker
Tracks the total number of saved items and displays a badge in the navigation bar. It's interactive: as soon as user removes the item from the list, the counter gets also updated.

Drag-and-Drop Advent Calendar
When the items are chosen and saved, users can drag items into calendar squares, rearrange them, or remove them as needed.

Interactive Navigation
Easy navigation between different sections of the app, such as books, movies, activities, "more" and calender itself.

UI:
Dynamic Typography and Styling
Festive styling for nice holiday experience

Snowfall Effect
Toggleable snowfall animation to enhance the holiday spirit.


DEPENDENCIES

npm install react react-dom
npm install react-router-dom (to navigate through the pages)
npm install styled-components (for styling components)
npm install react-icons, react-icons/fa (icons in navigation)
npm install react-snowfall (for the snowfall effect)
npm install react-hook-form (for the "custom thoughts" component)
npm install @testing-library/react (for tests)


FILE STRUCTURE

1. components/functional_components/
consists of functional components such as:

AdventIdeas - as "Activities" in Navigation in Header.
ChristmasMovies - as "Movies" in Navigation in Header.
ChristmasBooks -  as "Books" in Navigation in Header.
CustomThoughts - as "More" in Navigation in Header, as consumer can write / suggest "more" things he wants to do in the advent time.
SavedItems - as Calendar item in Navigation in Header.

2. components/effects_components/
consists of components with animations like snowfall and custom typography effects at start page.

3. components/styling_components/
Reusable styled components for global styles of lists, buttons, colors and typography.

SOURCES

APIs:
BOOKS: 
https://openlibrary.org/dev/docs/api/search

MOVIES:
https://developer.themoviedb.org/docs/search-and-query-for-details
https://developer.themoviedb.org/docs/authentication-application
https://developer.themoviedb.org/docs/image-basics

https://medium.com/@biplavmazumdar5/async-await-with-try-and-catch-get-api-8df3a9d25a7b


ICONS:
https://react-icons.github.io/react-icons/search/#q=FaSnowflake
https://react-icons.github.io/react-icons/search/#q=FaSun
https://react-icons.github.io/react-icons/search/#q=faHome
https://react-icons.github.io/react-icons/search/#q=faCalendarAlt

REACT HOOK FORM:
https://react-hook-form.com/get-started

DRAG and DROP:
https://www.youtube.com/watch?v=4AHot187Lj0 as basics in js

CHAT GPT:
Snowfall effect with React
React Fragment as each letter animation in React
Drag and drop functionality in React


TESTING:
https://stackoverflow.com/questions/74317260/react-testing-library-show-error-because-of-axios

