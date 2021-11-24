function obterUsuario(){
    //Quando der algum problema -> reject(ERRO)
    // quando success -> RESOLV
    return new Promise(function reslvePromise(resolve,reject){
        setTimeout(() => {
        return resolve({
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date(),
            endereco: "Castelo no meio do deserto da Arábia"
        })        
    }, 1000)
    })
} 


function obterTelefone(idUsuario, callback){
    setTimeout(()=>{
        return callback(null,{
                numero: '99999900',
                ddd:66
           })
        
    },2000)
}


function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null,{
            rua: "dos bobos",
            numero:0
        })
    },2000)
}


const usuarioPromise =obterUsuario()

usuarioPromise.then(function(resultado){
    console.log("Resultado",resultado)
}).catch(function(error){
    console.log("Deu RUIm", error)
})


/*obterUsuario(function resolveUsuario(error, usuario){
        if(error){
            console.error('Deu ruim no Usuario',error)
            return;
        }

        obterTelefone(usuario.id,function resolveTelefone(error1, telefone){
            if(error1){
                console.error('Deu ruim no telefone',error1)
                return;
            }    

        obterEndereco(usuario.id, function resolverEndereco(error2,endereco){
            if(error2){
                console.error('Deu ruim no endereço',error2)
                return;
            }
            console.log(`
                Nome: ${usuario.nome}
                Endereco: ${endereco.rua},${endereco.numero}
                Telefone: ${telefone.ddd}, ${telefone.numero}
                erro: ${error1} ${error2} ${error}
            `)
        })

    })

})*/