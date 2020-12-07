import { NonNullish } from "./NonNullish";

type ZipCode = number | string | undefined | null;

/*
  FIXME
  
  Checkout the type of arg "zipCode". As you noticed,
  neither null nor undefined is allowed. Therefore,
  it accepts only number or string. Make the tests green.
*/
export const formatZipCode = (zipCode: NonNullish<ZipCode>): string => {
  throw Error('Not implemented yet!')
}