/*
    deleteNth ([1,1,1,1],2) // return [1,1]
    deleteNth ([20,37,20,21],1) // return [20,37,21]
    <= 
    deleteNth([16,16,16,20,20,1,2], 2) //return [16,16,20,20,1,2]
*/
function deleteNth(arr,x){
    'use strict'
    let countArr = (v, newarr) => {
        let obj = newarr.reduce((p, v)=>{
            if(v in p)
                p[v]++;
            else
                p[v] = 1;
            return p;
        }, {})
         return obj[v];
    };