(() => {
  'use strict';
  const STORAGE_KEY='aws_saa_vpc_quiz_v2';
  const allQuestions=Array.isArray(window.ALL_QUESTIONS)?window.ALL_QUESTIONS:[];
  let pool=[...allQuestions], idx=0;
  const state=new Map();

  const $=id=>document.getElementById(id);
  const els={cat:$('cat'),level:$('level'),status:$('status'),shown:$('shown'),done:$('done'),correct:$('correct'),score:$('score'),bar:$('bar'),qnum:$('qnum'),qcat:$('qcat'),qlevel:$('qlevel'),question:$('question'),notice:$('notice'),options:$('options'),exp:$('exp'),prev:$('prev'),next:$('next'),submit:$('submit'),resetOne:$('resetOne'),shuffle:$('shuffle'),resetAll:$('resetAll')};

  function load(){try{const raw=localStorage.getItem(STORAGE_KEY);if(!raw)return;const parsed=JSON.parse(raw);Object.entries(parsed).forEach(([k,v])=>state.set(Number(k),v));}catch(e){console.warn('Cannot load progress',e);}}
  function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(Object.fromEntries(state)));}catch(e){}}
  function sameSet(a,b){if(a.length!==b.length)return false;const aa=[...a].sort((x,y)=>x-y),bb=[...b].sort((x,y)=>x-y);return aa.every((v,i)=>v===bb[i]);}
  function populateFilters(){[...new Set(allQuestions.map(q=>q.cat))].sort().forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;els.cat.appendChild(o);});[...new Set(allQuestions.map(q=>q.level))].sort().forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;els.level.appendChild(o);});}
  function matchesStatus(q){const st=state.get(q.id),f=els.status.value;if(f==='ALL')return true;if(f==='UNANSWERED')return !st?.submitted;if(f==='WRONG')return !!st?.submitted&&!st.correct;if(f==='CORRECT')return !!st?.submitted&&st.correct;return true;}
  function applyFilter(){const c=els.cat.value,l=els.level.value;pool=allQuestions.filter(q=>(c==='ALL'||q.cat===c)&&(l==='ALL'||q.level===l)&&matchesStatus(q));idx=0;render();}
  function selected(){return [...els.options.querySelectorAll('input:checked')].map(x=>Number(x.value));}
  function render(){
    els.shown.textContent=pool.length;
    if(!pool.length){els.qnum.textContent='';els.qcat.textContent='';els.qlevel.textContent='';els.question.textContent='';els.notice.textContent='Không có câu phù hợp với bộ lọc hiện tại.';els.options.innerHTML='<div class="empty">Hãy đổi bộ lọc hoặc làm lại câu đã hoàn thành.</div>';els.exp.className='explanation';els.submit.disabled=true;els.prev.disabled=true;els.next.disabled=true;updateStats();return;}
    idx=Math.max(0,Math.min(idx,pool.length-1));const q=pool[idx],st=state.get(q.id);
    els.qnum.textContent=`Câu ${idx+1} / ${pool.length} • ID ${q.id}`;els.qcat.textContent=q.cat;els.qlevel.textContent=q.level;els.question.textContent=q.q;els.notice.textContent=q.multi?`Chọn ${q.ans.length} đáp án.`:'Chọn một đáp án.';els.options.innerHTML='';
    q.opts.forEach((op,i)=>{const label=document.createElement('label');label.className='option';const input=document.createElement('input');input.type=q.multi?'checkbox':'radio';input.name='answer';input.value=i;if(st?.selected?.includes(i))input.checked=true;if(st?.submitted)input.disabled=true;const span=document.createElement('span');span.innerHTML=`<b>${String.fromCharCode(65+i)}.</b> ${op}`;label.append(input,span);if(st?.submitted){if(q.ans.includes(i))label.classList.add('correct');if(st.selected.includes(i)&&!q.ans.includes(i))label.classList.add('wrong');}els.options.appendChild(label);});
    if(st?.submitted){els.exp.className='explanation '+(st.correct?'good':'bad');els.exp.innerHTML=`<b>${st.correct?'✓ Chính xác':'✗ Chưa đúng'}</b><br>${q.exp}`;els.submit.disabled=true;els.submit.textContent='Đã submit';}else{els.exp.className='explanation';els.exp.textContent='';els.submit.disabled=false;els.submit.textContent='Submit câu này';}
    els.prev.disabled=idx===0;els.next.disabled=idx===pool.length-1;updateStats();
  }
  function updateStats(){const submitted=[...state.values()].filter(s=>s?.submitted),correct=submitted.filter(s=>s.correct).length;els.done.textContent=submitted.length;els.correct.textContent=correct;els.score.textContent=submitted.length?Math.round(correct/submitted.length*100)+'%':'0%';els.bar.style.width=(allQuestions.length?submitted.length/allQuestions.length*100:0)+'%';}
  function submit(){if(!pool.length)return;const q=pool[idx],sel=selected();if(!sel.length){alert('Hãy chọn đáp án trước khi submit.');return;}if(q.multi&&sel.length!==q.ans.length){alert(`Câu này yêu cầu chọn đúng ${q.ans.length} đáp án.`);return;}state.set(q.id,{selected:sel,submitted:true,correct:sameSet(sel,q.ans)});save();render();}
  function resetOne(){if(!pool.length)return;state.delete(pool[idx].id);save();applyFilter();}
  function shuffle(){for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}idx=0;render();}
  function resetAll(){if(!confirm('Xóa toàn bộ tiến độ 60 câu trên thiết bị này?'))return;state.clear();save();applyFilter();}
  els.cat.addEventListener('change',applyFilter);els.level.addEventListener('change',applyFilter);els.status.addEventListener('change',applyFilter);els.submit.addEventListener('click',submit);els.resetOne.addEventListener('click',resetOne);els.resetAll.addEventListener('click',resetAll);els.shuffle.addEventListener('click',shuffle);els.prev.addEventListener('click',()=>{if(idx>0){idx--;render();window.scrollTo({top:0,behavior:'smooth'});}});els.next.addEventListener('click',()=>{if(idx<pool.length-1){idx++;render();window.scrollTo({top:0,behavior:'smooth'});}});
  load();populateFilters();applyFilter();
})();