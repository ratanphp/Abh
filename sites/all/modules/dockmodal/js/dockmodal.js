jQuery(document).ready(function() {
  jQuery('#wrapper').append('<div id="dock-popup-modal" style="display:none;"></div>');
  
  //jQuery('a.dock-modal-docked').bind('click', function () {
  
  jQuery(document).on("click", "a.dock-modal-docked", function(){
    var title = jQuery(this).attr('title');
    var height = "70%";
    var width = 400;
    var classes = jQuery(this).attr('class');
    var class_arr = new Array();
    class_arr = classes.split(' ');
    if(class_arr.length > 0) {
      for(var i = 0 ; i < class_arr.length; i++){
        var attribute = new Array();
        attribute = class_arr[i].split('-');
        if(attribute[0] == 'height') {
            height = attribute[1];
            if(attribute[2] == 'p'){
                height += "%";
            }else{
               height += "px"; 
            }
        }        
        if(attribute[0] == 'width') {
           width = parseInt(attribute[1]);
        }
      }
    }
    var href = Drupal.settings.dockmodal.basePath + jQuery(this).attr('href') + '?popup=docked'; 
    //href = 'http://localhost/' + jQuery(this).attr('href') + '?popup=docked'; 
    
    var iframe = '<iframe  src="' + href + '" width="600px" height="750px" style="overflow:hidden;" scrolling="no" frameborder="0"></iframe>';
    var element = '<div id="dialog" style="width: 60%;"></div>';
    jQuery('#dock-popup-modal').append(element);
    jQuery('#dialog').html(iframe);
    jQuery('#dialog').dockmodal({
      initialState:"docked",
      minimizedWidth:200,
      height: height,
      width: width,
      title: title
    });
    return false;
   });
});
/*
$(function () {
   
});
*/
