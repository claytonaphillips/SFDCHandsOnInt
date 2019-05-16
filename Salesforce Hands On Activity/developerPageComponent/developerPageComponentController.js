({
	onInit : function(component, event, helper){
        var componentTarget = component.find('dx19');
        $A.util.removeClass(componentTarget, 'opacity');
	},
    
    goToDXTab : function(component, event, helper){
		component.set("v.showDXImages", true);
        component.set("v.showVideoGalleryImages", false);
        component.set("v.showMeetDeveloperImages", false);
        component.set("v.showTrailheadImages", false);
        var dx19 = component.find('dx19');
        $A.util.removeClass(dx19, 'opacity');
        var meetDevs = component.find('meetDevs');
        $A.util.addClass(meetDevs, 'opacity');
        var trailHead = component.find('trailHead');
        $A.util.addClass(trailHead, 'opacity');
	},
    
    goToMeetDevsTab : function(component, event, helper){
		component.set("v.showDXImages", false);
        component.set("v.showVideoGalleryImages", false);
        component.set("v.showMeetDeveloperImages", true);
        component.set("v.showTrailheadImages", false);
        var dx19 = component.find('dx19');
        $A.util.addClass(dx19, 'opacity');
        var trailHead = component.find('trailHead');
        $A.util.addClass(trailHead, 'opacity');
        var meetDevs = component.find('meetDevs');
        $A.util.removeClass(meetDevs, 'opacity');
        
	},
    
    goToTrailheadTab : function(component, event, helper){
		component.set("v.showDXImages", false);
        component.set("v.showVideoGalleryImages", false);
        component.set("v.showMeetDeveloperImages", false);
        component.set("v.showTrailheadImages", true);
        var dx19 = component.find('dx19');
        $A.util.addClass(dx19, 'opacity');
        var meetDevs = component.find('meetDevs');
        $A.util.addClass(meetDevs, 'opacity');
        var trailHead = component.find('trailHead');
        $A.util.removeClass(trailHead, 'opacity');        
	},
    
    openProductsPane : function(component, event, helper){
        var showProductsPane = component.get("v.showProductsPane");
        if(showProductsPane === true){
            component.set("v.showProductsPane", false);
        }
        else{
        	component.set("v.showProductsPane", true);    
        }
	}
})