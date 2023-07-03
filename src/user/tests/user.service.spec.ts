import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { PrismaService } from '../../prisma/prisma.service'
type CreateUserInputDto = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  cnpj: string;
  image: string;
  balance: number;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
};

describe('UserService', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
  });
  const createUserInput = {
    name: 'Otávio Costa Dallo',
    email: 'ocostadallo@gmail.com',
    cpf: '12345678900',
    cnpj: '',
    image: 'path/to/image',
    password: 'password123',
  };

  describe('create', () => {
    it('should create a user with the provided data', async () => {
      const create = prismaService.user.create;
      const createdUser = { id: 1, ...createUserInput };
      jest
        .spyOn(prismaService.user, 'create')
        .mockResolvedValue(createdUser as CreateUserInputDto);

      const result = await userService.create(createUserInput);

      expect(prismaService.user.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining(createUserInput) })
      );
      expect(result).toEqual(createdUser);
    });
  });

  describe('findAll', () => {
    const users = [
      {
        id: 1,
        name: 'Otávio Costa Dallo',
        email: 'ocostadallo@gmail.com',
        cpf: '12345678900',
        cnpj: '',
        image: 'path/to/image',
        balance: 0,
        password: 'password123',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Carl Peter',
        email: 'carl.peter@example.com',
        cpf: '10843669971',
        cnpj: '',
        image: 'path/to/image',
        balance: 0,
        password: 'password123',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    it('should return all the object users', async () => {
      const findAll = jest.spyOn(prismaService.user, 'findMany').mockResolvedValue(users);
      const result = await userService.findAll();
      expect(findAll).toHaveBeenCalled();
      expect(result).toEqual(users);
    })
  })

  describe('find', () => {
    it('should return the user with the specified email', async () => {
      const findUnique = jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(createUserInput as CreateUserInputDto);
      const email = 'ocostadallo@gmail.com';
      const result = await userService.find(email);
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { email } }));
      expect(result).toEqual(createUserInput);
    });
  
    it('should return null if no user is found with the specified email', async () => {
      const findUnique = jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);
      const email = 'nonexistent@example.com';
      const result = await userService.find(email);
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { email } }));
      expect(result).toBeNull();
    });
  })

  describe('findCpf', () => {
    it('should return the user with the specified cpf', async () => {
      const findUnique = jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(createUserInput as CreateUserInputDto);
      const cpf = '12345678900';
      const result = await userService.findCpf(cpf);
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { cpf } }));
      expect(result).toEqual(createUserInput);
    });
  
    it('should return null if no user is found with the specified cpf', async () => {
      const findUnique = jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);
      const cpf = '99999999900';
      const result = await userService.findCpf(cpf);
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { cpf } }));
      expect(result).toBeNull();
    });
  })

  describe('findCnpj', () => {
    it('should return the user with the specified cnpj', async () => {
      const findUnique = jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(createUserInput as CreateUserInputDto);
      const cnpj = '1234567890001';
      const result = await userService.findCnpj(cnpj);
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { cnpj } }));
      expect(result).toEqual(createUserInput);
    });
  
    it('should return null if no user is found with the specified cnpj', async () => {
      const findUnique = jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);
      const cnpj = '9999999990000';
      const result = await userService.findCnpj(cnpj);
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { cnpj } }));
      expect(result).toBeNull();
    });
  })

  describe('findId', () => {
    it('should return the user with the specified id', async () => {
      const findUnique = jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(createUserInput as CreateUserInputDto);
      const id = 1;
      const result = await userService.findOne(id);
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { id } }));
      expect(result).toEqual(createUserInput);
    });
  
    it('should return null if no user is found with the specified id', async () => {
      const findUnique = jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);
      const id = 99;
      const result = await userService.findOne(id);
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { id } }));
      expect(result).toBeNull();
    });
  })
});