import Image from 'next/image';
import crown from '../../../public/assets/crown.svg';

export function HeroText(): JSX.Element {
	return (
		<div className="hero-text">
			<Image src={crown} priority alt="" width={161} height={54} />
			<h1>Andrelithe cabron & Erika Puta</h1>
			<h2>11 november, 2022 - francia</h2>
		</div>
	);
}
