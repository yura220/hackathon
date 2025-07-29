import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    document.title = 'DNAble';

    const saved = localStorage.getItem("isLoggedin");
    if (saved === "true") {
      setIsLoggedin(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedin) {
      console.log('로그인 됐어!');
    } else {
      console.log('로그인 안 됐어');
    }
  }, [isLoggedin]);

  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </>
  );
}

function Page1(){
  return(
    <>
    <div className="a">
      <div className="a-title">
        맞춤형 건강 분석 리포트, <br />
        약사가 완성하는 맞춤형 건강 상담
      </div>
      <span className='a-text'>개인 특성에 따른 분석 결과를 기반으로 필요한 영양 요소를 제안하고, 전문가가 이를 검토해 건강 상담까지 함께합니다.</span>
      <button className='btn btn-outline-primary a-button' style={{borderRadius:'20px', border: '1px solid white', color:'white'}}>서비스 시작하기 &gt;</button>
    </div>
    </>
  )
}

function Page2(){
  return(
    <>
    <div className="b">
      <h1 className='b-title'>우리의 서비스는?</h1>
      <span className='b-detail'>About our Services</span>
      <div className="b-box">
        <div className="box1">
          <img src="/main/main6-1.png" style={{height:'50px', marginBottom:'20px'
          }} alt="" />
          사전 분석<br />결과 연계</div>
        <div className="box2">
          <img src="/main/main6-2.png" style={{height:'50px', marginBottom:'20px'
          }} alt="" />
          개별 상태에 맞춘<br />주요 성분 제안</div>
        <div className="box3">
          <img src="/main/main6-3.png" style={{height:'50px', marginBottom:'20px'
          }} alt="" />전문가가 상담을 통해<br />최종 맞춤 제안</div>
        <div className="box4">
          <img src="/main/main6-4.png" style={{height:'50px', marginBottom:'20px'
          }} alt="" />고객 컨디션<br />이력 기반 케어</div>
      </div>
      <span style={{margin:'50px'}}>약국의 전문성을 강화하고, 단골 고객 만족도를 높이는 헬스케어 솔루션입니다.</span>
    </div>
    </>
  )
}

function Page3(){
  return(
    <>
    <div className="c">
      <div className="c-title">약사에게는 직능확장을<br />
      소비자에게는 올바른 영양제를 <br />
      사회적으로는 약물 오남용 방지를<br />
      <span style={{fontWeight:'100', fontSize:'20px'}}>your journey with us</span></div>
      <div className="c-1"><span className="num">01</span><p>	전문가 기반 상담 시스템</p><p>고객의 건강 목표에 맞춘</p><p>맞춤형 안내</p></div>
      <div className="c-2"><span className="num">02</span><p>누구나 쉽게 시작</p><p>간편한 등록 절차와</p><p>직관적인 인터페이스</p></div>
      <div className="c-3"><span className="num">03</span><p>약국에 자연스럽게</p><p>녹아드는 솔루션</p><p>별도 교육 없이</p><p>활용 가능한 연동</p></div>
    </div>
    </>
  )
}

function Page4() {
  const pointsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });

    pointsRef.current.forEach(point => {
      if (point) observer.observe(point);
    });

    return () => {
      pointsRef.current.forEach(point => {
        if (point) observer.unobserve(point);
      });
    };
  }, []);

  const pointItems = [
    {
      title: "고객 리스크 요약",
      text: "예: 혈당 대사 문제, 비타민 D 대사 문제 등"
    },
    {
      title: "AI 기반 필요한 영양소 자동 추천",
      text: "철분, 오메가 3 등 부족 분석"
    },
    {
      title: "중복 복용 여부 분석, 상담 리포트 생성",
      text: "예: 규칙적인 수면, 운동 권장 등"
    },
    {
      title: "생활 습관에 맞춘 맞춤 추천 제공",
      text: "약사의 검토 후 제공되는 상담 리포트"
    }
  ];

  return (
    <div className="d">
      <div className="d-1"></div>
      <div className="d-2">
        <div className="d-title">AI가 추천한 결과를 <br /> 어떻게 보나요?</div>
        <div className="points">
          {pointItems.map((item, i) => (
            <div
              className="point"
              key={i}
              ref={el => pointsRef.current[i] = el}
            >
              <div className="point-title">{item.title}</div>
              <div className="point-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Page5() {
  const boxRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    boxRefs.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      boxRefs.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

  const benefits = [
    {
      icon: "/main/main5-1.png",
      texts: ["운영에 필요한 키트,", "전산 시스템 제공"]
    },
    {
      icon: "/main/main5-2.png",
      texts: ["상담 리포트 축적", "고객관리 기능"]
    },
    {
      icon: "/main/main5-3.png",
      texts: ["고객 만족도 상승으로", "단골 유치"]
    },
    {
      icon: "/main/main5-4.png",
      texts: ["초기 셋업 무료 지원", "(교육자료 제공)"]
    }
  ];

  return (
    <div className="b">
      <h1 className="b-title">파트너 약국이 되면?</h1>
      <div className="e-box" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {benefits.map((item, i) => (
          <div
            key={i}
            ref={(el) => (boxRefs.current[i] = el)}
            className={`flip-in`}
            style={{
              transitionDelay: `${i * 0.3}s`,
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '12px',
              width: '220px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}
          >
            {item.icon && (
              <img
                src={item.icon}
                alt=""
                style={{ height: "80px", marginTop:'30px', marginBottom: "30px" }}
              />
            )}
            {item.texts.map((text, j) => (
              <p key={j}>{text}</p>
            ))}
          </div>
        ))}
      </div>
      <button
        className="btn btn-success bu-ton"
        style={{
          borderRadius: "50px",
          width: "300px",
          height: "40px",
          marginTop: "50px",
          backgroundColor:'rgba(46, 107, 193, 0.826)'
        }}
        onClick={() => navigate('/login')}
      >
        지금 시작하기
      </button>
    </div>
  );
}
export default App;