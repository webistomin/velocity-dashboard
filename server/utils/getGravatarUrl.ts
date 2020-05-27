export const getGravatarUrl = (emailHash: string, size: number = 140) => {
  return `https://www.gravatar.com/avatar/${emailHash}?s=${size}`;
};
