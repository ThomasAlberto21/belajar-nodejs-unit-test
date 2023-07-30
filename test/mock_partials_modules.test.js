import { getAllProduct, getProductById } from '../src/database.js';
import { ProductService } from '../src/product_service.js';

jest.mock('../src/database.js', () => {
  const originalModule = jest.requireActual('../src/database.js');

  return {
    __esModule: true,
    ...originalModule,
    getAllProduct: jest.fn(),
  };
});

test.failing('Mock modules getProductById', () => {
  ProductService.findById(1);
});

test('Mock modules getAllProduct', () => {
  const products = [
    {
      id: 1,
      name: 'Mock Product 1',
    },
    {
      id: 2,
      name: 'Mock Product 2',
    },
  ];

  getAllProduct.mockReturnValue(products);
  expect(ProductService.findAll()).toEqual(products);
});
