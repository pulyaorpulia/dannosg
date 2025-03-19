function copyContract() {
    const contractAddress = document.getElementById('contract-address').innerText;
    navigator.clipboard.writeText(contractAddress).then(() => {
        alert('Kontrakt manzili nusxalandi! Endi trollik qilish vaqti! 😈');
    }).catch(err => {
        console.error('Nusxalashda xatolik: ', err);
        alert('Oops, nimadir xato ketdi! Qo‘lda nusxalab oling.');
    });
}