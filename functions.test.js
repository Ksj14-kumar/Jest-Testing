"use strict"

const testFunct = require("./functions");
const axios = require("axios")

test("Add Some number", () => {
    expect(testFunct.add(5, 5)).toBe(10);

})

test("Subtract number", () => {
    expect(testFunct.sub(5, 5)).toBe(0)
})

test("multiplications", () => {
    expect(testFunct.mul(5, 5)).toBe(25)
})

test("Diision0", () => {
    expect(testFunct.div(10, 5)).toBe(2)
})

// TODO: truthly value match
// TODO: toBeNull()
// TODO: toBeUndefined()
// TODO: toBeDefined()
// TODO: toBeFalsy()
// TODO: toBeTruthy()
//===================testing with Truthyness======================
test("test with truthyness value is tested or not", () => {
    const num = null;
    expect(num).toBeNull(); //match only null value
    expect(num).not.toBeUndefined(); //match only undefined
    expect(num).toBeDefined(); //match only Defined value
    expect(num).not.toBeTruthy(); //match anymthing treated as true
    expect(num).toBeFalsy(); // match as when if statement work as alse
})

// //test with type value




//========================test with differene type of Numbers  ====================

// TODO: number matching method 
// TODO: toBeEqual()
// TODO: toBe()
// TODO: toBeGreaterThan()
// TODO: toBeGreaterThanOrEqual()
// TODO: toBeLessThan()
// TODO: toBeLessThanOrEqual()
// TODO: toBeCloseTo() for floating number matching

test("testign with numbers: ", () => {
    const num = 10;
    const value = 0.1 + .4
    // toBe() and toEqual() work same for number
    expect(num).toBe(10);
    expect(num).toEqual(10);
    //number testing with logical operator
    expect(num).toBeGreaterThan(9);
    expect(num).toBeGreaterThanOrEqual(1.5)
    expect(num).toBeLessThan(15)
    expect(num).toBeLessThanOrEqual(15.5)
    expect(value).toBeCloseTo(.5)
})


//========================== Matching  Error String================

// TODO: .toMatch(/string jo match krni hai/)

test("match the error", () => {
    const string = "hii, Mom"
    expect(string).toMatch(/hii, Mom/)
    expect("C").toMatch(/C/)
    expect("Python").toMatch(/Python/)
    expect("Java").toMatch(/Java/)
})

//TODO: ===================test with type of value==================


test("testing with type of value", () => {
    const value = "Hello, Programming"
    const arr = []
    const obj = { name: "Sanju" }
    const bT = true
    const bF = false

    expect(typeof value).toBe("string")
    expect(Array.isArray(arr)).toBe(true)
    expect(typeof obj).toBe("object")
    expect(typeof bT).toBe("boolean")
    expect(typeof bF).toBe("boolean")

    //check funtiontype
    expect(typeof function () { }).toBe("function")
})

//===================NOw Check any iterable cotaine any data or not
test("testing with any iterable", () => {
    const arr = [12, 34, 56, 78, 23]
    expect(arr).toContain(34)
})


//=======================now test iteration =========================
test("test with iteration", () => {
    for (var i = 1; i <= 10; ++i) {
        for (var j = 1; j <= 10; ++j) {
            expect(i + j).not.toBe(0)
        }
    }
})




// TODO: test with exception function with jest go to throw and error
// TODO: test with funtion which return exception error than use method 
// TODO: toThrow()
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}
test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});
// TODO: toBeInstance() work with class

test("testign with class", () => {
    class A { }
    expect(new A()).toBeInstanceOf(A)
})

// ===================testing with asynccronous data======================

// function My() {
//     let value;
//     async function Func() {
//         return "This is inner funtions so what is"
//     }
//     setTimeout(() => {
//         value = Func()
//     }, 3000);

//     return value
// }
// test("test with asyncronous data", () => {
//     expect(My()).resolves.toBe("success")
// })
// test("asyncchromous test with rejects",()=>{
//     expect(My()).rejects.toMatch("error")
// })



test("testing with asynchronous data", async () => {
    // expect.assertions(1)
    try {
        const resData = await testFunct.getData()
        // return testFunct.getData().then((data) => {
        //     console.log({ data })
        //     expect(data.name).toBe("Leanne Graham")
        // })
        expect(resData.name).toBe("Leanne Graham")
    }
    catch (err) {
        expect(await getData()).toThrow("error")

    }
})
