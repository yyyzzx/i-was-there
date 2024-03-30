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
    }, 900);
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
