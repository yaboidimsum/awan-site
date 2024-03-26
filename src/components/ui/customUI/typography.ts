import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils/cn';

export const typographyVariants = cva('font-inter text-gray-950', {
    variants: {
      variant: {
        h1: 'text-4xl md:text-5xl font-extrabold',
        h2: 'md:text-3xl font-semibold',
        h3: 'md:text-2xl font-semibold',
        h4: 'md:text-xl font-semibold',
        lead: 'md:text-xl',
        large: 'md:text-lg',
        p: 'md:text-base',
        body: 'text-sm leading-6',
        subtle: 'text-sm',
        small: 'text-sm leading-none',
        detail: 'text-xs leading-5',
      },
      weight: {
        default: '',
        extralight: 'font-extralight',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
    },
    defaultVariants: {
      variant: 'p',
      weight: 'default',
    },
  });
  
  export interface TypographyProps<T extends React.ElementType = 'p'>
    extends VariantProps<typeof typographyVariants> {
    as?: T;
    className?: string;
    children: React.ReactNode;
  }

    