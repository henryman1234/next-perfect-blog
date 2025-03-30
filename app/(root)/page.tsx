import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home ({searchParams}: {searchParams: Promise<{query?: string}>}) {

    const query = (await searchParams).query

    const posts = [{
        _id: 1,
        _createdAt: new Date(),
        views: 36,
        author: {_id: 1, name:"Henry Euloge"},
        description: "Dans un monde hyper-connecté, avoir des compétences en developpement peut s'avérer cruciale",
        category: "Technology",
        image: "https://img.freepik.com/photos-gratuite/personne-travaillant-html-ordinateur_23-2150038846.jpg?uid=R92729475&ga=GA1.1.232461980.1741188093&semt=ais_hybrid",
        title: "Un monde connecté"
    }]
    
    return (
        <>
            {/* The firts section */}
            <section className="pink_container pattern">
                <h1 className="heading ">La connaissance <br/> est un pouvoir  qui prend tout son sens lorsqu'il est partagé.</h1>

                <p className="sub-heading !max-w-3xl">Un esprit qui s'ouvre à une nouvelle idée ne revient jamais à sa taille d'origine.</p>

                <SearchForm query = {query} />

            </section>

            {/* the second section */}
            <section className="section_container">

                <p className="text-30-semibold">
                    {query ? `Résultats des recherches pour "${query}".`: "Tous les articles"}
                </p>

                <ul className="card_grid">
                    {posts.length > 0 ? (
                        posts.map(function(post){
                            return <StartupCard key={post._id} post={post}/>
                        })
                    ) : (<p>pas d'articles disponibles</p>)}
                </ul>

            </section>
        </>
    )
}