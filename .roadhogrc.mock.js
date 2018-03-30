const fs = require('fs');
const path = require('path');

const mockDir = path.join(__dirname + '/mock');
const mockData = {};

fs.readdirSync(mockDir).forEach(function(file) {
	Object.assign(mockData, require('./mock/' + file));
});

module.exports = mockData;