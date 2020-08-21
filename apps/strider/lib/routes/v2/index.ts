import jobs from './jobs';
import projects from './projects';
import account from './account';

import { Application } from 'express';

export default function (app: Application): void {
  app.use('/api/v2/jobs', jobs);
  app.use('/api/v2/projects', projects);
  app.use('/api/v2/account', account);
}
