import Footer from '@/components/footer/footer';

export default function ForCompany() {
    return (
        <div className="bg-gray-900 min-h-screen">
        <main>
            <h1 className="ml-4 mb-4 text-7xl font-extrabold leading-none leading-snug text-center">For bedrifter</h1>

            <div className="flex justify-between">
                <div><p>IMAGE HERE</p></div>
                <p className="order-last w-64 h-32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="absolute inset-x-0 bottom-0">
                <Footer />
            </div>
        </main>
        </div>
    )
}