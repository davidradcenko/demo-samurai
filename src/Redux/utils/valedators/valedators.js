export const requiredField=(value)=>{
    if(value) return undefined;
    return "Field is required"
}


// export const maxlength30=(value)=>{
//     if(value.length<=30) return "max length 30";
//     return undefined
// }
// или использовать замыкание что если нам надо не 30 а 50
export const maxlengthCreator=(maxLength)=>(value)=>{
    
    if(value.length>maxLength) return `max length is  ${maxLength}} symbols`;
    return undefined
}   