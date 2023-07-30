import { UserRepository } from '../src/user-repository.js';
import { UserService } from '../src/user-service.js';

jest.mock('../src/user-repository.js');
const repository = new UserRepository();
const service = new UserService(repository);

test('Mock user save', () => {
  const user = { id: 1, name: 'John Doe' };
  service.save(user);
  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test('Mock user find by id', () => {
  const user = { id: 1, name: 'John Doe' };

  repository.findById.mockReturnValue(user);
  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test('Mock user find all', () => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: ' Doe' },
  ];

  repository.findAll.mockReturnValue(users);
  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
