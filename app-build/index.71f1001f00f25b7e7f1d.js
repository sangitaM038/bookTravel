webpackJsonp([0],{0:function(a,c,b){a.exports=b(1)},1:function(b,c,a){'use strict';angular.module('traveling',['ngSanitize','ui.router','ui.bootstrap','ui.select',a(21)]).config(a(22)).constant('appName','traveling').run(['$rootScope','$log',function(a,b){a.$on(function a(){b.debug('session expired');top.postMessage('_SESSION_EXPIRED_','*')})}])},19:function(c,a){'use strict';b.$inject=['$scope','$state','$http'];Object.defineProperty(a,'__esModule',{value:true});function b(a,b,f){'ngInject';a.active=0;var d=a.slides=[];var e=0;b.go('form.main');a.addSlide=function(){d.push({id:e++})};for(var c=0;c<7;c++){a.addSlide()}a.formData={firstName:'',lastName:'',email:'',phone:''};a.originForm=angular.copy(a.formData);a.location={};a.originForm1=angular.copy(a.location);a.dt={};a.dt1={};a.originForm2=angular.copy(a.dt1);a.originForm3=angular.copy(a.dt);a.radioButton='';a.tabDisable1=true;a.tabDisable2=true;a.tabDisable3=true;a.letsGo=function(){a.active=1;a.tabDisable1=false;var b=angular.element(angular.element('.notActive')[0]);b.removeClass('notActive')};a.clearSearch=function(){a.formData=angular.copy(a.originForm)};a.clearSearchSecond=function(){a.location=angular.copy(a.originForm1);a.dt1=angular.copy(a.originForm2);a.dt=angular.copy(a.originForm3)};a.submitForm=function(){a.active=2;a.tabDisable2=false;var b=angular.element(angular.element('.notActive')[0]);b.removeClass('notActive')};a.secondSubmitForm=function(e,c,d){a.active=3;a.tabDisable3=false;var b=angular.element(angular.element('.notActive'));b.removeClass('notActive');a.selectedRadioButton=angular.copy(c);a.selectedCheakbox=angular.copy(d)};a.thridSubmitForm=function(){a.active=0;var c='<b>Registration details</b>';c+='<p>This is the confirmation mail of the Travel Booking.</p>';c+='Name: '+a.formData.firstName+' '+a.formData.lastName;c+='<br>Email: '+a.formData.email;c+='<br>Mobile: '+a.formData.phone;c+='<br>Location: '+a.location.selected.city;c+='<br>Depart Date: '+a.dt1.date;c+='<br>Return Date: '+a.dt.date;c+='<br>Note: You are not required to replay to this email.';c+='<br><br><br>Thanks & Regards,<br>Shubh-Yatra.';a.message={sender:'sangita@shubhYatra.com',subject:'Travel Booking',body:c,reciepant:a.formData.email};f.post('http://192.168.10.74:8000/sendMail',a.message).success(function(a){alert('Send Mail..')}).error(function(a){console.error('error in posting')});b.go('form.main');a.tabDisable1=true;for(var d=0;d<=3;d++){var e=angular.element(angular.element('#'+d));e.addClass('notActive')}a.clearSearch();a.clearSearch();a.clearSearchSecond()};a.cancel=function(){a.active=0;b.go('form.main');a.clearSearch()};a.cancelSecond=function(){a.active=0;b.go('form.main');a.clearSearchSecond();a.tabDisable1=true;a.tabDisable2=true};a.cancelThird=function(){a.active=0;b.go('form.main');a.clearSearch();a.clearSearchSecond()};a.change=function(b){a.active=1;if(b=='roundTrip'){a.radioBSecond=true}};a.phoneNumbr=/^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;a.emailFormat=/^[a-zA-Z-'0-9._]+[a-zA-Z-'0-9._]+@[a-zA-Z-'0-9._]+\.[a-zA-Z-'.]{2,5}$/;a.name=/^([a-zA-Z-']{1,30})$/;a.locations=[{city:'Boston',country:'United States'},{city:'New_York',country:'United States'},{city:'Chicago',country:'United States'},{city:'San_Francisco',country:'United States'},{city:'Pune',country:'India '},{city:'Mumbai',country:'India '},{city:'Ahmednagar',country:'India '},{city:'Satara',country:'India '}];a.dateOptions={dateDisabled:g,formatYear:'yy',maxDate:new Date(2020,5,22),minDate:new Date,startingDay:1};function g(a){var b=a.date}a.today=function(){a.dt=new Date;a.dt1=new Date};a.today();a.clear=function(){a.dt=null;a.dt1=null};a.open1=function(){a.popup1.opened=true};a.open2=function(){a.popup2.opened=true};a.popup1={opened:false};a.popup2={opened:false}}a.default=b;c.exports=a['default']},20:function(a,b){},21:function(c,a,d){'use strict';Object.defineProperty(a,'__esModule',{value:true});var b='sample-project.components';a.default=b;angular.module(b,[]).component('helloWorld',d(19));c.exports=a['default']},22:function(c,a,b){'use strict';Object.defineProperty(a,'__esModule',{value:true});a.default=['$stateProvider','$urlRouterProvider',function(c,d){'ngInject';b(20);var a=b(19);d.otherwise('/form');c.state('form',{url:'/form',templateUrl:'../components/shubh-yatra/form.html',controller:a}).state('form.main',{url:'/main',templateUrl:'../components/shubh-yatra/mainPage.html'}).state('form.stepOne',{url:'/stepOne',templateUrl:'../components/shubh-yatra/step-one.html'}).state('form.stepTwo',{url:'/stepTwo',templateUrl:'../components/shubh-yatra/step-two.html'}).state('form.stepThree',{url:'/stepThree',templateUrl:'../components/shubh-yatra/step-three.html'})}];c.exports=a['default']}})
//# sourceMappingURL=index.71f1001f00f25b7e7f1d.js.map