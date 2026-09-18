const config = require('semantic-release-preconfigured-conventional-commits')

config.branches = ['main']
config.tagFormat = 'v${version}'

config.plugins.push(
  [
    '@semantic-release/exec',
    {
      prepareCmd: 'npm run export -- --output "${env.GITHUB_REPOSITORY.split(\'/\')[1]}-v${nextRelease.version}.pdf"',
    },
  ],
  [
    '@semantic-release/github',
    {
      assets: [
        {
          path: '${env.GITHUB_REPOSITORY.split(\'/\')[1]}-v${nextRelease.version}.pdf',
          label: 'PDF slides v${nextRelease.version}',
        },
      ],
    },
  ],
)

module.exports = config
