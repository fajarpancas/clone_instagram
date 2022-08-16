import {Realm} from '@realm/react';
export class Chats extends Realm.Object {
  static generate({username, text, userId}) {
    return {
      _id: new Realm.BSON.ObjectId(),
      createdAt: new Date(),
      username,
      text,
      userId: userId || '_SYNC_DISABLED_',
      isDeleted: false,
      isEdit: false,
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'chats',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      username: 'string',
      createdAt: 'date',
      text: 'string',
      userId: 'string',
      isDeleted: 'bool',
      isEdit: 'bool',
    },
  };
}
