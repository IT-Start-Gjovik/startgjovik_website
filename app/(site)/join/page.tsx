import JoinList from "@/components/JoinList/joinlist";
import BackButton from "@/components/UI/backbutton";
import ChecklistItem from "@/components/UI/checklistitem";
import Footer from "@/components/footer/footer";

export default function JoinPage() {


    return (
        <main className="bg-gray-900 min-h-screen">

            <div className="flex justify-center pt-10 px-6">
                <h1 className="text-4xl md:text-6xl">Bli medlem🚀</h1>
            </div>


            <div className="flex flex-col items-center mt-10 gap-10">

                <section className="px-1">
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Hvem burde søke? 🤔</h2>
                    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <ChecklistItem text="Du er engasjert!" />
                        <ChecklistItem text="Du liker å ta ansvar!"/>
                        <ChecklistItem text="Du brenner for invasjon og entreprenørskap!" />
                        <ChecklistItem text="Du studerer på NTNU eller Fagskolen i Gjøvik" />
                    </ul>
                </section>

                <section className="px-1">
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Fordeler ✨</h2>
                    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <ChecklistItem text="Styrk CV'en din 📝" />
                        <ChecklistItem text="Delta på intern teambuilding!" />
                        <ChecklistItem text="Bygg et solid nettverk" />
                    </ul>
                </section>



                <JoinList />

                <BackButton link="/" text="Tilbake til hovudsiden"/>
            </div>

            <Footer/>
            




        </main>
    );
}