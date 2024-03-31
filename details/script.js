const container=document.querySelector('.container');
const boxs=document.querySelectorAll('.box');
container.style.height=`${boxs.length}00%`;
// 定义当前页面的索引
let pageIndex=0;
// 定义是否允许滚动
let pageScroll=true;
// 定义上一次页面的索引
let prevIndex=0;

// 向上滚动
function scrollUp(){
    if(pageIndex>0 && pageScroll){
        prevIndex=pageIndex;
        pageIndex--;
        scrollToPage(pageIndex);
    }else if(pageIndex<=0){
        pageIndex=0;
    }
}
// 向下滚动
function scrollDown(){
    if(pageIndex<boxs.length-1 && pageScroll){
        prevIndex=pageIndex;
        pageIndex++;
        scrollToPage(pageIndex);
    }else if(pageIndex>=boxs.length-1){
        pageIndex=boxs.length-1;
    }
}
// 滚动到指定页面
function scrollToPage(pageIndex){
    container.style.top=`-${pageIndex}00%`;
    pageScroll=false;
    scrollTimer();
}
// 设置定时器，等待500毫秒后，允许再次滚动
function scrollTimer(){
    setTimeout(() => {
        pageScroll=true;
    }, 600);
}
// 鼠标滚轮事件
function mouseWheel(e){
    if(e.wheelDelta){
        if(e.wheelDelta>0){
            scrollUp();
        }else{
            scrollDown();
        }
    }else{
        if(e.detail>0){
            scrollDown();
        }else{
            scrollUp();
        }
    }
}
// 添加鼠标滚轮事件
document.onmousewheel=mouseWheel;
document.addEventListener('DOMMouseScroll',mouseWheel,false);
// 设置滚动记录
history.scrollRestoration='manual';


//1-Alaska
let oMain = document.querySelector('#main1');
let oMirror = document.querySelector('#mirror1');
let oZoomImg = document.querySelector('#mirror1 img');

oMain.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain.offsetLeft;
    let y_top = e.clientY - oMain.offsetTop;

    oMirror.style.left = x_left - oMirror.offsetWidth / 2 + 'px';
    oMirror.style.top = y_top - oMirror.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain.offsetWidth) * (e.clientX - oMain.getBoundingClientRect().left) - (oMirror.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain.offsetHeight) * (e.clientY - oMain.getBoundingClientRect().top) - (oMirror.offsetHeight / 2);

    oZoomImg.style.left = -zoomImgLeft * 15 - 300 + 'px';
    oZoomImg.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//2-Chamonix
let oMain2 = document.querySelector('#main2');
let oMirror2 = document.querySelector('#mirror2');
let oZoomImg2 = document.querySelector('#mirror2 img');

oMain2.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain2.offsetLeft;
    let y_top = e.clientY - oMain2.offsetTop;

    oMirror2.style.left = x_left - oMirror2.offsetWidth / 2 + 'px';
    oMirror2.style.top = y_top - oMirror2.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain2.offsetWidth) * (e.clientX - oMain2.getBoundingClientRect().left) - (oMirror2.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain2.offsetHeight) * (e.clientY - oMain2.getBoundingClientRect().top) - (oMirror2.offsetHeight / 2);

    oZoomImg2.style.left = -zoomImgLeft * 15 - 320 + 'px';
    oZoomImg2.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//3-Holland
let oMain3 = document.querySelector('#main3');
let oMirror3 = document.querySelector('#mirror3');
let oZoomImg3 = document.querySelector('#mirror3 img');

oMain3.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain3.offsetLeft;
    let y_top = e.clientY - oMain3.offsetTop;

    oMirror3.style.left = x_left - oMirror3.offsetWidth / 2 + 'px';
    oMirror3.style.top = y_top - oMirror3.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain3.offsetWidth) * (e.clientX - oMain3.getBoundingClientRect().left) - (oMirror3.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain3.offsetHeight) * (e.clientY - oMain3.getBoundingClientRect().top) - (oMirror3.offsetHeight / 2);

    oZoomImg3.style.left = -zoomImgLeft * 15 - 320 + 'px';
    oZoomImg3.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//4-Houtong
let oMain4 = document.querySelector('#main4');
let oMirror4 = document.querySelector('#mirror4');
let oZoomImg4 = document.querySelector('#mirror4 img');

oMain4.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain4.offsetLeft;
    let y_top = e.clientY - oMain4.offsetTop;

    oMirror4.style.left = x_left - oMirror4.offsetWidth / 2 + 'px';
    oMirror4.style.top = y_top - oMirror4.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain4.offsetWidth) * (e.clientX - oMain4.getBoundingClientRect().left) - (oMirror4.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain4.offsetHeight) * (e.clientY - oMain4.getBoundingClientRect().top) - (oMirror4.offsetHeight / 2);

    oZoomImg4.style.left = -zoomImgLeft * 15 - 320 + 'px';
    oZoomImg4.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//5-Iceland
let oMain5 = document.querySelector('#main5');
let oMirror5 = document.querySelector('#mirror5');
let oZoomImg5 = document.querySelector('#mirror5 img');

oMain5.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain5.offsetLeft;
    let y_top = e.clientY - oMain5.offsetTop;

    oMirror5.style.left = x_left - oMirror5.offsetWidth / 2 + 'px';
    oMirror5.style.top = y_top - oMirror5.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain5.offsetWidth) * (e.clientX - oMain5.getBoundingClientRect().left) - (oMirror5.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain5.offsetHeight) * (e.clientY - oMain5.getBoundingClientRect().top) - (oMirror5.offsetHeight / 2);

    oZoomImg5.style.left = -zoomImgLeft * 15 - 320 + 'px';
    oZoomImg5.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//6-Japan
let oMain6 = document.querySelector('#main6');
let oMirror6 = document.querySelector('#mirror6');
let oZoomImg6 = document.querySelector('#mirror6 img');

oMain6.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain6.offsetLeft;
    let y_top = e.clientY - oMain6.offsetTop;

    oMirror6.style.left = x_left - oMirror6.offsetWidth / 2 + 'px';
    oMirror6.style.top = y_top - oMirror6.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain6.offsetWidth) * (e.clientX - oMain6.getBoundingClientRect().left) - (oMirror6.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain6.offsetHeight) * (e.clientY - oMain6.getBoundingClientRect().top) - (oMirror6.offsetHeight / 2);

    oZoomImg6.style.left = -zoomImgLeft * 15 - 320 + 'px';
    oZoomImg6.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//7-Las Vegas
let oMain7 = document.querySelector('#main7');
let oMirror7 = document.querySelector('#mirror7');
let oZoomImg7 = document.querySelector('#mirror7 img');

oMain7.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain7.offsetLeft;
    let y_top = e.clientY - oMain7.offsetTop;

    oMirror7.style.left = x_left - oMirror7.offsetWidth / 2 + 'px';
    oMirror7.style.top = y_top - oMirror7.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain7.offsetWidth) * (e.clientX - oMain7.getBoundingClientRect().left) - (oMirror7.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain7.offsetHeight) * (e.clientY - oMain7.getBoundingClientRect().top) - (oMirror7.offsetHeight / 2);

    oZoomImg7.style.left = -zoomImgLeft * 15 - 320 + 'px';
    oZoomImg7.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//8-Melbourne
let oMain8 = document.querySelector('#main8');
let oMirror8 = document.querySelector('#mirror8');
let oZoomImg8 = document.querySelector('#mirror8 img');

oMain8.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain8.offsetLeft;
    let y_top = e.clientY - oMain8.offsetTop;

    oMirror8.style.left = x_left - oMirror8.offsetWidth / 2 + 'px';
    oMirror8.style.top = y_top - oMirror8.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain8.offsetWidth) * (e.clientX - oMain8.getBoundingClientRect().left) - (oMirror8.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain8.offsetHeight) * (e.clientY - oMain8.getBoundingClientRect().top) - (oMirror8.offsetHeight / 2);

    oZoomImg8.style.left = -zoomImgLeft * 15 - 320 + 'px';
    oZoomImg8.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//9-New Zealand
let oMain9 = document.querySelector('#main9');
let oMirror9 = document.querySelector('#mirror9');
let oZoomImg9 = document.querySelector('#mirror9 img');

oMain9.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain8.offsetLeft;
    let y_top = e.clientY - oMain8.offsetTop;

    oMirror9.style.left = x_left - oMirror9.offsetWidth / 2 + 'px';
    oMirror9.style.top = y_top - oMirror9.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain9.offsetWidth) * (e.clientX - oMain9.getBoundingClientRect().left) - (oMirror9.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain9.offsetHeight) * (e.clientY - oMain9.getBoundingClientRect().top) - (oMirror9.offsetHeight / 2);

    oZoomImg9.style.left = -zoomImgLeft * 15 - 320 + 'px';
    oZoomImg9.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//10-Paris
let oMain10 = document.querySelector('#main10');
let oMirror10 = document.querySelector('#mirror10');
let oZoomImg10 = document.querySelector('#mirror10 img');

oMain10.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain10.offsetLeft;
    let y_top = e.clientY - oMain10.offsetTop;

    oMirror10.style.left = x_left - oMirror10.offsetWidth / 2 + 'px';
    oMirror10.style.top = y_top - oMirror10.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain10.offsetWidth) * (e.clientX - oMain10.getBoundingClientRect().left) - (oMirror10.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain10.offsetHeight) * (e.clientY - oMain10.getBoundingClientRect().top) - (oMirror10.offsetHeight / 2);

    oZoomImg10.style.left = -zoomImgLeft * 15 - 320 + 'px';
    oZoomImg10.style.top = -zoomImgTop * 15 - 100 + 'px';
});

//11-Singapore
let oMain11 = document.querySelector('#main11');
let oMirror11 = document.querySelector('#mirror11');
let oZoomImg11 = document.querySelector('#mirror11 img');

oMain11.addEventListener('mousemove', e => {
    let x_left = e.clientX - oMain11.offsetLeft;
    let y_top = e.clientY - oMain11.offsetTop;

    oMirror11.style.left = x_left - oMirror11.offsetWidth / 2 + 'px';
    oMirror11.style.top = y_top - oMirror11.offsetHeight * 1.8 + 'px';

    let zoomImgLeft = (oZoomImg.offsetWidth / oMain.offsetWidth) * (e.clientX - oMain11.getBoundingClientRect().left) - (oMirror11.offsetWidth / 2);
    let zoomImgTop = (oZoomImg.offsetHeight / oMain.offsetHeight) * (e.clientY - oMain11.getBoundingClientRect().top) - (oMirror11.offsetHeight / 2);

    oZoomImg11.style.left = -zoomImgLeft * 15 - 300 + 'px';
    oZoomImg11.style.top = -zoomImgTop * 15 - 100 + 'px';
});