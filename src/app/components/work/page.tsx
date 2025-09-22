import AssistantPage from './assistantPage'

export default async function Work(){
    await new Promise(res=>{
        setTimeout(()=>{
            res("delay.....")
        },1500)
    })
    return(
        <AssistantPage />
    );
}