type GeneralProductDetails = {
  okz: string;
  hsn: string;
  tsn: string;
  marke: string;
  model: string;
  leistung: string;
  preis: string;
  verkaufsbezeichnung: string;
  firstRegistration: Date;
  mileagePerYear: number;
  insuranceCoverage: 'h' | 'ht' | 'hv';
  costSharingTK: '0' | '150' | '300' | '500' | '1000';
  costSharingVK: '0' | '150' | '300' | '500' | '1000' | '2500';
}

type PrefixKey<Key, Prefix extends string> = Key extends `${infer Value}` 
  ? `${Prefix}_${Value}`
  : never;

type PkwProductDetails = {
	[K in keyof GeneralProductDetails as PrefixKey<K, 'pkw'>]: GeneralProductDetails[K]
};

/*
  FIXME

  Define an object with type "PkwProductDetails". Add some props and see how TS compiler
  helps you with defining the key and the type of its value.

  const pkwProductDetails: PkwProductDetails = { ... };

  Your challenge is understanding what happened here. What is keyword `infer`?
  Could you teach someone this recently released feature of TS?

  Check out the below reference:
  https://mariusschulz.com/blog/conditional-types-in-typescript#type-inference-in-conditional-types
*/