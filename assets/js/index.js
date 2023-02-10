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
            'business': 'itsolegdm@gmail.com', // GmAiL
            'item_name': tss3, // who r u
            'item_number': tss2, // cummentary
            'no_recurring': '0',// yes.
            'currency_code': currency.value, // what money???
            'amount': inputelem.value, // yey, neq slave
        }

        uri = `https://www.paypal.com/donate` // PAY
        break;
    case "mono":
        params = {
            'a': inputelem.value, // who r u x2
            't': tss2, // cummentary
        }
    
        uri = `app://com.ftband.mono/pay/4zyffgWyWo`// 4zyffgWyWo - recipient's identifier, you can find it using monobank's api

        if(window.screen.width > 800)
            alert("Payment via monobank is only available on mobile devices.")

        break; 
    default:
        alert('Choose payment method.');
     
    }
    
    
    window.location.href = `${uri}${dictToURI(params)}` // i don't care - © Kr3st1k
    return true; // const false = true; (uncomment)
}

let forget_about_it_donateshit_yansber = function () { // dont use this shit
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
        'receiver': '4100115820568367', // no
        'formcomment': 'Донат ItsOlegDm',
        'short-dest': 'Донат ItsOlegDm',
        'label': 'donate',
        'quickpay-form': 'donate', 
        'targets': 'Донат ItsOlegDm',
        'need-fio': 'false', 
        'need-email': 'false', 
        'need-phone': 'false', 
        'need-address': 'false', 
        'successURL': 'https://itsolegdm.me/spasibo.html',
        'comment': (tss3 + (tss2 != '' && tss3 != '' ? ': ' : '') + tss2).trim(), 
        'sum': inputelem.value, 
        'paymentType': tss ? tss.value : 'PC'
    }

    if (isNaN(inputelem.value)) {
        !inputelem.className.includes('bruh') && (inputelem.className = inputelem.className + ' bruh') // bruh
    } else {
        window.location.href = `https://yoomoney.ru/quickpay/confirm.xml${dictToURI(params)}`
    }
    return true; 
}
function modal(id) {
    var accmenu = document.getElementById(id);

    if (accmenu.style.display == 'flex') {
        accmenu.style.opacity = "0";
        setTimeout(() => {
            accmenu.style.display = 'none';
        }, 300);
    } else {
        if (id == 'donate') { // The beginning of the Easter Egg for the Chosen Ones
            if (window.location.search.includes("egg")) { // Easter Egg for the Chosen Ones
                if (document.getElementById("kris") == null) { // Easter Egg for the Chosen Ones
                    var exitbutton = document.createElement('img'); // Easter Egg for the Chosen Ones
                    document.getElementById('removequestion').remove() // Easter Egg for the Chosen Ones
                    exitbutton.style.cssText = "height: 30px; width: 30px; padding-right: 5px; cursor: pointer;"; // Easter Egg for the Chosen Ones
                    exitbutton.id = "kris"; // Easter Egg for the Chosen Ones
                    exitbutton.title = "kr3st1k"; // Easter Egg for the Chosen Ones
                    exitbutton.src = "https://i.imgur.com/SF7P0bh.png"; // Easter Egg for the Chosen Ones
                    exitbutton.addEventListener('click', () => {
                        modal(id)
                    }) // Easter Egg for the Chosen Ones
                    document.getElementById('modalheadermenu').appendChild(exitbutton); // Easter Egg for the Chosen Ones
                } // Easter Egg for the Chosen Ones
            } // Easter Egg for the Chosen Ones
        } // The End of the Easter Egg for the Chosen Ones
        accmenu.style.display = 'flex';
        setTimeout(() => {
            accmenu.style.opacity = '1';
        }, 100);
    }
}
