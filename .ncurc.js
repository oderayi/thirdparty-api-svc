
module.exports = {
  reject: [
    // Upgrading to husky@8 to involves a full config migration with no current and apparent benefit.
    // So we are just sticking to husky@6.x.x for the time being.
    'husky',
    // Upgrading past jest|ts-jest|@types/jest@26 introduces a lot of breaking changes to current tests.
    'jest',
    'ts-jest',
    '@types/jest',
    // Upgrading past commander@7 introduces a lot of breaking changes.
    'commander'
  ]
}
