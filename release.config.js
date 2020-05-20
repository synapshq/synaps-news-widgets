module.exports = {
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@semantic-release/npm",
      {
        "pkgRoot": "./dist/elements"
      }
    ],
    "@semantic-release/git"
  ],
  "branches": [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    'next',
    'next-major',
    {
      name: 'develop',
      channel: 'beta',
      prerelease: 'beta'
    }
  ]
};
