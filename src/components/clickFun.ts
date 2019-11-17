// import * as moment from "moment";
import { get } from "lodash";
function handleClick(counter, obj) {
  const test = document.createElement("div");
  test.className = "text";
  test.innerHTML = "ssss";
  document.body.append(test);
  counter.innerText = (Number(counter.innerText) + 1).toString();
  console.log("123", get(obj, ["a", "b", "c"], ""));
  // setInterval(() => {
  //   console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
  // }, 2000);
}

export default handleClick;
