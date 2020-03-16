(this["webpackJsonpStudyCenter-Client"]=this["webpackJsonpStudyCenter-Client"]||[]).push([[0],{51:function(e,t,n){e.exports=n(76)},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},68:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(38),s=n.n(c),i=(n(56),n(9)),u=(n(57),n(17)),o=n.n(u),l=n(27),d=n(23),m=(n(59),n(21)),f=n(18),b=n(19),q=n(15),E=n(34);function g(){var e=Object(d.a)(["\nquery quiz($id: ID!){\n    quiz(id: $id) {\n      id\n      title\n      description\n      questions{\n        id\n        body\n        correctAnswer{\n          id\n          answer\n        }\n        answers{\n          id\n          answer\n        }\n      }\n      course{\n          title\n          code\n      }\n    }\n  }\n"]);return g=function(){return e},e}function p(){var e=Object(d.a)(["\n{\n  questions{\n    id\n    question\n    hasMathjax\n    answers{\n      id\n      answer\n    }\n  }\n}\n"]);return p=function(){return e},e}Object(E.a)(p());var v=Object(E.a)(g()),w=n(22),h=function(e){return r.a.createElement("div",{className:"quiz-header"},r.a.createElement("div",{className:"quiz-header-title"},e.quiz.title),r.a.createElement("div",null,e.quiz.course.code," - ",e.quiz.course.title),e.submitted&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"quiz-header-score"},"Score: ",e.mark," / ",e.quiz.questions.length)),r.a.createElement(w.b,{to:"/",onClick:function(){e.setLoading(!0)}},r.a.createElement("div",{className:"quiz-header-return"},"Return")))},z=function(e){var t=Object(a.useState)({}),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){c={},c=e.selected?{backgroundColor:"#9eeaff"}:{":hover":{backgroundColor:"rgba(127, 219, 255, 0.185)"}},e.submitted&&(e.selected?c=e.correct?{backgroundColor:"#76ff76"}:{backgroundColor:"#ff6161"}:e.answer.id==e.correctAnswer.id&&(c={backgroundColor:"#c2ffd2"})),s(c)}),[e]),r.a.createElement("div",{style:c,className:"quiz-question-answer",onClick:function(){e.selectAnswer(e.questionId,e.answer.id),e.setLoading(!1)}},r.a.createElement("span",{className:"quiz-question-answer-letter"},e.letter),r.a.createElement("span",{className:"quiz-question-answer-text"},r.a.createElement(m.a,{math:e.answer.answer})))},O=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],s=n[1],u=Object(a.useState)(!1),o=Object(i.a)(u,2),l=o[0],d=o[1],f=function(){for(var t=[],n=!1,a=0;a<e.question.answers.length;a++){var c="null";0==a?c="(a)":1==a?c="(b)":2==a?c="(c)":3==a&&(c="(d)");var i=!1;e.quizAnswers[e.question.id]==e.question.answers[a].id&&(i=!0,e.submitted&&e.quizAnswers[e.question.id]==e.question.correctAnswer.id&&(n=!0)),t.push(r.a.createElement(z,{letter:c,setLoading:d,selected:i,answer:e.question.answers[a],correctAnswer:e.question.correctAnswer,currentAnswer:e.quizAnswers[e.question.id],key:"answer"+e.question.answers[a].id,questionId:e.question.id,selectAnswer:e.selectAnswer,correct:n,submitted:e.submitted}))}s(t),d(!0)};return Object(a.useEffect)((function(){l||f()})),Object(a.useEffect)((function(){e.submitted&&f()}),[e.submitted]),r.a.createElement("div",{className:"quiz-question"},r.a.createElement("hr",null),r.a.createElement("div",{className:"quiz-question-body"},r.a.createElement(m.a,{math:e.question.body})),r.a.createElement("div",{className:"quiz-question-answers"},c))},j=function(e){return r.a.createElement("div",{className:"quiz"},r.a.createElement(h,{mark:e.mark,setLoading:e.setLoading,submitted:e.submitted,quiz:e.quiz}),e.quiz.questions.map((function(t){return r.a.createElement(O,{question:t,quizAnswers:e.quizAnswers,key:"question"+t.id,selectAnswer:e.selectAnswer,submitted:e.submitted})})))},N=n(30),y=n(48),C=n(49),k=(n(68),function(){var e=r.a.createElement(y.a,{icon:C.a});return r.a.createElement("div",{className:"page-footer"},r.a.createElement("a",{href:"https://github.com/CarletonComputerScienceStudyCenter",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"page-footer-icon"},e)))}),A=n(50),S=n.n(A);function x(){var e=Object(d.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n  margin: auto;\n  height:100vh;\n  margin-top:20em;\n"]);return x=function(){return e},e}var I=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(),u=Object(i.a)(s,2),d=u[0],m=u[1],E=Object(a.useState)(),g=Object(i.a)(E,2),p=g[0],w=g[1],h=Object(a.useState)(0),z=Object(i.a)(h,2),O=z[0],y=z[1],C=Object(a.useState)(!1),A=Object(i.a)(C,2),I=A[0],T=A[1],L=Object(N.css)(x());window.location.href.indexOf("arrive")>-1&&(window.scrollTo(0,0),window.location.href="/StudyCenter-Client/#/quiz",window.location.reload()),Object(a.useEffect)((function(){n&&B()}));var F=Object(b.b)({uri:"https://computersciencestudycenter.herokuapp.com/graphql",headers:{"Content-Type":"application/json"}}),M=new f.a({link:F,cache:new q.a}),D=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=p)[t]=parseInt(n),w(a);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.query({query:v,variables:{id:"1"}});case 2:for(t=e.sent,console.log(t.data.quiz),n={},a=0;a<t.data.quiz.questions.length;a++)n[t.data.quiz.questions[a].id]=null;w(n),m(t.data.quiz),c(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(window.scrollTo(0,0),t=d.questions.length,n=0,a=0;a<t;a++)d.questions[a].correctAnswer.id==p[d.questions[a].id]&&(n+=1);T(!0),y(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"quiz-page"},n?r.a.createElement(S.a,{css:L,size:10,color:"gray",loading:n}):r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{quiz:d,quizAnswers:p,setLoading:c,selectAnswer:D,submitted:I,mark:O}),r.a.createElement("div",{className:"quiz-page-submit-button",onClick:J},"Submit"))),r.a.createElement(k,null))},T=(n(73),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("main",null,r.a.createElement("h1",{className:"title"},"Computer Science Study Center"),r.a.createElement("p",{className:"description"},r.a.createElement("code",null,"Beta 0.1.0")),r.a.createElement("div",{className:"courses-grid"},r.a.createElement("div",{className:"courses-grid-card-closed"},r.a.createElement("div",{className:"courses-grid-card-code"},"COMP 1805"),r.a.createElement("div",{className:"courses-grid-card-title"},"Discrete Structures I"),r.a.createElement("div",{className:"courses-grid-card-description"},"Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing."),r.a.createElement("div",{className:"courses-grid-card-button-closed"},"Coming Soon")),r.a.createElement("div",{className:"courses-grid-card"},r.a.createElement("div",{className:"courses-grid-card-code"},"COMP 2804"),r.a.createElement("div",{className:"courses-grid-card-title"},"Discrete Structures II"),r.a.createElement("div",{className:"courses-grid-card-description"},"A second course in discrete mathematics and discrete structures. Topics include: counting, sequences and sums, discrete probability, basic statistics, recurrence relations, randomized algorithms. Material is illustrated through examples from computing."),r.a.createElement("div",{className:"courses-grid-card-button",onClick:function(){e.setTrigger(!0)}},"Enter")))),r.a.createElement(k,null))});n(74);var L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title-text"},"Navbar")),r.a.createElement("div",{className:"App-header-margin"}))},F=n(14);var M=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){n&&(c(!1),window.location.href="/StudyCenter-Client/#/quiz?arrive=true",console.log("triggered"))}),[n]),r.a.createElement("div",{className:"App"},r.a.createElement(w.a,null,r.a.createElement(L,null),r.a.createElement(D,null),r.a.createElement(F.a,{exact:!0,path:"/",component:function(){return r.a.createElement(T,{trigger:n,setTrigger:c})}}),r.a.createElement(F.a,{path:"/quiz",component:function(){return r.a.createElement(I,{trigger:n,setTrigger:c})}})))},D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))};s.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.0ee76e78.chunk.js.map