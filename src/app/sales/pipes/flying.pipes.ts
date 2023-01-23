import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'flying'
})
export class FlyingPipe implements PipeTransform {
    transform(doFlying: boolean = true ) {
        return (doFlying) ? 'flying':'not flying';
    }

}