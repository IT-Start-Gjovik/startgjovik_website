export default function HeaderJumbotron() {
    return (
        <section className="bg-gray-900 my-10">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">Vi gir unge gründere muligheter!</h1>
                <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48 ">En studentorganisasjon med lidenskap for
                    entreprenørskap og bærekraftig utvikling 🚀 <br></br> <br></br> Start Gjøvik fokuserer på å skape en kultur for innovasjon og entreprenørskap blant studenter, slik at de kan realisere sine ideer og skape verdifulle nettverk.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="/join" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
                        Bli med
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:ring-gray-800">
                        Les mer
                    </a>
                </div>
            </div>
        </section>

    );
}