sap.ui.define([
    "sap/ui/model/SimpleType",
    "sap/ui/model/ValidateException"
],
function(SimpleType, ValidationException){
    return SimpleType.extend("training.bi.UI5Module.customTypes.ZIP", {

    formatValue: function(oValue){
        return oValue;
    },

    parseValue: function(oValue){
        return oValue;
    },

    validateValue: function(oValue){
        if(!/^(\d{4})?$/.test(oValue)){
            throw new ValidationException("An Austrian ZIP must consist of excatly 4 digits");
        }
    }

});

});