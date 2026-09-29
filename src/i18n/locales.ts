export const locales=[{code:'en',name:'English',english:'English'},{code:'ta',name:'தமிழ்',english:'Tamil'},{code:'hi',name:'हिन्दी',english:'Hindi'},{code:'te',name:'తెలుగు',english:'Telugu'},{code:'ml',name:'മലയാളം',english:'Malayalam'},{code:'kn',name:'ಕನ್ನಡ',english:'Kannada'},{code:'bn',name:'বাংলা',english:'Bengali'},{code:'mr',name:'मराठी',english:'Marathi'},{code:'gu',name:'ગુજરાતી',english:'Gujarati'},{code:'pa',name:'ਪੰਜਾਬੀ',english:'Punjabi'},{code:'ur',name:'اردو',english:'Urdu'},{code:'or',name:'ଓଡ଼ିଆ',english:'Odia'},{code:'as',name:'অসমীয়া',english:'Assamese'}] as const;
export const localeCodes=locales.map(l=>l.code);
export type Locale=typeof locales[number]['code'];
export const validLocale=(v:string):v is Locale=>localeCodes.includes(v as Locale);
