const userRepository = require('./../../../userRepository');

const User = require("../../../../../domain/entity/User") ;

module.exports= class UserRepositoryMemory {
    cosntructor (){
        this.users=[]
    }

    async save(user){
        this.users.push(user)
    }

    async getByEmail(email){
        return this.users.find((user)=>user.email===email)
    }
}