import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";


// As all the decorators, Pipe is a function, which receives an
// object as parameter
@Pipe({

    // The name that will be used to call the Pipe at the HTML
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    // The required method for PipeTransform interface
    transform(value: string, character: string): string {

        // In this case, we're repleacing the value with an empty
        // space 
        return value.replace(character, ' ');
    }

}