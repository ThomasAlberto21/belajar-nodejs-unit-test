import { UserRepository } from '../src/user-repository.js';
import { UserService } from '../src/user-service.js';

const repository = new UserRepository();
const service = new UserService(repository);

test('Test mock partials class findById', () => {
  const user = {
    id: 1,
    name: 'John Doe',
  };

  const findByIdMock = jest.spyOn(repository, 'findById');
  findByIdMock.mockReturnValue(user);

  expect(service.findById(1)).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test.failing('test mock partials findAll', () => {
  service.findAll();
});
