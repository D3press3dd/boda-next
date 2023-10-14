import './intro.styles.css';
import Image from 'next/image';
import leftHearts from '../../../public/assets/left-hearts.svg';
import rightHearts from '../../../public/assets/right-hearts.svg';


export function Intro ():JSX.Element {
	return (
		<main>
			<Image
				className='hearts left-hearts'
				priority
				src={leftHearts}
				alt=""
				width={300}
				height={564}
			/>
			<Image
				className='hearts right-hearts'
				priority
				src={rightHearts}
				alt=""
				width={300}
				height={564}
			/>
			
		</main>
	);
}
