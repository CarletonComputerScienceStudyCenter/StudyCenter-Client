(this["webpackJsonpStudyCenter-Client"]=this["webpackJsonpStudyCenter-Client"]||[]).push([[0],{41:function(e,t,n){},53:function(e,t,n){e.exports=n(78)},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},70:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(42),i=n.n(c),s=(n(58),n(59),n(19)),o=n.n(s),u=n(29),l=n(24),m=n(11),d=(n(61),n(23)),f=n(20),E=n(21),p=n(16),b=n(37);function q(){var e=Object(l.a)(["\nquery quiz($id: ID!){\n    quiz(id: $id) {\n      id\n      title\n      description\n      questions{\n        id\n        body\n        correctAnswer{\n          id\n          answer\n        }\n        answers{\n          id\n          answer\n        }\n      }\n      course{\n          title\n          code\n      }\n    }\n  }\n"]);return q=function(){return e},e}function v(){var e=Object(l.a)(["\n{\n  questions{\n    id\n    question\n    hasMathjax\n    answers{\n      id\n      answer\n    }\n  }\n}\n"]);return v=function(){return e},e}Object(b.a)(v());var g=Object(b.a)(q()),w=n(14),h=function(e){return r.a.createElement("div",{className:"quiz-header"},r.a.createElement("div",{className:"quiz-header-title"},e.quiz.title),r.a.createElement("div",null,e.quiz.course.code," - ",e.quiz.course.title),e.submitted&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"quiz-header-score"},"Score: ",e.mark," / ",e.quiz.questions.length)),r.a.createElement(w.b,{to:"/",onClick:function(){e.setLoading(!0)}},r.a.createElement("div",{className:"quiz-header-return"},"Return")))},N=function(e){var t=Object(a.useState)({}),n=Object(m.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){c={},c=e.selected?{backgroundColor:"#9eeaff"}:{":hover":{backgroundColor:"rgba(127, 219, 255, 0.185)"}},e.submitted&&(e.selected?c=e.correct?{backgroundColor:"#76ff76"}:{backgroundColor:"#ff6161"}:e.answer.id==e.correctAnswer.id&&(c={backgroundColor:"#c2ffd2"})),i(c)}),[e]),r.a.createElement("div",{style:c,className:"quiz-question-answer",onClick:function(){e.selectAnswer(e.questionId,e.answer.id),e.setLoading(!1)}},r.a.createElement("span",{className:"quiz-question-answer-letter"},e.letter),r.a.createElement("span",{className:"quiz-question-answer-text"},r.a.createElement(d.a,{math:e.answer.answer})))},z=function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(!1),o=Object(m.a)(s,2),u=o[0],l=o[1],f=function(){for(var t=[],n=!1,a=0;a<e.question.answers.length;a++){var c="null";0==a?c="(a)":1==a?c="(b)":2==a?c="(c)":3==a&&(c="(d)");var s=!1;e.quizAnswers[e.question.id]==e.question.answers[a].id&&(s=!0,e.submitted&&e.quizAnswers[e.question.id]==e.question.correctAnswer.id&&(n=!0)),t.push(r.a.createElement(N,{letter:c,setLoading:l,selected:s,answer:e.question.answers[a],correctAnswer:e.question.correctAnswer,currentAnswer:e.quizAnswers[e.question.id],key:"answer"+e.question.answers[a].id,questionId:e.question.id,selectAnswer:e.selectAnswer,correct:n,submitted:e.submitted}))}i(t),l(!0)};return Object(a.useEffect)((function(){u||f()})),Object(a.useEffect)((function(){e.submitted&&f()}),[e.submitted]),r.a.createElement("div",{className:"quiz-question"},r.a.createElement("hr",null),r.a.createElement("div",{className:"quiz-question-body"},r.a.createElement(d.a,{math:e.question.body})),r.a.createElement("div",{className:"quiz-question-answers"},c))},O=function(e){return r.a.createElement("div",{className:"quiz"},r.a.createElement(h,{mark:e.mark,setLoading:e.setLoading,submitted:e.submitted,quiz:e.quiz}),e.quiz.questions.map((function(t){return r.a.createElement(z,{question:t,quizAnswers:e.quizAnswers,key:"question"+t.id,selectAnswer:e.selectAnswer,submitted:e.submitted})})))},j=n(33),k=n(18),C=n(32),y=(n(70),function(){var e=r.a.createElement(k.a,{icon:C.a});return r.a.createElement("div",{className:"page-footer"},r.a.createElement("a",{href:"https://github.com/CarletonComputerScienceStudyCenter",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"page-footer-icon"},e)))}),A=n(52),S=n.n(A);function x(){var e=Object(l.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n  margin: auto;\n  height:100vh;\n  margin-top:20em;\n"]);return x=function(){return e},e}var I=function(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),s=Object(m.a)(i,2),l=s[0],d=s[1],b=Object(a.useState)(),q=Object(m.a)(b,2),v=q[0],w=q[1],h=Object(a.useState)(0),N=Object(m.a)(h,2),z=N[0],k=N[1],C=Object(a.useState)(!1),A=Object(m.a)(C,2),I=A[0],T=A[1],L=Object(j.css)(x());window.location.href.indexOf("arrive")>-1&&(window.scrollTo(0,0),window.location.href="/StudyCenter-Client/#/quiz",window.location.reload()),Object(a.useEffect)((function(){n&&B()}));var F=Object(E.b)({uri:"https://computersciencestudycenter.herokuapp.com/graphql",headers:{"Content-Type":"application/json"}}),M=new f.a({link:F,cache:new p.a}),D=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=v)[t]=parseInt(n),w(a);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.query({query:g,variables:{id:"1"}});case 2:for(t=e.sent,console.log(t.data.quiz),n={},a=0;a<t.data.quiz.questions.length;a++)n[t.data.quiz.questions[a].id]=null;w(n),d(t.data.quiz),c(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(window.scrollTo(0,0),t=l.questions.length,n=0,a=0;a<t;a++)l.questions[a].correctAnswer.id==v[l.questions[a].id]&&(n+=1);T(!0),k(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"quiz-page"},n?r.a.createElement(S.a,{css:L,size:10,color:"gray",loading:n}):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{quiz:l,quizAnswers:v,setLoading:c,selectAnswer:D,submitted:I,mark:z}),r.a.createElement("div",{className:"quiz-page-submit-button",onClick:P},"Submit"))),r.a.createElement(y,null))},T=(n(75),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("main",null,r.a.createElement("h1",{className:"title"},"Computer Science Study Center"),r.a.createElement("p",{className:"description"},r.a.createElement("code",null,"Beta 0.1.0")),r.a.createElement("div",{className:"courses-grid"},r.a.createElement("div",{className:"courses-grid-card-closed"},r.a.createElement("div",{className:"courses-grid-card-code"},"COMP 1805"),r.a.createElement("div",{className:"courses-grid-card-title"},"Discrete Structures I"),r.a.createElement("div",{className:"courses-grid-card-description"},"Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing."),r.a.createElement("div",{className:"courses-grid-card-button-closed"},"Coming Soon")),r.a.createElement("div",{className:"courses-grid-card hvr-float"},r.a.createElement("div",{className:"courses-grid-card-code"},"COMP 2804"),r.a.createElement("div",{className:"courses-grid-card-title"},"Discrete Structures II"),r.a.createElement("div",{className:"courses-grid-card-description"},"A second course in discrete mathematics and discrete structures. Topics include: counting, sequences and sums, discrete probability, basic statistics, recurrence relations, randomized algorithms. Material is illustrated through examples from computing."),r.a.createElement(w.b,{to:"/course",onClick:function(){window.scrollTo(0,0)}},r.a.createElement("div",{className:"courses-grid-card-button"},"Enter"))))),r.a.createElement(y,null))}),L=n(26),F=(n(41),function(e){var t=r.a.createElement(k.a,{icon:L.a}),n=r.a.createElement(k.a,{icon:L.c}),a=[r.a.createElement(k.a,{icon:L.b}),n,t,r.a.createElement(k.a,{icon:L.d})];return r.a.createElement("div",{className:"course-page-tile hvr-float"},r.a.createElement("div",{className:"course-page-tile-title"},e.tile),r.a.createElement("div",{className:"course-page-tile-icon"},a[e.icon]))}),M=function(e){return r.a.createElement("div",{className:"course-page"},r.a.createElement("div",{className:"course-page-tile-grid"},r.a.createElement(F,{tile:"Lectures",icon:0}),r.a.createElement("span",{onClick:function(){window.location.href="/StudyCenter-Client/#/quiz?arrive=true"}},r.a.createElement(F,{tile:"Practice",icon:1})),r.a.createElement("a",{href:"https://cglab.ca/~morin/teaching/2804/resources/DiscreteStructures.pdf"},r.a.createElement(F,{tile:"Textbook",icon:2})),r.a.createElement(w.b,{to:"/",onClick:function(){window.scrollTo(0,0)}},r.a.createElement(F,{tile:"Back",icon:3}))),r.a.createElement(y,null))};n(76);var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title-text"},"Navbar")),r.a.createElement("div",{className:"App-header-margin"}))},B=n(15);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w.a,null,r.a.createElement(D,null),r.a.createElement(J,null),r.a.createElement(B.a,{exact:!0,path:"/",component:function(){return r.a.createElement(T,null)}}),r.a.createElement(B.a,{path:"/quiz",component:function(){return r.a.createElement(I,null)}}),r.a.createElement(B.a,{path:"/course",component:function(){return r.a.createElement(M,null)}})))},J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))};i.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.0aa3cd6c.chunk.js.map