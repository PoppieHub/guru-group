[К содержанию](../readme.md)

## Базовая информация по приложению

----

* Для начала необходимо установить все зависимости React приложения на внешней стороне:
  ```bash 
    cd app/client && npm install
  ```
* После необходимо вернутся в корень проекта и для того чтобы конфиг развернул все зависимости и установил пакеты, а также собрал образы и контейнеры, в терменале вводим:
  ```bash 
    docker-compose up -d
  ```
  Более подробная инструкция по Docker см в [Инструкция по развертыванию Docker и базовых команд](./dockerCommands.md)

* Дальше необходимо добавить строчку `127.0.0.1 guru-group.client` в файл hosts, чтобы иметь локальный доступ к приложению внутри браузера.

* Само приложение в dev режиме, будет доступно по `http://guru-group.client:3000/`