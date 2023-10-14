import Link from 'next/link';
import './navbar.styles.css';
export const Navbar = () => {
	return (
		<nav>
			<div className="nav-left">
				<p>Andrelithe y Erika locotrona</p>
			</div>
			<div className="nav-right">
				<ul>
					<li>
						<Link href="#home">Home</Link>
					</li>
					<li>
						<Link href="#pics">Pics</Link>
					</li>
					<li>
						<Link href="#date">Date</Link>
					</li>
					<li>
						<Link href="#friends">Friends</Link>
					</li>
					<li>
						<Link href="#wedding">Wedding</Link>
					</li>
					<li>
						<Link href="#gallery">Gallery</Link>
					</li>
					<li>
						<Link href="#location">Location</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

