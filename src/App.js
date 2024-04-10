import { useEffect, useState } from 'react';
import './css/App.css';
import './css/reset.css';

function App() {

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`)
  }


  useEffect(()=>{
    setVh()

    function onResize() {
      setVh()
    }

    window.addEventListener('resize',onResize)
  },[])
  
  const [page, setPage] = useState(0)

  const questionList = [
    {
      q: ['나의 스트레스 해소법은'],
      a: [
        { type: 'I', text: '집에서 아무것도 안하고 푹 쉬기' },
        { type: 'E', text: '친구들과 만나 수다떨기' }
      ]
    },
    {
      q: ['친구들과 단체 모임에서 나는'],
      a: [
        { type: 'I', text: '안친한 친구가 말 거는건 부담스러워..' },
        { type: 'E', text: '새로운 친구도 만들고 싶다' }
      ]
    },
    {
      q: ['힘든 일이 생길 때 나는'],
      a: [
        { type: 'I', text: '어차피 내가 해결해야 하니 말하지 않는다' },
        { type: 'E', text: '친구들에게 털어놓으며 고민을 나눈다' }
      ]
    },
    {
      q: ['사과는?'],
      a: [
        { type: 'S', text: '빨갛다, 둥글다, 달다, 잘 익었다' },
        { type: 'N', text: '아이폰, 백설공주, 뉴턴, 스티븐잡스' }
      ]
    },
    {
      q: ['내가 만약 우주로 끌려가게 된다면'],
      a: [
        { type: 'S', text: '쓸 데 없는 소리, 그런거 생각 안해봤다' },
        { type: 'N', text: '헉..그럼 난 식량 먹고 사는건가?(망상)' }
      ]
    },
    {
      q: ['그냥 아무 생각하지 말고 있어봐!'],
      a: [
        { type: 'S', text: '(멍.....)' },
        { type: 'N', text: '(...망상중..)' }
      ]
    },
    {
      q: ['취업이 안돼 힘들어하는 상황'],
      a: [
        { type: 'F', text: '(곤란한 질문은 하지 말자) 힘들지ㅠㅠ' },
        { type: 'T', text: '무슨 준비하는데? 이력서는 넣어봤어?' }
      ]
    },
    {
      q: ['너 힘들어 보여서 엽떡 사왔어'],
      a: [
        { type: 'F', text: '"고마워! (나를 생각해주는 구나..)"' },
        { type: 'T', text: '"고마워! (내가 그렇게 힘들어보이나?)"' }
      ]
    },
    {
      q: ['나 드디어 집 장만했어!'],
      a: [
        { type: 'F', text: '축하해! 그동안 고생 많았어' },
        { type: 'T', text: '오, 전세? 매매? 위치는?' }
      ]
    },
    {
      q: ['과제를 한다면'],
      a: [
        { type: 'P', text: '자료조사부터 해야 틀이 잡히지' },
        { type: 'J', text: '계획을 먼저 세워야 틀이 잡히지' }
      ]
    },
    {
      q: ['다음날 일정이 있는데, 친구들이 더 놀자고 하는 상황'],
      a: [
        { type: 'P', text: '좋아! 내일 일은 내일 생각하는거야!' },
        { type: 'J', text: '일정이 있으니.. 지금 바로 집갈래' }
      ]
    },
    {
      q: ['맛집 탐방 중, 가려던 음식점이 문을 닫았다.'],
      a: [
        { type: 'P', text: '아, 옆집도 메뉴가 같네. 여기 가자!' },
        { type: 'J', text: '휴무가 아니었는데.. 계획 B안으로 간다.' }
      ]
    },
    {
      q: ['테스트가 모두 끝났어. 결과 보러갈래?'],
      a: [
        { type: '', text: '결과 보러 가기' }
      ]
    }
  ];

  const [mbtiList, setMbtiList] = useState([
    {name:'I', count: 0},
    {name:'E', count: 0}, 
    {name:'S', count: 0}, 
    {name:'N', count: 0},
    {name:'F', count: 0}, 
    {name:'T', count: 0},
    {name:'P', count: 0}, 
    {name:'J', count: 0},
  ])

  const handleCkAnswer = (type,idx) => {
    let ls = mbtiList;
    for(let i = 0; i < ls.length; i++){
      if(ls[i].name===type){
        ls[i].count = ls[i].count+1
      }
    }

    setMbtiList(ls)
    setPage(page+1)
    
    if(idx+1 === questionList.length){
      setMbti()
    }
  }

  const [mbtiContents,setMbtiContents] = useState([])

  function setMbti(){
    let mc = [
      {mbti:'ENFP',contents:['호기심','자유','이상주의','감성','배려','창의','변화','새로움','열정'],planet:'수성'},
      {mbti:'ENTP',contents:['창의','도전','비전','독특','솔직','열정','호기심','개혁','가능성'],planet:'목성'},
      {mbti:'ENFJ',contents:['센스','정의감','동료애','동정심','사교적','추진력','칭찬','리더쉽','다정'],planet:'토성'},
      {mbti:'ENTJ',contents:['현실적','논리적','판단력','자기애','도전적','성취형','카리스마','리더쉽','결단력'],planet:'천왕성'},
      {mbti:'ESFP',contents:['민첩함','사교적','현실적','솔직함','오지랖','적응력','열성적','관찰력','관대함'],planet:'해왕성'},
      {mbti:'ESTP',contents:['대담함','도전','스릴','자발적','능글','관찰력','자기애','독립적','개방적'],planet:'탄소행성'},
      {mbti:'ESFJ',contents:['의존적','위계질서','보수적','선입견','사교성','관습적','협동심','소속감','선동'],planet:'에로스'},
      {mbti:'ESTJ',contents:['계획','추진력','논리적','리더쉽','조직','결단력','통제','관습적','성취욕'],planet:'아폴로'},
      {mbti:'INFP',contents:['이상주의','호기심','창의력','관대함','헌신적','열정','융통성','상상력','도덕성'],planet:'안자'},
      {mbti:'INTP',contents:['염세주의','융통성','객관적','독립성','독창성','자아성찰','논리적','개성','과정중시'],planet:'아텐'},
      {mbti:'INFJ',contents:['공화주의','인내심','감성적','거시적','상상력','창의력','메타인지','신비주의','아이디어'],planet:'화성'},
      {mbti:'INTJ',contents:['독립성','창의성','통찰력','비판적','완벽주의','사실중심','체계적','합리성','우월의식'],planet:'금성'},
      {mbti:'ISFP',contents:['겸손함','융통성','예술적','본질추구','다원주의','상호존중','수용적','독립적','인간중심'],planet:'세레스'},
      {mbti:'ISFJ',contents:['안정감','도덕성','신뢰도','소속감','관습적','봉사','헌신','섬세함','성실함'],planet:'팔라스'},
      {mbti:'ISTJ',contents:['책임감','소극적','체계적','청렴결백','실용적','소속감','규칙준수','보수적','정확성'],planet:'지구'},
      {mbti:'ISTP',contents:['개인주의','논리적','독립성','무관심','생산성','실용적','효율성','자유주의','합리주의'],planet:'프시케'},
    ]

    let IorE = mbtiList.find(function(data){return data.name === 'I'}).count >
    mbtiList.find(function(data){return data.name === 'E'}).count ? 'I' : 'E';

let SorN = mbtiList.find(function(data){return data.name === 'S'}).count >
mbtiList.find(function(data){return data.name === 'N'}).count ? 'S' : 'N';

let ForT = mbtiList.find(function(data){return data.name === 'F'}).count >
mbtiList.find(function(data){return data.name === 'T'}).count ? 'F' : 'T';

let PorJ = mbtiList.find(function(data){return data.name === 'P'}).count >
mbtiList.find(function(data){return data.name === 'J'}).count ? 'P' : 'J';

    let mbti = IorE + SorN + ForT + PorJ;

    setMbtiContents(mc.filter(val=>val.mbti === mbti)[0])
  }

  return (
    <div className="mbtiLayout">
      {page===0?
        <div className="startPageLayout">
            <div class="glitch-wrapper">
              <div class="glitch" data-text="우주 행성 성격 테스트" onClick={()=>setPage(1)}>우주 행성 성격 테스트</div>
            </div>
        </div>
        :page <= questionList.length ?
        <div className="questionLayout">
          <div>
            <span className="question-title">{`${page} / ${questionList.length}`}</span>
          </div>
          {questionList.map((val,idx)=>
            <div className="questionList" style={{display:page===idx+1?'flex':'none'}}>
              <div className="questionItemLayout">
                {val.q.map((qval,qidx)=>
                  <div key={qidx} className="questionBox">
                    <div>{qval}</div>
                  </div>
                )}
              </div>
              <div className="answerItemLayout">
                {val.a.map((aval,aidx)=>
                  <div key={aidx} className="answerBox" onClick={()=>handleCkAnswer(aval.type,idx)}>
                    <div>{aval.text}</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        :
        <div className="resultLayout">
            <div className="resultList" style={{display:'flex'}}>
              <div className="resultItemLayout">
                <div>{mbtiContents.mbti}</div>
                <div>당신에게 어울리는 행성은 {mbtiContents.planet}</div>
              </div>
              <div className="resultItem-des">
                {mbtiContents.contents.map((val,idx)=>
                  <div key={idx}>
                    {val}
                  </div>
                )}
              </div>
            </div>
            <div onClick={()=>window.location.reload()} className="more-btn">다시하기</div>
        </div>
      }
    </div>
  );
}

export default App;
