import tokenize from '../src/tokenize';
import {Token} from '../utils/token';

describe(tokenize,()=>{
  it("Returns headings",()=>{
    const input =`
    # Harsh 1
    ## Harsh 2
    ### Harsh 3
  `;
    const res:Token[] = [
      {
        type:"Heading-1",
        value:" Harsh 1"
      },
      {
        type:"Heading-2",
        value:" Harsh 2"
      },
      {
        type:"Heading-3",
        value:" Harsh 3"
      }
    ];

    expect(tokenize(input)).toEqual(res);
  })

  it("Returns paragraph",()=>{
    const input =`
    # Harsh 1
    ## Harsh 2
    ### Harsh 3

    This is a paragraph 123
  `;
    const res:Token[] = [
      {
        type:"Heading-1",
        value:" Harsh 1"
      },
      {
        type:"Heading-2",
        value:" Harsh 2"
      },
      {
        type:"Heading-3",
        value:" Harsh 3"
      }
      ,{
        type:"Paragraph",
        value:"This is a paragraph 123"
      }
    ];

    expect(tokenize(input)).toEqual(res);
  })

  it("Tokenize block quotes",()=>{
    const input =` 
    # Harsh 1
    ## Harsh 2
    ### Harsh 3

    This is a paragraph 123
      > blockquote
    `;
    
    const res:Token[] = [
      {
        type:"Heading-1",
        value:" Harsh 1"
      },
      {
        type:"Heading-2",
        value:" Harsh 2"
      },
      {
        type:"Heading-3",
        value:" Harsh 3"
      }
      ,{
        type:"Paragraph",
        value:"This is a paragraph 123"
      },
      {
        type:"Quote",
        value:" blockquote"
      }
    ];

    expect(tokenize(input)).toEqual(res);
  })

})