import { User } from "src/user/entities/user.entity";

export const fakeUser: User = {
    id: 123,
    name: 'fakeName',
    email: 'fakeEmail',
    cpf: '12345678900',
    cnpj: '',
    password: 'fakePassword',
    createdAt: new Date(),
    updatedAt: new Date()
}