(function(n,t){"use strict";var i={init:function(n){var t=this;t._rightRailVM=n.ctx.rightRail,t._legacySMC=null},render:function(){return this.tagCtx.render(this.data)},onAfterLink:function(){this._onSMCShowHandler=t.proxy(this._onSMCShow,this),n.Cmd("smc.show").subscribe(this._onSMCShowHandler)},_onSMCShow:function(n){var t=this;setTimeout(function(){n.messageSent&&(t._legacySMC||(t._legacySMC=new wLive.Hotmail.SentMailNotification.SentMailNotificationControl),t._legacySMC.show(n.potentialContacts,n.potentialSocialNetworkUpsellData,t._rightRailVM.peoplePaneManager()))},0)},onDispose:function(){n.Cmd("smc.show").unsubscribe(this._onSMCShowHandler)}};t.views.tags({smcControl:i}),n.markControlAsLoaded("SmcControl")})(window.ol,window.originaljQuery||window.jQuery),function(){var n=ol.templateMap=ol.templateMap||{};n["#silverlightUploaderTemplate"]={tmpls:[],links:{},tags:{},bnds:[],_is:"template",allowCode:!0,tmplName:"silverlightUploaderTemplate",htmlTag:"div",fn:{fn:function(n,t,i){var i=i||jsviews,u=i._cnvt,r="";return r+='    <div id="uploadControlContainer" tabIndex="1" style="position: relative; width: 100%">        <object id="uploadControl" data="data:application/x-silverlight," type="application/x-silverlight-2" width="10" height="10">            <param name="source" value="',r+=u("attr",t,{params:"xapFileUrl",props:{},args:[n.xapFileUrl]}),r+='"/>            <param name="onLoad" value="AttachmentUpload$onUploadControlLoaded"/>            <param name="onError" value="AttachmentUpload$onUploadControlError" />            <param name="background" value="Transparent"/>            <param name="windowless" value="true"/>            <param name="enableHtmlAccess" value="true"/>            <param name="allowHtmlPopupWindow" value="true"/>            <param name="splashscreensource" value="/mail/SplashScreen.xaml"/>            <param name="initParams" value="                LabelText=',r+=u("attr",t,{params:"~ol.GetString('EditMessage.Attach')",props:{},args:[t.hlp("ol").GetString("EditMessage.Attach")]}),r+=",                SelectionBackgroundColor=",r+=u("attr",t,{params:"~getSelectionColor()",props:{},args:[t.hlp("getSelectionColor")()]}),r+=",                HoverBackgroundColor=",r+=u("attr",t,{params:"~getHoverColor()",props:{},args:[t.hlp("getHoverColor")()]}),r+=",                SatchmoPostUrl=",r+=u("attr",t,{params:"satchmoPostUrl",props:{},args:[n.satchmoPostUrl]}),r+=",                IsRtl=",r+=u("attr",t,{params:"!~ol.config.Ltr",props:{},args:[!t.hlp("ol").config.Ltr]}),r+=",                Market=",r+=u("attr",t,{params:"market",props:{},args:[n.market]}),r+=",                MaxUploadBytes=",r+=u("attr",t,{params:"~ol.compose.composeVm.InitContext.maxUploadBytes",props:{},args:[t.hlp("ol").compose.composeVm.InitContext.maxUploadBytes]}),r+=",                MaxUploadFileCount=",r+=u("attr",t,{params:"~ol.compose.composeVm.InitContext.maxUploadFileCount",props:{},args:[t.hlp("ol").compose.composeVm.InitContext.maxUploadFileCount]}),r+=",                FileByteThreshhold=",r+=u("attr",t,{params:"fileByteThreshhold",props:{},args:[n.fileByteThreshhold]}),r+=",                TotalByteThreshhold=",r+=u("attr",t,{params:"totalByteThreshhold",props:{},args:[n.totalByteThreshhold]}),r+'" />        <\/object>    <\/div>'}}}}(),function(n){function u(t,i,r){return r===undefined?r=t[i]:n.observable(t).setProperty(i,r),r}var t,r,o,s;window.wLive=window.wLive||{},t=window.wLive,t.Hotmail=t.Hotmail||{},r=t.Hotmail,r.SentMailNotification=r.SentMailNotification||{};var e=r.SentMailNotification,f=t.Controls.Notifications,i=window.ol,h=i.ContactsUtil;e.SentMailNotificationControl=function(){function b(t){var e,r,o;$BSI.reportEvent("Log.CntctUp",{UL:"SMC",CC:u.ContactsToAdd.length}),e=n("<div><\/div>").link(n.templates("#SMN_AddContactsFlyoutTemplate"),u,n.extend({smnStrings:h},i.getContextObject())),s=f.createFlyout({content:e,anchor:t,buttons:{action:h.addContacts}}),r=null;n(s).on("beforeshow.flyout",function(){r=s.content();n(r).on("click.flyout",function(t){var i=n(t.target),r,u;(i.hasClass("pcCk")||i.is("label"))&&(r=i.parent().find(".pcCk").get(0),u=n(r).view().data,u&&u.isSelected(!!r.checked))})}).on("beforedismiss.flyout",function(){n(".FirstName input",e).change(),n(".LastName input",e).change()});r=null;n(s).on("beforeshow.flyout",function(){r=s.content();n(r).on("click.flyout",function(t){var i=n(t.target),r,u;(i.hasClass("pcCk")||i.is("label"))&&(r=i.parent().find(".pcCk").get(0),u=n(r).view().data,u&&u.isSelected(!!r.checked))})});for(s.show().then(function(f){var o,e;for(n(s).off(".flyout"),n(r).off(".flyout"),s=null,o=0;o<u.ContactsToAdd.length;o++)n.observable.simpleOff(u.ContactsToAdd[o],"propertyChange",y);f.buttonClicked&&(e=u.getContactsToAdd(),e.length>0&&($BSI.reportEvent("mp.addContact",{UL:"SMC",CC:e.length}),t.disabled=!0,l=e.length,i.Dispatcher.fireCmd("addcontacts",{contactsToAdd:e,entryPoint:HM.InstrumentationEntryPoint.Notification}).deferred.then(function(){t.disabled=!1,n(t).text(h.manageContacts),l>1?n("#SmcDescription").text(h.multipleContactsAddedDescription.replace("{0}",l)):n("#SmcDescription").text(h.singleContactAddedDescription),v=!0},function(){t.disabled=!1})))}),p(),o=0;o<u.ContactsToAdd.length;o++)n.observable.simpleOn(u.ContactsToAdd[o],"propertyChange",y)}function y(n,t){t.path==="IsSelected"&&p()}function p(){var n=s.getButton({buttonName:"action"})[0];n&&(n.disabled=!u.areContactsSelected())}function k(n,t){return n&&n.length>0||t&&t.length>0||!d()}function d(){return t.Animations&&t.Animations.Enabled}function g(n,t){var e,f,o,i,h,s;var r=[],u="FB";if(n&&t&&t.socialInboxMemberships&&(e=t.socialInboxMemberships,f=n.getIfReady(),f))for(email in e)if(e.hasOwnProperty(email)&&(o=e[email],o.socialNetworkMembers&&o.socialNetworkMembers[u]&&(i=o.socialNetworkMembers[u],!(f.isFriend(u,i.SocialNetworkMemberID)||f.isPendingFriend(u,i.SocialNetworkMemberID)||f.userHasMemberID(u,i.SocialNetworkMemberID))))){for(h=!1,s=0;s<r.length;s++)if(r[s].SocialNetworkMemberID===i.SocialNetworkMemberID){h=!0;break}if(!h&&(i.senderId=email,r.push(i),r.length===2))break}return r}var h=e.strings,w=r.SentMailNotificationConfig.get(),a=this,c=null,s=null,u=null,v=!1,l=0;a.dispose=function(){u&&u.dispose(),a=u=c=s=null},a.show=function(t,r,e){var a,p,d,tt,nt,y;if(v=!1,l=0,a=null,e&&e.isSentMailUpsellControlAvailable()&&e.isPeoplePaneEnabled()&&(r=r||{},(r.FriendshipCache||r.UserConnectionStatus)&&e.loadFriendshipCache(r),a=g(e.friendshipCache(),r.PotentialSocialInboxUpsells)),k(t,a)){u&&u.dispose(),u=new o(t,a),$BSI.reportEvent("Log.SMC",{SV:u.hasUpsells()?u.hasPotentialContacts()?"FC":"F":u.hasPotentialContacts()?"C":"No"}),p=n(n.templates("#SMN_MainTemplate").render(u,i.getContextObject())),d=e&&a&&a.length>0,d&&e.showSentMailUpsells(n(".SocialNetworkUpsellContainer",p),a),tt=u.hasUpsellsOrPotentialContacts()?f.BarDismissalMode.Implicit:f.BarDismissalMode.Timeout,nt={},u.hasPotentialContacts()&&(nt.action=h.showAddContacts),y={autoHeight:!1},u.hasUpsellsOrPotentialContacts()&&(y.autoHeight=!0,y.dismissOnButtonClick=!1,y.moreCss="SentMailNotificationContainer "+(u.hasUpsells()?"WithUpsells":"WithoutUpsells")),c=f.createBottomBar({content:p,dismissalMode:tt,buttons:nt,options:y});n(c).on({"buttonclick.sentMailNotification":function(n,t,i){i==="action"&&(v?$BSI.navigateTo(w.manageContactsUrl,"_blank"):b(t.getButton({buttonName:"action"})[0]))},"beforedismiss.sentMailNotification":function(){if(s)return!1}});c.show().then(function(){n(c).unbind(".sentMailNotification"),d&&e.hideSentMailUpsells(),u&&u.dispose(),u=c=s=null})}}},o=function(t,r){function o(){var r,o;if(f.PreferencesUrl=i.baseLegacyUrl(i.config.socialInbox.preferencesUrl),u(f,"ContactsToAdd",e),t)for(r=0;r<t.length;r++)o=new s(t[r]),n.observable(e).insert(e.length,o)}var f=this,e=[];f.getContactsToAdd=function(){for(var r=[],u=e.length,n,t,i=0;i<u;i++)n=e[i],n.isSelected()&&(t=new HM.ContactToAdd,t.FirstName=n.firstName(),t.LastName=n.lastName(),t.EmailAddress=n.emailAddress(),r.push(t));return r},f.areContactsSelected=function(){for(var t=e.length,n=0;n<t;n++)if(e[n].isSelected())return!0;return!1},f.dispose=function(){},f.hasPotentialContacts=function(){return t&&t.length>0},f.hasUpsells=function(){return r&&r.length>0},f.hasUpsellsOrPotentialContacts=function(){return f.hasUpsells()||f.hasPotentialContacts()},o()},s=function(n){function i(){t.isSelected(!0),t.emailAddress(n.PreferredEmail),r(n)}function r(n){var i=h.getFirstLastNames(n);t.firstName(i.First),t.lastName(i.Last)}var t=this;t.isSelected=function(n){return u(t,"IsSelected",n)},t.firstName=function(n){return u(t,"FirstName",n)},t.lastName=function(n){return u(t,"LastName",n)},t.emailAddress=function(n){return u(t,"EmailAddress",n)},t.isLastNameFirst=function(){return $pwc.names.isLastNameFirst()},i()}}(window.originaljQuery||window.jQuery),function(n,t){"use strict";function d(){var r=t(f),s=r.parent(),o=h.slUploadControl;$CSIPerf&&($CSIPerf.setPerformanceId("SilverlightUploader"),$BSI&&$BSI.informNav(),$CSIPerf.addCsd("size",o.xapSize)),c=r.outerWidth(),l=r.outerHeight(),r.css("position","absolute"),u=null,s.append(t.templates(p).render(o,t.extend({getSelectionColor:g,getHoverColor:nt},n.getContextObject()))),e=i.setTimeout($CC(i.AttachmentUpload$onUploadControlError,[null,{errorMessage:"load timeout"}]),h.slUploadControl.loadTimeout)}function v(n){return n.indexOf("#")===0?n.substring(1,n.length):(n=n.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),("0"+parseInt(n[1],10).toString(16)).slice(-2)+("0"+parseInt(n[2],10).toString(16)).slice(-2)+("0"+parseInt(n[3],10).toString(16)).slice(-2))}function g(){var n=t(f),i=n.addClass("t_seli").css("background-color");return n.removeClass("t_seli"),v(i)}function nt(){return v(t(".t_body .t_sbgc").css("background-color"))}function y(n){t(b).remove(),t(f).css("display","block").css("position","relative"),n&&$BSI.reportEvent("Compose.Messaging.Mail.Attachment",{SLcontrol:"0"})}function o(n){var t={externalUploaderId:n.UniqueId,status:n.Status,size:n.FileLength,name:n.Name,errorCode:n.LastErrorCode,progress:n.Progress},i=n.FileUploadInformation;return i&&(t.uploadResults={uploadSize:null,fileName:t.name,fileId:i.Id,fileSize:t.size,showMessage:!!i.Caption,errorDescription:i.Caption}),t}function tt(n){var t=n.externalUploaderId();if(t&&u)try{u.RemoveFile(t)}catch(r){i.AttachmentUpload$onUploadControlError(null,{errorMessage:"Silverlight control no longer valid"});return}}var p="#silverlightUploaderTemplate",s={pending:0,resizing:1,uploading:2,finished:3,error:4,cancelling:5,cancelled:6},r={noError:0,fileOverSizeError:0,fileInUseError:1,fileEmptyError:2,virusError:3,virusScanFailedError:4,extensionBlocked:5,invalidFileNameError:6,timeoutError:7,authTimeoutError:8,unexpectedFailure:9},w={template:"<div><\/div>",attr:"html",init:function(i){this.data=i.ctx.data,this._slEventHandler=t.proxy(this._onSlEvent,this),this._arrayChangeHandler=t.proxy(this._onArrayChange,this),this.ControlNamespace=n.createControlNamespace(this.tagName),t.observable.simpleOn([this.data.RegularFiles],"arrayChange",this._arrayChangeHandler)},render:function(){return this.tagCtx.render(this.data)},onAfterLink:function(){n.Cmd("compose.controlready").bubble(this)},_onArrayChange:function(n,t){t.change==="remove"&&tt(t.items[0])},_onSlEvent:function(n){switch(n.event){case"sl.itemadded":this._onItemAdded(n.file);break;case"sl.itemprogresschanged":this._onProgressChange(n.file);break;case"sl.itemstatuschanged":this._onStatusChange(n.file)}},_onItemAdded:function(i){var r=new n.vm.AttachmentFile({file:i,enableThumbnails:!1,isExternalUploader:!0});t.observable(this.data.RegularFiles).insert(this.data.RegularFiles.length,r)},_onProgressChange:function(n){var t=this.data.findFileWithExternalUploaderId(n.externalUploaderId);t&&t.uploadProgress(n.progress+"%")},_translateErrorCodeToMessage:function(t){var i=n.GetString("Carousel.UploadError");switch(t){case r.fileOverSizeError:i=n.GetString("Carousel.FileExceededMaxBytes");break;case r.fileInUseError:case r.fileEmptyError:case r.virusScanFailedError:i=n.GetString("Carousel.ErrorLoadingFile");break;case r.virusError:i=n.GetString("Error.EditMessage.AttachmentHasVirus");break;case t.extensionBlocked:i=n.GetString("Error.EditMessage.BlockedAttachmentFileExtension");break;case r.invalidFileNameError:i=n.GetString("Error.EditMessage.AttachmentInvalidFilename");break;case r.uploadTimeoutError:case r.authTimeoutError:i=n.GetString("Error.EditMessage.UploadTimeout")}return i},_onStatusChange:function(n){var t=this.data.findFileWithExternalUploaderId(n.externalUploaderId);if(t)switch(n.status){case s.finished:t.uploadProgress("100%"),t.finishUpload(n.uploadResults);break;case s.error:t.itemErrorMessage(this._translateErrorCodeToMessage(n.errorCode)),t.hasError(!0)}},onDispose:function(){y(!1),t.observable.simpleOff([this.data.RegularFiles],"arrayChange",this._arrayChangeHandler),this.loseControl()},loseControl:function(){var i=this;i._haveControl&&(i._haveControl=!1,n.Cmd("sl.event").unsubscribe(i._slEventHandler),t("#InsertMenu").off("click."+i.ControlNamespace))},gainControl:function(){var i=this;if(!i._haveControl){t("#InsertMenu").one("click."+i.ControlNamespace,d);i._haveControl=!0,n.Cmd("sl.event").subscribe(i._slEventHandler)}}};t.views.tags({silverlightUploaderControl:w});var i=window,b="#uploadControlContainer",f="#AttachFiles",h=n.config.compose,k=n.config.Ltr?"left":"right",c=0,l=0,u=null,e=null,a=!0;i.AttachmentUpload$onUploadControlLoaded=function(){var n,r;if(e&&(i.clearTimeout(e),e=null),n=t("#uploadControl"),n[0]){u=n[0].Content.HotmailUploaderController;try{r=u.IsUploading}catch(o){i.AttachmentUpload$onUploadControlError(null,{errorMessage:"silverlight control test error"});return}n.css(k,"0"),n.css("width",c+"px"),n.css("height",l+"px"),t(f).css("display","none"),$BSI&&$BSI.informPVHead&&$BSI.informLoaded&&a&&($BSI.informPVHead(),$BSI.informLoaded()),a=!1,$BSI.reportEvent("Compose.Messaging.Mail.Attachment",{SLcontrol:"1"})}},i.AttachmentUpload$onUploadControlError=function(n,t){u=null,y(!0);try{i.$WebWatson.submit("Silverlight upload control error: "+t.errorMessage,t.xamlFile||null,t.lineNumber||null,String.format("type: {0} method: {1}",t.errorType+"",t.methodName+""),t.errorCode||null,null,null,!0)}catch(r){i.$WebWatson.submit("Silverlight upload control error: unknown error",null,null,null,null,null,null,!0)}},i.AttachmentUpload$onAddFileDialogClosed=function(n){$BSI.reportEvent("Cmp.AttachP",{NumFiles:n,IsInline:0}),window.focus(),$menu.closeCurrent()},i.AttachmentUpload$onItemAdded=function(t){n.Cmd("sl.event").fire({file:o(t),event:"sl.itemadded"})},i.AttachmentUpload$onItemStatusChanged=function(t){n.Cmd("sl.event").fire({file:o(t),event:"sl.itemstatuschanged"})},i.AttachmentUpload$onItemProgressChanged=function(t){n.Cmd("sl.event").fire({file:o(t),event:"sl.itemprogresschanged"})},i.AttachmentUpload$refreshPageSizing=function(){},n.markControlAsLoaded("silverlightUploaderControl")}(window.ol,window.originaljQuery||window.jQuery)