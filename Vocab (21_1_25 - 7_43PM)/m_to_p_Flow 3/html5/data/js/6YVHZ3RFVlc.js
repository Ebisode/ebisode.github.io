﻿window.globalProvideData('slide', '{"title":"Pig","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide14","width":1194,"height":834,"resume":false,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6YVHZ3RFVlc","actionGroups":{"ReviewInt_6TmzhUpNE8o":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6GcFrVmGrPg"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_6TmzhUpNE8o":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6GcFrVmGrPg"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6TmzhUpNE8o":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6TmzhUpNE8o"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"DisableChoices_6TmzhUpNE8o":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6GcFrVmGrPg"},"enabled":{"type":"boolean","value":false}}]},"6TmzhUpNE8o_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6TkLGEo3OOA","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5mYvXwqqAiy.$Status","typea":"property","valueb":"correct","typeb":"string"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6TmzhUpNE8o"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5mYvXwqqAiy.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5mYvXwqqAiy.$AttemptCount","typea":"property","valueb":10000,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6TmzhUpNE8o"}]}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5up0Y1wS9gA","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5mYvXwqqAiy.$Status","typea":"property","valueb":"correct","typeb":"string"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6TmzhUpNE8o"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5mYvXwqqAiy.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5mYvXwqqAiy.$AttemptCount","typea":"property","valueb":10000,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6TmzhUpNE8o"}]}]}]}]},"NavigationRestrictionPreviousSlide_6YVHZ3RFVlc":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"pause_animations","objRef":{"type":"string","value":"_this"}}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxnanbnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxnanbnsnfns00001100101"}]}]},{"kind":"ontimelinecomplete","actions":[{"kind":"playnextdrawslide"},{"kind":"playnextdrawslide"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6WXvsABHhlu","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6WXvsABHhlu","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"6TmzhUpNE8o_CheckAnswered"}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6YVHZ3RFVlc"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":99,"id":"5o7EX69MVv9"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":14000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6XOyt64EkI9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nbmQcDDLrB"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KJvd3eQim1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xsiUpyO6tW"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5wCEwbpiVoo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6GcFrVmGrPg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oitHc3WERf"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6N5W3V7LgYs"}}]},{"kind":"ontimelinetick","time":3000,"actions":[{"kind":"hide","transition":"custom","animationId":"Exit","reverse":false,"objRef":{"type":"string","value":"5oitHc3WERf"}}]},{"kind":"ontimelinetick","time":3750,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6dgmZoML4Ln"}}]},{"kind":"ontimelinetick","time":4000,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6N5W3V7LgYs"}}]},{"kind":"ontimelinetick","time":5396,"actions":[{"kind":"hide","transition":"custom","animationId":"Exit","reverse":false,"objRef":{"type":"string","value":"6dgmZoML4Ln"}}]},{"kind":"ontimelinetick","time":5875,"actions":[{"kind":"seek_timeline","objRef":{"type":"string","value":"_this"},"position":7333,"variableGuid":"","useRelativeTime":false}]},{"kind":"ontimelinetick","time":6500,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6PG6lwt3zk4"}}]},{"kind":"ontimelinetick","time":8250,"actions":[{"kind":"hide","transition":"custom","animationId":"Exit","reverse":false,"objRef":{"type":"string","value":"6PG6lwt3zk4"}}]},{"kind":"ontimelinetick","time":8771,"actions":[{"kind":"seek_timeline","objRef":{"type":"string","value":"_this"},"position":10438,"variableGuid":"","useRelativeTime":false}]},{"kind":"ontimelinetick","time":9500,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6WyofirIE3V"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"referenceName":"6XOyt64EkI9","morphReferenceName":"6XOyt64EkI9","xOffset":0,"yOffset":0,"rotateXPos":596.5,"rotateYPos":416.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1195,"bottom":835,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":56}},"html5data":{"xPos":-1,"yPos":-1,"width":1196,"height":836,"strokewidth":1}},"width":1194,"height":834,"resume":false,"useHandCursor":true,"id":"6XOyt64EkI9"},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":2,"tabEnabled":true,"referenceName":"6nbmQcDDLrB","morphReferenceName":"6nbmQcDDLrB","xOffset":0,"yOffset":0,"rotateXPos":52,"rotateYPos":48.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":105,"bottom":98,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":-1,"yPos":-1,"width":106,"height":99,"strokewidth":0}},"width":104,"height":97,"resume":false,"useHandCursor":true,"id":"6nbmQcDDLrB"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":28,"id":"01","url":"story_content/5Vlw4Jokl1X.png","type":"normal","altText":"home.png","width":203,"height":198,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":3,"yPos":1,"tabIndex":3,"tabEnabled":true,"referenceName":"5rBLB0D6xqo","morphReferenceName":"5rBLB0D6xqo","xOffset":0,"yOffset":0,"rotateXPos":49,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":98,"bottom":96,"altText":"home.png","pngfb":false,"pr":{"l":"Lib","i":13}},"html5data":{"xPos":0,"yPos":0,"width":98,"height":96,"strokewidth":0}},"width":98,"height":96,"resume":false,"useHandCursor":true,"id":"5rBLB0D6xqo"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6nbmQcDDLrB"}}],"clickdef":[{"kind":"objref","type":"string","value":"6nbmQcDDLrB"},{"kind":"objref","type":"string","value":"5rBLB0D6xqo"}]}],"shapemaskId":"","xPos":33,"yPos":30,"tabIndex":23,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":52,"rotateYPos":48.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"width":104,"height":97,"resume":false,"useHandCursor":true,"id":"6nbmQcDDLrB","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_state","typea":"var","valueb":"_default","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"6nbmQcDDLrB.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rBLB0D6xqo"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5rBLB0D6xqo"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nbmQcDDLrB"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"open_url","url":"..\\\\Home\\\\story.html","window":"_self","windowsize":"default","width":100,"height":100,"usedefaultcontrols":true,"status":true,"toolbar":true,"location":true,"menubar":true,"scrollbars":true,"resizable":true}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":21,"tabEnabled":true,"referenceName":"6KJvd3eQim1","morphReferenceName":"6KJvd3eQim1","xOffset":0,"yOffset":0,"rotateXPos":71.5,"rotateYPos":58.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":143,"bottom":118,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":14}},"html5data":{"xPos":-1,"yPos":-1,"width":144,"height":119,"strokewidth":0}},"width":143,"height":117,"resume":false,"useHandCursor":true,"id":"6KJvd3eQim1"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":29,"id":"01","url":"story_content/5zqPobijbrz.png","type":"normal","altText":"Rightbtn.png","width":151,"height":151,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-13,"yPos":-17,"tabIndex":22,"tabEnabled":true,"referenceName":"5aemqUVrC19","morphReferenceName":"5aemqUVrC19","xOffset":0,"yOffset":0,"rotateXPos":84.5,"rotateYPos":75.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":169,"bottom":151,"altText":"Rightbtn.png","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":0,"yPos":0,"width":169,"height":151,"strokewidth":0}},"width":169,"height":151,"resume":false,"useHandCursor":true,"id":"5aemqUVrC19"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6KJvd3eQim1"}}],"clickdef":[{"kind":"objref","type":"string","value":"6KJvd3eQim1"},{"kind":"objref","type":"string","value":"5aemqUVrC19"}]}],"shapemaskId":"","xPos":1018,"yPos":701,"tabIndex":25,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":71.5,"rotateYPos":58.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"width":143,"height":117,"resume":false,"useHandCursor":true,"id":"6KJvd3eQim1","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_state","typea":"var","valueb":"_default","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"6KJvd3eQim1.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5aemqUVrC19"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5aemqUVrC19"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KJvd3eQim1"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"playnextdrawslide"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":19,"tabEnabled":true,"referenceName":"5xsiUpyO6tW","morphReferenceName":"5xsiUpyO6tW","xOffset":0,"yOffset":0,"rotateXPos":71.5,"rotateYPos":58.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":143,"bottom":118,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":57}},"html5data":{"xPos":-1,"yPos":-1,"width":144,"height":119,"strokewidth":0}},"width":143,"height":117,"resume":false,"useHandCursor":true,"id":"5xsiUpyO6tW"},{"kind":"vectorshape","rotation":180,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":29,"id":"01","url":"story_content/5zqPobijbrz.png","type":"normal","altText":"Rightbtn.png","width":151,"height":151,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-13,"yPos":-17,"tabIndex":20,"tabEnabled":true,"referenceName":"5u5FrHnqboK","morphReferenceName":"5u5FrHnqboK","xOffset":0,"yOffset":0,"rotateXPos":84.5,"rotateYPos":75.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":169,"bottom":151,"altText":"Rightbtn.png","pngfb":false,"pr":{"l":"Lib","i":58}},"html5data":{"xPos":0,"yPos":0,"width":169,"height":151,"strokewidth":0}},"width":169,"height":151,"resume":false,"useHandCursor":true,"id":"5u5FrHnqboK"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"5xsiUpyO6tW"}}],"clickdef":[{"kind":"objref","type":"string","value":"5xsiUpyO6tW"},{"kind":"objref","type":"string","value":"5u5FrHnqboK"}]}],"shapemaskId":"","xPos":33,"yPos":701,"tabIndex":24,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":71.5,"rotateYPos":58.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"width":143,"height":117,"resume":false,"useHandCursor":true,"id":"5xsiUpyO6tW","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_state","typea":"var","valueb":"_default","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"5xsiUpyO6tW.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5u5FrHnqboK"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5u5FrHnqboK"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xsiUpyO6tW"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"svgimage","accType":"image","shapemaskId":"","xPos":271,"yPos":21,"tabIndex":1,"tabEnabled":true,"referenceName":"5wCEwbpiVoo","morphReferenceName":"5wCEwbpiVoo","xOffset":0,"yOffset":0,"rotateXPos":326,"rotateYPos":265,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"imagedata":{"assetId":13,"url":"","type":"normal","altText":"pig.svg","width":652,"height":530,"mobiledx":0,"mobiledy":0}},"width":652,"height":530,"resume":false,"useHandCursor":true,"id":"5wCEwbpiVoo"},{"kind":"objgroup","accType":"radio","altText":"Group\\r\\n","shapemaskId":"","xPos":213,"yPos":419,"tabIndex":9,"tabEnabled":true,"referenceName":"6GcFrVmGrPg","morphReferenceName":"6GcFrVmGrPg","radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":86.5,"rotateYPos":66,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"6GcFrVmGrPg_hot","accState":0,"imagedata":{"assetId":98,"url":"","type":"normal","altText":"Group\\r\\n","width":0,"height":0,"mobiledx":0,"mobiledy":0},"html5data":{"url":"Shape6GcFrVmGrPg.png","xPos":0,"yPos":0,"width":173,"height":133,"strokewidth":0,"mask":"5A66O"}},"width":173,"height":132,"resume":true,"useHandCursor":true,"id":"6GcFrVmGrPg","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"_children.ActGrpClearHoverState"}]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5oitHc3WERf_-1389684868","id":"01","linkId":"txt__default_5oitHc3WERf","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":417,"height":129,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"pig","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}}],"style":{"defaultTabStop":79.6,"lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":3,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":74.133,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":55.6,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":19.9,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":138,"bottom":134,"pngfb":false,"pr":{"l":"Lib","i":113}}}],"shapemaskId":"","xPos":225,"yPos":413,"tabIndex":8,"tabEnabled":true,"referenceName":"5oitHc3WERf","morphReferenceName":"5oitHc3WERf","xOffset":0,"yOffset":0,"rotateXPos":218.5,"rotateYPos":69.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":437,"bottom":139,"altText":"pig","pngfb":false,"pr":{"l":"Lib","i":98}},"html5data":{"xPos":0,"yPos":0,"width":437,"height":139,"strokewidth":0}},"animations":[{"kind":"animation","id":"Exit","duration":1000,"hidetextatend":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1000,"alpha":{"path":[{"kind":"segment","start":"100","dstart":"0","end":"0","dend":"0"}],"duration":1000,"easing":"linear","easingdir":"easeinout"},"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"0","dsy":"0","endx":"0","endy":"0","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":false,"duration":1000,"easing":"linear","easingdir":"easeout"}},{"kind":"tween","time":999,"duration":1,"alpha":{"path":[{"kind":"segment","start":"100","dstart":"0","end":"0","dend":"0"}],"duration":1,"easing":"linear","easingdir":"easeinout"}}]}],"width":437,"height":139,"resume":false,"useHandCursor":true,"id":"5oitHc3WERf"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":232,"yPos":456,"tabIndex":18,"tabEnabled":true,"referenceName":"6N5W3V7LgYs","morphReferenceName":"6N5W3V7LgYs","xOffset":0,"yOffset":0,"rotateXPos":71,"rotateYPos":39,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":142,"bottom":78,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":114}},"html5data":{"xPos":0,"yPos":0,"width":142,"height":78,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":0,"top":0,"right":142,"bottom":78,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":114}},"html5data":{"xPos":0,"yPos":0,"width":142,"height":78,"strokewidth":0}}}],"width":142,"height":78,"resume":false,"useHandCursor":true,"id":"6N5W3V7LgYs","variables":[{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.5o7EX69MVv9"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5o7EX69MVv9"}},{"kind":"seek_timeline","objRef":{"type":"string","value":"_parent"},"position":4167,"variableGuid":"","useRelativeTime":false},{"kind":"resume_timeline","objRef":{"type":"string","value":"_parent"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6dgmZoML4Ln_-875608349","id":"01","linkId":"txt__default_6dgmZoML4Ln","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":417,"height":129,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"p","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"foregroundColor":"#FF0000","linkColor":"#FF0000","ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}},{"text":"ig","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}}],"style":{"defaultTabStop":79.6,"lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":3,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":74.133,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":55.6,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":19.9,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":138,"bottom":134,"pngfb":false,"pr":{"l":"Lib","i":115}}}],"shapemaskId":"","xPos":225,"yPos":413,"tabIndex":5,"tabEnabled":true,"referenceName":"6dgmZoML4Ln","morphReferenceName":"6dgmZoML4Ln","xOffset":0,"yOffset":0,"rotateXPos":218.5,"rotateYPos":69.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":437,"bottom":139,"altText":"pig","pngfb":false,"pr":{"l":"Lib","i":98}},"html5data":{"xPos":0,"yPos":0,"width":437,"height":139,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":1250,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1250,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1250,"easing":"linear","easingdir":"easein"}}]},{"kind":"animation","id":"Exit","duration":1250,"hidetextatend":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1250,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"0","dsy":"0","endx":"10","endy":"10","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1250,"easing":"linear","easingdir":"easeout"}}]}],"width":437,"height":139,"resume":false,"useHandCursor":true,"id":"6dgmZoML4Ln"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6PG6lwt3zk4_45271611","id":"01","linkId":"txt__default_6PG6lwt3zk4","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":417,"height":129,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"p","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"foregroundColor":"#FF0000","linkColor":"#FF0000","ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}},{"text":"ig","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}}],"style":{"defaultTabStop":79.6,"lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":3,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":74.133,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":55.6,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":19.9,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":138,"bottom":134,"pngfb":false,"pr":{"l":"Lib","i":115}}}],"shapemaskId":"","xPos":225,"yPos":413,"tabIndex":6,"tabEnabled":true,"referenceName":"6PG6lwt3zk4","morphReferenceName":"6PG6lwt3zk4","xOffset":0,"yOffset":0,"rotateXPos":218.5,"rotateYPos":69.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":437,"bottom":139,"altText":"pig","pngfb":false,"pr":{"l":"Lib","i":98}},"html5data":{"xPos":0,"yPos":0,"width":437,"height":139,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":1500,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1500,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1500,"easing":"linear","easingdir":"easein"}}]},{"kind":"animation","id":"Exit","duration":1500,"hidetextatend":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1500,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"0","dsy":"0","endx":"10","endy":"10","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1500,"easing":"linear","easingdir":"easeout"}}]}],"width":437,"height":139,"resume":false,"useHandCursor":true,"id":"6PG6lwt3zk4"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6WyofirIE3V_-429545748","id":"01","linkId":"txt__default_6WyofirIE3V","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":417,"height":129,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"p","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"foregroundColor":"#FF0000","linkColor":"#FF0000","ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}},{"text":"ig","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}}],"style":{"defaultTabStop":79.6,"lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":3,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":74.133,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":55.6,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":19.9,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":138,"bottom":134,"pngfb":false,"pr":{"l":"Lib","i":115}}}],"shapemaskId":"","xPos":225,"yPos":413,"tabIndex":7,"tabEnabled":true,"referenceName":"6WyofirIE3V","morphReferenceName":"6WyofirIE3V","xOffset":0,"yOffset":0,"rotateXPos":218.5,"rotateYPos":69.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":437,"bottom":139,"altText":"pig","pngfb":false,"pr":{"l":"Lib","i":98}},"html5data":{"xPos":0,"yPos":0,"width":437,"height":139,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":1500,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1500,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1500,"easing":"linear","easingdir":"easein"}}]}],"width":437,"height":139,"resume":false,"useHandCursor":true,"id":"6WyofirIE3V"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}');