import { useState, useEffect } from 'react';
import './header.css';
import Logo from '../../assets/img/logo.png';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className="header w-screen fixed transition-all duration-300"
			style={{
				height: isScrolled ? '100px' : 'auto',
				backgroundColor: isScrolled ? 'white' : 'rgba(255, 255, 255, 0.4)'
			}}
		>
			<div className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
				}`}>
				<img
					src={Logo}
					alt="Vanilka"
					className={`mx-auto transition-all duration-300 ${isScrolled ? 'h-[60px]' : 'h-[120px]'
						}`}
				/>
			</div>
		</header>
	)
}

export default Header