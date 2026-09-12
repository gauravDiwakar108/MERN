import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-6 px-10 bg-(--c2)">
            <Link to='/' className="text-white text-2xl font-[system-ui] font-medium">Media Search</Link>

            <div className="flex justify-between items-center gap-5">
                <Link className="text-base font-medium active:scale-90 bg-(--c4) text-(--c1) rounded px-4 py-2" to="/">Search</Link>
                <Link className="text-base font-medium active:scale-90 bg-(--c4) text-(--c1) rounded px-4 py-2" to="/collection">Collection</Link>
            </div>
        </div>
    )
}

export default Navbar
