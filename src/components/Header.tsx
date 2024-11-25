import { Button, Flex, Img, Menu, MenuButton, MenuList, MenuItem, IconButton, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import StyledButton from "./StyledButton";

import { HamburgerIcon } from '@chakra-ui/icons';


interface HeaderProps {
    tokenHomeRef : React.RefObject<HTMLDivElement>;
    tokenServiceRef : React.RefObject<HTMLDivElement>;
    tokenAboutRef : React.RefObject<HTMLDivElement>;
    tokenRef : React.RefObject<HTMLDivElement>;
    tokenRoadmapRef : React.RefObject<HTMLDivElement>;
    contactRef : React.RefObject<HTMLDivElement>;
    language : string;
    setLanguage : React.Dispatch<React.SetStateAction<string>>;
}

const HeaderMenu = ["HOME", "SERVICES", "ABOUT", "TOKEN", "ROADMAP", "CONTACT"];



const Header : FC<HeaderProps> = ({tokenHomeRef, tokenServiceRef, tokenAboutRef, tokenRef, tokenRoadmapRef, contactRef }) => {
    
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>("");
    

    const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth'});
    }

    const scrollHandler = () => {
        if (buttonText === "HOME") {
            scrollToComponent(tokenHomeRef);
        } else if (buttonText === "SERVICES") {
            scrollToComponent(tokenServiceRef);
        } else if (buttonText === "ABOUT") {
            scrollToComponent(tokenAboutRef);
        } else if (buttonText === "ROADMAP") {
            scrollToComponent(tokenRoadmapRef);
        } else if (buttonText === "TOKEN") {
            scrollToComponent(tokenRef);
        } else if (buttonText === "CONTACT") {
            scrollToComponent(contactRef);
        }
    }

    useEffect(() => {
        const setScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', setScroll);
    },[])

    useEffect(() => {
        scrollHandler();
    },[buttonText])

    return (
        <>

        <Flex
            display={["none","none","none","flex","flex","flex","flex"]}
            position="fixed"
            w="100%"
            px={["0","0","0","0","0","50","50"]}// 모바일, 480px이상, 768px이상, 992px이상, 1280px이상, 1536px이상
            py="25px"
            h={isScrolled ? "80px" : "110px"}
            transition="height 0.8s ease, background-color 0.8s ease" //height 속성값 변화할 때 transition 적용
            bgColor={isScrolled ? "#275D38" : "transparent"}
            alignItems="center"
            justifyContent="space-between"
            zIndex={4} // 아래로 넘어갈 때 글자 안보임
        >
            <Flex alignItems="center" color="#333333" position="relative"
            as="a"
            href="/" >
                <Img w="80px" src="images/epepe.png" zIndex={4}/>
                <Text w="160px" fontSize="24px" position="absolute" left="92px" top="20px" color="white">EarthPepe</Text>
            </Flex>
            <Flex h="6vh" justifyContent="center" alignItems="center">
                <Flex gap={["16px","16px","16px","16px","16px","20px","20px"]}>
                {HeaderMenu.map((v,i) => (
                    <StyledButton
                    key={i} 
                    buttonText={buttonText}
                    setButtonText={setButtonText}
                    scrollHandler={scrollHandler}
                    v={v}>{v}</StyledButton>
                ))}
                </Flex>
            </Flex>
            <Flex gap={4} alignItems="center">
                <Button
                    w={["90px","90px","90px","90px","90px","120px","120px"]}
                    h={["30px","30px","30px","30px","30px","36px","36px"]}
                    fontSize={["10px","10px","10px","10px","10px","15px","15px"]} 
                    bgGradient="linear(to-r, #ff3b8f, #ff9a3b)" 
                    color="white"
                    borderRadius="24px"
                    overflow="hidden"
                    as="a" //down
                    href="/documents/EarthPepe_Whitepaper_eng.pdf" //down
                    download="EarthPepe_Whitepaper_eng.pdf" // 다운로드 속성 추가
                    _hover= {{
                        backgroundColor : "#0C0E27",
                        _before : {
                            transform : "translateX(100%)",
                        },
                    }}
                    _before={{
                        content : "''",
                        position : "absolute",
                        top : "0",
                        left : "0",
                        width : "100%",
                        height : "100%",
                        background : "rgba(255, 255, 255, 0.3)",
                        transition : "transform 0.5s ease",
                        transform : "translateX(0%)",
                    }}
                    >WHITE PAPER</Button>
            </Flex>
            
        </Flex>
                
        {/*모바일*/ }

        <Flex 
            w="100%"
            alignItems="center"
            p={4}
            display={["flex","flex","flex","none","none","none","none"]}
            opacity={["1", "1", "1", "0", "0", "0", "0"]}
            justifyContent="space-between"
            zIndex={4}
            mb={3}
            position="relative">
            
            <Img w="80px" src="images/epepe.png" zIndex={4}/>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    color="#333333"
            />
            <MenuList bgColor="#F7F9FC">
                <MenuItem onClick={() => {setButtonText("SERVICES")}} bgColor="#F7F9FC" color="black">
                    SERVICES
                </MenuItem>
                <MenuItem onClick={() => {setButtonText("ABOUT")}} bgColor="#F7F9FC" color="black">
                    ABOUT
                </MenuItem>
                <MenuItem onClick={() => {setButtonText("TOKEN")}} bgColor="#F7F9FC" color="black">
                    TOKEN
                </MenuItem>
                <MenuItem onClick={() => {setButtonText("ROADMAP")}} bgColor="#F7F9FC" color="black">
                    ROADMAP
                </MenuItem>
                <MenuItem onClick={() => {setButtonText("CONTACT")}} bgColor="#F7F9FC" color="black">
                    CONTACT
                </MenuItem>
            </MenuList>
        </Menu>
        </Flex>
        </> 
    )
}

export default Header;