const  userRepository = require("../repository/userRepository") ;

module.exports= class Login{
    constructor(userRepository){
        this.userRepository=userRepository
    }

    async execute (input){
        const user= await this.userRepository.getByEmail(input.email)
        if(!user) throw new Error('Autentication failed')
        if(user.password !== input.password)throw new Error('Autentication failed')
        return{
            name: user.name,
            token:'123456'
        }
    }
}