import logo from '../../assets/images/Logo.svg';
const Header = () => {
    return (
        <div id="header">
            <div className="header">
                <img className="logo" src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Header;