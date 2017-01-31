declare var jQuery:any;


export class ExperiencePosition {


  setGraphBackgroundHeight():void {

    jQuery(function () {

      var Background = jQuery(".module_tech");
      var graphBackground = jQuery(".module_tech_experience");

      var max_top = 0;

      jQuery(".module_tech_experience .item").each(function () {

        if (parseInt(jQuery(this).css('top')) > max_top) max_top = parseInt(jQuery(this).css('top'));

      });

      console.log(max_top)
      max_top += 40;

      jQuery(".module_tech_experience").css("height", max_top + "px");


      max_top += 100;
      max_top += 40;

      jQuery(".module_tech").css("height", max_top + "px");
    });
  }


}
