﻿window.globalProvideData('slide', '{"title":"Lion","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide13","width":1194,"height":834,"resume":false,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5qmR80ZyEwz","actionGroups":{"ReviewInt_6EznBaPKKMd":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6TbtCSstv6s"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_6EznBaPKKMd":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6TbtCSstv6s"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6EznBaPKKMd":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6EznBaPKKMd"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"DisableChoices_6EznBaPKKMd":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6TbtCSstv6s"},"enabled":{"type":"boolean","value":false}}]},"6EznBaPKKMd_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6TkLGEo3OOA","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6oMlLSeJ4pi.$Status","typea":"property","valueb":"correct","typeb":"string"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6EznBaPKKMd"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6oMlLSeJ4pi.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6oMlLSeJ4pi.$AttemptCount","typea":"property","valueb":10000,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6EznBaPKKMd"}]}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5up0Y1wS9gA","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6oMlLSeJ4pi.$Status","typea":"property","valueb":"correct","typeb":"string"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6EznBaPKKMd"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6oMlLSeJ4pi.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6oMlLSeJ4pi.$AttemptCount","typea":"property","valueb":10000,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6EznBaPKKMd"}]}]}]}]},"NavigationRestrictionPreviousSlide_5qmR80ZyEwz":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"pause_animations","objRef":{"type":"string","value":"_this"}}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxnanbnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxnanbnsnfns00001100101"}]}]},{"kind":"ontimelinecomplete","actions":[{"kind":"playnextdrawslide"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5XbKx4FYpwL","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5XbKx4FYpwL","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"6EznBaPKKMd_CheckAnswered"}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5qmR80ZyEwz"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":91,"id":"6MJbVki56Ic"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":14000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6eMuYbavJZT"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6NqGPJ63Myo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5flS35aiIPv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5vmR1b06mu6"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6TbtCSstv6s"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5nFpsbr46C6"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YUJo881E4F"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LcClQFi0wI"}}]},{"kind":"ontimelinetick","time":3000,"actions":[{"kind":"hide","transition":"custom","animationId":"Exit","reverse":false,"objRef":{"type":"string","value":"5nFpsbr46C6"}}]},{"kind":"ontimelinetick","time":3750,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6qpKSWE2wzy"}}]},{"kind":"ontimelinetick","time":4000,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5YUJo881E4F"}}]},{"kind":"ontimelinetick","time":5396,"actions":[{"kind":"hide","transition":"custom","animationId":"Exit","reverse":false,"objRef":{"type":"string","value":"6qpKSWE2wzy"}}]},{"kind":"ontimelinetick","time":5875,"actions":[{"kind":"seek_timeline","objRef":{"type":"string","value":"_this"},"position":7333,"variableGuid":"","useRelativeTime":false}]},{"kind":"ontimelinetick","time":6500,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6K4HMFolEJe"}}]},{"kind":"ontimelinetick","time":8250,"actions":[{"kind":"hide","transition":"custom","animationId":"Exit","reverse":false,"objRef":{"type":"string","value":"6K4HMFolEJe"}}]},{"kind":"ontimelinetick","time":8771,"actions":[{"kind":"seek_timeline","objRef":{"type":"string","value":"_this"},"position":10438,"variableGuid":"","useRelativeTime":false}]},{"kind":"ontimelinetick","time":9500,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6NqAJ0n40dI"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"referenceName":"6eMuYbavJZT","morphReferenceName":"6eMuYbavJZT","xOffset":0,"yOffset":0,"rotateXPos":596.5,"rotateYPos":416.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1195,"bottom":835,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":54}},"html5data":{"xPos":-1,"yPos":-1,"width":1196,"height":836,"strokewidth":1}},"width":1194,"height":834,"resume":false,"useHandCursor":true,"id":"6eMuYbavJZT","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"svgimage","accType":"image","shapemaskId":"","xPos":261,"yPos":63,"tabIndex":4,"tabEnabled":true,"referenceName":"6NqGPJ63Myo","morphReferenceName":"6NqGPJ63Myo","xOffset":0,"yOffset":0,"rotateXPos":326,"rotateYPos":265,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"imagedata":{"assetId":12,"url":"","type":"normal","altText":"lion.svg","width":652,"height":530,"mobiledx":0,"mobiledy":0}},"width":652,"height":530,"resume":false,"useHandCursor":true,"id":"6NqGPJ63Myo"},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":21,"tabEnabled":true,"referenceName":"5flS35aiIPv","morphReferenceName":"5flS35aiIPv","xOffset":0,"yOffset":0,"rotateXPos":71.5,"rotateYPos":58.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":143,"bottom":118,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":-1,"yPos":-1,"width":144,"height":119,"strokewidth":0}},"width":143,"height":117,"resume":false,"useHandCursor":true,"id":"5flS35aiIPv"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":23,"id":"01","url":"story_content/5zqPobijbrz.png","type":"normal","altText":"Rightbtn.png","width":151,"height":151,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-13,"yPos":-17,"tabIndex":22,"tabEnabled":true,"referenceName":"5osbAUma0RP","morphReferenceName":"5osbAUma0RP","xOffset":0,"yOffset":0,"rotateXPos":84.5,"rotateYPos":75.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":169,"bottom":151,"altText":"Rightbtn.png","pngfb":false,"pr":{"l":"Lib","i":13}},"html5data":{"xPos":0,"yPos":0,"width":169,"height":151,"strokewidth":0}},"width":169,"height":151,"resume":false,"useHandCursor":true,"id":"5osbAUma0RP"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"5flS35aiIPv"}}],"clickdef":[{"kind":"objref","type":"string","value":"5flS35aiIPv"},{"kind":"objref","type":"string","value":"5osbAUma0RP"}]}],"shapemaskId":"","xPos":1018,"yPos":701,"tabIndex":25,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":71.5,"rotateYPos":58.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"width":143,"height":117,"resume":false,"useHandCursor":true,"id":"5flS35aiIPv","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_state","typea":"var","valueb":"_default","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"5flS35aiIPv.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5osbAUma0RP"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5osbAUma0RP"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5flS35aiIPv"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"playnextdrawslide"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":19,"tabEnabled":true,"referenceName":"5vmR1b06mu6","morphReferenceName":"5vmR1b06mu6","xOffset":0,"yOffset":0,"rotateXPos":71.5,"rotateYPos":58.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":143,"bottom":118,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":57}},"html5data":{"xPos":-1,"yPos":-1,"width":144,"height":119,"strokewidth":0}},"width":143,"height":117,"resume":false,"useHandCursor":true,"id":"5vmR1b06mu6"},{"kind":"vectorshape","rotation":180,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":23,"id":"01","url":"story_content/5zqPobijbrz.png","type":"normal","altText":"Rightbtn.png","width":151,"height":151,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-13,"yPos":-17,"tabIndex":20,"tabEnabled":true,"referenceName":"5g4k5sN6Mlw","morphReferenceName":"5g4k5sN6Mlw","xOffset":0,"yOffset":0,"rotateXPos":84.5,"rotateYPos":75.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":169,"bottom":151,"altText":"Rightbtn.png","pngfb":false,"pr":{"l":"Lib","i":58}},"html5data":{"xPos":0,"yPos":0,"width":169,"height":151,"strokewidth":0}},"width":169,"height":151,"resume":false,"useHandCursor":true,"id":"5g4k5sN6Mlw"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"5vmR1b06mu6"}}],"clickdef":[{"kind":"objref","type":"string","value":"5vmR1b06mu6"},{"kind":"objref","type":"string","value":"5g4k5sN6Mlw"}]}],"shapemaskId":"","xPos":33,"yPos":701,"tabIndex":24,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":71.5,"rotateYPos":58.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"width":143,"height":117,"resume":false,"useHandCursor":true,"id":"5vmR1b06mu6","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_state","typea":"var","valueb":"_default","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"5vmR1b06mu6.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5g4k5sN6Mlw"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5g4k5sN6Mlw"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5vmR1b06mu6"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"objgroup","accType":"radio","altText":"Group\\r\\n","shapemaskId":"","xPos":213,"yPos":410,"tabIndex":5,"tabEnabled":true,"referenceName":"6TbtCSstv6s","morphReferenceName":"6TbtCSstv6s","radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":149,"rotateYPos":97.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"6TbtCSstv6s_hot","accState":0,"imagedata":{"assetId":90,"url":"","type":"normal","altText":"Group\\r\\n","width":0,"height":0,"mobiledx":0,"mobiledy":0},"html5data":{"url":"Shape6TbtCSstv6s.png","xPos":0,"yPos":0,"width":299,"height":196,"strokewidth":0,"mask":"E4ECO"}},"width":298,"height":195,"resume":true,"useHandCursor":true,"id":"6TbtCSstv6s","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"_children.ActGrpClearHoverState"}]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5nFpsbr46C6_903635607","id":"01","linkId":"txt__default_5nFpsbr46C6","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":214,"height":129,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"lion","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}}],"style":{"defaultTabStop":79.6,"tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":74.133,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":55.6,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":19.9,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":156,"bottom":134,"pngfb":false,"pr":{"l":"Lib","i":111}}}],"shapemaskId":"","xPos":278,"yPos":468,"tabIndex":14,"tabEnabled":true,"referenceName":"5nFpsbr46C6","morphReferenceName":"5nFpsbr46C6","xOffset":0,"yOffset":0,"rotateXPos":117,"rotateYPos":69.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":234,"bottom":139,"altText":"lion","pngfb":false,"pr":{"l":"Lib","i":110}},"html5data":{"xPos":0,"yPos":0,"width":234,"height":139,"strokewidth":0}},"animations":[{"kind":"animation","id":"Exit","duration":1000,"hidetextatend":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1000,"alpha":{"path":[{"kind":"segment","start":"100","dstart":"0","end":"0","dend":"0"}],"duration":1000,"easing":"linear","easingdir":"easeinout"},"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"0","dsy":"0","endx":"0","endy":"0","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":false,"duration":1000,"easing":"linear","easingdir":"easeout"}},{"kind":"tween","time":999,"duration":1,"alpha":{"path":[{"kind":"segment","start":"100","dstart":"0","end":"0","dend":"0"}],"duration":1,"easing":"linear","easingdir":"easeinout"}}]}],"width":234,"height":139,"resume":false,"useHandCursor":true,"id":"5nFpsbr46C6"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":289,"yPos":490,"tabIndex":18,"tabEnabled":true,"referenceName":"5YUJo881E4F","morphReferenceName":"5YUJo881E4F","xOffset":0,"yOffset":0,"rotateXPos":70.5,"rotateYPos":39.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":142,"bottom":79,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":112}},"html5data":{"xPos":0,"yPos":0,"width":142,"height":79,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":0,"top":0,"right":142,"bottom":79,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":112}},"html5data":{"xPos":0,"yPos":0,"width":142,"height":79,"strokewidth":0}}}],"width":141,"height":79,"resume":false,"useHandCursor":true,"id":"5YUJo881E4F","variables":[{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.6MJbVki56Ic"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6MJbVki56Ic"}},{"kind":"seek_timeline","objRef":{"type":"string","value":"_parent"},"position":4167,"variableGuid":"","useRelativeTime":false},{"kind":"resume_timeline","objRef":{"type":"string","value":"_parent"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6qpKSWE2wzy_1777352825","id":"01","linkId":"txt__default_6qpKSWE2wzy","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":214,"height":129,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"l","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"foregroundColor":"#FF0000","linkColor":"#FF0000","ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}},{"text":"ion","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}}],"style":{"defaultTabStop":79.6,"lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":74.133,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":55.6,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":19.9,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":156,"bottom":134,"pngfb":false,"pr":{"l":"Lib","i":113}}}],"shapemaskId":"","xPos":278,"yPos":468,"tabIndex":15,"tabEnabled":true,"referenceName":"6qpKSWE2wzy","morphReferenceName":"6qpKSWE2wzy","xOffset":0,"yOffset":0,"rotateXPos":117,"rotateYPos":69.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":234,"bottom":139,"altText":"lion","pngfb":false,"pr":{"l":"Lib","i":110}},"html5data":{"xPos":0,"yPos":0,"width":234,"height":139,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":1250,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1250,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1250,"easing":"linear","easingdir":"easein"}}]},{"kind":"animation","id":"Exit","duration":1250,"hidetextatend":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1250,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"0","dsy":"0","endx":"10","endy":"10","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1250,"easing":"linear","easingdir":"easeout"}}]}],"width":234,"height":139,"resume":false,"useHandCursor":true,"id":"6qpKSWE2wzy"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6K4HMFolEJe_-1976977883","id":"01","linkId":"txt__default_6K4HMFolEJe","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":214,"height":129,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"l","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"foregroundColor":"#FF0000","linkColor":"#FF0000","ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}},{"text":"ion","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}}],"style":{"defaultTabStop":79.6,"lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":74.133,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":55.6,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":19.9,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":156,"bottom":134,"pngfb":false,"pr":{"l":"Lib","i":113}}}],"shapemaskId":"","xPos":278,"yPos":468,"tabIndex":16,"tabEnabled":true,"referenceName":"6K4HMFolEJe","morphReferenceName":"6K4HMFolEJe","xOffset":0,"yOffset":0,"rotateXPos":117,"rotateYPos":69.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":234,"bottom":139,"altText":"lion","pngfb":false,"pr":{"l":"Lib","i":110}},"html5data":{"xPos":0,"yPos":0,"width":234,"height":139,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":1500,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1500,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1500,"easing":"linear","easingdir":"easein"}}]},{"kind":"animation","id":"Exit","duration":1500,"hidetextatend":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1500,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"0","dsy":"0","endx":"10","endy":"10","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1500,"easing":"linear","easingdir":"easeout"}}]}],"width":234,"height":139,"resume":false,"useHandCursor":true,"id":"6K4HMFolEJe"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6NqAJ0n40dI_-517042089","id":"01","linkId":"txt__default_6NqAJ0n40dI","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":214,"height":129,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"l","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"foregroundColor":"#FF0000","linkColor":"#FF0000","ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}},{"text":"ion","style":{"fontFamily":"\\"KG Neatly PrintedBoBold11BEC505\\",\\"KG Neatly Printed\\"","fontSize":96,"fontIsBold":true,"ascent":96.875,"descent":31.5,"leading":0,"underlinePosition":-9.375,"underlineThickness":6.25,"xHeight":43.25}}],"style":{"defaultTabStop":79.6,"lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":74.133,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":55.6,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":19.9,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":156,"bottom":134,"pngfb":false,"pr":{"l":"Lib","i":113}}}],"shapemaskId":"","xPos":278,"yPos":468,"tabIndex":17,"tabEnabled":true,"referenceName":"6NqAJ0n40dI","morphReferenceName":"6NqAJ0n40dI","xOffset":0,"yOffset":0,"rotateXPos":117,"rotateYPos":69.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":234,"bottom":139,"altText":"lion","pngfb":false,"pr":{"l":"Lib","i":110}},"html5data":{"xPos":0,"yPos":0,"width":234,"height":139,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":1500,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1500,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":1500,"easing":"linear","easingdir":"easein"}}]}],"width":234,"height":139,"resume":false,"useHandCursor":true,"id":"6NqAJ0n40dI"},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"referenceName":"6LcClQFi0wI","morphReferenceName":"6LcClQFi0wI","xOffset":0,"yOffset":0,"rotateXPos":52,"rotateYPos":48.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":105,"bottom":98,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":55}},"html5data":{"xPos":-1,"yPos":-1,"width":106,"height":99,"strokewidth":0}},"width":104,"height":97,"resume":false,"useHandCursor":true,"id":"6LcClQFi0wI"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":24,"id":"01","url":"story_content/5Vlw4Jokl1X.png","type":"normal","altText":"home.png","width":203,"height":198,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":3,"yPos":1,"tabIndex":2,"tabEnabled":true,"referenceName":"6e8iy0jNdpO","morphReferenceName":"6e8iy0jNdpO","xOffset":0,"yOffset":0,"rotateXPos":49,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":98,"bottom":96,"altText":"home.png","pngfb":false,"pr":{"l":"Lib","i":56}},"html5data":{"xPos":0,"yPos":0,"width":98,"height":96,"strokewidth":0}},"width":98,"height":96,"resume":false,"useHandCursor":true,"id":"6e8iy0jNdpO"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6LcClQFi0wI"}}],"clickdef":[{"kind":"objref","type":"string","value":"6LcClQFi0wI"},{"kind":"objref","type":"string","value":"6e8iy0jNdpO"}]}],"shapemaskId":"","xPos":33,"yPos":30,"tabIndex":23,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":52,"rotateYPos":48.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":11,"scrolling":true,"shuffleLock":false,"width":104,"height":97,"resume":false,"useHandCursor":true,"id":"6LcClQFi0wI","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_state","typea":"var","valueb":"_default","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"6LcClQFi0wI.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6e8iy0jNdpO"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6e8iy0jNdpO"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LcClQFi0wI"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"open_url","url":"..\\\\Home\\\\story.html","window":"_blank","windowsize":"default","width":100,"height":100,"usedefaultcontrols":true,"status":true,"toolbar":true,"location":true,"menubar":true,"scrollbars":true,"resizable":true}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}');