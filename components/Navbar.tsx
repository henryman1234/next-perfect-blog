import Link from "next/link"
import Image from "next/image"
import { auth, signIn, signOut } from "@/auth";

const Navbar = async function () {

   const session = await auth();
   console.log(session) 

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo1.png" alt="logo" width={144} 
                    height={144} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Créer</span>
                            </Link>

                            <form action={async function () {
                                "use server"
                                await signOut({redirectTo: "/"})
                            }}>
                                <button>
                                    <span>Déconnecter</span>
                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (<form action={async function () {
                        "use server"
                        await signIn("google")
                    }}>
                           <button type="submit">
                            <span>Se Connecter</span>
                           </button>
                        </form>)}
                </div>


            </nav>


        </header>
    )
}

export default Navbar