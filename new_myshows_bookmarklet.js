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
