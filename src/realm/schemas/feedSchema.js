import {Realm} from '@realm/react';
export class Feeds extends Realm.Object {
  static generate({username, photo, caption, userId}) {
    return {
      _id: new Realm.BSON.ObjectId(),
      createdAt: new Date(),
      username,
      photo,
      caption,
      comment: 0,
      likes: 0,
      userId: userId || '_SYNC_DISABLED_',
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'feeds',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      username: 'string',
      createdAt: 'date',
      photo: 'string',
      likes: 'int',
      caption: 'string',
      comment: 'int',
    },
  };
}
