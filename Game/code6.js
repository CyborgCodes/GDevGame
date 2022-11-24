gdjs.SabahTransitionCode = {};
gdjs.SabahTransitionCode.GDBackgroundObjects1= [];
gdjs.SabahTransitionCode.GDBackgroundObjects2= [];
gdjs.SabahTransitionCode.GDBackgroundObjects3= [];
gdjs.SabahTransitionCode.GDNewSpriteObjects1= [];
gdjs.SabahTransitionCode.GDNewSpriteObjects2= [];
gdjs.SabahTransitionCode.GDNewSpriteObjects3= [];
gdjs.SabahTransitionCode.GDContinueButtonObjects1= [];
gdjs.SabahTransitionCode.GDContinueButtonObjects2= [];
gdjs.SabahTransitionCode.GDContinueButtonObjects3= [];

gdjs.SabahTransitionCode.conditionTrue_0 = {val:false};
gdjs.SabahTransitionCode.condition0IsTrue_0 = {val:false};
gdjs.SabahTransitionCode.condition1IsTrue_0 = {val:false};


gdjs.SabahTransitionCode.mapOfGDgdjs_46SabahTransitionCode_46GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.SabahTransitionCode.GDContinueButtonObjects1});
gdjs.SabahTransitionCode.mapOfGDgdjs_46SabahTransitionCode_46GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.SabahTransitionCode.GDContinueButtonObjects1});
gdjs.SabahTransitionCode.eventsList0 = function(runtimeScene) {

{


gdjs.SabahTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.SabahTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.SabahTransitionCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.SabahTransitionCode.GDContinueButtonObjects1, gdjs.SabahTransitionCode.GDContinueButtonObjects2);

{for(var i = 0, len = gdjs.SabahTransitionCode.GDContinueButtonObjects2.length ;i < len;++i) {
    gdjs.SabahTransitionCode.GDContinueButtonObjects2[i].setAnimationName("ContinueButtonPressed");
}
}}

}


{


gdjs.SabahTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.SabahTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SabahTransitionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene 1", false);
}}

}


};gdjs.SabahTransitionCode.eventsList1 = function(runtimeScene) {

{


gdjs.SabahTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.SabahTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SabahTransitionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.SabahTransitionCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.SabahTransitionCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.SabahTransitionCode.GDBackgroundObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SabahTransitionCode.GDContinueButtonObjects1);

gdjs.SabahTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.SabahTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SabahTransitionCode.mapOfGDgdjs_46SabahTransitionCode_46GDContinueButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.SabahTransitionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SabahTransitionCode.GDContinueButtonObjects1 */
{for(var i = 0, len = gdjs.SabahTransitionCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.SabahTransitionCode.GDContinueButtonObjects1[i].setAnimationName("ContinueButtonNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SabahTransitionCode.GDContinueButtonObjects1);

gdjs.SabahTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.SabahTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SabahTransitionCode.mapOfGDgdjs_46SabahTransitionCode_46GDContinueButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.SabahTransitionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SabahTransitionCode.GDContinueButtonObjects1 */
{for(var i = 0, len = gdjs.SabahTransitionCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.SabahTransitionCode.GDContinueButtonObjects1[i].setAnimationName("ContinueButtonHover");
}
}
{ //Subevents
gdjs.SabahTransitionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.SabahTransitionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SabahTransitionCode.GDBackgroundObjects1.length = 0;
gdjs.SabahTransitionCode.GDBackgroundObjects2.length = 0;
gdjs.SabahTransitionCode.GDBackgroundObjects3.length = 0;
gdjs.SabahTransitionCode.GDNewSpriteObjects1.length = 0;
gdjs.SabahTransitionCode.GDNewSpriteObjects2.length = 0;
gdjs.SabahTransitionCode.GDNewSpriteObjects3.length = 0;
gdjs.SabahTransitionCode.GDContinueButtonObjects1.length = 0;
gdjs.SabahTransitionCode.GDContinueButtonObjects2.length = 0;
gdjs.SabahTransitionCode.GDContinueButtonObjects3.length = 0;

gdjs.SabahTransitionCode.eventsList1(runtimeScene);

return;

}

gdjs['SabahTransitionCode'] = gdjs.SabahTransitionCode;
