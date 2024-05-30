const calObj = {
  num1:"",
  num2:"",
  operator:""
}

const operatorList=['+','-','*','/'];

const input = document.querySelector('input');
const keyboards = document.querySelector('.keyboards');

keyboards.addEventListener('click',(e)=>{
  const target = e.target;
  if(calObj.num1&&calObj.num2&&calObj.operator&&!target.classList.contains('ac')){
    input.value = 'ERROR';
    return;
  }
  if(target.classList.contains('number')){
    if(calObj.operator!=''&&calObj.num2==""){
      input.value =target.textContent;
    }else{
      input.value = input.value+target.textContent;
    }

  }else if(target.classList.contains('operator')){
    if(Number(input.value)!=NaN){
      calObj.num1 = input.value;
      calObj.operator = target.textContent;
      input.value = target.textContent;
    }
    else if(operatorList.includes(input.value)){
      calObj.operator = target.textContent;
      input.value = target.textContent;
    }else{
      input.value = 'ERROR';
    }

  }else if(target.classList.contains('equal')){
    if(Number(input.value)!=NaN){
      calObj.num2 = input.value;
      if(calObj.operator=='+')input.value = Number(calObj.num1)+Number(calObj.num2);
        else if(calObj.operator=='-')input.value = Number(calObj.num1)-Number(calObj.num2);
          else if(calObj.operator=='*')input.value = Number(calObj.num1)*Number(calObj.num2);
            else if(calObj.operator=='/')input.value = Number(calObj.num1)/Number(calObj.num2);
    }else{
      input.value = 'ERROR';
    }
  }else if(target.classList.contains('ac')){
    calObj.num1='';
    calObj.num2='';
    calObj.operator='';
    input.value=''
  }
})