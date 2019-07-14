/* CUSTOM CONFIG FILE */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      target: 'serverless'
      /* development only config options here */
    };
  }

  return {
    target: 'serverless',
    distDir: 'build'
    /* config options for all phases except development here */
  };
};