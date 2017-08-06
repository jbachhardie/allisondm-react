import { createClient } from 'contentful';
import { contentfulAccessToken } from '../secrets';

const client = createClient({
  space: 'y7h4ws975ch7',
  accessToken: contentfulAccessToken
});

export default client;
