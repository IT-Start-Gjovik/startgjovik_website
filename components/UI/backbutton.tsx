import { ButtonHTMLAttributes } from 'react';
import Button from '../Button/button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    link: string;
    text: string;
    direction?: 'left' | 'right';
    [key: string]: any;
}

export default function ArrowButton({
    link,
    text,
    direction,
    ...rest
}: ButtonProps) {
    return (
        <Button link={link} text={text || 'Tilbake'} {...rest}>
            {direction === 'left' ? (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-2 h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 19l-7-7 7-7'
                    />
                </svg>
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path
                        fillRule='evenodd'
                        d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8'
                    />
                </svg>
            )}
        </Button>
    );
}
