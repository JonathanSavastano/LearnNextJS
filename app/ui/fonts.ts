// file created in chapter 3
// import primary font
import { Inter } from 'next/font/google';
//import secondary font
import { Lusitana } from 'next/font/google';

// specify subset as latin
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
});