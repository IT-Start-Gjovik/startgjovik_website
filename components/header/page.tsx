import Navbar from '@/components/navbar/page';

export default function Header() {
    return (
        <header className='sticky top-0 w-full pb-5 z-50 '>
            {/** Navigation bar */}
            <Navbar />
        </header>
    );
}
