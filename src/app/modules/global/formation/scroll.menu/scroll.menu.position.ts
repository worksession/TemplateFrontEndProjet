declare var jQuery:any;
	var  screenRowCnt;
	var  rowHeight = 35;
	var  pageHeight;
	var  containerPosition = [];


export class ScrollMenuPosition {
 

      public addClickEvent() {

              jQuery(".menu_icon").find("ul li").click(function() {

                  var index = $(this).index();

                  switch(index) {

                       case 0  :
                       jQuery("html,body").stop().animate({"scrollTop":jQuery(".bg").offset().top+"px"},{duration:300,easing:"easeOutBounce"})

                  }

              });

        }


	    public runScanner() {

  console.log("run scanner")

	      pageHeight   = parseInt(jQuery("footer").offset().top + jQuery("footer").height());   

	      screenRowCnt = Number(pageHeight / rowHeight);

	      ////////////////////////// 
	            this.drawRec();
	      //////////////////////////
	      
           var rowInScreen = Math.round(jQuery(window).height() / rowHeight);

	       var endRow= (jQuery(window).scrollTop()+jQuery(window).height())/rowHeight;
	      
	       var beginRow = Math.round(endRow - rowInScreen);
	      

	        for(var i=beginRow;i<endRow;i++) {
	             
	             jQuery("div.mapping"+i).css("backgroundColor","#7f8c8d");

	          }
         


	      jQuery(window).scroll(function() {

	     
	           console.log('sdsqqd');  
	           endRow= (jQuery(window).scrollTop()+jQuery(window).height())/rowHeight;
	      
	           beginRow = Math.round(endRow - rowInScreen);

	          
	          jQuery("div.menu_icon_mapping").css("backgroundColor","#bdc3c7");

	          for(var i=beginRow;i<endRow;i++) {
	             
	             jQuery("div.mapping"+i).css("backgroundColor","#7f8c8d");

	          }
	               

	          });
	        

	    }
	  

	    public drawRec() : void {

	     
	     for(let i=0;i<screenRowCnt;i++) {

	     	let div = "<div class='item_rec' style='height:35px;display:block>"+i+"</div>";
	     	jQuery(".rectangle").append(div)
	     }

	    
	     
	    var cnt=0;
	     
	    for(let i=0;i<5;i++) {


	      var nbRow,div_height;
	   

	///////////////////// Begin switch //////////////////////

	      switch(i) {

	      	case 0 : 
	          
	          var begin = jQuery(".bg").offset().top / 35;
	          var end = (jQuery(".bg").offset().top + jQuery(".bg").height()) / 35;

	          nbRow = Math.ceil(end - begin);

	          div_height = 35/nbRow;

	      	break;

	      	case 1 : 
	          
	          var begin = jQuery(".module_container").offset().top / 35;
	          var end = (jQuery(".module_container").offset().top + jQuery(".module_container").height()) / 35;

	          nbRow = Math.round(end - begin);

	          div_height = 35/nbRow;

	      	break;

	      	case 2 : 
	          
	          var begin = jQuery(".module_tech").offset().top / 35;
	          var end = (jQuery(".module_tech").offset().top + jQuery(".module_tech").height()) / 35;

	          nbRow = Math.round(end - begin);

	          div_height = 35/nbRow;

	      	break;

	      	case 3 : 
	          
	          var begin = jQuery(".module_info").offset().top / 35;
	          var end = (jQuery(".module_info").offset().top + jQuery(".module_info").height()) / 35;

	          nbRow = Math.round(end - begin);

	          div_height = 35/nbRow;

	      	break;


	        case 4 : 
		          
	          var begin = jQuery("footer").offset().top / 35;
	          var end = (jQuery("footer").offset().top + jQuery("footer").height()) / 35;

	          nbRow = Math.round(end - begin);

	          div_height = 35/nbRow;

	      	break;

	      }

	      ///////////////////// end switch /////////////////

	    	 for(let j=0;j<=nbRow;j++) {

	         let div_top = j * div_height;
	         
	    	 let style = "style='position:absolute;left:0;width:35px;height:"+div_height+"px;top:"+div_top+"px '";
	     	 
	     	 let div = "<div "+style+" class='menu_icon_mapping mapping"+cnt+"'></div>";
	    	 
	    	 jQuery(".menu_icon").find("ul li:eq("+i+")").append(div);

	    	 cnt++;	

	    	 

	     }

	   
	     
	     }


	   }

 

}