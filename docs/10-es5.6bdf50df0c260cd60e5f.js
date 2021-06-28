!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{tvAg:function(t,s,i){"use strict";i.r(s),i.d(s,"PersistenceModule",function(){return S});var r=i("ofXK"),o=i("tyNb"),a=i("6G0F"),c=i("fXoL"),n=i("mqlY"),b=i("gS+c"),l=i("mL5k"),d=i("wn+G"),p=i("c9GC"),h=i("2LqL"),u=i("v1dy");function m(e,t){if(1&e&&(c.Zb(0,"tr",10),c.Zb(1,"td"),c.Ac(2),c.Yb(),c.Zb(3,"td"),c.Ac(4),c.Yb(),c.Zb(5,"td"),c.Ac(6),c.Yb(),c.Zb(7,"td"),c.Ac(8),c.Yb(),c.Yb()),2&e){var s=t.$implicit;c.pc("rtSelectable",s),c.Kb(2),c.Bc(s.iataCode),c.Kb(2),c.Bc(s.name),c.Kb(2),c.Bc(s.cityName),c.Kb(2),c.Bc(s.countryName)}}var A,Y,Z,g=((A=function t(s){var i=this;e(this,t),this.airportsService=s,this.loadData=function(e){return i.airportsService.getAirportsPagedList(e)}}).\u0275fac=function(e){return new(e||A)(c.Ub(p.a))},A.\u0275cmp=c.Ob({type:A,selectors:[["rt-demo-persistence-sample"]],features:[c.Jb([{provide:d.n,useClass:p.b,multi:!0},{provide:d.n,useClass:p.c,multi:!0},{provide:d.n,useClass:p.d,multi:!0}])],decls:26,vars:9,consts:[[3,"rtList","loadOnInit"],["list","rtList"],[3,"list","rtRegisterAsFilter"],["filter",""],[1,"table-responsive"],[1,"table","table-striped"],[3,"rtSort"],["rtSelectionArea",""],[3,"rtSelectable",4,"ngFor","ngForOf"],["colspan","4"],[3,"rtSelectable"]],template:function(e,t){if(1&e&&(c.Zb(0,"div",0,1),c.Vb(2,"rt-demo-filter-area",2,3),c.Zb(4,"div",4),c.Zb(5,"table",5),c.Zb(6,"thead"),c.Zb(7,"tr"),c.Zb(8,"th"),c.Zb(9,"span",6),c.Ac(10,"IATA"),c.Yb(),c.Yb(),c.Zb(11,"th"),c.Zb(12,"span",6),c.Ac(13,"Airport name"),c.Yb(),c.Yb(),c.Zb(14,"th"),c.Zb(15,"span",6),c.Ac(16,"City"),c.Yb(),c.Yb(),c.Zb(17,"th"),c.Zb(18,"span",6),c.Ac(19,"Country"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Zb(20,"tbody",7),c.yc(21,m,9,5,"tr",8),c.Yb(),c.Zb(22,"tfoot"),c.Zb(23,"tr"),c.Zb(24,"td",9),c.Vb(25,"rt-demo-paged-footer"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb()),2&e){var s=c.tc(1),i=c.tc(3);c.pc("rtList",t.loadData)("loadOnInit",!1),c.Kb(2),c.pc("list",s)("rtRegisterAsFilter",i),c.Kb(7),c.pc("rtSort","iataCode"),c.Kb(3),c.pc("rtSort","name"),c.Kb(3),c.pc("rtSort","cityName"),c.Kb(3),c.pc("rtSort","countryName"),c.Kb(3),c.pc("ngForOf",s.items)}},directives:[d.d,h.a,d.o,d.v,d.t,r.k,u.a,d.s],encapsulation:2,changeDetection:0}),A),f=function(){return["/filters"]},v=function(){return["/misc-directives"]},y=[{component:(Y=function t(){e(this,t)},Y.\u0275fac=function(e){return new(e||Y)},Y.\u0275cmp=c.Ob({type:Y,selectors:[["ng-component"]],decls:219,vars:6,consts:[[1,"agenda"],["href","persistence#common-idea"],["href","persistence#service-implementations"],["href","persistence#service-usage"],["href","persistence#concrete-component"],["href","persistence#global-registration"],["id","common-idea"],["href","#",3,"routerLink"],[1,"bulleted"],["id","service-implementations"],["title","local-storage-state-service.ts","url","shared/state-services/local-storage-state-service.ts"],["title","session-storage-state-service.ts","url","shared/state-services/session-storage-state-service.ts"],["title","query-string-state-service.ts","url","shared/state-services/query-string-state-service.ts"],["target","_blank","href","https://angular.io/docs/ts/latest/api/router/index/ActivatedRoute-interface.html"],["target","_blank","href","https://angular.io/docs/ts/latest/api/core/index/OpaqueToken-class.html"],["id","service-usage"],["id","concrete-component"],["url","persistence/persistence-sample/persistence-sample.component.html"],["url","persistence/persistence-sample/persistence-sample.component.ts"],["id","global-registration"],["title","app.module.ts","url","persistence/bootstrap/app.module.tsfake"],["href","https://angular.io/docs/ts/latest/api/core/index/ClassProvider-interface.html"],[1,"text-center","clearfix"],["href","#",1,"btn","btn-primary","docs-link","pull-left",3,"routerLink"],["href","#",1,"btn","btn-primary","docs-link","pull-right",3,"routerLink"]],template:function(e,t){1&e&&(c.Zb(0,"h2"),c.Ac(1,"Persist Lists State"),c.Yb(),c.Zb(2,"h3"),c.Ac(3,"Contents"),c.Yb(),c.Zb(4,"ul",0),c.Zb(5,"li"),c.Zb(6,"a",1),c.Ac(7,"General idea"),c.Yb(),c.Yb(),c.Zb(8,"li"),c.Zb(9,"a",2),c.Ac(10,"Examples of "),c.Zb(11,"code"),c.Ac(12,"RTStateService"),c.Yb(),c.Ac(13," contract implementations"),c.Yb(),c.Yb(),c.Zb(14,"li"),c.Zb(15,"a",3),c.Ac(16,"Register and use the implemented services"),c.Yb(),c.Zb(17,"ul"),c.Zb(18,"li"),c.Zb(19,"a",4),c.Ac(20,"Register state service in the specific component"),c.Yb(),c.Yb(),c.Zb(21,"li"),c.Zb(22,"a",5),c.Ac(23,"Register state services globally"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Zb(24,"section",6),c.Zb(25,"h3"),c.Ac(26,"General idea"),c.Yb(),c.Zb(27,"p"),c.Ac(28," If you have already seen the "),c.Zb(29,"a",7),c.Ac(30,"working with filters"),c.Yb(),c.Ac(31," section, you know that it is possible to annotate the properties of your component with "),c.Zb(32,"code"),c.Ac(33,"@filter"),c.Yb(),c.Ac(34," decorator and configure them as data request parameters. "),c.Yb(),c.Zb(35,"p"),c.Ac(36," However, there are other possibilities of using filters: "),c.Yb(),c.Zb(37,"ul",8),c.Zb(38,"li"),c.Ac(39," We can save the state of important list parameters (sortings, page size) in the "),c.Zb(40,"code"),c.Ac(41,"localStorage"),c.Yb(),c.Ac(42," and restore these parameters values when user visits the page next time. "),c.Yb(),c.Zb(43,"li"),c.Ac(44," We can save the state of list parameters in "),c.Zb(45,"code"),c.Ac(46,"sessionStorage"),c.Yb(),c.Ac(47," and restore them when user returns to the page during the same session. So, user gets the same list state as it is before leaving it. "),c.Yb(),c.Zb(48,"li"),c.Ac(49," We can serialize the state of all list parameters in "),c.Zb(50,"code"),c.Ac(51,"queryString"),c.Yb(),c.Ac(52,". When user shares such page link, the one who opens it gets the same page state as the sender does. "),c.Yb(),c.Yb(),c.Zb(53,"p"),c.Ac(54," Instead of the complete implementations (as soon as the logic of saving and identifying the settings are quite specific for the end app) our library contains the contracts to support them. "),c.Yb(),c.Zb(55,"p"),c.Ac(56," Nevertheless, in this section we will show the examples of completed implementations, which will serve you as a starting point for your own ones. "),c.Yb(),c.Yb(),c.Zb(57,"section",9),c.Zb(58,"h3"),c.Ac(59,"Examples of "),c.Zb(60,"code"),c.Ac(61,"RTStateService"),c.Yb(),c.Ac(62," contract implementations"),c.Yb(),c.Zb(63,"p"),c.Ac(64," First of all, it is needed to implement the service (or services) inheriting "),c.Zb(65,"code"),c.Ac(66,"RTStateService"),c.Yb(),c.Ac(67," abstract class. "),c.Yb(),c.Zb(68,"p"),c.Ac(69," The "),c.Zb(70,"code"),c.Ac(71,"getState"),c.Yb(),c.Ac(72," will be called during list initialization and must return settings saved previously. "),c.Yb(),c.Zb(73,"p"),c.Ac(74," The "),c.Zb(75,"code"),c.Ac(76,"persistState"),c.Yb(),c.Ac(77," method will be called by the list on every data loading. This logic works the following way: if user changes any parameters and confirms it by clicking \u201cload\u201d button, we can persist these parameters. For that we call the "),c.Zb(78,"code"),c.Ac(79,"getRequestState"),c.Yb(),c.Ac(80," method of the passed "),c.Zb(81,"code"),c.Ac(82,"filtersService"),c.Yb(),c.Ac(83," object and use optional delegate to filter resulted state representation by any required condition. "),c.Yb(),c.Zb(84,"p"),c.Ac(85," Below you can see the implementations of "),c.Zb(86,"code"),c.Ac(87,"RTStateService"),c.Yb(),c.Ac(88," which saves the list state in "),c.Zb(89,"code"),c.Ac(90,"localStorage"),c.Yb(),c.Ac(91,", "),c.Zb(92,"code"),c.Ac(93,"sessionStorage"),c.Yb(),c.Ac(94,", and "),c.Zb(95,"code"),c.Ac(96,"queryString"),c.Yb(),c.Ac(97,". "),c.Yb(),c.Zb(98,"p"),c.Ac(99," The implementations for "),c.Zb(100,"code"),c.Ac(101,"queryString"),c.Yb(),c.Ac(102," and "),c.Zb(103,"code"),c.Ac(104,"sessionStorage"),c.Yb(),c.Ac(105," save the object state entirely. "),c.Yb(),c.Zb(106,"p"),c.Ac(107," Implementation for "),c.Zb(108,"code"),c.Ac(109,"localStorage"),c.Yb(),c.Ac(110," uses the possibility of the "),c.Zb(111,"code"),c.Ac(112,"getRequestState"),c.Yb(),c.Ac(113," method to filter parameters and gets the states of the properties marked by the "),c.Zb(114,"code"),c.Ac(115,"@filter"),c.Yb(),c.Ac(116," annotation with the "),c.Zb(117,"code"),c.Ac(118,"persistable"),c.Yb(),c.Ac(119," flag. "),c.Yb(),c.Zb(120,"p"),c.Ac(121," Also this service adds the "),c.Zb(122,"code"),c.Ac(123,"take"),c.Yb(),c.Ac(124," and "),c.Zb(125,"code"),c.Ac(126,"sortings"),c.Yb(),c.Ac(127," properties, because they are configured at the "),c.Zb(128,"code"),c.Ac(129,"right-angled"),c.Yb(),c.Ac(130," level and do not know anything about the "),c.Zb(131,"code"),c.Ac(132,"persistable"),c.Yb(),c.Ac(133," flag. "),c.Yb(),c.Zb(134,"p"),c.Ac(135," As a result, the service saves only the part of list state. Well, saving such settings as page size usually is reasonable, since rarely changed by the user. But it is not necessary to save the values of the filters, because the user will probably not need the same values on every page visit. "),c.Yb(),c.Zb(136,"rt-demo-tab-section"),c.Vb(137,"rt-demo-code-tab",10),c.Vb(138,"rt-demo-code-tab",11),c.Vb(139,"rt-demo-code-tab",12),c.Yb(),c.Zb(140,"aside"),c.Zb(141,"p"),c.Ac(142," As you can notice, the services "),c.Zb(143,"code"),c.Ac(144,"RTLocalStorageStateService"),c.Yb(),c.Ac(145," and "),c.Zb(146,"code"),c.Ac(147,"RTSessionStorageStateService"),c.Yb(),c.Ac(148," inject the "),c.Zb(149,"a",13),c.Ac(150,"ActivatedRoute"),c.Yb(),c.Ac(151," object and implement the serialization/deserialization key based on the current routing path. "),c.Yb(),c.Zb(152,"p"),c.Ac(153," Good this solution or not depends on the requirements of the end app. For example, it can be more suitable to assign the unique key to each of the components and register such key via "),c.Zb(154,"a",14),c.Ac(155,"OpaqueToken"),c.Yb(),c.Ac(156," into the component injectors. "),c.Yb(),c.Yb(),c.Yb(),c.Zb(157,"section",15),c.Zb(158,"h3"),c.Ac(159,"Register and use the implemented services"),c.Yb(),c.Zb(160,"p"),c.Ac(161,"Now, we need to register the implemented services to use them in our components. We have several options to do this."),c.Yb(),c.Zb(162,"section",16),c.Zb(163,"h4"),c.Ac(164,"Register state service in the specific component"),c.Yb(),c.Zb(165,"p"),c.Ac(166," The simplest way is to register implemented services as "),c.Zb(167,"code"),c.Ac(168,"RTStateService"),c.Yb(),c.Ac(169," at the component level in "),c.Zb(170,"code"),c.Ac(171,"providers"),c.Yb(),c.Ac(172," array. As a result the component gets all the described functionality. "),c.Yb(),c.Zb(173,"rt-demo-tab-section"),c.Zb(174,"rt-demo-sample-tab"),c.Vb(175,"rt-demo-persistence-sample"),c.Yb(),c.Vb(176,"rt-demo-code-tab",17),c.Vb(177,"rt-demo-code-tab",18),c.Yb(),c.Yb(),c.Zb(178,"section",19),c.Zb(179,"h4"),c.Ac(180,"Register state services globally"),c.Yb(),c.Zb(181,"p"),c.Ac(182," It is also possible to register your services across all of the app lists. You can use "),c.Zb(183,"code"),c.Ac(184,"RTModule.registerStateService"),c.Yb(),c.Ac(185," or "),c.Zb(186,"code"),c.Ac(187,"RTListModule.registerStateService"),c.Yb(),c.Ac(188," and pass to it configuration object with the same settings as for angular "),c.Zb(189,"code"),c.Ac(190,"@Component"),c.Yb(),c.Ac(191,' decorator "providers" option '),c.Yb(),c.Zb(192,"rt-demo-tab-section"),c.Vb(193,"rt-demo-code-tab",20),c.Yb(),c.Yb(),c.Zb(194,"aside"),c.Zb(195,"p"),c.Ac(196," Also, it is possible to register several providers for the "),c.Zb(197,"code"),c.Ac(198,"RTStateService"),c.Yb(),c.Ac(199," using "),c.Zb(200,"a",21),c.Ac(201,"flag multi"),c.Yb(),c.Ac(202,". In this case, the question is: what if several providers return the values for the same parameter? "),c.Yb(),c.Zb(203,"p"),c.Ac(204," The answer is the following: the "),c.Zb(205,"code"),c.Ac(206,"getState"),c.Yb(),c.Ac(207," method of registered services will be called in the same order in which you have registered your services. The resulted state will be built by the call of "),c.Zb(208,"code"),c.Ac(209,"Object.assign({}, state1, state2, ...)"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Zb(210,"section"),c.Zb(211,"aside"),c.Zb(212,"h4"),c.Ac(213,"Related sections"),c.Yb(),c.Zb(214,"p",22),c.Zb(215,"a",23),c.Ac(216,"\u2190 Working with filters"),c.Yb(),c.Zb(217,"a",24),c.Ac(218,"Miscellaneous directives \u2192"),c.Yb(),c.Yb(),c.Yb(),c.Yb()),2&e&&(c.Kb(29),c.pc("routerLink",c.qc(3,f)),c.Kb(186),c.pc("routerLink",c.qc(4,f)),c.Kb(2),c.pc("routerLink",c.qc(5,v)))},directives:[o.f,n.a,b.a,l.a,g],encapsulation:2,changeDetection:0}),Y),path:""}],S=((Z=function t(){e(this,t)}).\u0275mod=c.Sb({type:Z}),Z.\u0275inj=c.Rb({factory:function(e){return new(e||Z)},imports:[[r.c,o.g.forChild(y),a.a]]}),Z)}}])}();