import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  constructor() { }
  public transform = (value: string, maxLength: number): string => {
    if (value.length > maxLength) return `${value.slice(0, maxLength)}...`
    return value;
  }
}
