function copyContract() {
    const contractAddress = document.getElementById('contract-address').innerText;
    
    // Birinchi usul: navigator.clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(contractAddress).then(() => {
            alert('Kontrakt manzili nusxalandi! Endi trollik qilish vaqti! 😈');
        }).catch(err => {
            console.error('Nusxalashda xatolik: ', err);
            fallbackCopy(contractAddress); // Agar xato bo‘lsa, alternativa usulga o‘tamiz
        });
    } else {
        // Agar navigator.clipboard ishlamasa, alternativa usul
        fallbackCopy(contractAddress);
    }
}

// Alternativa nusxalash usuli
function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert('Kontrakt manzili nusxalandi! Endi trollik qilish vaqti! 😈');
    } catch (err) {
        console.error('Nusxalashda xatolik: ', err);
        alert('Oops, nimadir xato ketdi! Qo‘lda nusxalab oling: ' + text);
    }
    document.body.removeChild(textArea);
}