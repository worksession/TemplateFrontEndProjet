declare var jQuery:any;


export class appPosition {
 


 centerTri() : void {

    
    jQuery(".tri").css({

    	"left" : ((jQuery(window).width() - 20 )/ 2 )+ "px"
    })
} 

}