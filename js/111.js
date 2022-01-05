// const myDate = new Date();
//
// const year = myDate.getFullYear();
// const month = myDate.getMonth() + 1;
// const date = myDate.getDate();
// const hours = myDate.getHours();
// const minutes = myDate.getMinutes();
// const seconds = myDate.getSeconds();
//
//
//
// const tradeNo = `${year}${month}${date}${hours}${minutes}`;
//
// console.log(tradeNo);

const tradeNoGenerator = () => {
    const myDate = new Date();
    let tradeNo = '';
    const date = {
        "year": myDate.getFullYear(),
        "month": myDate.getMonth() + 1,
        "date": myDate.getDate(),
        "hours": myDate.getHours(),
        "minutes": myDate.getMinutes(),
        "seconds": myDate.getSeconds(),
        "mSeconds": myDate.getMilliseconds(),
        "time": myDate.getTime(),
        "safa": undefined,
    };
    for (let i in date) {
        tradeNo = `${tradeNo}${date[i]}`
    }
    return tradeNo;
}

console.log(tradeNoGenerator());