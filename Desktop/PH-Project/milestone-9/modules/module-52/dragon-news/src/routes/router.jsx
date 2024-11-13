const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>this is Homepage</h1>
    },
    {
        path: "/news",
        element: <h1>this is News sectioiin</h1>
    },
    {
        path: "/auth",
        element: <h1>this is Login page</h1>
    },
])

export default router;