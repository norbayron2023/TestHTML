function encrypt(text, key) {
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        var encryptedCharCode = charCode ^ key; // XOR演算を使用して暗号化
        encryptedText += String.fromCharCode(encryptedCharCode);
    }
    return encryptedText;
}

function decrypt(encryptedText, key) {
    var decryptedText = "";
    for (var i = 0; i < encryptedText.length; i++) {
        var charCode = encryptedText.charCodeAt(i);
        var decryptedCharCode = charCode ^ key; // XOR演算を使用して復号化
        decryptedText += String.fromCharCode(decryptedCharCode);
    }
    return decryptedText;
}
