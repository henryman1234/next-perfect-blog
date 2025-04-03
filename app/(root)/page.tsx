import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home ({searchParams}: {searchParams: Promise<{query?: string}>}) {

    const query = (await searchParams).query

    const params = {search: query || null}


    // const posts = await client.fetch(STARTUP_QUERY)
    const {data: posts} = await sanityFetch({query: STARTUP_QUERY, params})
    
    return (
        <>
            {/* The firts section */}
            <section className="pink_container pattern">
                <h1 className="heading ">La connaissance <br/> est un pouvoir  qui prend tout son sens lorsqu'il est partagé.</h1>

                <p className="sub-heading !max-w-3xl">Un esprit qui s'ouvre à une nouvelle idée ne revient jamais à sa taille d'origine.</p>

                <SearchForm query={query} /> 

            </section>

            {/* the second section */}
            <section className="section_container">

                <p className="text-30-semibold">
                    {query ? `Résultats des recherches pour "${query}".`: "Tous les articles"}
                </p>

                <ul className="card_grid">
                    {posts.length > 0 ? (
                        posts.map(function(post: StartupCardType){
                            return <StartupCard key={post._id} post={post}/>
                        })
                    ) : (<p>pas d'articles disponibles</p>)}
                </ul>

            </section>

            <SanityLive/>
        </>
    )
}