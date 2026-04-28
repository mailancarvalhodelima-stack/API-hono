import { Hono } from "hono";

const app = new Hono() 

let data: {id:number}[] = []
let id = 1

app.get("/home", async c => {
    c.header("mensagem-customizada", "Bom dia, boa boite e boa madrugada pra você")
    
    return c.html("Boa tarde!")
})

app.get("/informacoes", async c=> {
    return c.json(data)
})

app.post("/usuario", async c => {
    const obj = await c.req.json()
    obj.id = id 
    id++
    data.push(obj)
    return c.json({status: "recebido"}, 201)
})

app.get("/usuario/:id{[0-9]+}", async c => {
    let pid:any = c.req.param("id")
    pid = Number(pid)

    for (let obj of data) {
        if (obj.id === pid) {
            return c.json(obj, 200)
        }
    }

    return c.json({status: "não encontrado"}, 404)
})

export default app