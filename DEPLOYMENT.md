# Deploying to Netlify

## Prerequisites
- A GitHub account
- A Netlify account (sign up at https://netlify.com)
- Your code pushed to a GitHub repository

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select your portfolio repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - These should be auto-detected from netlify.toml

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-5 minutes)
   - Your site will be live at a random Netlify URL

5. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Follow instructions to configure your domain

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Environment Variables

If you have any environment variables, add them in Netlify:
1. Go to Site settings → Environment variables
2. Add your variables
3. Redeploy the site

## Continuous Deployment

Once connected to GitHub, Netlify will automatically:
- Deploy when you push to the main branch
- Create preview deployments for pull requests
- Show build logs and errors

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Images Not Loading
- Make sure all images are in the `public` folder
- Check image paths are correct (case-sensitive)

### 404 Errors
- Next.js routing should work automatically with Netlify
- Check that netlify.toml is properly configured

## Your Site Info

After deployment, you'll get:
- **Site URL**: https://[random-name].netlify.app
- **Admin URL**: https://app.netlify.com/sites/[site-name]

You can change the site name in Site settings → General → Site details.

## Performance Tips

1. **Enable Netlify Analytics** (optional, paid)
2. **Configure caching** in netlify.toml
3. **Enable asset optimization** in Site settings → Build & deploy
4. **Use Netlify Image CDN** for faster image loading

## Support

- Netlify Docs: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/next-js/
- Community Forum: https://answers.netlify.com
