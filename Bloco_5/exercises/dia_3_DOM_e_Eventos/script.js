function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//1 
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let exe1 = document.querySelector('#days');

function days() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dias = dezDaysList[index];

    let newDays = document.createElement('li');
    newDays.innerText = dias;
    newDays.className = 'day';
    
    if (dezDaysList[index] === 24) {
    newDays.className = 'day holiday';
    };
    if (dezDaysList[index] === 25) {
      newDays.className = 'day friday holiday';
    };
    if (dezDaysList[index] === 31) {
      newDays.className = 'day holiday';
    };
    if (dezDaysList[index] === 4) {
      newDays.className = 'day friday';
    }
    if (dezDaysList[index] ===11) {
      newDays.className = 'day friday';
    }
    if (dezDaysList[index] ===18) {
      newDays.className = 'day friday';
    }

    exe1.appendChild(newDays);
  }
}
days();

//2 
let botao = document.querySelector('.buttons-container');
let Feriados = document.createElement('button');
Feriados.innerText = 'FERIADOS';
Feriados.className = 'btn-holiday';
botao.appendChild(Feriados);

//3
function buttonHoliday() {
  let button = document.querySelector('.btn-holiday');

  button.addEventListener('click', function() {
    let holiday = document.querySelectorAll('.holiday');
    for (index = 0; index < holiday.length; index +=1) {
      if (holiday[index].style.backgroundColor === 'rgb(238, 238, 238)') {
        holiday[index].style.backgroundColor = 'steelblue';
      } else {
        holiday[index].style.backgroundColor = 'rgb(238, 238, 238)';
      }
    }
  });
}
buttonHoliday();

//4 
let buttonFriday = document.querySelector('.buttons-container');
let friday = document.createElement('button');
friday.innerText = 'SEXTA - FEIRA';
friday.className = 'btn-friday';
buttonFriday.appendChild(friday);

//5
function sextinha() {
  let button = document.querySelector('.btn-friday');
  button.addEventListener('click', function() {
    let fri = document.querySelectorAll('.friday');
    for(i = 0;i < fri.length;i +=1){
      let fridas = fri[i].innerText;
      if (fridas === fridas) {
        fridas = 'Sexxtou';
      } else {
        fridas = fridas;
      }
    }
  });
}
sextinha();
