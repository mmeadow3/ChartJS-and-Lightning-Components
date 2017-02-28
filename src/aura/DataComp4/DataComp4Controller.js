({
    init : function(component, event, helper) {
        helper.setupChart(component);
    },
    updateDataset : function(component, event, helper) {
        var dataset = component.get('v.dataset');
        if (dataset == '1'){
            dataset = '2';
        } else {
            dataset = '1';
        }
        component.set('v.dataset', dataset)
        helper.setupChart(component);
    }
})
