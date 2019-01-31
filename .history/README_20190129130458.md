# homework-4

Создайте репозиторий homework-4 и добавьте файлы index.html и main.js.


В этом репозитории в файлах `index.html` и `main.js` примеры с прошлого занятия

## Задание 1

Сделайте обход дерева документа снизу вверх. От самого глубокого дочернего `deepChild` элемента, до вернего `parent` элемента.
Во время всплытия выводите в `blockName` имя тега, по желанию можно добавить стили к блоку ( любые на ваш выбор )

Помним что работа с DOM возможна только после его построения, поэтому скрипт подключаем в самый низ <body>

```
<!DOCTYPE html>
<html>
    <head></head>
    <body>

        <div></div>

        <script></script>
    </body>
</html>
```


Не забываем добавлять `setTimeout( () => { }, 300 )` чтобы видеть работу

```
<div class="wrapper">
    <div class="parent">
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div class="deepChild"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="blockName">
    </div>
</div>
```

## Задание 2 ( сложнее )

* Найти `deepChild` в блоке `sibling first`
* Подняться до блока `sibling first`
* Найти рядом сестринский блок `sibling second` 
* Спуститься до блока `deepChild` в блоке `sibling second`

во время прохода вверх из первого блока ( sibling first ) - добавляем блокам красную рамку.
во время спуска по второму блоку ( sibling second ) - добавляем блокам зеленую рамку.

html внизу как пример, можете набрасать свой и назвать классы по другому.

```
<div class="parent">
    <div>
        <div>
            <div class="sibling first">
                <div>
                    <div>
                        <div>
                            <div class="deepChild"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sibling second">
                <div>
                    <div>
                        <div>
                            <div class="deepChild"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
```

## Задание 2 ( по желанию )

Вывести данные на страницу в таблице с помошью javascript.

Можно решить двумя способами. 
* Вывести с помошью innerHtml
* Создавать элементы `createElement` и добавлять в `documentFragment`

первый вариант лучше.

В таблице два столбца и 4 колонки.

```
const dataTable = [
    {
        name: 'name1',
        value: '1'
    },
    {
        name: 'name2',
        value: '2'
    },
    {
        name: 'name3',
        value: '3'
    },
    {
        name: 'name4',
        value: '4'
    },
];

let table = '';

dataTable.forEach(() => {})

// или 

const rowResult = dataTable.map(() => {})
rowResult.join()

```