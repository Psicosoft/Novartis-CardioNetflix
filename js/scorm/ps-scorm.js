var PS = PS || {};
PS.LESSON_STATUS_COMPLETED = "completed";
PS.SUCCESS_STATUS_PASSED = "passed";
PS.SUCCESS_STATUS_FAILED = "failed";
PS.SUCCESS_STATUS_UNKNOWN = "unknown";
PS.CMI_LESSON_STATUS = "cmi.core.lesson_status";
PS.CMI_SUCCESS_STATUS = "cmi.success_status";
PS.CMI_SUSPEND_DATA = "cmi.suspend_data";
PS.CMI_LESSON_LOCATION = "cmi.location";
PS.CMI_SCORE_RAW = "cmi.score.raw";

PS.main=function(){
	PS.lmsConnected = pipwerks.SCORM.init();
	
	if (PS.lmsConnected) {
		PS.courseCompleted = pipwerks.SCORM.status("get") === PS.LESSON_STATUS_COMPLETED;
	}
}
PS.getPublication = function() {
	try {
		return (getAPI() != null) ? "1": "2";
	} catch(err) {
		return "2";
	}
}
PS.getLessonLocation=function(){
	return pipwerks.SCORM.get(PS.CMI_LESSON_LOCATION);
}
PS.setLessonLocation=function(value){
	pipwerks.SCORM.set(PS.CMI_LESSON_LOCATION, value);
	pipwerks.SCORM.data.save();
}
PS.getLessonStatus=function(){
	return pipwerks.SCORM.status("get");
}
PS.setLessonStatus=function(value){
	pipwerks.SCORM.status("set", value);
	pipwerks.SCORM.data.save();
}
PS.setSuccessStatus=function(value){
	pipwerks.SCORM.set(PS.CMI_SUCCESS_STATUS, value);
	pipwerks.SCORM.data.save();
}
PS.getSuspendData=function(){
	return pipwerks.SCORM.get(PS.CMI_SUSPEND_DATA);
}
PS.setSuspendData=function(value){
	pipwerks.SCORM.set(PS.CMI_SUSPEND_DATA, value);
	pipwerks.SCORM.data.save();
}
PS.setScoreRaw=function(value){
	pipwerks.SCORM.set(PS.CMI_SCORE_RAW, value);
	pipwerks.SCORM.data.save();
}

PS.getInteractionById=function(id){
	//TODO
	return '';	
}

PS.setInteractionById=function(id, value){
	//TODO
}

PS.main();
