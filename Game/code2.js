gdjs.Scene_322Code = {};
gdjs.Scene_322Code.GDPlatformObjects1= [];
gdjs.Scene_322Code.GDPlatformObjects2= [];
gdjs.Scene_322Code.GDTommyObjects1= [];
gdjs.Scene_322Code.GDTommyObjects2= [];
gdjs.Scene_322Code.GDNewPanelSpriteObjects1= [];
gdjs.Scene_322Code.GDNewPanelSpriteObjects2= [];
gdjs.Scene_322Code.GDWinterTileWaterObjects1= [];
gdjs.Scene_322Code.GDWinterTileWaterObjects2= [];
gdjs.Scene_322Code.GDSummerTileWaterWavesObjects1= [];
gdjs.Scene_322Code.GDSummerTileWaterWavesObjects2= [];
gdjs.Scene_322Code.GDNewSpriteObjects1= [];
gdjs.Scene_322Code.GDNewSpriteObjects2= [];
gdjs.Scene_322Code.GDScoreObjects1= [];
gdjs.Scene_322Code.GDScoreObjects2= [];
gdjs.Scene_322Code.GDBaldPirateObjects1= [];
gdjs.Scene_322Code.GDBaldPirateObjects2= [];
gdjs.Scene_322Code.GDleftObjects1= [];
gdjs.Scene_322Code.GDleftObjects2= [];
gdjs.Scene_322Code.GDRightObjects1= [];
gdjs.Scene_322Code.GDRightObjects2= [];
gdjs.Scene_322Code.GDCheckpointObjects1= [];
gdjs.Scene_322Code.GDCheckpointObjects2= [];
gdjs.Scene_322Code.GDDodolObjects1= [];
gdjs.Scene_322Code.GDDodolObjects2= [];
gdjs.Scene_322Code.GDMovingBarObjects1= [];
gdjs.Scene_322Code.GDMovingBarObjects2= [];
gdjs.Scene_322Code.GDLadderObjects1= [];
gdjs.Scene_322Code.GDLadderObjects2= [];
gdjs.Scene_322Code.GDChiChiTheBirdObjects1= [];
gdjs.Scene_322Code.GDChiChiTheBirdObjects2= [];
gdjs.Scene_322Code.GDLadderBoundaryObjects1= [];
gdjs.Scene_322Code.GDLadderBoundaryObjects2= [];
gdjs.Scene_322Code.GDLeftBoundaryObjects1= [];
gdjs.Scene_322Code.GDLeftBoundaryObjects2= [];
gdjs.Scene_322Code.GDRightBoundaryObjects1= [];
gdjs.Scene_322Code.GDRightBoundaryObjects2= [];
gdjs.Scene_322Code.GDTopBoundaryObjects1= [];
gdjs.Scene_322Code.GDTopBoundaryObjects2= [];
gdjs.Scene_322Code.GDBottomBoundaryObjects1= [];
gdjs.Scene_322Code.GDBottomBoundaryObjects2= [];
gdjs.Scene_322Code.GDDoorObjects1= [];
gdjs.Scene_322Code.GDDoorObjects2= [];
gdjs.Scene_322Code.GDPlatform2Objects1= [];
gdjs.Scene_322Code.GDPlatform2Objects2= [];
gdjs.Scene_322Code.GDPlatformMidObjects1= [];
gdjs.Scene_322Code.GDPlatformMidObjects2= [];
gdjs.Scene_322Code.GDUIPauseMenuObjects1= [];
gdjs.Scene_322Code.GDUIPauseMenuObjects2= [];
gdjs.Scene_322Code.GDBlackOverlayObjects1= [];
gdjs.Scene_322Code.GDBlackOverlayObjects2= [];

gdjs.Scene_322Code.conditionTrue_0 = {val:false};
gdjs.Scene_322Code.condition0IsTrue_0 = {val:false};
gdjs.Scene_322Code.condition1IsTrue_0 = {val:false};
gdjs.Scene_322Code.condition2IsTrue_0 = {val:false};
gdjs.Scene_322Code.condition3IsTrue_0 = {val:false};
gdjs.Scene_322Code.conditionTrue_1 = {val:false};
gdjs.Scene_322Code.condition0IsTrue_1 = {val:false};
gdjs.Scene_322Code.condition1IsTrue_1 = {val:false};
gdjs.Scene_322Code.condition2IsTrue_1 = {val:false};
gdjs.Scene_322Code.condition3IsTrue_1 = {val:false};


gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDBlackOverlayObjects1Objects = Hashtable.newFrom({"BlackOverlay": gdjs.Scene_322Code.GDBlackOverlayObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDUIPauseMenuObjects1Objects = Hashtable.newFrom({"UIPauseMenu": gdjs.Scene_322Code.GDUIPauseMenuObjects1});
gdjs.Scene_322Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene_322Code.conditionTrue_1 = gdjs.Scene_322Code.condition1IsTrue_0;
gdjs.Scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16035740);
}
}}
if (gdjs.Scene_322Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Pause").setNumber(0);
}}

}


};gdjs.Scene_322Code.eventsList1 = function(runtimeScene) {

{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene_322Code.conditionTrue_1 = gdjs.Scene_322Code.condition1IsTrue_0;
gdjs.Scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16037036);
}
}}
if (gdjs.Scene_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene 2", false);
}}

}


};gdjs.Scene_322Code.eventsList2 = function(runtimeScene) {

{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene_322Code.conditionTrue_1 = gdjs.Scene_322Code.condition1IsTrue_0;
gdjs.Scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16038412);
}
}}
if (gdjs.Scene_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.Scene_322Code.GDTommyObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDDodolObjects1Objects = Hashtable.newFrom({"Dodol": gdjs.Scene_322Code.GDDodolObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDBaldPirateObjects1Objects = Hashtable.newFrom({"BaldPirate": gdjs.Scene_322Code.GDBaldPirateObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.Scene_322Code.GDleftObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDBaldPirateObjects1Objects = Hashtable.newFrom({"BaldPirate": gdjs.Scene_322Code.GDBaldPirateObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Scene_322Code.GDRightObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.Scene_322Code.GDTommyObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDBaldPirateObjects1Objects = Hashtable.newFrom({"BaldPirate": gdjs.Scene_322Code.GDBaldPirateObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.Scene_322Code.GDTommyObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.Scene_322Code.GDCheckpointObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.Scene_322Code.GDTommyObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDSummerTileWaterWavesObjects1Objects = Hashtable.newFrom({"SummerTileWaterWaves": gdjs.Scene_322Code.GDSummerTileWaterWavesObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDMovingBarObjects1Objects = Hashtable.newFrom({"MovingBar": gdjs.Scene_322Code.GDMovingBarObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.Scene_322Code.GDleftObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDMovingBarObjects1Objects = Hashtable.newFrom({"MovingBar": gdjs.Scene_322Code.GDMovingBarObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Scene_322Code.GDRightObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDChiChiTheBirdObjects1Objects = Hashtable.newFrom({"ChiChiTheBird": gdjs.Scene_322Code.GDChiChiTheBirdObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.Scene_322Code.GDleftObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDChiChiTheBirdObjects1Objects = Hashtable.newFrom({"ChiChiTheBird": gdjs.Scene_322Code.GDChiChiTheBirdObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Scene_322Code.GDRightObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.Scene_322Code.GDTommyObjects1});
gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Scene_322Code.GDDoorObjects1});
gdjs.Scene_322Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Scene_322Code.GDDoorObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "KLTransition", false);
}}

}


};gdjs.Scene_322Code.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Scene_322Code.GDTommyObjects1.length !== 0 ? gdjs.Scene_322Code.GDTommyObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Pause").setNumber(0);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BlackOverlay"), gdjs.Scene_322Code.GDBlackOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("UIPauseMenu"), gdjs.Scene_322Code.GDUIPauseMenuObjects1);
{for(var i = 0, len = gdjs.Scene_322Code.GDBlackOverlayObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBlackOverlayObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDBlackOverlayObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBlackOverlayObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene_322Code.conditionTrue_1 = gdjs.Scene_322Code.condition1IsTrue_0;
gdjs.Scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16027900);
}
}}
if (gdjs.Scene_322Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Pause").setNumber(1);
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Pause")) == 2;
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Pause").setNumber(0);
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Pause")) == 1;
}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene_322Code.conditionTrue_1 = gdjs.Scene_322Code.condition1IsTrue_0;
gdjs.Scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16029140);
}
}}
if (gdjs.Scene_322Code.condition1IsTrue_0.val) {
gdjs.Scene_322Code.GDBlackOverlayObjects1.length = 0;

gdjs.Scene_322Code.GDUIPauseMenuObjects1.length = 0;

{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDBlackOverlayObjects1Objects, 0, 0, "UI");
}{for(var i = 0, len = gdjs.Scene_322Code.GDBlackOverlayObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBlackOverlayObjects1[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDBlackOverlayObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBlackOverlayObjects1[i].setOpacity(100);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDUIPauseMenuObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "UI");
}{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].setZOrder(1);
}
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Pause")) == 0;
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackOverlay"), gdjs.Scene_322Code.GDBlackOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("UIPauseMenu"), gdjs.Scene_322Code.GDUIPauseMenuObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.Scene_322Code.GDBlackOverlayObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBlackOverlayObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
gdjs.Scene_322Code.condition2IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Pause")) == 1;
}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
gdjs.Scene_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.Scene_322Code.condition1IsTrue_0.val ) {
{
{gdjs.Scene_322Code.conditionTrue_1 = gdjs.Scene_322Code.condition2IsTrue_0;
gdjs.Scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16031940);
}
}}
}
if (gdjs.Scene_322Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("UIPauseMenu"), gdjs.Scene_322Code.GDUIPauseMenuObjects1);
{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].returnVariable(gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
gdjs.Scene_322Code.condition2IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Pause")) == 1;
}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
gdjs.Scene_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.Scene_322Code.condition1IsTrue_0.val ) {
{
{gdjs.Scene_322Code.conditionTrue_1 = gdjs.Scene_322Code.condition2IsTrue_0;
gdjs.Scene_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16032516);
}
}}
}
if (gdjs.Scene_322Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("UIPauseMenu"), gdjs.Scene_322Code.GDUIPauseMenuObjects1);
{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].returnVariable(gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UIPauseMenu"), gdjs.Scene_322Code.GDUIPauseMenuObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariableNumber(gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDUIPauseMenuObjects1[k] = gdjs.Scene_322Code.GDUIPauseMenuObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDUIPauseMenuObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDUIPauseMenuObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].returnVariable(gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UIPauseMenu"), gdjs.Scene_322Code.GDUIPauseMenuObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariableNumber(gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariables().getFromIndex(0)) == -(1) ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDUIPauseMenuObjects1[k] = gdjs.Scene_322Code.GDUIPauseMenuObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDUIPauseMenuObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDUIPauseMenuObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].returnVariable(gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UIPauseMenu"), gdjs.Scene_322Code.GDUIPauseMenuObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariableNumber(gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDUIPauseMenuObjects1[k] = gdjs.Scene_322Code.GDUIPauseMenuObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDUIPauseMenuObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDUIPauseMenuObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.Scene_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UIPauseMenu"), gdjs.Scene_322Code.GDUIPauseMenuObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariableNumber(gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDUIPauseMenuObjects1[k] = gdjs.Scene_322Code.GDUIPauseMenuObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDUIPauseMenuObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDUIPauseMenuObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Scene_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UIPauseMenu"), gdjs.Scene_322Code.GDUIPauseMenuObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariableNumber(gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDUIPauseMenuObjects1[k] = gdjs.Scene_322Code.GDUIPauseMenuObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDUIPauseMenuObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDUIPauseMenuObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDUIPauseMenuObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDUIPauseMenuObjects1[i].setAnimation(2);
}
}
{ //Subevents
gdjs.Scene_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDTommyObjects1[k] = gdjs.Scene_322Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDTommyObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDTommyObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDTommyObjects1[k] = gdjs.Scene_322Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDTommyObjects1.length = k;}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDTommyObjects1.length;i<l;++i) {
    if ( !(gdjs.Scene_322Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Scene_322Code.condition1IsTrue_0.val = true;
        gdjs.Scene_322Code.GDTommyObjects1[k] = gdjs.Scene_322Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDTommyObjects1.length = k;}}
if (gdjs.Scene_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDTommyObjects1[i].setAnimationName("Idle Poses");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDTommyObjects1[k] = gdjs.Scene_322Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDTommyObjects1.length = k;}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Scene_322Code.condition1IsTrue_0.val = true;
        gdjs.Scene_322Code.GDTommyObjects1[k] = gdjs.Scene_322Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDTommyObjects1.length = k;}}
if (gdjs.Scene_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDTommyObjects1[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDTommyObjects1[k] = gdjs.Scene_322Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDTommyObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDTommyObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDTommyObjects1[k] = gdjs.Scene_322Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDTommyObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDTommyObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dodol"), gdjs.Scene_322Code.GDDodolObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDDodolObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDDodolObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDDodolObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDDodolObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\smw_coin.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Scene_322Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Scene_322Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDScoreObjects1[i].setString("Collected: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score"))) + "/9");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BaldPirate"), gdjs.Scene_322Code.GDBaldPirateObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDBaldPirateObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDBaldPirateObjects1[i].getVariableString(gdjs.Scene_322Code.GDBaldPirateObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDBaldPirateObjects1[k] = gdjs.Scene_322Code.GDBaldPirateObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDBaldPirateObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDBaldPirateObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBaldPirateObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBaldPirateObjects1[i].setAnimationName("Run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BaldPirate"), gdjs.Scene_322Code.GDBaldPirateObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.Scene_322Code.GDleftObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDBaldPirateObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDBaldPirateObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBaldPirateObjects1[i].returnVariable(gdjs.Scene_322Code.GDBaldPirateObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBaldPirateObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BaldPirate"), gdjs.Scene_322Code.GDBaldPirateObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDBaldPirateObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDBaldPirateObjects1[i].getVariableString(gdjs.Scene_322Code.GDBaldPirateObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDBaldPirateObjects1[k] = gdjs.Scene_322Code.GDBaldPirateObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDBaldPirateObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDBaldPirateObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBaldPirateObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBaldPirateObjects1[i].setAnimationName("Run");
}
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Scene_322Code.GDRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.Scene_322Code.GDleftObjects1);
{for(var i = 0, len = gdjs.Scene_322Code.GDleftObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDRightObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDRightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BaldPirate"), gdjs.Scene_322Code.GDBaldPirateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Scene_322Code.GDRightObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDBaldPirateObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDBaldPirateObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBaldPirateObjects1[i].returnVariable(gdjs.Scene_322Code.GDBaldPirateObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBaldPirateObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BaldPirate"), gdjs.Scene_322Code.GDBaldPirateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
gdjs.Scene_322Code.condition1IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDBaldPirateObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene_322Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Scene_322Code.condition1IsTrue_0.val = true;
        gdjs.Scene_322Code.GDTommyObjects1[k] = gdjs.Scene_322Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDTommyObjects1.length = k;}}
if (gdjs.Scene_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDTommyObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CheckpointX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CheckpointY")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.Scene_322Code.GDCheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDCheckpointObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDCheckpointObjects1 */
{runtimeScene.getVariables().get("CheckpointX").setNumber((( gdjs.Scene_322Code.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDCheckpointObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("CheckpointY").setNumber((( gdjs.Scene_322Code.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDCheckpointObjects1[0].getPointY("")));
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);
{runtimeScene.getVariables().get("CheckpointX").setNumber((( gdjs.Scene_322Code.GDTommyObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDTommyObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("CheckpointY").setNumber((( gdjs.Scene_322Code.GDTommyObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDTommyObjects1[0].getPointY("")));
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\melaka.mp3", true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SummerTileWaterWaves"), gdjs.Scene_322Code.GDSummerTileWaterWavesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDTommyObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDSummerTileWaterWavesObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDTommyObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CheckpointX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CheckpointY")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MovingBar"), gdjs.Scene_322Code.GDMovingBarObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDMovingBarObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDMovingBarObjects1[i].getVariableString(gdjs.Scene_322Code.GDMovingBarObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDMovingBarObjects1[k] = gdjs.Scene_322Code.GDMovingBarObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDMovingBarObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDMovingBarObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDMovingBarObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDMovingBarObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MovingBar"), gdjs.Scene_322Code.GDMovingBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.Scene_322Code.GDleftObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDMovingBarObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDMovingBarObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDMovingBarObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDMovingBarObjects1[i].returnVariable(gdjs.Scene_322Code.GDMovingBarObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MovingBar"), gdjs.Scene_322Code.GDMovingBarObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDMovingBarObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDMovingBarObjects1[i].getVariableString(gdjs.Scene_322Code.GDMovingBarObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDMovingBarObjects1[k] = gdjs.Scene_322Code.GDMovingBarObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDMovingBarObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDMovingBarObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDMovingBarObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDMovingBarObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MovingBar"), gdjs.Scene_322Code.GDMovingBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Scene_322Code.GDRightObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDMovingBarObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDMovingBarObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDMovingBarObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDMovingBarObjects1[i].returnVariable(gdjs.Scene_322Code.GDMovingBarObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ChiChiTheBird"), gdjs.Scene_322Code.GDChiChiTheBirdObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].getVariableString(gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDChiChiTheBirdObjects1[k] = gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDChiChiTheBirdObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].addPolarForce(0, 120, 0);
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].setAnimationName("Flapping Wings");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ChiChiTheBird"), gdjs.Scene_322Code.GDChiChiTheBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.Scene_322Code.GDleftObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDChiChiTheBirdObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDChiChiTheBirdObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].returnVariable(gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ChiChiTheBird"), gdjs.Scene_322Code.GDChiChiTheBirdObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].getVariableString(gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDChiChiTheBirdObjects1[k] = gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDChiChiTheBirdObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].addPolarForce(180, 120, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ChiChiTheBird"), gdjs.Scene_322Code.GDChiChiTheBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Scene_322Code.GDRightObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDChiChiTheBirdObjects1Objects, gdjs.Scene_322Code.mapOfGDgdjs_46Scene_95322Code_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDChiChiTheBirdObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].returnVariable(gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDChiChiTheBirdObjects1[i].flipX(false);
}
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottomBoundary"), gdjs.Scene_322Code.GDBottomBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("LadderBoundary"), gdjs.Scene_322Code.GDLadderBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftBoundary"), gdjs.Scene_322Code.GDLeftBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightBoundary"), gdjs.Scene_322Code.GDRightBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopBoundary"), gdjs.Scene_322Code.GDTopBoundaryObjects1);
{for(var i = 0, len = gdjs.Scene_322Code.GDLadderBoundaryObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDLadderBoundaryObjects1[i].hide();
}
for(var i = 0, len = gdjs.Scene_322Code.GDLeftBoundaryObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDLeftBoundaryObjects1[i].hide();
}
for(var i = 0, len = gdjs.Scene_322Code.GDRightBoundaryObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDRightBoundaryObjects1[i].hide();
}
for(var i = 0, len = gdjs.Scene_322Code.GDTopBoundaryObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDTopBoundaryObjects1[i].hide();
}
for(var i = 0, len = gdjs.Scene_322Code.GDBottomBoundaryObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDBottomBoundaryObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BottomBoundary"), gdjs.Scene_322Code.GDBottomBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftBoundary"), gdjs.Scene_322Code.GDLeftBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightBoundary"), gdjs.Scene_322Code.GDRightBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopBoundary"), gdjs.Scene_322Code.GDTopBoundaryObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.Scene_322Code.GDLeftBoundaryObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDLeftBoundaryObjects1[0].getX()) + (( gdjs.Scene_322Code.GDLeftBoundaryObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDLeftBoundaryObjects1[0].getWidth()), (( gdjs.Scene_322Code.GDTopBoundaryObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDTopBoundaryObjects1[0].getY()) + (( gdjs.Scene_322Code.GDTopBoundaryObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDTopBoundaryObjects1[0].getHeight()), (( gdjs.Scene_322Code.GDRightBoundaryObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDRightBoundaryObjects1[0].getX()), (( gdjs.Scene_322Code.GDBottomBoundaryObjects1.length === 0 ) ? 0 :gdjs.Scene_322Code.GDBottomBoundaryObjects1[0].getY()), "", 0);
}}

}


{


gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_322Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score")) == 9;
}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Scene_322Code.GDDoorObjects1);
{for(var i = 0, len = gdjs.Scene_322Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDDoorObjects1[i].setAnimationName("Opening");
}
}
{ //Subevents
gdjs.Scene_322Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Scene_322Code.GDTommyObjects1);

gdjs.Scene_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_322Code.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Scene_322Code.GDTommyObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.Scene_322Code.condition0IsTrue_0.val = true;
        gdjs.Scene_322Code.GDTommyObjects1[k] = gdjs.Scene_322Code.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Scene_322Code.GDTommyObjects1.length = k;}if (gdjs.Scene_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_322Code.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Scene_322Code.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Scene_322Code.GDTommyObjects1[i].setAnimationName("Holding Object Walking");
}
}}

}


};

gdjs.Scene_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene_322Code.GDPlatformObjects1.length = 0;
gdjs.Scene_322Code.GDPlatformObjects2.length = 0;
gdjs.Scene_322Code.GDTommyObjects1.length = 0;
gdjs.Scene_322Code.GDTommyObjects2.length = 0;
gdjs.Scene_322Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Scene_322Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Scene_322Code.GDWinterTileWaterObjects1.length = 0;
gdjs.Scene_322Code.GDWinterTileWaterObjects2.length = 0;
gdjs.Scene_322Code.GDSummerTileWaterWavesObjects1.length = 0;
gdjs.Scene_322Code.GDSummerTileWaterWavesObjects2.length = 0;
gdjs.Scene_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene_322Code.GDScoreObjects1.length = 0;
gdjs.Scene_322Code.GDScoreObjects2.length = 0;
gdjs.Scene_322Code.GDBaldPirateObjects1.length = 0;
gdjs.Scene_322Code.GDBaldPirateObjects2.length = 0;
gdjs.Scene_322Code.GDleftObjects1.length = 0;
gdjs.Scene_322Code.GDleftObjects2.length = 0;
gdjs.Scene_322Code.GDRightObjects1.length = 0;
gdjs.Scene_322Code.GDRightObjects2.length = 0;
gdjs.Scene_322Code.GDCheckpointObjects1.length = 0;
gdjs.Scene_322Code.GDCheckpointObjects2.length = 0;
gdjs.Scene_322Code.GDDodolObjects1.length = 0;
gdjs.Scene_322Code.GDDodolObjects2.length = 0;
gdjs.Scene_322Code.GDMovingBarObjects1.length = 0;
gdjs.Scene_322Code.GDMovingBarObjects2.length = 0;
gdjs.Scene_322Code.GDLadderObjects1.length = 0;
gdjs.Scene_322Code.GDLadderObjects2.length = 0;
gdjs.Scene_322Code.GDChiChiTheBirdObjects1.length = 0;
gdjs.Scene_322Code.GDChiChiTheBirdObjects2.length = 0;
gdjs.Scene_322Code.GDLadderBoundaryObjects1.length = 0;
gdjs.Scene_322Code.GDLadderBoundaryObjects2.length = 0;
gdjs.Scene_322Code.GDLeftBoundaryObjects1.length = 0;
gdjs.Scene_322Code.GDLeftBoundaryObjects2.length = 0;
gdjs.Scene_322Code.GDRightBoundaryObjects1.length = 0;
gdjs.Scene_322Code.GDRightBoundaryObjects2.length = 0;
gdjs.Scene_322Code.GDTopBoundaryObjects1.length = 0;
gdjs.Scene_322Code.GDTopBoundaryObjects2.length = 0;
gdjs.Scene_322Code.GDBottomBoundaryObjects1.length = 0;
gdjs.Scene_322Code.GDBottomBoundaryObjects2.length = 0;
gdjs.Scene_322Code.GDDoorObjects1.length = 0;
gdjs.Scene_322Code.GDDoorObjects2.length = 0;
gdjs.Scene_322Code.GDPlatform2Objects1.length = 0;
gdjs.Scene_322Code.GDPlatform2Objects2.length = 0;
gdjs.Scene_322Code.GDPlatformMidObjects1.length = 0;
gdjs.Scene_322Code.GDPlatformMidObjects2.length = 0;
gdjs.Scene_322Code.GDUIPauseMenuObjects1.length = 0;
gdjs.Scene_322Code.GDUIPauseMenuObjects2.length = 0;
gdjs.Scene_322Code.GDBlackOverlayObjects1.length = 0;
gdjs.Scene_322Code.GDBlackOverlayObjects2.length = 0;

gdjs.Scene_322Code.eventsList4(runtimeScene);

return;

}

gdjs['Scene_322Code'] = gdjs.Scene_322Code;
