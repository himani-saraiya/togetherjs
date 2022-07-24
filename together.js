var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i = 0
var sum = 0
var odd_sum = 0
var c = 1
var c1 = 1
var c2 = 1
var avg = 0
var avg1 = 1
while (i < elements.length) {
    console.log('number', elements[i], 'count', c)
    if (elements[i] % 2 == 0) {
        console.log(c1, 'count1', 'even', elements[i])
        sum = sum + elements[i]
        avg = Math.floor(sum / 11)
    } else {
        console.log(c2, 'count2', 'odd', elements[i], )
        odd_sum = odd_sum + elements[i]
        avg1 = Math.floor(odd_sum / 11)
        a = sum + odd_sum
        b = avg + avg1
    }
    c = c++
        c1 = c1++
        c2 = c2++
        i++
}
console.log("even sum", sum)
console.log("odd sum", odd_sum)
console.log('average', avg)
console.log('average', avg1)
console.log("even and odd sum", a)
console.log("average total", b)