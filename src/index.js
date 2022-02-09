import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer는 무조건 함수여야함
const CountModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};

const CountStore = createStore(CountModifier); // 데이터 저장하는 곳

CountStore.dispatch({ type: "ADD" });
CountStore.dispatch({ type: "ADD" });
CountStore.dispatch({ type: "MINUS" });

console.log(CountStore.getState());
