declare var jQuery:any;


export class PresentationPosition {
 


 Center() : void {

     let PresentationWidth = jQuery("#presentation_container").width();
     let TitreWidth = jQuery("#formation_titre").width()+10;
     let ScreenWidth = jQuery(window).width();
    

        jQuery("#presentation_container").css("left",(ScreenWidth-PresentationWidth)/2+"px")
        jQuery("#formation_titre").css("left",(ScreenWidth-TitreWidth)/2+"px")

   
} 

}