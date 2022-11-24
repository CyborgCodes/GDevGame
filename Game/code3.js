gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDGameTitleObjects1= [];
gdjs.Main_32MenuCode.GDGameTitleObjects2= [];
gdjs.Main_32MenuCode.GDGameTitleObjects3= [];
gdjs.Main_32MenuCode.GDStartButtonObjects1= [];
gdjs.Main_32MenuCode.GDStartButtonObjects2= [];
gdjs.Main_32MenuCode.GDStartButtonObjects3= [];
gdjs.Main_32MenuCode.GDSettingsButtonObjects1= [];
gdjs.Main_32MenuCode.GDSettingsButtonObjects2= [];
gdjs.Main_32MenuCode.GDSettingsButtonObjects3= [];
gdjs.Main_32MenuCode.GDTutorialButtonObjects1= [];
gdjs.Main_32MenuCode.GDTutorialButtonObjects2= [];
gdjs.Main_32MenuCode.GDTutorialButtonObjects3= [];
gdjs.Main_32MenuCode.GDExitButtonObjects1= [];
gdjs.Main_32MenuCode.GDExitButtonObjects2= [];
gdjs.Main_32MenuCode.GDExitButtonObjects3= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects3= [];
gdjs.Main_32MenuCode.GDLargeExitButtonObjects1= [];
gdjs.Main_32MenuCode.GDLargeExitButtonObjects2= [];
gdjs.Main_32MenuCode.GDLargeExitButtonObjects3= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects3= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects3= [];
gdjs.Main_32MenuCode.GDhiddenObjects1= [];
gdjs.Main_32MenuCode.GDhiddenObjects2= [];
gdjs.Main_32MenuCode.GDhiddenObjects3= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Main_32MenuCode.GDStartButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Main_32MenuCode.GDStartButtonObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDStartButtonObjects1, gdjs.Main_32MenuCode.GDStartButtonObjects2);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartButtonObjects2[i].setAnimationName("StartButtonPressed");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SabahTransition", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDTutorialButtonObjects1Objects = Hashtable.newFrom({"TutorialButton": gdjs.Main_32MenuCode.GDTutorialButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDTutorialButtonObjects1Objects = Hashtable.newFrom({"TutorialButton": gdjs.Main_32MenuCode.GDTutorialButtonObjects1});
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDTutorialButtonObjects1, gdjs.Main_32MenuCode.GDTutorialButtonObjects2);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDTutorialButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTutorialButtonObjects2[i].setAnimationName("TutorialButtonPressed");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.Main_32MenuCode.GDExitButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.Main_32MenuCode.GDExitButtonObjects1});
gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDExitButtonObjects1, gdjs.Main_32MenuCode.GDExitButtonObjects2);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDExitButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDExitButtonObjects2[i].setAnimationName("ExitButtonPressed");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("TutorialButton"), gdjs.Main_32MenuCode.GDTutorialButtonObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Main_32MenuCode.GDTutorialButtonObjects1.length !== 0 ? gdjs.Main_32MenuCode.GDTutorialButtonObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("hidden"), gdjs.Main_32MenuCode.GDhiddenObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDhiddenObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDhiddenObjects1[i].hide();
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartButtonObjects1[i].setAnimationName("StartButtonNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartButtonObjects1[i].setAnimationName("StartButtonHover");
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TutorialButton"), gdjs.Main_32MenuCode.GDTutorialButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDTutorialButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDTutorialButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTutorialButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTutorialButtonObjects1[i].setAnimationName("TutorialButtonNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TutorialButton"), gdjs.Main_32MenuCode.GDTutorialButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDTutorialButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDTutorialButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTutorialButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTutorialButtonObjects1[i].setAnimationName("TutorialButtonHover");
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.Main_32MenuCode.GDExitButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDExitButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDExitButtonObjects1[i].setAnimationName("ExitButtonNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.Main_32MenuCode.GDExitButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDExitButtonObjects1[i].setAnimationName("ExitButtonHover");
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\menuPage.mp3", true, 100, 1);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDGameTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDGameTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDGameTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDSettingsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDSettingsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDSettingsButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDTutorialButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDTutorialButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDTutorialButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDExitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDLargeExitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDLargeExitButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDLargeExitButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32MenuCode.GDhiddenObjects1.length = 0;
gdjs.Main_32MenuCode.GDhiddenObjects2.length = 0;
gdjs.Main_32MenuCode.GDhiddenObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList3(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
