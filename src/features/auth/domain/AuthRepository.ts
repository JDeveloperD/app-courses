export interface AuthRepository {
  signIn ({ email, password }:{ email: string, password: string }): void
}
