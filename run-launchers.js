const Launcher = require('@wdio/cli').default;

async function runMultipleLaunchers() {
  process.env.LOCALE = 'english';
  const launcher1 = new Launcher('./wdio.conf.js');
  await launcher1.run();

  process.env.LOCALE = 'french';
  const launcher2 = new Launcher('./wdio.conf.js');
  await launcher2.run();
}

runMultipleLaunchers();