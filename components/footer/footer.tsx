// Footer component 

import Link from "next/link";

export default function Footer(){

    const licenseURL: string = "#";
    const privacyPolicyURL: string = "#";

    return (
        <div className="flex-grow mt-20">
            <footer className="rounded-lg mt-4 bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">© 2023 <Link href="https://startgjovik.no/" className="hover:underline">Start Gjøvik</Link>. Alle Rettigheter Reservert.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link href={privacyPolicyURL} className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href={licenseURL} className="mr-4 hover:underline md:mr-6">Licensing</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}