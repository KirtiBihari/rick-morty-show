export const dynamicsort= (order, property) => {
    var sortOrder = -1;
    if(order === 'asc'){
        sortOrder = 1;
    }
    return function (a, b){
        const valA = a[ property ];
        const valB = b[ property ];
        if(valA < valB){
                return -1 * sortOrder;
        }else if(valA > valB){
                return 1 * sortOrder;
        }else{
                return 0 * sortOrder;
        }
    }
}