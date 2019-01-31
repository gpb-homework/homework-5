# homework-5

Создайте репозиторий homework-5 и добавьте файлы index.html и main.js.


В этом репозитории в файлах `index.html` и `main.js` примеры с прошлого занятия


## ссылки 
```
http://learn.javascript.ru/introduction-browser-events
http://learn.javascript.ru/event-bubbling
http://learn.javascript.ru/obtaining-event-object
```


## Задание 1

Реализовать `drag and drop`, перетаскивание предмета мишью

почитать можно тут - https://learn.javascript.ru/drag-and-drop

* навести на блок курсор мыши
* нажать и держать левую кнопку мыши над блоком
* начать движение мышью, блок должен дмигаться вместе с мышью ( быть под курсором )

```
<!DOCTYPE html>
<html>
    <head>
        <style>
            .dragElement {
                width: 50px;
                height: 50px;
                background: red;
                cursor: move;
            }
        </style>
    </head>
    <body>

        <div class="dragElement"></div>

        <script src="./main.js"></script>
    </body>
</html>
```
