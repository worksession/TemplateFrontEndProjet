declare var jQuery:any;


export class HeaderPosition {
 


 SetLiWidth() : void {

    jQuery(".menu-top").find("li").each(function() {

        let ElementWidth = jQuery(this).find("span").width()+10;
        
        jQuery(this).css({

            width : ElementWidth+"px"

        });

    });
} 

}