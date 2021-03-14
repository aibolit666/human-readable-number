module.exports = function toReadable (number) {
        let m = []
        number = number + ''
        for(i=0;i<number.length;i++) {
            m.push(number[i])
        }
        let arr1 = ['zero','one','two','three','four','five','six','seven','eight','nine']
        let arrTeen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
        let arrTy = ['none','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
        let arrHundred = ['hundred']
        let first_number = m[0]
        let second_number = m[1]
        let third_number = m[2]       
        if (m.length == 1) {
            res = arr1[first_number]
        }
        else if (m.length == 2) {
            if (m[0] == 1 && m[1] == 0) {
                res = arrTeen[second_number]
            }
            else if (m[0] == 1 && m[1] !== 0) {
                res = arrTeen[second_number]
            }
            else if (m[0] !== 1 && m[1] == 0) {
                res = arrTy[first_number]
            }
            else if (m[0] !== 1 && m[1] !== 0)
                res = arrTy[first_number] + ' ' + arr1[second_number]
            }
        else if (m.length == 3) {	
            if (m[1] == 0 && m[2] == 0) {
                res = arr1[first_number] + ' ' + arrHundred
            }  
            else if (m[1] == 0 && m[2] !== 0) {
                res = arr1[first_number] + ' ' + arrHundred + ' ' + arr1[third_number]
            }
            else if (m[2] == 0) {
                res = arr1[first_number] + ' ' + arrHundred + ' ' + arrTy[second_number]
            }   
            else if (m[1] == 1) {
                res = arr1[first_number] + ' ' + arrHundred + ' ' + arrTeen[third_number]
            }
            else if (m[1] !== 0 && m[2] !== 0) {
                res = arr1[first_number] + ' ' + arrHundred + ' ' + arrTy[second_number] + ' ' + arr1[third_number]
            }
        }
    return String(res)
}