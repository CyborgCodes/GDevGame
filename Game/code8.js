gdjs.KLTransitionCode = {};
gdjs.KLTransitionCode.GDBackgroundObjects1= [];
gdjs.KLTransitionCode.GDBackgroundObjects2= [];
gdjs.KLTransitionCode.GDBackgroundObjects3= [];
gdjs.KLTransitionCode.GDContinueButtonObjects1= [];
gdjs.KLTransitionCode.GDContinueButtonObjects2= [];
gdjs.KLTransitionCode.GDContinueButtonObjects3= [];

gdjs.KLTransitionCode.conditionTrue_0 = {val:false};
gdjs.KLTransitionCode.condition0IsTrue_0 = {val:false};
gdjs.KLTransitionCode.condition1IsTrue_0 = {val:false};


gdjs.KLTransitionCode.mapOfGDgdjs_46KLTransitionCode_46GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.KLTransitionCode.GDContinueButtonObjects1});
gdjs.KLTransitionCode.mapOfGDgdjs_46KLTransitionCode_46GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.KLTransitionCode.GDContinueButtonObjects1});
gdjs.KLTransitionCode.eventsList0 = function(runtimeScene) {

{


gdjs.KLTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.KLTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.KLTransitionCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.KLTransitionCode.GDContinueButtonObjects1, gdjs.KLTransitionCode.GDContinueButtonObjects2);

{for(var i = 0, len = gdjs.KLTransitionCode.GDContinueButtonObjects2.length ;i < len;++i) {
    gdjs.KLTransitionCode.GDContinueButtonObjects2[i].setAnimationName("ContinueButtonPressed");
}
}}

}


{


gdjs.KLTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.KLTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.KLTransitionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene 3", false);
}}

}


};gdjs.KLTransitionCode.eventsList1 = function(runtimeScene) {

{


gdjs.KLTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.KLTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.KLTransitionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.KLTransitionCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.KLTransitionCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.KLTransitionCode.GDBackgroundObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.KLTransitionCode.GDContinueButtonObjects1);

gdjs.KLTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.KLTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.KLTransitionCode.mapOfGDgdjs_46KLTransitionCode_46GDContinueButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.KLTransitionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.KLTransitionCode.GDContinueButtonObjects1 */
{for(var i = 0, len = gdjs.KLTransitionCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.KLTransitionCode.GDContinueButtonObjects1[i].setAnimationName("ContinueButtonNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.KLTransitionCode.GDContinueButtonObjects1);

gdjs.KLTransitionCode.condition0IsTrue_0.val = false;
{
gdjs.KLTransitionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.KLTransitionCode.mapOfGDgdjs_46KLTransitionCode_46GDContinueButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.KLTransitionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.KLTransitionCode.GDContinueButtonObjects1 */
{for(var i = 0, len = gdjs.KLTransitionCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.KLTransitionCode.GDContinueButtonObjects1[i].setAnimationName("ContinueButtonHover");
}
}
{ //Subevents
gdjs.KLTransitionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.KLTransitionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.KLTransitionCode.GDBackgroundObjects1.length = 0;
gdjs.KLTransitionCode.GDBackgroundObjects2.length = 0;
gdjs.KLTransitionCode.GDBackgroundObjects3.length = 0;
gdjs.KLTransitionCode.GDContinueButtonObjects1.length = 0;
gdjs.KLTransitionCode.GDContinueButtonObjects2.length = 0;
gdjs.KLTransitionCode.GDContinueButtonObjects3.length = 0;

gdjs.KLTransitionCode.eventsList1(runtimeScene);

return;

}

gdjs['KLTransitionCode'] = gdjs.KLTransitionCode;
