import './header.css';
import Logo from '../../assets/img/logo.png';

const Header = () => {
	return (
		<div className="header w-screen fixed">
			<div className="py-6">
				<img src={Logo} alt="Vanilka" className="mx-auto h-[120px]" />
			</div>
		</div>
	)
}

export default Header