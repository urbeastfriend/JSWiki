
// Модуль не обязательно должен содержать ключевые слова export
// Если мы подключим такой модуль в другом файле - выполнятся все его операции, однако все определённые и не экспортируемые компоненты
// не будут доступны вне этого модуля. Так мы не сможем обратиться к полям модуля `moduleToImport.js` из модуля `moduleWhichImports.js`

// Такой способ импорта может показаться бессмысленным, тем не менее мы можем воспользоваться преимуществами модуля:
// Например возможностью использовать await без определения асинхронных функций.
