import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/news",
        element: <h1>this is News sectioiin</h1>
    },
    {
        path: "/auth",
        element: <h1>this is Login page</h1>
    },
    {
        path: "*",
        element: <h1>Error</h1>
    },
], {
    future: {
        v7_startTransition: true,
        v7_skipActionErrorRevalidation: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
    },
})

export default router;