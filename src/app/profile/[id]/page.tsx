export default function UserProfile({params}: any){
    return(
        <div className="flex flex-col items-center justify-center max-h-screen py-2">
            <h1>
                Profile
            </h1>
            <hr />
            <p className="text-4xl">Profile Page</p>
            <span>{params.id}</span>
        </div>
    )
}