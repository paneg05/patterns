const User = require("../../domain/entity/User") 

module.exports = class Signup {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(input) {
     
      
      const user = await User.create(input.name, input.email, input.password, input.age);
      await this.userRepository.save(user);
    }
  }