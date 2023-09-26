let option;

function chooseOption(choice) {
  option = choice;
  displayOutcome();
}

function displayOutcome() {
  let outcomeMessage = '';

  if (option === 1) {
    outcomeMessage = '你选择默默忍受。';
  } else if (option === 2) {
    outcomeMessage = '你选择勤奋工作，老板对你印象不错。';
  } else if (option === 3) {
    outcomeMessage = '你选择打老板耳光，你被开除了。游戏结束。';
  } else {
    outcomeMessage = '请选择一个选项。';
  }

  document.getElementById('scene-text').innerText = outcomeMessage;
}
