const Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");



for(let select of dropdowns){
    for(currCode in countryList)
    {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name ==="from" && currCode ==="USD")
        {
            newOption.selected ="selected";
        }
        else if(select.name ==="to" && currCode==="INR")
        {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
       select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
       });
}
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
btn.addEventListener("click",async (evt) =>{
    evt.preventDefault();//we set form to do not perfrm its activity only do things that we mention
    let amount = document.querySelector(".amount input");
    console.log(amount);
    let amountVal = amount.value;
    if(amountVal ==="" || amountVal<1)
    {
        amountVal = 1;
        amount.value ="1";
    }
    console.log(fromCurr.value,toCurr.value);
    /*const URL = `${Base_URL}/${fromCurr.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
     let response = await fetch(URL);
     let data = await response.json();
     console.log(data);
     let rate = data[toCurr.value.toLowerCase()];
     console.log(rate);
     let finalAmount = amountVal * rate;
     msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;//10 USD = 832.911 INR */
});