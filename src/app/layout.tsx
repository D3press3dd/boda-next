import './globals.css';
import type { Metadata } from 'next';
import { Arapey, Inter } from 'next/font/google';

export const arapey = Arapey({
	weight: '400',
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Boda | Andrelithe y Erika',
	description: 'Página para invitar a mi boda a las personas de bla bla bla',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
