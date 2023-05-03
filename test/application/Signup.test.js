const UserRepository = require('../../src/application/repository/userRepository')
const  Login  = require("../../src/application/useCase/Login");
const  Signup  = require("../../src/application/useCase/Signup");

test('deve fazer o signup',async ()=>{
    const userRepository = new UserRepository()
    //given
    const signup = new Signup(userRepository)
    const inputSignup={
        name:'john doe',
        email:'john.doe@gmail.com',
        password:'12345678',
        age: 30
    }
    //when
    await signup.execute(inputSignup)
    //then
    const login = new Login(userRepository)
    const inputLogin={
        email:'john.doe@gmail.com',
        password:'12345678'
    }
    const output = await login.execute(inputLogin)
    expect(output.name).toBe('john doe')
    expect(output.token).toBe('123456')
})

test('não deve fazer o signup se a idade for menor de 18',async ()=>{
    const userRepository = new UserRepository()
    //given
    const signup = new Signup(userRepository)
    const inputSignup={
        name:'john Doe',
        email:'john.doe@gmail.com',
        password:'12345678',
        age: 17
    }
    //when
    expect(()=> signup.execute(inputSignup)).toThrow(new Error('Invalid age'))
    
    //then
    
})