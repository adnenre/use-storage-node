import storage from "../src/index.js";
describe("storage ", () => {
  const key = "abcd";
  const store = storage(key);
  const person = {
    name : 'jhon',
    address : 'Tunisia'
  }
  store.setItem("a", "car");
  store.setItem("b", "bik");
  store.setItem("c", "dog");
  store.setItem("d", person);



  it("1: Check if store to be created", () => {
    expect(store).toBeTruthy();
  });
  it("2: Check if store property couldn't be accessed with object values ", () => {
    expect(Object.values(store)[0] === "car").toBeFalsy();
  });
  it("3: Check if store property could be accest with getItems ", () => {
    expect(store.getItem("a")).toEqual("car");
  });

  it("4: Check if store preserve object shape ", () => {
    expect(store.getItem("d")).toEqual(person);
  });
  it("5: Check if store remove the correct key ", () => {
    store.removeItem('d')
    expect(store.getItem("d")).toEqual(null);
  });
  it("6: Check if store implement the clear method / all key are deleted ", () => {
    store.clear()
    expect(store.getItem("a")).toEqual(null);
    expect(store.getItem("b")).toEqual(null);
    expect(store.getItem("c")).toEqual(null);
    expect(store.getItem("d")).toEqual(null);

  });
});
