import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 
import { BeatLoader } from "react-spinners";
import { motion, useAnimation } from "framer-motion"; 
import Header from "./components/Header";
import TokenEx from "./components/TokenEx";
import Service from "./components/Service";
import About from "./components/About";
import TokenAllocation from "./components/TokenAllocation";
import TokenRoadMap from "./components/TokenRoadMap";
import Contact from "./components/Contact";


const headerInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const tokenExInVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: -40, transition: { duration: 1.2, delay: 1.0 } },
};

const ServicesInVariants = {
  hidden: { 
    opacity: 0, 
    clipPath: "inset(0 50% 0 50%)", 
  },
  visible: { 
    opacity: 1, 
    clipPath: "inset(0 0% 0 0%)",
    transition: { 
      duration: 0.8, 
      delay: 0.5, 
      ease: "easeOut" 
    }
  },
};

const App = () => {
  const [init, setInit] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [isRender, setIsRender] = useState(false);
  const [language, setLanguage] = useState<string>("EN");

  const tokenHomeRef = useRef<HTMLDivElement>(null);
  const tokenServiceRef = useRef<HTMLDivElement>(null);
  const tokenAboutRef = useRef<HTMLDivElement>(null);
  const tokenRef = useRef<HTMLDivElement>(null);
  const tokenRoadmapRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // 애니메이션 컨트롤을 위해 framer-motion의 useAnimation 훅을 사용합니다.
  const serviceAnimation = useAnimation();
  const aboutAnimation = useAnimation();
  const tokenAnimation = useAnimation();
  const tokenRoadmapAnimation = useAnimation();
  const contactAnimation = useAnimation();

  // 최소 1초 동안 로딩 스피너를 보여주기 위한 타이머 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // tsParticles 초기화
  useEffect(() => {
    if (showSpinner) return;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [showSpinner]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // Intersection Observer로 컴포넌트의 가시성 확인
  useEffect(() => {
    const serviceElement = tokenServiceRef.current;
    const aboutElement = tokenAboutRef.current;
    const tokenElement = tokenRef.current;
    const tokenRoadmapElement = tokenRoadmapRef.current;
    const contactElement = contactRef.current;
  

    const observer = new IntersectionObserver(
      (entries) => {
        // console.log(entries[0].target); //entries[0] : services 컴포넌트, entries[1] : about 컴포넌트
        // console.log(entries.length); // 2
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.target === serviceElement) {
            if (entry.isIntersecting) {
              serviceAnimation.start("visible"); // 서비스가 보일 때 애니메이션 트리거
            }
          } else if (entry.target === aboutElement) {
            if (entry.isIntersecting) {
              aboutAnimation.start("visible"); // 어바웃이 보일 때 애니메이션 트리거
            }
          } else if (entry.target === tokenElement) {
            if (entry.isIntersecting) {
              tokenAnimation.start("visible"); // 어바웃이 보일 때 애니메이션 트리거
            }
          } else if (entry.target === tokenRoadmapElement) {
            if (entry.isIntersecting) {
              tokenRoadmapAnimation.start("visible"); // 어바웃이 보일 때 애니메이션 트리거
            }
          } else if (entry.target === contactElement) {
            if (entry.isIntersecting) {
              contactAnimation.start("visible"); // 어바웃이 보일 때 애니메이션 트리거
            }
          } 
        }
      },
      { threshold: 0.0 } // 요소가 0%라도 보이면 트리거
    );
    
    
    if (serviceElement) {
    console.log("Observing Service Element");
    observer.observe(serviceElement);
    }

    if (aboutElement) {
      console.log("Observing About Element");
      observer.observe(aboutElement);
    }
    
    if (tokenElement) {
      console.log("Observing About Element");
      observer.observe(tokenElement);
    }
    
    if (tokenRoadmapElement) {
      console.log("Observing About Element");
      observer.observe(tokenRoadmapElement);
    }
    
    if (contactElement) {
      console.log("Observing About Element");
      observer.observe(contactElement);
    }

    return () => {
      if (serviceElement) observer.unobserve(serviceElement);
      if (aboutElement) observer.unobserve(aboutElement);
      if (tokenElement) observer.unobserve(tokenElement);
      if (tokenRoadmapElement) observer.unobserve(tokenRoadmapElement);
    };
  }, [isRender]);

  // 로딩 스피너 및 tsParticles 렌더링
  if (showSpinner) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "100%", 
        height: "100vh", 
        backgroundColor: "#F7F9FC", 
      }}>
        <BeatLoader size={20} color={"black"} />
      </div>
    );
  }

  if (!showSpinner && init) {
    return (
      <>
      <div>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: { value: "#f7f9fc" }, // 밝은 배경 색상
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "bubble" },
              onHover: { enable: true, mode: "grab" },
            },
            modes: {
              bubble: { distance: 250, duration: 2, size: 10, opacity: 0.8 },
              grab: { distance: 150, links: { opacity: 1 } },
            },
          },
          particles: {
            color: { value: ["#ff9f43", "#2ecc71", "#3498db", "#9b59b6", "#e74c3c"] }, // 다채로운 색상
            links: {
              color: "#cccccc",
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" }, // 부드러운 움직임
              speed: 3,
            },
            number: { density: { enable: true }, value: 100 }, // 입자 수 조정
            opacity: { value: { min: 0.3, max: 0.8 } }, // 투명도 다양화
            shape: { type: ["circle", "star"] }, // 별 모양 추가
            size: { value: { min: 3, max: 7 } }, // 입자 크기 다양화
          },
          detectRetina: true,
        }}
      />
      <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerInVariants}
      >
        <Header
          tokenHomeRef={tokenHomeRef}
          tokenAboutRef={tokenAboutRef}
          tokenRoadmapRef={tokenRoadmapRef}
          tokenServiceRef={tokenServiceRef}
          tokenRef={tokenRef}
          contactRef={contactRef}
          language={language}
          setLanguage={setLanguage}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={tokenExInVariants}
        ref={tokenHomeRef}
      >
        <TokenEx language={language}/> 
      </motion.div>

      <motion.div
        initial="hidden"
        animate={serviceAnimation} // 애니메이션 컨트롤러 적용
        variants={ServicesInVariants}
        ref={tokenServiceRef}
      >
        <Service isRender={isRender} setIsRender={setIsRender} tokenExInVariants={tokenExInVariants} language={language}/>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={aboutAnimation} // 애니메이션 컨트롤러 적용
        variants={ServicesInVariants}
        ref={tokenAboutRef}
      >
        <About isRender={isRender} tokenExInVariants={tokenExInVariants} language={language}/>
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate={tokenAnimation} // 애니메이션 컨트롤러 적용
        variants={ServicesInVariants}
        ref={tokenRef}
      >
        <TokenAllocation isRender={isRender} tokenExInVariants={tokenExInVariants} language={language}/>
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate={tokenRoadmapAnimation} // 애니메이션 컨트롤러 적용
        variants={ServicesInVariants}
        ref={tokenRoadmapRef}
      >
        <TokenRoadMap isRender={isRender} tokenExInVariants={tokenExInVariants} language={language}/>
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate={contactAnimation} // 애니메이션 컨트롤러 적용
        variants={ServicesInVariants}
        ref={contactRef}
      >
        <Contact/>
      </motion.div>
      </>
      </div>
      </>
    );
  }

  return null;
};

export default App;

