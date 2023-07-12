import Spinner from "../UI/Spinner";

export default function LoadingPage() {
    return (
        <div className="flex flex-col gap-3 justify-center items-center h-screen ">
            <Spinner />
            <p className="font-sans md:text-xl">Vi henter siden for deg...</p>
        </div>
    );
}
