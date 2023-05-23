export async function acceptAllCookies() {
    // Extract the domain from the current page URL
    const currentUrl = await browser.getUrl();
    const domain = new URL(currentUrl).hostname;

    // Set the cookie for the extracted domain
    const cookie = {
        name: 'cookiesName',
        value: new Date().toISOString(),
        domain: domain,
        path: '/',
    };

    await browser.setCookies([cookie]);
}
