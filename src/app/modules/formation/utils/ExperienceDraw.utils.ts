declare var jQuery:any;
declare var jsPlumb:any;

export class ExperienceDraw {


  setGraphBackgroundHeight():void {

    jQuery(function () {

      var Background = jQuery(".module_tech");
      var graphBackground = jQuery(".module_tech_experience");

      var max_top = 0;

      jQuery(".module_tech_experience .item").each(function () {

        if (parseInt(jQuery(this).css('top')) > max_top) max_top = parseInt(jQuery(this).css('top'));

        console.log(jQuery(this).css("top"))
      });

      console.log(max_top)
      max_top += 40;

      jQuery(".module_tech_experience").css("height", max_top + "px");


      max_top += 130;
      max_top += 40;

      jQuery(".module_tech").css("height", max_top + "px");
      jQuery(".module_tech_bg").css("height", (max_top-200) + "px");
    });
  }


  public draw(map):void {

    jQuery(function() {
    jsPlumb.ready(function () {

      var common = {
        cssClass: "myCssClass",
        hoverClass: "myHoverClass"
      };


      for (let i = 0; i < map.length; i++) {

        if (map[i].source) {
          jsPlumb.connect({
            source: map[i].source,
            target: map[i].target,
            anchor: [map[i].anchor.split(",")[0], map[i].anchor.split(",")[1]],
            connector: ["Flowchart", {stub: 3}, common],
            paintStyle: {
              strokeStyle: "rgba(141, 150, 154, 0.76)",
              lineWidth: 6
            },
            endpoint:["Dot",{ radius:8 }],
            endpointStyle: {
              fillStyle: "rgba(141, 150, 154, 0.76)",
            }
          });
        }

      }
    });

    })
  }

  public setItemStyle(map):void {

    jQuery(function() {

      for (let i = 0; i < map.length; i++) {

        jQuery("#" + map[i].target).attr("style",map[i].style.split(';')[0]+";"+ map[i].style.split(';')[1]);

        console.log(jQuery("#"+map[i].target).attr("style"))


      }

    })

  }
}
