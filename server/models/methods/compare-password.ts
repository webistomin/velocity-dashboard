import bcrypt from 'bcrypt';

export default async function (password: string): Promise<Boolean> {
  const user = this;
  const match = await bcrypt.compare(password, user.password);
  return match;
}
