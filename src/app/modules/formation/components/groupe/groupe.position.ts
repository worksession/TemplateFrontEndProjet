declare var jQuery:any;


export class GroupePosition {


  setPosition():void {

    this.setMetaPosition();

  }

 

  public setMetaPosition():void {

    jQuery(function () {

      let screen_width = jQuery(window).width();
      let horraire_meta_icon_width = jQuery(".horraire_meta").find("span").width();
      let horraire_meta_h3_width = jQuery(".horraire_meta").find("h3").width();
      let horraire_meta_width = jQuery(".horraire_meta").width();

      jQuery(".horraire_meta").find("span").css("left", (horraire_meta_width - horraire_meta_icon_width) / 2 + "px")
      jQuery(".horraire_meta").find("h3").css("left", (horraire_meta_width - horraire_meta_h3_width) / 2 + "px")


    });


  }
}
