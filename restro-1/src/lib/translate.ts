import {translate} from '@vitalets/google-translate-api';

async function translateText(text: string, targetLang: string = 'es'): Promise<string> {
  try {
    const res = await translate(text, { to: targetLang });
    return res.text;
  } catch (err) {
    console.error('Translation error:', err);
    return text;
  }
}

async function translateApiResponse(response: any, targetLang: string = 'es'): Promise<any> {
  if (Array.isArray(response)) {
    const translatedArray = await Promise.all(response.map(async (item) => {
      return await translateApiResponse(item, targetLang);
    }));
    return translatedArray;
  } else if (typeof response === 'object' && response !== null) {
    const translatedObject: any = {};
    for (let key in response) {
      if (key === 'path' || key === 'tagName') {
        translatedObject[key] = response[key];
      } else if (typeof response[key] === 'string') {
        translatedObject[key] = await translateText(response[key], targetLang);
      } else {
        translatedObject[key] = await translateApiResponse(response[key], targetLang);
      }
    }
    return translatedObject;
  } else {
    return response;
  }
}

export { translateApiResponse };
