// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
//та прочитати його значення.
//<!DOCTYPE html>
//<html>
//<body>
//<div data-widget-name="menu">Виберіть жанр</div>
//<script>/* ваш код */</script>
//</body>
//</html>  

const info = document.querySelector('[data-widget-name="menu"]');
console.log(info);
console.log(info.getAttribute("data-widget-name"));