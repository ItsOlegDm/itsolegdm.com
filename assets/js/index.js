let currency = {};
document.addEventListener('DOMContentLoaded', () => {
    currency = new CustomSelect('#select-currency', {
        name: 'currency',
        targetValue: 'UAH',
        options: [
            ['UAH', 'UAH'],
            ['USD', 'USD'],
            ['EUR', 'EUR']
        ]
    });

    if (window.location.search.includes("donate")) {
        modal('donate');
    };
    $(document).on("change", ".radioinput", function () {
        if ($('input[name="paymentType"]:checked').val() == "mono") {
            // Do something...
            $('#userdon').prop('disabled', true);
            $('.select__toggle').attr('data-select', 'none');
            $('.select__toggle').css("background-color", "#383838");
            currency.value = 'UAH';
        } else {
            $('#userdon').prop('disabled', false);
            $('.select__toggle').attr('data-select', 'toggle');
            $('.select__toggle').css("background-color", "#232324");
        };
    });
})


let donateshit = function () {
    var inputelem = document.getElementById('donsum');
    const tss = document.querySelector(`input[name='paymentType']:checked`).value;
    const tss3 = document.getElementById('userdon').value;
    const tss2 = document.getElementById('comdon').value;
    //currency.value
    const dictToURI = (dict) => {
        var str = [];
        for (var p in dict) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(dict[p]));
        }
        return '?' + str.join('&');
    }

    if (isNaN(inputelem.value)) {
        !inputelem.className.includes('bruh') && (inputelem.className = inputelem.className + ' bruh') 
    }


    params = {};
    uri = "";

    console.log(tss);

    switch (tss)
    {
    case "paypal":
        params = {
            'business': 'itsolegdm@gmail.com', // ГмЭиЛ получателя
            'item_name': tss3, // ім`я, по батькові
            'item_number': tss2, // cumментарий
            'no_recurring': '0',// да.
            'currency_code': currency.value, // какая деньга????*
            'amount': inputelem.value, // ура куплю ещё одного хохло-раба
        }

        uri = `https://www.paypal.com/donate` // ПЛАТНО
        break;
    case "mono":
        params = {
            'a': inputelem.value, // ім`я, по батькові
            't': tss2, // cumментарий
        }
    
        uri = `app://com.ftband.mono/pay/4zyffgWyWo`// 4zyffgWyWo - идентификатор получателя, можно стырить с сайта апишики монобанка

        if(window.screen.width > 800)
            alert("ало уебан, меняй способ ты не на мобиле")

        break; 
    default:
        alert('Выбери способ или сделай нормальный вывод ошибки о не выбранном способе платы');
     
    }
    
    
    window.location.href = `${uri}${dictToURI(params)}` // i don't care, кст удали пасхалку - © Kr3st1k
    return true; // const false = true; (раскомментить если не работает)
}

let forget_about_it_donateshit_yansber = function () {
    var inputelem = document.getElementById('donsum');
    const tss = document.querySelector(`input[name='paymentType']:checked`).value;
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
        'quickpay-form': 'donate', // да.
        'targets': 'Донат ItsOlegDm', //Назначение платежа
        'need-fio': 'false', // фио надо? не надо
        'need-email': 'false', // почту надо? не надо
        'need-phone': 'false', //  трубка? не надо
        'need-address': 'false', // ip дашь? не дашь 
        'successURL': 'https://itsolegdm.me/spasibo.html', // сюда челик попадет после того как оплатит нам 2кг сала
        'comment': (tss3 + (tss2 != '' && tss3 != '' ? ': ' : '') + tss2).trim(), // говнокоммент
        'sum': inputelem.value, // ура куплю ещё одного хохло-раба
        'paymentType': tss ? tss.value : 'PC' //  на комп. (нет) (yoomoney)
    }

    if (isNaN(inputelem.value)) {
        !inputelem.className.includes('bruh') && (inputelem.className = inputelem.className + ' bruh') // bruh
    } else {
        window.location.href = `https://yoomoney.ru/quickpay/confirm.xml${dictToURI(params)}` // ПЛАТНО
    }
    //кст автор кода тоже любит кастыли. (автор кста kr3st1k)
    return true; // let true = false; (раскомментить если не работает)
}

function modal(id) {
    var accmenu = document.getElementById(id);

    if (accmenu.style.display == 'flex') {
        accmenu.style.opacity = "0";
        setTimeout(() => {
            accmenu.style.display = 'none';
        }, 300);
    } else {
        if (id == 'donate') { // начало пасхалки для избранных
            if (window.location.search.includes("egg")) { // пасхалка для избранных
                if (document.getElementById("kris") == null) { // пасхалка для избранных
                    var exitbutton = document.createElement('img'); // пасхалка для избранных
                    document.getElementById('removequestion').remove() // пасхалка для избранных
                    exitbutton.style.cssText = "height: 30px; width: 30px; padding-right: 5px; cursor: pointer;"; // пасхалка для избранных
                    exitbutton.id = "kris"; // пасхалка для избранных
                    exitbutton.title = "kr3st1k"; // пасхалка для избранных
                    exitbutton.src = "https://i.imgur.com/SF7P0bh.png"; // пасхалка для избранных
                    exitbutton.addEventListener('click', () => {
                        modal(id)
                    }) // пасхалка для избранных
                    document.getElementById('modalheadermenu').appendChild(exitbutton); // пасхалка для избранных
                } // пасхалка для избранных
            } // пасхалка для избранных
        } // конец пасхалки для избранных
        accmenu.style.display = 'flex';
        setTimeout(() => {
            accmenu.style.opacity = '1';
        }, 100);
    }
}
