// Curried function 
const curriedFunc=(regex:RegExp)=>{
  return (str:string)=>regex.test(str);
}

export const isHash=curriedFunc(/[#]/);

export const isWhiteSpace=curriedFunc(/[" "]/);

export const isLetter=curriedFunc(/[a-zA-Z]/);

export const isNewLine=curriedFunc(/\n/);

export const isNumber= curriedFunc(/[0-9]/);