declare var jQuery:any;



export class FormationPosition {


  Center() : void {


    let module_container_width = jQuery(".module_container").width();
    let icon_width =  jQuery(".title_module").find("span").width();
    let h3_width =  jQuery(".title_module").find("h3").width();
    let tech_tri_width =  jQuery(".tech_tri").width()+10;
    let screen_width = jQuery(window).width();
    let tech_meta_icon_width =  jQuery(".module_tech_meta").find("span").width();
    let tech_meta_h3_width =  jQuery(".module_tech_meta").find("h3").width();
    let horraire_meta_icon_width = jQuery(".horraire_meta").find("span").width();
    let horraire_meta_h3_width =  jQuery(".horraire_meta").find("h3").width();
    let horraire_meta_width = jQuery(".horraire_meta").width();
    let horraire_groupe_b_with = jQuery(".horraire_groupe_b").width();

    let footer_meta_h3 = jQuery(".footer_meta").find("h3").width();
    let footer_meta_span = jQuery(".horraire_groupe_b").find("span").width();

    jQuery(".title_module").find("span").css("left",(module_container_width-icon_width)/2+"px")
    jQuery(".title_module").find("h3").css("left",(module_container_width-h3_width)/2+"px")
    jQuery(".tri").css("left",(screen_width-tech_tri_width)/2+"px")
    jQuery(".tech_tri").css("left",(screen_width-tech_tri_width)/2+"px")
    jQuery(".module_tech_meta").find("span").css("left",(screen_width-tech_meta_icon_width+5)/2+"px")
    jQuery(".module_tech_meta").find("h3").css("left",(screen_width-tech_meta_h3_width)/2+"px")
    jQuery(".horraire_meta").find("span").css("left",(horraire_meta_width-horraire_meta_icon_width)/2+"px")
    jQuery(".horraire_meta").find("h3").css("left",(horraire_meta_width-horraire_meta_h3_width)/2+"px")
    jQuery(".tech_tri_bottom").css("left",(screen_width-tech_tri_width)/2+"px")
    jQuery(".horraire_groupe_b").css("left",(horraire_meta_width-horraire_groupe_b_with)/2+"px")
    jQuery(".tri_footer").css("left",(screen_width-tech_tri_width)/2+"px")
    jQuery(".footer_meta").find("h3").css("left",(screen_width-footer_meta_h3)/2+"px")
    jQuery(".footer_meta").find("span").css("left",(screen_width-footer_meta_span)/2+"px")




  }


	}
