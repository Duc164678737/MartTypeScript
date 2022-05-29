import React from 'react'
type TUser = {
    User: {
        id: number,
        name: string,
        password: string,
        passwordAuthentication: string,
    }[]
}
const LoginUser: TUser['User'] = [
    {
        id: 0,
        name: "12",
        password: "123456",
        passwordAuthentication: "123456",
    },
    {
        id: 1,
        name: "123",
        password: "123456",
        passwordAuthentication: "123456",
    },
     {
        id: 2,
        name: "1234",
        password: "123456",
        passwordAuthentication: "123456",
    },
     {
        id: 3,
        name: "12345",
        password: "123456",
        passwordAuthentication: "123456",
    },
     {
        id: 4,
        name: "123456",
        password: "123456",
        passwordAuthentication: "123456",
    },
]

export default LoginUser

