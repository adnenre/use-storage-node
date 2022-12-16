import useStorage from "../src/index.js";
describe("useStorage ", () => {
  const key = "abcd";
  const storage = useStorage(key);
  const person = {
    name : 'jhon',
    address : 'Tunisia'
  }
  storage.setItem("a", "car");
  storage.setItem("b", "bik");
  storage.setItem("c", "dog");
  storage.setItem("d", person);



  it("1: Check if storage to be created", () => {
    expect(storage).toBeTruthy();
  });
  it("2: Check if storage property couldn't be accessed with object values ", () => {
    expect(Object.values(storage)[0] === "car").toBeFalsy();
  });
  it("3: Check if storage property could be accest with getItems ", () => {
    expect(storage.getItem("a")).toEqual("car");
  });

  it("4: Check if storage preserve object shape ", () => {
    expect(storage.getItem("d")).toEqual(person);
  });
  it("5: Check if storage remove the correct key ", () => {
    storage.removeItem('d')
    expect(storage.getItem("d")).toEqual(null);
  });
  it("5: Check if storage implement the clear method / all key are deleted ", () => {
    storage.clear()
    expect(storage.getItem("a")).toEqual(null);
    expect(storage.getItem("b")).toEqual(null);
    expect(storage.getItem("c")).toEqual(null);
    expect(storage.getItem("d")).toEqual(null);

  });
});
