import logo from "../../assets/icon.png"

function Header() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="GOT logo" style={{ width: "50px"}} />
                    <a className="navbar-brand" href="#">Game of Thrones</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;