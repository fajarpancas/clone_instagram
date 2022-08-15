import {createRealmContext} from '@realm/react';
import {Feeds} from './schemas';

export const FeedRealmContext = createRealmContext({
  schema: [Feeds],
  schemaVersion: 1,
});
