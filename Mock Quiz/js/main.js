var key={
    name: "Mahrukh Wajeeha Asim",
    balance: 1000,
    currency: "PKRS",
    ibn: "Abc123"
};
var  idname=document.getElementById("title");
idname.innerText=key.name;
var  idbalc=document.getElementById("balance");
idbalc.innerText=key.balance;
var idcurr=document.getElementById("currency");
idcurr.innerText=key.currency;
var idibn=document.getElementById("IBAN");
idibn.innerText=key.ibn;

function deposit(num,num1) {
    if(num.key==="Enter")
    {
        var numm = parseInt(num1,10);
        result = Number.isInteger(numm);
        if(result) {
            var id0 = document.getElementById("deposit-msg");
            id0.innerText = "";
            key.balance=+key.balance+ +num1;
            var  idbalc1=document.getElementById("balance");
            idbalc1.innerText=key.balance;
            var trans = document.getElementById("transaction-table");
            trans.innerHTML+='<tr>\n' +
            '<td align="left" valign="middle" scope="col">'+Date()+'</td>\n' +
            '<td align="left" valign="middle" scope="col">'+"Credit"+'</td>\n' +
            '<td align="left" valign="middle" scope="col">'+numm+'</td>\n' +
            '</tr>';
        }
        else
        {
            var error = document.getElementById("deposit-msg");
            error.innerText = "Enter a Valid Amount";
        }
    }
}
function withdraw(num2,num3) {
    if(num2.key==="Enter")
    {
        var numm = parseInt(num3,10);
        result = Number.isInteger(numm);
        if(result)
        {
            if(num3>key.balance)
            {
                var id1=document.getElementById("withdraw-msg");
                id1.innerText="";
                var error="Dont have suffiecient amount";
                var id1=document.getElementById("withdraw-msg");
                id1.innerText=error;
            }
            else
            {
                var id1=document.getElementById("withdraw-msg");
                id1.innerText="";
                key.balance=+key.balance- +num3;
                var  idbalc1=document.getElementById("balance");
                idbalc1.innerText=key.balance;
                var trans = document.getElementById("transaction-table");
                trans.innerHTML+='<tr>\n' +
                    '<td align="left" valign="middle" scope="col">'+Date()+'</td>\n' +
                    '<td align="left" valign="middle" scope="col">'+"Debit"+'</td>\n' +
                    '<td align="left" valign="middle" scope="col">'+num3+'</td>\n' +
                    '</tr>';
            }
        }
        else
        {
            var error1="Enter valid amount";
            var id1=document.getElementById("withdraw-msg");
            id1.innerText=error1;
        }

    }
}
