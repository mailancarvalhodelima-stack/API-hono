let nome:string = ""
let idade:number = 1
const cpf:string | number = "111.222.333-44"
const qualquer: [] = []
let lista: string[] = ["Mailan", "Bernardo", "Tsuda", "Bianca"]
const obj1: {} = {id: 10, idade:200, nome, "Mathews"}

const obj2:{id:number, }







type tema = "claro" | "escuro" | "Roxo" | "Amarelo"

const meuTema: tema = "Roxo"

type HTTPCode = 200 | 201 | 400 | 401 | 404 | 500 | 301

function acesso(url:string):HTTPCode {
    if (url === "https://github.com/") {
        return 200 
    } else if (url === "http://localhost:3000/") {
        return 500
    } else{
        return 404
    }
}
acesso ()