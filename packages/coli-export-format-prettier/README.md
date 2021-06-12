# Default prettier formatter injectable to stringfy package

## Know Issue

prettier won't work on some platform (even standalone), e.g. on figma plugin platform. that is why this package, by default, is not referenced from any other packages.

## The Design

## When (Not) to use

**When to use**

- browser environment
- nodejs environment

**When Not to use**

- plugin platform
