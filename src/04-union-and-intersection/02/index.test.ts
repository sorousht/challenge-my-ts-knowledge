import { enroll } from './index';
import { Customer, Employee } from './types';
import { customers, employees } from './book';

describe('enroll', () => {
  beforeEach(() => {
    customers.clear();
    employees.clear();
  });
  test('enroll a customer in customer section', () => {
    const customer: Customer = {
      credit: 0,
      email: 'john.doe@email.com',
      field: 'education',
      id: '1',
      name: 'John Doe',
      phone: '123',
    };

    enroll(customer);

    expect(customers.size).toBe(1);
    expect(employees.size).toBe(0);
  });

  test('enroll an employee in employee section', () => {
    const employee: Employee = {
      email: 'john.doe@email.com',
      id: '1',
      name: 'John Doe',
      phone: '123',
    };

    enroll(employee);

    expect(employees.size).toBe(1);
    expect(customers.size).toBe(0);
  });
});