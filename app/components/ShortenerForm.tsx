
export default function ShortenerForm() {
    return (
        <form id="link-form" className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet
           rounded-lg md:flex-row md:space-y-0 md:space-x-3">
            <input type="text"
                className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
                placeholder="Shorten a linke here" id="link-input" />
            <button type="submit" className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
                Shorten It!
            </button>
            {/* errror msgs */}
            <div className="absolute left-7 bottom-3 text-red text-sm italic" id="error-link"></div>
        </form>
    )
}
