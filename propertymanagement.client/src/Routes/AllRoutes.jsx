import Login from "../Authentication/Login"


const PublicRoutes = [
    {
        path: "/login", component: <Login/>
    }
]

const PrivateRoutes = [
    {
        path:"/dashboard", component:''
    }
]