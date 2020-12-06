export type Contract = {
  _id: string;
  actionId: number;
  product: {
    key: string;
  };
  insurance: {
    key: string;
    name: string;
  };
  version: string;
  syncAt: Date;
  createdAt: Date;
  modifiedAt: Date;
};