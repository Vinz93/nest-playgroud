import { Document } from 'mongoose';

export interface Cat extends Document{
  name: string;
  age: number;
  breed: string;
}

