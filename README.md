# ts-pair

> Pair classes for TypeScript and JavaScript

## Install

```bash
npm install ts-pair --save
```

## Example

```typescript
let pair = new Pair( 1, "Hello" );
console.log( pair.first, ', ', pair.second ); // 1, Hello
console.log( 'Pair is ' + pair ); // Pair is [ 1, Hello ]

pair.first = 2;
pair.second = "hi";

console.log( 'JSON', pair.toJSON() ); // Pair is { "first": 2, "second": "hi" }

// chainable
console.log( pair.setFirst( 10 ).setSecond( "bye" ).toString() ); // 10, bye

let otherPair = new Pair( 20, "bye" );
console.log( otherPair.equals( pair ) ? 'equal': 'different' ); // different

let aImmutable = new ImmutablePair( 20, "bye" );
console.log( aImmutable.equals( otherPair ) ? 'equal': 'different' ); // equal

aImmutable.first = "baz"; // Error
```

## Available Types

- `IPair` interface, with `getFirst()`, `getSecond()`, `equals()`, and `toJSON()`
- `AbstractPair` that implements `IPair` and declares `toString()`
- `Pair` that extends `AbstractPair`
- `ImmutablePair` that extends `AbstractPair`

## License

[MIT](LICENSE.txt) © [Thiago Delgado Pinto](https://github.com/thiagodp)