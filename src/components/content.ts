import { root } from "./root";
import * as avatar from "../assets/image/bird.png";
import "./index.scss";

const obj = {
  a: 123,
  b: {
    c: "cccc"
  }
};

const Content = () => {
  let timeId = null;
  const el = document.createElement("div");
  const img = document.createElement("img");
  const button = document.createElement("button");
  const counter = document.createElement("p");
  counter.innerText = "0";

  button.innerText = "test";
  // 异步点击事件
  button.addEventListener("click", async () => {
    //
    const { default: func } = await import(
      /*webpackChunkName: "click"*/ "./clickFun"
    );
    func(counter, obj);

    import(/* webpackChunkName: "lodash" */ "lodash").then(({ default: _ }) => {
      document.body.innerText = _.join(["hello", "webpack"]);
    });
  });

  img.className = "avatar";
  el.innerText = "content";
  img.src = avatar;
  el.append(img);
  el.append(button);
  el.append(counter);
  root.append(el);
};

export default Content;
