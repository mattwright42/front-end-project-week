(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(77)},71:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(16),s=a.n(l),c=a(31),i=a(10),r=a(25),d=a(26),u=a(27),m=a(32),h=a(28),p=a(33),N=a(6);a(9);var f=function(e){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"note-form-view"},o.a.createElement("h2",null,e.isUpdating?"Edit Note:":"Create New Note:"),o.a.createElement("form",null,o.a.createElement("div",null,o.a.createElement("input",{className:"title-input",type:"text",value:e.note.title,placeholder:"Note Title",name:"title",onChange:e.handleChange})),o.a.createElement("div",null,o.a.createElement("textarea",{placeholder:"Note Content",rows:"1",cols:"50",wraps:"physical",className:"content-input",type:"text",value:e.note.body,name:"body",onChange:e.handleChange})),o.a.createElement("button",{className:"button create",onClick:function(t){return function(t){t.preventDefault(),console.log(e.isUpdating,"noteform"),e.isUpdating?(e.handleUpdateNote(e.note.id),e.history.push("/")):(e.handleAddNewNote(),e.history.push("/"))}(t)}},e.isUpdating?"Update":"Save"))))};var g=function(e){return e.notesList.length?o.a.createElement("div",{className:"note-container"},o.a.createElement("h1",{className:"notes-title"},"Your Notes:"),e.notesList.map(function(t){return o.a.createElement("div",{key:t.id,className:"note-card"},o.a.createElement("h1",{className:"note-title",onClick:function(){return e.history.push("/".concat(t.id))}},t.title.length>20?"".concat(t.title.slice(0,20),"..."):t.title),o.a.createElement("span",{className:"line"}),o.a.createElement("p",{className:"note-text"},t.body.length>120?"".concat(t.body.slice(0,120),"..."):t.body))})):o.a.createElement("h1",null,"Fetching notes!")},E=a(7),b=a.n(E);b.a.setAppElement("#root");var v=function(e){console.log(e);var t=e.notesList.find(function(t){return t.id==e.match.params.noteId});return console.log(t),console.log(e),o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"single-note"},o.a.createElement("button",{className:"note-button",onClick:function(a){a.preventDefault(),e.goToUpdateNoteForm(t)}},"Edit"),o.a.createElement("button",{className:"note-button",onClick:e.handleOpenModal},"Delete"),o.a.createElement(b.a,{isOpen:e.showModal,contentLabel:"Minimal Modal Example",className:"modal-style"},o.a.createElement("div",{className:"confirm"},"Are you sure you want to delete this?"),o.a.createElement("div",{className:"button-row"},o.a.createElement("button",{className:"delete",onClick:function(){e.handleDeleteNote(t.id),e.history.push("/")}},"Delete"),o.a.createElement("button",{className:"button",onClick:e.handleCloseModal},"No"))),o.a.createElement("div",null,o.a.createElement("h1",{className:"note-name"},t.title),o.a.createElement("h4",{className:"note-body"},t.body))))},w=a(79),y=a(81),C=a(73),O=a(80),M=a(8),D=a.n(M),U=(a(71),{title:"",body:""});b.a.setAppElement("#root");var j=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).handleOpenModal=function(){console.log("fired"),e.setState({showModal:!0})},e.handleCloseModal=function(){e.setState({showModal:!1})},e.fetchNotes=function(){D.a.get("http://localhost:9000/api/notes").then(function(t){console.log(t),e.setState({notesData:t.data})}).catch(function(e){console.log(e)})},e.handleChange=function(t){e.setState({note:Object(r.a)({},e.state.note,Object(i.a)({},t.target.name,t.target.value))})},e.handleAddNewNote=function(){D.a.post("http://localhost:9000/api/notes",e.state.note).then(function(t){var a=e.state.note;a.id=t.data.id,e.setState({notesData:Object(c.a)(e.state.notesData).concat([a]),note:U})})},e.handleDeleteNote=function(t){D.a.delete("http://localhost:9000/api/notes/".concat(t)).then(function(a){var n=e.state.notesData.filter(function(e){return e.id!==t});e.setState({notesData:n})}).catch(function(e){console.log(e)})},e.goToUpdateNoteForm=function(t){e.setState({note:t,isUpdating:!0},function(){return console.log(e.state.isUpdating)}),e.props.history.push("/note-form")},e.handleUpdateNote=function(t){console.log("this has launched"),D.a.put("http://localhost:9000/api/notes/".concat(t),e.state.note).then(function(t){console.log("response",t);var a=e.state.notesData.map(function(e){return console.log(e.id,t.data.id,e.id==t.data.id),e.id==t.data.id?t.data:e});e.setState({notesData:a,isUpdating:!1,note:U})})},e.state={notesData:[],note:{tags:["tag","otherTag"],title:"",body:""},isUpdating:!1,showModal:!1},e.handleOpenModal=e.handleOpenModal.bind(Object(N.a)(Object(N.a)(e))),e.handleCloseModal=e.handleCloseModal.bind(Object(N.a)(Object(N.a)(e))),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchNotes()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"notes-display"},o.a.createElement("div",{className:"sidebar"},o.a.createElement("h1",{className:"sidebar-title"},"Lambda Notes"),o.a.createElement("button",{className:"button"},o.a.createElement(w.a,{exact:!0,to:"/"},"View Your Notes")),o.a.createElement("button",{className:"button"},o.a.createElement(w.a,{to:"/note-form"},"+ Create New Note"))),o.a.createElement(y.a,null,o.a.createElement(C.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(g,Object.assign({},t,{notesList:e.state.notesData}))}}),o.a.createElement(C.a,{path:"/note-form",render:function(t){return o.a.createElement(f,Object.assign({},t,{notesList:e.state.notesData,note:e.state.note,handleAddNewNote:e.handleAddNewNote,handleChange:e.handleChange,handleUpdateNote:e.handleUpdateNote,isUpdating:e.state.isUpdating}))}}),o.a.createElement(C.a,{path:"/:noteId",render:function(t){return o.a.createElement(v,Object.assign({},t,{notesList:e.state.notesData,handleDeleteNote:e.handleDeleteNote,handleOpenModal:e.handleOpenModal,handleCloseModal:e.handleCloseModal,goToUpdateNoteForm:e.goToUpdateNoteForm,showModal:e.state.showModal}))}})))}}]),t}(o.a.Component),k=Object(O.a)(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(78);a(75);s.a.render(o.a.createElement(S.a,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[35,2,1]]]);
//# sourceMappingURL=main.daaa3eb3.chunk.js.map