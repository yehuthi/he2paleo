# he2paleo [<img src="https://img.shields.io/npm/v/he2paleo?logo=npm" align="right" />](https://www.npmjs.com/package/he2paleo)


Convert Hebrew script to Paleo-Hebrew / Phoenician script.

[Demo](https://yehuthi.github.io/tatqan/)

## Installation

```shell
npm i he2paleo
```

## Usage

If you just need to convert strings, you can just use the default import:
```typescript
import he2paleo from 'he2paleo';

he2paleo("שלום, עולם!") // => "𐤔𐤋𐤅𐤌, 𐤏𐤅𐤋𐤌!"
```

If you want more control:
```typescript
import * as he2paleo from 'he2paleo';

he2paleo.char("א") // => "𐤀"
he2paleo.charCode("א".charCodeAt(0)) // => "𐤀"
he2paleo.charCode(0) // => undefined
he2paleo.char("k") // => undefined
he2paleo.string("שלום, עולם!") // => "𐤔𐤋𐤅𐤌, 𐤏𐤅𐤋𐤌!"

// When you know the characters are always Hebrew, you can use the unchecked versions:
he2paleo.charUnchecked("א") // => "𐤀"
he2paleo.charCodeUnchecked("א".charCodeAt(0)) // => "𐤀"
```

Be careful if you want to use unchecked versions when mapping strings, because it's easy to not notice some illegal characters such as spaces, punctuation, digits etc. that might be present. It's so easy to shoot yourself in the foot that this is why a `stringUnchecked` is not provided (at least for the time being).
