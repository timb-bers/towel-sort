
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    if (Array.isArray(matrix) && matrix.length > 0) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
              if ( i % 2 !== 0) {
                matrix[i].sort((a, b) => b - a)
              }
                res.push(matrix[i][j])
            }
        }
        return res
    }
    else 
    return []
}
