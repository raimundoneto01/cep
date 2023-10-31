const cep = document.getElementById("cep");
const btnSearch = document.getElementById("btn-search");
const result = document.getElementById("result");


function createHTML ( cep, localidade, uf, logradouro, ddd, siafi ){
    const html = ( result.innerHTML = `
        
       <p>CEP: ${cep}</p>  
       <p>Cidade: ${localidade }</p>  
       <P>UF- ${uf}</P>
       <p>Bairro: ${logradouro}</p>
       <p>DDD: ${ddd}</p>
       <p>N°: ${siafi}</p>

    `)

    return html;
}

async function getAddless (cep){
    const result =await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = await result.json()
    console.log(data);
    return data;
}

async function randerAddles(){
    const addless = await getAddless(cep.value)
    createHTML(addless.cep,addless.localidade, addless.uf, addless.bairro, addless.ddd, addless.siafi);
}

btnSearch.addEventListener("click", randerAddles)