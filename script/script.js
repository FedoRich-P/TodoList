'use strict';
(function () {
  let todoArray = [];
  let keyName = '';

  function createAppTitle(title) {
    const appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const buttonWrapper = document.createElement('div');
    const button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');

    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';

    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.disabled = true;

    input.addEventListener('input', () => {
      button.disabled = !input.value.trim();
    });

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return { form, input, button };
  }

  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(obj) {
    const item = document.createElement('li');
    const itemText = document.createElement('span');
    const buttonGroup = document.createElement('div');
    const doneButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';
    item.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );

    itemText.textContent = obj.name;

    item.setAttribute('id', obj.id);

    if (obj.done) item.classList.add('list-group-item-success');

    doneButton.addEventListener('click', () => {
      doneBtn(item, obj.id);
    });

    deleteButton.addEventListener('click', () => {
      deleteBtn(item, obj.id);
    });

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(itemText);
    item.append(buttonGroup);

    return item;
  }

  function createTodoApp(container, title = 'Список дел', listName) {
    const todoAppTitle = createAppTitle(title);
    const { input, form, button } = createTodoItemForm();
    const todoList = createTodoList();

    keyName = listName;

    container.append(todoAppTitle);
    container.append(form);
    container.append(todoList);

    const savedFromLS = localStorage.getItem(listName);

    if (savedFromLS) todoArray = JSON.parse(savedFromLS);

    todoArray.forEach((el) => {
      todoList.append(createTodoItem(el));
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!input.value.trim()) return;

      let todoObj = {
        done: false,
        name: input.value,
        id: Date.now().toString(),
      };

      todoArray.push(todoObj);

      let item = createTodoItem(todoObj);

      todoList.append(item);

      input.value = '';
      input.focus();
      button.disabled = true;
      saveToLS(listName, todoArray);
      console.log(todoArray);
    });
  }

  function saveToLS(keyName, arr) {
    localStorage.setItem(keyName, JSON.stringify(arr));
  }

  function doneBtn(item, id) {
    item.classList.toggle('list-group-item-success');
    todoArray = todoArray.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          done: !el.done,
        };
      }
      return el;
    });
    saveToLS(keyName, todoArray);
  }

  function deleteBtn(item, id) {
    if (confirm('Вы уверены ?')) item.remove();
    todoArray = todoArray.filter((el) => el.id !== id);
    saveToLS(keyName, todoArray);
  }

  window.createTodoApp = createTodoApp;
})();
