import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'mayus'
})
export class MayusculaPipe implements PipeTransform {
    transform(value: string, enMayus:boolean = true):string {
        return ( enMayus ) ? value.toUpperCase() : value.toLowerCase();
    }
}