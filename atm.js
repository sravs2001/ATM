

const prompt = require('prompt-sync')();


function BankingProcess() {

    var Notes_2000 = true;
    var Notes_500 = true;
    var Notes_200 = true;
    var Notes_100 = false;


    const SBI = {
        UserName: "sravanthi",
        Password: 2001,
        TransferUserName: "chinnu",
        AccountNumber: "865123478925"

    }
    const AXIS = {
        UserName: "sweety",
        Password: 2004,
        TransferUserName: "kishore",
        AccountNumber: "654789123546"

    }
    const HDFC = {
        UserName: "vijayalakshmi",
        Password: 1986,
        TransferUserName: "sankar",
        AccountNumber: "996672522301"

    }



    var Bankbalance = 1000;
    var TransferBankbalance = 5000;
    var PrintMiniStatement = [];


    let user = prompt("enter your name:");
    console.log(user)

    let _password = parseInt(prompt("enter the password:"));
    console.log(_password)


    if ((user === SBI.UserName && _password === SBI.Password) || (user === AXIS.UserName && _password === AXIS.Password) || (user === HDFC.UserName && _password === HDFC.Password)) {
        console.log("welocome to the atm process");

        while (true) {
            let options = {
                Deposite: "1",
                Withdraw: "2",
                BalanceEnquiry: "3",
                MoneyTransfer: "4",
                MiniStatement: "5",
                Exit: "6"
            }

            console.table(options)

            let option = prompt("choose your option : ")


            if (option == options.Deposite) {
                console.log("Deposite")
                var DepositeAmount = parseInt(prompt("enter the deposite amount:"));
                if ((DepositeAmount > Bankbalance) ||(DepositeAmount < Bankbalance) || (DepositeAmount == Bankbalance)) {
                    Bankbalance += DepositeAmount
                     var PrintDepositeAmount = (`$${DepositeAmount}  amount deposited successfully`)
                    PrintMiniStatement.push([PrintDepositeAmount])
                }
            }

            else if (option == options.Withdraw) {
                console.log("Withdraw ")
                var WithdrawAmount = parseInt(prompt("enter the withdraw amount:"));
                if (WithdrawAmount <= Bankbalance) {
                    Bankbalance -= WithdrawAmount;
                    var PrintWithdrawAmount = (`$${WithdrawAmount}  amount withdraw successfully `)
                    PrintMiniStatement.push([PrintWithdrawAmount])
                    var Count = 0;

                    if ((Notes_2000) && (WithdrawAmount >= 2000)) {
                        var Notes_Count_2000 = (Math.floor(WithdrawAmount / 2000))
                        console.log(Notes_Count_2000, "==> 2000 Notes")
                        Count = Count + Notes_Count_2000;
                        WithdrawAmount = WithdrawAmount - Notes_Count_2000 * 2000;
                    }
                    if ((Notes_500) && (WithdrawAmount >= 500)) {
                        var Notes_Count_500 = (Math.floor(WithdrawAmount / 500))
                        console.log(Notes_Count_500, "==> 500 Notes")
                        Count = Count + Notes_Count_500;
                        WithdrawAmount = WithdrawAmount - Notes_Count_500 * 500;
                    }
                    if ((Notes_200) && (WithdrawAmount >= 200)) {
                        var Notes_Count_200 = (Math.floor(WithdrawAmount / 200))
                        console.log(Notes_Count_200, "==> 200 Notes")
                        Count = Count + Notes_Count_200;
                        WithdrawAmount = WithdrawAmount - Notes_Count_200 * 200;
                    }
                    if ((Notes_100) && (WithdrawAmount >= 100)) {
                        var Notes_Count_100 = (Math.floor(WithdrawAmount / 100))
                        console.log(Notes_Count_100, "==> 100 Notes")
                        Count = Count + Notes_Count_100;
                        WithdrawAmount = WithdrawAmount - Notes_Count_100 * 100;
                    }
                    console.log("Notes_Count : ", Count)




                }

                else {
                    console.log("insufficient bank balance can't withdraw ")
                }
            }



            else if (option == options.BalanceEnquiry) {
                console.log("BalanceEnquiry")
                console.log(Bankbalance)
            }
            else if (option == options.MoneyTransfer) {
                console.log("MoneyTransfer")
                var TransferUserNameID = prompt("enter the transfer username: ")
                var TransferAccountNumber = prompt("enter the account number: ")
                if ((TransferUserNameID === SBI.TransferUserName && TransferAccountNumber === SBI.AccountNumber) || (TransferUserNameID === AXIS.TransferUserName && TransferAccountNumber === AXIS.AccountNumber) || (TransferUserNameID === HDFC.TransferUserName && TransferAccountNumber === HDFC.AccountNumber)) {
                    var TransferAmount = parseInt(prompt("enter the transfer amount: "))
                    if ((TransferAmount <= Bankbalance)) {
                        TransferBankbalance += TransferAmount;
                        Bankbalance -= TransferAmount;
                        var PrintTransferAmount = `$${TransferAmount}  amount transferred successfully to ${TransferUserNameID}`
                        PrintMiniStatement.push([PrintTransferAmount])
                    }

                }

            }

            else if (option == options.MiniStatement) {
                console.log("MiniStatement")
                console.log(PrintMiniStatement)
            }



            else if (option == options.Exit) {
                console.log("Exit")
                break;
            }


            else {
                console.log("please give proper details")
            }




        }
    }
    else {
        console.log("Details are not valid")
    }

}

BankingProcess()