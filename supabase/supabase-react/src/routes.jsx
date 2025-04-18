import { createBrowserRouter } from 'react-router';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Contact';
// import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
]);

export default router;