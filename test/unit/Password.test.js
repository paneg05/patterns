const Password = require('./../../src/domain/password')

test('deve criar uma senha',async ()=>{
    const password = await Password.create('12345678','salt')
    expect(password).toBe('f1fa680348802c16e610e0afa109ef9fd2ea21001bf0449ea4372229cee93a13c3eb08a30068a92b82d376d195f5ed4bebfd9b51413a0ae23dbb38da9141a4b4')
})