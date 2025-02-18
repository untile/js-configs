/**
 * Module dependencies. 
 */

const fetch = require('node-fetch');
const fs = require('fs/promises');

/**
 * Generate `w3c-css-properties.json` file.
 */

async function generateCSSProperties() {
  try {
    const response = await fetch('https://www.w3.org/Style/CSS/all-properties.en.json');
    const properties = await response.json();
    const content = JSON.stringify(properties, null, 2);

    await fs.writeFile('./packages/stylelint-config-react/src/w3c-css-properties.json', content);
    console.log('Successfully wrote CSS properties to file');
  } catch (error) {
    console.log('Error fetching CSS properties:', error); // eslint-disable-line no-console
    return [];
  }
}

/**
 * Run the script.
 */

generateCSSProperties();
