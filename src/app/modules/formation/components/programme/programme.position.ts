declare var jQuery:any;


export class ProgrammePosition {


  public setPosition():void {

    this.setMetaPosition();
    this.setModuleContainerHeight();

  }


  public setMetaPosition() {

    let module_container_width = jQuery(".module_container").width();
    let icon_width = jQuery(".title_module").find("span").width();
    let h3_width = jQuery(".title_module").find("h3").width();

    jQuery(".title_module").find("span").css("left", (module_container_width - icon_width) / 2 + "px")
    jQuery(".title_module").find("h3").css("left", (module_container_width - h3_width) / 2 + "px")

  }

  public setModuleContainerHeight() {

    jQuery(function () {

      var height_left = jQuery(".grid_left").height();
      var height_right = jQuery(".grid_right").height();

      var height = height_left > height_right ? height_left : height_right;

      jQuery(".module_grid").css("height", (height + 30) + "px")

    })

  }

}
