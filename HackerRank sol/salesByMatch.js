function sockMerchant(n, ar) {
    // Write your code here
    const uniqueValues = [... new Set(ar)]
    let count = 0
    uniqueValues.forEach(value => {
        const filterValues = ar.filter(element => element == value)
        const pairsNumber = Math.floor(filterValues.length/2)
        count += pairsNumber
    })
    return count
}
