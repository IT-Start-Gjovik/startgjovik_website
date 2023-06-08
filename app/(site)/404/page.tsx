import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {

    return (

        <main className="min-h-screen bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start backdrop-blur-3xl flex justify-center">
            <div className="min-w-[80%] h-full p-6  rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col items-center justify-center mt-20">

                <Image src="/images/404-V3.png" alt="404" width={500} height={500}/>
                
                
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">Ops! Denne siden eksiterer ikke! </h5>
                
                <p className="mb-3 font-normal text-gray-400"> 
                    Linken du har trykket på eksisterer ikkje. Pass på at du har skrevet rikitg i URLen! <br></br>
                    Om du trur noe er feil skriv en mail til: <br></br>
                    <Link href="mailto:it@startgjovik.no" className="font-bold text-2xl flex justify-center my-10">it@startgjovik.no</Link>
                </p>
                <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
                    Tilbake til www.startgjovik.no! 
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                </Link>



            </div>

        </main>
    )

}