import Link from 'next/link';
import Logo from '../UI/logo';
import { FooterContent } from '@/types/FooterContentStructure';

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Ensure currentYear is defined

    return (
        <footer className='relative w-full bg-[#132D4E] text-white p-4 sm:p-10 lg:p-16'>
            <div className='w-full border-t border-gray-600 my-4 lg:my-8 '></div>
            <div className='flex flex-col md:flex-row justify-between items-center  max-w-6xl mx-auto'>
                <div className='w-full md:w-auto flex flex-wrap md:flex-nowrap md:flex-col items-center'>
                    <Link href='/' className='w-32'>
                        <Logo />
                    </Link>
                    <Link
                        href={`mailto:${FooterContent.email}`}
                        className='hover:underline text-base lg:text-lg hidden lg:block '>
                        {FooterContent.emailText}
                    </Link>
                </div>

                {/* Links Section */}
                <div className='relative w-full'>
                    <div className='mx-auto w-full max-w-7xl px-8'>
                        <div className='flex flex-wrap md:justify-evenly gap-5 '>
                            {FooterContent.sections.map((section) => (
                                <div key={section.title}>
                                    <p className='font-bold mb-2 text-xl lg:text-2xl'>
                                        {section.title}
                                    </p>
                                    {section.links.map((link) => (
                                        <ul key={link.name}>
                                            <Link
                                                key={link.name}
                                                href={link.url}
                                                rel='noopener noreferrer'
                                                className='hover:underline text-lg lg:text-xl'>
                                                {link.name}
                                            </Link>
                                        </ul>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* BreakLine */}
            <div className='w-full border-t border-gray-600 my-4 lg:my-8'></div>

            <div className='text-center font-normal text-blue-gray-900'>
                &copy; {currentYear} Start Opphavsrett Gjøvik, NO 918 138 358
            </div>
        </footer>
    );
}
