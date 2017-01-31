declare var jQuery:any;
declare var jsPlumb:any;



export class JsPlumb {
 


 DrawGraph() : void {

    jsPlumb.ready(function() {

var common = {
  cssClass  :  "myCssClass",
  hoverClass  :  "myHoverClass"
};



 jsPlumb.connect({
  source:"item_root",
  target:"item_php",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
  paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
           fillStyle: "#34495e",


    },
});

 

jsPlumb.connect({
  source:"item_root",
  target:"item_phyton",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
         lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }
});

jsPlumb.connect({
  source:"item_root",
  target:"item_js",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }
});


jsPlumb.connect({
  source:"item_php",
  target:"item_framework",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }
});

jsPlumb.connect({
  source:"item_php",
  target:"item_cms",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }
});

jsPlumb.connect({
  source:"item_cms",
  target:"item_wordpress",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }

});


jsPlumb.connect({
  source:"item_framework",
  target:"item_zend",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }

});

jsPlumb.connect({
  source:"item_phyton",
  target:"item_phyton_framework",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }

});

jsPlumb.connect({
  source:"item_phyton_framework",
  target:"item_django",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }

});

jsPlumb.connect({
  source:"item_js",
  target:"item_web",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }

});

jsPlumb.connect({
  source:"item_js",
  target:"item_mobile",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ], paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }

});

jsPlumb.connect({
  source:"item_web",
  target:"item_ajax",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }

});


jsPlumb.connect({
  source:"item_mobile",
  target:"item_phonegap",
  anchor:["BottomCenter", "TopCenter"],
  connector:[ "Flowchart", { stub :3 }, common ],
   paintStyle:{ 
         strokeStyle: "#34495e",
        lineWidth: 6
           },
           endpointStyle: {
        fillStyle: "#34495e",


    }

});



  
  }); 

  } 

}