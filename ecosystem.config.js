module.exports = {
  apps: [{
    name: 'orca-frontend',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p ${PORT:-3000}',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: process.env.PORT || 3000,
    },
  }],
};

