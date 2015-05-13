/// <reference path="ic-touch-api.d.ts" />

var appBar = ICTouchAPI.AppBarServices.getAppBar("foo", 'bar');
var buttonOptions = {
	strButtonName: "foo",
	strButtonLabel: "bar",
	strButtonIcon: "baz",
	callback: function() {
		console.debug("callback");
	}
};
var button = new UIElements.AppButton.AppButtonControl(buttonOptions);
appBar.addActionButton(button);

ICTouchAPI.AppBarServices.addStaticButton("foo", "bar", button);

var thirdControlOptions = {
	objMenuTitle: { strLabel: "foo" },
	objMenu: { name: "bar", params: {} },
	objContainerTitle: { strLabel: "bar" },
	objContainer: { name: "baz", params: {} }
}
var thirdControl = new UIElements.ApplicationMode.ThirdControl(thirdControlOptions);

var popupOptions = {
	strTitle: "title",
	strType: "warning",
	strContent: "content",
	arrPopupButtons: [{
		strButtonName: "foo",
		strButtonLabel: "bar",
		strButtonIcon: "baz",
		callback: function() {
			console.debug("callback");
		}
	}, {
			strButtonName: "foo2",
			strButtonLabel: "bar2",
			strButtonIcon: "baz2",
			callback: function() {
				console.debug("callback2");
			}
		}]
};
var popup = ICTouchAPI.popupServices.addNewPopup(popupOptions);
ICTouchAPI.popupServices.removePopup(popup);

var keyboardOptions = {
	strDefaultText: "foo",
	strDefaultMode: ICTouchAPI.KeyboardAlphanumMode.NORMAL,
	funcCallbackOk: function() {
		console.debug("callback");
	}
};
ICTouchAPI.keyboardServices.deployKeyboard(ICTouchAPI.KeyboardTypes.ALPHANUM, null, keyboardOptions);

var inputFieldOptions = {
	keyboardType: ICTouchAPI.KeyboardTypes.ALPHANUM,
	strInputText: "foo",
	isMultiLines: false,
	strOk: "Ok",
	strExit: "Exit",
	funcCallback: function(content: string) {
		console.debug(content);
	}
};
var inputField = new UIElements.InputField.InputFieldControl(inputFieldOptions);

var httpRequestArgs = {
	method: "get",
	url: "www.foo.com",
	responseType: "text",
	callback: function(response: string) {
		console.debug(response);
	},
	callbackError: function(error: string) {
		console.debug(error);
	}
};
ICTouchAPI.HttpServices.httpRequest(httpRequestArgs);