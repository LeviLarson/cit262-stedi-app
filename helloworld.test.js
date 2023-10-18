import sayHello from "helloworld"
import assert from "assert"

it("Hello World", ()=>{
    const hello = sayHello();
    assert.equal(hello, "Hello Levi");
})