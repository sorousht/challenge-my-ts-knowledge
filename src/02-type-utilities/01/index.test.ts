import { formatAddress, getPolicyHolderFullName } from './index';

describe('formatAddress', () => {
  it('should format the address properly', () => {
    const address = {
      streetNumber: '9',
      streetName: 'Klarastr.',
      cityName: 'Munich',
      areaCode: '80636',
    };

    const expected = `Klarastr. 9\n80636, Munich`;    

    expect(formatAddress(address)).toBe(expected);
  });
});

describe('getPolicyHolderFullName', () => {
  it('should glue first name and last name together', () => {
    const policyHolder = {
      firstname: 'John',
      lastname: 'Doe',
    };

    const expected = 'John Doe';

    expect(getPolicyHolderFullName(policyHolder)).toBe(expected);
  })
});