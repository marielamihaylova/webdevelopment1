let i = 5;
        let j = 10;
        let k = 25;
        let l = "Joe"; // Fixed: Added quotes around "Joe" as it should be a string
        const arr = [3, 5, 7];
        if (i < j) {
            console.log("i is less than j");
        } else if (j > k) {
            console.log("j is greater than k");
        } else {
            console.log("j"); // Fixed: Added missing closing quote
        }
        for (let i = 0; i < arr.length; i++) { // Fixed: Changed 3 to arr.length to avoid index error
            console.log(arr[i]);
        }