type BusinessPartner = {
  credit: number;
  field: 'education' | 'sales' | 'engineering';
}

type Identity = {
  id: string;
  name: string;
}

type Contact = {
  email: string;
  phone: string;
}

export type Employee = Identity & Contact;
export type Customer = Identity & Contact & BusinessPartner; 