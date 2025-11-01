# Laravel Forge Deployment Setup for Next.js

## Configuration Steps

### 1. Site Configuration in Forge
- Set **App Type** to "Node.js"
- Set **Web Directory** to: `/` (root)
- Set **Node Version** to: `20.x` or `18.x`

### 2. Environment Variables
Add these to your Forge site's Environment Variables:
```
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_API_BASE=https://your-api-domain.com/api
```

### 3. Deployment Script
In Forge, set the **Deploy Script** to:
```bash
cd /home/forge/your-site-name
git pull origin main
npm ci
npm run build
```

### 4. Daemon Configuration
Configure a Daemon in Forge with:
- **Command**: `npm start`
- **Directory**: `/home/forge/your-site-name`
- **User**: `forge`

Or if using PM2:
- **Command**: `pm2 start ecosystem.config.js`
- **Directory**: `/home/forge/your-site-name`

### 5. Nginx Configuration (if needed)
Forge should auto-configure Nginx, but ensure it proxies to:
```
proxy_pass http://127.0.0.1:3000;
```

### 6. After Deployment
1. Make sure the Daemon is running
2. Check logs in Forge for any errors
3. Verify the app is listening on port 3000 (or your configured PORT)

## Troubleshooting "Cannot GET" Error

1. **Check if the app is running**: Look at Daemon status in Forge
2. **Check port configuration**: Ensure PORT environment variable matches Nginx proxy
3. **Check build output**: Ensure `npm run build` completes successfully
4. **Check Node version**: Ensure Node.js version is compatible (18.x or 20.x)
5. **Check file permissions**: Ensure all files are owned by `forge` user

