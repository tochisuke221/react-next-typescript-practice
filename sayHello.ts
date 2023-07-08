/** TypeScriptとは */
// 実行コマンド: 
//tsc --strictNullChecks sayHello.ts
// node sayHello.js

const sayHello = (firstName: string) => {
	console.log('Hello ' + firstName)
}

let firstName: string = "Tochisuke";
sayHello(firstName)
