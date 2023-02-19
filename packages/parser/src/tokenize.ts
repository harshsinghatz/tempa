import {isHash, isWhiteSpace,isLetter,isNewLine,isNumber,isQuote} from '../utils/identify';
import TOKENS,{Token} from '../utils/token';

const tokenize=(code:string):Token[]=>{
    let pointer=0;
    const tokens:Token[]=[];

    while(pointer<code.length){
      const char=code[pointer];
      // parse the type and value of the tokens present in the code

      // Skip newline/whitespace character
      if(isWhiteSpace(char) || isNewLine(char)){
        pointer++;
        continue;
      }

      // Tokenize the blockquote
      if(isQuote(char)){
        // Till the end of the line get the sentence

        let quote="";
        while((isLetter(code[++pointer]) || isWhiteSpace(code[pointer]) || isNumber(code[pointer])) && !(isNewLine(code[pointer]))){
          quote+=code[pointer];
        }

        tokens.push(TOKENS.QUOTE(quote));
        pointer++;
        continue;
      }

      // Tokenize the paragraph 
      if(isLetter(char) || isNumber(char)){
        let paragraph=char;
        while((isLetter(code[++pointer]) || isWhiteSpace(code[pointer]) || isNumber(code[pointer])) && !(isNewLine(code[pointer]))){
          paragraph+=code[pointer];
        }
        tokens.push(
          TOKENS.PARAGRAPH(paragraph)
        )
        pointer++;
        continue;
      }
      
      // Tokenize the headings
      if(isHash(char)){
        let count = 0;
        while (isHash(code[++pointer])){
          count++;
          if(count===3)break;
        }
        let heading="";
        while(!isNewLine(code[pointer])){
          heading+=code[pointer];
          ++pointer;
        }
        tokens.push(
          TOKENS.HEADING(heading,count)
        )
        // refactor this repeted code
        pointer++;
        continue;
      }

      // If there is an unexpected character/keyword
      throw new Error(`${char} is not an valid keyword.`);
    }

    return tokens;
}

export default tokenize;