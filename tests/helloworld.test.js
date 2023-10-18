import hello from "../utils/helloworld.js"

it ("Should say Hello Levi", ()=>{
    const helloString = hello();
    expect(helloString).toBe("Hello Levi");
})