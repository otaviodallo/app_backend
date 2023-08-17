import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from '../product.service';
import { PrismaService } from '../../prisma/prisma.service'

type CreateProductDto = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  image: string;
  price: string;
  idRestaurant: number;
};

const product = {
  id: 1,
  name: "Tea",
  description: "250ml",
  quantity: 5,
  image: "tea.jpg",
  price: 2.50,
  idRestaurant: 1
}

describe('ProductService', () => {
  let productService: ProductService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService, PrismaService],
    }).compile();
    productService = module.get<ProductService>(ProductService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  const createProductInput = {
    name: "Coffe",
    description: "250ml",
    quantity: 2,
    image: "coffe.jpg",
    price: 3.50,
    idRestaurant: 1
  };

  describe('create', () => {
    it('should create a product with the provided data', async () => {
      const createdProduct = { id: 1, ...createProductInput };
      jest.spyOn(prismaService.product, 'create').mockResolvedValue(createdProduct)
      const result = await productService.create(createProductInput)
      expect(prismaService.product.create).toHaveBeenCalledWith(expect.objectContaining({ data: expect.objectContaining(createProductInput) }))
      expect(result).toEqual(createdProduct);
    })
  })

  describe('findAll', () => {
    const products = [
      {
        id: 1,
        name: "Tea",
        description: "250ml",
        quantity: 5,
        image: "tea.jpg",
        price: 2.50,
        idRestaurant: 1
      },
      {
        id: 2,
        name: "Coffe",
        description: "250ml",
        quantity: 2,
        image: "coffe.jpg",
        price: 3.50,
        idRestaurant: 1
      }
    ]
    it('should return all the object products', async () => {
      const findAll = jest.spyOn(prismaService.product, 'findMany').mockResolvedValue(products)
      const result = await productService.findAll()
      expect(findAll).toHaveBeenCalled()
      expect(result).toEqual(products)
    })
  })

  describe('findOne', () => {
    it('should return the user with specified id', async () => {
      const findUnique = jest.spyOn(prismaService.product, 'findUnique').mockResolvedValue(product)
      const id = 1
      const result = await productService.findOne(id)
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { id } }))
      expect(result).toEqual(product);
    })
    it('should return null if no user with specified id is found', async () => {
      const findUnique = jest.spyOn(prismaService.product, 'findUnique').mockResolvedValue(null)
      const id = 93
      const result = await productService.findOne(id)
      expect(findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { id } }))
      expect(result).toBeNull()
    })
  })

  describe('update', () => {
    const newProduct = {
      id: 1,
      name: "Tea",
      description: "250ml",
      quantity: 5,
      image: "tea.jpg",
      price: 5.50,
      idRestaurant: 1
    }
    it('should return the product updated', async () => {
      const update = jest.spyOn(prismaService.product, 'update').mockResolvedValue(newProduct)
      const id = 1
      const result = await productService.update(id, newProduct)
      expect(update).toHaveBeenCalledWith(expect.objectContaining({ where: { id } }))
      expect(result).toEqual(newProduct)
    })
    it('should return the product without changes if the id is nonexistent', async () => {
      const update = jest.spyOn(prismaService.product, 'update').mockResolvedValue(newProduct)
      const id = 0
      const result = await productService.update(id, newProduct)
      expect(update).toHaveBeenCalledWith(expect.objectContaining({ where: { id } }))
      expect(result).toEqual(newProduct)
    })
  })
})
