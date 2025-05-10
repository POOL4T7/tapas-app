module.exports = {
  apps: [
    {
      name: 'admin',
      cwd: './tapas-admin',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
    {
      name: 'restro-1',
      cwd: './restro-1',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        PORT: 3001,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
  ],
};
