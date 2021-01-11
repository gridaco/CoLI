
/**
 * Interface representing a syntactic entity (either a token or an AST node)
 * which has a location and extent in the source file.
 */
export interface SyntacticEntity {
    /**
     * Return the offset from the beginning of the file to the character after the
     * last character of the syntactic entity.
     */
    end: number

    /**
     * Return the number of characters in the syntactic entity's source range.
     */
    length: number

    /**
     * Return the offset from the beginning of the file to the first character in
     * the syntactic entity.
     */
    offset: number
}