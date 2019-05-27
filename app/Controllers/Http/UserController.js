'use strict'

const User = use('App/Models/User')
/*показать всех пользователей*/
class UserController {
    async index({request, response, view}){
        const users = await User.all()
        return view.render('user.index', {users: users.toJSON()})

    }
/*показать одного пользователя*/
    async show({request, response, view, params}){

    }
/*добавить создать пользователя*/
    async store({request, response}){
        
        const user = new User()
        
        const formData = request.All()
        user.merge(formData)

        await user.save()
        
        return response.json(user)
    }
/*обновление (сохранение данных пользователя*/
    async save({request, response, view, params}){
        
    }
/*создание формы пользователя*/
    async create({request, response, view, params}){
        
    }
 /*удаление пользователя*/
    async destroy({request, response, view, params}){
        
    }
 /* отображение формы (адрес имя и редактирования) пользователя*/
    async edit({request, response, view, params}){
        
    }



}

module.exports = UserController
