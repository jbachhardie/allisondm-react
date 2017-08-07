import { createClient } from 'contentful';
import { previewAccessToken } from '../secrets';

const client = createClient({
  space: 'y7h4ws975ch7',
  accessToken: previewAccessToken,
  host: 'preview.contentful.com'
});

export default client;
