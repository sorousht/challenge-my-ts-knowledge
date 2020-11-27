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

/*
  Here you need to define a type for a function.
  Hey, hold on! for a function?
  Yep! Instead of defining types for both arguments and returning value,
  You can define the type and specify the type when you declare the function!
  Wow!
  Your mind is blown? Relax, there is still a lot to come!
*/
type FormatAddress = /* FIXME */;

const formatAddress: FormatAddress = ({ streetNumber, streetName, areaCode, cityName }) =>
  `${streetName} ${streetNumber}\n${areaCode}, ${cityName}`;

type GetPolicyHolderFullName = /* FIXME */;

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