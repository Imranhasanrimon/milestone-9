import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <h1>Main Layout</h1>
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