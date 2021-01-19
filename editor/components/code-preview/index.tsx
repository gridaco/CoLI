import React from "react"

export function CodePreview(props: {
    src: string
}) {
    return <pre>{props.src}</pre>
}