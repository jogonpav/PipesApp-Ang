import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'uppercasecustom'
})
export class UppercasePipe implements PipeTransform{

    transform( value: string, isUpperCase: boolean = true): string {
        return (isUpperCase) ? value.toUpperCase() : value.toLowerCase(); 
    }
}