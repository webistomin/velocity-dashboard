module.exports = {
  '*.{js,ts,tsx,vue}': ['npm run lint:write', 'npm run prettier:write', 'git add'],
};
