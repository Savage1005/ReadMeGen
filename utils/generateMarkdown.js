function generateMarkdown(data) {
  return `
# ${data.title}

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

If you have any questions,contact me at ${data.email} or visit my github: ${data.username}



`;
}

module.exports = generateMarkdown;
