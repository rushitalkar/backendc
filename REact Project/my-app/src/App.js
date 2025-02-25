import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import {Home} from './pages/home';
import {Auth} from './pages/auth';
import {CreateRecipe} from './pages/create-recipe';
import {SaveRecipe} from './pages/saved-recipe';
import Layout from './layout';
function App() {
  let router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout />}>
        <Route path= ""   element={<Home />} />
        <Route path='auth' element={<Auth />} />
        <Route path='createreci' element={<CreateRecipe />} />
        <Route path='savedrecipe' element={<SaveRecipe />} />
    </Route>
  ))
  return (
     <>
        <navbar/>
        <RouterProvider router={router} />

     </>
  );
}

export default App;
