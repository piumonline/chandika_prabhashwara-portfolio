import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const monalista = localFont({
  src: '/fonts/Monalista.ttf',
  display: 'swap',
  variable: '--font-monalista',
});
