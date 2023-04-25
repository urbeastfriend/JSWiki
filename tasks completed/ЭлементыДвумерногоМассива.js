let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

        for (let subArr of arr) {
            for (let subsubArr of subArr) {
                for(let subsubArrElem of subsubArr){
                    console.log(subsubArrElem)
                }
            }
        }