import Form from "next/form"
import {Search} from "lucide-react"
import SearchFormReset from "./SearchFormReset"
const SearchForm = function ({query}: {query: string}) {

    return (
        <Form action="/" scroll={false} className="search-form">

            <input 
                type="text" 
                placeholder="Recherher un article"
                name="query"
                className="search-input"
            />

            <div className="flex gap-2">
                
               {query && <SearchFormReset/>}
                <button type="submit" className="search-btn text-white">
                    <Search className="size-5 font-bold" />
                </button>
            </div>

        </Form>
    )
}

export default SearchForm