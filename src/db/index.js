const Auth = require('concore-sdk-js/lib/node/Datacore/Auth');
const Concore = require('concore-sdk-js/lib/node')

const config = require('../config');

exports.init = async() => {
    Concore.init('https://api.concore.io/api', APP_ID, APP_KEY)
    await Auth.login(CONCORE_ADMIN_USER, CONCORE_ADMIN_PASSWORD)
    .catch(e => { console.error(e) })

    await Promise.all(
        Object.values(models)
            .map(async(model) => {
                await model.save()
                    .catch(e => { console.log(e) });
            })
    )

    await Auth.logout()
        .catch(e => { console.error(e) })
}

exports.register = async(data) => {
    const pessoaMoleculoid = new pessoaMoleculoid('Pessoa', [
        new MetatomType.Text('Nome'),
        new MetatomType.Choice('Sexo', [
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
        ]),
        new MetatomType.Email('Email'),
        new MetatomType.DateTime('Nascimento', {
            type: 'date', // padrão é datetime
        }),
        new MetatomType.Text('CPF', {
            required: false, // padrão para todos os campos é required: true
        }),
        new MetatomType.Location('Endereço', 'endereco'),
    ]);

    Concore.init('https://api.concore.io/api', APP_ID, APP_KEY)
    await Auth.login(CONCORE_ADMIN_USER, CONCORE_ADMIN_PASSWORD)
    .catch(e => { console.error(e) })
}