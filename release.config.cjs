const config = require('semantic-release-preconfigured-conventional-commits')

const REPO_NAME = 'slidev-template'

config.branches = ['main']
config.tagFormat = 'v${version}'

config.plugins.push(
  [
    '@semantic-release/exec',
    {
      prepareCmd: `npm run export -- --output "${REPO_NAME}-v\${nextRelease.version}.pdf"`,
    },
  ],
  [
    '@semantic-release/github',
    {
      assets: [
        {
          path: `${REPO_NAME}-v*.pdf`,
          label: 'PDF slides v${nextRelease.version}',
        },
      ],
    },
  ],
)

module.exports = config
