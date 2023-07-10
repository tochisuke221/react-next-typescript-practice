// /** プリミティブ型 */
// let age: number = 36;
// let fullName: string = "tochisuke";
// let isDone: boolean = true;

// /** 配列 */

// const array: string[] = []
// array.push("とちすけ")
// array.push(true) // エラーとなる

// // 複数の型がある場合
// const mixedArray = ["とち", 1]
// const mixedArrayU: (string|number)[] = ["とち", 1]
// const mixedArrayT: [string, number] = ["とち", 1]

// /** オブジェクト型 */
// const user: {name: string, age: number} = {
//     name: "とち",
//     age: 26
// }

// console.log(user.name)
// console.log(user.age)

// // オプショナルなプロパティを指定できる
// const printName = (obj: {firstName: string, lastName?: string}) => {
//     //処理
// }

// printName({firstName: "とち"})
// printName({firstName: "とち", lastName: "すけ"})

// // 普通はエイリアスとともに使うことが多い


// /** anyについて */
// // すべての型を許容する。以下はいずれもコンパイルエラーが起きない

// let user2: any = { firstName: "栃川" }

// user2.hello()
// user2()
// user.age = 100
// const n: number = user2


// /** 関数 */

// const kansu1 = (name: string) => {

// }
// // オプショナルな引数
// const kansu2 = (name: string, greeting?: string) => {

// }

// // デフォルト引数
// const kansu3 = (name: string, greeting: string = "押忍！おなしゃす！") => {

// }

// kansu3("とち")
// kansu3("とち", "こんにちは")

// // 名前とフォーマット関数を引数として受けろ￥取り、フォーマットを実行してコンソール出力する関数
// const printFormattedName = (name: string, formatter: (name: string) => string) => {

// }
// const formatter = (name: string): string => `${name}さん`


// // 関数それ自体の型を記入する場合
// const genBirdsInfo = (name: string): string[] => {
//     return name.split(',')
// }

// const singBird = (birdInfo: (x: string)=> string[]) => {
//     return birdInfo('hato, kiji')[0] + 'piyo piyo'
// }

// console.log(singBird(genBirdsInfo)) // "hato piyp piyp"
// console.log(singBird("bird")) // 型が合わないのでエラー
