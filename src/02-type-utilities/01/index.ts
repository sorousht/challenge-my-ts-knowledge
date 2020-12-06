import { PolicyHolder } from './PolicyHolder';
/*
  Here you need to define a type for a function.
  Hey, hold on! for a function?
  Yep! Instead of defining types for both arguments and returning value,
  You can define the type and specify the type when you declare the function!
  Wow!
  Your mind is blown? Relax, there is still a lot to come!
*/
type FormatAddress = /* FIXME */;

export const formatAddress: FormatAddress = ({ streetNumber, streetName, areaCode, cityName }) =>
  `${streetName} ${streetNumber}\n${areaCode}, ${cityName}`;

type GetPolicyHolderFullName = /* FIXME */;

export const getPolicyHolderFullName: GetPolicyHolderFullName = ({ firstname, lastname }) => `${firstname} ${lastname}`;
