import Footer from '@/components/footer/footer';

export default function ForCompany() {
    return (
        <div className="bg-gray-900 min-h-screen">
        <main>
            <h1 className="ml-4 mb-4 text-7xl font-extrabold leading-none leading-snug text-center">For bedrifter</h1>
            <p className="ml-4 mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 text-center">Her skal vi legge til noe info om oss for bedriftene!</p>

            <div className="absolute inset-x-0 bottom-0">
                <Footer />
            </div>
        </main>
        </div>
    )
}