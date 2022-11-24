gdjs.End_32SceneCode = {};
gdjs.End_32SceneCode.GDYouWinObjects1= [];
gdjs.End_32SceneCode.GDYouWinObjects2= [];
gdjs.End_32SceneCode.GDYouWinObjects3= [];
gdjs.End_32SceneCode.GDMenuButtonObjects1= [];
gdjs.End_32SceneCode.GDMenuButtonObjects2= [];
gdjs.End_32SceneCode.GDMenuButtonObjects3= [];

gdjs.End_32SceneCode.conditionTrue_0 = {val:false};
gdjs.End_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.End_32SceneCode.condition1IsTrue_0 = {val:false};


gdjs.End_32SceneCode.mapOfGDgdjs_46End_9532SceneCode_46GDMenuButtonObjects1Objects = Hashtable.newFrom({"MenuButton": gdjs.End_32SceneCode.GDMenuButtonObjects1});
gdjs.End_32SceneCode.mapOfGDgdjs_46End_9532SceneCode_46GDMenuButtonObjects1Objects = Hashtable.newFrom({"MenuButton": gdjs.End_32SceneCode.GDMenuButtonObjects1});
gdjs.End_32SceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.End_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.End_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.End_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.End_32SceneCode.GDMenuButtonObjects1, gdjs.End_32SceneCode.GDMenuButtonObjects2);

{for(var i = 0, len = gdjs.End_32SceneCode.GDMenuButtonObjects2.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDMenuButtonObjects2[i].setAnimationName("MenuButtonPressed");
}
}}

}


{


gdjs.End_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.End_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.End_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.End_32SceneCode.eventsList1 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.End_32SceneCode.GDMenuButtonObjects1);

gdjs.End_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.End_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32SceneCode.mapOfGDgdjs_46End_9532SceneCode_46GDMenuButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.End_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.End_32SceneCode.GDMenuButtonObjects1 */
{for(var i = 0, len = gdjs.End_32SceneCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDMenuButtonObjects1[i].setAnimationName("MenuButtonNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.End_32SceneCode.GDMenuButtonObjects1);

gdjs.End_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.End_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32SceneCode.mapOfGDgdjs_46End_9532SceneCode_46GDMenuButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.End_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.End_32SceneCode.GDMenuButtonObjects1 */
{for(var i = 0, len = gdjs.End_32SceneCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDMenuButtonObjects1[i].setAnimationName("MenuButtonHover");
}
}
{ //Subevents
gdjs.End_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.End_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.End_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Win.mp3", false, 20, 1);
}}

}


{


gdjs.End_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.End_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("YouWin"), gdjs.End_32SceneCode.GDYouWinObjects1);
{for(var i = 0, len = gdjs.End_32SceneCode.GDYouWinObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDYouWinObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{


{
}

}


};

gdjs.End_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32SceneCode.GDYouWinObjects1.length = 0;
gdjs.End_32SceneCode.GDYouWinObjects2.length = 0;
gdjs.End_32SceneCode.GDYouWinObjects3.length = 0;
gdjs.End_32SceneCode.GDMenuButtonObjects1.length = 0;
gdjs.End_32SceneCode.GDMenuButtonObjects2.length = 0;
gdjs.End_32SceneCode.GDMenuButtonObjects3.length = 0;

gdjs.End_32SceneCode.eventsList1(runtimeScene);

return;

}

gdjs['End_32SceneCode'] = gdjs.End_32SceneCode;
