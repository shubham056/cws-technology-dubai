import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const CommonFaq = ({ faq }) => {
    console.log("faq", faq)
    return (
        <div className="faq-area ptb-100">
        <h2 style={{textAlign: 'center',marginBottom: 45}}>FAQ</h2>
            <div className="container">
                <div className="faq-accordion accordion-box">
                    {
                        faq.map((item,i) => {
                            return (
                                <Accordion allowZeroExpanded preExpanded={[i]}>
                                    <AccordionItem uuid={i == 0 ? i : null}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                               {item.faq_title}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                        <div dangerouslySetInnerHTML={{__html: item.faq_description}}></div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            )

                        })
                    }

                </div>

                <div className="ticket-box">
                    <h3>Have Any Question in Mind Please Call or Mail Us</h3>

                    <div className="box-one">
                        <i className="ri-customer-service-line"></i>
                        <a href="tel:+971 52 991 0891">+971 52 991 0891</a>
                    </div>

                    <div className="box-two">
                        <i className="ri-earth-line"></i>
                        <a href="mailto:sales@cwstechnology.com">sales@cwstechnology.com</a>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="faq-shape-1">
                <img src="/images/faq/shape-1.png" alt="image" />
            </div>
            <div className="faq-shape-2">
                <img src="/images/faq/shape-2.png" alt="image" />
            </div>
            <div className="faq-shape-3">
                <img src="/images/faq/shape-3.png" alt="image" />
            </div>
            <div className="faq-shape-4">
                <img src="/images/faq/shape-4.png" alt="image" />
            </div>
            <div className="faq-shape-5">
                <img src="/images/faq/shape-5.png" alt="image" />
            </div>
        </div>
    )
}

export default CommonFaq