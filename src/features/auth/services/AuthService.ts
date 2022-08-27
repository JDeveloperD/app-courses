import { AuthRepository } from '@features/auth/domain';
export default class AuthService implements AuthRepository {
  signIn({ email, password }: { email: string; password: string; }) {

  };
}
