/** Enum型 */
enum Direction {
  Up,
  Down,
  Left,
  Right
}



let direction: Direction = Direction.Left
console.log(direction) // => 2

enum DirectionSt {
  Up = 'Up',
  Down = 'Down',
  Right = 'Right',
  Left = 'Left'
}

// 文字列からEnum型へ変換する
const val = 'Up'
const enumValue = val as DirectionSt

if(enumValue === DirectionSt.Up){ 
  console.log('Down is selected')
}

/** ジェネリック型 */
// 外部から具体的な型を指定できる
class Queue<T> {
  // 内部にTの型の配列を初期化
   private array: T[] = []

   // Tの型値を配列に追加します
   push(item: T): void{
     this.array.push(item)
   }

   // Tの方の配列の最初のあたいを取り出します
   pop(): T | undefined {
     return this.array.shift()
    }
}

const queue = new Queue<number>()
queue.push(11)
queue.push(12)
queue.push('hoge') // コンパイルエラー
let str: string = 'hoga'
str = queue.pop() // コンパイルエラー


// Union型とIntersection型
// TypeScriptの型の組み合わせ
const printId(id: string | number) {
  console.log(id)
}

printId(11)
printId('1')

// 型エイリアスとしても定義できる
type Id = string | number

const printId2(id: Id){
  console.log(id)
}

// 複雑な型の定義
type Identity = {
  id: number | string;
  name: string
}

type Contact = {
  name: string;
  email: string;
  phone: string;
}

// 和集合でのUnion型の定義
type IdentityOrContact = Identity | Contact

// OK
const id: IdentityOrContact = {
  id: '111',
  name: '東京'
}

// OK
const contact: IdentityOrContact = {
  name: 'Takuya',
  email: 'test:@gmail.com',
  phone: '03-1111-2222'
}

// 積集合によるIntersection型
// マージした形になる
type Employee = Identity & Contact

// OK
const employee: Employee = {
  id: '111',
  name: 'Takuya',
  email: 'test:@gmail.com',
  phone: '03-1111-2222'
}

// エラー
const employee2: Employee = {
  id: '111',
  name: 'Takuya',
  email: 'test:@gmail.com',
}


/** リテラル型 */
// 決まった文字列や数値以外受け付けないという制御ができる

let popStatus: 'draft' | 'pubrished' | 'deleted'
popStatus = 'draft' // OK
popStatus = 'drafts' //エラー

// 関数にも適用可能
const compare(num1: number, num2: number): -1 | 0 | 1 {
  return num1 === num2 ? 0 : num1 > num2 ? 1: -1
}

/** never型 */
// never型は決して発生しない値の種類を表します

const error = (message: string): never => {
  throw new Error(message)
}

const foo = (x: string | number | number[] ): boolean => {
  if(typeof x === 'string') return true
  if(typeof x === 'number') return false

  return error('Never happens')
}

// 有効な使い方としては、ifやswitch文で漏れがないか保証できる
// 将来的に追加されるかもしれない定数
enum PageType {
  ViewProfile,
  EditProfile,
  ChangePassword
}

const getTitleText = (type: PageType) => {
  switch (type) {
    case PageType.ViewProfile:
      return 'setting'
    case PageType.EditProfile:
      return 'Edit Profile'
    case PageType.ChangePassword:
      return 'Change Password'
    default:
      //決して発生しえないことをコンパイルに伝えるnever型に代入を行う
      // これにより将来的なバグを防ぐ
      const wrongType: never = type
      throw new Error(`${wrongType} is not in PageType`)
  }
}

