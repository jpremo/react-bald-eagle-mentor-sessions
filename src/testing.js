//what is a promise


//how to create a promise
// const delayResult = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('value');
//     }, 1000)
// });

//how to chain a promise and why that's necessary
// delayResult.then((promiseResultValue) => {
//     console.log(promiseResultValue);
// })

//using async await to make promise based code more readable
const ansynchronousFunction = async () => {
    const delayResult = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('value');
        }, 1000)
    });

    const finalValue = await delayResult;
    console.log(finalValue);
}

// ansynchronousFunction()
//how does the fetch API use promises?

// Fetching a random cat picture using async/await; coding with async/await tends to be a bit easier to read
export const getCatPictureAsync = async () => {
    const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=asho`,
        {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "b07ebe63-3b58-4285-a374-10aa6a74e158",
            },
            method: "GET",
        }
    );
    
    const data = await res.json();
    console.log(data)
}

// Fetching a random cat picture using promise chaining; This is the same as the code above functionally, but is more difficult to read/write
export const getCatPicturePromiseChaining = () => {
    fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=asho`,
        {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "b07ebe63-3b58-4285-a374-10aa6a74e158",
            },
            method: "GET",
        }
    ).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    })
}