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
    {
      name: 'landing',
      cwd: './landing',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        PORT: 3002,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
    },
    {
      name: 'charlie-admin',
      cwd: './charlie-admin',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        PORT: 3003,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3003,
      },
    },
    {
      name: 'charlie-restro',
      cwd: './charlie-restro',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        PORT: 3004,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3004,
      },
    },
    {
      name: 'postdamer-restro',
      cwd: './postdamer-restro',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        PORT: 3005,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3005,
      },
    },
  ],
};
