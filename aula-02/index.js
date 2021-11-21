function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Gabriel',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            telefone: '119707070',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario(error, usuario) {
    console.log('usuario', usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        log.error('DEu RUIM EM USUARIO', error);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            log.error('DEu RUIM EM TELEFONE', error);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                log.error('DEu RUIM EM ENDERECO', error);
                return;
            }

            console.log(`
                nome: ${usuario.nome},
                endereco: ${endereco.rua}, ${endereco.numero},
                telefone: (${telefone.ddd})${telefone.telefone}

            `);
        })
    })
})
/* const telefone = obterTelefone(usuario.id) */


/* console.log('telefone', telefone); */