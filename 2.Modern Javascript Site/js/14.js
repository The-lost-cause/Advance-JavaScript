// Loop Questions

// while(true) {
//     let num = +prompt('Number');
//     if (num > 100 || num =='' || num == null) {
//         break;
//     } 
// }

// Output the Prime Numbers

let n = +prompt('Number');                      // 2 - 10

for (let a = 2; a <= n ; a++) {                 // i = 2; n = 10

    for ( let i = 2; i <= a; i++) {           

        if ((a % i == 0) && (a == i) ) {

            console.log('Prime',a)

            break;
            
        } else if ( a % i == 0) {

            break;
            
        }

    }
}