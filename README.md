# epam-react
Epam react course

Used technologies:
- webpack for bundling
- babel for transpiling
- express as a server
- jest for unit tests
- nightwatch for e2e tests
- jss for styles
- redux as a state container
- flow for static type analysis
- immutable just to show that I can
- reselect to speed up slow actions
- storybook for hype

Known issues:
- Nightwatch does not kill chrome process at the end of the e2e tests
- node_modules/immutable/dist/immutable.js.flow should be fixed:

declare class Seq<K,V> extends _Iterable<K,V, typeof KeyedSeq, typeof IndexedSeq, typeof SetSeq> {
  static <K,V>(iter: KeyedSeq<K,V>):   KeyedSeq<K,V>;
  static <T>  (iter: SetSeq<T>):       SetSeq<K,V>;
  static <T>  (iter?: ESIterable<T>):  IndexedSeq<T>;
  static <K,V>(iter: { [key: K]: V }): KeyedSeq<K,V>;

  static isSeq(maybeSeq: any): boolean;
  // this line should be commented to not generate flow errors
  // static of<T>(...values: T[]): IndexedSeq<T>;

  size: ?number;
  cacheResult(): this;
  toSeq(): this;
}

- css markup looks weird like my memories about kindergarten
