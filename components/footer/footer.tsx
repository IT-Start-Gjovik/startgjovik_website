import Logo from '../UI/logo';
import { FooterContent } from '@/types/FooterContentStructure';

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Ensure currentYear is defined

    return (
        <footer className='relative w-full bg-[#132D4E] text-white p-4 sm:p-10 lg:p-16'>
            <div className='w-full border-t border-gray-600 my-4 lg:my-8'></div>
            <div className='flex flex-col lg:flex-row justify-between items-start max-w-6xl mx-auto'>
                <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-start lg:justify-between'>
                    <a href='#' className='w-32 h-32 lg:w-48 lg:h-48 mb-4'>
                        <Logo />
                    </a>
                    <a
                        href={`mailto:${FooterContent.email}`}
                        className='hover:underline text-base lg:text-lg'>
                        {FooterContent.emailText}
                    </a>
                </div>

                {/* Links Section */}
                <div className='relative w-full'>
                    <div className='mx-auto w-full max-w-7xl px-8'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                            {FooterContent.sections.map((section) => (
                                <div
                                    key={section.title}
                                    className='flex flex-col mb-4 lg:mb-0'>
                                    <span className='font-bold mb-5 text-lg lg:text-3xl'>
                                        {section.title}
                                    </span>
                                    {section.links.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            rel='noopener noreferrer'
                                            className='mb-3 hover:underline text-base lg:text-lg'>
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* BreakLine */}
            <div className='w-full border-t border-gray-600 my-4 lg:my-8'></div>

            {/* Bottom Links */}
            <div className='flex flex-wrap gap-2 md:gap-16'>
                <a href='/personvern' className='hover:underline'>
                    Personvern
                </a>
            </div>
            <div className='text-center font-normal text-blue-gray-900'>
                &copy; {currentYear}{' '}
                <a href='#' className='hover:underline'>
                    Start Opphavsrett Gjøvik, NO 918 138 358
                </a>
            </div>
        </footer>
    );
}
