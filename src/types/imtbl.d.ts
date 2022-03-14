declare module 'imtbl' {
  type Collection = Record<string, any> | Record<string, any>[];
  type Key = string | number;
  type Path = Key[];
  type Pair = [Key, any];
  type Updater = (oldValue: any, ...forwardedArgs: any[]) => any;

  export function get<T = Collection>(where: T, key: Key, notFound: any): any;
  export function getIn<T = Collection>(where: T, path: Path, notFound: any): any;

  export function assoc<T = Collection>(where: T, key: Key, value: any, ...args: any): T;
  export function assocIn<T = Collection>(where: T, path: Path, value: any): T;

  export function dissoc<T = Collection>(where: T, ...keys: Key[]): T;
  export function conj<T = Collection>(where: T, values: any[] | Pair[]): T;

  export function update<T = Collection>(where: T, key: Key, updater: Updater, ...forwardArgs: any[]): T;
  export function updateIn<T = Collection>(where: T, path: Path, updater: Updater, ...forwardArgs: any[]): T;
}
