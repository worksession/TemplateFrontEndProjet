declare var jQuery:any;


export class FooterPosition {

  public setPosition() {

    this.setMetaPosition();
    this.setTrianglePosition();

  }

  public setTrianglePosition() : void {

    jQuery(function() {
      let screen_width = jQuery(window).width();
      let tech_tri_width =  jQuery(".tri_footer").width()+20;

      jQuery(".tri_footer").css("left",(screen_width-tech_tri_width)/2+"px")


    });

  }

  public setMetaPosition():void {

    jQuery(function() {

      let screen_width = jQuery(window).width();
      let footer_meta_h3_width = jQuery(".footer_meta").find("h3").width();
      let footer_meta_span_width = jQuery(".footer_meta").find("span").width();

      jQuery(".footer_meta").find("h3").css("left",(screen_width-footer_meta_h3_width)/2+"px")
      jQuery(".footer_meta").find("span").css("left",(screen_width-footer_meta_span_width)/2+"px")


    });


  }


}
