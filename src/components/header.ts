import { root } from "./root";
const Header = () => {
  const el = document.createElement("div");
  const icon = document.createElement("div");
  icon.classList.add("iconfont", "icon--unicorn");
  el.append(icon);
  el.innerText = "header";
  root.append(icon);
};

export default Header;
