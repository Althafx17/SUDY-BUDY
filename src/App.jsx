import React,{useEffect,useRef,useState} from 'react';
import {Activity,ArrowRight,ArrowUpRight,Atom,BookOpen,CalendarDays,Check,CheckCheck,ChevronDown,Clock3,Download,FlaskConical,Focus,GraduationCap,LayoutDashboard,Menu,Pause,Play,Plus,RotateCcw,Search,Settings2,Sparkles,Target,Trash2,TrendingUp,X,Zap,Sigma,NotebookPen,Key,Send,MessageSquare,Palette,Code2,FolderGit2,ExternalLink,User,Terminal} from 'lucide-react';
import {INITIAL_DATA} from './constants/initialData';
import {calculateSubjectProgress,calculateTopicCompletion} from './utils/progress';
import {getGeminiApiKey,saveGeminiApiKey,askGemini} from './services/gemini';
import {DEVELOPER_INFO} from './constants/developer';
import FormattedSolution from './components/FormattedSolution';
import './App.css';
const dayKey=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
const STORAGE_KEY='orbit-study-ledger-v3';
const WORKSPACE_KEY='orbit-workspace-v3';
const initialLedger=()=>{
  const saved=read(STORAGE_KEY,null);
  if(!saved){
    try{
      localStorage.removeItem('study-ledger');
      localStorage.removeItem('orbit-workspace-v1');
      localStorage.setItem(STORAGE_KEY,JSON.stringify(INITIAL_DATA));
    }catch{}
    return INITIAL_DATA;
  }
  return Object.fromEntries(['S1','S2'].map(sem=>{
    const semData=INITIAL_DATA[sem];
    const savedSem=saved?.[sem];
    return [sem,{
      ...semData,
      ...savedSem,
      subjects:semData.subjects.map(freshSub=>{
        const savedSub=savedSem?.subjects?.find(x=>x.id===freshSub.id);
        if(!savedSub)return freshSub;
        return {
          ...freshSub,
          examDate:savedSub.examDate||freshSub.examDate,
          modules:freshSub.modules.map(freshMod=>{
            const savedMod=savedSub.modules?.find(m=>m.id===freshMod.id);
            if(!savedMod)return freshMod;
            return {
              ...freshMod,
              topics:freshMod.topics.map(freshTop=>{
                const savedTop=savedMod.topics?.find(t=>t.id===freshTop.id);
                if(!savedTop)return freshTop;
                return {
                  ...freshTop,
                  status:savedTop.status||'not-started',
                  notes:savedTop.notes!==undefined?savedTop.notes:'',
                  subTopics:freshTop.subTopics?.map(st=>{
                    const savedSt=savedTop.subTopics?.find(x=>x.id===st.id);
                    return savedSt?{...st,done:Boolean(savedSt.done)}:st;
                  })||freshTop.subTopics,
                  previousQuestions:freshTop.previousQuestions?.map(pq=>{
                    const savedPq=savedTop.previousQuestions?.find(q=>q.id===pq.id);
                    return savedPq?{...pq,solved:Boolean(savedPq.solved)}:pq;
                  })||freshTop.previousQuestions
                };
              })
            };
          })
        };
      })
    }];
  }));
};
const meta=[{short:'Mathematics I',label:'Linear algebra & calculus',icon:Sigma,color:'#b5a0fa'},{short:'Chemistry',label:'Engineering chemistry',icon:FlaskConical,color:'#f4bd84'},{short:'Mathematics II',label:'Vector calculus & differential equations',icon:Activity,color:'#8bbdfa'},{short:'Physics',label:'Engineering physics',icon:Atom,color:'#8bd8b6'}];
const nav=[['Overview',LayoutDashboard],['My subjects',BookOpen],['Study planner',CalendarDays],['Notes library',NotebookPen],['Revision',RotateCcw],['Insights',TrendingUp]];

const THEME_STORAGE_KEY='orbit-page-theme-v1';
const DEFAULT_THEME={accent:'#b3efc7',bgTheme:'orbit-dark'};
const BG_THEMES={
  'orbit-dark':{id:'orbit-dark',name:'Orbit Obsidian',desc:'Deep midnight dark (Default)',bg:'#0d1114',sidebar:'#101416',panel:'#121619',line:'#252b2d'},
  'space-navy':{id:'space-navy',name:'Space Navy',desc:'Deep celestial sapphire tones',bg:'#0b101d',sidebar:'#0e1526',panel:'#131b31',line:'#1f2c4b'},
  'oled-black':{id:'oled-black',name:'OLED Pitch Black',desc:'Pure deep black, ultra contrast',bg:'#000000',sidebar:'#050505',panel:'#0a0a0a',line:'#1c1c1c'},
  'cyber-slate':{id:'cyber-slate',name:'Cyber Slate',desc:'Modern tech graphite & charcoal',bg:'#12161a',sidebar:'#161b20',panel:'#1b2228',line:'#2a343e'},
  'deep-forest':{id:'deep-forest',name:'Deep Forest',desc:'Evergreen pine and moss ambiance',bg:'#08130e',sidebar:'#0c1a14',panel:'#10221a',line:'#1c382b'},
  'warm-charcoal':{id:'warm-charcoal',name:'Warm Espresso',desc:'Cozy dark coffee & amber dark',bg:'#141211',sidebar:'#1a1715',panel:'#201d1a',line:'#332c28'}
};
const ACCENT_PRESETS=[
  {name:'Mint Green',hex:'#b3efc7'},
  {name:'Electric Violet',hex:'#b5a0fa'},
  {name:'Ocean Blue',hex:'#8bbdfa'},
  {name:'Sunset Amber',hex:'#f4bd84'},
  {name:'Rose Blossom',hex:'#f6a5b8'},
  {name:'Emerald Jade',hex:'#5ce49b'},
  {name:'Neon Cyan',hex:'#56f2f2'},
  {name:'Crimson Ember',hex:'#ff7d7d'},
  {name:'Solar Gold',hex:'#ffd166'}
];
const getContrastColor=hexColor=>{
  if(!hexColor||typeof hexColor!=='string')return '#14261b';
  const hex=hexColor.replace('#','');
  let r=0,g=0,b=0;
  if(hex.length===3){r=parseInt(hex[0]+hex[0],16);g=parseInt(hex[1]+hex[1],16);b=parseInt(hex[2]+hex[2],16);}
  else if(hex.length>=6){r=parseInt(hex.substring(0,2),16);g=parseInt(hex.substring(2,4),16);b=parseInt(hex.substring(4,6),16);}
  return (0.299*r+0.587*g+0.114*b)/255>0.55?'#14261b':'#ffffff';
};

export default function App(){
const [data,setData]=useState(initialLedger);const [workspace,setWorkspace]=useState(()=>({tasks:[],sessions:[],notes:[],goal:120,...read(WORKSPACE_KEY,{})}));
const [page,setPage]=useState('Overview'),[subjectId,setSubjectId]=useState(null),[search,setSearch]=useState(''),[menu,setMenu]=useState(false),[modal,setModal]=useState(null),[toast,setToast]=useState(''),[filter,setFilter]=useState('All subjects'),[expandedQuestions,setExpandedQuestions]=useState({});
const [devModal,setDevModal]=useState(false);
const [theme,setTheme]=useState(()=>({...DEFAULT_THEME,...read(THEME_STORAGE_KEY,{})}));
useEffect(()=>{
  if(typeof window!=='undefined'){
    window.__DEVELOPER__=DEVELOPER_INFO;
    window.aboutDeveloper=()=>{
      console.log(
        `%c🚀 Orbit KTU Study Buddy — Developer Dossier\n` +
        `%c----------------------------------------\n` +
        `%cDeveloper:   %c${DEVELOPER_INFO.name} (${DEVELOPER_INFO.alias})\n` +
        `%cRole:        %c${DEVELOPER_INFO.role}\n` +
        `%cInstitution: %c${DEVELOPER_INFO.education.institution}\n` +
        `%cLocation:    %c${DEVELOPER_INFO.location}\n` +
        `%cGitHub:      %c${DEVELOPER_INFO.github}\n` +
        `%cRepository:  %c${DEVELOPER_INFO.repository}\n` +
        `%cScheme:      %c${DEVELOPER_INFO.project.targetScheme}\n` +
        `%cVersion:     %c${DEVELOPER_INFO.project.version} (${DEVELOPER_INFO.project.releaseYear})\n\n` +
        `%cMission:\n${DEVELOPER_INFO.bio}`,
        'font-size: 15px; font-weight: bold; color: #5eead4; background: #13271e; padding: 4px 8px; border-radius: 4px;',
        'color: #38bdf8;',
        'font-weight: bold; color: #a7f3d0;', 'color: #ffffff;',
        'font-weight: bold; color: #a7f3d0;', 'color: #ffffff;',
        'font-weight: bold; color: #a7f3d0;', 'color: #ffffff;',
        'font-weight: bold; color: #a7f3d0;', 'color: #ffffff;',
        'font-weight: bold; color: #a7f3d0;', 'color: #38bdf8; text-decoration: underline;',
        'font-weight: bold; color: #a7f3d0;', 'color: #38bdf8; text-decoration: underline;',
        'font-weight: bold; color: #a7f3d0;', 'color: #ffffff;',
        'font-weight: bold; color: #a7f3d0;', 'color: #ffffff;',
        'color: #94a3b8; font-style: italic;'
      );
      return DEVELOPER_INFO;
    };
  }
},[]);
useEffect(()=>{
  try{localStorage.setItem(THEME_STORAGE_KEY,JSON.stringify(theme));}catch{}
  const bgObj=BG_THEMES[theme.bgTheme]||BG_THEMES['orbit-dark'];
  document.body.style.backgroundColor=bgObj.bg;
  document.documentElement.style.backgroundColor=bgObj.bg;
},[theme]);
const currentBg=BG_THEMES[theme.bgTheme]||BG_THEMES['orbit-dark'];
const shellStyle={
  '--mint':theme.accent,
  '--mint-dark':getContrastColor(theme.accent),
  '--mint-glow':`${theme.accent}33`,
  '--panel':currentBg.panel,
  '--line':currentBg.line,
  '--bg-main':currentBg.bg,
  '--bg-sidebar':currentBg.sidebar,
  backgroundColor:currentBg.bg
};
const [geminiOpen,setGeminiOpen]=useState(false);
const [geminiLoading,setGeminiLoading]=useState(false);
const [geminiInput,setGeminiInput]=useState('');
const [geminiMessages,setGeminiMessages]=useState([
  {
    id:'welcome-msg',
    sender:'gemini',
    text:"👋 Hello Althaf! I'm your Free KTU Engineering AI Study Agent.\n\n• 100% Free · No paid API key required.\n• Click \"Solve with AI\" on any Previous Year Question to solve it step-by-step and auto-fill the answer right under the question card.\n• Ask any engineering doubt, formula derivation, or matrix calculation directly in this chat!",
    timestamp:'Ready'
  }
]);
const [geminiTarget,setGeminiTarget]=useState(null);
const [apiKeyModal,setApiKeyModal]=useState(false);
const [apiKeyInput,setApiKeyInput]=useState(()=>getGeminiApiKey());
const chatEndRef=useRef(null);
useEffect(()=>{if(geminiOpen){chatEndRef.current?.scrollIntoView({behavior:'smooth'})}},[geminiMessages,geminiOpen]);
const [savedTimer]=useState(()=>read('orbit-timer-v1',{}));
const [timerSubject,setTimerSubject]=useState(savedTimer.subjectId||'sub-mat101'),[duration,setDuration]=useState(savedTimer.duration||25),[remaining,setRemaining]=useState(savedTimer.remaining??1500),[running,setRunning]=useState(!!savedTimer.running),[immersive,setImmersive]=useState(false),[timerMode,setTimerMode]=useState(savedTimer.mode||'Focus'),[today,setToday]=useState(dayKey());
const deadline=useRef(savedTimer.deadline||null),sessionId=useRef(savedTimer.id||crypto.randomUUID());
useEffect(()=>{try{localStorage.setItem('orbit-timer-v1',JSON.stringify({id:sessionId.current,subjectId:timerSubject,duration,remaining,running,mode:timerMode,deadline:deadline.current}));}catch{}},[timerSubject,duration,remaining,running,timerMode]);
const subjects=['S1','S2'].flatMap(sem=>data[sem].subjects.map(s=>({...s,semester:sem}))).map((s,i)=>({...s,...meta[i]}));
const selected=subjects.find(s=>s.id===subjectId),focusSubject=subjects.find(s=>s.id===timerSubject)||subjects[0];
const allTopics=subjects.flatMap(s=>(s.modules||[]).flatMap(m=>(m.topics||[]).map(t=>({...t,subject:s,module:m}))));
const progress=Math.round(subjects.reduce((sum,s)=>sum+calculateSubjectProgress(s),0)/4*100),todaySessions=workspace.sessions.filter(s=>s.date===today),todayMinutes=todaySessions.reduce((sum,s)=>sum+s.minutes,0),todayTasks=workspace.tasks.filter(t=>t.date===today),completed=allTopics.filter(t=>calculateTopicCompletion(t)===1).length;
const notify=message=>setToast(message);
useEffect(()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));localStorage.setItem(WORKSPACE_KEY,JSON.stringify(workspace));}catch{setToast('Browser storage is unavailable. Export a backup to keep your work.')}},[data,workspace]);
useEffect(()=>{if(!toast)return;const id=setTimeout(()=>setToast(''),5000);return()=>clearTimeout(id)},[toast]);
useEffect(()=>{const id=setInterval(()=>setToday(dayKey()),30000);return()=>clearInterval(id)},[]);
useEffect(()=>{if(!running)return;const tick=()=>{const left=Math.max(0,Math.ceil((deadline.current-Date.now())/1000));setRemaining(left);if(left===0){setRunning(false);if(timerMode==='Focus'){setWorkspace(w=>w.sessions.some(s=>s.id===sessionId.current)?w:({...w,sessions:[...w.sessions,{id:sessionId.current,date:dayKey(new Date(deadline.current)),subjectId:timerSubject,minutes:duration}]}));notify('Focus session complete. A little closer to your goals.')}else notify('Break complete. Ready for a fresh start.')}};tick();const id=setInterval(tick,250);return()=>clearInterval(id)},[running,duration,timerSubject,timerMode]);
useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[page,subjectId,filter]);
useEffect(()=>{const key=e=>{if(e.key==='Escape'){setModal(null);setImmersive(false);setMenu(false)}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[]);
const navigate=p=>{setPage(p);setSubjectId(null);setMenu(false);setSearch('');setFilter('All subjects');window.scrollTo({top:0,behavior:'smooth'})};
const openSubject=s=>{setSubjectId(s.id);setPage('My subjects');setMenu(false);setSearch('');window.scrollTo({top:0,behavior:'smooth'})};
const updateTopic=(s,m,t,patch)=>setData(d=>({...d,[s.semester]:{...d[s.semester],subjects:d[s.semester].subjects.map(sub=>sub.id!==s.id?sub:{...sub,modules:sub.modules.map(mod=>mod.id!==m.id?mod:{...mod,topics:mod.topics.map(top=>top.id!==t.id?top:{...top,...patch})})})}}));
const toggleQuestionExpand=qId=>setExpandedQuestions(prev=>({...prev,[qId]:!prev[qId]}));
const toggleQuestionSolved=(s,m,t,qId)=>setData(d=>({...d,[s.semester]:{...d[s.semester],subjects:d[s.semester].subjects.map(sub=>sub.id!==s.id?sub:{...sub,modules:sub.modules.map(mod=>mod.id!==m.id?mod:{...mod,topics:mod.topics.map(top=>top.id!==t.id?top:{...top,previousQuestions:(top.previousQuestions||[]).map(q=>q.id===qId?{...q,solved:!q.solved}:q)})})})}}));
const resetProgress=()=>{
  setData(INITIAL_DATA);
  setWorkspace({tasks:[],sessions:[],notes:[],goal:120});
  try{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(INITIAL_DATA));
    localStorage.setItem(WORKSPACE_KEY,JSON.stringify({tasks:[],sessions:[],notes:[],goal:120}));
    localStorage.removeItem('study-ledger');
    localStorage.removeItem('orbit-workspace-v1');
    localStorage.removeItem('orbit-timer-v1');
  }catch{}
  notify('All mock data and progress cleared. Clean slate ready.');
};
const handleSaveApiKey=keyToSave=>{
  saveGeminiApiKey(keyToSave);
  setApiKeyInput(keyToSave);
  setApiKeyModal(false);
  notify(keyToSave?'Gemini API Key saved in local storage!':'Gemini API key removed.');
};
const handleAskGeminiForQuestion=async (subject,module,topic,question)=>{
  setGeminiTarget({subject,module,topic,question});
  setGeminiOpen(true);

  const promptText=`Solve this KTU examination question step-by-step according to the official KTU valuation scheme:

Question:
${question.text}

Subject: ${subject.short} (${subject.code})
Module: ${module.name}
Topic: ${topic.name}
Exam: KTU ${question.year} (${question.exam||'Final'}) - ${question.marks} Marks

Structure requirements:
1. Given & Required Objective
2. Governing Formulae / Theorems
3. Complete Step-by-Step Working (show all intermediate operations/integrations without skipping steps)
4. Final Answer (highlighted with units)
5. KTU valuation mark distribution & exam tips`;

  const userMsg={
    id:crypto.randomUUID(),
    sender:'user',
    text:`Solve KTU PYQ [${subject.code} ${question.year} · ${question.marks}M]: ${question.text}`,
    targetQuestionId:question.id,
    timestamp:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
  };

  setGeminiMessages(prev=>[...prev,userMsg]);
  setGeminiLoading(true);

  try{
    const solution=await askGemini({
      prompt:promptText,
      context:{
        subject:`${subject.short} (${subject.code})`,
        module:module.name,
        topic:topic.name,
        marks:`${question.marks} Marks`
      }
    });

    const geminiMsg={
      id:crypto.randomUUID(),
      sender:'gemini',
      text:solution,
      targetQuestionId:question.id,
      targetQuestionText:question.text,
      applied:true,
      timestamp:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
    };
    setGeminiMessages(prev=>[...prev,geminiMsg]);

    updateTopic(subject,module,topic,{
      previousQuestions:(topic.previousQuestions||[]).map(q=>
        q.id===question.id?{...q,answer:solution}:q
      )
    });

    setExpandedQuestions(prev=>({...prev,[question.id]:true}));
    notify('Free AI Agent solved & auto-filled answer under the question!');
  }catch(err){
    notify(`AI Agent error: ${err.message}`);
    setGeminiMessages(prev=>[
      ...prev,
      {
        id:crypto.randomUUID(),
        sender:'gemini',
        text:`⚠️ Error generating answer: ${err.message}\n\nPlease try again or use another prompt.`,
        error:true,
        timestamp:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
      }
    ]);
  }finally{
    setGeminiLoading(false);
  }
};
const handleSendGeminiChat=async (e,customPrompt)=>{
  if(e)e.preventDefault();
  const textToSend=customPrompt||geminiInput;
  if(!textToSend.trim()||geminiLoading)return;

  const userMsg={
    id:crypto.randomUUID(),
    sender:'user',
    text:textToSend.trim(),
    targetQuestionId:geminiTarget?.question?.id,
    timestamp:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
  };

  setGeminiMessages(prev=>[...prev,userMsg]);
  setGeminiInput('');
  setGeminiLoading(true);

  try{
    const solution=await askGemini({
      prompt:textToSend.trim(),
      context:geminiTarget?{
        subject:`${geminiTarget.subject.short} (${geminiTarget.subject.code})`,
        module:geminiTarget.module.name,
        topic:geminiTarget.topic.name,
        marks:geminiTarget.question.marks?`${geminiTarget.question.marks} Marks`:undefined
      }:undefined
    });

    const geminiMsg={
      id:crypto.randomUUID(),
      sender:'gemini',
      text:solution,
      targetQuestionId:geminiTarget?.question?.id,
      targetQuestionText:geminiTarget?.question?.text,
      applied:Boolean(geminiTarget),
      timestamp:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
    };
    setGeminiMessages(prev=>[...prev,geminiMsg]);

    if(geminiTarget){
      const {subject,module,topic,question}=geminiTarget;
      updateTopic(subject,module,topic,{
        previousQuestions:(topic.previousQuestions||[]).map(q=>
          q.id===question.id?{...q,answer:solution}:q
        )
      });
      setExpandedQuestions(prev=>({...prev,[question.id]:true}));
      notify('Answer filled under the question card!');
    }
  }catch(err){
    notify(`AI Agent error: ${err.message}`);
    setGeminiMessages(prev=>[
      ...prev,
      {
        id:crypto.randomUUID(),
        sender:'gemini',
        text:`⚠️ AI error: ${err.message}`,
        error:true,
        timestamp:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
      }
    ]);
  }finally{
    setGeminiLoading(false);
  }
};
const applyAnswerToQuestion=(msgText,target)=>{
  if(!target){
    notify('No question currently selected to attach answer to.');
    return;
  }
  const {subject,module,topic,question}=target;
  updateTopic(subject,module,topic,{
    previousQuestions:(topic.previousQuestions||[]).map(q=>
      q.id===question.id?{...q,answer:msgText}:q
    )
  });
  setExpandedQuestions(prev=>({...prev,[question.id]:true}));
  notify('Answer updated on question card!');
};
const toggleTask=id=>setWorkspace(w=>({...w,tasks:w.tasks.map(t=>t.id===id?{...t,done:!t.done}:t)}));
const resetTimer=(minutes=duration,mode=timerMode)=>{setRunning(false);sessionId.current=crypto.randomUUID();setDuration(minutes);setRemaining(minutes*60);setTimerMode(mode)};
const toggleTimer=()=>{if(running)setRunning(false);else{if(!remaining)sessionId.current=crypto.randomUUID();deadline.current=Date.now()+(remaining||duration*60)*1000;setRunning(true)}};
const exportData=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({ledger:data,workspace},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=`orbit-study-${today}.json`;a.click();URL.revokeObjectURL(url);notify('Your study backup has been downloaded.')};
const importData=async e=>{const file=e.target.files?.[0];if(!file)return;try{const backup=JSON.parse(await file.text());if(!['S1','S2'].every(sem=>Array.isArray(backup.ledger?.[sem]?.subjects)&&INITIAL_DATA[sem].subjects.every(expected=>backup.ledger[sem].subjects.some(s=>s.id===expected.id&&Array.isArray(s.modules)&&s.modules.every(m=>Array.isArray(m.topics)))))||!Array.isArray(backup.workspace?.tasks)||!Array.isArray(backup.workspace?.notes)||!Array.isArray(backup.workspace?.sessions))throw new Error('Invalid backup');setModal({type:'restore',backup});}catch{notify('This file is not a valid Orbit study backup. Nothing was changed.')}finally{e.target.value=''}};
const week=Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);return{label:d.toLocaleDateString('en',{weekday:'short'}),date:dayKey(d),minutes:workspace.sessions.filter(s=>s.date===dayKey(d)).reduce((a,s)=>a+s.minutes,0)}});
const chart=<div className="bar-chart">{week.map(d=><div className="bar-column" key={d.date}><span>{d.minutes}m</span><div><i style={{height:`${Math.max(3,d.minutes/Math.max(60,...week.map(x=>x.minutes))*100)}%`}}/></div><small>{d.label}</small></div>)}</div>;
const timer=<><div className="panel-heading"><h3><Focus size={17}/> Focus room</h3><span className="live-dot">{running?'IN SESSION':'YOUR QUIET SPACE'}</span></div><div className="timer-tabs">{['Focus','Short break'].map(mode=><button key={mode} className={timerMode===mode?'active':''} onClick={()=>resetTimer(mode==='Focus'?25:5,mode)}>{mode}</button>)}</div><div className={'clock '+(running?'ticking':'')} style={{'--timer-progress':`${100*(1-remaining/(duration*60))}%`}}><div><span>{String(Math.floor(remaining/60)).padStart(2,'0')}<b>:</b>{String(remaining%60).padStart(2,'0')}</span><small>{running?'ONE THING AT A TIME':timerMode==='Focus'?'TIME TO MAKE PROGRESS':'TAKE A BREATH'}</small></div></div><label className="select-label">WORKING ON<select aria-label="Focus subject" value={timerSubject} disabled={running} onChange={e=>setTimerSubject(e.target.value)}>{subjects.map(s=><option key={s.id} value={s.id}>{s.short}</option>)}</select></label><div className="timer-controls"><button className="primary" onClick={toggleTimer}>{running?<Pause size={16}/>:<Play size={16}/>} {running?'Pause session':'Start session'}</button><button className="icon-button" aria-label="Reset timer" onClick={()=>resetTimer()}><RotateCcw size={18}/></button></div><button className="quiet focus-expand" onClick={()=>setImmersive(!immersive)}><Focus size={13}/>{immersive?'Exit full focus':'Enter full focus'}<ArrowUpRight size={13}/></button></>;
const taskList=tasks=>tasks.length?<div className="task-list">{tasks.map(t=>{const s=subjects.find(s=>s.id===t.subjectId);return <div className={'task-row '+(t.done?'done':'')} key={t.id}><button className="checkbox" aria-label={`${t.done?'Reopen':'Complete'} ${t.title}`} aria-pressed={t.done} onClick={()=>toggleTask(t.id)}>{t.done&&<Check size={13}/>}</button><div><strong>{t.title}</strong><small><i style={{background:s?.color}}/>{s?.short} <span>· {t.minutes} min · {t.date===today?'Today':t.date}</span></small></div><button className="icon-button delete-task" aria-label={`Delete ${t.title}`} onClick={()=>setWorkspace(w=>({...w,tasks:w.tasks.filter(x=>x.id!==t.id)}))}><Trash2 size={14}/></button></div>})}</div>:<div className="empty"><CheckCheck size={25}/><strong>A clear day. A fresh start.</strong><p>Add a small, achievable task for one of your subjects.</p><button className="quiet mint" onClick={()=>setModal('task')}>Create your first task <Plus size={14}/></button></div>;
const subjectCards=<div className="subject-grid">{subjects.filter(s=>`${s.name} ${s.short} ${s.code}`.toLowerCase().includes(search.toLowerCase())&&(filter==='All subjects'||s.semester===filter)).map((s,i)=>{const Icon=s.icon,pct=Math.round(calculateSubjectProgress(s)*100);return <button key={s.id} className="subject-card reveal" style={{'--accent':s.color,transitionDelay:`${i*55}ms`}} onClick={()=>openSubject(s)}><div className="subject-top"><span className="subject-icon"><Icon size={24}/></span><span className="code">{s.code} <ArrowUpRight size={14}/></span></div><h3>{s.short}</h3><p>{s.label}</p><div className="subject-info"><span>{s.modules.length} modules</span><span>{s.semester} · KTU</span></div><div className="progress"><i style={{width:`${pct}%`}}/></div><div className="subject-bottom"><span>Course progress</span><strong>{pct}%</strong></div></button>})}</div>;
return <div className="app-shell" style={shellStyle}><aside className={'sidebar '+(menu?'open':'')}><a className="brand" href="#" onClick={e=>{e.preventDefault();navigate('Overview')}}><span className="brand-symbol"><Atom size={26}/></span>orbit<span className="brand-period">.</span></a><div className="workspace-label"><span className="workspace-icon"><GraduationCap size={18}/></span><div>My study space<small>Personal workspace</small></div><ChevronDown size={13}/></div><p className="nav-label">WORKSPACE</p><nav>{nav.map(([name,Icon])=><button key={name} className={page===name?'active':''} onClick={()=>navigate(name)}><Icon size={18}/>{name}{name==='My subjects'&&<span className="nav-count">04</span>}{name==='Revision'&&<span className="tiny-dot"/>}</button>)}</nav><p className="nav-label subjects-label">YOUR SUBJECTS <span>4</span></p><div className="subject-nav">{subjects.map(s=><button key={s.id} onClick={()=>openSubject(s)}><i style={{background:s.color}}/>{s.short}<span>{s.semester}</span></button>)}</div><div className="sidebar-bottom"><div className="sidebar-tip"><Sparkles size={19}/><strong>Small steps. Big futures.</strong><p>Your only competition is<br/>who you were yesterday.</p><span>LET’S MAKE TODAY COUNT <ArrowUpRight size={13}/></span></div><button className="settings-link" onClick={()=>navigate('Settings')}><Settings2 size={18}/> Settings & backup</button><button type="button" className="profile" onClick={()=>setDevModal(true)} title="View Developer Details (Althaf)"><span className="avatar-letter">A</span><div>{DEVELOPER_INFO.name}<small>{DEVELOPER_INFO.alias} · Lead Dev</small></div><span className="online"/></button></div></aside>{menu&&<div className="sidebar-scrim" onClick={()=>setMenu(false)}/>}
<div className="main-shell"><header className="topbar"><div className="breadcrumb"><button className="icon-button mobile-menu" aria-label="Open navigation" onClick={()=>setMenu(true)}><Menu size={20}/></button><span>Workspace</span><span>/</span><strong>{selected?selected.short:page}</strong></div><div className="topbar-right"><button type="button" className={'gemini-topbar-btn '+(geminiOpen?'active ':'')+(geminiLoading?'loading':'')} onClick={()=>setGeminiOpen(!geminiOpen)} title="Open Free KTU AI Study Agent"><Sparkles size={14}/><span>Free AI Tutor</span><span className="free-badge">FREE</span>{geminiLoading&&<span className="gemini-pulse-dot"/>}</button><span className="local-status"><i/> Local workspace</span><button className="avatar" aria-label="Open Developer Details" onClick={()=>setDevModal(true)} title="Developer Details: Althaf">A</button></div></header><main><div className="page-heading"><div><div className="eyebrow">YOUR PERSONAL LEARNING OS <span>✦</span></div><h1>{selected?selected.short:page==='Overview'?'A little focus. A lot of possibility.':page}</h1><p>{selected?selected.description:page==='Overview'?'Welcome back, Althaf. Let’s turn today’s effort into tomorrow’s progress.':'Four subjects. One clear direction. Keep moving forward.'}</p></div><span className="date-pill"><CalendarDays size={15}/>{new Date(today+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</span></div>
{page==='Overview'&&<><section className="hero reveal"><div className="hero-copy"><span className="hero-badge"><span/> BUILT FOR YOUR NEXT BREAKTHROUGH</span><h2>Your future is in focus.<br/><span>Let’s get you there.</span></h2><p>One topic, one session, one step closer.<br/>Your four-subject journey starts right here.</p><div className="hero-actions"><button className="primary" onClick={()=>setImmersive(true)}><Play size={15} fill="currentColor"/> Let’s focus <ArrowUpRight size={16}/></button><button className="quiet" onClick={()=>navigate('Study planner')}>View study plan <ArrowRight size={16}/></button></div></div><div className="orbital" aria-hidden="true"><div className="orbital-grid"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="planet"><Atom size={64}/></div><span className="satellite satellite-a"><Sigma size={25}/></span><span className="satellite satellite-b"><Atom size={23}/></span><span className="satellite satellite-c"><FlaskConical size={22}/></span><span className="star star-a">+</span><span className="star star-b">+</span><span className="orbital-caption">LESS NOISE. MORE KNOWLEDGE.</span></div></section><section className="stats-grid reveal">{[[Clock3,'Focus time today',`${todayMinutes}m`,'Every minute is an investment'],[BookOpen,'Topics completed',`${completed}`,`of ${allTopics.length} syllabus topics`],[Target,'Overall progress',`${progress}%`,'Across your four subjects'],[Zap,'Sessions today',`${todaySessions.length}`,'Build your daily momentum']].map(([Icon,label,value,sub])=><div className="stat" key={label}><div><span>{label}</span><Icon size={17}/></div><strong>{value}</strong><small>{sub}</small></div>)}</section><div className="dashboard-columns"><div className="dashboard-main"><section><div className="section-heading"><div><h2>Your learning universe <span>04</span></h2><p>Four subjects. Endless possibilities.</p></div><button className="quiet" onClick={()=>navigate('My subjects')}>View all <ArrowUpRight size={15}/></button></div>{subjectCards}</section><section className="panel planner-panel reveal"><div className="panel-heading"><div><h3>Today’s game plan <span className="count-pill">{todayTasks.filter(t=>t.done).length}/{todayTasks.length}</span></h3><p>Make room for what matters.</p></div><button className="small-button" onClick={()=>setModal('task')}><Plus size={14}/> Add task</button></div>{taskList(todayTasks)}</section><section className="panel activity-panel reveal"><div className="panel-heading"><div><h3>Consistency is your superpower</h3><p>Your focus time over the last 7 days</p></div><span className="mint"><TrendingUp size={20}/></span></div>{chart}</section></div><aside className="right-rail"><section className="panel focus-panel reveal">{timer}</section><section className="panel goal-panel reveal"><div className="panel-heading"><h3><Target size={17}/> Daily goal</h3><button className="quiet" onClick={()=>navigate('Settings')}>Edit</button></div><div className="goal-numbers"><strong>{todayMinutes}<span> / {workspace.goal} min</span></strong><span>{Math.min(100,Math.round(todayMinutes/workspace.goal*100))}%</span></div><div className="progress"><i style={{width:`${Math.min(100,todayMinutes/workspace.goal*100)}%`}}/></div><p>{todayMinutes>=workspace.goal?'Goal reached. You showed up for yourself.':'Progress, not perfection. You’ve got this.'} <Sparkles size={13}/></p></section><section className="quote-card reveal"><span>✦</span><blockquote>“The secret of getting<br/>ahead is getting started.”</blockquote><small>A LITTLE REMINDER FOR TODAY</small></section></aside></div></>}
{page==='My subjects'&&!selected&&<><div className="toolbar"><div className="tabs">{['All subjects','S1','S2'].map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div><label className="search"><Search size={16}/><input placeholder="Find a subject…" value={search} onChange={e=>setSearch(e.target.value)}/></label></div>{subjectCards}</>}
{selected&&<><div className="toolbar"><button className="quiet" onClick={()=>setSubjectId(null)}>← All subjects</button><button className="primary" onClick={()=>{if(!running)setTimerSubject(selected.id);setImmersive(true)}}><Focus size={16}/> Focus on this subject</button></div><div className="subject-summary panel"><span style={{color:selected.color}}>{selected.code} · {selected.semester}</span><strong>{Math.round(calculateSubjectProgress(selected)*100)}% complete</strong><div className="progress"><i style={{width:`${calculateSubjectProgress(selected)*100}%`,background:selected.color}}/></div><label>Exam date <input type="datetime-local" value={selected.examDate||''} onChange={e=>setData(d=>({...d,[selected.semester]:{...d[selected.semester],subjects:d[selected.semester].subjects.map(s=>s.id===selected.id?{...s,examDate:e.target.value}:s)}}))}/></label><small>Dates come from your saved syllabus. Confirm them with your official timetable.</small></div>{selected.modules.map((m,i)=>{
  const totalModPqs=m.topics.reduce((acc,top)=>acc+(top.previousQuestions?.length||0),0);
  const solvedModPqs=m.topics.reduce((acc,top)=>acc+(top.previousQuestions?.filter(q=>q.solved)?.length||0),0);
  return (
    <details className="module panel" key={m.id} open={i===0}>
      <summary>
        <span className="module-number">{String(i+1).padStart(2,'0')}</span>
        <div>
          <h3>{m.name.replace(/^Module \d+:\s*/,'')}</h3>
          <small>{m.topics.length} topics · {m.topics.filter(t=>calculateTopicCompletion(t)===1).length} complete · {solvedModPqs}/{totalModPqs} PYQs solved</small>
        </div>
        <ChevronDown size={18}/>
      </summary>
      <div className="topics">
        {m.topics.map(t=>{
          const totalTopPqs=t.previousQuestions?.length||0;
          const solvedTopPqs=t.previousQuestions?.filter(q=>q.solved)?.length||0;
          return (
            <div className="topic" key={t.id}>
              <div className="topic-heading">
                <BookOpen size={17}/>
                <strong>{t.name}</strong>
                {totalTopPqs>0&&<span className="topic-pq-counter" title="Solved / Total Previous Year Questions">{solvedTopPqs}/{totalTopPqs} PYQs</span>}
                <select aria-label={`Status for ${t.name}`} value={t.status||'not-started'} onChange={e=>updateTopic(selected,m,t,{status:e.target.value})}>
                  <option value="not-started">To study</option>
                  <option value="in-progress">In progress</option>
                  <option value="studied">Studied</option>
                  <option value="needs-revision">Needs revision</option>
                  <option value="revised">Revised</option>
                </select>
              </div>
              {t.subTopics?.map(st=><label className="subtopic" key={st.id}><input type="checkbox" checked={!!st.done} onChange={e=>updateTopic(selected,m,t,{subTopics:t.subTopics.map(x=>x.id===st.id?{...x,done:e.target.checked}:x)})}/>{st.name}</label>)}
              <details className="topic-details" open={true}>
                <summary>Notes & previous year questions ({totalTopPqs}) <ChevronDown size={13}/></summary>
                <label className="field-label">Your topic notes<textarea value={t.notes||''} placeholder="Capture a key concept or formula…" onChange={e=>updateTopic(selected,m,t,{notes:e.target.value})}/></label>
                {t.previousQuestions?.length>0&&<div className="pq-section-heading"><span>PREVIOUS YEAR EXAM QUESTIONS (2019 - 2026)</span><small>Click question to view model answer · Tick column to mark solved</small></div>}
                {t.previousQuestions?.map(q=>{
                  const isExpanded=!!expandedQuestions[q.id];
                  return (
                    <div className={'question '+(q.solved?'is-solved ':'')+(isExpanded?'is-expanded':'')} key={q.id}>
                      <div className="question-header">
                        <div className="question-badges">
                          {q.questionNumber&&<span className="q-badge qnum">{q.questionNumber}</span>}
                          <span className="q-badge year">{q.year} · {q.exam||'KTU Final'}</span>
                          <span className={'q-badge marks '+(q.marks>=14?'marks-14':q.marks>=7?'marks-7':'marks-3')}>{q.marks} Marks</span>
                          {q.source?.status==='verified'&&<span className="q-badge verified-tag">✓ Verified PYQ</span>}
                          {q.frequency&&<span className="q-badge freq">{q.frequency}</span>}
                        </div>
                        <div className="question-header-actions">
                          <button
                            type="button"
                            className="q-ask-gemini"
                            title="Solve with Free AI & auto-fill answer below"
                            onClick={e=>{e.stopPropagation();handleAskGeminiForQuestion(selected,m,t,q)}}
                          >
                            <Sparkles size={12}/>
                            <span>Solve with AI</span>
                          </button>
                          <button
                            type="button"
                            className={'question-tick-col '+(q.solved?'solved':'')}
                            aria-label={q.solved?'Mark question as unsolved':'Mark question as solved'}
                            title={q.solved?'Solved! Click to uncheck':'Tick to mark as solved'}
                            onClick={e=>{e.stopPropagation();toggleQuestionSolved(selected,m,t,q.id);notify(q.solved?'Question marked unsolved.':'Question marked solved! Progress updated.')}}
                          >
                            <span className="tick-box">{q.solved?<Check size={14} strokeWidth={3}/>:null}</span>
                            <span className="tick-label">{q.solved?'Solved':'Mark solved'}</span>
                          </button>
                        </div>
                      </div>
                      <div className="question-body" onClick={()=>toggleQuestionExpand(q.id)} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ')toggleQuestionExpand(q.id)}} title="Click question to view step-by-step solution & model answer">
                        <p className="question-text">{q.text}</p>
                        <div className="click-hint-row">
                          <span className="click-hint">{isExpanded?'▲ Click to hide step-by-step answer':'▼ Click question to reveal model answer'}</span>
                          {q.answer&&<span className="click-hint-has-answer">✓ Answer available</span>}
                        </div>
                      </div>
                      {isExpanded&&(
                        <div className="question-answer-box">
                          {q.hint&&<div className="q-hint-bar"><strong>Key Concept / Exam Tip:</strong> {q.hint}</div>}
                          <div className="q-answer-content">
                            <div className="q-answer-header-row">
                              <strong>Step-by-Step Model Answer & Solution:</strong>
                              <button
                                type="button"
                                className="q-reask-gemini"
                                onClick={()=>handleAskGeminiForQuestion(selected,m,t,q)}
                                title="Re-solve or enhance with Free AI"
                              >
                                <Sparkles size={11}/>
                                <span>{q.answer?'Re-solve with Free AI':'Solve with Free AI'}</span>
                              </button>
                            </div>
                            <FormattedSolution text={q.answer||q.hint||'Step-by-step solution compiled for KTU Scheme.'}/>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </details>
            </div>
          );
        })}
      </div>
    </details>
  );
})}</>}
{page==='Study planner'&&<><div className="toolbar"><div className="tabs">{['All subjects',...subjects.map(s=>s.short)].map(f=><button className={filter===f?'active':''} key={f} onClick={()=>setFilter(f)}>{f}</button>)}</div><button className="primary" onClick={()=>setModal('task')}><Plus size={16}/> Add task</button></div><section className="panel">{taskList(workspace.tasks.filter(t=>filter==='All subjects'||subjects.find(s=>s.id===t.subjectId)?.short===filter).sort((a,b)=>a.date.localeCompare(b.date)))}</section><div className="section-heading"><div><h2>On the horizon</h2><p>Your saved exam dates · verify with your official timetable</p></div></div><div className="exam-grid">{subjects.map(s=><button className="panel exam-card" key={s.id} onClick={()=>openSubject(s)}><CalendarDays color={s.color}/><h3>{s.short}</h3><p>{s.examDate?new Date(s.examDate).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}):'Set an exam date'}</p><span className="quiet">View syllabus <ArrowUpRight size={14}/></span></button>)}</div></>}
{page==='Notes library'&&<><div className="toolbar"><label className="search"><Search size={16}/><input placeholder="Search your notes…" value={search} onChange={e=>setSearch(e.target.value)}/></label><button className="primary" onClick={()=>setModal('note')}><Plus size={16}/> New note</button></div><div className="notes-grid">{workspace.notes.filter(n=>(n.title+' '+n.body).toLowerCase().includes(search.toLowerCase())).map(n=><article className="panel note-card" key={n.id}><div className="panel-heading"><small>{subjects.find(s=>s.id===n.subjectId)?.short}</small><button className="icon-button" aria-label={`Delete note ${n.title}`} onClick={()=>setWorkspace(w=>({...w,notes:w.notes.filter(x=>x.id!==n.id)}))}><Trash2 size={15}/></button></div><h3>{n.title}</h3><textarea aria-label={`Edit ${n.title}`} value={n.body} onChange={e=>setWorkspace(w=>({...w,notes:w.notes.map(x=>x.id===n.id?{...x,body:e.target.value}:x)}))}/><small>Saved automatically on this device</small></article>)}</div><div className="section-heading"><div><h2>Syllabus notebook</h2><p>Your existing topic notes, all in one place.</p></div></div><div className="notes-grid">{allTopics.filter(t=>t.notes&&`${t.name} ${t.notes}`.toLowerCase().includes(search.toLowerCase())).map(t=><button className="panel note-card syllabus-note" key={t.id} onClick={()=>openSubject(t.subject)}><small style={{color:t.subject.color}}>{t.subject.short}</small><h3>{t.name}</h3><p>{t.notes}</p><span className="quiet">Open subject <ArrowUpRight size={14}/></span></button>)}</div></>}
{page==='Revision'&&<><div className="panel revision-intro"><RotateCcw size={26}/><div><h2>Make it stick.</h2><p>Recall a studied topic before revealing your notes. Mark it revised when you’re confident.</p></div></div><div className="notes-grid">{allTopics.filter(t=>['studied','needs-revision'].includes(t.status)).map(t=><article className="panel note-card" key={t.id}><small style={{color:t.subject.color}}>{t.subject.short}</small><h3>{t.name}</h3><details><summary>Reveal study notes</summary><p>{t.notes||'Explain this concept in your own words, then review the syllabus.'}</p></details><button className="small-button" onClick={()=>{updateTopic(t.subject,t.module,t,{status:'revised',subTopics:(t.subTopics||[]).map(s=>({...s,done:true}))});notify('Topic revised. Knowledge reinforced.')}}><Check size={15}/> Mark revised</button></article>)}</div>{!allTopics.some(t=>['studied','needs-revision'].includes(t.status))&&<div className="empty"><CheckCheck/><h3>You’re all caught up.</h3><p>Mark topics studied to add them to your revision queue.</p></div>}</>}
{page==='Insights'&&<><section className="panel"><div className="panel-heading"><h3>Focus time · Last 7 days</h3><span>{week.reduce((a,d)=>a+d.minutes,0)} minutes</span></div>{chart}</section><div className="section-heading"><h2>Subject by subject</h2></div>{subjectCards}<section className="panel session-history"><h3>Completed focus sessions</h3>{workspace.sessions.length?workspace.sessions.slice().reverse().slice(0,30).map(s=><div className="history-row" key={s.id}><CheckCheck size={17}/><span>{subjects.find(x=>x.id===s.subjectId)?.short}</span><small>{s.date}</small><strong>{s.minutes} min</strong></div>):<div className="empty"><Clock3/><p>Finish your first focus session to start your history.</p></div>}</section></>}
{page==='Settings'&&<section className="panel settings-panel"><h2>A space that works for you.</h2><p>Your syllabus, notes, tasks and sessions are saved in this browser. Export a backup before clearing browser data or changing devices.</p><div className="theme-customizer-card"><div className="theme-section-header"><div className="theme-icon-box" style={{background:`${theme.accent}20`,borderColor:`${theme.accent}40`,color:theme.accent}}><Palette size={20}/></div><div><h3>Page Colors & Appearance</h3><p>Select your favorite accent color and page background ambiance. Changes take effect across the entire study buddy immediately.</p></div></div><div className="theme-options-block"><label className="theme-label">PRIMARY ACCENT COLOR<small>Select from popular study palettes or choose a custom hex color</small></label><div className="accent-grid">{ACCENT_PRESETS.map(preset=>{const isSelected=theme.accent.toLowerCase()===preset.hex.toLowerCase();return <button key={preset.hex} type="button" className={'accent-swatch-btn '+(isSelected?'selected':'')} style={{'--swatch-color':preset.hex}} onClick={()=>{setTheme(t=>({...t,accent:preset.hex}));notify(`Accent color changed to ${preset.name}!`);}} title={preset.name}><span className="swatch-circle" style={{backgroundColor:preset.hex}}>{isSelected&&<Check size={13} strokeWidth={3} style={{color:getContrastColor(preset.hex)}}/>}</span><span className="swatch-name">{preset.name}</span></button>;})}<div className="custom-color-picker-wrapper"><label className="custom-color-btn" title="Pick any custom color"><input type="color" value={theme.accent} onChange={e=>setTheme(t=>({...t,accent:e.target.value}))}/><span className="swatch-circle custom-indicator" style={{backgroundColor:theme.accent}}><Palette size={12} style={{color:getContrastColor(theme.accent)}}/></span><span className="swatch-name">Custom ({theme.accent.toUpperCase()})</span></label></div></div></div><div className="theme-options-block" style={{marginTop:22}}><label className="theme-label">PAGE CANVAS THEME<small>Sets dark tone, sidebar shade, and panel contrast</small></label><div className="bg-themes-grid">{Object.values(BG_THEMES).map(bg=>{const isSelected=theme.bgTheme===bg.id;return <button key={bg.id} type="button" className={'bg-theme-card '+(isSelected?'selected':'')} style={{'--card-bg':bg.panel,'--card-border':bg.line}} onClick={()=>{setTheme(t=>({...t,bgTheme:bg.id}));notify(`Page background switched to ${bg.name}!`);}}><div className="bg-theme-preview" style={{background:bg.bg,borderColor:bg.line}}><div className="preview-mini-sidebar" style={{background:bg.sidebar}}/><div className="preview-mini-content"><div className="preview-mini-topbar" style={{borderColor:bg.line}}/><div className="preview-mini-panel" style={{background:bg.panel,borderColor:bg.line}}><span className="preview-mini-bar" style={{background:theme.accent}}/></div></div></div><div className="bg-theme-info"><strong>{bg.name}</strong><small>{bg.desc}</small></div>{isSelected&&<span className="selected-check-badge"><Check size={12} strokeWidth={3}/></span>}</button>;})}</div></div><div className="theme-preview-card"><div className="theme-preview-header"><Sparkles size={14} style={{color:theme.accent}}/><span>Live Palette Preview</span></div><div className="theme-preview-elements"><button type="button" className="primary" style={{padding:'7px 14px'}}>Primary Action</button><span className="q-badge" style={{background:`${theme.accent}22`,border:`1px solid ${theme.accent}55`,color:theme.accent}}>Active Highlight</span><div className="preview-progress-box"><div className="progress" style={{width:120}}><i style={{width:'75%',background:theme.accent}}/></div><small style={{color:theme.accent,fontSize:10,fontWeight:600}}>75% Completed</small></div><button type="button" className="small-button" style={{marginLeft:'auto'}} onClick={()=>{setTheme(DEFAULT_THEME);notify('Restored default Mint Green & Obsidian theme.');}}><RotateCcw size={13}/> Reset to Defaults</button></div></div></div><div className="dev-details-card">
  <div className="dev-card-header">
    <div className="dev-avatar-glow">A</div>
    <div className="dev-header-text">
      <div className="dev-title-row">
        <h3>{DEVELOPER_INFO.name}</h3>
        <span className="dev-alias-badge">{DEVELOPER_INFO.alias}</span>
        <span className="dev-verified-badge">✓ Lead Developer</span>
      </div>
      <p className="dev-role-label">{DEVELOPER_INFO.role}</p>
      <small className="dev-inst-label">{DEVELOPER_INFO.education.institution} · {DEVELOPER_INFO.location}</small>
    </div>
    <button
      type="button"
      className="primary dev-view-btn"
      onClick={()=>setDevModal(true)}
      title="View full developer dossier and credits"
    >
      <User size={14}/> About Developer
    </button>
  </div>
  <p className="dev-bio-text">{DEVELOPER_INFO.bio}</p>
  <div className="dev-specs-grid">
    <div className="dev-spec-box">
      <span className="dev-spec-label">Project</span>
      <strong>{DEVELOPER_INFO.project.name}</strong>
      <small>v{DEVELOPER_INFO.project.version} · {DEVELOPER_INFO.project.releaseYear}</small>
    </div>
    <div className="dev-spec-box">
      <span className="dev-spec-label">Target Scheme</span>
      <strong>KTU 2019 / 2024 Scheme</strong>
      <small>S1 (MAT101, CYT100) & S2 (MAT102, PHT100)</small>
    </div>
    <div className="dev-spec-box">
      <span className="dev-spec-label">Architecture</span>
      <strong>React 19 + Free Gemini AI</strong>
      <small>Offline-First Local Storage Engine</small>
    </div>
  </div>
  <div className="dev-actions-row">
    <a
      href={DEVELOPER_INFO.github}
      target="_blank"
      rel="noopener noreferrer"
      className="dev-link-btn"
      title="Visit Developer GitHub"
    >
      <Code2 size={14}/>
      <span>GitHub Profile</span>
      <ExternalLink size={12}/>
    </a>
    <a
      href={DEVELOPER_INFO.repository}
      target="_blank"
      rel="noopener noreferrer"
      className="dev-link-btn"
      title="View Source Repository on GitHub"
    >
      <FolderGit2 size={14}/>
      <span>Source Code Repo</span>
      <ExternalLink size={12}/>
    </a>
    <button
      type="button"
      className="dev-console-btn"
      onClick={()=>{
        window.aboutDeveloper?.();
        notify("Developer dossier logged to browser console (F12)!");
      }}
      title="Inspect details inside code console"
    >
      <Terminal size={14}/>
      <span>Run aboutDeveloper()</span>
    </button>
  </div>
</div>

<label className="field-label">Daily focus goal (minutes)<input type="number" min="15" max="720" value={workspace.goal} onChange={e=>{const v=Number(e.target.value);if(v>=15&&v<=720)setWorkspace(w=>({...w,goal:v}))}}/></label>
<button className="primary" onClick={exportData}><Download size={16}/> Export study backup</button>
<label className="field-label">Restore an Orbit backup<input type="file" accept="application/json,.json" onChange={importData}/></label>
<div style={{marginTop:24,paddingTop:18,borderTop:'1px solid var(--line)'}}>
<h3 style={{fontSize:13,color:'#9de8af',marginBottom:6,display:'flex',alignItems:'center',gap:6}}><Sparkles size={14}/> KTU AI Study Agent (100% Free)</h3>
<p className="muted">The AI Study Agent is 100% free by default and requires no paid key or credit card. If you wish to connect an optional personal Google AI key, you can enter it below.</p>
<div style={{display:'flex',gap:10,marginTop:10,maxWidth:440}}>
<input type="password" placeholder="Optional custom API key" value={apiKeyInput} onChange={e=>setApiKeyInput(e.target.value)} style={{background:'#111915',border:'1px solid #344338',borderRadius:7,padding:'8px 12px',color:'#d9e6dd',fontSize:12,flex:1}}/>
<button type="button" className="primary" style={{padding:'8px 14px'}} onClick={()=>handleSaveApiKey(apiKeyInput)}>{apiKeyInput.trim()?'Save Custom Key':'Free Agent Active'}</button>
</div>
</div>
<div style={{marginTop:24,paddingTop:18,borderTop:'1px solid var(--line)'}}>
<h3 style={{fontSize:13,color:'#e8b4b4',marginBottom:6}}>Reset Progress to 0%</h3>
<p className="muted">Reset all topic statuses, checklist subtopics, and solved questions to 0% to start fresh.</p>
<button type="button" className="small-button" style={{borderColor:'#823737',color:'#fba5a5',marginTop:10}} onClick={resetProgress}><RotateCcw size={14}/> Reset all subject progress to 0%</button>
</div>
<p className="muted" style={{marginTop:16}}>Your four subjects are fixed to your existing KTU syllabus. Topic notes, study status, subtasks and exam dates are editable inside each subject.</p>
</section>}
<footer>
  <span className="footer-brand">orbit<span>.</span></span>
  <span>Made for your focus · Developed by <button type="button" className="footer-dev-btn" onClick={()=>setDevModal(true)} title="View Developer Details">Althaf ({DEVELOPER_INFO.alias})</button></span>
  <span><i/> Your progress stays on this device</span>
</footer>
</main></div>
{/* Gemini Sidepanel */}
<aside className={'gemini-sidepanel '+(geminiOpen?'open':'')} aria-label="Gemini AI Tutor">
  <div className="gemini-header">
    <div className="gemini-header-title">
      <div className="gemini-logo-icon">
        <Sparkles size={16}/>
      </div>
      <div>
        <div style={{display:'flex',alignItems:'center',gap:6}}>
          <h3>KTU AI Study Agent</h3>
          <span className="free-badge">100% FREE</span>
        </div>
        <small>Step-by-Step KTU Exam Solver · No Paid Key</small>
      </div>
    </div>
    <div className="gemini-header-actions">
      <button
        type="button"
        className="icon-button"
        title="Custom API Key (Optional)"
        onClick={()=>setApiKeyModal(true)}
      >
        <Key size={15}/>
      </button>
      <button
        type="button"
        className="icon-button"
        title="Close AI Panel"
        onClick={()=>setGeminiOpen(false)}
      >
        <X size={18}/>
      </button>
    </div>
  </div>

  {geminiTarget&&(
    <div className="gemini-target-banner">
      <div className="gemini-target-info">
        <span className="gemini-target-pill">Targeting Question</span>
        <strong>{geminiTarget.subject.code} · {geminiTarget.question.year} · {geminiTarget.question.marks}M</strong>
        <p>{geminiTarget.question.text}</p>
      </div>
      <button
        type="button"
        className="gemini-clear-target"
        title="Clear target question"
        onClick={()=>setGeminiTarget(null)}
      >
        <X size={13}/>
      </button>
    </div>
  )}

  <div className="gemini-messages">
    {geminiMessages.map(msg=>(
      <div key={msg.id} className={'gemini-msg '+msg.sender+(msg.error?' is-error':'')}>
        <div className="gemini-msg-meta">
          <span className="gemini-sender-label">{msg.sender==='user'?'You':'Gemini Tutor'}</span>
          <span className="gemini-msg-time">{msg.timestamp}</span>
          {msg.applied&&(
            <span className="gemini-applied-tag" title="Answer is filled under the question card">
              ✓ Filled under question
            </span>
          )}
        </div>
        <div className="gemini-msg-body">
          {msg.sender==='gemini'?(
            <FormattedSolution text={msg.text} isCompact={true}/>
          ):(
            <p className="gemini-user-text">{msg.text}</p>
          )}
        </div>
        {msg.sender==='gemini'&&!msg.error&&(
          <div className="gemini-msg-actions">
            <button
              type="button"
              className="gemini-mini-btn"
              onClick={()=>{
                navigator.clipboard?.writeText(msg.text);
                notify('Copied answer to clipboard!');
              }}
            >
              Copy answer
            </button>
            {geminiTarget&&(
              <button
                type="button"
                className="gemini-mini-btn fill-btn"
                onClick={()=>applyAnswerToQuestion(msg.text,geminiTarget)}
              >
                Apply to question
              </button>
            )}
          </div>
        )}
      </div>
    ))}
    {geminiLoading&&(
      <div className="gemini-msg gemini is-loading">
        <div className="gemini-msg-meta">
          <span className="gemini-sender-label">Gemini Tutor</span>
          <span className="gemini-pulse-text">Solving step-by-step...</span>
        </div>
        <div className="gemini-loading-indicator">
          <Sparkles size={16} className="gemini-spin-icon"/>
          <span>Generating mathematically rigorous KTU solution...</span>
        </div>
      </div>
    )}
    <div ref={chatEndRef}/>
  </div>

  <div className="gemini-prompt-chips">
    <button
      type="button"
      className="gemini-chip"
      onClick={()=>handleSendGeminiChat(null,'Solve with full intermediate steps according to KTU valuation scheme.')}
    >
      📐 Full KTU Solution
    </button>
    <button
      type="button"
      className="gemini-chip"
      onClick={()=>handleSendGeminiChat(null,'Show matrix row reduction to row echelon form step-by-step.')}
    >
      🔢 Matrix Echelon
    </button>
    <button
      type="button"
      className="gemini-chip"
      onClick={()=>handleSendGeminiChat(null,'List the governing formulas, theorems, and key exam marks.')}
    >
      💡 Formulas & Tips
    </button>
  </div>

  <form className="gemini-input-form" onSubmit={e=>handleSendGeminiChat(e)}>
    <textarea
      value={geminiInput}
      onChange={e=>setGeminiInput(e.target.value)}
      onKeyDown={e=>{
        if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)){
          e.preventDefault();
          handleSendGeminiChat(e);
        }
      }}
      placeholder={geminiTarget?"Ask follow-up or instructions for this question... (Ctrl+Enter)":"Ask any KTU engineering question or doubt... (Ctrl+Enter)"}
      rows={2}
    />
    <button
      type="submit"
      className="gemini-send-btn primary"
      disabled={geminiLoading||!geminiInput.trim()}
      title="Send prompt to Gemini"
    >
      <Send size={15}/>
    </button>
  </form>
</aside>
{geminiOpen&&<div className="gemini-scrim" onClick={()=>setGeminiOpen(false)}/>}
{apiKeyModal&&(
  <Dialog title="AI Study Agent Settings" close={()=>setApiKeyModal(false)}>
    <div className="gemini-modal-content">
      <div style={{background:'#16281d',border:'1px solid #2f5a3e',borderRadius:8,padding:'12px 14px',marginBottom:14}}>
        <strong style={{color:'#88eeb0',fontSize:12,display:'flex',alignItems:'center',gap:6}}>
          <Sparkles size={14}/> 100% Free AI Agent Active
        </strong>
        <p style={{fontSize:10.5,color:'#bfe3ce',marginTop:4,lineHeight:1.6}}>
          You do not need a paid API key or subscription. The Built-in KTU Academic AI Agent generates step-by-step model answers and fills question cards completely free!
        </p>
      </div>
      <p style={{fontSize:11,color:'#9bb3a4',lineHeight:1.7,marginBottom:10}}>
        If you wish to optionally provide a custom Google AI Studio key, you can paste it below:
      </p>
      <label className="field-label" style={{margin:'10px 0'}}>
        Custom Google AI Studio Key (Optional)
        <input
          type="password"
          value={apiKeyInput}
          placeholder="Leave blank to use 100% Free Agent"
          onChange={e=>setApiKeyInput(e.target.value)}
          autoFocus
        />
      </label>
      <div style={{display:'flex',gap:10,marginTop:18}}>
        <button
          type="button"
          className="small-button"
          onClick={()=>handleSaveApiKey('')}
          style={{borderColor:'#44554b',color:'#b0c8ba'}}
        >
          Use Free Default
        </button>
        <button
          type="button"
          className="primary"
          style={{flex:1}}
          onClick={()=>handleSaveApiKey(apiKeyInput)}
        >
          {apiKeyInput.trim()?'Save Custom Key':'Continue Free'}
        </button>
      </div>
    </div>
  </Dialog>
)}
{devModal&&(
  <Dialog title="About Developer & Project Dossier" close={()=>setDevModal(false)}>
    <div className="dev-modal-content">
      <div className="dev-modal-hero">
        <div className="dev-modal-avatar">A</div>
        <div className="dev-modal-info">
          <div className="dev-modal-name-row">
            <h3>{DEVELOPER_INFO.name}</h3>
            <span className="dev-alias-badge">{DEVELOPER_INFO.alias}</span>
            <span className="dev-verified-badge">✓ Lead Developer</span>
          </div>
          <p className="dev-modal-role">{DEVELOPER_INFO.role}</p>
          <span className="dev-modal-place">{DEVELOPER_INFO.education.institution} · {DEVELOPER_INFO.location}</span>
        </div>
      </div>

      <div className="dev-modal-section">
        <h4>Developer Story & Mission</h4>
        <p className="dev-modal-bio">{DEVELOPER_INFO.bio}</p>
      </div>

      <div className="dev-modal-section">
        <h4>Technology Stack</h4>
        <div className="dev-stack-tags">
          {DEVELOPER_INFO.stack.map(s=>(
            <span className="dev-stack-tag" key={s.name}>
              <strong>{s.name}</strong>
              <small>{s.category}</small>
            </span>
          ))}
        </div>
      </div>

      <div className="dev-modal-section">
        <h4>Built-in Features & Coverage</h4>
        <ul className="dev-features-list">
          {DEVELOPER_INFO.project.features.map(f=>(
            <li key={f}><Check size={13}/> <span>{f}</span></li>
          ))}
        </ul>
      </div>

      <div className="dev-modal-section">
        <h4>Developer & Source Links</h4>
        <div className="dev-modal-links">
          <a href={DEVELOPER_INFO.github} target="_blank" rel="noopener noreferrer" className="dev-link-btn primary" style={{padding:'9px 15px'}}>
            <Code2 size={15}/> <span>GitHub @Althafx17</span> <ExternalLink size={13}/>
          </a>
          <a href={DEVELOPER_INFO.repository} target="_blank" rel="noopener noreferrer" className="dev-link-btn" style={{padding:'9px 15px'}}>
            <FolderGit2 size={15}/> <span>Source Repository</span> <ExternalLink size={13}/>
          </a>
        </div>
      </div>

      <div className="dev-modal-footer-note">
        <Terminal size={14}/>
        <span>Inside code console: run <code>window.aboutDeveloper()</code> or inspect <code>window.__DEVELOPER__</code></span>
      </div>
    </div>
  </Dialog>
)}
{immersive&&<div className="immersive"><button className="close-focus icon-button" aria-label="Exit focus mode" onClick={()=>setImmersive(false)}><X size={24}/></button><div className="eyebrow">THE WORLD CAN WAIT.</div><h1>Just you and {focusSubject.short.toLowerCase()}.</h1><div className="panel focus-panel">{timer}</div><p>Take a breath. You only need to do the next thing.</p></div>}
{typeof modal==='string'&&<Dialog title={modal==='task'?'Make a little progress.':'Save a new idea.'} close={()=>setModal(null)}><form onSubmit={e=>{e.preventDefault();const f=new FormData(e.currentTarget);if(!String(f.get('title')).trim())return;const item={id:crypto.randomUUID(),title:String(f.get('title')).trim(),subjectId:f.get('subjectId')};setWorkspace(w=>modal==='task'?{...w,tasks:[...w.tasks,{...item,date:f.get('date'),minutes:Number(f.get('minutes')),done:false}]}:{...w,notes:[...w.notes,{...item,body:f.get('body')}]});setModal(null);notify(modal==='task'?'Task added to your study plan.':'Note saved to your library.')}}><label className="field-label">{modal==='task'?'What will you work on?':'Note title'}<input autoFocus name="title" required maxLength="160" placeholder={modal==='task'?'e.g. Practice matrix transformations':'e.g. Integration shortcuts'}/></label><label className="field-label">Subject<select name="subjectId">{subjects.map(s=><option key={s.id} value={s.id}>{s.short}</option>)}</select></label>{modal==='task'?<div className="form-row"><label className="field-label">Study date<input type="date" name="date" required defaultValue={today}/></label><label className="field-label">Minutes<input type="number" name="minutes" min="1" max="480" defaultValue="25" required/></label></div>:<label className="field-label">Your thoughts<textarea name="body" rows="5" placeholder="Write something worth remembering…" required/></label>}<button className="primary" type="submit"><Plus size={16}/>{modal==='task'?'Add to my plan':'Save note'}</button></form></Dialog>}
{modal?.type==='restore'&&<Dialog title="Restore your study backup?" close={()=>setModal(null)}><p className="restore-copy">This replaces the current syllabus progress, notes, tasks and session history. Export your current work first if you want to keep it.</p><div className="restore-actions"><button className="small-button" onClick={exportData}>Export current work</button><button className="primary" onClick={()=>{setData(modal.backup.ledger);setWorkspace({...modal.backup.workspace,goal:Math.max(15,Math.min(720,Number(modal.backup.workspace.goal)||120))});resetTimer();setModal(null);notify('Backup restored successfully.')}}>Restore backup</button></div></Dialog>}
{toast&&<div className="toast" role="status"><CheckCheck size={18}/>{toast}<button className="icon-button" aria-label="Dismiss notification" onClick={()=>setToast('')}><X size={14}/></button></div>}</div>;
}
function Dialog({title,close,children}){const ref=useRef();useEffect(()=>{const previous=document.activeElement;ref.current.showModal();return()=>previous?.focus()},[]);return <dialog ref={ref} className="dialog" onCancel={close} onClick={e=>{if(e.target===ref.current)close()}}><div className="panel-heading"><h2>{title}</h2><button className="icon-button" aria-label="Close dialog" onClick={close}><X size={20}/></button></div>{children}</dialog>}
