import { createBrowserRouter } from 'react-router';
import App from './App';
import Home from './pages/Home';
import Persons from './pages/Persons';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/persons',
                element: <Persons />,
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
]);

export default router;