import './Header.scss';

function Header() {
    return (
        <div className="Header">
            <div className="img-container">
                <img src="/logo.png" alt="" />
            </div>
            <div className="title">
                TaskMate
            </div>
        </div>
    );
}

export default Header;
