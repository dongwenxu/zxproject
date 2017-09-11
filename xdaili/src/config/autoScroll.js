// var div, span, span2, i, timer;

//   function init() {
//     setInterval(ttb, 50);
//   }

//   function ttb() {
//     div = getId('div1');
//     span = getId('span1');
//     span2 = getId('span2');

//     span2.innerHTML = span.innerHTML;
//     if (span.offsetWidth <= div.scrollLeft) {
//       div.scrollLeft -= span.offsetWidth;

//     } else {
//       div.scrollLeft++;
//     }

//   }

//   function getId(Id) {
//     return document.getElementById(Id);
//   }
//   window.onload = init();

const autoScroll = {
  getId(Id){
    return document.getElementById(Id);
  },
  ttb(getId){
    let div = getId('div1');
    let span = getId('span1');
    let span2 = getId('span2');
    span2.innerHTML = span.innerHTML;
    if (span.offsetWidth <= div.scrollLeft) {
      div.scrollLeft -= span.offsetWidth;

    } else {
      div.scrollLeft++;
    }
  },
  init(ttb){
    setInterval(ttb, 50);
  }
}

export default{
  autoScroll
}