/**
 * 常见bug整理
 */

 //1、苹果手机在input失焦时键盘缩回缩后，页面不归位解决方法-------------------------------------
    $("input").on("blur",function(){
        window.scroll(0,0); //让页面归位
    });

 //2、overflow：scroll；苹果下滑动卡顿-------------------------------------------------------

    -webkit-overflow-scrolling : touch;

 //3、input控件问题-------------------------------------------------------------------------

    type = text//建议： 避免使用其他 
    
 
    //  仅输入数字：
 
    phoneReg: /^1{1}[0-9]{0,10}$/,
 
    if (this.phoneNumber && this.phoneReg.test(this.phoneNumber) === false) {
                     this.phoneNumber = this.phoneNumber.slice(0, this.phoneNumber.length - 1);
                 }
 
    //  控制长度 ：maxlength="11"
 
      if (this.phoneNumber.length >= 11) {
 
              this.phoneNumber = this.phoneNumber.slice(0, 11);
 
      }

 //4、苹果下定位导致文本框偏移问题------------------------------------------------------------

    （1）所有外层元素都使用fixed布局，如：
 
     <header style="position:fixed"></header>
 
     <article style="position:fixed"></article>
 
     <footer style="position:fixed"></footer>
 
    （2）使用absolute定位，并使用javascript动态改变层的位置
 
    （3）在有输入框输入的时候，隐藏fixed层或设计为relative

 //5、多行文本溢出显示省略号(...)的解决方案（webkit内核可用）-----------------------------------
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;