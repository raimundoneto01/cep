
/**
 * Métodos HTTP
 * GET - Buscar 
 * POST- Enviar
 * DELETE- Deletar
 * PATCH- Subistituir parcialmente
 * PUT- Substituir completamente
 * 
 * códigos 
 * 100 ~ 199 - Informativa
 * 200 ~ 299 - Bem sucedida
 * 300 ~ 399 - Redirecionamento
 * 400 ~ 499 - Erro do cliente
 * 500 ~ 599 - Erro do servidor
 */


// const nome = 'miria';
// const saudacao =`Olá, meu nome é ${nome}!`
// console.log(nome);

// const result = fetch('https://fakestoreapi.com/products')
// .then((res) => res.json())
// .then((json) => console.log(json))

// console.log(result);

// console.log(saudacao);

const list = document.getElementById('list')
const btnList = document.getElementById('btn-list')


async function getProduts (){
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
}

function produte(nome){

   const html = ( list.innerHTML += `<li>${nome}</li>`);
   return html;
   
}

async function rendeList(){
    const products = await getProduts()
    list.innerHTML = "";
    products.map((product)=>{
        const data = produte(product.title)
        return data
    })
}

btnList.addEventListener("click", rendeList)