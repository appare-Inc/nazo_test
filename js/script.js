// HTMLの要素を取得する
const inputField = document.getElementById('userInput');
const actionButton = document.getElementById('myButton');
const messageArea = document.getElementById('message');

// 入力内容が変更されたときにイベントを検知する
inputField.addEventListener('input', function() {
    const inputValue = inputField.value.trim();

    if (inputValue.length > 0) {
        // 文字が入力されている場合
        actionButton.disabled = false; // ボタンを有効化
        actionButton.style.backgroundColor = '#c0ffee';
        actionButton.style.color = 'white';
        messageArea.textContent = `「${inputValue}」が入力されています。`;
    } else {
        // 何も入力されていない場合
        actionButton.disabled = true; // ボタンを無効化
        actionButton.style.backgroundColor = '';
        actionButton.style.color = '';
        messageArea.textContent = '文字を入力してください。';
    }
});

// ボタンがクリックされたときの処理
actionButton.addEventListener('click', function() {
    if (inputField.value == 'かき'){
        alert('正解！');
    }
    else{
        alert('残念、不正解です');
    }
});