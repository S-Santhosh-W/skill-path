import {ta} from './messages';
import {coreMessages} from './core-messages';
import {regionalMessages} from './regional-messages';
export function translate(locale:string,text:string){if(locale==='en')return text;return coreMessages[locale]?.[text]||regionalMessages[locale]?.[text]||(locale==='ta'?ta[text]:undefined)||text}
