gdjs.TutorialCode = {};
gdjs.TutorialCode.GDTutorialGuideObjects1= [];
gdjs.TutorialCode.GDTutorialGuideObjects2= [];
gdjs.TutorialCode.GDTutorialGuideObjects3= [];
gdjs.TutorialCode.GDBackButtonObjects1= [];
gdjs.TutorialCode.GDBackButtonObjects2= [];
gdjs.TutorialCode.GDBackButtonObjects3= [];
gdjs.TutorialCode.GDBrownBlockObjects1= [];
gdjs.TutorialCode.GDBrownBlockObjects2= [];
gdjs.TutorialCode.GDBrownBlockObjects3= [];

gdjs.TutorialCode.conditionTrue_0 = {val:false};
gdjs.TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.TutorialCode.condition1IsTrue_0 = {val:false};


gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.TutorialCode.GDBackButtonObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.TutorialCode.GDBackButtonObjects1});
gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.TutorialCode.GDBackButtonObjects1, gdjs.TutorialCode.GDBackButtonObjects2);

{for(var i = 0, len = gdjs.TutorialCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDBackButtonObjects2[i].setAnimationName("BackButtonPressed");
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.TutorialCode.GDBackButtonObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBackButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBackButtonObjects1[i].setAnimationName("BackButtonNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.TutorialCode.GDBackButtonObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBackButtonObjects1[i].setAnimationName("BackButtonHover");
}
}
{ //Subevents
gdjs.TutorialCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\menuPage.mp3", true, 20, 1);
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TutorialGuide"), gdjs.TutorialCode.GDTutorialGuideObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDTutorialGuideObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDTutorialGuideObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{


{
}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDTutorialGuideObjects1.length = 0;
gdjs.TutorialCode.GDTutorialGuideObjects2.length = 0;
gdjs.TutorialCode.GDTutorialGuideObjects3.length = 0;
gdjs.TutorialCode.GDBackButtonObjects1.length = 0;
gdjs.TutorialCode.GDBackButtonObjects2.length = 0;
gdjs.TutorialCode.GDBackButtonObjects3.length = 0;
gdjs.TutorialCode.GDBrownBlockObjects1.length = 0;
gdjs.TutorialCode.GDBrownBlockObjects2.length = 0;
gdjs.TutorialCode.GDBrownBlockObjects3.length = 0;

gdjs.TutorialCode.eventsList1(runtimeScene);

return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
