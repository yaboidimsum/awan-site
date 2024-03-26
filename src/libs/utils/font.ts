import { Inter, Poppins, Plus_Jakarta_Sans } from 'next/font/google';

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
});

export const inter = Inter({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-tertiary',
    });