import { Schema, Document } from 'mongoose';

export const mongoosePropertyConverter = (schema: Schema): void => {
  schema.set('toJSON', {
    transform: function (_, ret: Document<{ _id: Schema.Types.ObjectId }>) {
      const { _id, ...object } = ret;
      object.id = _id;
      return object;
    },
  });
};
