

export interface Parameter<T> {
    name: string
    type: string
    default?: T
}


export interface Parameters {
    required?: Parameter<any>
    optional?: Array<Parameter<any>>
}