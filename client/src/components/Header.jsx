import logo from '../assets/veglogo.svg';
const Header = () => {
    return(
        <div className="flex mt-6">
           <img src={logo} alt="" height={10} width={100}/> 
        </div>
    )
}

export default Header;