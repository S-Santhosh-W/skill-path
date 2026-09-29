import Workspace from '@/src/components/workspace';
export default async function Page({params}:{params:Promise<{screen:string}>}){const {screen}=await params;return <Workspace screen={screen}/>}
