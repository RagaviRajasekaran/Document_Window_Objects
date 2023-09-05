
//2nd method

(function() {
        let str="hi how are you"
        let arr = str.split(" ");

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        var result = arr.join(" ");
        console.log(result);
})();