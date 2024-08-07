import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
    OurServicesListSectionDataWrapper,
    OurServicesListSectionTextsAreaWrapper,
    OurServicesListSectionWrapper,
    OurServicesListSectionName,
    OurServicesListSectionTitle,
    OurServicesListSectionSubtitle,
    OurServicesListSectionSampelsWrapper,
} from "./index.style"

import OurServicesListSectionSampel from "../../../components/ourServicesListSampel"

const OurServicesListSection = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)

    return (
        <OurServicesListSectionWrapper
            id="services-section"
            as={motion.div}
            ref={ref1}
            initial={{
                y: 100,
                opacity: 0,
            }}
            animate={{
                y: inView1 ? 0 : 100,
                opacity: inView1 ? 1 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
            }}
        >
            <OurServicesListSectionDataWrapper>
                <OurServicesListSectionTextsAreaWrapper>
                    <OurServicesListSectionName>
                        Our services list
                    </OurServicesListSectionName>
                    <OurServicesListSectionTitle>
                        Everything you need to increase sales
                    </OurServicesListSectionTitle>
                    <OurServicesListSectionSubtitle>
                        With us, you don't need to know about technical matters
                        or professional nomenclature. Just choose what you think
                        you need, and we will take care of selecting the right
                        technology, etc.
                    </OurServicesListSectionSubtitle>
                </OurServicesListSectionTextsAreaWrapper>
                <OurServicesListSectionSampelsWrapper>
                    <OurServicesListSectionSampel />
                </OurServicesListSectionSampelsWrapper>
            </OurServicesListSectionDataWrapper>
        </OurServicesListSectionWrapper>
    )
}
export default OurServicesListSection
