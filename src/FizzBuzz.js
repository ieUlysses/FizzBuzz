import React from "react"
import "./quickStyle.css"
/* Code debrief: 
This code is quite a simple FizzBuzz created using the Array from method from JS where the length is set by "n" the value given to us from the "number-input" 

for each value inside the Array it cycles through a for each where the value is met with 3 criteria.., divisible by 15, 5 ,3 this is assertained by using the modulo "%" and checking if the remainder is 0 . If the number does not meet the crieteria it falls into the final else block. */

export default function () {

    const fizzBuzz = () => {
        let n = document.getElementById("number-input").value

        const array = Array.from({ length: n }, (elementOfArray, index) => index + 1)
        /*_ element of function*/

        array.forEach(n => {
            if (n % 15 === 0) {

                let FizzBuzz = n
                console.log(`${FizzBuzz} is divisible by 3 & 5 #Fizzbuzz`)

            } else if (n % 5 === 0) {

                let Fizz = n
                console.log(`${Fizz} is divisible by 5 #Fizz`)

            } else if (n % 3 === 0) {

                let Buzz = n
                console.log(`${Buzz} is divisible by 3 #Buzz`)

            } else {

                let notDivisible = n
                console.log(`${notDivisible} is not divisible by 3 or 5 `)
            }
        });

    }
    return (
        <>

            <h1 className="text-center fontStyleHeader">
                FizzBuzz
            </h1>
            <div className="mt-2 container rounded-pill overflow-hidden bg-dark d-flex align-items-center justify-content-center " style={{ height: "35vh", width: "85vw" }}>
                <div className="   h-25 d-flex justify-content-evenly w-75">
                    <input type="text" id="number-input" placeholder="Pop a number in" className="fontStyleSecondary rounded-pill  h-100">
                    </input>
                    <button onClick={fizzBuzz} className="fontStyleSecondary rounded-pill h-100">
                        Click me
                    </button>
                </div>
            </div>
            <div className="container d-flex flex-column  mt-2 justify-contnent-evenly align-items-center rounded-pill  bg-dark text-light w-50 borderStyled">
                <h4 className="fontStyleTertiary">
                    Hi there! Check out my FizzBuzz game here's how it works
                </h4>
                <ol className="fontStyleTertiary">
                    <li>
                        Step 1: Pop any number in the input field
                    </li>
                    <li>
                        Step 2: Hit the "Click me btn"
                    </li>
                    <li>
                        step 3: Right click anywhere on the page and select "inspect"
                    </li>
                    <li>
                        Step 4: Open the console and see thr output!
                    </li>
                </ol>
            </div>

        </>
    )
}
