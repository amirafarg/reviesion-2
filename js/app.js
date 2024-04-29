var number = [10, 2, 4, 28, 47, 9, 25];
console.log(number);

var index = 0;

while (index < number .length) {

    // 1-add 3 for each number that is less than or equal 20
    if (number[index] <= 20) {

        console.log(`before adding 3: number = ${number[index]} after adding 3: number = ${number[index]+=3}`);
    }

    // 2-subtract 5 from any number that is greater than 20 and less than or equal 30
    else if (number[index] > 20 && number[index] <= 30) {

        console.log(`before subtract 5: number = ${number[index]} after subtract 5: number = ${number[index] -=5}`);
    }

    // 3-multiply 2 for each number that is greater than 30
    if (number[index] > 30) {

        console.log(`before multiply 2:number = ${number[index]} after multiply 2: number = ${number[index] *=2}`);
    }

    //Finally, log the updated array to the console it must be --> arr = [13, 5, 7, 23, 94, 12, 20]

    console.log(number[index]);

    index += 1;
}