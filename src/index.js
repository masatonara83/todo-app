import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleateList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleate = (target) => {
  document.getElementById("incompleate-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleateList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.className = "list-tag";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)タグ生成
  const compleateButton = document.createElement("button");
  compleateButton.innerText = "完了";
  compleateButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了からリストから削除
    const deleteDiv = deleteButton.parentNode;
    deleteFromIncompleate(deleteDiv.parentNode);

    //完了リストに追加する要素
    const addTarget = compleateButton.parentNode;
    //TODOの内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグの生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（div）から完了リストから削除
      const deleteTarget = backButton.parentNode;
      const deleteTargetLi = deleteTarget.parentNode;
      document.getElementById("compleate-list").removeChild(deleteTargetLi);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleateList(text);
    });

    //divタグの子要素に各要素に設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    const li = document.createElement("li");
    li.appendChild(addTarget);
    document.getElementById("compleate-list").appendChild(li);
  });

  //button(完了)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを（div）を未完了から削除
    const deleteDiv = deleteButton.parentNode;
    deleteFromIncompleate(deleteDiv.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(compleateButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incompleate-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
