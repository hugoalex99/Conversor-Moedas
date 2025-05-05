const convertButton = document.querySelector(".convert-button")// seleciona o botão de converter a função
const currencyselect = document.querySelector(".currency-select") // seleciona o select segundo
const convertselect = document.querySelector(".convert-select") // seleciona o select primeiro

function convertValues() { // função para converter o valor
    const inputCurrencyValue = document.querySelector(".input-currency").value // valor digitado pelo usuário e pega apenas o valor
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor digitado aparece no primeiro p
    const currencyValueConverted = document.querySelector(".currency-value") // valor convertido, vaor do p dolar, eu, bitcoin e libra


    const dolarToday = 5.81 // valor do dolar no dia
    const euroToday = 6.75 // valor do euro no dia
    const libraToday = 7.70 // valor do libra no dia
    const bitcoinToday = 515879 // valor do bitcoin no dia



    if (convertselect.value == "real-br") { // se o valor selecionado no select for igual a real brasileiro
        if (currencyselect.value == "dolar") { // se o valor selecionado no select for igual a dolar
            currencyValueConverted.innerHTML = new Intl.NumberFormat // formatando o valor para o formato americano, documentaçao apenas segue o formato
                ("en-US", {
                    style: "currency",
                    currency: "USD"
                })
                .format(inputCurrencyValue / dolarToday)
        }
        if (currencyselect.value == "euro") { // se o valor selecionado no select for igual a euro
            currencyValueConverted.innerHTML = new Intl.NumberFormat // formatando o valor para o formato americano, documentaçao apenas segue o formato
                ("de-DE", {
                    style: "currency",
                    currency: "EUR"
                })
                .format(inputCurrencyValue / euroToday)
        }
        if (currencyselect.value == "libra") { // se o valor selecionado no select for igual a libra
            currencyValueConverted.innerHTML = new Intl.NumberFormat // formatando o valor para o formato americano, documentaçao apenas segue o formato
                ("en-GB", {
                    style: "currency",
                    currency: "GBP"
                })
                .format(inputCurrencyValue / libraToday)
        }
        if (currencyselect.value == "bitcoin") { // se o valor selecionado no select for igual a bitcoin
            currencyValueConverted.innerHTML = new Intl.NumberFormat // formatando o valor para o formato americano, documentaçao apenas segue o formato
                ("en-US", {
                    style: "currency",
                    currency: "BTC"
                })
                .format(inputCurrencyValue / bitcoinToday)
        }
        if(currencyselect.value == "real") { // se o valor selecionado no select for igual a real brasileiro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL" 
            }).format(inputCurrencyValue)
        }
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (convertselect.value == "dolar-us") { // se o valor selecionado no select for igual a dolar americano
        if (currencyselect.value == "real") { // se o valor selecionado no select for igual a real brasileiro
            currencyValueConverted.innerHTML = new Intl.NumberFormat // formatando o valor para o formato americano, documentaçao apenas segue o formato
                ("en-US", {
                    style: "currency",
                    currency: "USD"
                })
                .format(inputCurrencyValue * dolarToday)
        }
        if (currencyselect.value == "euro") { // se o valor selecionado no select for igual a euro
            currencyValueConverted.innerHTML = new Intl.NumberFormat // formatando o valor para o formato americano, documentaçao apenas segue o formato
                ("de-DE", {
                    style: "currency",
                    currency: "EUR"
                })
                .format(inputCurrencyValue * 0.87)
        }
        if (currencyselect.value == "libra") { // se o valor selecionado no select for igual a libra
            currencyValueConverted.innerHTML = new Intl.NumberFormat // formatando o valor para o formato americano, documentaçao apenas segue o formato
                ("en-GB", {
                    style: "currency",
                    currency: "GBP"
                })
                .format(inputCurrencyValue * 0.75)
        }
        if (currencyselect.value == "bitcoin") { // se o valor selecionado no select for igual a bitcoin
            currencyValueConverted.innerHTML = new Intl.NumberFormat // formatando o valor para o formato americano, documentaçao apenas segue o formato
                ("en-US", {
                    style: "currency",
                    currency: "BTC"
                })
                .format(inputCurrencyValue * 0.000011)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (convertselect.value == "euro-de") { // se o valor selecionado no select for igual a euro
        if (currencyselect.value == "real") { // se o valor selecionado no select for igual a real brasileiro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * 6,75)
        }
        if (currencyselect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat
                ("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrencyValue * 1.15)
        }
        if (currencyselect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat
                ("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format(inputCurrencyValue * 0.85)
        }
        if (currencyselect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat
                ("en-US", {
                    style: "currency",
                    currency: "BTC"
                }).format(inputCurrencyValue * 0.000011)
        }
        if(currencyselect.value == "euro") { // se o valor selecionado no select for igual a real brasileiro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (convertselect.value == "libra-en") { // se o valor selecionado no select for igual a libra
        if (currencyselect.value == "real") { // se o valor selecionado no select for igual a real brasileiro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * 7.70)
        }
        if (currencyselect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat
                ("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrencyValue * 1.33)
        }
        if (currencyselect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat
                ("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrencyValue * 1.16)
        }
        if (currencyselect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat
                ("en-US", {
                    style: "currency",
                    currency: "BTC"
                }).format(inputCurrencyValue * 0.000015)
        }
        if(currencyselect.value == "libra") { // se o valor selecionado no select for igual a real brasileiro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if (convertselect.value == "bitcoin-btc") { // se o valor selecionado no select for igual a bitcoin
        if (currencyselect.value == "real") { // se o valor selecionado no select for igual a real brasileiro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * 515879)
        }
        if (currencyselect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat
                ("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrencyValue * 87291.67)
        }
        if (currencyselect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat
                ("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrencyValue * 75730.08)
        }
        if (currencyselect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat
                ("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format(inputCurrencyValue * 65210.19)
        }
        if(currencyselect.value == "bitcoin") { // se o valor selecionado no select for igual a real brasileiro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

}
function changeCurrency() { /// função para mudar a moeda
    const currencyName = document.getElementById("currency-name") // seleciona o nome da moeda
    const currencyImg = document.querySelector(".currency-img") // seleciona a imagem da moeda
    const convertName = document.querySelector(".convert-name") // seleciona o nome da moeda
    const convertImg = document.querySelector(".convert-img") // seleciona a imagem da moeda
    
    if (convertselect.value == "real-br") { // se o valor selecionado no select for igual a real brasileiro
        convertName.innerHTML = "Real Brasileiro" /// muda o nome da moeda
        convertImg.src = "./assets/png/brasil.png"  // muda a imagem da moeda
    }
    if (convertselect.value == "dolar-us") { // se o valor selecionado no select for igual a dolar
        convertName.innerHTML = "Dólar Americano" /// muda o nome da moeda
        convertImg.src = "./assets/png/dolar.png"  // muda a imagem da moeda
    }
    if (convertselect.value == "euro-de") { // se o valor selecionado no select for igual a euro
        convertName.innerHTML = "Euro"  /// muda o nome da moeda
        convertImg.src = "./assets/png/euro.png"  // muda a imagem da moeda
    }
    if (convertselect.value == "libra-en") { // se o valor selecionado no select for igual a libra
        convertName.innerHTML = "Libra"  /// muda o nome da moeda
        convertImg.src = "./assets/png/libra.png"  // muda a imagem da moeda
    }
    if (convertselect.value == "bitcoin-btc") { // se o valor selecionado no select for igual a bitcoin
        convertName.innerHTML = "Bitcoin"  /// muda o nome da moeda
        convertImg.src = "./assets/png/bitcoin.png"  // muda a imagem da moeda
    }
    if (currencyselect.value == "real") { // se o valor selecionado no select for igual a real brasileiro
        currencyName.innerHTML = "Real Brasileiro" /// muda o nome da moeda
        currencyImg.src = "./assets/png/brasil.png"  // muda a imagem da moeda
    }

    if (currencyselect.value == "dolar") {   // se o valor selecionado no select for igual a dolar
        currencyName.innerHTML = "Dólar Americano" /// muda o nome da moeda
        currencyImg.src = "./assets/png/dolar.png"  // muda a imagem da moeda
    }
    if (currencyselect.value == "euro") { // se o valor selecionado no select for igual a euro
        currencyName.innerHTML = "Euro"  /// muda o nome da moeda
        currencyImg.src = "./assets/png/euro.png"  // muda a imagem da moeda
    }
    if (currencyselect.value == "libra") { // se o valor selecionado no select for igual a libra
        currencyName.innerHTML = "Libra"  /// muda o nome da moeda
        currencyImg.src = "./assets/png/libra.png"  // muda a imagem da moeda
    }
    if (currencyselect.value == "bitcoin") { // se o valor selecionado no select for igual a bitcoin
        currencyName.innerHTML = "Bitcoin"  /// muda o nome da moeda
        currencyImg.src = "./assets/png/bitcoin.png"  // muda a imagem da moeda
    }

    convertValues()  // chama a função convertValues
     
}

convertselect.addEventListener("change", changeCurrency) // quando o valor do select mudar ele chama a função convertValues
currencyselect.addEventListener("change", changeCurrency) // quando o valor do select mudar ele chama a função convertValues
convertButton.addEventListener("click", convertValues) // quando clicar no botão ele chama a função convertValues
