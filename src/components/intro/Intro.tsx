import { Navbar } from '../navbar/Navbar';
import first from '../../../public/assets/gallery-intro/1.png';
import second from '../../../public/assets/gallery-intro/2.png';
import third from '../../../public/assets/gallery-intro/3.png';
import fourth from '../../../public/assets/gallery-intro/4.png';
import { Hearts } from './SideHearts';

import './intro.styles.css';
import { HeroText } from './HeroText';

const gallery = [first, second, third, fourth];



export function Intro(): JSX.Element {
	return (
		<main>
			<Navbar />
			<Hearts />
			<HeroText/>
			<section className='hero-gallery'>
				{gallery.map((img, index) => {
					return <img src={img.src} key={index} alt="" />;
				})}
			</section>
			
		</main>
	);
}
