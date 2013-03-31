Template.editorTabsContainer.hasTpl = function(tpl){
    return $.each(this.tabs, function(key, val){
        if(key == tpl){
            return key;
        }
    });
};