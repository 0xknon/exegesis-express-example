import 'module-alias/register';
import express from 'express';

import { createApp } from 'src';
import logger from 'src/utils/logger';

/**
 * Global Promise rejection & uncaught expection handler
 */
process.on('unhandledRejection', error => {
  console.log(error);
  logger.error('unhandledRejection', error);
});

export default (async () => {
  const app = express();
  const api = await createApp();

  app.use('/', api);

  const port = process.env.PORT || '3000';

  app.listen(port, () => {
    logger.info(`Listening on ${port}`);
  });

  /**
   * Event listener for HTTP server "error" event.
   */
})();
