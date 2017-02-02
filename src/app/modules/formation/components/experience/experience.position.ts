declare var jQuery:any;


export class ExperiencePosition {

  public setPosition():void {

    this.CenterMeta();
    this.CenterDownload();
    this.setTriangePosition();

  }

  public setTriangePosition() {

    jQuery(function () {

      let screen_width = jQuery(window).width();
      let triangle_top_width = jQuery(".tech_tri_top").width()+20;
      let triangle_bottom_width = jQuery(".tech_tri_bottom").width()+20;

      console.log(screen_width)
      console.log(triangle_top_width)

      jQuery(".tech_tri_top").css("left", (screen_width - triangle_top_width) / 2 + "px")
      jQuery(".tech_tri_bottom").css("left", (screen_width - triangle_bottom_width) / 2 + "px")


    });

  }

  public CenterMeta() {

    jQuery(function () {

      let screen_width = jQuery(window).width();


      let tech_meta_icon_width = jQuery(".module_tech_meta").find("span").width();
      let tech_meta_h3_width = jQuery(".module_tech_meta").find("h3").width();


      jQuery(".module_tech_meta").find("span").css("left", (screen_width - 30) / 2 + "px")
      jQuery(".module_tech_meta").find("h3").css("left", (screen_width - tech_meta_h3_width) / 2 + "px")

    });

  }

  public CenterDownload() {

    jQuery(function () {

      let screen_width = jQuery(window).width();
      let pdfword_width = jQuery(".pdfword").width();

      jQuery(".pdfword").css({
        "left": ((screen_width - pdfword_width ) / 2 ) + "px"
      });

    });


  }


}
