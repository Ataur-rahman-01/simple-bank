// LOGIN BTN EVENT HANDLAR
const btnLogin = document.getElementById("log-in");
btnLogin.addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transation-area").style.display = "block";
});
// DEPOSITE BTN EVENT HANDLAR
const depositeBtn = document.getElementById("addDeposite");
depositeBtn.addEventListener("click", function () {
  var depositeMoney = getInputNumber("depositeAmount");
  //   const deposite = document.getElementById("depositeAmount").value;
  //   const depositeMoney = parseFloat(deposite);
  updateSpanText("give-money", depositeMoney);
  updateSpanText("main-blance", depositeMoney);

  //   const givingMoney = document.getElementById("give-money").innerText;
  //   const realMoney = parseFloat(givingMoney);
  //   var totaldeposite = depositeMoney + realMoney;
  //   document.getElementById("give-money").innerText = totaldeposite;

  //   const blance = document.getElementById("main-blance").innerText;
  //   const blanceNumber = parseFloat(blance);
  //   var totalMainBlance = depositeMoney + blanceNumber;
  //   document.getElementById("main-blance").innerText = totalMainBlance;

  document.getElementById("depositeAmount").value = "";
});

// WITHDROW BTN EVENT HANDLAR
const withdrowBtn = document.getElementById("addWithdrow");
withdrowBtn.addEventListener("click", function () {
  const withdrowMoney = getInputNumber("withdrowAmount");
  updateSpanText("withdrow-money", withdrowMoney);
  updateSpanText("main-blance", -1 * withdrowMoney);
  document.getElementById("withdrowAmount").value = "";
});
function getInputNumber(id) {
  const someValue = document.getElementById(id).value;
  const aNumber = parseFloat(someValue);
  return aNumber;
}

function updateSpanText(id, depositeMoney) {
  const givingMoney = document.getElementById(id).innerText;
  const moneyNumber = parseFloat(givingMoney);
  var totaldeposite = depositeMoney + moneyNumber;
  document.getElementById(id).innerText = totaldeposite;
}
