javascript: 
(function(){
  $('div.seasonBlock').each(function() {
    closeSeasonBlock(this.id);
  }); 
  saveCookies(); 
  alert('Все свернуто! Перезагрузи страницу.');
})();
