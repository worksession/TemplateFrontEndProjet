declare var jQuery:any;


export class PresentationPosition {


  public setPosition():void {


    this.centerTriangle();

  }


  public centerTriangle() {

    jQuery(function () {

      let screen_width = jQuery(window).width();
      let tri_width = jQuery(".tri_presentation").width()+20;

      jQuery(".tri_presentation").css({
        "left": (screen_width - tri_width) / 2 + "px"
      });


    });
  }

}
