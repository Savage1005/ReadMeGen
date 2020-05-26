function generateMarkdown(data) {
  return `
# ${data.title}
![Badge](https://img.shields.io/badge/LICENSE-${data.license}-<GREEN>)
## Description
${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Test](#tests)

*[Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${data.install}

## Usage

${data.repo}

## License

${data.license}

## Contributing

${data.contribute}

## Tests

To run a test please type the following command:

${data.tests}

## Questions

If you have any questions,contact me at ${data.email} or visit my github: github.com/${data.username}

`;
}

module.exports = generateMarkdown;
