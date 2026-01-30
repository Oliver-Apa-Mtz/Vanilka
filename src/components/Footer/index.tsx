import Bodas from '../../assets/img/logo-bodas.png';
import Face from '../../assets/img/icon-fb.svg';
import Insta from '../../assets/img/icon-ig.svg';

const Footer = () => {


	return (
		<footer className="bg-[#EB71C7] text-white py-6">
			<div className="max-w-[560px] mx-auto px-4 text-center">
				<div className="flex justify-center gap-6 mb-4">
					<a href="#" className="hover:opacity-80">
						<img src={Face} alt="Facebook" />
					</a>
					<a href="#" className="hover:opacity-80">
						<img src={Insta} alt="Instagram" />
					</a>
					<a href="#" className="hover:opacity-80">
						<img src={Bodas} alt="Bodas" className='h-[40px]' />
					</a>
				</div>
				<div className="flex justify-center gap-10">
					<p className='text-[12px] font-light uppercase'>© 2026 <b className='font-bold'>Vanilka</b></p>
					<p className='text-[12px] font-light uppercase'>Aviso de privacidad</p>
					<p className='text-[12px] font-light uppercase'>By <b className='font-bold'>ERREDESIGN</b></p>
				</div>
			</div>
		</footer>
	)
}

export default Footer