import { Box, Flex, Text, IconButton, useMediaQuery } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface AboutProps {
    isRender: boolean;
    tokenExInVariants: Variants;
    language: string;
}

const TokenRoadMap: FC<AboutProps> = ({ isRender, tokenExInVariants }) => {
    const aboutMidAnimation = useAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const targetElement = document.querySelector('#roadmap');
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.target === targetElement) {
                    if (entry.isIntersecting) {
                        aboutMidAnimation.start("visible");
                    }
                }
            },
            { threshold: 0.0 }
        );
        if (!targetElement) return;
        observer.observe(targetElement);

        return () => {
            observer.unobserve(targetElement);
        }
    }, [isRender]);

    const roadmapItems = [
        { quarter: "Q1, Q2 2025", details: ["Project design and team formation", "Blockchain platform design and development", "Building a community and user base", "Securing investors and partners"], bg: "#F1C40F"},
        { quarter: "Q3, Q4 2025", details: ["Prototype launch and testing", "Deployment of the initial version of the GPT BITCOIN platform", "Strengthening regulatory and legal compliance", "Optimization of smart contracts and transactions using GPT technology"]},
        { quarter: "2026", details: ["Technical and functional improvements", "Enhancing platform stability and security", "Advancing and expanding the automation capabilities of smart contracts", "Adding multilingual support and various currency functions"] },
        { quarter: "2027", details: ["Reforming the governance system to enhance community decision-making participation", "Optimization through the integration of AI and blockchain technology and introduction of new service models", "Implementation of fully automated transaction systems through smart contracts", "Global marketing and user expansion"] },
        { quarter: "2028 ~", details: ["Policy adjustments and feedback collection in line with global market changes", "Provision of market forecasts and automated investment strategies using AI technology", "Appropriate response to regulatory changes in various countries", "Investor protection and provision of sustainable financial services"] },
    ];
    
   

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : roadmapItems.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < roadmapItems.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <>
        <Flex
            w="100%"
            minH="70vh"
            color="#333333"
            pt={32}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={20}>
                Roadmap
            </Text>
            <motion.div
                initial="hidden"
                animate={aboutMidAnimation}
                variants={tokenExInVariants}
            >
                <Flex
                    flexDir="column"
                    alignItems="center"
                    id="roadmap"
                    w={["350px","350px", "780px","1100px","1100px", "1100px", "1100px"]}
                    mx="auto"
                    gap={12}
                >
                    <Flex
                        position="relative"
                        alignItems="center"
                        w="100%"
                        justifyContent="center"
                        mb={10}
                    >
                        {isTabletOrSmaller ? (
                            <>
                                {/* Left Arrow */}
                                <IconButton
                                    icon={<ArrowBackIcon />}
                                    onClick={handlePrev}
                                    position="absolute"
                                    left={0}
                                    bg="transparent"
                                    color="#333333"
                                    fontSize="24px"
                                    _hover={{ bg: "gray.700" }}
                                    aria-label="Previous"
                                    
                                />

                                {/* Single Timeline Item for Tablet/Mobile */}
                                <Flex
                                    flexDir="column"
                                    alignItems="center"
                                    textAlign="center"
                                    w="200px"
                                    h="488px"
                                    bg={roadmapItems[currentIndex].bg || "transparent"}
                                    p={4}
                                    borderRadius="md"
                                >
                                    <Box bg="pink.400" w={8} h={8} borderRadius="full" mb={4} />
                                    <Text fontWeight="bold" mb={4}>{roadmapItems[currentIndex].quarter}</Text>
                                    <Box>
                                        {roadmapItems[currentIndex].details.map((detail, i) => (
                                            <Text fontSize="sm" key={i} mb={2}>
                                                - {detail}
                                            </Text>
                                        ))}
                                    </Box>
                                </Flex>

                                {/* Right Arrow */}
                                <IconButton
                                    icon={<ArrowForwardIcon />}
                                    onClick={handleNext}
                                    position="absolute"
                                    right={0}
                                    bg="transparent"
                                    fontSize="24px"
                                    color="#333333"
                                    _hover={{ bg: "gray.700" }}
                                    aria-label="Next"
                                />
                            </>
                        ) : (
                            /* Full Timeline for Desktop */
                            roadmapItems.map((item, index) => (
                                <Flex
                                    key={index}
                                    flexDir="column"
                                    alignItems="center"
                                    textAlign="center"
                                    w="200px"
                                    h="488px"
                                    bg={item.bg || "transparent"}
                                    p={4}
                                    borderRadius="md"
                                >
                                    <Box bg="pink.400" w={8} h={8} borderRadius="full" mb={4} />
                                    <Text fontWeight="bold" mb={4}>{item.quarter}</Text>
                                    <Box>
                                        {item.details.map((detail, i) => (
                                            <Text fontSize="sm" key={i} mb={2}>
                                                - {detail}
                                            </Text>
                                        ))}
                                    </Box>
                                </Flex>
                            ))
                        )}
                    </Flex>
                </Flex>
            </motion.div>
        </Flex> 
        
       
        </>
       
    );
};

export default TokenRoadMap;
