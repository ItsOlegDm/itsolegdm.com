let donateshit = function () {
    var inputelem = document.getElementById('donsum');
    const tss = document.querySelector(`input[name='paymentType']:checked`);
    const tss3 = document.getElementById('userdon').value;
    const tss2 = document.getElementById('comdon').value;
    const dictToURI = (dict) => {
        var str = [];
        for (var p in dict) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(dict[p]));
        }
        return '?' + str.join('&');
    }
    const params = {
        'receiver': '4100115820568367', // Номер ЮMoney кошелька получателя
        'formcomment': 'Донат ItsOlegDm', // Название перевода в истории отправителя 
        'short-dest': 'Донат ItsOlegDm', // Название перевода на странице подтверждения
        'label': 'donate', // Бесполезная фигня
        'quickpay-form': 'donate',// да.
        'targets': 'Донат ItsOlegDm', //Назначение платежа
        'need-fio': 'false', // фио надо? не надо
        'need-email': 'false', // почту надо? не надо
        'need-phone': 'false', //  трубка? не надо
        'need-address': 'false', // ip дашь? не дашь 
        'successURL': 'https://itsolegdm.ru/spasibo.html', // сюда челик попадет после того как оплатит нам 2кг сала
        'comment': (tss3 + (tss2 != '' && tss3 != '' ? ': ' : '') + tss2).trim(), // говнокоммент
        'sum': inputelem.value, // ура куплю ещё одного хохло-раба
        'paymentType': tss ? tss.value : 'PC' //  на комп. (нет) (yoomoney)
    }

    if (isNaN(inputelem.value)) {
        !inputelem.className.includes('bruh') && (inputelem.className = inputelem.className + ' bruh')// bruh
    } else {
        window.location.href = `https://yoomoney.ru/quickpay/confirm.xml${dictToURI(params)}` // ПЛАТНО
    }
    //кст автор кода тоже любит кастыли. (автор кста kr3st1k)
    return true; // let true = false; (раскомментить если не работает)
}

function modal (id) {
    var accmenu = document.getElementById(id);

    if (accmenu.style.display == 'flex') {
        accmenu.style.opacity = "0";
        setTimeout(() => {
            accmenu.style.display = 'none';
         }, 300);
    } else {
        if (id == 'donate'){ // начало пасхалки для избранных
            if (window.location.search.includes("egg=true")){ // пасхалка для избранных
                if(document.getElementById("kris") == null){ // пасхалка для избранных
                var exitbutton = document.createElement('img'); // пасхалка для избранных
                document.getElementById('removequestion').remove() // пасхалка для избранных
                exitbutton.style.cssText = "height: 30px; width: 30px; padding-right: 5px; cursor: pointer;"; // пасхалка для избранных
                exitbutton.id = "kris"; // пасхалка для избранных
                exitbutton.title = "kr3st1k"; // пасхалка для избранных
                exitbutton.src= "https://i.imgur.com/SF7P0bh.png"; // пасхалка для избранных
                exitbutton.addEventListener('click', () => {modal(id)}) // пасхалка для избранных
                document.getElementById('modalheadermenu').appendChild(exitbutton); // пасхалка для избранных
                } // пасхалка для избранных
            } // пасхалка для избранных
        }// конец пасхалки для избранных
        accmenu.style.display = 'flex';
        setTimeout(() => {
            accmenu.style.opacity = '1';
         }, 100);
    }
}

