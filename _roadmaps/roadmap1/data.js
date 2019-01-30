var roadmapData = [
  
  {id:'10', name:'Kick off & Setup', color:'#0f2e59', classes:'m1'},
    {parent:'10', name:'Task A', status:'Done', tasks:[{name:'', from:'2018-09-03', to:'2018-09-12', color:'#99CC99'}], classes:'m2'},
    {parent:'10', name:'Task B', status:'Done', tasks:[{name:'', from:'2018-09-10', to:'2018-09-13', color:'#99CC99'}], classes:'m2'},
    {parent:'10', name:'Task C', status:'Done', tasks:[{name:'', from:'2018-09-03', to:'2018-09-14', color:'#99CC99'}], classes:'m2'},
    {parent:'10', name:'Task D', status:'Started', tasks:[{name:'', from:'2018-09-14', to:'2018-09-19', color:'#9FC5F8'}], classes:'m2'},
    {parent:'10', name:'Task E', status:'Started', tasks:[{name:'', from:'2018-09-17', to:'2018-09-21', color:'#9FC5F8'}], classes:'m2'},
  
  {id:'20', name:'Market Research', color:'#0f2e59', classes:'m1'},
    {parent:'20', id:'20.1', name:'Customer Survey', status:'', tasks:[], classes:'m2'},
      {parent:'20.1', name:'Create survey questions', status:'Done', tasks:[{name:'', from:'2018-09-11', to:'2018-09-12', color:'#99CC99'}]},    
      {parent:'20.1', name:'Send survey to current customers', status:'Started', tasks:[{name:'', from:'2018-09-13', to:'2018-09-19', color:'#9FC5F8'}]},
    {parent:'20', id:'20.2', name:'Usability Lab', tasks:[], classes:'m2'},
      {parent:'20.2', name:'Select customers for in-person interviews', status:'', tasks:[]},
  
  {id:'30', name:'Software development', color:'#0f2e59', classes:'m1'},
    {parent:'30', id:'30.1', name:'Software Requirements', tasks:[], classes:'m2'},
      {parent:'30.1', name:'Define General Scope', status:'Done', tasks:[{name:'', from:'2018-09-01', to:'2018-09-03', color:'#99CC99'}]},
      {parent:'30.1', name:'Define Feature sets', status:'', tasks:[]},
      {parent:'30.1', name:'Write User stories', status:'', tasks:[]},
    {parent:'30', id:'30.2', name:'Test Setup', tasks:[], classes:'m2'},
      {parent:'30.2', name:'Testing', status:'In Progress', tasks:[{name:'', from:'2018-09-06', to:'2018-09-28', color:'#9FC5F8'}]},
      {parent:'30.2', name:'Setup servers', status:'', tasks:[]},
      {parent:'30.2', name:'Setup Sample apps', status:'', tasks:[]},
    {parent:'30', name:'Estimations', tasks:[], classes:'m2'},
    {parent:'30', name:'Software Engineering', tasks:[], classes:'m2'},
  
  {id:'40', name:'Release phase', color:'#0f2e59', classes:'m1'},
    {parent:'40', name:'Create Rollout plan', tasks:[], classes:'m2'},
];
