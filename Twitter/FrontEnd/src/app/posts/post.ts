import { User } from '../users/user';

export class Post {
  idPost: number;
  message: string;
  published_date: string;
  user: User;
}
