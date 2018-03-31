export interface IPair< FirstType, SecondType > {

    getFirst(): FirstType;

    getSecond(): SecondType;

    equals( other: IPair< FirstType, SecondType > ): boolean;

    toJSON(): string;

}


export abstract class AbstractPair< FirstType, SecondType > implements IPair< FirstType, SecondType > {

    constructor( protected _first: FirstType, protected _second: SecondType ) {
    }

    getFirst(): FirstType {
        return this._first;
    }

    getSecond(): SecondType {
        return this._second;
    }

    equals( other: IPair< FirstType, SecondType > ): boolean {
        return other.getFirst() === this.first && other.getSecond() === this.second;
    }

    toJSON(): string {
        const obj = { first: this._first, second: this._second };
        return JSON.stringify( obj );
    }

    get first(): FirstType {
        return this._first;
    }

    get second(): SecondType {
        return this._second;
    }

    toString(): string {
        return '[' + this._first + ', ' + this._second + ']';
    };

}


export class Pair< FirstType, SecondType > extends AbstractPair< FirstType, SecondType > {

    setFirst( first: FirstType ): Pair< FirstType, SecondType > {
        this._first = first;
        return this; // chainable
    }

    setSecond( second: SecondType ): Pair< FirstType, SecondType > {
        this._second = second;
        return this; // chainable
    }

    set first( first: FirstType ) {
        this._first = first;
    }

    set second( second: SecondType ) {
        this._second = second;
    }

}


export class ImmutablePair< FirstType, SecondType > extends AbstractPair< FirstType, SecondType > {
}
