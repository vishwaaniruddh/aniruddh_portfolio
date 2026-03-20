// Screenshot capture script using Puppeteer
// Install: npm install puppeteer
// Run: node scripts/capture-screenshots.js

const puppeteer = require('puppeteer');
const path = require('path');

const websites = [
  {
    url: 'https://srishringarr.com/',
    filename: 'srishringarr.png',
    name: 'Sri Shringarr Fashion Studio'
  },
  {
    url: 'https://yosshitaneha.com/',
    filename: 'yosshitaneha.png',
    name: 'Yosshita Neha Fashion Studio'
  },
  {
    url: 'https://www.cymetrixsoft.com/',
    filename: 'cymetrix.png',
    name: 'Cymetrix Software'
  },
  {
    url: 'https://singularitycredit.com/',
    filename: 'singularity.png',
    name: 'Singularity Credit'
  },
  {
    url: 'https://www.eastspring.com/',
    filename: 'eastspring.png',
    name: 'Eastspring Investments'
  },
  {
    url: 'https://clinicsoncloud.com/',
    filename: 'clinicsoncloud.png',
    name: 'Clinics On Cloud'
  },
  {
    url: 'https://www.abvfxstudios.com/',
    filename: 'abvfx.png',
    name: 'AB VFX Studios'
  },
  {
    url: 'https://aniruddh.kesug.com/',
    filename: 'crm-portal.png',
    name: 'Project Management Portal'
  },
  {
    url: 'https://sarsspl.com/css/dash/esir/',
    filename: 'atm_monitoring.png',
    name: 'ATM Monitoring System'
  }
];

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });

  for (const site of websites) {
    try {
      console.log(`Capturing ${site.name}...`);
      const page = await browser.newPage();
      
      await page.goto(site.url, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      // Wait a bit for animations
      await new Promise(resolve => setTimeout(resolve, 2000));

      const outputPath = path.join(__dirname, '..', 'public', 'projects', site.filename);
      
      await page.screenshot({
        path: outputPath,
        fullPage: false, // Only capture above the fold
        type: 'png'
      });

      console.log(`✓ Saved: ${site.filename}`);
      await page.close();
    } catch (error) {
      console.error(`✗ Failed to capture ${site.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('\nScreenshot capture complete!');
}

captureScreenshots().catch(console.error);
