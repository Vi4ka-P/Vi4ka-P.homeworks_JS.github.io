var createDom = {

    createTitle: function(tagname, tagtext, tagclass) {
      var n = document.createElement(tagname);
      n.innerHTML = tagtext;
      n.className = tagclass;
      document.body.appendChild(n);
    },

    createList: function(tagtext, tagclass) {
      var list = document.createElement('ul');
      list.className = tagclass;
      for (var i = 0; i < tagtext.length; i++) {
        var listElement = document.createElement('li');
        var listInput = document.createElement('input');
        listInput.setAttribute('type', 'checkbox');
        listElement.innerHTML = '<span>' + tagtext[i] + '</span>';
        listElement.insertBefore(listInput, listElement.children[0]);
        list.appendChild(listElement);
        document.body.appendChild(list)
      }
    }
}

var head = 'Тест по программированию'

var questionText = ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3'];

var answerText = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

var button = 'Проверить мои результаты';

createDom.createTitle('h2', head, 'text-center');

for(var i = 0; i < questionText.length; i++){

    createDom.createTitle('h2', questionText[i], 'main__title');

    createDom.createList(answerText, 'list');

}

    createDom.createTitle('button', button, 'btn btn-default center-block');