import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";
import {motion} from "framer-motion";

interface TokenExProps {
    language : string;
}

const MotionImg = motion(Img);

const TokenEx : FC<TokenExProps> = () => {
  
    return (
        <>
        <Flex w="full" minH="70vh" alignItems="center"> 
            <Flex mx="auto" mt={56}>
                <Flex pl={8} alignItems="center">                  
                    <Flex w="full" justifyContent="center">
                        <Flex flexDir="column" justifyContent="center" alignItems="center">
                        <MotionImg
                            h={["400px","400px","400px","0px","0px","0px","0px","0px"]}
                            src="images/epepe1.png"
                            zIndex={2}
                            position="relative"
                            initial={{ opacity: 1, y: -20 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 2,
                                ease: "easeOut",
                                repeat: Infinity, // 무한 반복 설정
                                repeatType: "loop"
                            }}
                        />
                        <Text w={["320px","400px","400px","400px","400px","400px","400px"]} fontSize={["32px","32px","32px","32px","32px","40px","40px"]} fontWeight="bold" color="#333333">
                            Earth Pepe is a new paradigm in meme coin trading
                        </Text>
                        {/* <Text w="400px" fontSize={["16px","16px","16px","16px","16px","24px","24px"]} color="#333333" mt={4} mb={4}>
                            Token Presale is 
                            <mark style={{
                                marginLeft: "10px",
                                padding: "0px 12px",
                                background: "linear-gradient(90deg, #FF61C6, #FFC542)", // 그라데이션 색상
                                color: "white", // 텍스트 색상
                                borderRadius: "12px", // 둥근 모서리
                                fontWeight: "bold", // 텍스트 굵게
                                display: "inline-block" // 버튼처럼 보이도록
                                }}>
                                Live
                            </mark>
                        </Text> */}
                        <Flex py={5} gap={4} w={["340px","400px","400px","400px","400px","400px","400px"]}>
                            <Img src="images/t_logo.png" w={["100px","120px","120px","120px","120px","120px","120px"]}/>
                            <Img src="images/x_logo.png"w={["100px","120px","120px","120px","120px","120px","120px"]}/>
                            <Img src="images/medium_logo.png" w={["100px","120px","120px","120px","120px","120px","120px"]}/>
                        </Flex>
                        <Flex gap={3} py={5} w={["340px","400px","400px","400px","400px","400px","400px"]} justifyContent="center">
                        <Button
                            h={["40px","40px","40px","40px","40px","52px","52px"]}
                            bgGradient="linear(to-r, #1a3b8f, #1a8f3b)"
                            color="white"
                            borderRadius="24px"
                            padding="12px 24px"
                            fontWeight="bold"
                            as="a" //down
                            href="/documents/EarthPepe_Whitepaper_eng.pdf" //down
                            download="EarthPepe_Whitepaper_eng.pdf" // 다운로드 속성 추가
                            overflow="hidden" //overflow가 들어가면 버튼 이외의 영역을 잘라줘서 무빙 그라데이션 효과
                            _hover={{
                                backgroundColor : "#0C0E27",
                                _before: {
                                  transform: "translateX(100%)", // 호버 시 효과 시작 지점으로 부터 흰색 줄이 해당 버튼 어디까지 갈지
                                },
                              }}
                            _before={{
                            content: "''",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            background: "rgba(255, 255, 255, 0.3)", // 흰색 반투명 줄 효과
                            transition: "transform 0.5s ease", // 부드럽게 애니메이션 적용
                            transform: "translateX(0%)", // 효과가 어디서 부터 시작할건지
                            }}
                            >
                            WHITEPAPER →
                        </Button>
                        
                        {/* <Button
                            h={["40px","40px","40px","40px","40px","52px","52px"]}
                            bgGradient="linear(to-r, #1a3b8f, #1a8f3b)"
                            color="#333333"
                            borderRadius="24px"
                            padding="12px 24px"
                            fontWeight="bold"
                            overflow="hidden" //overflow가 들어가면 버튼 이외의 영역을 잘라줘서 무빙 그라데이션 효과
                            _hover={{
                                backgroundColor : "#0C0E27",
                                _before: {
                                  transform: "translateX(100%)", // 호버 시 효과 시작 지점으로 부터 흰색 줄이 해당 버튼 어디까지 갈지
                                },
                              }}
                              _before={{
                                content: "''",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                background: "rgba(255, 255, 255, 0.3)", // 흰색 반투명 줄 효과
                                transition: "transform 0.5s ease", // 부드럽게 애니메이션 적용
                                transform: "translateX(0%)", // 효과가 어디서 부터 시작할건지
                              }}
                            >
                            BUY TOKEN NOW →
                        </Button> */}
                        </Flex>
                        {/* <Text w="400px" fontSize="16px" color="#333333" mt={4}>WE ACCEPT :</Text>
                        <Flex w="400px" gap={8}>
                            <Flex fontSize="20px" color="#333333" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/btc.png"/>BTC</Flex>
                            <Flex fontSize="20px" color="#333333" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/eth.png"/>ETH</Flex>
                            <Flex fontSize="20px" color="#333333" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/bnb.png"/>BNB</Flex>
                            <Flex fontSize="20px" color="#333333" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/usdt.png"/>USDT</Flex>
                        </Flex> */}
                        </Flex>
                        <MotionImg
                            h={["0px","0px","0px","440px","440px","440px","440px","440px"]}
                            ml={12}
                            src="images/epepe1.png"
                            zIndex={2}
                            position="relative"
                            initial={{ opacity: 1, y: -20 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 2,
                                ease: "easeOut",
                                repeat: Infinity, // 무한 반복 설정
                                repeatType: "loop"
                            }}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex> 
        
        </>
        
    )
}

export default TokenEx;