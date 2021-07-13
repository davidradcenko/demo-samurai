 
 export const   updateObjectInArray=(items,itemId,odjPropName,newodjectProps)=>{
     
    return items.map(  u =>{
    if(u[odjPropName]===itemId){
    return{ ...u, ...newodjectProps}
    }
    return u;
    } )}