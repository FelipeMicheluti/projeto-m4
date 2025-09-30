import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="flex gap-4 p-4 border-b">
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/funcionalidade">Funcionalidade</Link>
        </nav>
    )
}