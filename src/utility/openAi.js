import OpenAI from 'openai';
import { OPEN_AI_SECRET_KEY } from '../constants/constants';

const openai = new OpenAI({
  apiKey: OPEN_AI_SECRET_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai