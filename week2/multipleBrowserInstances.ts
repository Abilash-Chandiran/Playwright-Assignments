// RedBus in Edge and Flipkart in WebKit
import { chromium, webkit, Browser, Page } from '@playwright/test';

async function launchBrowsers(): Promise<void> {

    let edgeBrowser: Browser | undefined;
    let webkitBrowser: Browser | undefined;

    try {

        // Launch Microsoft Edge
        edgeBrowser = await chromium.launch({
            channel: 'msedge',
            headless: false
        });

        // Create Edge page
        const edgePage: Page = await edgeBrowser.newPage();

        // Navigate to RedBus
        await edgePage.goto('https://www.redbus.in');

        console.log('===== REDBUS - EDGE BROWSER =====');
        console.log('Page Title:', await edgePage.title());
        console.log('Current URL:', edgePage.url());


        // Launch WebKit
        webkitBrowser = await webkit.launch({
            headless: false
        });

        // Create WebKit page
        const webkitPage: Page = await webkitBrowser.newPage();

        // Navigate to Flipkart
        await webkitPage.goto('https://www.flipkart.com');

        console.log('\n===== FLIPKART - WEBKIT BROWSER =====');
        console.log('Page Title:', await webkitPage.title());
        console.log('Current URL:', webkitPage.url());

    } catch (error) {

        console.error('Error occurred:', error);

    } finally {

        // Close browser instances
        if (edgeBrowser) {
            await edgeBrowser.close();
        }

        if (webkitBrowser) {
            await webkitBrowser.close();
        }
    }
}

launchBrowsers();