# myshows_foldup
[Букмарклет](https://ru.wikipedia.org/wiki/Букмарклет) для сворачивания сезонов с непросмотренными эпизодами всех сериалов на странице профиля с сериалами на http://myshows.me


Так как гитхаб не поддерживает букмарклет ссылки, то придется сделать ее самим, но это просто. 

Надо на панели закладок добавить новую закладку и назвать ее как нибудь как вам нравится. Например, "свертка сериалов".

Потом нажать редактировать закладку и в поле адреса ввести код ниже, нажать сохранить, и все!

```js
javascript: (function(){$('div.seasonBlock').each(function() {closeSeasonBlock(this.id);}); saveCookies(); alert('Все свернуто! Перезагрузи страницу.');})();
```

Для нового дизайна.
```js
javascript: 
(
  function(){
    Array
      .from(document.getElementsByClassName("Row Unwatched-season"))
      .forEach(
          (entry) => {
          if(entry.getElementsByTagName('svg')[0].className.animVal.includes('collapsed')){
            entry.click()
          }
      }
  ); 
  alert('DONE!')}
)();
```

После этого, на странице сериалов (на http://myshows.me/profile/) можно просто нажать на закладку и все сериалы свернутся.

