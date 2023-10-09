// Footer component 

import Link from "next/link";

export default function Footer(){

    const licenseURL: string = "https://github.com/IT-Start-Gjovik/startgjovik_website/blob/development/LICENSE";
    const privacyPolicyURL: string = "/personvern";

    return (
        <div className="flex justify-center mt-5">
            <footer className="rounded-xl mt-2 bg-gray-800 w-4/5">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">Opphavsrett © 2023 <Link href="https://startgjovik.no/" className="hover:underline">Start Gjøvik</Link>, NO 918 138 358
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                        <li>
                            <Link href={privacyPolicyURL} target="_blank" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href={licenseURL} target="_blank" className="mr-4 hover:underline md:mr-6">License (Github Code) </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}