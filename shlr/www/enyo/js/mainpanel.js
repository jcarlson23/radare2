enyo.kind ({
  name: "MainPanel",
  classes: "onyx",
  kind: "FittableRows",
  tag: "div",
  classes: "enyo-fit",
  style: "background-color: #c0c0c0",
  data: null,
/*
  refresh: function () {
    this.$.list.setCount (this.data.length);
    this.$.list.refresh (); // necessary?? // inherit??
  },
*/
  buttonClicked: function (x) {
    alert ("let's play!");
  },
  cancelClicked: function (x) {
    alert ("nothing to see here! move along.");
  },
  components: [
    {kind: "FittableColumns", noStretch: true, classes: "onyx-toolbar onyx-toolbar-inline", components: [
      {kind: "Scroller", thumb: false, fit: true, touch: false, vertical: "hidden", style: "margin: 0;", components: [
        {classes: "onyx-toolbar-inline", style: "white-space: nowrap;", components: [
          {kind: "onyx.Button", content: "[", ontap: "openSidebar", style: "padding:8px"},
          {kind: "onyx.Button", content: "]", ontap: "openSidebar2", style: "padding:8px"},
          {kind: "onyx.Button", content: "<", ontap: "prevSeek"},
          {kind: "onyx.Button", content: ">", ontap: "nextSeek"},
          {kind: "onyx.InputDecorator", style: "width: 200px;", components: [
            {kind: "onyx.Input", value: 'entry0', onchange: "gotoSeek"}
          ]},
          //{kind: "onyx.Button", content: "Go", ontap: "gotoSeek"},
          {kind: "onyx.PickerDecorator", components: [
            {kind: "onyx.Button", content: "Actions"},
            {kind: "onyx.Picker", components: [
              {content: "Analyze"},
              {content: "Rename"},
              {content: "Comment"},
              {content: "Flag"},
              {content: "Copy"},
              {content: "Paste"}
            ]}
          ]},
          {kind: "onyx.PickerDecorator", components: [
            {kind: "onyx.Button", content: "Convert"},
            {kind: "onyx.Picker", components: [
              {content: "Data"},
              {content: "Code"},
              {content: "String"},
            ]}
          ]},
          {kind: "onyx.PickerDecorator", components: [
            {kind: "onyx.Button", content: "Write"},
            {kind: "onyx.Picker", components: [
              {content: "File"},
              {content: "Hexpair"},
              {content: "String"},
            ]}
          ]},
/*
          {kind: "onyx.Button", content: "Add", ontap: "addPanel"},
          {kind: "onyx.Button", content: "Delete", ontap: "deletePanel"}
*/
        ]}
      ]}
    ]},
    {kind: "Panels", name:"samplePanels", fit:true, draggable: false,
        realtimeFit: true, classes: "enyo-border-box", components: [
      {kind:"Disassembler", name: "pageDisassembler"},
      {kind:"Assembler", name:"pageAssembler"},
      {kind:"Hexdump", name: "pageHexdump"},
      {kind:"Graph", name: "pageGraph"},
      {kind:"Search", name: "pageSearch"},
      {kind:"Console", name: "pageConsole"},
      {kind:"Logs", name: "pageLogs"},
      {kind:"Script", name: "pageScript"},
      {kind:"Preferences", name:"pagePreferences"},
      {kind:"About", name: "pageAbout"},
    ]}
  ],
  create: function() {
    this.inherited(arguments);
       //this.$.samplePanels.setArrangerKind ("CardArranger");
      // if (enyo.Panels.isScreenNarrow()) {
    this.$.samplePanels.setIndex(0);
  },
  ra: null,
  openSidebar: function() {
    this.ra.setIndex (this.ra.index? 0:1);
  },
  openSidebar2: function() {
    this.ra.setIndex (2); //(this.ra.index<2)? 2:1);
  },
  rendered: function() {
      this.inherited(arguments);
  },
  openPage: function(idx) {
      var str, sp = this.$.samplePanels;
      eval ("var x = this.$.page"+idx);
// TODO: this is just a hack
      switch (idx) {
	case "Disassembler": idx = 0; break;
	case "Assembler": idx = 1; break;
	case "Hexdump": idx = 2; break;
	case "Graph": idx = 3; break;
	case "Search": idx = 4; break;
	case "Console": idx = 5; break;
	case "Logs": idx = 6; break;
	case "Script": idx = 7; break;
	case "Settings": idx = 8; break;
	case "About": idx = 9; break;
      }
      //x.setContent (str);
      sp.setIndex (idx);
  },
  seekStack: [],
  nextSeek: function() {
    var addr = '?';
    alert ("nxt "+addr);
  },
  prevSeek: function() {
    var addr = this.seekStack.pop ();
    alert ("pop "+addr);
  },
  gotoSeek: function() {
    var addr = this.$.input.getValue();
    this.seekStack.push ();
/*
      var sp = this.$.samplePanels;
      //this.openPage (this.$.input.getValue());
      //sp.components[3].setContent ("JAJAJ");
this.$.page3.setContent ("content-a");
alert (sp.components[3].content);
      sp.components[3].content = "JAJAJ";
sp.reflow();
sp.render ();
      sp.setIndex(3);
var i = 3;
  var p = sp.createComponent ({
                        style:"background: red",
                        content:i
                });
      p.render();
                sp.reflow();
                sp.setIndex(3);
*/
  }
});

