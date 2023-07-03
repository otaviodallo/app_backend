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
    name: 'John Doe',
    email: 'john.doe@example.com',
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
});