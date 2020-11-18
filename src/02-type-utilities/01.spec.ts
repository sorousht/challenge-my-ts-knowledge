interface PolicyHolder {
  gender: 'male' | 'female';
  firstname: string;
  lastname: string;
  birthday: Date;
  email: string;
  userId: number;
  address: {
    streetNumber: string;
    streetName: string;
    cityName: string;
    areaCode: string;
  };
};

type FormatAddress = /* FIXME: Define the type */;

const formatAddress: FormatAddress = ({ streetNumber, streetName, areaCode, cityName }) =>
  `${streetName} ${streetNumber}\n${areaCode}, ${cityName}`;

type GetPolicyHolderFullName = /* FIXME: Define the type */;

const getPolicyHolderFullName: GetPolicyHolderFullName = ({ firstname, lastname }) => `${firstname} ${lastname}`;

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