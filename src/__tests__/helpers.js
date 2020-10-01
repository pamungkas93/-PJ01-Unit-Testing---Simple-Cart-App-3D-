/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const {
    incrementQty,
    decrementQty
} = require('../helpers')

test('Penjumlahan dari 1 ditambah 1 harusnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

const {
    incrementQty,
    decrementQty,
    recalculateSubtotal
} = require('../helpers.js')


test('Qty 1 jika ditambahkan 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});
test('Qty 1 jika ditambahkan "1" hasilnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});
test('Subtotal dari 25000 dan qty 2 adalah 50000', () => {
    expect(recalculateSubtotal(25000, 2)).toBe(50000);
});
test('subtotal dengan inputan string', () => {
    expect(recalculateSubtotal('25000', 4)).toBe(100000);
});
test('decrementQty bisa berkurang', () => {
    expect(decrementQty(2)).toBe(1);
});
test('decrementQty tidak boleh berkurang ketika qty > 0', () => {
    expect(decrementQty(1)).toBe(1);
});
test('subtotal dengan discount', () => {
    expect(recalculateSubtotal(50000, 3, 50)).toBe(75000);
});



test('Penjumlahan dari "1" ditambah 1 harusnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});

test('Pengurangan dari 2 dikurangi 1 harusnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('Pengurangan dari "2" dikurangi 1 harusnya 1', () => {
    expect(decrementQty("2")).toBe(1);
});