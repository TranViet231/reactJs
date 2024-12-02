export default function Header(){
    return <nav className="Header">
        <div className="Header">
            <a className="Header" href="#">Navbar</a>
            <button className="Header" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="Header"></span>
            </button>
            <div className="Header" id="navbarNavAltMarkup">
                <div className="Header">
                    <a className="Header" aria-current="page" href="#">Home</a>
                    <a className="Header" href="#">Features</a>
                    <a className="Header" href="#">Pricing</a>
                    <a className="Header disabled" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </div>
    </nav>
}