/** Provider contract: server-only adapter. No AI credential is delivered to the browser. */
export type SkillObservation={kind:'skill'|'interest'|'language';value:string;level?:number};
export type CallAnalysis={summary:string;suggestions:SkillObservation[]};
export type AIRequest={language?:'en'|'ta';message?:string;careerId?:string};
export type AIResponse<T>={mode:'mock'|'remote';offline?:boolean;data:T};
