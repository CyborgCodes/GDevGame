gdjs.MelakaTransitionCode = {};
gdjs.MelakaTransitionCode.GDBackgroundObjects1= [];
gdjs.MelakaTransitionCode.GDBackgroundObjects2= [];
gdjs.MelakaTransitionCode.GDBackgroundObjects3= [];
gdjs.MelakaTransitionCode.GDContinueButtonObjects1= [];
gdjs.MelakaTransitionCode.GDContinueButtonObjects2= [];
gdjs.MelakaTransitionCode.GDContinueButtonObjects3= [];

gdjs.MelakaTransitionCode.conditionTrue_0 = {val:false};
gdjs.MelakaTransitionCode.condition0IsTrue_0 = {val:false};
gdjs.MelakaTransitionCode.condition1IsTrue_0 = {val:false};


gdjs.MelakaTransitionCode.mapOfGDgdjs_46MelakaTransitionCode_46GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.MelakaTransitionCode.GDContinueButtonObjects1});
gdjs.MelakaTransitionCode.mapOfGDgdjs_46MelakaTransitionCode_46GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.MelakaTransitionCode.GDContinueButtonObjects1});
gdjs.MelakaTransitionCode.eventsList0 = function(runtimeScene) {

{


gdjs.MelakaTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.MelakaTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MelakaTransitionCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MelakaTransitionCode.GDContinueButtonObjects1, gdjs.MelakaTransitionCode.GDContinueButtonObjects2);

{for(var i = 0, len = gdjs.MelakaTransitionCode.GDContinueButtonObjects2.length ;i < len;++i) {
    gdjs.MelakaTransitionCode.GDContinueButtonObjects2[i].setAnimationName("ContinueButtonPressed");
}
}}

}


{


gdjs.MelakaTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.MelakaTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MelakaTransitionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene 2", false);
}}

}


};gdjs.MelakaTransitionCode.eventsList1 = function(runtimeScene) {

{


gdjs.MelakaTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.MelakaTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MelakaTransitionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MelakaTransitionCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.MelakaTransitionCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.MelakaTransitionCode.GDBackgroundObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.MelakaTransitionCode.GDContinueButtonObjects1);

gdjs.MelakaTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.MelakaTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MelakaTransitionCode.mapOfGDgdjs_46MelakaTransitionCode_46GDContinueButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MelakaTransitionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MelakaTransitionCode.GDContinueButtonObjects1 */
{for(var i = 0, len = gdjs.MelakaTransitionCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.MelakaTransitionCode.GDContinueButtonObjects1[i].setAnimationName("ContinueButtonNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.MelakaTransitionCode.GDContinueButtonObjects1);

gdjs.MelakaTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.MelakaTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MelakaTransitionCode.mapOfGDgdjs_46MelakaTransitionCode_46GDContinueButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MelakaTransitionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MelakaTransitionCode.GDContinueButtonObjects1 */
{for(var i = 0, len = gdjs.MelakaTransitionCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.MelakaTransitionCode.GDContinueButtonObjects1[i].setAnimationName("ContinueButtonHover");
}
}
{ //Subevents
gdjs.MelakaTransitionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.MelakaTransitionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MelakaTransitionCode.GDBackgroundObjects1.length = 0;
gdjs.MelakaTransitionCode.GDBackgroundObjects2.length = 0;
gdjs.MelakaTransitionCode.GDBackgroundObjects3.length = 0;
gdjs.MelakaTransitionCode.GDContinueButtonObjects1.length = 0;
gdjs.MelakaTransitionCode.GDContinueButtonObjects2.length = 0;
gdjs.MelakaTransitionCode.GDContinueButtonObjects3.length = 0;

gdjs.MelakaTransitionCode.eventsList1(runtimeScene);

return;

}

gdjs['MelakaTransitionCode'] = gdjs.MelakaTransitionCode;
