// this sets the background color of the master UIView (when there are no windows/tab groups on it)
var DBNAME='prayer.db';
var DBCAT='prayers';
var db=Titanium.Database.install(DBNAME,DBCAT);
var TOTAL=92;

var promt1_c="停下来思想有关神的位格，能力，和完美。";
var promt2_c="停下来思想神奇妙工作的伟大。";
var promt3_c="停下来为你在基督耶稣里所享受的关系感谢神。";
var promt4_c="停下来请求神赐给你恩典成长敬虔的品格。";
var promt5_c="停下来反思你同他人的关系，并将他们交托给神。";

var promt1_e="Pause to think of the attribute, power and perfection of God";
var promt2_e="Pause to think of the greatness of God's wonderful work";
var promt3_e="Pause to thank God for the relationships you enjoyed in Christ Jesus";
var promt4_e="Pause to ask God to give you grace to grow Godly characters";
var promt5_e="Pause to think of your relationships to others and commit them to God";
var t1_c="敬拜赞美";
var t2_c="认罪悔改";
var t3_c="恢复更新";
var t4_c="个人祈求";
var t5_c="彼此代求";
var t6_c="信靠顺服";
var t7_c="感恩";
var t8_c="结束祷告";
var t1_e="Adoration";
var t2_e="Confession";
var t3_e="Renewal";
var t4_e="Petition";
var t5_e="Intercession";
var t6_e="Affirmation";
var t7_e="Thanks Giving";
var t8_e="Closing Prayer";


var help="Pray is the privilege and duty of Christians. Spiritual growth depends on prayers. Bible teaches us to pray constantly. Countless prayers are recorded in the Bible. God listens to our prayers. Jesus Christ prays in heaven for us. But many Christians are not satisfied or even frustrated with their prayer life. The good news is Bible studying and prayer goes hand in hand. You must pray before studying Bible for the guidance of Holy Spirit and open our Spiritual eyes, so that we may see what God is talking to us. On the other hand, The Word of God inspires us in Bible studying. Some reveal our sin, some open our eyes to see that people need God, some encourage us to have faith in God, some guide us to give thanks to God and praise Him. All these can be brought before God in prayers. So there is a way of prayer called Pray Scripture. It means to pray the Word of God back to God, at the same time the Word of God reveal us what to pray, so we can bring our praise, prayer, supplication and Thanksgiving to God. This application is created based on this idea.";
var help1="\nThe Content is edited using King James Version Bible based on <<Hand Book To Prayer>>(Kenneth Boa)\n\nThis application is a result of cooperation of Yiguang Hu and Rev. Biao Chen (PhD).\n";
var help2="祷告是基督徒的权力和义务。生命的成长离不开祷告。圣经教导我们要常常祷告。圣经中记载了无数的祷告。神听我们的祷告。耶稣基督也在天上为我们祷告。可是不少基督徒对自己的祷告生活不满意，甚至挫败。好消息是读经与祷告间有不可割裂的关系。读经需要祷告，让圣灵带领并开启我们心灵的眼睛，使我们能听到并明白神所要教导我们的。另一方面，读经过程中，神的话会感动我们，有的让我们看到自己的罪，有的让我们看到人们需要主，有的鼓舞我们对神的信心，有的让我们感谢赞美神。这些都可以带到主面前。所以有一种祷告方式叫祷告圣经。就是将神的话向神祷告回去，同时领会神的话对我们的提醒，再向神摆上我们自己的赞美，祈求和感恩。此软件就是为此而作。"
var help3="\n内容根据<<Hand Book To Prayer>>(Kenneth Boa)翻译编集而成。\n\n这个程序是胡益光和陈彪博士（牧师）合作的结果。\n";
var urls = new Array();
var c=0;
urls[c++]="Bible/Devotion internet/mobile Resources";
urls[c++] = "http://www.ccimweb.org/gsword";

urls[c++] ="Web sites:";

urls[c++] ="研经／Bible Study";

urls[c++] ="祷告/Prayer";

urls[c++] ="http://ccimweb.org/gsword/prayer";

urls[c++] ="http://ccimweb.org/gsword/closet/index.htm";

urls[c++] ="Emails:";

urls[c++] ="祷告/Prayer";

urls[c++] ="https://groups.google.com/forum/?hl=en&fromgroups#!forum/prayscripture";

urls[c++] ="https://groups.google.com/forum/?hl=en&fromgroups#!forum/incloset";
urls[c++] ="一年读遍圣经/One Year Through Bible";
urls[c++] ="https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-nb5";
urls[c++] ="https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-ngb";
urls[c++] ="https://groups.google.com/forum/?hl=en&fromgroups#!forum/streams-in-the-desert-gb";
urls[c++] ="https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-hb5";
urls[c++] ="https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-bbe";
urls[c++] ="https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-kjv";
urls[c++] ="https://groups.google.com/forum/?hl=en&fromgroups#!forum/streams-in-the-desert-b5";
urls[c++] ="Android Applications:";
urls[c++] ="https://play.google.com/store/search?q=yiguang+hu&c=apps";

var pi=Math.floor((Math.random()*TOTAL))+1;


Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'祷告圣经',
    backgroundColor:'#fff'
    //exitOnClose:true
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',//KS_nav_views.png',
    title:'中文',
    window:win1
});

function createlabel(txt) {
	var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:txt+"\n",
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
return label1
}

function createCCIMResources(){
	
	var data = [];

var tableview = Titanium.UI.createTableView({
data:data,
headerTitle: '',
backgroundColor:'#000',
color:'#FF0'
});

for(var ic=0; ic<c;ic++){
var row = Titanium.UI.createTableViewRow({
title: urls[ic],
backgroundColor:'#000',
color: '#FF0'
});
if(urls[ic].substring(0,4)=="http"){
if (Ti.Platform.osname != "android"){
	
row.addEventListener('click', function (e){
/*
var webview = Titanium.UI.createWebView({url:urls[e.index]});
    var window = Titanium.UI.createWindow();
    window.add(webview);
    window.open({modal:false});	
    */
Titanium.Platform.openURL(urls[e.index]);	
})

}
else{

row.addEventListener('click', function (e){

var intent = Titanium.Android.createIntent({

action: Titanium.Android.ACTION_VIEW,
data: urls[e.index],
});
intent.addCategory(Titanium.Android.CATEGORY_BROWSABLE);
Ti.Android.currentActivity.startActivity(intent);
}
);
}
}
tableview.appendRow(row);

}
return tableview;	
} 
 
function createlabelp(txt) {
	var label1 = Titanium.UI.createLabel({
	color:'#599',
	text:"\n    \n"+txt+"\n      \n",
	font:{fontSize:30,fontFamily:'Lucida Handwriting'},
	textAlign:'center',
	width:'auto'
});
return label1
}
 
 function emailme(txt){
 	var emaildialog=Titanium.UI.createEmailDialog();
 	if(!emaildialog.isSupported()){
 		alert("you have no email support");
 	}else{
	 emaildialog.subject="Feedback on Pray Scripture application";
	 emaildialog.toRecipients=['ccimspiritualgateway@gmail.com']	;
	 emaildialog.messageBody="";
	// var f=Ti.Filesystem.getFile('file.wav');
	 //emaildialog.addAttachment(f);
	 emaildialog.open();
	 }
 }
 
function createContact() {
	var scrollView=createscrollview();
	//scrollView.add(createlabelp("Please fill in the following form and push Send. Thank you for your comment"));
	scrollView.add(createlabelp("We'd love to hear from you. Your feedback is very important to help improve the application and shape the future direction.\nThank you for your comment! We really appreciate it!"));
	scrollView.add(createlabelp("\n我们很喜欢听到您的意见。请告诉我们这个程序如何帮助您更爱神。谢谢您的保贵意见。它们非常重要，有助于改善程序及其未来！\n"));
	
	/*
	var textArea = Ti.UI.createTextArea({
      borderWidth: 2,
      borderColor: '#bbb',
      borderRadius: 5,
      color: '#888',
      font: {fontSize:20, fontWeight:'bold'},
      keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
      returnKeyType: Ti.UI.RETURNKEY_GO,
      textAlign: 'left',
      value: 'I am a textarea',
      top: 60,
      width: 300, height : 70
    });
    scrollView.add(textArea);
    */
	var button = Titanium.UI.createButton({
   title: 'Push',
   top: 10,
   width: 100,
   height: 50
});
button.addEventListener('click',function(e)
{
  // Titanium.API.info("You clicked the button");
   emailme("");
});
	
scrollView.add(button);
return scrollView;
}       

function createRefresh(txt) {

	
 var button = Titanium.UI.createButton({
   title: txt,
   top: 10,
   width: 100,
   height: 50
    });
button.addEventListener('click',function(e)
{
 
 pi=Math.floor((Math.random()*TOTAL))+1;
 //alert("new index="+pi);
 win1.remove(view1); 
 win2.remove(view2);
 view1=  createrenewview('ChiNCVt');
 view2=createrenewview('KJV');
 win1.add(view1); 
 win2.add(view2);
});
	
return button;
}       
function createscrollview(){    
var scrollView = Ti.UI.createScrollView({
      contentWidth: 'auto',
      contentHeight: 'auto',
      layout: 'vertical',
      showVerticalScrollIndicator: true,
      showHorizontalScrollIndicator: true,
      height: '80%',
      width: '80%'
    });
    return scrollView;
   }
function createhelp(){
	var scrollView=createscrollview();
   scrollView.add(createlabelp(help+help1));
   scrollView.add(createlabelp("\n\n"+help2+help3));
   return scrollView;
}
String.prototype.replaceAll = function(token, newToken, ignoreCase) {
    var str, i = -1, _token;
    if((str = this.toString()) && typeof token === "string") {
        _token = ignoreCase === true? token.toLowerCase() : undefined;
        while((i = (
            _token !== undefined? 
                str.toLowerCase().indexOf(
                            _token, 
                            i >= 0? i + newToken.length : 0
                ) : str.indexOf(
                            token,
                            i >= 0? i + newToken.length : 0
                )
        )) !== -1 ) {
            str = str.substring(0, i)
                    .concat(newToken)
                    .concat(str.substring(i + token.length));
        }
    }
return str;
};

function createrenewview(version){
var scrollView=createscrollview();
var NLR="\n\n";
// db=Titanium.Database.open(DBCAT);
var rowsc = db.execute("select * from prayer where bibleversionky=? and id=?",version, pi);
while (rowsc.isValidRow())
    {
    	if(version=="KJV"){
		scrollView.add(createlabelp(t1_e));
	}else{
		scrollView.add(createlabelp(t1_c));
	}
	//alert("there are data for "+version +"\t"+rowsc.fieldByName('praiseversetxt'));
		scrollView.add(createlabel((rowsc.fieldByName('praiseversetxt')||"").replaceAll("NEWLINE",NLR)+"\n"));
		//scrollView.add(createlabel(rowsc.fieldByName('praiseverseref')+"\n"));
		scrollView.add(createlabel(rowsc.fieldByName('praiseversecmt')+"\n"));
		if(version=="KJV"){
		scrollView.add(createlabelp(t2_e));
	}else{
		scrollView.add(createlabelp(t2_c));
	}
		scrollView.add(createlabel((rowsc.fieldByName('confesversetxt')||"").replaceAll("NEWLINE",NLR)+"\n"));
		//scrollView.add(createlabel(rowsc.fieldByName('confesverseref')+"\n"));
		scrollView.add(createlabel(rowsc.fieldByName('confesversecmt')+"\n"));
		if(version=="KJV"){
		scrollView.add(createlabelp(t3_e));
	}else{
		scrollView.add(createlabelp(t3_c));
	}
		scrollView.add(createlabel((rowsc.fieldByName('renewlversetxt')||"").replaceAll("NEWLINE",NLR)+"\n"));
		//scrollView.add(createlabel(rowsc.fieldByName('renewlverseref')+"\n"));
		scrollView.add(createlabel(rowsc.fieldByName('renewlversecmt')+"\n"));
		if(version=="KJV"){
		scrollView.add(createlabelp(t4_e));
	}else{
		scrollView.add(createlabelp(t4_c));
	}
		scrollView.add(createlabel((rowsc.fieldByName('petionversetxt')||"").replaceAll("NEWLINE",NLR)+"\n"));
		//scrollView.add(createlabel(rowsc.fieldByName('petionverseref')+"\n"));
		scrollView.add(createlabel(rowsc.fieldByName('petionversecmt')+"\n"));
		if(version=="KJV"){
		scrollView.add(createlabelp(t5_e));
	}else{
		scrollView.add(createlabelp(t5_c));
	}
		scrollView.add(createlabel((rowsc.fieldByName('intrcsversetxt')||"").replaceAll("NEWLINE",NLR)+"\n"));
		//scrollView.add(createlabel(rowsc.fieldByName('intrcsverseref')+"\n"));
		scrollView.add(createlabel(rowsc.fieldByName('intrcsversecmt')+"\n"));
		if(version=="KJV"){
		scrollView.add(createlabelp(t6_e));
	}else{
		scrollView.add(createlabelp(t6_c));
	}
		scrollView.add(createlabel((rowsc.fieldByName('affirmversetxt')||"").replaceAll("NEWLINE",NLR)+"\n"));
		//scrollView.add(createlabel(rowsc.fieldByName('affirmverseref')+"\n"));
		scrollView.add(createlabel(rowsc.fieldByName('affirmversecmt')+"\n"));
		if(version=="KJV"){
		scrollView.add(createlabelp(t7_e));
	}else{
		scrollView.add(createlabelp(t7_c));
	}
		scrollView.add(createlabel((rowsc.fieldByName('thanksversetxt')||"").replaceAll("NEWLINE",NLR)+"\n"));
		//scrollView.add(createlabel(rowsc.fieldByName('thanksverseref')+"\n"));
		scrollView.add(createlabel(rowsc.fieldByName('thanksversecmt')+"\n"));
		if(version=="KJV"){
		scrollView.add(createlabelp(t8_e));
	}else{
		scrollView.add(createlabelp(t8_c));
	}
		scrollView.add(createlabel((rowsc.fieldByName('closngversetxt')||"").replaceAll("NEWLINE",NLR)+"\n"));
		//scrollView.add(createlabel(rowsc.fieldByName('closngverseref')+"\n"));
		
      rowsc.next();
    }
    rowsc.close();
  //  db.close();
    return scrollView;
   }
 
var win2 = Titanium.UI.createWindow({  
    title:'Pray Scripture',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'English',
    window:win2
});

var view1=  createrenewview('ChiNCVt');
var view2=createrenewview('KJV');
win1.add(view1);    
win1.add(createRefresh("刷新") );  
win2.add(view2);    
win2.add(createRefresh("Refresh") );  
//db.close();


var win3 = Titanium.UI.createWindow({  
    title:'About',
    backgroundColor:'#fff'
});
win3.add(createhelp());
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'About',
    window:win3
});


var win5 = Titanium.UI.createWindow({  
    title:'Resources',
    backgroundColor:'#fff'
});
win5.add(createCCIMResources());
var tab5 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Resources',
    window:win5
});

var win4 = Titanium.UI.createWindow({  
    title:'Contact',
    backgroundColor:'#fff'
});
win4.add(createContact());
var tab4 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Contact/联系',
    window:win4
});

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3); 
tabGroup.addTab(tab4);
tabGroup.addTab(tab5);
tabGroup.open();
