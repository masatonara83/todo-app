import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.className = "list-tag";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  li.appendChild(div);
  console.log(li);

  //未完了リストに追加
  document.getElementById("incompleate-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
