

function SPEXQuery(){ }
SPEXQuery.prototype = new Query();
SPEXQuery.prototype.constructor = SPEXQuery;
SPEXQuery.prototype.spatialConstraints = "";
SPEXQuery.prototype.temporalConstraints = "";
SPEXQuery.prototype.thematicConstraints = "";
SPEXQuery.prototype.getSPARQL= function (){ return null; }


