import { UserIcon } from "lucide-react"
import {defineType, defineField} from "sanity"

export const author = defineType({
    name: "author",
    title: "Author",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "id",
            type: "number"
        }),
        defineField({
            name: "name",
            type: "string"
        }),
        defineField({
            name: "phone",
            type: "number"
        }),
        defineField({
            name: "email",
            type: "string"
        }),
        defineField({
            name: "image",
            type: "url"
        }),
        defineField({
            name: "address",
            type: "string"
        }),
    ],
    preview: {
        select: {
            title: "name"
        }
    }
})