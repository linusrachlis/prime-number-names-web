import { Component, OnInit } from '@angular/core';

const alphabetZero = 'A'.charCodeAt(0) - 1;
const alphabetEnd = 'Z'.charCodeAt(0) + 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  letters: Letter[];
  total = 0;
  prime = false;
  divisor: number;

  ngOnInit(): void {
    this.updateName("John");
  }

  updateName(newName: string): void {
    this.name = newName;
    this.letters = [];

    let uppercaseName = this.name.toUpperCase();
    let newTotal = 0;

    for (let i = 0; i < uppercaseName.length; i++) {
      let charCode = uppercaseName.charCodeAt(i);

      // Skip non-letters
      if (charCode < alphabetZero || charCode > alphabetEnd) {
        continue;
      }

      let letterValue = charCode - alphabetZero;
      newTotal += letterValue;
      this.letters.push(new Letter(uppercaseName[i], letterValue));
    }

    this.total = newTotal;

    [this.prime, this.divisor] = isPrime(newTotal);
  }
}

class Letter {
  constructor(
    public letter: string,
    public value: number
  ) {}
}


function isPrime(number: number): [boolean, number] {
  for (let i = 2; i <= (number / 2); i++) {
    if (number % i == 0) {
      return [false, i];
    }
  }

  return [true, 0];
}
