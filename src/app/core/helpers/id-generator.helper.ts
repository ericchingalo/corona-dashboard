export function generateId(): string {
  let id = '';
  const idLength = 11;
  const randomAlphaNumeric =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let index = 0; index < idLength; index++) {
    id += randomAlphaNumeric.charAt(
      Math.floor(Math.random() * randomAlphaNumeric.length)
    );
  }
  return id;
}
