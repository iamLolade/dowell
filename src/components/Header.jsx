import Avatar from "./Avatar";
import avatar from "../public/lady.png"

const Header = () => {
    return (
        <div className="header">
            <h2>Dashboard</h2>
            <Avatar image={avatar} />
        </div>
    )
}

export default Header;