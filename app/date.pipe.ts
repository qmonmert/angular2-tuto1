import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'myDatePipe'
})
export class DatePipe implements PipeTransform {

    transform(value:Date, args:string[]) : any {
        let date = value.getDate() + '/' + value.getMonth() + '/' + value.getFullYear();
        let msg = '';
        if (args[0] !== undefined) {
            msg = args[0];
        }
        return msg + date;
    }
    
}
