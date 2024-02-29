import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Contact from "./components/Contact"
import RegistrationForm from "./components/Registration"
import SwaggerDocs from "./components/SwaggerDocs"
import SwaggerEditorComponent from "./components/SwaggerEditorComponent"

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="about" Component={About}></Route>
                <Route path="/contact" Component={Contact}></Route>
                <Route path="/registration" Component={RegistrationForm}></Route>
                <Route path="/home" Component={Home}></Route>
                <Route path="/swaggerui" Component={SwaggerEditorComponent}></Route>
            </Routes>
        </div>
    )
}

export default AppRouter;