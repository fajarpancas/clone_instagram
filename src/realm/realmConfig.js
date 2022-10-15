import {createRealmContext} from '@realm/react';
import {Chats, Feeds} from './schemas';

export const FeedRealmContext = createRealmContext({
  schema: [Feeds, Chats],
  schemaVersion: 6
});
