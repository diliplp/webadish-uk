'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.scss';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Frequently Asked Questions</h2>
                <div className={styles.list}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => toggleIndex(index)}
                        >
                            <div className={styles.question}>
                                <h3>{item.question}</h3>
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                            <div className={styles.answer}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
