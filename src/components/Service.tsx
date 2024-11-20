import { Box, Button, Flex, Grid, GridItem, Image, Img, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import serviceTopKR from "../data/servicesTopKR.json"
import serviceBottomKR from "../data/servicesBottomKR.json"
import { motion, useAnimation, Variants } from "framer-motion"; 

interface ServicesProps {
    setIsRender : React.Dispatch<React.SetStateAction<boolean>>;
    tokenExInVariants : Variants;
    isRender : boolean;
    language : string;
}

const epepeImg = [
    {
    "image" : "images/E1.png",
    },{
    "image" : "images/P1.png",
    },{
    "image" : "images/E2.png",
    },{
    "image" : "images/P2.png",
    },{
    "image" : "images/E3.png",
    },
]

const Services : FC<ServicesProps> = ({isRender, setIsRender, tokenExInVariants, language}) => {
    const serviceTopAnimation = useAnimation();
    const serviceBottomAnimation = useAnimation();
    
    useEffect(() => {
        setIsRender(true); //컴포넌트가 렌더링 될 때 발생하는 시간 차를 감지 하기 위함
    },[])

    useEffect(() => {
        const targetElement = document.querySelector('#serviceTop');
        const targetBottomElement = document.querySelector('#serviceBottom');
        console.log(targetElement);
        const observer = new IntersectionObserver(
            (entries) => {
                for(let i=0; i<entries.length; i++) {
                    const entry = entries[0];
                    console.log(entry.target);
                    if(entry.target === targetElement) {
                        if(entry.isIntersecting) {
                            serviceTopAnimation.start("visible");
                            console.log("serviceTop visible")
                        }
                    }
                    
                    if(entry.target === targetBottomElement) {
                        if(entry.isIntersecting) {
                            serviceBottomAnimation.start("visible");
                            console.log("serviceBottom visible")
                        }
                    }
                }
                
            },
            {threshold : 0.1}
        );
        //entries추가
        if(targetElement) {
            console.log("Observing Service Top Element");
            observer.observe(targetElement);
        }
        if(targetBottomElement) {
            console.log("Observing Service Bottom Element");
            observer.observe(targetBottomElement);
        }
        
        return () => {
            if (targetElement) observer.unobserve(targetElement);
            if (targetBottomElement) observer.unobserve(targetBottomElement);
        } //이 코드가 있으면 내려갈 때 1번 올라올 때 1번 29번 줄이 출력
          //return 함수가 없을 때 내려갈 때 3번 올라올 때 3번 29번 줄이 출력
          //정확한 상태 감지하려면 정리함수 사용해주는 것을 권장
    },[isRender])
    
        return (  
        <>
        {language === "EN" ? <Flex
            w="100%"
            minH="100vh"
            color="#333333"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Box textAlign="center" bg="#f9fafb" p={10}>
      {/* 제목 */}
      <Text fontSize="36px" fontWeight="bold" mb={8}>
        Getting Started
      </Text>
      
      {/* 3단계 카드 */}
      <Grid
        templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={8}
        mb={12}
        maxW="1200px"
        mx="auto"
      >
        <GridItem textAlign="center" bg="#FFF7E0" p={8} borderRadius="md">
          <Text
            bg="#FFD700"
            color="black"
            fontSize="18px"
            fontWeight="bold"
            borderRadius="full"
            display="inline-block"
            px={4}
            py={2}
            mb={4}
          >
            01
          </Text>
          <Text fontSize="20px" fontWeight="bold" mb={2}>
            Choose your wallet
          </Text>
          <Text color="#333333" mb={4} h="72px">
            A wallet is necessary for people wanting to use, trade, or hold EarthPepe. You can pick a wallet.
          </Text>
        </GridItem>
        <GridItem textAlign="center" bg="#FFF7E0" p={8} borderRadius="md">
          <Text
            bg="#FFD700"
            color="black"
            fontSize="18px"
            fontWeight="bold"
            borderRadius="full"
            display="inline-block"
            px={4}
            py={2}
            mb={4}
          >
            02
          </Text>
          <Text fontSize="20px" fontWeight="bold" mb={2}>
            Configure your wallet
          </Text>
          <Text color="#333333" mb={4} h="72px">
            After downloading, you can configure your wallet according to our guide.
          </Text>
          <Button 
          bg="#FFD700"
          as="a" //down
          href="/documents/guide.pdf" //down
          download="guide.pdf" // 다운로드 속성 추가
          >Guide</Button>
        </GridItem>
        <GridItem textAlign="center" bg="#FFF7E0" p={8} borderRadius="md">
          <Text
            bg="#FFD700"
            color="black"
            fontSize="18px"
            fontWeight="bold"
            borderRadius="full"
            display="inline-block"
            px={4}
            py={2}
            mb={4}
          >
            03
          </Text>
          <Text fontSize="20px" fontWeight="bold" mb={2}>
            Get some EPEPE
          </Text>
          <Text color="#333333" mb={4} h="72px">
            There’s lots of ways to get your hands on some EPEPE
          </Text>
        </GridItem>
      </Grid>

      <Flex justifyContent="center">
        <motion.div
            initial="hidden"
            animate={serviceTopAnimation}
            variants={tokenExInVariants}
            >
            <Flex alignItems="center" mt={20}>
                {epepeImg.map((v) => (
                    <Image
                    src={v.image}
                    alt="DOGE"
                    width={["55px","80px","140px","190px","200px","200px","200px"]}
                    zIndex={2}
                    id="serviceTop"
                    />
                ))}
            </Flex>
        </motion.div>
        
      </Flex>
    </Box>
        </Flex> 
        
        : 
        
        <Flex
            w="100%"
            minH="100vh"
            color="#333333"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={12}>
                우리의 솔루션을 만나보세요
            </Text>
            <Text color="#333333" textAlign="center">
            비트코인의 확장성, 거래 속도, 에너지 효율성 등 여러 가지 한계점이 존재합니다. <br/>이러한 문제를 해결하고자 새로운 형태의 블록체인 기반 프로젝트가 등장하고 있으며, 그 중 하나가 “GPT BITCOIN(GBIT)”입니다.
            </Text>
            <motion.div
            initial="hidden"
            animate={serviceTopAnimation}
            variants={tokenExInVariants}
            >
                <Grid templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)']} w={["330px","330px","780px","1100px","1100px","1100px","1100px"]} mt={20} gap={8} id="serviceTop" justifyItems="center">
                    {serviceTopKR.map((v, i) => (
                        <GridItem w={["320px","320px","320px","320px","340px","340px","340px"]} minH="400px" p="20px" flexDir="column" display="flex" justifyContent="center" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" h="48px" textAlign="center" >
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center" h="330px">
                                    {v.content}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                    {serviceBottomKR.map((v, i) => (
                        <GridItem w ={["320px","320px","320px","320px","340px","340px","340px"]} minH="400px" p="20px" flexDir="column" display="flex" justifyContent="center" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" h="48px" textAlign="center">
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center" h="350px">
                                    {v.content}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </motion.div>
        </Flex>}
        </>
    )
}

export default Services;