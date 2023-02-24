// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Helpers } = initSchema(schema);

export {
  Helpers
};