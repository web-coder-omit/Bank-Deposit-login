document.getElementById('btn2').addEventListener('click',function(){
  let withdrawInput = document.getElementById('withdrawInput');
  let withdrawInputInt = parseInt(withdrawInput.value);
  withdrawInput.value='';
  let innerHeader2$ = document.getElementById('innerHeader2$');
  let innerHeader2$Int = parseInt(innerHeader2$.innerText);
  let sum3 =withdrawInputInt + innerHeader2$Int;
  innerHeader2$.innerText = sum3;
  let innerHeader3$ = document.getElementById('innerHeader3$');
  let innerHeader3$Value = parseFloat(innerHeader3$.innerText);
  let withdrawBalance = innerHeader3$Value - withdrawInputInt;
  innerHeader3$.innerText = withdrawBalance;
});
 document.getElementById('btn1').addEventListener('click',function(){
      let depositInput = document.getElementById('depositInput');
      let value =Math.floor(depositInput.value);
      let innerHeader1$ = document.getElementById('innerHeader1$');
      let inH1V = innerHeader1$.innerText;
      let b = Math.floor(inH1V);
      let sum = value + b;
      innerHeader1$.innerText =sum;
      depositInput.value = '';   
      var innerHeader3$ = document.getElementById('innerHeader3$');
      var innerHeader3$Int = parseInt(innerHeader3$.innerText);
      var sum2 = value + innerHeader3$Int;
      innerHeader3$.innerText = sum2;
  });