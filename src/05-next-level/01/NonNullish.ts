/*
  This type strips out null and undefined from T 
  Checkout README.md for more info
*/
export type NonNullish<T> = T extends null | undefined ? never : T;

