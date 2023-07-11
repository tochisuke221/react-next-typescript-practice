// // // 知っておくと便利な機能

// // /** Optional Chaining */

// // interface User {
// //   name: string
// //   social?: {
// //     facebook: boolean
// //     twitter: boolean
// //   }
// // }

// // let user: User


// // user = {
// //   name: 'tochi',
// //   social: {
// //     facebook: true,
// //     twitter: true
// //   }
// // }

// // console.log(user.social?.facebook) // => true

// // user = {
// //   name: 'やまだ'
// // }

// // console.log(user.social?.facebook) // => undefined

// // /** Non-null Assertion Operator */
// // // userがnullの場合、実行時エラーになる可能性があるプロパティへのアクセスはコンパイルエラー
// // // !を用いて、明示的に指定することでコンパイルエラーを制御
// // const processUser = (user?: User) => {
// //   let s = user!.name
// // }


// // // 以下個人的メモ
// // // Optional Chainingは実行時にもエラーが起きないので使い方をミスるとバグの温床になりうる


// // /** 型ガード */

// // const numberToStirng = (value: string | number) => {
// //   if (typeof value === "number") {
// //     return value.toString(); // number型という前提で認識される
// //   }
// //   return value;
// // }
 
// // // 型ガードを用いると、安全な型変換ができる
// // type User2 = {
// //   info?: {
// //     name: string,
// //     age: number
// //   }
// // }

// // let response = {}
// // // responseがAPIの返却値を期待
// // const user2 = (response as any) as User2

// // if(user2.info){
// //   // このifがないとエラーが発生 Object is possibily 'undefined'
// //   console.log(user2.info.name)
// // }


// // /** keyof */
// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// type userKey = keyof User // 'name' | 'age' | 'email' のUnion型になる

// const key1: userKey = 'name'
// // const key2: userKey = 'phone'  // => コンパイルエラーとなる

// // とちメモ:
// // 型引数の推論: コンパイラは、引数の型や関数の戻り値の型から、ジェネリック型パラメータの型引数を推論します。型引数の推論が成功する場合、明示的な型引数の指定は必要ありません。
// const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
//     return obj[key]
// }

// const user: User = {
//   name: "とちー",
//   age: 35,
//   email: "test@example.com"
// }

// const userName = getProperty(user, 'name') // => OK
// const userName = getProperty(user, 'gender') // => エラー

// /** インデックス型 */

// // プロパティ名を任意のnumberとして扱う定義の例です
// type SupportVersions = {
//   [env: number]: boolean;
// }

// let versions: SupportVersions = {
//   101: true,
//   102: false,
//   '103': false // エラーの発生
// }

// /** readonly */

// type UserRo = {
//   readonly name: string;
//   readonly age: number;
// }

// let userRo: UserRo = { name: 'たろう', age: 35 }

// userRo.name = 'じろう' // エラー

// // constは変数の再代入を禁じるが、readonlyはプロパティなど
// // Readonly型に型エイリアスを定義できる
type User = {
  name: string;
  gender: string;
}

type UserReadonly = Readonly<User>

let user: User = { name: 'たろう', gender: 'Male' }
let userReadonly: UserReadonly = { name: 'じろ', gender: 'Male' }
user.name = '太郎' // OK
userReadonly.name = '二郎' // エラー


/** unknown */
const xPoint: unknown = 123
const yPoint: unknown = 'One'

// エラー
console.log(xPoint.toFixed(1))
console.log(yPoint.toLowerCase())

// 安全な状況下ならOK
if(typeof xPoint === 'number'){
  console.log(xPoint.toFixed(1))
}
if(typeof yPoint === 'string'){
  console.log(yPoint.toLowerCase())
}
