
// // /** 型推論 */

// // // 明示的にここでstring型としなくても....
// // const names = ["とち", "たいら" , "すけ"]

// // names.forEach(name => {
// //   // ここでstring型として扱われるため、以下の部分でコンパイルエラーとなる
// //   // 本来はtoUpperCase
// //   console.log(name.toUppercase())
// // })

// // // 代入する先の型が決まっている場合で一致しない場合はエラー
// // // window.conrimはBooleanでないといけない。
// // // window.confirm = () => {
// // //   console.log("OK") // return Booleanにしないとエラー
// // // }


// // /** 型アサーション */
// // // TypeScriptが具体的な型がわからない場合など。
// // // const myCanvas = document.getElementById('canvas')
// // // console.log(myCanvas.width) // error TS2233: Property 'width' does not exist type

// // const myCanvas = document.getElementById('canvas') as HTMLCanvasElement
// // console.log(myCanvas.width) // 解消！

// // // 二段階パターン
// // // const result = ( response as any) as User

// // // 注意が必要な例: JSではエラー、コンパイルではOK
// // const hoge: any = 'hoge'
// // const fuga :number = hoge as number
// // console.log(fuga.toFixed(3))

// // /** 型エイリアス */
// // // プリミティブ型に別名を与えるような使い方ができる

// // // type Point = {
// // //   x: number,
// // //   y: number
// // // }

// // // const printPoint = (point: Point) => {

// // // }

// // // printPoint({ x: 100, y: 50 })
// // // printPoint({ x: 100, z: 50 }) // 型があっていてもプロパティが違うとエラー

// // // // 関数の型エイリアスも可能
// // // type Formatter = (x: string) => string[]

// // // const printFormattedName2 = (name: string, formatter: Formatter) => {
// // //   console.log(formatter(name))
// // // }

// // // オブジェクトの型エイリアス
// // // キー名やキー数が事前に定まらないときに便利

// // type Label = {
// //   [key: string] : string
// // }

// // const labels: Label = {
// //   topTitle: "TypeScriptでつくるアプリケーション開発",
// //   topSubTitle: "ReactとNext.jsを使おう！" 
// // }

// // const hoge: Label = {
// //   message: 100 // 型が合わずでエラー
// // }

// // /** インターフェース */
// // // typeに似ているが拡張性がある

// // // interface Point {
// // //   x: number;
// // //   y: number;
// // // }

// // const printPoint = (point: Point) => {
// //     console.log(point.x)
// //     console.log(point.y)
// //     console.log(point.z)
// // }

// // // // 後から追加される
// // // interface Point {
// // //   z: number;
// // // }

// // // 引数のオブジェクトにzがないためエラー
// // printPoint({ x: 1, y: 2 })
// // // OK
// // printPoint({ x: 1, y: 2, z: 3 })

// // // 型エイリアスとの同名は不可能


// // // クラスの振る舞いの型定義できる

// // class MyPoint implements Point {
// //   x: number;
// //   y: number: // zがないのでエラーとなる
// // }

// // // オプショナルなインターフェースにする

// // interface Point {
// //   x: number;
// //   y: number;
// //   z?: number;
// // }

// // // extendsを使うと拡張可能になる

// // interface Colorful {
// //   color: string;
// // }

// // interface Circle {
// //   radius: number;
// // }

// // // 複数のインターフェースを継承してほかのインターフェース定義
// // interface ColorfulCircle extends Colorful, Circle {}

// // const cc: ColorfulCircle = {
// //   color: "red",
// //   radius: 10
// // }

// // // インターフェースと型エイリアスの違い
// // // インターフェースはクラスやデータの一側面を定義した型、つまりインターフェースにマッチする型でもその値以外に他のフィールドやメソッドがある前提のものでえす
// // // 型エイリアスはオブジェクトそのものを表す。
// // // オブジェクトそのものではなく、クラスやオブジェクトの一部のプロパティや関数の振る舞いを定義するのであればインターフェースをつかう

// // /** クラス */

// class Point {
//   x: number;
//   y: number;

//   constructor(x: number = 0, y: number = 0) {
//     this.x = x
//     this.y = y
//   }

//   // 戻り値がない場合はvoid
//   moveX(n: number): void{
//     this.x += n
//   } 

//   // 戻り値がない場合はvoid
//   moveY(n: number): void{
//     this.moveY += n
//   } 
// }

// const point = new Point
// point.moveX(10)

// // クラスを継承

// class Point3D extends Point {
//   z: number;

//   constructor(x: number = 0, y: number = 0, z: number = 0){
//     super(x, y)
//     this.z = z
//   }

//   moveZ(n: number): void{
//     this.z += n
//   }
// }

// const point3d = new Point3D
// point3d.moveX(10)
// point3d.moveZ(10)


// // インタフェースを利用

// interface IUser {
//   name: string;
//   age: number;
//   sayHello: () => string;
// }

// class User implements IUser {
//   name: string;
//   age: number;

//   constructor(){
//     this.name = ''
//     this.age = 0
//   }

//   // インターフェースに定義済みのメソッドを実装しないとエラーとなる
//   sayHello(): string{
//     return 'こんにちは'
//   }
// }


// // アクセス修飾子
// // public private protected　ってやつ

// class BasePoint3D{
//   public x: number;
//   private y: number;
//   protected z: number;
// }

// const basePoint = new BasePoint3D
// basePoint.x // OK
// basePoint.y // エラー
// basePoint.z // エラー

// class ChildPoint extends BasePoint3D {
//   constructor(){
//     super()
//     this.x // Ok
//     this.y // エラー
//     this.z // OK
//   }
// }
