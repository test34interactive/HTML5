/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var fonts = {
};
var symbols = {
"stage": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
      dom: [
        {
            id:'_3d-abstract-desktop-wallpaper_800x600_8982',
            type:'image',
            rect:[220,188,448,336],
            fill:['rgba(0,0,0,0)','images/3d-abstract-desktop-wallpaper_800x600_8982.jpg'],
            transform:[[-220,-188],[0,0],[0],[1,1]]
        },
        {
            id:'letter',
            type:'rect',
            rect:[204,121,0,0]
        }],
      symbolInstances: [
      {
         id:'letter',
         symbolName:'letter'
      }
      ]
   },
   states: {
      "Base State": {
         "${__3d-abstract-desktop-wallpaper_800x600_8982}": [
            ["transform", "translateX", '-220px'],
            ["transform", "translateY", '-188px']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '325.11447084233px'],
            ["style", "width", '448px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid6", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_letter}', [] ], ""], position: 2000 }         ]
      }
   }
},
"letter": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
       id:'T',
       className:'symbolStage_letter_T_id',
       type:'text',
       tag:'h1',
       rect:[-37,-32,39,84],
       text:"T",
       font:["Palatino Linotype, Book Antigua, Palatino, serif",63,"rgba(255,255,255,1)","normal","none",""],
       transform:[[37,-10],[20]]
   }],
   symbolInstances: [

   ]
},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '39px']
         ],
         "${_T}": [
            ["transform", "translateX", '37px'],
            ["transform", "rotateZ", '422deg'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif'],
            ["transform", "translateY", '-10px'],
            ["style", "font-size", '63px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid5", tween: [ "transform", "${_T}", "rotateZ", '20deg', { fromValue: '422deg'}], position: 0, duration: 2000, easing: "easeOutBounce" }         ]
      }
   }
}
};

Edge.registerCompositionDefn(compId, symbols, fonts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2127387");
