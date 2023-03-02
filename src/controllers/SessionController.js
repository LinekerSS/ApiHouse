// Métodos: index, show, update, store, destroy
/*
    index: Listagem de sessoes
    store: Criar uma sessão
    show: Listar uma única sessão
    update: Alterar alguma sessão
    destroy: Deletando uma sessão 
*/

import User from '../models/User';
import * as Yup from 'yup';

class SessionControler {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required()
        })
        // guardo na variavel o email do corpo fazendo o destructing
        const { email } = req.body
        
        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({error : 'Falha na validação'})
        }

        // Verificando se o usuario já existe
        let user = await User.findOne({ email })

        if(!user) {
         user = await User.create({ email })
        }
        return res.json(user)
    }
}

export default new SessionControler();