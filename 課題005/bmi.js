document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

    // 入力された体重と身長を取得
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // 身長をcmからmに変換

    // BMIを計算
    var bmi = weight / (height * height);

    // 計算結果を表示
    document.getElementById('result').textContent = 'あなたのBMIは ' + bmi.toFixed(2) + ' です。';
});
