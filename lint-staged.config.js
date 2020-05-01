module.exports = {
  '*.{js,ts,vue}': ['npm run lint:write', 'npm run prettier:write', 'git add'],
};
