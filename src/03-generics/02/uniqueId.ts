import { v4 as uuid } from 'uuid';

export const uniqueId = () => uuid().toString();