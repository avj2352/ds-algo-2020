const list = [1,2,3,1];

const rob = (list) => {
    let pos = 0;
    let amount = 0;
    if (list.length == 0) return 0;
    else if (list.length <= 2) return 0;
    else if (list.length === 3) return list[1];

    while(pos < list.length) {
        let temp = list.splice(pos,1)[0];
        amount = amount + temp;
        pos = pos+1;
    }

    return amount;
};

console.log(rob(list));

