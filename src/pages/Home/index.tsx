
import './home.css';
import Layout from '../../components/Layout';

import Background from '../../assets/img/fondo.png';
import Jabon1 from '../../assets/img/jabon-1.png';
import Jabon2 from '../../assets/img/jabon-2.png';
import Jabon3 from '../../assets/img/jabon-3.png';
import Jabon4 from '../../assets/img/jabon-4.png';
import Jabon5 from '../../assets/img/jabon-5.png';
import Sticker from '../../assets/img/sticker.png';
import LogoBoda from '../../assets/img/logo-bodas.png';
import CheckPink from '../../assets/img/check-pink.svg';
import CheckBlue from '../../assets/img/check-blue.svg';
import Check from '../../assets/img/check.svg';



const Home = () => {

	return (
		<Layout>
			<div className="min-h-screen banner-bg pt-[170px]" style={{ backgroundImage: `url(${Background})` }}>

				<section className="text-center py-10 px-4">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-[54px] font-playfair font-bold italic text-terciario mb-6">Arte Mineral en Tu Piel</h1>
						<p className="text-gray max-w-[750px] mx-auto leading-relaxed font-circular">
							Creamos <span className='text-[#EB71C7]'>jabones artesanales hechos a mano en Mazatlán,</span> en pequeños lotes, con ingredientes
							naturales y aromas únicos. Cada pieza es única e irrepetible, inspirados en formas minerales y pensados
							para convertir el cuidado diario en un ritual o regalo especial.
						</p>
					</div>
				</section>

				<section className="px-4 mb-20 relative">
					<div className="max-w-[1240px] mx-auto">
						<div className="bg-principal rounded-[50px] flex justify-between">
							<div className="flex justify-center items-center w-[42%]">
								<div className='w-[400px]'>
									<h2 className="text-[54px] mb-4 text-terciario font-playfair font-bold italic leading-[60px]">
										Edición especial de temporada
									</h2>
									<p className="mb-6 opacity-90">
										Durante todo febrero, contamos con
										presentaciones especiales ideales
										para regalar o compartir.
									</p>
									<button className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors">
										Descubre Vanilka ♡
									</button>
								</div>

							</div>
							<div className="w-[58%]">
								<img src={Jabon1} alt="Gift Box" className="w-full rounded-2xl" />
							</div>
						</div>
					</div>
					<img src={Sticker} alt="" className="absolute bottom-[-80px] left-[38%] w-[265px]" />
				</section>

				<section className="px-4 mb-10">
					<div className="max-w-[1240px] mx-auto text-center rounded-[10px] banner-esencia pt-4 pb-12">
						<h2 className="text-[40px] font-bold text-gray mb-2">Nuestra esencia</h2>
						<p className="text-gray mb-6">
							En <b>Vanilka</b> creemos en el valor de lo artesanal,
							en el tiempo dedicado a cada detalle y en la
							belleza de lo imperfectamente único.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-20 px-10">
							<div className="text-center">
								<div className="w-16 mx-auto">
									<img src={CheckPink} alt="Hechos a mano" />
								</div>
								<h3 className="font-semibold text-principal mb-2 text-[20px]">Hechos a mano</h3>
								<p className="text-gray px-10">
									Cada pieza es única e irrepetible
								</p>
							</div>
							<div className="text-center">
								<div className="w-16 mx-auto">
									<img src={CheckBlue} alt="Ingredientes naturales" />
								</div>
								<h3 className="font-semibold text-secundario mb-2 text-[20px]">Ingredientes naturales</h3>
								<p className="text-gray px-10">
									Aceites vegetales y vitamina E
								</p>
							</div>
							<div className="text-center">
								<div className="w-16 mx-auto">
									<img src={CheckPink} alt="Aromas únicos" />
								</div>
								<h3 className="font-semibold text-principal mb-2 text-[20px]">Aromas únicos</h3>
								<p className="text-gray px-4">
									Inspirados en sensaciones y emociones
								</p>
							</div>
							<div className="text-center">
								<div className="w-16 mx-auto">
									<img src={CheckBlue} alt="Piezas únicas" />
								</div>
								<h3 className="font-semibold text-secundario mb-2 text-[20px]">Piezas únicas</h3>
								<p className="text-gray px-10">
									Colores y vetas que nunca se repiten
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="px-4 mb-10">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-[40px] font-bold text-gray mb-8">Esencias Disponibles</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
							{['Orquídea', 'Manzana Verde', 'Coco', 'Bambú', 'Rosa', 'Frutas Tropicales', 'Vainilla', 'Pepino'].map((essence) => (
								<div key={essence} className="bg-white rounded-[10px] py-3 px-6 shadow-md text-[#EB71C7] font-medium">
									{essence}
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="px-4 mb-16">
					<div className="max-w-6xl mx-auto">
						<div className="flex gap-12 rounded-[50px] justify-between bg-pink">
							<div className="w-[50%]">
								<img src={Jabon2} alt="Soap Collection" className="w-full" />
							</div>
							<div className="w-[50%] flex items-center">
								<div className='w-[400px]'>
									<h2 className="text-[40px] font-bold text-gray mb-6 leading-[40px]">Perfecto para quienes buscan:</h2>
									<ul className="space-y-3">
										<li className="flex items-center gap-3 text-gray">
											<img src={Check} alt="" />
											<span>Regalos especiales con intención</span>
										</li>
										<li className="flex items-center gap-3 text-gray">
											<img src={Check} alt="" />
											<span>Rituales de autocuidado</span>
										</li>
										<li className="flex items-center gap-3 text-gray">
											<img src={Check} alt="" />
											<span>Detalles únicos para eventos</span>
										</li>
										<li className="flex items-center gap-3 text-gray">
											<img src={Check} alt="" />
											<span>Productos artesanales de calidad</span>
										</li>
									</ul>
									<div className="mt-6">
										<img src={LogoBoda} alt="Logo Boda" className="w-[152px]" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="px-4 mb-16">
					<div className="max-w-6xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
							<img src={Jabon3} alt="Product 1" className="w-full h-64 object-cover rounded-2xl" />
							<img src={Jabon4} alt="Product 2" className="w-full h-64 object-cover rounded-2xl" />
							<img src={Jabon5} alt="Product 3" className="w-full h-64 object-cover rounded-2xl" />
						</div>
						<div className="text-center">
							<h2 className="text-[40px] font-bold text-gray mb-6 leading-[40px]">
								Nuestros Productos
							</h2>
							<p className="text-gray mb-8">
								Estas son nuestras presentaciones más populares.
							</p>
						</div>
					</div>
				</section>

				{/* Product Cards */}
				<section className="px-4 mb-16">
					<div className="max-w-6xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white rounded-2xl p-6 shadow-lg">
								<div className="bg-gradient-to-r from-pink-400 to-pink-300 rounded-xl p-4 mb-4">
									<img src="/gift-box-4.jpg" alt="Gift Box 4 jabones" className="w-full rounded-lg" />
								</div>
								<h3 className="font-bold text-lg mb-2">Gift Box - 4 jabones</h3>
								<p className="text-2xl font-bold text-pink-500 mb-4">$399 MXN</p>
								<p className="text-sm text-gray-600 mb-4">
									Incluye empaques especial y tarjeta. Ideal para regalos especiales y para probar diferentes aromas.
								</p>
							</div>
							<div className="bg-white rounded-2xl p-6 shadow-lg">
								<div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl p-4 mb-4">
									<img src="/gift-box-2.jpg" alt="Gift Box 2 jabones" className="w-full rounded-lg" />
								</div>
								<h3 className="font-bold text-lg mb-2">Gift Box - 2 jabones</h3>
								<p className="text-2xl font-bold text-blue-500 mb-4">$449 MXN</p>
								<p className="text-sm text-gray-600 mb-4">
									Incluye empaques especial y tarjeta. Ideal para regalos íntimos y para probar diferentes aromas.
								</p>
							</div>
							<div className="bg-white rounded-2xl p-6 shadow-lg">
								<div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl p-4 mb-4">
									<img src="/individual-soap.jpg" alt="Jabones Individuales" className="w-full rounded-lg" />
								</div>
								<h3 className="font-bold text-lg mb-2">Jabones Individuales</h3>
								<p className="text-2xl font-bold text-purple-500 mb-4">$150 MXN</p>
								<p className="text-sm text-gray-600 mb-4">
									Incluye empaques y etiqueta. Perfecto como detalle especial para cualquier ocasión.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Wholesale Section */}
				<section className="px-4 mb-16">
					<div className="max-w-4xl mx-auto">
						<div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
							<div className="flex-1">
								<img src="/wholesale-soap.jpg" alt="Mayoreo Vanilka" className="w-full rounded-2xl" />
							</div>
							<div className="flex-1 text-white">
								<h2 className="text-3xl font-bold mb-4">🌸 Mayoreo Vanilka</h2>
								<p className="mb-6 opacity-90">Descuentos por volumen!</p>
								<ul className="space-y-2 mb-6">
									<li>• Desde 20 piezas</li>
									<li>• Precios especiales para eventos</li>
									<li>• Empaques personalizados disponibles</li>
								</ul>
								<div className="flex gap-4">
									<span>📅 De 3 a 5 días hábiles (100 pzs)</span>
								</div>
								<div className="flex gap-4 mt-4">
									<span>📅 De 5 a 7 días hábiles (100+ pzs)</span>
								</div>
								<button className="bg-white text-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors mt-6">
									Cotizar mayoreo ♡
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section className="px-4 mb-16">
					<div className="max-w-4xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="text-center">
								<h3 className="text-xl font-bold text-gray-800 mb-4">Envíos y personalización</h3>
								<p className="text-gray-600 mb-4">Instagram: @vanilka_jabones</p>
								<p className="text-gray-600">Personalizamos pedidos para eventos</p>
							</div>
							<div className="text-center">
								<h3 className="text-xl font-bold text-gray-800 mb-4">Pedidos y contacto</h3>
								<p className="text-gray-600 mb-4">Instagram: @vanilka_jabones</p>
								<p className="text-gray-600">Pedidos por WhatsApp: (55) 5524 2270</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="px-4 mb-16">
					<div className="max-w-2xl mx-auto text-center">
						<button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors">
							¡Te ayudamos a elegir el detalle perfecto! ♡
						</button>
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-pink-500 text-white py-8">
					<div className="max-w-4xl mx-auto px-4 text-center">
						<div className="flex justify-center gap-6 mb-4">
							<a href="#" className="hover:opacity-80">📘 Facebook</a>
							<a href="#" className="hover:opacity-80">📷 Instagram</a>
							<a href="#" className="hover:opacity-80">💬 WhatsApp</a>
						</div>
						<p className="text-sm opacity-90">© 2024 Vanilka - Arte mineral en tu piel</p>
					</div>
				</footer>
			</div>
		</Layout>
	)
}

export default Home