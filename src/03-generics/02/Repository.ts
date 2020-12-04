import { Identity } from "./Identity";

export interface Repository<T extends Identity> {
  findById(id: string): T | undefined;
  add(value: Omit<T, 'id'>): T;
  /*
    1. FIXME
    Hope you have warmed up enough because this is a real deal!
    Add the definition of "removeById" and "update"
  */
  save(): Promise<void>;
}