import JoinList from "@/components/JoinList/joinlist";

export default function JoinPage(){


    return (
        <main className="bg-gray-900 min-h-screen">

            <div className="flex justify-center pt-10">
                <h1 className="text-5xl">Bli medlem i Start Gjøvik 🚀</h1>
            </div>

            <div>
                <JoinList/>
            </div>
            

        </main>
    );
}