
export default function ShowLoading() {

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="flex flex-col items-center gap-4">
                <div className="loading loading-bars loading-lg text-primary/50"></div>
                <p className="text-sm text-base-content/40 font-medium">Loading...</p>
            </div>
        </div>
    )
}
