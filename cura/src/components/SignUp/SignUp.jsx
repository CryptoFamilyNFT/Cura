export const SignUp = () => {
    return (
        <div className="flex justify-center items-center absolute w-full mt-10">
            <div
            className="relative top-0 left-0 bg-gray-200 bg-opacity-90 z-10 backdrop-blur-sm p-5 rounded-lg flex flex-col items-center justify-center">
                <form className="flex flex-col gap-4">
                    <input type="email" placeholder="Email" className="border border-gray-300 rounded p-2" />
                    <input type="password" placeholder="Password" className="border border-gray-300 rounded p-2" />
                    <input type="password" placeholder="Confirm Password" className="border border-gray-300 rounded p-2" />
                    <button type="submit" className="bg-purple-600 text-white rounded p-2">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
