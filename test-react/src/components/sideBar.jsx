import { NavLink } from "react-router-dom";

export const SideBar = () => {
    const navLinkClasses = "px-10 py-5 text-2xl text-center hover:bg-[#1E1F25] hover:text-white transition-all duration-300 ease-in-out"
    const navLinkActive = `${navLinkClasses} bg-[#1E1F25] text-white`

    return (
        <nav className="absolute left-0 bg-white flex flex-col rounded-md">
            <NavLink
                to="/counter"
                className={({isActive}) => isActive ? navLinkActive : navLinkClasses}>
                Counter
            </NavLink>
            <NavLink
                to="/tasks"
                className={({isActive}) => isActive ? navLinkActive : navLinkClasses}>
                Tasks
            </NavLink>
            <NavLink
                to="/invert-string"
                className={({isActive}) => isActive ? navLinkActive : navLinkClasses}>
                Invert String
            </NavLink>
        </nav>
    )
}