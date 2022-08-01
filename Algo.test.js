const rev= require("./Algo")


test("reverse string test",()=>{
    expect(rev.reverString("hello")).toEqual("olleh")
})