// Type definitions for ICTouchAPI R300.01.008.0
// Project: http://developer-enterprise.alcatel-lucent.com/api_content/
// Definitions by: Morten Trydal <https://github.com/trydis/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ICTouchAPI {
	enum KeyboardAlphanumMode {
		NORMAL,
		CAPS,
		CAPS_LOCK,
		NUMERIC
	}
	enum KeyboardTypes {
		ALPHANUM,
		NUM,
		FILTER,
		DIALPAD,
		EMOTICON,
		PASSWORD,
		NUMSEARCH,
		ALPHASEARCH,
		DTMF
	}

	module AppBarServices {
		function getAppBar(strWebAppName: string, strWidgetName: string): UIElements.AppBar.AppBarWidget;
		function addStaticButton(strWebAppName: string, strWidgetName: string, objActionButton: UIElements.AppButton.AppButtonControl): void;
	}

	module popupServices {
		interface PopupOptions {
			strTitle: string;
			strType: string;
			strContent: string;
			arrPopupButtons: UIElements.AppButton.AppButtonControlOptions[]
		}
		interface Popup {
		}
		function addNewPopup(options: PopupOptions): Popup;
		function removePopup(popup: Popup): void;
	}

	module HttpServices {
		interface HttpRequestArgs {
			method: string;
			url: string;
			putData?: string;
			postData?: string;
			responseType: string;
			content?: string;
			context?: any;
			header?: {};
			timeout?: number;
			callback: (response: string) => void;
			callbackParams?: any;
			callbackError: (error: string) => void;
		}
		function httpRequest(args: HttpRequestArgs): void;
	}

	module keyboardServices {
		interface KeyboardOptions {
			strDefaultText: string;
			strDefaultMode: ICTouchAPI.KeyboardAlphanumMode;
			bMultiLines?: boolean;
			showVoicemailButton?: boolean;
			showAddcontactButton?: boolean;
			hideStarsIfPasswordEmpty?: boolean;
			funcCallbackOk: () => void;
			funcCallbackExit?: () => void;
			funcCallbackKeyPress?: () => void;
			funcCallbackKeyPressed?: () => void;
			funcCallbackKeyReleased?: () => void;
		}
		function deployKeyboard(type: ICTouchAPI.KeyboardTypes, objCallingInputField: UIElements.InputField.InputFieldControl, objCustomParams: KeyboardOptions): void;
	}
}

declare module UIElements {
	module InputField {
		interface InputFieldControlOptions {
			keyboardType: ICTouchAPI.KeyboardTypes;
			strInputText: string;
			isMultiLines: boolean;
			strOk: string;
			strExit: string;
			funcCallback: (content: string) => void;
		}
		class InputFieldControl {
			constructor(options: InputFieldControlOptions)
		}
	}

	module AppButton {
		interface AppButtonControlOptions {
			strButtonName: string;
			strButtonLabel: string;
			strButtonIcon: string;
			callback: () => void;
		}
		class AppButtonControl {
			constructor(options: AppButtonControlOptions);
		}
	}

	module AppBar {
		interface AppBarWidget {
			addActionButton(objButton: UIElements.AppButton.AppButtonControl): void;
		}
	}

	module ApplicationMode {
		interface NameParamsOptions {
			name: string;
			params: {};
		}
		interface LabelOptions {
			strLabel: string;
		}
		interface ThirdControlOptions {
			objMenuTitle: LabelOptions;
			objMenu: NameParamsOptions;
			objContainerTitle: LabelOptions;
			objContainer: NameParamsOptions;
		}
		class ThirdControl {
			constructor(options: ThirdControlOptions);
		}
	}
}