// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  let licenseLink = ''
  if (license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    licenseLink = 'For more license information please click' + '[Here!]()'
  } else if (license === 'Mozilla') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    licenseLink = 'For more license information please click' + '[Here!]()'
  } else if (license === 'Apache') {
    licenseBadge = '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    licenseLink = 'For more license information please click' + ' [Here!]()'
  } else if (license === 'None') {
    licenseBadge = ''
    licenseLink = 'No license selected'
  } 
  let licenseInfo = {
    licenseBadge: licenseBadge,
    licenseLink: licenseLink
  }
  return licenseInfo
} 

module.exports = renderLicenseBadge;


