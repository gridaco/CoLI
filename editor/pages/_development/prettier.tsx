import React from "react"
import { formatted } from "@coli/export-string/_development/prettier.dev"

export default function PrettierTestPage(){
    console.log(formatted)
    return <pre>{formatted}</pre>
}