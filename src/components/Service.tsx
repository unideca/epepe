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
        <Flex
            w="100%"
            minH="100vh"
            color="#333333"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
          <Box textAlign="center" p={10}>
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
          <GridItem textAlign="center" bg="#264A20" p={8} borderRadius="md">
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
            <Text fontSize="20px" fontWeight="bold" mb={2} color="white">
              Choose your wallet
            </Text>
            <Text color="white" mb={4} h="72px">
              A wallet is necessary for people wanting to use, trade, or hold EarthPepe. You can pick a wallet.
            </Text>
          </GridItem>
          <GridItem textAlign="center" bg="#264A20" p={8} borderRadius="md">
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
            <Text fontSize="20px" fontWeight="bold" mb={2} color="white">
              Configure your wallet
            </Text>
            <Text color="white" mb={4} h="72px">
              After downloading, you can configure your wallet according to our guide.
            </Text>
            <Button 
            bg="#FFD700"
            as="a" //down
            href="/documents/guide.pdf" //down
            download="guide.pdf" // 다운로드 속성 추가
            >Guide</Button>
          </GridItem>
          <GridItem textAlign="center" bg="#264A20" p={8} borderRadius="md">
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
            <Text fontSize="20px" fontWeight="bold" mb={2} color="white">
              Get some EPEPE
            </Text>
            <Text color="white" mb={4} h="72px">
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
        
        </>
    )
}

export default Services;