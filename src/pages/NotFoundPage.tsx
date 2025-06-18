import PrimaryLinkButton from "../components/primaryLinkButton";


const NotFound = () => {
    return (
    <main className="h-[90%] flex flex-col justify-center items-center px-[10%] py-12 text-center">
        <div className="flex flex-col items-center justify-center w-full text-center px-4">
            <img src="/404-pic.svg" alt="" className="w-full"/>
            <h1 className="text-6xl font-bold text-white">404</h1>
            <p className="text-md mt-2 text-white">
                Oops! It seems you've wandered off the digital path. We apologize for the inconvenience. Let's get you back on track.
            </p>

            <PrimaryLinkButton to="/">Return to Homepage</PrimaryLinkButton>
        </div>
        </main>
    );
}

export default NotFound;