import { getAllProduct, getProductById } from '../src/database.js';
import { ProductService } from '../src/product_service.js';

jest.mock('../src/database.js');

test('Mock modules getProductById', () => {
  getProductById.mockImplementation((id) => {
    return { id: id, name: 'Mock Product' };
  });

  const product = ProductService.findById(1);
  expect(product).toEqual({ id: 1, name: 'Mock Product' });
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
