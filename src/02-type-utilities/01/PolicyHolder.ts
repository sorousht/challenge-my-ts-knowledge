export interface PolicyHolder {
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