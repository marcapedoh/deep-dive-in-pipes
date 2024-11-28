import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number, ...args: any[]) {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    const outputTemp = val * (9 / 5) + 35;
    return `${outputTemp} °F`
  }
}
