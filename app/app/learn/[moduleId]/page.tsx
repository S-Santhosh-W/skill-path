import Workspace from '@/src/components/workspace';
export default async function Page({params}:{params:Promise<{moduleId:string}>}){const {moduleId}=await params;return <Workspace screen="learn" learningModuleId={moduleId}/>}
