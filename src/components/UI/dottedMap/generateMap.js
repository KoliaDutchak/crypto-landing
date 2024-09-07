const fs = require('fs');
const getMapJSON = require('dotted-map').getMapJSON;

const mapJsonString = getMapJSON({ height: 60, grid: 'diagonal' });
const filePath = './src/MyMap.json';

fs.writeFileSync(filePath, mapJsonString);
console.log(`Map JSON saved to ${filePath}`);