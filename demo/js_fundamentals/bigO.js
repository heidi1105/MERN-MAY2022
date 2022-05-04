const ex1 = (arr)=>{
    let sum =0;
    let product = 1;
    for(let i=0; i<arr.length;i++){
        sum+= arr[i];
    }
    for(let i=0; i<arr.length;i++){
        product *= arr[i];
    }
    console.log(sum+ " , " + product)
}

// O(2n) : O(N)

const ex2 = (arr) =>{
    for(let i=0; i< arr.length; i++){
        for(let j=0; j< arr.length; j++){
            console.log(arr[i] + " , " + arr[j])
        }
    }
}
// O(n^2)

const ex3 = (arr) =>{
    for(let i=0; i< arr.length; i++){
        for(let j=i +1; j< arr.length; j++){
            console.log(arr[i] + " , " + arr[j])
        }
    }
}
// O(n^2)


const ex4 = (arrA, arrB)=>{
    for(let i=0; i< arrA.length; i++){
        for(let j=0; j< arrB.length; j++){
            console.log(arrA[i] + " , " + arrB[j])
        }
    }    
}

// O(a*b)

const ex5 = (arr1, arr2)=>{
    for(let i=0; i< arr1.length; i++){
        for(let j=0; j< arr2.length; j++){
            for(let k=0; k< 1000000; k++){
                console.log(arr1[i] + " , " + arr2[j])
            }
        }
    }    
}

// O(n^2) 

const ex6 = (arr) =>{
    for(let i=0; i<arr.length/2 ; i++){
        let j = arr.length -i -1;
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
    }
}

// O(n/2)




const ex7 = (n) =>{ 
    if(n<1){
        return 0;
    }else if(n==1){
        console.log(1);
        return 1;
    }else{
        let prev = ex7(n/2)
        let curr = prev *2;
        console.log(curr)
        return curr
    }
}

// O(log n)



