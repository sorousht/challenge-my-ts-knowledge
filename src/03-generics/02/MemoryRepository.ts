import { Identity } from "./Identity";
import { Repository } from "./Repository";
import { uniqueId } from "./uniqueId";

export class MemoryRepository<T extends Identity> implements Repository<T> {
  constructor(items: [string, T][] = []) {
    this.items = new Map(items);
  }
  private readonly items: Map<string, T>;
  findById = (id: string): T | undefined => {
    return this.items.get(id);
  }
  add = (value: Omit<T, 'id'>): T => {
    const id = uniqueId();
    const item = { ...value, id } as T;
    this.items.set(id, item);

    return item;
  }
  /*
    2. FIXME
    Once you added the definition of "update" and "removeById" to Repository interface,
    try to implement those two methods here according to the interface, only throwing an error,
    like the following example that is the very first stupid implementation of method "add":

    add = (item: Omit<T, 'id'>): T => {
      throw new Error("Method not implemented.");
    }

    Find the 3rd FIXME and follow the instruction
  */

  save = async (): Promise<void> => {
    // This is an in-memory repository, no need to implement this method then!
  }
}