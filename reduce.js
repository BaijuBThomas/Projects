const data = [['name','rajeev'],['city','bangalore'],['age','20']];

/* ouput :{
name : 'rajeev',
city : 'bangalore',
age: 20
};   using reduce 
*/

// const result =  data.reduce((acc,[key,value]) => ({
//     ...acc,
//     [key]: value

// }), {});

// console.log(result);

function convertIntoObj(arr){
    return arr.reduce(function(acc,item){
        const key = item[0];
        const val = item[1];
        acc[key] = val;
        return acc;
    },{});
}

console.log(convertIntoObj(data));