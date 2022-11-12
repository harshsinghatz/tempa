const TOKENS={
  HASH:{
    type:"Hash",
    value:"#",
  },
  LETTER(letter:string):Token{
    return (
      {
        type:"Letter",
        value:letter
      }
    )
  },
  HEADING(heading:string,count:number):Token{
    return {
      type:`Heading-${count+1}`,
      value: heading
    }
  },
  PARAGRAPH(paragraph:string):Token{
    return {
      type:"Paragraph",
      value:paragraph
    }
  },
  QUOTE(quote:string):Token{
    return{
      type:"Quote",
      value: quote
    }
  }
}

export default TOKENS;


export interface Token{
  type:string;
  value:string;
}