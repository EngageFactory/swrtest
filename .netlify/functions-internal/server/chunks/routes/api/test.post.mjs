import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import '@netlify/functions';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';

const test_post = defineEventHandler(async (event) => {
  return {
    message: "Hello World!"
  };
});

export { test_post as default };
//# sourceMappingURL=test.post.mjs.map
