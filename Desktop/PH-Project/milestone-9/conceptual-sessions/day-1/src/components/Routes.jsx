import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    },
    {
        path: "/",
        element: <h1>Home page</h1>
    },
    {
        path: "/about",
        element: <h1>About page</h1>
    }
],
    {
        future: {
            v7_startTransition: true,
            v7_skipActionErrorRevalidation: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
        },
    })

export default routes;