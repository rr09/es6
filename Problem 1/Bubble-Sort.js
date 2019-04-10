
let bubble_Sort = (a) => {        //Using the let keyword and the arrow function 
    let swapp;
    const n = a.length-1;        //Using the const keyword to store the value of n
    let x=a;
    do {
       swapp = false;
       for(let i=0; i<n; i++){
            if (x[i] < x[i+1]){

                let temp = x[i];
                x[i] = x[i+1];
                x[i+1]=temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;  
}